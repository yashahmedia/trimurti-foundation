import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import styles from "./CultureHeritageExperience.module.css";

export default function CultureHeritageExperience() {
  return (
    <div className={`${styles.page} culture-heritage-experience`}>
      <section className={styles.heroBand} aria-labelledby="culture-title">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Culture and Heritage</p>
            <h1 id="culture-title">Preserving Our Roots, Celebrating Our Identity</h1>
            <p className={styles.heroIntro}>
              We celebrate the traditions, stories and cultural knowledge that
              connect generations and bring communities together.
            </p>
          </div>

          <figure className={styles.heroImage}>
            <Image
              src="/culture_heritage.png"
              alt="A classical dancer performing in traditional dress beside an Indian temple"
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

      <section className={styles.whySection} aria-labelledby="why-culture-title">
        <div className={styles.whyLayout}>
          <div className={styles.whyHeading}>
            <span className={styles.sectionMarker} aria-hidden="true">01</span>
            <h2 id="why-culture-title">Why Culture and Heritage Matters</h2>
          </div>
          <div className={styles.whyStory}>
            <p className={styles.darkCopy}>
              Culture and heritage are the foundation of our identity,
              connecting us to our history, traditions, values and communities.
              Our rich cultural heritage reflects the stories, knowledge, art,
              customs and traditions passed down through generations. At
              Trimurthi Foundation, we believe that preserving and celebrating
              our cultural heritage helps strengthen our connection with our
              roots while inspiring future generations to value and carry
              forward our traditions. Through our initiatives, we aim to promote
              cultural awareness, encourage community participation and
              contribute towards the preservation of our shared heritage.
            </p>
            <blockquote className={styles.quote}>
              <HeartHandshake size={25} strokeWidth={1.6} aria-hidden="true" />
              <p>
                &quot;When we preserve our heritage, we preserve the stories,
                values and traditions that connect generations and shape our
                identity.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.supportSection} aria-labelledby="support-title">
        <div className={styles.supportShell}>
          <div className={styles.supportCopy}>
            <h2 id="support-title">Your Support Can Make a Difference</h2>
            <h3>Every Effort to Preserve Heritage Matters</h3>
            <p>
              Supporting culture and heritage initiatives is not only about
              preserving the past; it is about keeping our traditions meaningful
              and alive for future generations. Your contribution, however
              small, can help support cultural activities, traditional arts,
              community celebrations and initiatives that promote awareness of
              our rich heritage. By coming together, we can encourage younger
              generations to learn about their cultural roots and ensure that
              valuable traditions, knowledge and artistic expressions continue
              to flourish.
            </p>
          </div>
          <figure className={styles.supportImage}>
            <Image
              src="/heritage.png"
              alt="A community sharing traditional dance, music and pottery in a historic courtyard"
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
            <h3>Preserving Traditions Through Meaningful Cultural Initiatives</h3>
          </div>
          <div className={styles.impactStory}>
            <p>
              Trimurthi Foundation aims to create meaningful initiatives that
              promote cultural awareness and contribute towards the preservation
              of our rich heritage. Our efforts include supporting cultural
              activities, traditional arts and crafts, heritage awareness
              programmes and community events that bring people together.
              Through our initiatives, we strive to celebrate diversity,
              encourage respect for different traditions and create
              opportunities for communities to share their cultural knowledge
              with future generations. We believe that by preserving our
              heritage and celebrating our cultural identity, we can build
              stronger communities while keeping our traditions alive for
              generations to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}