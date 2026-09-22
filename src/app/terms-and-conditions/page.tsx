import { PageHero } from "@/components/ui/Shared";
import { seo } from "@/lib/seo";
export const metadata = seo("Terms & Conditions", "/terms-and-conditions");
export default function Page() {
  return (
    <>
      <PageHero
        title="A shared understanding."
        eyebrow="Terms & Conditions"
        description="Guidance for using the foundation website and its public services."
      />
      <article className="container section prose">
        <p className="notice">
          Draft terms — foundation approval is required before public launch.
        </p>
        <h2>Information on this website</h2>
        <p>
          Content introduces the foundation’s intended purpose and support
          areas. Illustrative images and sample messages are labelled. Only
          explicitly verified records should be treated as published evidence of
          activities, donations or certifications.
        </p>
        <h2>Volunteering</h2>
        <p>
          An application is an expression of interest, not confirmation of a
          role, employment or membership. Approval, suitability checks and
          orientation may be required before participation.
        </p>
        <h2>Membership cards</h2>
        <p>
          A card reflects the published membership record when generated. Always
          check its QR verification link for current status. Expired and
          suspended memberships cannot download active cards. Demo cards are not
          valid identification.
        </p>
        <h2>Responsible use</h2>
        <p>
          Do not submit false information, misuse member details, attempt
          unauthorized access or interfere with the website. Public documents
          may not be altered to misrepresent the foundation.
        </p>
        <h2>Donations and external resources</h2>
        <p>
          This website does not process payments. No tax benefit, registration
          or certification should be assumed without a published, valid
          supporting document. External resources remain subject to their
          providers’ terms.
        </p>
      </article>
    </>
  );
}
