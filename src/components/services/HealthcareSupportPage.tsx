import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpenCheck,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Users,
  Utensils,
} from "lucide-react";
import CultureReveal from "@/components/culture/CultureReveal";
import InitiativesBanner from "@/components/services/InitiativesBanner";

const initiatives = [
  {
    title: "Education & Empowerment",
    subtitle: "Learning & opportunity",
    href: "/services/education",
    icon: BookOpenCheck,
  },
  {
    title: "Healthcare Support",
    subtitle: "Access to care",
    href: "/services/healthcare",
    icon: HeartPulse,
    active: true,
  },
  {
    title: "Annadhan & Nutrition",
    subtitle: "Meals & nourishment",
    href: "/services/nutrition",
    icon: Utensils,
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

const healthProgrammes = [
  {
    title: "Community Health Camps",
    description:
      "Connecting communities with basic health screenings, consultations and guidance.",
    image: "/health support.png",
    imageAlt: "A doctor checking an older woman's blood pressure at a health camp",
    icon: Stethoscope,
  },
  {
    title: "Health Awareness",
    description:
      "Helping families understand preventive care, hygiene, nutrition and healthy living.",
    image: "/healthcare_support.png",
    imageAlt: "A healthcare worker caring for an older woman",
    icon: Lightbulb,
  },
  {
    title: "Preventive Healthcare",
    description:
      "Encouraging early awareness and timely action to support better health outcomes.",
    image: "/healthcare_support.png",
    imageAlt: "A doctor discussing preventive care with an older woman",
    icon: ShieldCheck,
  },
  {
    title: "Elder & Family Care",
    description:
      "Supporting vulnerable individuals and families with care, guidance and dignity.",
    image: "/elderly_care.png",
    imageAlt: "A caregiver offering support to an older woman",
    icon: Users,
  },
];

const impactMetrics = [
  { value: "500+", label: "People Reached", icon: Users },
  { value: "25+", label: "Health Camps", icon: Stethoscope },
  { value: "100+", label: "Awareness Sessions", icon: Lightbulb },
  { value: "12+", label: "Communities Supported", icon: MapPin },
];

const supportPoints = [
  { label: "Accessible care", icon: HeartPulse },
  { label: "Health awareness", icon: Lightbulb },
  { label: "Preventive support", icon: ShieldCheck },
  { label: "Community outreach", icon: MapPin },
];

const supportSteps = [
  {
    number: "01",
    title: "Reach",
    description:
      "We connect with communities through local programmes and outreach.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Support",
    description:
      "We provide healthcare guidance, awareness and access to essential support.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Empower",
    description:
      "We help individuals and families make informed choices for healthier lives.",
    icon: Activity,
  },
];

const relatedInitiatives = [
  {
    title: "Education & Empowerment",
    href: "/services/education",
    icon: BookOpenCheck,
  },
  {
    title: "Annadhan & Nutrition",
    href: "/services/nutrition",
    icon: Utensils,
  },
  { title: "Elderly Care", href: "/services/elderly-care", icon: Users },
  { title: "Environment & Welfare", href: "/services/environment-welfare", icon: Leaf },
  {
    title: "Culture & Heritage",
    href: "/services/culture-heritage",
    icon: Landmark,
  },
];

export default function HealthcareSupportPage() {
  return (
    <div className="healthcare-page initiative-banner-page">
      <InitiativesBanner pageTitle="Healthcare Support" />
      <section
        className="healthcare-hero"
        aria-labelledby="healthcare-hero-title"
      >
        <div className="healthcare-container healthcare-hero-grid">
          <CultureReveal className="healthcare-hero-copy">
            <p className="eyebrow">Healthcare Support</p>
            <h1 id="healthcare-hero-title">
              Healthier Communities,
              <br />
              Stronger Futures
            </h1>
            <p className="healthcare-hero-description">
              We work to make essential healthcare, awareness and wellbeing
              support more accessible to individuals and families who need it
              most.
            </p>
            <p className="healthcare-hero-promise">
              Accessible care. Greater awareness. Healthier communities.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-hero-visual" delay={0.12}>
            <div className="healthcare-image-frame healthcare-hero-image">
              <Image
                src="/health support.png"
                alt="A doctor checking an older woman's blood pressure at a community clinic"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <span
              className="healthcare-botanical healthcare-botanical-hero"
              aria-hidden="true"
            >
              <Leaf />
            </span>
            <div className="healthcare-hero-note">
              <span className="healthcare-hero-note-icon" aria-hidden="true">
                <HeartPulse size={18} />
              </span>
              <span>Compassionate care, closer to home</span>
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

      <section
        className="healthcare-approach healthcare-section"
        aria-labelledby="healthcare-approach-title"
      >
        <div className="healthcare-container healthcare-two-column">
          <CultureReveal className="healthcare-section-visual">
            <div className="healthcare-image-frame healthcare-editorial-image">
              <Image
                src="/elderly_care.png"
                alt="A caregiver offering reassurance and support to an older couple"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <span className="healthcare-image-caption">
              Care rooted in dignity and trust
            </span>
          </CultureReveal>

          <CultureReveal className="healthcare-section-copy" delay={0.1}>
            <p className="eyebrow">Our Approach</p>
            <h2 id="healthcare-approach-title">
              Care That Reaches Communities
            </h2>
            <p>
              Our healthcare initiatives focus on bringing essential support
              closer to communities through awareness programmes, health camps,
              preventive care and guidance.
            </p>
            <p>
              We believe better health begins with access to the right
              information, timely support and compassionate care.
            </p>
            <Link className="healthcare-text-link" href="/about-us">
              Learn More About Our Work <ArrowRight size={17} />
            </Link>
          </CultureReveal>
        </div>
      </section>

      <section
        className="healthcare-programmes healthcare-section"
        aria-labelledby="healthcare-programmes-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">Care for every stage of life</p>
            <h2 id="healthcare-programmes-title">
              Supporting Health &amp; Wellbeing
            </h2>
            <p>
              Creating access to care, awareness and support where it matters
              most.
            </p>
          </CultureReveal>

          <div className="healthcare-programme-grid">
            {healthProgrammes.map(
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
                        href="/volunteer?area=Healthcare%20Support"
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
        className="healthcare-impact healthcare-section"
        aria-labelledby="healthcare-impact-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-impact-heading">
            <p className="eyebrow">Our Impact</p>
            <h2 id="healthcare-impact-title">Care that makes a difference</h2>
          </CultureReveal>
          <div className="healthcare-impact-grid">
            {impactMetrics.map(({ value, label, icon: Icon }, index) => (
              <CultureReveal
                className="healthcare-impact-reveal"
                delay={index * 0.07}
                key={label}
              >
                <div className="healthcare-impact-card">
                  <span className="healthcare-impact-icon" aria-hidden="true">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </CultureReveal>
            ))}
          </div>
          <p className="healthcare-impact-note">
            Our healthcare impact grows through the continued support of
            volunteers, partners and local communities.
          </p>
        </div>
      </section>

      <section
        className="healthcare-access healthcare-section"
        aria-labelledby="healthcare-access-title"
      >
        <div className="healthcare-container healthcare-two-column healthcare-access-grid">
          <CultureReveal className="healthcare-section-copy healthcare-access-copy">
            <p className="eyebrow">Care in Action</p>
            <h2 id="healthcare-access-title">
              Making Healthcare More Accessible
            </h2>
            <p>
              From health awareness to community-based support, our work
              focuses on making care more approachable and accessible for
              people who may otherwise face barriers.
            </p>
            <blockquote>
              “Good health is the foundation from which stronger communities
              grow.”
            </blockquote>
            <ul className="healthcare-support-points">
              {supportPoints.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <span aria-hidden="true">
                    <Icon size={15} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </CultureReveal>

          <CultureReveal className="healthcare-section-visual" delay={0.1}>
            <div className="healthcare-image-frame healthcare-editorial-image healthcare-access-image">
              <Image
                src="/health support.png"
                alt="A doctor checking an older woman's blood pressure during a community visit"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <span
              className="healthcare-botanical healthcare-botanical-access"
              aria-hidden="true"
            >
              <Sprout />
            </span>
          </CultureReveal>
        </div>
      </section>

      <section
        className="healthcare-steps healthcare-section"
        aria-labelledby="healthcare-steps-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">Working together</p>
            <h2 id="healthcare-steps-title">
              How We Support Communities
            </h2>
          </CultureReveal>

          <div className="healthcare-steps-grid">
            {supportSteps.map(({ number, title, description, icon: Icon }, index) => (
              <CultureReveal
                className="healthcare-step-reveal"
                delay={index * 0.1}
                key={number}
              >
                <article className="healthcare-step-card">
                  <div className="healthcare-step-topline">
                    <span className="healthcare-step-number">{number}</span>
                    <span className="healthcare-step-icon" aria-hidden="true">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </CultureReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="healthcare-cta"
        aria-labelledby="healthcare-cta-title"
      >
        <Image
          className="healthcare-cta-background"
          src="/healthcare_support.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="healthcare-cta-overlay" aria-hidden="true" />
        <span
          className="healthcare-cta-botanical"
          aria-hidden="true"
        >
          <Leaf />
        </span>
        <CultureReveal className="healthcare-container healthcare-cta-content">
          <p className="eyebrow">Request a Support</p>
          <h2 id="healthcare-cta-title">
            Help Us Build Healthier Communities
          </h2>
          <p>
            Your support can help us reach more families, organize community
            health initiatives and create access to essential healthcare
            support.
          </p>
          <Link href="/donate?cause=healthcare" className="healthcare-cta-button">
            Support Healthcare <ArrowRight size={17} />
          </Link>
        </CultureReveal>
      </section>

      <section
        className="healthcare-related healthcare-section"
        aria-labelledby="healthcare-related-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading healthcare-related-heading">
            <p className="eyebrow">Together, we create lasting change</p>
            <h2 id="healthcare-related-title">Explore Other Initiatives</h2>
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
