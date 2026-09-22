import { PageHero } from "@/components/ui/Shared";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { seo } from "@/lib/seo";
export const metadata = seo("Become a Volunteer", "/volunteer");
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ area?: string; event?: string }>;
}) {
  const p = await searchParams;
  return (
    <>
      <PageHero
        title="Your time can change a tomorrow."
        eyebrow="Volunteer with Trimurti"
        description="Bring your skills, your curiosity and your care. Together, we can create a community where everyone belongs."
      />
      <section className="container section">
        <div className="section-heading">
          <h2>Find your way to contribute.</h2>
          <p>
            Learn, connect and share your strengths through meaningful service.
          </p>
        </div>
        <div className="transparency-grid">
          {[
            [
              "Share your knowledge",
              "Support learning, mentoring and practical skills.",
            ],
            [
              "Care for your community",
              "Contribute to wellbeing, companionship and essential support.",
            ],
            [
              "Help behind the scenes",
              "Lend your skills in coordination, storytelling or digital support.",
            ],
          ].map(([t, d]) => (
            <div className="panel" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="volunteer-apply">
        <div className="volunteer-apply-overlay" />
        <div className="container volunteer-apply-grid">
          <div className="volunteer-apply-copy">
            <p className="eyebrow">Start with one small step</p>
            <h2>Let’s get to know you.</h2>
            <p className="volunteer-apply-lead">
              Bring your skills, your curiosity and your care. Together, we can
              create a community where everyone belongs.
            </p>
            <div className="volunteer-steps">
              <div>
                <span>01</span>
                <p>Share your interests and availability.</p>
              </div>
              <div>
                <span>02</span>
                <p>Our team reviews your application.</p>
              </div>
              <div>
                <span>03</span>
                <p>Begin with a thoughtful orientation.</p>
              </div>
            </div>
            <p className="volunteer-apply-note">
              Applications are reviewed before any role or placement is
              confirmed. We value privacy, dignity and agreed commitments.
            </p>
          </div>
          <div className="volunteer-form-card">
            <div className="volunteer-form-heading">
              <p className="eyebrow">Join the community</p>
              <h3>Volunteer application</h3>
              <p>Tell us a little about how you would like to help.</p>
            </div>
            <VolunteerForm area={p.area} event={p.event} />
          </div>
        </div>
      </section>
      <section className="container section volunteer-faq-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Questions before you begin?</p>
            <h2>A thoughtful way to volunteer.</h2>
          </div>
          <p>Find clear answers before sending your application.</p>
        </div>
        <div className="faq">
          <details>
            <summary>Do I need previous experience?</summary>
            <p>No. Tell us what interests you and what you would like to learn.</p>
          </details>
          <details>
            <summary>Can I volunteer remotely?</summary>
            <p>Select Remote under availability. Suitable roles depend on current needs.</p>
          </details>
          <details>
            <summary>Will I receive an ID card immediately?</summary>
            <p>Cards are issued only after approval and onboarding.</p>
          </details>
          <details>
            <summary>Is there an age requirement?</summary>
            <p>This application is for adults aged 18 and above.</p>
          </details>
        </div>
      </section>
    </>
  );
}
