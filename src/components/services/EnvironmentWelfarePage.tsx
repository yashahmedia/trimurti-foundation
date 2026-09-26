import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Droplets,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  Recycle,
  Sprout,
  TreePine,
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
  },
  {
    title: "Environment & Welfare",
    subtitle: "Greener communities",
    href: "/services/environment-welfare",
    icon: Sprout,
    active: true,
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
    title: "Tree Plantation",
    description:
      "Creating greener spaces through community-led tree plantation and care.",
    image: "/environment_welfare.png",
    imageAlt: "A young volunteer planting a sapling in a green community space",
    icon: TreePine,
  },
  {
    title: "Waste Management",
    description:
      "Encouraging responsible waste practices, recycling and cleaner surroundings.",
    image: "/protect.png",
    imageAlt: "Community members working together outdoors to care for their surroundings",
    icon: Recycle,
  },
  {
    title: "Green Water Access",
    description:
      "Supporting awareness around responsible water use and conservation.",
    image: "/environment_welfare.png",
    imageAlt: "A child helping plant greenery in a community garden",
    icon: Droplets,
  },
  {
    title: "Community & Welfare",
    description:
      "Connecting environmental action with healthier and more resilient communities.",
    image: "/protect.png",
    imageAlt: "A family and volunteers taking part in a community environment initiative",
    icon: Users,
  },
];

const storyPoints = [
  { label: "Greener spaces", icon: Sprout },
  { label: "Community participation", icon: Users },
  { label: "Environmental awareness", icon: Lightbulb },
  { label: "Sustainable living", icon: Leaf },
];

const impactSteps = [
  {
    number: "01",
    title: "Connect",
    description:
      "We work with communities to understand local environmental needs.",
    icon: Users,
  },
  {
    number: "02",
    title: "Act",
    description:
      "We turn awareness into practical action through community-led initiatives.",
    icon: Sprout,
  },
  {
    number: "03",
    title: "Sustain",
    description:
      "We encourage habits and systems that continue creating positive impact.",
    icon: Recycle,
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
    title: "Elderly Care",
    href: "/services/elderly-care",
    icon: Users,
  },
  {
    title: "Culture & Heritage",
    href: "/services/culture-heritage",
    icon: Landmark,
  },
];

export default function EnvironmentWelfarePage() {
  return (
    <div className="healthcare-page environment-page initiative-banner-page">
      <InitiativesBanner pageTitle="Environment & Welfare" />
      <section
        className="healthcare-hero"
        aria-labelledby="environment-hero-title"
      >
        <div className="healthcare-container healthcare-hero-grid">
          <CultureReveal className="healthcare-hero-copy">
            <p className="eyebrow">Environment &amp; Welfare</p>
            <h1 id="environment-hero-title">
              Greener Communities,
              <br />
              Healthier Tomorrows
            </h1>
            <p className="healthcare-hero-description">
              We work with communities to create cleaner, greener and more
              sustainable spaces while encouraging people to care for the
              environment around them.
            </p>
            <p className="healthcare-hero-promise">
              Protect nature. Strengthen communities. Build a sustainable
              future.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-hero-visual" delay={0.12}>
            <div className="healthcare-image-frame healthcare-hero-image">
              <Image
                src="/environment_welfare.png"
                alt="A young Indian volunteer planting a sapling in a green community space"
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
                <Sprout size={18} />
              </span>
              <span>Small actions, rooted in community</span>
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
        headingId="environment-approach-title"
        image="/protect.png"
        imageAlt="Indian children and volunteers planting a young tree together"
        imageCaption="Greener futures begin with shared action"
      >
        <p className="eyebrow">Our Approach</p>
        <h2 id="environment-approach-title">
          Sustainable Actions, Stronger Communities
        </h2>
        <p>
          Our environmental initiatives encourage communities to care for
          their surroundings while creating practical opportunities for people
          to participate in greener, healthier living.
        </p>
        <p>
          From tree plantation and waste awareness to community-led
          environmental activities, we believe meaningful change begins with
          everyday action.
        </p>
      </InitiativeApproachSection>

      <section
        className="healthcare-programmes healthcare-section"
        aria-labelledby="environment-programmes-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">What We Do</p>
            <h2 id="environment-programmes-title">
              Building a Greener, Healthier Future
            </h2>
            <p>
              Small actions become meaningful when communities come together.
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
                        href="/volunteer?area=Environment%20%26%20Welfare"
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
        aria-labelledby="environment-story-title"
      >
        <div className="healthcare-container healthcare-two-column healthcare-access-grid">
          <CultureReveal className="healthcare-section-visual">
            <div className="healthcare-image-frame healthcare-editorial-image healthcare-access-image">
              <Image
                src="/protect.png"
                alt="Indian children and volunteers caring for a newly planted tree"
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

          <CultureReveal
            className="healthcare-section-copy healthcare-access-copy"
            delay={0.1}
          >
            <p className="eyebrow">Care in Action</p>
            <h2 id="environment-story-title">
              A Healthier Planet for Future Generations
            </h2>
            <p>
              Environmental care is closely connected to community wellbeing.
              By creating greener spaces and encouraging responsible choices,
              we can help build healthier places for people to live and grow.
            </p>
            <blockquote>
              “When communities care for nature, they create a healthier future
              for everyone.”
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
        aria-labelledby="environment-steps-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">A shared responsibility</p>
            <h2 id="environment-steps-title">How We Create Impact</h2>
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
        aria-labelledby="environment-cta-title"
      >
        <Image
          className="healthcare-cta-background"
          src="/protect.png"
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
          <h2 id="environment-cta-title">
            Help Us Build Greener Communities
          </h2>
          <p>
            Your support can help us create greener spaces, support community
            environmental initiatives and build healthier surroundings for
            future generations.
          </p>
          <Link
            href="/donate?cause=environment-welfare"
            className="healthcare-cta-button"
          >
            Support Environment &amp; Welfare <ArrowRight size={17} />
          </Link>
        </CultureReveal>
      </section>

      <section
        className="healthcare-related healthcare-section"
        aria-labelledby="environment-related-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading healthcare-related-heading">
            <p className="eyebrow">Together, we create lasting change</p>
            <h2 id="environment-related-title">Explore Other Initiatives</h2>
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
