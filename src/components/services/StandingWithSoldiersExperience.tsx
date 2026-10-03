import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import SupportPromptSection from "@/components/home/SupportPromptSection";
import styles from "./StandingWithSoldiersExperience.module.css";

export default function StandingWithSoldiersExperience() {
  return (
    <div className={`${styles.page} standing-with-soldiers-experience`}>
      <section className={styles.heroBand} aria-labelledby="soldiers-title">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Standing With Our Soldiers</p>
            <h1 id="soldiers-title">Standing With Those Who Protect Our Nation</h1>
            <p className={styles.heroIntro}>
              Our soldiers dedicate their lives to protecting our nation, often
              making personal sacrifices to ensure the safety and security of
              millions of people.
            </p>
          </div>

          <figure className={styles.heroImage}>
            <Image
              src="/soldiers-family.webp"
              alt="A soldier spending a warm moment with his wife and daughter"
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

      <SupportPromptSection />

      <section className={styles.whySection} aria-labelledby="why-soldiers-title">
        <div className={styles.whyLayout}>
          <div className={styles.whyHeading}>
            
            <h2 id="why-soldiers-title">Why Supporting Our Soldiers Matters</h2>
          </div>
          <div className={styles.whyStory}>
            <p className={styles.darkCopy}>
              Our soldiers dedicate their lives to protecting our nation, often
              making personal sacrifices to ensure the safety and security of
              millions of people. Behind every soldier is a family that shares
              their journey, challenges and responsibilities. Recognising
              their contribution and extending support to them and their
              families is a way of expressing our gratitude and respect. At
              Trimurthi Foundation, we believe that those who protect our
              nation should always know that the people of our nation stand
              with them.
            </p>
            <blockquote className={styles.quote}>
              <HeartHandshake size={25} strokeWidth={1.6} aria-hidden="true" />
              <p>
                &quot;Your gesture of support today can become a reminder to our
                soldiers that their dedication and sacrifices are valued and
                never forgotten.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.supportSection} aria-labelledby="support-title">
        <div className={styles.supportShell}>
          <div className={styles.supportCopy}>
            <h2 id="support-title">Your Support Can Make a Difference</h2>
            <h3>Every Gesture of Gratitude matters</h3>
            <p>
              Supporting our soldiers is not only about providing assistance;
              it is about expressing our appreciation and standing beside
              those who dedicate their lives in service of the nation. Your
              contribution, however small, can bring encouragement, comfort
              and a sense of belonging to soldiers, veterans and their
              families. A simple gesture of support can remind them that their
              efforts are recognised and that they remain connected with the
              people they serve. Together, we can honour their commitment and
              express our collective gratitude.
            </p>
          </div>
          <figure className={styles.supportImage}>
            <Image
              src="/soldier.png"
              alt="Indian soldiers standing with the national flag at sunrise"
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 46vw, 38vw"
            />
          </figure>
        </div>
      </section>

      <section className={styles.impactSection} aria-labelledby="impact-title">
        <div className={styles.impactLayout}>
          <div className={styles.impactLead}>
            <h2 id="impact-title">How Trimurthi Foundation Creates Impact</h2>
            <h3>Expressing Gratitude through meaningful Support</h3>
          </div>
          <div className={styles.impactStory}>
            <p>
              Trimurthi Foundation aims to create meaningful initiatives that
              recognise and support soldiers, veterans and their families. Our
              efforts include extending support to the families of soldiers
              who made the ultimate sacrifice in service of our nation, while
              also standing with veterans, retired personnel and their
              families who have dedicated their lives to serving the country.
              Through our initiatives, we strive to express our gratitude,
              provide meaningful support and ensure that those who have served
              our nation and their families always feel remembered and valued.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}