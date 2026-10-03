import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import styles from "./EducationEmpowermentExperience.module.css";

export default function EducationEmpowermentExperience() {
  return (
    <div className={`${styles.page} education-empowerment-experience`}>
      <section className={styles.heroBand} aria-labelledby="education-title">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Education and Empowerment</p>
            <h1 id="education-title">
              Creating Opportunities, Inspiring Confidence and Building Futures
            </h1>
            <p className={styles.heroIntro}>
              Every person deserves the opportunity to learn, develop their
              abilities and move forward with confidence.
            </p>
          </div>

          <figure className={styles.heroImage}>
            <Image
              src="/education_empowerment.png"
              alt="A student smiling as she learns with classmates"
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


      <section className={styles.whySection} aria-labelledby="why-education-title">
        <div className={styles.whyLayout}>
          <div className={styles.whyHeading}>
            <span className={styles.sectionMarker} aria-hidden="true">01</span>
            <h2 id="why-education-title">Why Education and Empowerment Matters</h2>
          </div>
          <div className={styles.whyStory}>
            <p className={styles.darkCopy}>
              Education has the power to open doors, build confidence and give
              individuals the ability to shape their own future. For many
              children and young people, access to proper education, guidance
              and learning resources can make a meaningful difference in their
              lives. At Trimurthi Foundation, we believe that every person
              deserves the opportunity to learn, develop their abilities and
              move forward with confidence. Through our initiatives, we aim to
              encourage education, support skill development and help
              individuals become more independent and capable.
            </p>
            <blockquote className={styles.quote}>
              <HeartHandshake size={25} strokeWidth={1.6} aria-hidden="true" />
              <p>
                &quot;A little support in someone&apos;s journey of learning can
                become the foundation for a lifetime of opportunity.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.supportSection} aria-labelledby="support-title">
        <div className={styles.supportShell}>
          <div className={styles.supportCopy}>
            <h2 id="support-title">Your Support Can Make a Difference</h2>
            <h3>Every Opportunity Given Can Create a Brighter Future</h3>
            <p>
              Supporting education and empowerment means giving people more
              than just resources — it means giving them the confidence and
              opportunity to dream bigger. Your contribution, however small,
              can help provide educational materials, support learning
              initiatives, encourage skill development and assist students and
              individuals who face financial or social challenges. Together,
              we can help create opportunities for people to learn, grow and
              move towards a more secure and independent future.
            </p>
          </div>
          <figure className={styles.supportImage}>
            <Image
              src="/education-support.png"
              alt="A teacher helping students learn together in a classroom"
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
            <h3>Empowering Individuals Through Learning and Opportunity</h3>
          </div>
          <div className={styles.impactStory}>
            <p>
              Trimurthi Foundation works towards creating meaningful
              opportunities in education, learning and skill development. Our
              initiatives focus on supporting students who need assistance,
              providing access to educational resources and encouraging
              programmes that help individuals develop practical skills and
              confidence. We also aim to create an environment where young
              people and underserved communities can discover their potential
              and work towards their aspirations. Through education and
              empowerment, we strive to help individuals become self-reliant,
              strengthen families and contribute positively to their
              communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}