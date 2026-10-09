import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import RequestSupportCta from "@/components/services/RequestSupportCta";
import styles from "./HealthcareSupportExperience.module.css";

export default function HealthcareSupportExperience() {
  return (
    <div className={`${styles.page} healthcare-support-experience`}>
      <section className={styles.heroBand} aria-labelledby="healthcare-title">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Healthcare Support</p>
            <h1 id="healthcare-title">Bringing Hope Through Care and Compassion</h1>
            <p className={styles.heroIntro}>
              Timely medical support can provide relief during difficult moments
              and help individuals receive the care they need.
            </p>
          </div>

          <figure className={styles.heroImage}>
            <Image
              src="/health support.png"
              alt="A healthcare worker checking an older woman's blood pressure at a community health visit"
              fill
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 48vw, 34vw"
            />
          </figure>

          <aside className={styles.supportRail}>
            <TransformLifeSupportPanel showRequestSupport={false} />
          </aside>
        </div>
      </section>

      <RequestSupportCta category="Healthcare Support" />

      <section className={styles.whySection} aria-labelledby="why-healthcare-title">
        <div className={styles.whyLayout}>
          <div className={styles.whyHeading}>
            <span className={styles.sectionMarker} aria-hidden="true">01</span>
            <h2 id="why-healthcare-title">Why Healthcare Matters</h2>
          </div>
          <div className={styles.whyStory}>
            <p className={styles.darkCopy}>
              Good health is the foundation for a fulfilling life. However, many
              individuals and families face difficult choices when medical
              needs arise due to financial challenges and unexpected
              circumstances. Timely medical support can provide relief during
              difficult moments and help individuals receive the care they
              need. At Trimurthi Foundation, we believe that access to essential
              healthcare should not become a barrier for those who are already
              facing challenging situations.
            </p>
            <blockquote className={styles.quote}>
              <HeartHandshake size={25} strokeWidth={1.6} aria-hidden="true" />
              <p>
                &quot;Your support today can bring hope, care and a chance for a
                healthier tomorrow.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.changeSection} aria-labelledby="support-title">
        <div className={styles.changeShell}>
          <div className={styles.changeCopy}>
            <h2 id="support-title">Your Support Can Change a Life</h2>
            <h3>Every Act of Care Creates Hope</h3>
            <div className={styles.changeBody}>
              <p>
                For someone facing a medical challenge, timely support can mean
                much more than financial assistance — it can bring comfort,
                confidence and hope during a difficult journey. Your contribution
                can help an individual access necessary treatment, medical
                assistance and support when they need it the most.
              </p>
              <p>
                What may seem like a small gesture can provide strength to a
                family and remind them that they are not alone. Together, we can
                bring care and compassion to those who need it most.
              </p>
            </div>
          </div>
          <figure className={styles.changeImage}>
            <Image
              src="/elder support.png"
              alt="Family members and caregivers sharing a moment with older adults outdoors"
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 42vw, 34vw"
            />
          </figure>
        </div>
      </section>

      <section className={styles.impactSection} aria-labelledby="impact-title">
        <div className={styles.impactLayout}>
          <div className={styles.impactLead}>
            <span className={styles.impactRule} aria-hidden="true" />
            <h2 id="impact-title">How Trimurthi Foundation Creates Impact</h2>
            <h3>Providing Support When It Matters Most</h3>
          </div>
          <div className={styles.impactStory}>
            <p>
              Trimurthi Foundation supports deserving individuals and families
              by providing assistance for essential healthcare needs during
              challenging times. Through our initiatives, we aim to reduce the
              burden faced by families and help them access timely medical
              support and care. With the support of our community, we strive to
              bring hope, comfort and encouragement to those navigating
              difficult health situations.
            </p>
            <p className={styles.impactConclusion}>
              Our approach is guided by compassion, transparency and the belief
              that every individual deserves the opportunity to receive the
              care they need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}