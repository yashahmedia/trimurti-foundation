import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  MapPin,
  Sprout,
  Utensils,
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
    icon: Utensils,
    active: true,
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

const programmes = [
  {
    title: "Community Meals",
    description:
      "Providing wholesome meals to individuals and families through community-led initiatives.",
    image: "/annadhan_nutrition.png",
    imageAlt: "A volunteer serving a warm meal to an older community member",
    icon: Utensils,
  },
  {
    title: "Nutrition Support",
    description:
      "Supporting better nutrition and healthier food choices for children and vulnerable communities.",
    image: "/We provide.jpeg",
    imageAlt: "A volunteer sharing essential food support with a family",
    icon: HeartPulse,
  },
  {
    title: "Food Distribution",
    description:
      "Reaching communities with essential food support during times of need.",
    image: "/annadhan_nutrition.png",
    imageAlt: "A community volunteer serving food to people in need",
    icon: MapPin,
  },
  {
    title: "Nutrition Awareness",
    description:
      "Helping families understand the importance of balanced, nutritious and sustainable diets.",
    image: "/education_empowerment.png",
    imageAlt: "Children learning together in a community classroom",
    icon: Lightbulb,
  },
];

const storyPoints = [
  { label: "Nutritious meals", icon: Utensils },
  { label: "Community support", icon: Users },
  { label: "Dignified care", icon: HeartPulse },
];

const impactSteps = [
  {
    number: "01",
    title: "Reach",
    description:
      "We connect with communities and identify where food support is needed most.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Nourish",
    description:
      "We provide wholesome meals and nutrition support with dignity and care.",
    icon: Utensils,
  },
  {
    number: "03",
    title: "Empower",
    description:
      "We promote healthier choices and stronger, more resilient communities.",
    icon: Sprout,
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
  { title: "Elderly Care", href: "/services/elderly-care", icon: Users },
  { title: "Environment & Welfare", href: "/services/environment-welfare", icon: Leaf },
  {
    title: "Culture & Heritage",
    href: "/services/culture-heritage",
    icon: Landmark,
  },
];

export default function AnnadhanNutritionPage() {
  return (
    <div className="healthcare-page annadhan-page initiative-banner-page">
      <InitiativesBanner pageTitle="Annadhan & Nutrition" />
      <section
        className="healthcare-hero"
        aria-labelledby="annadhan-hero-title"
      >
        <div className="healthcare-container healthcare-hero-grid">
          <CultureReveal className="healthcare-hero-copy">
            <p className="eyebrow">Annadhan &amp; Nutrition</p>
            <h1 id="annadhan-hero-title">
              Nourishing Communities,
              <br />
              Building Healthier Futures
            </h1>
            <p className="healthcare-hero-description">
              We work to ensure that nutritious food reaches individuals and
              families who need it most, while promoting healthier and more
              dignified communities.
            </p>
            <p className="healthcare-hero-promise">
              Nutritious meals. Dignity in care. Stronger communities.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-hero-visual" delay={0.12}>
            <div className="healthcare-image-frame healthcare-hero-image">
              <Image
                src="/annadhan_nutrition.png"
                alt="A volunteer serving a meal to an older person at a community food programme"
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
                <Utensils size={18} />
              </span>
              <span>Sharing nourishment, with dignity and care</span>
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
        headingId="annadhan-approach-title"
        image="/We provide.jpeg"
        imageAlt="A volunteer sharing food support with a family"
        imageCaption="Food support shared with compassion"
      >
        <p className="eyebrow">Our Approach</p>
        <h2 id="annadhan-approach-title">
          Food With Dignity, Care With Purpose
        </h2>
        <p>
          Our Annadhan initiatives focus on providing nutritious meals and food
          support to communities while ensuring that every person is treated
          with dignity and compassion.
        </p>
        <p>
          From community meal programmes to nutrition awareness, we work to
          make food security and wellbeing a shared responsibility.
        </p>
      </InitiativeApproachSection>

      <section
        className="healthcare-programmes healthcare-section"
        aria-labelledby="annadhan-programmes-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">Food for wellbeing</p>
            <h2 id="annadhan-programmes-title">
              Supporting Nutrition &amp; Wellbeing
            </h2>
            <p>
              Creating access to nutritious food while building healthier
              communities.
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
                        href="/volunteer?area=Annadhan%20%26%20Nutrition"
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
        className="healthcare-access healthcare-section annadhan-story"
        aria-labelledby="annadhan-story-title"
      >
        <div className="healthcare-container healthcare-two-column healthcare-access-grid">
          <CultureReveal className="healthcare-section-copy healthcare-access-copy">
            <p className="eyebrow">Care in Action</p>
            <h2 id="annadhan-story-title">
              Every Meal Can Create a Ripple of Hope
            </h2>
            <p>
              A nutritious meal can do more than fill a plate. It can bring
              comfort, dignity and strength to someone facing a difficult day.
            </p>
            <blockquote>
              “Food is one of the simplest ways to turn compassion into
              action.”
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

          <CultureReveal className="healthcare-section-visual" delay={0.1}>
            <div className="healthcare-image-frame healthcare-editorial-image healthcare-access-image">
              <Image
                src="/annadhan_nutrition.png"
                alt="A volunteer serving a warm meal with care to an older community member"
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
        aria-labelledby="annadhan-steps-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">A shared responsibility</p>
            <h2 id="annadhan-steps-title">How We Create Impact</h2>
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
        className="healthcare-cta annadhan-cta"
        aria-labelledby="annadhan-cta-title"
      >
        <Image
          className="healthcare-cta-background"
          src="/annadhan_nutrition.png"
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
          <h2 id="annadhan-cta-title">Help Us Nourish More Communities</h2>
          <p>
            Your support can help us provide nutritious meals, strengthen food
            programmes and reach more families in need.
          </p>
          <Link
            href="/donate?cause=nutrition"
            className="healthcare-cta-button"
          >
            Support Annadhan <ArrowRight size={17} />
          </Link>
        </CultureReveal>
      </section>

      <section
        className="healthcare-related healthcare-section"
        aria-labelledby="annadhan-related-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading healthcare-related-heading">
            <p className="eyebrow">Together, we create lasting change</p>
            <h2 id="annadhan-related-title">Explore Other Initiatives</h2>
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
