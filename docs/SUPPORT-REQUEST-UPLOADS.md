# Private support-request document uploads

The support-request forms require at least one PDF, JPG or PNG document relevant to the selected category. Examples include a school fee receipt or admission proof for education, a medical report or prescription for healthcare, and a service/discharge record for soldiers’ family support. The browser uploads files directly to a private S3-compatible bucket using short-lived presigned POSTs. The application server never proxies file contents. Upload limits are five files, 10 MiB per file and 30 MiB total. A request email contains random storage keys, not document attachments. Do not request or upload unrelated identity documents.

## Before enabling uploads

Do not enable uploads until the foundation has approved a privacy contact, access procedure, retention/deletion schedule and incident-response procedure. Applicants may include sensitive medical or financial information. Request only the documents relevant to the selected support category; do not request Aadhaar as a general requirement.

1. Create a dedicated private bucket. Block all public access and enable default server-side encryption. Do not make uploaded objects public.
2. Configure a lifecycle rule for `support-requests/` based on the foundation-approved retention schedule. If bucket versioning is enabled, expire noncurrent versions too. Successfully uploaded documents are not deleted by the application after a request is sent.
3. Give the application a dedicated service identity scoped to `support-requests/*`, with only `s3:PutObject` and `s3:DeleteObject` permissions. Give staff who review requests separate, audited read access; do not add read credentials to the application.
4. Configure bucket CORS for the exact HTTPS website origin and `POST` requests. Allow the headers required by browser form uploads; avoid wildcard origins in production.
5. Set the server-side environment variables from `.env.example`: `S3_BUCKET`, `S3_REGION`, `S3_ACCESS_KEY_ID` and `S3_SECRET_ACCESS_KEY`. For a compatible provider, set `S3_ENDPOINT` and, only if needed, `S3_FORCE_PATH_STYLE=true`. Never expose these values with a `NEXT_PUBLIC_` prefix or commit them.
6. Restart/redeploy, then test with synthetic files. Confirm public/anonymous reads are denied, authorized staff can retrieve files by the random key in the support email, lifecycle deletion works, and the privacy notice matches the approved process.

If storage is not configured, the API rejects document uploads with an explicit message; support requests cannot be submitted until uploads are configured.
