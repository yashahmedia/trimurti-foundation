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
import InitiativesBanner from "@/components/services/InitiativesBanner";
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
      "Opening doors to learning, confidence and a brighter tomorrow.",
    image: "/education_empowerment.png",
    imageAlt: "A schoolgirl learning alongside her classmates",
    icon: BookOpen,
  },
  {
    title: "Learning Resources",
    description:
      "Helping learners access study materials and the tools they need to keep learning.",
    image: "/education-support.png",
    imageAlt: "A student reading a book in a classroom",
    icon: BookOpenCheck,
  },
  {
    title: "Skills & Livelihood",
    description:
      "Practical skills that nurture confidence and open up new opportunities.",
    image: "/women-empower.png",
    imageAlt: "A woman taking part in a skills and empowerment programme",
    icon: Laptop,
  },
  {
    title: "Mentorship & Guidance",
    description:
      "Encouragement and guidance to help students plan their next steps.",
    image: "/education.png",
    imageAlt: "A student focused on their studies",
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
    <div className="healthcare-page education-page initiative-banner-page">
      <InitiativesBanner pageTitle="Education & Empowerment" />
      <section
        className="healthcare-hero"
        aria-labelledby="education-hero-title"
      >
        <div className="healthcare-container healthcare-hero-grid">
          <CultureReveal className="healthcare-hero-copy">
            <p className="eyebrow">Education &amp; Empowerment</p>
            <h1 id="education-hero-title">
              Learning Opens Doors,
              <br />
              Empowerment Builds Futures
            </h1>
            <p className="healthcare-hero-description">
              We support children, students and families with access to
              education, skills and opportunities that help them shape a
              brighter future.
            </p>
            <p className="healthcare-hero-promise">
              Learning for today. Opportunity for tomorrow.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-hero-visual" delay={0.12}>
            <div className="healthcare-image-frame healthcare-hero-image">
              <Image
                src="/education_empowerment.png"
                alt="A schoolgirl engaged in classroom learning with her classmates"
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
              <span>Every learner deserves a chance to thrive</span>
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
        imageAlt="A student with a book, ready to continue learning"
        imageCaption="Helping every learner move forward"
      >
        <p className="eyebrow">Our Approach</p>
        <h2 id="education-approach-title">
          Education That Builds Opportunity
        </h2>
        <p>
          We believe education can help people build confidence, discover their
          strengths and take meaningful steps towards a more secure future.
        </p>
        <p>
          By supporting learning, practical skills and personal growth, we work
          to make opportunity more accessible to students and communities.
        </p>
      </InitiativeApproachSection>

      <section
        className="healthcare-programmes healthcare-section"
        aria-labelledby="education-programmes-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">Learning and growth</p>
            <h2 id="education-programmes-title">
              Learning, Skills &amp; Empowerment
            </h2>
            <p>
              Encouraging students and families with support that helps them
              learn, grow and take the next step.
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
                      <Link
                        href="/volunteer?area=Education%20Support"
                        aria-label={`Learn more about ${title}`}
                      >
                        Learn more <ArrowRight size={15} />
                      </Link>
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
            <p className="eyebrow">Beyond the Classroom</p>
            <h2 id="education-growth-title">
              Skills That Strengthen Independence
            </h2>
            <p>
              Empowerment continues beyond formal learning. Skills, mentorship
              and encouragement can help people recognize their potential and
              take part in shaping their own futures.
            </p>
            <blockquote>
              “When people have the chance to learn, they can create new
              possibilities for themselves and their communities.”
            </blockquote>
            <ul className="healthcare-support-points">
              <li>
                <span aria-hidden="true"><BookOpen size={15} /></span>
                Learning support
              </li>
              <li>
                <span aria-hidden="true"><Lightbulb size={15} /></span>
                Practical skills
              </li>
              <li>
                <span aria-hidden="true"><Users size={15} /></span>
                Mentorship
              </li>
              <li>
                <span aria-hidden="true"><Sprout size={15} /></span>
                Personal growth
              </li>
            </ul>
          </CultureReveal>

          <CultureReveal className="healthcare-section-visual" delay={0.1}>
            <div className="healthcare-image-frame healthcare-editorial-image healthcare-access-image">
              <Image
                src="/education-support.png"
                alt="A student studying in a bright classroom"
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
            Help Open Doors to Learning
          </h2>
          <p>
            Your time, skills and support can help learners access more
            opportunities and build confidence for the future.
          </p>
          <Link
            href="/volunteer?area=Education%20Support"
            className="healthcare-cta-button"
          >
            Support Education <ArrowRight size={17} />
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
