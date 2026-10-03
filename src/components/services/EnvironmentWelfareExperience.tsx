import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import styles from "./EnvironmentWelfareExperience.module.css";

export default function EnvironmentWelfareExperience() {
  return (
    <div className={`${styles.page} environment-welfare-experience`}>
      <section className={styles.heroBand} aria-labelledby="environment-title">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Nature &amp; Sustainability</p>
            <h1 id="environment-title">
              Caring for Our Environment, Caring for Our Communities
            </h1>
            <p className={styles.heroIntro}>
              The environment we live in directly affects our health, our
              communities and the future we leave behind.
            </p>
          </div>

          <figure className={styles.heroImage}>
            <Image
              src="/environment_welfare.png"
              alt="A child carefully planting a young tree in a green community space"
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


      <section className={styles.whySection} aria-labelledby="why-environment-title">
        <div className={styles.whyLayout}>
          <div className={styles.whyHeading}>
            <h2 id="why-environment-title">Why It Matters</h2>
          </div>
          <div className={styles.whyStory}>
            <p className={styles.darkCopy}>
              The environment we live in directly affects our health, our
              communities and the future we leave behind. Clean surroundings,
              responsible use of resources and care for nature can make a
              meaningful difference to everyday life. At Trimurthi Foundation,
              we believe that caring for nature is also a way of caring for
              people. We aim to encourage awareness, responsible practices and
              community participation to create a cleaner and healthier future.
            </p>
            <blockquote className={styles.quote}>
              <HeartHandshake size={25} strokeWidth={1.6} aria-hidden="true" />
              <p>
                &quot;Your small act of responsibility today can help create a
                cleaner, healthier tomorrow.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.supportSection} aria-labelledby="support-title">
        <div className={styles.supportShell}>
          <div className={styles.supportCopy}>
            <h2 id="support-title">Your Support Can Make a Difference</h2>
            <h3>Every Small Step Towards a Better Tomorrow Matters</h3>
            <p>
              Protecting our environment begins with small actions, but their
              impact can grow when we act together. Your support can help us
              undertake initiatives that promote environmental awareness,
              cleanliness, conservation and community well-being. Even a small
              contribution can help turn an idea into an activity that benefits
              many people and the places they call home. Together, we can make
              responsible choices today that create a better tomorrow.
            </p>
          </div>
          <figure className={styles.supportImage}>
            <Image
              src="/protect.png"
              alt="Community members planting a sapling and caring for their surroundings"
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
            <h3>Turning collective Action into meaningful change</h3>
          </div>
          <div className={styles.impactStory}>
            <p>
              Trimurthi Foundation aims to bring people together through
              initiatives that promote environmental responsibility and
              community well-being. Our efforts may include cleanliness and
              awareness drives, conservation activities, sustainable practices
              and other community-based initiatives. By encouraging
              participation and responsible action, we hope to create positive
              change that continues beyond each individual initiative.
              Together, we can care for the environment, strengthen our
              communities and leave a better world for future generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}