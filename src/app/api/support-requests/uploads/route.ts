import {
  DeleteObjectsCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const maxFiles = 5;
const maxFileSize = 10 * 1024 * 1024;
const maxTotalSize = 30 * 1024 * 1024;
const categories: Record<string, string> = {
  "Education & Empowerment": "education",
  "Annadhan & Nutrition": "food",
  "Stand with our Soldiers": "soldiers",
  "Environment & Welfare": "environment",
  "Culture & Heritage": "culture",
  "Education for Children & Students": "education",
  "Support for Elderly People": "elderly",
  "Healthcare Support": "healthcare",
  "Food & Essentials": "food",
  "Opportunities for Women": "women",
  "Emergency & Crisis Support": "emergency",
};
const fileTypes: Record<string, { extension: string; extensions: string[] }> = {
  "application/pdf": { extension: "pdf", extensions: [".pdf"] },
  "image/jpeg": { extension: "jpg", extensions: [".jpg", ".jpeg"] },
  "image/png": { extension: "png", extensions: [".png"] },
};

type UploadFileInput = {
  name: string;
  type: string;
  size: number;
};

type StorageConfig = {
  bucket: string;
  client: S3Client;
};

function getStorageConfig(): StorageConfig | null {
  const { S3_BUCKET, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY } =
    process.env;
  if (!S3_BUCKET || !S3_REGION || !S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY) {
    return null;
  }

  const endpoint = process.env.S3_ENDPOINT;
  return {
    bucket: S3_BUCKET,
    client: new S3Client({
      region: S3_REGION,
      ...(endpoint ? { endpoint } : {}),
      forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
      credentials: {
        accessKeyId: S3_ACCESS_KEY_ID,
        secretAccessKey: S3_SECRET_ACCESS_KEY,
      },
    }),
  };
}

function hasSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;

  let originUrl: URL;
  try {
    originUrl = new URL(origin);
  } catch {
    return false;
  }
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    .trim()
    .toLowerCase();
  const requestProtocol = forwardedProtocol
    ? `${forwardedProtocol}:`
    : new URL(request.url).protocol;

  return (
    originUrl.host.toLowerCase() === host.toLowerCase() &&
    originUrl.protocol === requestProtocol
  );
}

function isUploadFileInput(value: unknown): value is UploadFileInput {
  if (!value || typeof value !== "object") return false;
  const file = value as Record<string, unknown>;
  if (
    typeof file.name !== "string" ||
    file.name.length > 200 ||
    typeof file.type !== "string" ||
    typeof file.size !== "number" ||
    !Number.isInteger(file.size) ||
    file.size < 1 ||
    file.size > maxFileSize
  ) {
    return false;
  }

  const type = fileTypes[file.type];
  const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
  return Boolean(type?.extensions.includes(extension));
}

function isUploadKeys(
  value: unknown,
): value is { requestId: string; keys: string[] } {
  if (!value || typeof value !== "object") return false;
  const payload = value as Record<string, unknown>;
  if (
    typeof payload.requestId !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      payload.requestId,
    ) ||
    !Array.isArray(payload.keys) ||
    payload.keys.length < 1 ||
    payload.keys.length > maxFiles ||
    !payload.keys.every((key) => typeof key === "string")
  ) {
    return false;
  }

  const keyPattern = new RegExp(
    `^support-requests/(education|elderly|healthcare|food|women|emergency|soldiers|environment|culture)/${payload.requestId}/[0-9a-f-]{36}\\.(pdf|jpg|png)$`,
    "i",
  );
  return payload.keys.every((key) => keyPattern.test(key));
}

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return Response.json({ error: "Request origin could not be verified." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Expected a JSON upload request." }, { status: 415 });
  }

  const storage = getStorageConfig();
  if (!storage) {
    return Response.json(
      {
        error:
          "Secure document uploads are not configured yet. Please remove the files and submit without documents, or contact the foundation.",
      },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "The upload request is invalid." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "The upload request is invalid." }, { status: 400 });
  }
  const input = payload as Record<string, unknown>;
  const category =
    typeof input.category === "string" ? categories[input.category] : undefined;
  if (
    !category ||
    !Array.isArray(input.files) ||
    input.files.length < 1 ||
    input.files.length > maxFiles ||
    !input.files.every(isUploadFileInput)
  ) {
    return Response.json(
      { error: "Choose up to 5 valid PDF, JPG or PNG documents." },
      { status: 400 },
    );
  }

  const files = input.files as UploadFileInput[];
  if (files.reduce((total, file) => total + file.size, 0) > maxTotalSize) {
    return Response.json(
      { error: "The total size of all documents must be 30 MB or less." },
      { status: 400 },
    );
  }

  const requestId = randomUUID();
  try {
    const uploads = await Promise.all(
      files.map(async (file) => {
        const type = fileTypes[file.type];
        const key = `support-requests/${category}/${requestId}/${randomUUID()}.${type.extension}`;
        const post = await createPresignedPost(storage.client, {
          Bucket: storage.bucket,
          Key: key,
          Expires: 600,
          Fields: {
            "Content-Type": file.type,
            success_action_status: "204",
          },
          Conditions: [
            ["content-length-range", file.size, file.size],
            ["eq", "$Content-Type", file.type],
            ["eq", "$success_action_status", "204"],
          ],
        });

        return { key, url: post.url, fields: post.fields };
      }),
    );

    return Response.json(
      { requestId, uploads },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json(
      {
        error:
          "A secure upload could not be prepared. Please try again or contact the foundation.",
      },
      { status: 502 },
    );
  }
}

export async function DELETE(request: Request) {
  if (!hasSameOrigin(request)) {
    return Response.json({ error: "Request origin could not be verified." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Expected a JSON cleanup request." }, { status: 415 });
  }

  const storage = getStorageConfig();
  if (!storage) {
    return Response.json(
      { error: "Private document storage is not configured." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "The cleanup request is invalid." }, { status: 400 });
  }
  if (!isUploadKeys(payload)) {
    return Response.json({ error: "The cleanup request is invalid." }, { status: 400 });
  }

  try {
    const result = await storage.client.send(
      new DeleteObjectsCommand({
        Bucket: storage.bucket,
        Delete: {
          Objects: payload.keys.map((Key) => ({ Key })),
          Quiet: true,
        },
      }),
    );
    if (result.Errors?.length) {
      return Response.json(
        { error: "Some temporary uploaded files could not be removed." },
        { status: 502 },
      );
    }
    return new Response(null, { status: 204 });
  } catch {
    return Response.json(
      { error: "Temporary uploads could not be removed." },
      { status: 502 },
    );
  }
}
