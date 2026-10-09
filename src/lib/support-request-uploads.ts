export const maxFiles = 5;
export const maxFileSize = 10 * 1024 * 1024;
export const maxTotalSize = 30 * 1024 * 1024;
const allowedFileTypes = new Map([
  ["application/pdf", [".pdf"]],
  ["image/jpeg", [".jpg", ".jpeg"]],
  ["image/png", [".png"]],
]);

type UploadTarget = {
  key: string;
  url: string;
  fields: Record<string, string>;
};

type UploadBatch = {
  requestId: string;
  uploads: UploadTarget[];
};

export type UploadReference = {
  requestId: string;
  keys: string[];
};

function isUploadBatch(value: unknown): value is UploadBatch {
  if (!value || typeof value !== "object") return false;
  const batch = value as Record<string, unknown>;
  if (
    typeof batch.requestId !== "string" ||
    !Array.isArray(batch.uploads)
  ) {
    return false;
  }

  return batch.uploads.every((upload) => {
    if (!upload || typeof upload !== "object") return false;
    const target = upload as Record<string, unknown>;
    return (
      typeof target.key === "string" &&
      typeof target.url === "string" &&
      !!target.fields &&
      typeof target.fields === "object" &&
      !Array.isArray(target.fields) &&
      Object.values(target.fields).every(
        (field) => typeof field === "string",
      )
    );
  });
}

export function validateSupportingFile(file: File): string {
  const extensions = allowedFileTypes.get(file.type);
  const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;

  if (!extensions?.includes(extension)) {
    return `${file.name}: choose a PDF, JPG or PNG file.`;
  }
  if (file.size === 0) return `${file.name}: the file is empty.`;
  if (file.size > maxFileSize) {
    return `${file.name}: each file must be 10 MB or smaller.`;
  }
  return "";
}

export async function uploadSupportingDocuments(
  category: string,
  files: File[],
): Promise<UploadReference> {
  if (
    files.length < 1 ||
    files.length > maxFiles ||
    files.some(validateSupportingFile) ||
    files.reduce((total, file) => total + file.size, 0) > maxTotalSize
  ) {
    throw new Error("Choose up to 5 PDF, JPG or PNG files, 10 MB each and 30 MB total.");
  }

  const ticketResponse = await fetch("/api/support-requests/uploads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category,
      files: files.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
      })),
    }),
  });
  const ticketPayload: unknown = await ticketResponse.json().catch(() => null);
  if (!ticketResponse.ok || !isUploadBatch(ticketPayload)) {
    const message =
      ticketPayload &&
      typeof ticketPayload === "object" &&
      "error" in ticketPayload &&
      typeof ticketPayload.error === "string"
        ? ticketPayload.error
        : "Secure upload could not be prepared. Please try again or contact the foundation.";
    throw new Error(message);
  }

  if (ticketPayload.uploads.length !== files.length) {
    throw new Error("Secure upload could not be prepared. Please try again.");
  }

  const results = await Promise.allSettled(
    files.map(async (file, index) => {
      const target = ticketPayload.uploads[index];
      const form = new FormData();
      Object.entries(target.fields).forEach(([name, value]) => form.append(name, value));
      form.append("file", file);
      const response = await fetch(target.url, { method: "POST", body: form });
      if (!response.ok) throw new Error("A document could not be uploaded.");
    }),
  );

  const failed = results.find(
    (result): result is PromiseRejectedResult => result.status === "rejected",
  );
  if (failed) {
    let cleanupMessage = "";
    try {
      const cleanup = await fetch("/api/support-requests/uploads", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: ticketPayload.requestId,
          keys: ticketPayload.uploads.map((upload) => upload.key),
        }),
      });
      if (!cleanup.ok) {
        cleanupMessage =
          " Some files may remain in private storage; please contact the foundation before retrying.";
      }
    } catch {
      cleanupMessage =
        " Some files may remain in private storage; please contact the foundation before retrying.";
    }
    throw new Error(
      `Document upload did not complete. Please try again.${cleanupMessage}`,
      { cause: failed.reason },
    );
  }

  return {
    requestId: ticketPayload.requestId,
    keys: ticketPayload.uploads.map((upload) => upload.key),
  };
}

export async function removeUploadedDocuments(
  reference: UploadReference,
): Promise<void> {
  const response = await fetch("/api/support-requests/uploads", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reference),
  });
  if (!response.ok) {
    throw new Error("Uploaded documents could not be removed from private storage.");
  }
}
