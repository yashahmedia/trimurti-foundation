import Link from "next/link";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  HandHeart,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { honourWallEntries } from "@/data/honour-wall";
import { seo } from "@/lib/seo";
import styles from "./wall-of-honour.module.css";

export const metadata = seo(
  "Wall of Honour",
  "/wall-of-honour",
  "A heartfelt tribute to the supporters, mentors, volunteers, families, organisations and well-wishers who stand with Trimurthi Foundation.",
);

export default function WallOfHonourPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="honour-hero-title">
        <div className={styles.heroTexture} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>
              <span />
              Gratitude, made visible
            </p>
            <h1 id="honour-hero-title">Wall of Honour</h1>
            <span className={styles.heroRule} aria-hidden="true">
              <i />
              <Sparkles size={15} />
              <i />
            </span>
            <p className={styles.heroDescription}>
              Celebrating the people who stand with the Foundation and help
              carry its purpose forward.
            </p>
            <Link className={styles.heroLink} href="#supporters">
              Explore our supporters <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.heroPlaque} aria-hidden="true">
            <div className={styles.plaqueInset}>
              <span className={styles.plaqueOrnament}>✦</span>
              <HeartHandshake size={43} strokeWidth={1.15} />
              <span className={styles.plaqueKicker}>With gratitude</span>
              <span className={styles.plaqueTitle}>Those who serve</span>
              <span className={styles.plaqueBottom}>Trimurthi Foundation</span>
            </div>
          </div>
        </div>
        <div className={styles.heroFoot} aria-hidden="true">
          <span>Service</span>
          <i />
          <span>Compassion</span>
          <i />
          <span>Community</span>
        </div>
      </section>

      <section
        className={styles.supporters}
        id="supporters"
        aria-labelledby="supporters-title"
      >
        <div className={styles.container}>
          <Reveal>
            <header className={styles.sectionHeading}>
              <p className={styles.eyebrow}>SUPPORTERS&apos; WALL OF HONOUR</p>
              <h2 id="supporters-title">
                Every Contribution. Every Act of Service. Every Helping Hand.
              </h2>
              <p className={styles.introCopy}>
                Trimurthi Foundation exists because people choose to contribute
                — through their generosity, their time, their knowledge, their
                skills and their compassion.
              </p>
              <p className={styles.introCopy}>
                Our Wall of Honour is our way of expressing gratitude to the
                individuals, families, organisations and well-wishers who have
                supported our journey and helped us create a positive difference
                in the lives of others.
              </p>
            </header>
          </Reveal>

          <p className={styles.sampleNotice}>
            These are sample entries only—not verified acknowledgements. Names
            and roles should be replaced with confirmed details shared with
            permission.
          </p>

          <div className={styles.plaqueGrid}>
            {honourWallEntries.map((entry, index) => (
              <Reveal key={entry.name} delay={index * 0.08}>
                <article className={styles.supporterPlaque}>
                  <span className={styles.sampleTag}>
                    {entry.isSample ? "Sample entry" : "In gratitude"}
                  </span>
                  <span className={styles.plaqueIcon} aria-hidden="true">
                    <Award size={22} strokeWidth={1.45} />
                  </span>
                  <span className={styles.cardRule} aria-hidden="true" />
                  <h3>{entry.name}</h3>
                  <p className={styles.role}>{entry.role}</p>
                  {entry.message && (
                    <p className={styles.appreciation}>{entry.message}</p>
                  )}
                  <span className={styles.cardFlourish} aria-hidden="true">
                    ✦
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gratitude} aria-labelledby="gratitude-title">
        <div className={styles.gratitudeInner}>
          <Reveal>
            <span className={styles.gratitudeIcon} aria-hidden="true">
              <HandHeart size={26} strokeWidth={1.5} />
            </span>
            <p className={styles.gratitudeEyebrow}>A shared purpose</p>
            <h2 id="gratitude-title">Together, We Make a Difference</h2>
            <p className={styles.gratitudeCopy}>
              To everyone who gives their time, generosity, knowledge, skills
              and compassion: thank you. Your willingness to stand alongside
              our communities helps turn care into meaningful service and
              possibility.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.callToAction} aria-labelledby="journey-title">
        <Reveal>
          <div className={styles.ctaPanel}>
            <span className={styles.ctaOrnament} aria-hidden="true">
              <Sparkles size={19} />
            </span>
            <p className={styles.eyebrow}>There is a place for you here</p>
            <h2 id="journey-title">Be Part of Our Journey</h2>
            <p className={styles.ctaCopy}>
              Your time, skills, generosity, and compassion can help us create a
              lasting positive impact in our communities.
            </p>
            <div className={styles.ctaActions}>
              <Link className={styles.primaryButton} href="/donate">
                Support Our Mission <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className={styles.secondaryButton} href="/volunteer">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
