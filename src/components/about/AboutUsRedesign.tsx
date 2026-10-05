import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { philosophyItems } from "@/data/philosophy";
import {
  connectAreas,
  foundationPillars,
  foundationValues,
  founders,
  trustPrinciples,
} from "@/data/aboutPage";
import {
  AdvisoryTeamSection,
  GovernanceSection,
  MissionVisionSection,
} from "./AboutUsFeatureSections";
import styles from "./AboutUsRedesign.module.css";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
};

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  theme = "light",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.sectionHeading} ${theme === "dark" ? styles.darkHeading : ""} ${align === "center" ? styles.center : ""}`}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </div>
  );
}

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <Icon size={22} strokeWidth={1.7} />
    </span>
  );
}

export default function AboutUsRedesign() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <Image
          src="/herobanner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>About Trimurthi Foundation</p>
            <h1 id="about-hero-title">
              Connecting People.
              <br className={styles.heroBreak} />
              {" "}Serving Humanity.
              <br className={styles.heroBreak} />
              {" "}<span>Transforming Lives.</span>
            </h1>
            <p className={styles.heroDescription}>
              Building a compassionate, connected and empowered community where
              people come together to support, uplift and grow with one another.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#about-foundation">
                Discover Our Purpose <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className={styles.secondaryButton} href="/volunteer">
                Join Trimurthi Family
              </Link>
            </div>
          </div>
        </div>
        <a className={styles.scrollCue} href="#trust-strip" aria-label="Scroll to learn about our values">
          <span>Scroll to explore</span>
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </section>

      <section className={styles.trustStrip} id="trust-strip" aria-label="Our values in action">
        <div className={styles.trustInner}>
          {trustPrinciples.map(({ title, description, Icon }) => (
            <article className={styles.trustItem} key={title}>
              <IconBadge Icon={Icon} />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.whoSection} ${styles.reveal}`} id="about-foundation" aria-labelledby="who-title">
        <div className={styles.container}>
          <div className={styles.whoGrid}>
            <div className={styles.storyVisual}>
              <span className={styles.storyFrame} aria-hidden="true" />
              <div className={styles.storyMainImage}>
                <Image src="/elder support.png" alt="Community support and care" fill sizes="(max-width: 760px) 90vw, 44vw" />
              </div>
              <div className={styles.storyInsetImage}>
                <Image src="/education-support.png" alt="Learning support for students" fill sizes="(max-width: 760px) 42vw, 18vw" />
              </div>
              <span className={styles.imageCaption}>People. Purpose. Possibility.</span>
            </div>
            <div className={styles.whoCopy}>
              <p className={styles.eyebrow}>Who We Are</p>
              <h2 id="who-title">Purpose That Brings People Together</h2>
              <p>
                Trimurthi Foundation is a registered charitable trust founded
                with a vision to create a compassionate, connected and
                empowered community where individuals come together to
                support, uplift and grow with one another.
              </p>
              <p>
                Rooted in the timeless values of compassion, integrity, humility
                and service, Trimurthi Foundation believes that every individual
                deserves an opportunity to learn, grow and progress, and that no
                deserving person should be left behind due to lack of financial
                support, guidance or access to opportunities.
              </p>
              <div className={styles.valueTags} aria-label="Foundation values">
                {foundationValues.map((value) => <span key={value}>{value}</span>)}
              </div>
              <blockquote className={styles.quote}>
                <span aria-hidden="true">“</span>
                <p>Every individual has something valuable to contribute.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.founderSection} ${styles.reveal}`} id="founder" aria-labelledby="founders-title">
        <div className={styles.container}>
          <SectionHeading
            id="founders-title"
            eyebrow="Our Founders"
            title="Three Brothers. One Shared Purpose."
            description="Trimurthi Foundation was founded by three brothers united by the belief that communities grow stronger through compassion, purpose and collective responsibility."
            align="center"
          />
          <div className={styles.founderGrid}>
            {founders.map(({ initials, name, role, background }, index) => (
              <article className={styles.founderCard} key={name}>
                <div className={`${styles.founderPortrait} ${index === 1 ? styles.founderPortraitWarm : index === 2 ? styles.founderPortraitCool : ""}`} aria-hidden="true">
                  <span>{initials}</span>
                  <span className={styles.portraitRule} />
                </div>
                <div className={styles.founderMeta}>
                  <p className={styles.founderRole}>{role}</p>
                  <h3>{name}</h3>
                  <p className={styles.founderBackground}>{background}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.pillarsSection} ${styles.reveal}`} aria-labelledby="pillars-title">
        <div className={styles.container}>
          <SectionHeading
            id="pillars-title"
            title="Two Pillars. One Shared Purpose."
            description="Our purpose is built around two complementary pillars: serving people with care and connecting communities with opportunity."
            theme="dark"
            align="center"
          />
          <div className={styles.pillarGrid}>
            {foundationPillars.map(({ number, title, description, focus, Icon, href }) => (
              <article className={styles.pillarCard} key={number}>
                <span className={styles.pillarNumber} aria-hidden="true">{number}</span>
                <IconBadge Icon={Icon} />
                <h3>{title}</h3>
                <p className={styles.pillarDescription}>{description}</p>
                <ul className={styles.focusList}>
                  {focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className={styles.cardArrowLink} href={href} aria-label={`Explore ${title}`}>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.philosophySection} ${styles.reveal}`} id="journey" aria-labelledby="philosophy-title">
        <div className={styles.container}>
          <SectionHeading
            id="philosophy-title"
            eyebrow="Our Philosophy"
            title="The Trimurthy Philosophy"
            description="Five principles that guide our purpose, people and impact."
            align="center"
          />
          <div className={styles.philosophyGrid}>
            {philosophyItems.map(({ title, description, image, alt, icon: Icon }) => (
              <article className={styles.philosophyCard} key={title}>
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  className={styles.philosophyCardImage}
                />
                <span className={styles.philosophyCardOverlay} aria-hidden="true" />
                <div className={styles.philosophyCardContent}>
                  <span className={styles.philosophyIcon} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.connectSection} ${styles.reveal}`} id="trimurti-connect" aria-labelledby="connect-title">
        <div className={styles.container}>
          <SectionHeading
            id="connect-title"
            eyebrow="Trimurthi Connect"
            title="Connecting People. Creating Opportunities."
            description="Trimurthi Connect is a community ecosystem bringing together professionals, entrepreneurs, service providers, volunteers and well-wishers."
            theme="dark"
          />
          <div className={styles.connectGrid}>
            {connectAreas.map(({ title, description, Icon, href }) => (
              <Link className={styles.connectCard} href={href} key={title}>
                <IconBadge Icon={Icon} />
                <h3>{title}</h3>
                <p>{description}</p>
                <span className={styles.connectArrow} aria-hidden="true"><ArrowRight size={20} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <GovernanceSection />
      <AdvisoryTeamSection />

    </div>
  );
}