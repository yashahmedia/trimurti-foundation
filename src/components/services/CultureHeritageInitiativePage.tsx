import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  Flower2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Leaf,
  Music2,
  Palette,
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
  },
  {
    title: "Culture & Heritage",
    subtitle: "Keeping roots alive",
    href: "/services/culture-heritage",
    icon: Landmark,
    active: true,
  },
];

const programmes = [
  {
    title: "Traditional Arts & Crafts",
    description:
      "Supporting traditional artists and helping cultural craftsmanship reach new generations.",
    image: "/culture_heritage.png",
    imageAlt: "An Indian classical dancer sharing traditional art and expression",
    icon: Palette,
  },
  {
    title: "Cultural Education",
    description:
      "Creating opportunities for children and young people to learn about Indian traditions and values.",
    image: "/education_empowerment.png",
    imageAlt: "A student learning with classmates in a community classroom",
    icon: BookOpen,
    id: "online-gurukul",
  },
  {
    title: "Heritage Conservation",
    description:
      "Supporting the preservation of temples, monuments and culturally important spaces.",
    image: "/heritage.png",
    imageAlt: "A historic Indian temple representing a shared cultural heritage",
    icon: Landmark,
    id: "heritage-preservation",
  },
  {
    title: "Community Engagement",
    description:
      "Bringing communities together through cultural events, festivals and shared traditions.",
    image: "/preserve.png",
    imageAlt: "Indian children learning classical dance with their teacher",
    icon: Music2,
    id: "cultural-events",
  },
];

const cultureFocusItems = [
  {
    title: "Preserve Traditions",
    description:
      "Keeping traditional knowledge, arts and cultural practices alive for future generations.",
    icon: Landmark,
  },
  {
    title: "Support Artisans",
    description:
      "Creating opportunities for traditional artists and craftspeople to sustain their skills.",
    icon: HandHeart,
  },
  {
    title: "Cultural Education",
    description:
      "Helping children and communities learn about their heritage, values and traditions.",
    icon: BookOpen,
  },
  {
    title: "Community Connection",
    description:
      "Bringing people together through cultural experiences, events and shared traditions.",
    icon: Users,
  },
];

const storyPoints = [
  { label: "Traditional Knowledge", icon: BookOpen },
  { label: "Cultural Learning", icon: GraduationCap },
  { label: "Artisan Support", icon: HandHeart },
  { label: "Community Participation", icon: Users },
];

const impactSteps = [
  {
    number: "01",
    title: "Preserve",
    description: "Protecting cultural spaces, traditions and knowledge.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Teach",
    description:
      "Helping younger generations discover and learn from their heritage.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Bringing communities together through shared cultural experiences.",
    icon: Users,
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
    title: "Environment & Welfare",
    href: "/services/environment-welfare",
    icon: Sprout,
  },
];

export default function CultureHeritageInitiativePage() {
  return (
    <div className="healthcare-page culture-service-page initiative-banner-page">
      <InitiativesBanner pageTitle="Culture & Heritage" />
      <section
        className="healthcare-hero"
        aria-labelledby="culture-hero-title"
      >
        <div className="healthcare-container healthcare-hero-grid">
          <CultureReveal className="healthcare-hero-copy">
            <p className="eyebrow">Culture &amp; Heritage</p>
            <h1 id="culture-hero-title">
              Preserving Our Roots,
              <br />
              Inspiring Future Generations
            </h1>
            <p className="healthcare-hero-description">
              We work to preserve and celebrate India&apos;s rich cultural
              heritage, traditional knowledge and living traditions while
              creating meaningful opportunities for future generations to stay
              connected with their roots.
            </p>
            <p className="healthcare-hero-promise">
              Heritage. Culture. Community. Tradition.
            </p>
          </CultureReveal>

          <CultureReveal className="healthcare-hero-visual" delay={0.12}>
            <div className="healthcare-image-frame healthcare-hero-image">
              <Image
                src="/preserve.png"
                alt="Indian classical dancers learning traditional art in a temple courtyard"
                fill
                loading="eager"
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <span
              className="healthcare-botanical healthcare-botanical-hero"
              aria-hidden="true"
            >
              <Flower2 />
            </span>
            <div className="healthcare-hero-note">
              <span className="healthcare-hero-note-icon" aria-hidden="true">
                <Landmark size={18} />
              </span>
              <span>Traditions carried forward, together</span>
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
        headingId="culture-approach-title"
        image="/heritage.png"
        imageAlt="A historic Indian temple and cultural gathering place"
        imageCaption="Heritage lives on when it is shared"
        panelTitle="What We Focus On"
        focusItems={cultureFocusItems}
        focusStatement="When heritage is shared, it continues to inspire future generations."
      >
        <p className="eyebrow">Our Approach</p>
        <h2 id="culture-approach-title">
          Preserving Heritage, Empowering Communities
        </h2>
        <p>
          Our work connects communities with their cultural roots by supporting
          traditional knowledge, heritage spaces, artisans and meaningful
          cultural experiences.
        </p>
        <p>
          By keeping traditions alive and creating opportunities for younger
          generations, we help cultural knowledge continue to grow.
        </p>
      </InitiativeApproachSection>

      <section
        className="healthcare-programmes healthcare-section"
        aria-labelledby="culture-programmes-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">What We Do</p>
            <h2 id="culture-programmes-title">
              Celebrating Culture &amp; Heritage
            </h2>
            <p>
              Creating meaningful ways for communities to preserve, experience
              and share their traditions.
            </p>
          </CultureReveal>

          <div className="healthcare-programme-grid">
            {programmes.map(
              ({ title, description, image, imageAlt, icon: Icon, id }, index) => (
                <CultureReveal
                  className="healthcare-programme-reveal"
                  delay={index * 0.08}
                  key={title}
                >
                  <article
                    className="healthcare-programme-card"
                    id={id}
                  >
                    {id === "heritage-preservation" && (
                      <span id="temple-support" className="culture-service-anchor" />
                    )}
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
                        href={
                          id === "online-gurukul"
                            ? "/contact?interest=online-gurukul"
                            : id === "cultural-events"
                              ? "/events"
                              : "/contact?interest=heritage-preservation"
                        }
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
        aria-labelledby="culture-story-title"
      >
        <div className="healthcare-container healthcare-two-column healthcare-access-grid">
          <CultureReveal className="healthcare-section-visual">
            <div className="healthcare-image-frame healthcare-editorial-image healthcare-access-image">
              <Image
                src="/preserve.png"
                alt="A teacher guiding young Indian dancers through a traditional performance"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <span
              className="healthcare-botanical healthcare-botanical-access"
              aria-hidden="true"
            >
              <Flower2 />
            </span>
          </CultureReveal>

          <CultureReveal
            className="healthcare-section-copy healthcare-access-copy"
            delay={0.1}
          >
            <p className="eyebrow">Tradition Today</p>
            <h2 id="culture-story-title">
              Traditions Today, Opportunities Tomorrow
            </h2>
            <p>
              Our cultural heritage becomes stronger when it is shared. We
              create opportunities for children, young people, artisans and
              communities to learn, participate and pass meaningful traditions
              forward.
            </p>
            <blockquote>
              “When traditions are shared, they become part of the future.”
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
        aria-labelledby="culture-steps-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading">
            <p className="eyebrow">A shared responsibility</p>
            <h2 id="culture-steps-title">How We Create Impact</h2>
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
        aria-labelledby="culture-cta-title"
      >
        <Image
          className="healthcare-cta-background"
          src="/culture_heritage.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="healthcare-cta-overlay" aria-hidden="true" />
        <span className="healthcare-cta-botanical" aria-hidden="true">
          <Flower2 />
        </span>
        <CultureReveal className="healthcare-container healthcare-cta-content">
          <p className="eyebrow">Support</p>
          <h2 id="culture-cta-title">Help Us Preserve Our Heritage</h2>
          <p>
            Your support helps preserve traditions, support cultural
            communities and create opportunities for future generations to stay
            connected with their roots.
          </p>
          <Link
            href="/donate?cause=heritage"
            className="healthcare-cta-button"
          >
            Support Our Heritage <ArrowRight size={17} />
          </Link>
        </CultureReveal>
      </section>

      <section
        className="healthcare-related healthcare-section"
        aria-labelledby="culture-related-title"
      >
        <div className="healthcare-container">
          <CultureReveal className="healthcare-section-heading healthcare-related-heading">
            <p className="eyebrow">Together, we create lasting change</p>
            <h2 id="culture-related-title">Explore Other Initiatives</h2>
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
