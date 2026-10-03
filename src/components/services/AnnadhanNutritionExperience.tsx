import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import SupportPromptSection from "@/components/home/SupportPromptSection";
import styles from "./AnnadhanNutritionExperience.module.css";

export default function AnnadhanNutritionExperience() {
  return (
    <div className={`${styles.page} annadhan-nutrition-experience`}>
      <section className={styles.heroBand} aria-labelledby="annadhan-title">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Annadhan and Nutrition</p>
            <h1 id="annadhan-title">Nourishing Lives Through Food and Compassion</h1>
            <p className={styles.heroIntro}>
              No one should go hungry. We work to make nourishing meals
              accessible to people and families facing food insecurity.
            </p>
          </div>

          <figure className={styles.heroImage}>
            <Image
              src="/annadhan_nutrition.png"
              alt="A volunteer serving a meal to an older community member"
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

      <section className={styles.whySection} aria-labelledby="why-annadhan-title">
        <div className={styles.whyLayout}>
          <div className={styles.whyHeading}>
            <span className={styles.sectionMarker} aria-hidden="true">01</span>
            <h2 id="why-annadhan-title">Why Annadhan and Nutrition Matters</h2>
          </div>
          <div className={styles.whyStory}>
            <p className={styles.darkCopy}>
              Food is one of the most basic human needs, and access to nutritious
              meals is essential for a healthy and dignified life. For many
              individuals and families facing financial difficulties, arranging
              daily meals can be a constant challenge. Annadhan, the act of
              providing food to those in need, is a meaningful expression of
              kindness, compassion and humanity. At Trimurthi Foundation, we
              believe that no one should go hungry and that every individual
              deserves access to nutritious food. Through our initiatives, we
              aim to serve those in need, spread kindness and contribute towards
              building a healthier and more caring society.
            </p>
            <blockquote className={styles.quote}>
              <HeartHandshake size={25} strokeWidth={1.6} aria-hidden="true" />
              <p>
                &quot;A single meal shared with love can bring hope, restore
                dignity and make a meaningful difference in someone&apos;s life.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.supportSection} aria-labelledby="support-title">
        <div className={styles.supportShell}>
          <div className={styles.supportCopy}>
            <h2 id="support-title">Your Support Can Make a Difference</h2>
            <h3>Every Meal Shared Is a Step Towards a Hunger-Free Society</h3>
            <p>
              Supporting Annadhan and nutrition initiatives is not only about
              providing food; it is about bringing hope, care and comfort to
              individuals and families in need. Your contribution, however
              small, can help provide nutritious meals to underprivileged
              communities, support people facing food insecurity and improve
              access to essential nourishment. Every meal served is an act of
              compassion that can ease someone&apos;s hardship and bring a sense
              of belonging. Together, we can work towards reducing hunger,
              promoting good nutrition and ensuring that more people have
              access to healthy and fulfilling meals.
            </p>
          </div>
          <figure className={styles.supportImage}>
            <Image
              src="/nourish.png"
              alt="A volunteer sharing a basket of fresh food with a family"
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
            <h3>Serving Humanity Through Food and Nutrition Initiatives</h3>
          </div>
          <div className={styles.impactStory}>
            <p>
              Trimurthi Foundation aims to create meaningful initiatives that
              address hunger, promote nutrition and support the well-being of
              underprivileged communities. Our efforts include providing meals
              to those in need, supporting food distribution activities and
              encouraging awareness about the importance of balanced nutrition
              and healthy living. Through our initiatives, we strive to extend
              a helping hand to disadvantaged individuals, support vulnerable
              families and ensure that access to food becomes a source of hope
              and dignity. We believe that every meal shared with compassion
              brings us one step closer to a healthier, happier and more
              inclusive society.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}