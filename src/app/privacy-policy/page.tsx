import { PageHero } from "@/components/ui/Shared";
import { seo } from "@/lib/seo";
export const metadata = seo("Privacy Policy", "/privacy-policy");
export default function Page() {
  return (
    <>
      <PageHero
        title="Respect for your privacy."
        eyebrow="Privacy Policy"
        description="How this website handles information you choose to share."
      />
      <article className="container section prose">
        <p className="notice">
          Draft policy — organizational approval and a verified privacy contact
          are required before public launch.
        </p>
        <h2>Volunteer applications</h2>
        <p>
          The application form collects your contact information, city, age,
          gender, occupation, availability, interests and experience to review
          your suitability and coordinate volunteer opportunities. Submission
          requires consent. Information is stored in the foundation’s database
          and is not displayed publicly.
        </p>
        <h2>Membership verification</h2>
        <p>
          Public verification displays only consented membership information:
          name, member ID, role, status and joining and validity dates. A
          photograph is shown only with specific public consent. Published cards
          and letters must contain public information only.
        </p>
        <h2>Donor privacy</h2>
        <p>
          Only verified contributions are published. Names are shown with
          permission; otherwise contributions are anonymous. Phone numbers,
          email addresses and payment references are not published.
        </p>
        <h2>Support requests and optional documents</h2>
        <p>
          Support requests may include an applicant or guardian’s profession
          and an optional monthly household-income range, along with contact
          and category-specific details. Supporting PDFs or images are
          optional. When private storage is configured, selected files are
          uploaded to the foundation’s private S3-compatible storage and the
          prepared email contains file references rather than attachments.
          Authorized foundation personnel may access those files to assess the
          request. The request details are prepared in your email app and are
          sent only if you choose to send that email.
        </p>
        <p>
          Upload only documents needed to assess your request. Do not submit
          unmasked Aadhaar details; if an Aadhaar copy is specifically needed,
          mask the first eight digits. Medical, identity and financial
          documents are sensitive. Do not upload them until the foundation has
          published an approved retention schedule and privacy contact.
        </p>
        <h2>Security and third-party media</h2>
        <p>
          Request limits use a hashed network identifier when a trusted proxy is
          configured. Limits expire after 15 minutes. No marketing analytics are
          included. Playing an embedded video may connect your browser to
          YouTube’s privacy-enhanced player.
        </p>
        <h2>Your choices and retention</h2>
        <p>
          You can choose not to submit information. A verified contact for
          access, correction, withdrawal and deletion requests, and an approved
          retention schedule, must be supplied by the foundation before public
          launch. You may submit a support request without uploading documents.
        </p>
      </article>
    </>
  );
}
