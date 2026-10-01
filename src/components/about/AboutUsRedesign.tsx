import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  beliefs,
  connectAreas,
  foundationPillars,
  foundationValues,
  founders,
  governancePrinciples,
  impactAreas,
  journeySteps,
  trustPrinciples,
} from "@/data/aboutPage";
import styles from "./AboutUsRedesign.module.css";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
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
      <p className={styles.eyebrow}>{eyebrow}</p>
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
            <p className={styles.eyebrow}>About Trimurti Foundation</p>
            <h1 id="about-hero-title">
              Connecting People.
              <br className={styles.heroBreak} />
              Serving Humanity.
              <br className={styles.heroBreak} />
              <span>Transforming Lives.</span>
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
                Join Trimurti Family
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
            description="Trimurti Foundation was founded by three brothers united by the belief that communities grow stronger through compassion, purpose and collective responsibility."
            align="center"
          />
          <div className={styles.founderGrid} id="team">
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
            eyebrow="Our Foundation"
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

      <section className={`${styles.section} ${styles.beliefSection} ${styles.reveal}`} id="mission-vision" aria-labelledby="belief-title">
        <div className={styles.container}>
          <SectionHeading
            id="belief-title"
            eyebrow="Our Belief"
            title="Transformation Begins When People Come Together"
            description="A shared purpose gives each person a meaningful way to contribute and helps communities move forward together."
            align="center"
          />
          <div className={styles.beliefGrid}>
            {beliefs.map(({ number, title, description, Icon }, index) => (
              <article className={`${styles.beliefCard} ${index === 0 ? styles.beliefFeatured : ""}`} key={number}>
                <span className={styles.beliefNumber}>{number}</span>
                <IconBadge Icon={Icon} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.impactSection} ${styles.reveal}`} id="areas-of-impact" aria-labelledby="impact-title">
        <div className={styles.container}>
          <SectionHeading
            id="impact-title"
            eyebrow="Serving Humanity"
            title="Supporting Individuals and Communities in Need
"
            description="Trimurthi Foundation is committed to extending support to individuals and communities through meaningful initiatives that create hope, dignity and opportunity.
We bring care, learning and connection to the areas that help people and communities thrive."
            theme="dark"
          />
          <div className={styles.impactGrid}>
            {impactAreas.map(({ category, title, description, image, imageAlt, href }) => (
              <article className={styles.impactCard} key={title}>
                <Link href={href} className={styles.impactLink} aria-label={`Explore ${title}`}>
                  <div className={styles.impactImage}>
                    <Image src={image} alt={imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                    <span className={styles.imageTint} />
                    <span className={styles.category}>{category}</span>
                  </div>
                  <div className={styles.impactCopy}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={styles.exploreLink}>Explore <ArrowRight size={16} aria-hidden="true" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.cultureSection} ${styles.reveal}`} aria-labelledby="culture-title">
        <div className={`${styles.container} ${styles.cultureGrid}`}>
          <div className={styles.cultureVisual}>
            <Image src="/culture_heritage.png" alt="Indian culture and heritage" fill sizes="(max-width: 760px) 100vw, 54vw" />
            <span className={styles.cultureImageLabel}>Culture &amp; Heritage</span>
          </div>
          <div className={styles.cultureCopy}>
            <p className={styles.eyebrow}>Culture &amp; Heritage</p>
            <h2 id="culture-title">
              Preserving Traditions.
              <br />
              Inspiring Generations.
            </h2>
            <p>
              We work to keep Indian traditions, arts and values connected
              across generations, creating opportunities for people to
              experience and share a living heritage.
            </p>
            <article className={styles.cultureFeature}>
              <span className={styles.cultureFeatureIcon} aria-hidden="true">
                <Landmark size={22} strokeWidth={1.7} />
              </span>
              <div>
                <p className={styles.eyebrow}>Annual celebration</p>
                <h3>Vasantha Utsavam</h3>
                <p>An annual celebration of Indian music and dance conducted in Dubai since 2015.</p>
              </div>
            </article>
            <p className={styles.cultureSince}>Celebrating Indian Culture Since 2015</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soldierSection} ${styles.reveal}`} id="standing-with-soldiers" aria-labelledby="soldier-title">
        <div className={`${styles.container} ${styles.soldierGrid}`}>
          <div className={styles.soldierCopy}>
            <p className={styles.eyebrow}>Serving Our Nation</p>
            <h2 id="soldier-title">Standing with Our Soldiers</h2>
            <p>
              Expressing gratitude and support to the brave men and women who
              dedicate their lives in service of our nation.
            </p>
            <p>
              Through this initiative, Trimurthi Foundation aims to recognise
              their sacrifices, extend support where possible and contribute
              towards the wellbeing of serving personnel, veterans and their
              families.
            </p>
          </div>
          <aside className={styles.soldierVisual} aria-label="Soldiers and the Indian flag">
            <div className={styles.soldierImageFrame}>
              <Image
                src="/soldier.png"
                alt="Indian soldiers standing with the national flag at sunrise"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1080px) 50vw, 560px"
              />
              <span className={styles.soldierImageShade} aria-hidden="true" />
              <ul className={styles.soldierBadges} aria-label="Who this initiative supports">
                <li>Serving personnel</li>
                <li>Veterans</li>
                <li>Their families</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className={`${styles.section} ${styles.connectSection} ${styles.reveal}`} id="trimurti-connect" aria-labelledby="connect-title">
        <div className={styles.container}>
          <SectionHeading
            id="connect-title"
            eyebrow="Trimurti Connect"
            title="Connecting People. Creating Opportunities."
            description="Trimurti Connect is a community ecosystem bringing together professionals, entrepreneurs, service providers, volunteers and well-wishers."
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

      <section className={`${styles.section} ${styles.journeySection} ${styles.reveal}`} id="journey" aria-labelledby="journey-title">
        <div className={styles.container}>
          <SectionHeading
            id="journey-title"
            eyebrow="Our Philosophy"
            title="How Meaningful Change Happens"
            description="A thoughtful path from listening to stronger, more self-reliant communities."
            align="center"
          />
          <ol className={styles.journeyTrack}>
            {journeySteps.map(({ number, title, description }) => (
              <li className={styles.journeyStep} key={number}>
                <span className={styles.journeyNumber}>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.governanceSection} ${styles.reveal}`} id="governance" aria-labelledby="governance-title">
        <div className={styles.container}>
          <SectionHeading
            id="governance-title"
            eyebrow="Trust & Governance"
            title="Built on Trust. Guided by Responsibility."
            description="Our approach is grounded in responsible service, respect for people and a commitment to accountability."
            align="center"
          />
          <div className={styles.governanceGrid}>
            {governancePrinciples.map(({ title, Icon }) => (
              <article className={styles.governanceCard} key={title}>
                <IconBadge Icon={Icon} />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="about-cta-title">
        <Image src="/banner1.png" alt="" fill sizes="100vw" className={styles.finalImage} aria-hidden="true" />
        <div className={styles.finalOverlay} />
        <div className={styles.finalContent}>
          <p className={styles.eyebrow}>Be part of what comes next</p>
          <h2 id="about-cta-title">Every Person Has Something Valuable to Contribute.</h2>
          <p>Give your time, share your knowledge, extend support or simply help us build stronger connections.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/volunteer">
              Join Trimurti Family <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className={styles.secondaryButton} href="/donate">
              Support a Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}