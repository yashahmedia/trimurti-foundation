import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  HeartPulse,
  Landmark,
  Laptop,
  Lightbulb,
  Sprout,
  Users,
} from "lucide-react";
import CultureReveal from "@/components/culture/CultureReveal";
import InitiativeApproachSection from "@/components/services/InitiativeApproachSection";

const initiatives = [
  {
    title: "Education & Empowerment",
    subtitle: "Learning & opportunity",
    href: "/services/education",
    icon: BookOpenCheck,
    active: true,
  },
  {
    title: "Healthcare Support",
    subtitle: "Access to care",
    href: "/services/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Annadhan & Nutrition",
    subtitle: "Meals & nourishment",
    href: "/services/nutrition",
    icon: Sprout,
  },
  {
    title: "Elderly Care",
    subtitle: "Support & dignity",
    href: "/services/elderly-care",
    icon: Users,
  },
  {
    title: "Environment & Welfare",
    subtitle: "Greener communities",
    href: "/services/environment-welfare",
    icon: Sprout,
  },
  {
    title: "Culture & Heritage",
    subtitle: "Keeping roots alive",
    href: "/services/culture-heritage",
    icon: Landmark,
  },
];

const learningProgrammes = [
  {
    title: "Education Support",
    description:
      "Books, notebooks, stationery and learning kits can help with the everyday costs of studying at school and at home.",
    image: "/education_empowerment.png",
    imageAlt: "Illustrative scene of students learning together",
    icon: BookOpen,
  },
  {
    title: "Learning Support",
    description:
      "Extra academic resources and community learning activities may help students strengthen foundational skills and keep learning.",
    image: "/education-support.png",
    imageAlt: "Illustrative image of a student reading in a classroom",
    icon: BookOpenCheck,
  },
  {
    title: "Digital Learning",
    description:
      "Where a programme identifies a need, support may provide digital learning resources or access to technology for study.",
    image: "/education.png",
    imageAlt: "Illustrative image representing access to study resources",
    icon: Laptop,
  },
  {
    title: "Skills & Career Guidance",
    description:
      "Mentoring, practical skills and career guidance can help young people consider and plan their next steps.",
    image: "/women-empower.png",
    imageAlt: "Illustrative image representing skills and empowerment",
    icon: Lightbulb,
  },
];

const relatedInitiatives = [
  { title: "Healthcare Support", href: "/services/healthcare", icon: HeartPulse },
  {
    title: "Annadhan & Nutrition",
    href: "/services/nutrition",
    icon: Sprout,
  },
  { title: "Elderly Care", href: "/services/elderly-care", icon: Users },
  { title: "Environment & Welfare", href: "/services/environment-welfare", icon: Sprout },
  { title: "Culture & Heritage", href: "/services/culture-heritage", icon: Landmark },
];

export default function EducationEmpowermentPage() {
  return (
    <div className="healthcare-page education-page">
      <section
        className="healthcare-hero"
        aria-labelledby="education-hero-title"
      >
        <div className="healthcare-container healthcare-hero-grid">
          <CultureReveal className="healthcare-hero-copy">
            <p className="eyebrow">Education &amp; Empowerment</p>
            <h1 id="education-hero-title">
              A Child&apos;s Education
              <br />
              {" "}
              Shouldn&apos;t Depend on Income
            </h1>
            <p className="healthcare-hero-description">
              Every child deserves the chance to learn, grow and build a future.
              For many families, education costs and gaps in learning support
              can become barriers. Trimurti Foundation&apos;s education initiative
              aims to make learning resources, guidance and skills support more
              accessible.
            </p>
            <p className="healthcare-hero-promise">
              Learning resources and guidance for students who need added support.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-hero-visual" delay={0.12}>
            <div className="healthcare-image-frame healthcare-hero-image">
              <Image
                src="/education_empowerment.png"
                alt="Illustrative scene of a school-age learner reading with classmates"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <span
              className="healthcare-botanical healthcare-botanical-hero"
              aria-hidden="true"
            >
              <BookOpen />
            </span>
            <div className="healthcare-hero-note">
              <span className="healthcare-hero-note-icon" aria-hidden="true">
                <Lightbulb size={18} />
              </span>
              <span>Education should not depend on family income</span>
            </div>
          </CultureReveal>
        </div>
      </section>

      <section
        className="healthcare-initiative-strip"
        aria-label="Explore our initiatives"
      >
        <div className="healthcare-container">
          <nav className="healthcare-initiative-nav">
            {initiatives.map(({ title, subtitle, href, icon: Icon, active }) => (
              <Link
                className={`healthcare-initiative-item${active ? " is-active" : ""}`}
                href={href}
                key={title}
                aria-current={active ? "page" : undefined}
              >
                <span className="healthcare-initiative-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <span className="healthcare-initiative-copy">
                  <span className="healthcare-initiative-title">{title}</span>
                  <span className="healthcare-initiative-subtitle">
                    {subtitle}
                  </span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <InitiativeApproachSection
        headingId="education-approach-title"
        image="/education.png"
        imageAlt="Illustrative image of a learner studying with a book"
        imageCaption="Learning support can include resources and guidance"
      >
        <p className="eyebrow">Why education support matters</p>
        <h2 id="education-approach-title">
          Why Are We Asking You to Support Education?
        </h2>
        <p>
          School enrolment is important, but being in school does not always
          mean a child has the books, stationery, digital access or individual
          learning support they need. For families balancing essential costs,
          these resources can be difficult to provide.
        </p>
        <p>
          ASER Centre&apos;s 2024 rural India survey found that 23.4% of Class III
          children in government schools could read a Class II-level text, and
          27.6% could solve a basic subtraction problem. These are survey
          findings, not results from Trimurti Foundation programmes.
        </p>
        <p>
          <small>
            Source: <a href="https://asercentre.org/aser-2024/" target="_blank" rel="noreferrer">ASER Centre, ASER 2024</a>.
          </small>
        </p>
      </InitiativeApproachSection>

      <section
        className="healthcare-programmes healthcare-section"
        aria-labelledby="education-programmes-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">Education support</p>
            <h2 id="education-programmes-title">
              Where Your Education Donation May Go
            </h2>
            <p>
              Contributions may support learning resources, academic activities,
              digital access where appropriate, and skills guidance. Essential
              coordination, record-keeping and reporting also take resources; we
              do not claim a fixed allocation or percentage.
            </p>
          </CultureReveal>

          <div className="healthcare-programme-grid">
            {learningProgrammes.map(
              ({ title, description, image, imageAlt, icon: Icon }, index) => (
                <CultureReveal
                  className="healthcare-programme-reveal"
                  delay={index * 0.08}
                  key={title}
                >
                  <article className="healthcare-programme-card">
                    <div className="healthcare-programme-image">
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 25vw"
                      />
                      <span
                        className="healthcare-programme-icon"
                        aria-hidden="true"
                      >
                        <Icon size={19} strokeWidth={1.8} />
                      </span>
                    </div>
                    <div className="healthcare-programme-copy">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                </CultureReveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="healthcare-access healthcare-section education-growth"
        aria-labelledby="education-growth-title"
      >
        <div className="healthcare-container healthcare-two-column healthcare-access-grid">
          <CultureReveal className="healthcare-section-copy healthcare-access-copy">
            <p className="eyebrow">Beyond the classroom</p>
            <h2 id="education-growth-title">
              Education Is the Beginning - Empowerment Is the Goal
            </h2>
            <p>
              Education can help a learner build skills, confidence,
              decision-making and future work options. Those opportunities may
              extend beyond one learner to families and communities. We aim to
              earn donor trust through clear objectives, documented activities,
              responsible financial and appropriate beneficiary records, regular
              programme updates and learning from results.
            </p>
            <blockquote>
              “We don&apos;t want you to support us simply because you trust our
              words. We want to earn your trust through our actions, records and
              results.”
            </blockquote>
            <ul className="healthcare-support-points">
              <li>
                <span aria-hidden="true"><BookOpen size={15} /></span>
                Students supported: verified figure to be added
              </li>
              <li>
                <span aria-hidden="true"><Lightbulb size={15} /></span>
                Learning kits distributed: verified figure to be added
              </li>
              <li>
                <span aria-hidden="true"><Users size={15} /></span>
                Students mentored: verified figure to be added
              </li>
              <li>
                <span aria-hidden="true"><Sprout size={15} /></span>
                Communities reached: verified figure to be added
              </li>
            </ul>
            <p className="healthcare-impact-note">
              Education-specific impact totals are not yet published here; figures
              should be added after they are checked against programme records.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-section-visual" delay={0.1}>
            <div className="healthcare-image-frame healthcare-editorial-image healthcare-access-image">
              <Image
                src="/education-support.png"
                alt="Illustrative image of a student studying in a classroom"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
          </CultureReveal>
        </div>
      </section>

      <section
        className="healthcare-cta education-cta"
        aria-labelledby="education-cta-title"
      >
        <Image
          className="healthcare-cta-background"
          src="/education_empowerment.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="healthcare-cta-overlay" aria-hidden="true" />
        <span className="healthcare-cta-botanical" aria-hidden="true">
          <BookOpen />
        </span>
        <CultureReveal className="healthcare-container healthcare-cta-content">
          <p className="eyebrow">Join our mission</p>
          <h2 id="education-cta-title">
            Help Us Open More Doors to Education
          </h2>
          <p>
            There are children and young people with the ability and desire to
            learn who may need someone to stand behind them. Your contribution
            can help provide learning resources, additional support and guidance.
          </p>
          <p>
            We believe donors deserve clear information about how contributions
            are used. No fixed percentage or education-specific impact total is
            claimed on this page.
          </p>
          <Link
            href="/donate"
            className="healthcare-cta-button"
          >
            Donate for Education <ArrowRight size={17} />
          </Link>
        </CultureReveal>
      </section>

      <section
        className="healthcare-related healthcare-section"
        aria-labelledby="education-related-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading healthcare-related-heading">
            <p className="eyebrow">Together, we create lasting change</p>
            <h2 id="education-related-title">Explore Other Initiatives</h2>
          </CultureReveal>
          <div className="healthcare-related-grid">
            {relatedInitiatives.map(({ title, href, icon: Icon }, index) => (
              <CultureReveal
                className="healthcare-related-reveal"
                delay={index * 0.06}
                key={title}
              >
                <Link className="healthcare-related-card" href={href}>
                  <span className="healthcare-related-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span>{title}</span>
                  <ArrowRight
                    className="healthcare-related-arrow"
                    size={16}
                    aria-hidden="true"
                  />
                </Link>
              </CultureReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
