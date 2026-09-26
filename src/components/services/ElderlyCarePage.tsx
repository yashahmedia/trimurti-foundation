import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  HandHeart,
  HeartPulse,
  Landmark,
  Leaf,
  MapPin,
  MessageCircleHeart,
  ShieldCheck,
  Sprout,
  Stethoscope,
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
    icon: Leaf,
  },
  {
    title: "Elderly Care",
    subtitle: "Support & dignity",
    href: "/services/elderly-care",
    icon: Users,
    active: true,
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

const programmes = [
  {
    title: "Healthcare Support",
    description:
      "Helping seniors access essential health guidance, check-ups and wellbeing support.",
    image: "/healthcare_support.png",
    imageAlt: "A healthcare worker offering attentive support to an older woman",
    icon: Stethoscope,
  },
  {
    title: "Companionship",
    description:
      "Creating opportunities for conversation, connection and meaningful social interaction.",
    image: "/elderly_care.png",
    imageAlt: "An older Indian couple sharing a joyful moment with a caregiver",
    icon: MessageCircleHeart,
  },
  {
    title: "Daily Care Support",
    description:
      "Supporting everyday needs while preserving dignity, independence and comfort.",
    image: "/elder support.png",
    imageAlt: "A younger volunteer spending time with an older community member",
    icon: HandHeart,
  },
  {
    title: "Belonging & Activities",
    description:
      "Creating community activities that help older adults stay engaged, valued and connected.",
    image: "/elderly_care.png",
    imageAlt: "Older adults connecting with a younger community caregiver",
    icon: Users,
  },
];

const impactMetrics = [
  { value: "200+", label: "Seniors Supported", icon: Users },
  { value: "30+", label: "Community Activities", icon: CalendarDays },
  { value: "100+", label: "Care & Support Visits", icon: HandHeart },
  { value: "12+", label: "Communities Reached", icon: MapPin },
];

const storyPoints = [
  { label: "Companionship", icon: MessageCircleHeart },
  { label: "Health & wellbeing", icon: HeartPulse },
  { label: "Daily support", icon: HandHeart },
  { label: "Community connection", icon: Users },
];

const impactSteps = [
  {
    number: "01",
    title: "Connect",
    description:
      "We build meaningful relationships and create spaces where seniors feel heard and valued.",
    icon: MessageCircleHeart,
  },
  {
    number: "02",
    title: "Support",
    description:
      "We provide practical care, guidance and access to essential community resources.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Empower",
    description:
      "We encourage participation, independence and continued connection with the community.",
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
    title: "Healthcare Support",
    href: "/services/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Annadhan & Nutrition",
    href: "/services/nutrition",
    icon: Leaf,
  },
  {
    title: "Environment & Welfare",
    href: "/services/environment-welfare",
    icon: Sprout,
  },
  {
    title: "Culture & Heritage",
    href: "/services/culture-heritage",
    icon: Landmark,
  },
];

export default function ElderlyCarePage() {
  return (
    <div className="healthcare-page elderly-page initiative-banner-page">
      <InitiativesBanner pageTitle="Elderly Care" />
      <section className="healthcare-hero" aria-labelledby="elderly-hero-title">
        <div className="healthcare-container healthcare-hero-grid">
          <CultureReveal className="healthcare-hero-copy">
            <p className="eyebrow">Elderly Care</p>
            <h1 id="elderly-hero-title">
              Respect, Care &amp;
              <br />
              Dignity at Every Stage
            </h1>
            <p className="healthcare-hero-description">
              We work to support the wellbeing of older adults through
              companionship, care, essential support and opportunities to
              remain connected with their communities.
            </p>
            <p className="healthcare-hero-promise">
              Compassion. Dignity. Belonging.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-hero-visual" delay={0.12}>
            <div className="healthcare-image-frame healthcare-hero-image">
              <Image
                src="/elderly_care.png"
                alt="An older Indian couple sharing a joyful moment with a younger caregiver"
                fill
                loading="eager"
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
                <HandHeart size={18} />
              </span>
              <span>Care, companionship and a place to belong</span>
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
        headingId="elderly-approach-title"
        image="/elder support.png"
        imageAlt="A younger volunteer sharing a warm moment with an older Indian man"
        imageCaption="Companionship that nurtures belonging"
        metrics={impactMetrics}
        impactNote="These illustrative figures are placeholders and should be updated with verified programme data."
      >
        <p className="eyebrow">Our Approach</p>
        <h2 id="elderly-approach-title">
          Compassionate Support for Every Senior
        </h2>
        <p>
          Our elderly care initiatives focus on creating spaces where older
          adults feel respected, supported and connected. We work to make
          everyday life more dignified through companionship, essential
          support and community engagement.
        </p>
        <p>
          Because caring for our elders means more than meeting physical needs —
          it means creating a sense of belonging.
        </p>
        <Link className="healthcare-text-link button" href="/about-us">
          Learn More About Our Work <ArrowRight size={16} />
        </Link>
      </InitiativeApproachSection>

      <section
        className="healthcare-programmes healthcare-section"
        aria-labelledby="elderly-programmes-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">What We Do</p>
            <h2 id="elderly-programmes-title">
              Supporting Our Older Citizens
            </h2>
            <p>
              Creating meaningful support systems that promote dignity,
              connection and wellbeing.
            </p>
          </CultureReveal>

          <div className="healthcare-programme-grid">
            {programmes.map(
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
                        href="/volunteer?area=Elderly%20Care"
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
        className="healthcare-access healthcare-section"
        aria-labelledby="elderly-story-title"
      >
        <div className="healthcare-container healthcare-two-column healthcare-access-grid">
          <CultureReveal className="healthcare-section-visual">
            <div className="healthcare-image-frame healthcare-editorial-image healthcare-access-image">
              <Image
                src="/elderly_care.png"
                alt="An older Indian couple smiling together with a younger caregiver"
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

          <CultureReveal className="healthcare-section-copy healthcare-access-copy" delay={0.1}>
            <p className="eyebrow">Care in Action</p>
            <h2 id="elderly-story-title">
              A Brighter Tomorrow for Our Elders
            </h2>
            <p>
              Every older adult deserves to feel seen, valued and supported.
              Our work focuses on creating meaningful connections and
              practical support that help seniors live with greater dignity
              and confidence.
            </p>
            <blockquote>
              “Caring for our elders is a way of honouring the generations who
              built our communities.”
            </blockquote>
            <ul className="healthcare-support-points">
              {storyPoints.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <span aria-hidden="true">
                    <Icon size={15} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </CultureReveal>
        </div>
      </section>

      <section
        className="healthcare-steps healthcare-section"
        aria-labelledby="elderly-steps-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">A shared responsibility</p>
            <h2 id="elderly-steps-title">How We Create Impact</h2>
          </CultureReveal>

          <div className="healthcare-steps-grid">
            {impactSteps.map(({ number, title, description, icon: Icon }, index) => (
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
        aria-labelledby="elderly-cta-title"
      >
        <Image
          className="healthcare-cta-background"
          src="/elderly_care.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="healthcare-cta-overlay" aria-hidden="true" />
        <span className="healthcare-cta-botanical" aria-hidden="true">
          <Leaf />
        </span>
        <CultureReveal className="healthcare-container healthcare-cta-content">
          <p className="eyebrow">Request a Support</p>
          <h2 id="elderly-cta-title">
            Help Us Support Our Senior Citizens
          </h2>
          <p>
            Your support can help us create companionship, provide essential
            care and build more dignified lives for older adults.
          </p>
          <Link
            href="/donate?cause=elder-support"
            className="healthcare-cta-button"
          >
            Support Elderly Care <ArrowRight size={17} />
          </Link>
        </CultureReveal>
      </section>

      <section
        className="healthcare-related healthcare-section"
        aria-labelledby="elderly-related-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading healthcare-related-heading">
            <p className="eyebrow">Together, we create lasting change</p>
            <h2 id="elderly-related-title">Explore Other Initiatives</h2>
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
