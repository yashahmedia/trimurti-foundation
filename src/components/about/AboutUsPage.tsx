import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sprout,
  Target,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { journeyMilestones, teamProfiles } from "@/data/aboutPage";
import styles from "./AboutUsPage.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.sectionHeading} ${align === "center" ? styles.center : ""}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </div>
  );
}

type ImageTextSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subheading: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children: React.ReactNode;
  className?: string;
};

function ImageTextSection({
  id,
  eyebrow,
  title,
  subheading,
  image,
  imageAlt,
  reverse = false,
  children,
  className = "",
}: ImageTextSectionProps) {
  return (
    <section
      className={`${styles.storySection} ${reverse ? styles.storyReverse : ""} ${className}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.storyImageWrap}>
        <div className={styles.storyImage}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 48vw" />
        </div>
        <Sprout className={styles.imageDecoration} aria-hidden="true" />
      </div>
      <div className={styles.storyCopy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <h3>{subheading}</h3>
        {children}
      </div>
    </section>
  );
}

type MissionVisionCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

function MissionVisionCard({ title, description, Icon }: MissionVisionCardProps) {
  return (
    <article className={styles.missionCard}>
      <span className={styles.missionIcon} aria-hidden="true">
        <Icon size={23} strokeWidth={1.7} />
      </span>
      <p className={styles.eyebrow}>{title}</p>
      <p className={styles.missionDescription}>{description}</p>
    </article>
  );
}

function Timeline() {
  return (
    <ol className={styles.timeline}>
      {journeyMilestones.map(({ year, title, description, Icon }) => (
        <li className={styles.timelineItem} key={year}>
          <span className={styles.timelineIcon} aria-hidden="true">
            <Icon size={19} strokeWidth={1.7} />
          </span>
          <article className={styles.milestoneCard}>
            <p className={styles.milestoneYear}>{year}</p>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}

type TeamCardProps = (typeof teamProfiles)[number];

function TeamCard({ name, role, image, imageAlt }: TeamCardProps) {
  return (
    <article className={styles.teamCard} tabIndex={0}>
      <div className={styles.teamImage}>
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" />
        <span className={styles.profileCta} aria-hidden="true">
          View profile <ArrowRight size={14} />
        </span>
      </div>
      <div className={styles.teamMeta}>
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
        <span className={styles.linkedinIcon} aria-hidden="true">
          in
        </span>
      </div>
    </article>
  );
}

function CTASection() {
  return (
    <section className={styles.finalCta} aria-labelledby="about-cta-title">
      <Image
        src="/banner1.png"
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, 1200px"
        className={styles.ctaImage}
        aria-hidden="true"
      />
      <div className={styles.ctaOverlay} />
      <div className={styles.ctaContent}>
        <p className={styles.eyebrow}>Together for a better tomorrow</p>
        <h2 id="about-cta-title">Join Our Mission</h2>
        <p>
          Be a part of the change. Your support, time and belief can help build
          stronger, healthier and more equitable communities.
        </p>
        <Link href="/volunteer" className={styles.ctaButton}>
          Get Involved <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

const values = [
  { label: "Stronger Communities", Icon: UsersRound },
  { label: "Better Opportunities", Icon: BookOpenCheck },
  { label: "A Brighter Tomorrow", Icon: Sprout },
];

const governanceFeatures = [
  { label: "Transparent", Icon: BadgeCheck },
  { label: "Ethical", Icon: HeartHandshake },
  { label: "Accountable", Icon: ShieldCheck },
];

export default function AboutUsPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>About Trimurti Foundation</p>
            <h1 id="about-hero-title">Who We Are</h1>
            <p className={styles.heroDescription}>
              We are a collective of changemakers, dreamers and doers — working
              together to create lasting impact in communities.
            </p>
            <ul className={styles.valueList}>
              {values.map(({ label, Icon }) => (
                <li key={label}>
                  <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/trimurti_hero.png"
                alt="Illustrative Trimurti Foundation graphic representing community purpose"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 52vw"
              />
            </div>
            <Sprout className={styles.heroLeaf} aria-hidden="true" />
            <span className={styles.heroImageNote}>People. Purpose. Possibility.</span>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <ImageTextSection
          id="about-foundation"
          eyebrow="About Trimurti Foundation"
          title="About Trimurti Foundation"
          subheading="Our mission and purpose"
          image="/elder support.png"
          imageAlt="Illustrative community gathering for support and learning"
        >
          <p>
            We believe everyone deserves the chance to learn, be well, feel safe
            and belong. Trimurti Foundation brings people, care and opportunity
            closer to home.
          </p>
          <p>
            Our purpose is to connect willing hands with community priorities,
            and to grow practical programs rooted in dignity, inclusion and
            shared responsibility.
          </p>
          <Link href="#mission-vision" className={styles.textButton}>
            Learn more about us <ArrowRight size={16} />
          </Link>
        </ImageTextSection>

        <ImageTextSection
          id="founder"
          eyebrow="Our founder"
          title="About our Founder"
          subheading="Leadership and vision"
          image="/WOMAN.jpg"
          imageAlt="Illustrative community portrait representing foundation leadership"
          reverse
          className={styles.founderSection}
        >
          <p>
            A spirit of service, respect and belief in people is at the heart of
            Trimurti Foundation. Our founder’s vision is to make compassion
            practical by bringing communities and people who want to help
            together.
          </p>
          <p className={styles.provisionalNote}>
            The founder’s name and approved biography will be added after
            confirmation by the foundation.
          </p>
          <Link href="#team" className={styles.textButton}>
            Know more about the founder <ArrowRight size={16} />
          </Link>
          <div className={styles.founderQuote}>
            <span aria-hidden="true">“</span>
            <p>Lasting change begins when we listen, care and act together.</p>
          </div>
        </ImageTextSection>

        <section
          className={styles.journeySection}
          id="journey"
          aria-labelledby="journey-title"
        >
          <div className={styles.journeyIntro}>
            <div>
              <p className={styles.eyebrow}>Our journey</p>
              <h2 id="journey-title">Our Journey</h2>
              <h3>The path we have taken</h3>
              <p>
                Every meaningful journey starts with listening and grows through
                the people who choose to take part.
              </p>
            </div>
            <div className={styles.journeyImage}>
              <Image
                src="/volunteer.jpg"
                alt="Illustrative volunteers joining hands in a community activity"
                fill
                sizes="(max-width: 760px) 100vw, 38vw"
              />
            </div>
          </div>
          <Timeline />
          <p className={styles.provisionalNote}>
            Milestone years and descriptions are draft placeholders pending
            verification by the foundation.
          </p>
        </section>

        <section
          className={styles.missionSection}
          id="mission-vision"
          aria-labelledby="mission-title"
        >
          <div className={styles.missionInner}>
            <div className={styles.missionIntro}>
              <p className={styles.eyebrow}>Mission &amp; vision</p>
              <h2 id="mission-title">Mission &amp; Vision</h2>
              <h3>What drives us</h3>
              <p>
                A shared belief in the potential of every person guides the work
                we aspire to do.
              </p>
            </div>
            <div className={styles.missionCards}>
              <MissionVisionCard
                title="Our mission"
                description="Empower individuals and communities through education, healthcare, livelihood and sustainable development programs."
                Icon={Target}
              />
              <MissionVisionCard
                title="Our vision"
                description="A just, inclusive and self-reliant society where every person has the opportunity to reach their full potential."
                Icon={Leaf}
              />
            </div>
            <div className={styles.missionImage}>
              <Image
                src="/education_empowerment.png"
                alt="Illustrative image representing learning and opportunity"
                fill
                sizes="(max-width: 760px) 100vw, 30vw"
              />
              <span>Opportunity grows when we grow together.</span>
            </div>
          </div>
        </section>

        <ImageTextSection
          id="governance"
          eyebrow="Governance & transparency"
          title="Governance & Transparency"
          subheading="Ethics and accountability"
          image="/partner as an organisation.jpg"
          imageAlt="Illustrative team meeting representing collaboration and accountability"
          className={styles.governanceSection}
        >
          <p>
            Trust is built through responsible governance, ethical practices and
            openness about how resources are used. We are committed to
            accountability and to sharing clear information about our work.
          </p>
          <p>
            Governance policies, financial information and audit documents will
            be published when approved and available.
          </p>
          <ul className={styles.governanceFeatures}>
            {governanceFeatures.map(({ label, Icon }) => (
              <li key={label}>
                <Icon size={17} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <Link href="#about-foundation" className={styles.textButton}>
            Learn more <ArrowRight size={16} />
          </Link>
        </ImageTextSection>

        <section className={styles.teamSection} id="team" aria-labelledby="team-title">
          <SectionHeading
            eyebrow="Advisory board / team"
            title="People behind the mission"
            description="Our advisory board and team bring diverse perspectives and expertise to the work of building stronger communities."
            align="center"
          />
          <div className={styles.teamGrid}>
            {teamProfiles.map((profile) => (
              <TeamCard key={profile.name} {...profile} />
            ))}
          </div>
          <p className={styles.provisionalNote}>
            Names, roles and photographs shown are illustrative placeholders and
            must be replaced with approved team details before publication.
          </p>
        </section>

        <CTASection />
      </div>
    </div>
  );
}
