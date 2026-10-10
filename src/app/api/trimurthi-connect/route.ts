import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const baseFields = {
  name: z.string().trim().min(2).max(120),
  mobile: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .regex(/^(?=.*[0-9])[+0-9(). -]+$/),
  email: z.union([z.literal(""), z.email().max(150)]),
};

const requestSchema = z.discriminatedUnion("connection", [
  z
    .object({
      connection: z.literal("Professional Connect"),
      ...baseFields,
      profession: z.enum([
        "Student",
        "Working Professional",
        "Teacher / Educator",
        "Doctor / Healthcare Professional",
        "Business Owner / Entrepreneur",
        "Social Worker / NGO Professional",
        "Government Employee",
        "Freelancer / Consultant",
        "Other",
      ]),
      otherProfession: z.string().trim().max(120),
    })
    .strict()
    .refine(
      (data) =>
        data.profession !== "Other" || data.otherProfession.length >= 2,
      { path: ["otherProfession"] },
    ),
  z
    .object({
      connection: z.literal("Business Connect"),
      ...baseFields,
    })
    .strict(),
]);

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

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return Response.json({ error: "This request could not be verified." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 10_000) {
    return Response.json({ error: "The submitted enquiry is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Submit a valid enquiry form." }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { error: "Check the required fields and submit your enquiry again." },
      { status: 400 },
    );
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONNECT_REQUEST_TO } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONNECT_REQUEST_TO) {
    return Response.json(
      {
        error:
          "Online enquiry submission is not configured yet. Please contact the foundation directly.",
      },
      { status: 503 },
    );
  }

  const data = parsed.data;
  const professionDetails =
    data.connection === "Professional Connect"
      ? [
          `Profession: ${data.profession}`,
          ...(data.profession === "Other"
            ? [`Other profession: ${data.otherProfession}`]
            : []),
        ]
      : [];
  const text = [
    `Connection enquiry: ${data.connection}`,
    `Name: ${data.name}`,
    `Mobile: ${data.mobile}`,
    `Email: ${data.email || "Not provided"}`,
    ...professionDetails,
  ].join("\n");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONNECT_REQUEST_TO],
        ...(data.email ? { reply_to: data.email } : {}),
        subject: `${data.connection} enquiry`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error("[trimurthi-connect] Email provider request failed.", error);
    return Response.json(
      { error: "We could not send your enquiry. Please try again later." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error(
      `[trimurthi-connect] Email provider rejected the request (HTTP ${response.status}).`,
    );
    return Response.json(
      { error: "We could not send your enquiry. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ success: true }, { status: 201 });
}
