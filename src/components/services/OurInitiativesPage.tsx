import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Leaf,
  Sprout,
  Users,
} from "lucide-react";
import InitiativesBanner from "@/components/services/InitiativesBanner";

const initiativeNavigator = [
  {
    title: "Education & Empowerment",
    subtitle: "Learning & opportunity",
    icon: GraduationCap,
    href: "/services/education",
  },
  {
    title: "Healthcare Support",
    subtitle: "Access to care",
    icon: HeartPulse,
    href: "/services/healthcare",
  },
  {
    title: "Annadhan & Nutrition",
    subtitle: "Meals & nourishment",
    icon: Leaf,
    href: "/services/nutrition",
  },
  {
    title: "Elderly Care",
    subtitle: "Support & dignity",
    icon: Users,
    href: "/services/elderly-care",
  },
  {
    title: "Environment & Welfare",
    subtitle: "Greener communities",
    icon: Sprout,
    href: "/services/environment-welfare",
  },
  {
    title: "Culture & Heritage",
    subtitle: "Keeping roots alive",
    icon: Landmark,
    href: "/services/culture-heritage",
  },
];

const impactMetrics = [
  { value: "1,500+", label: "children supported" },
  { value: "300+", label: "families reached" },
  { value: "18+", label: "community programs" },
  { value: "94%", label: "of support directed to frontline care" },
];

const featuredInitiatives = [
  {
    title: "Learning & Skill Development",
    description:
      "We create access to scholarships, basic learning support and practical training that opens stronger future pathways.",
    image: "/education_empowerment.png",
    href: "/volunteer",
  },
  {
    title: "Healthcare Access",
    description:
      "From health camps to crisis support, we help families access timely care, treatment and wellness services.",
    image: "/healthcare_support.png",
    href: "/volunteer",
  },
  {
    title: "Nourishment & Relief",
    description:
      "Annadhan drives ensure regular meals, essential groceries and compassionate support for families facing hardship.",
    image: "/annadhan_nutrition.png",
    href: "/services/nutrition",
  },
];

export default function OurInitiativesPage() {
  return (
    <main className="our-initiatives-page initiative-banner-page">
      <InitiativesBanner pageTitle="Our Initiatives" />
      <section className="our-initiatives-hero" aria-labelledby="our-initiatives-title">
        <div className="our-initiatives-container our-initiatives-hero-grid">
          <div className="our-initiatives-copy">
            <p className="eyebrow">Our Initiatives</p>
            <h1 id="our-initiatives-title">
              Building Stronger
              <br />
              Communities Through
              <br />
              Focused Initiatives
            </h1>
            <p className="our-initiatives-description">
              We work across key areas to create lasting impact and improve lives
              through focused, sustainable initiatives.
            </p>
          </div>

          <div className="our-initiatives-visual">
            <div className="our-initiatives-photo-frame" aria-label="Community members in a support initiative">
              <Image
                src="/education_empowerment.png"
                alt="Indian children and community members engaged in a learning and support initiative"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <span className="our-initiatives-shape our-initiatives-shape-one" aria-hidden="true" />
            <span className="our-initiatives-shape our-initiatives-shape-two" aria-hidden="true" />
          </div>
        </div>

      </section>

      <section className="our-initiatives-strip" aria-label="Initiatives overview">
        <div className="our-initiatives-container">
          <div className="our-initiatives-nav-shell">
            {initiativeNavigator.map(({ title, subtitle, icon: Icon, href }) => (
              <Link className="our-initiative-nav-item" href={href} key={title}>
                <span className="our-initiative-nav-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.9} />
                </span>
                <div className="our-initiative-nav-copy">
                  <span className="our-initiative-nav-title">{title}</span>
                  <span className="our-initiative-nav-subtitle">{subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="our-initiative-featured" aria-labelledby="featured-initiative-title">
        <div className="our-initiatives-container">
          <div className="featured-initiative-card">
            <div className="featured-initiative-image">
              <Image
                src="/education_empowerment.png"
                alt="A child learning in a community education setting"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>

            <div className="featured-initiative-copy">
              <p className="eyebrow eyebrow-compact">Featured initiative</p>
              <h2 id="featured-initiative-title">Education &amp; Empowerment</h2>
              <p>
                We help children, students and families build a stronger future through
                support for access, opportunity and everyday learning.
              </p>
              <ul>
                <li>
                  <span aria-hidden="true">
                    <BookOpen size={14} strokeWidth={2.1} />
                  </span>
                  Learning material and school support
                </li>
                <li>
                  <span aria-hidden="true">
                    <HandHeart size={14} strokeWidth={2.1} />
                  </span>
                  Community mentoring and encouragement
                </li>
                <li>
                  <span aria-hidden="true">
                    <GraduationCap size={14} strokeWidth={2.1} />
                  </span>
                  Skills that increase long-term opportunity
                </li>
              </ul>
              <Link href="/volunteer" className="initiative-link">
                Explore the programme <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="our-initiative-metrics" aria-label="Impact statistics">
        <div className="our-initiatives-container">
          <div className="initiative-metrics-row">
            {impactMetrics.map(({ value, label }) => (
              <div key={label} className="initiative-metric">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-initiative-showcase" aria-labelledby="featured-programmes-title">
        <div className="our-initiatives-container">
          <div className="showcase-header">
            <div>
              <p className="eyebrow">Featured initiatives</p>
              <h2 id="featured-programmes-title">Focused programmes for community wellbeing</h2>
            </div>
            <Link href="/volunteer" className="showcase-link">
              See how you can support <ArrowRight size={16} />
            </Link>
          </div>

          <div className="showcase-grid">
            {featuredInitiatives.map(({ title, description, image, href }) => (
              <article key={title} className="initiative-showcase-card">
                <div className="initiative-showcase-image">
                  <Image src={image} alt={title} fill sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <div className="initiative-showcase-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link href={href} className="initiative-card-link">
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="our-initiative-quote" aria-label="Impact statement">
        <div className="our-initiatives-container">
          <div className="quote-panel">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              Every act of care creates a ripple of dignity, hope and opportunity for the communities we serve.
            </blockquote>
            <p>We believe lasting change grows from consistent support, compassion and practical action.</p>
          </div>
        </div>
      </section>

      <section className="our-initiative-cta" aria-labelledby="initiative-cta-title">
        <div className="our-initiatives-container">
          <div className="cta-panel">
            <div className="cta-copy">
              <p className="eyebrow eyebrow-cta">Join our mission</p>
              <h2 id="initiative-cta-title">Help us build a stronger tomorrow.</h2>
            </div>
            <p>
              Whether you volunteer, donate or partner with us, your support helps keep these initiatives active and compassionate.
            </p>
            <div className="cta-actions">
              <Link href="/volunteer" className="primary-cta">
                Volunteer with us
              </Link>
              <Link href="/donate" className="secondary-cta">
                Donate now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
