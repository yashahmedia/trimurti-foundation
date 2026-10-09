import Image from "next/image";
import { HeartHandshake, Landmark } from "lucide-react";
import CultureReveal from "@/components/culture/CultureReveal";
import CultureHeritageShowcase from "@/components/culture/CultureHeritageShowcase";
import RequestSupportCta from "@/components/services/RequestSupportCta";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import contentStyles from "./CultureHeritageContent.module.css";
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

      <RequestSupportCta category="Culture & Heritage" />

      <section className={contentStyles.whySection} aria-labelledby="why-culture-title">
        <Landmark className={contentStyles.heritageWatermark} aria-hidden="true" />
        <div className={contentStyles.whyLayout}>
          <CultureReveal className={contentStyles.whyHeading}>
            <h2 id="why-culture-title">Why Culture &amp; Heritage Matters</h2>
          </CultureReveal>
          <CultureReveal className={contentStyles.whyStory} delay={0.08}>
            <div className={contentStyles.whyParagraphs}>
              <p>
                India&apos;s heritage is a vast living tradition shaped by knowledge,
                music, dance, literature, spirituality, temples, festivals, values
                and ways of life passed down through generations.
              </p>
              <p>
                In a rapidly changing world, many traditional practices and forms
                of knowledge face the risk of being forgotten or losing their
                connection with younger generations. Preserving our heritage
                therefore means more than remembering the past — it means helping
                future generations understand, experience and carry forward what
                is valuable.
              </p>
              <p>
                At Trimurthi Foundation, we aim to create opportunities to
                celebrate our arts, support our heritage institutions, share
                traditional knowledge and keep India&apos;s cultural and
                civilisational values alive.
              </p>
            </div>
            <blockquote className={contentStyles.quote}>
              <HeartHandshake size={24} strokeWidth={1.6} aria-hidden="true" />
              <p>
                “When we preserve our heritage, we give future generations a
                connection to where they came from and a foundation for where
                they can go.”
              </p>
            </blockquote>
          </CultureReveal>
        </div>
      </section>

      <section className={contentStyles.supportSection} aria-labelledby="support-title">
        <CultureReveal className={contentStyles.supportShell}>
          <div className={contentStyles.supportCopy}>
            <h2 id="support-title">Your Support Can Make a Difference</h2>
            <h3>Every Tradition Preserved Is a Legacy Passed Forward</h3>
            <div className={contentStyles.supportParagraphs}>
              <p>
                Supporting culture and heritage may not always create an
                immediate visible change, but its impact can last for
                generations.
              </p>
              <p>
                Your contribution can help a young artist continue learning,
                support a traditional art form, contribute towards the
                preservation of a heritage temple or help make India&apos;s
                traditional knowledge accessible to someone who may otherwise
                never encounter it.
              </p>
              <p>
                A small act of support today can help keep a song, a dance, a
                story, a tradition or a piece of knowledge alive for tomorrow.
              </p>
              <p>
                Together, we can help ensure that the richness of our heritage
                continues to be experienced, understood and valued by
                generations to come.
              </p>
            </div>
          </div>
          <figure className={contentStyles.supportImage}>
            <Image
              src="/heritage.png"
              alt="Traditional dance, music and pottery being shared in a temple courtyard"
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 42vw, 34vw"
            />
          </figure>
        </CultureReveal>
      </section>

      <CultureHeritageShowcase />
    </div>
  );
}