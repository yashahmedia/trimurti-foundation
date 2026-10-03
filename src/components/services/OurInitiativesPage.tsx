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
import SupportPromptSection from "@/components/home/SupportPromptSection";

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

const initiativeDetails = [
  {
    title: "Education & Empowerment",
    description:
      "We help children, students and families build a stronger future through support for access, opportunity and everyday learning.",
    image: "/education_empowerment.png",
    alt: "A child learning in a community education setting",
    href: "/services/education",
    points: [
      "Learning material and school support",
      "Community mentoring and encouragement",
      "Skills that increase long-term opportunity",
    ],
  },
  {
    title: "Healthcare Support",
    description:
      "We make compassionate care and health awareness more accessible, helping individuals and families take the next step towards healthier lives.",
    image: "/healthcare_support.png",
    alt: "A healthcare professional providing compassionate care",
    href: "/services/healthcare",
    points: [
      "Access to essential healthcare",
      "Health camps and awareness",
      "Support for treatment and medicines",
    ],
  },
  {
    title: "Annadhan & Nutrition",
    description:
      "We bring communities together through nourishing meals and food support, helping families face each day with strength, hope and dignity.",
    image: "/annadhan_nutrition.png",
    alt: "Community meal and nutrition support",
    href: "/services/nutrition",
    points: [
      "Nutritious meals for families",
      "Essential grocery support",
      "Community meals with dignity",
    ],
  },
  {
    title: "Elderly Care",
    description:
      "We honour our elders with companionship, compassionate support and care that helps them feel valued, connected and respected.",
    image: "/elderly_care.png",
    alt: "A caregiver supporting an elderly woman",
    href: "/services/elderly-care",
    points: [
      "Companionship and regular connection",
      "Essential care and daily support",
      "Respect, dignity and wellbeing",
    ],
  },
  {
    title: "Environment & Welfare",
    description:
      "We encourage tree planting, sustainable habits and community participation to nurture greener neighbourhoods and a healthier environment for all.",
    image: "/environment_welfare.png",
    alt: "A volunteer planting a young tree",
    href: "/services/environment-welfare",
    points: [
      "Tree planting and green spaces",
      "Sustainable everyday practices",
      "Healthier neighbourhoods together",
    ],
  },
  {
    title: "Culture & Heritage",
    description:
      "We celebrate Indian traditions, arts and shared heritage, connecting generations with the stories and practices that keep our culture alive.",
    image: "/culture_heritage.png",
    alt: "Indian heritage temple representing culture and tradition",
    href: "/services/culture-heritage",
    points: [
      "Traditional arts and expression",
      "Heritage learning across generations",
      "Preserving stories and practices",
    ],
  },
  {
    title: "Stand With Our Soldiers",
    description:
      "We honour those who serve our nation by standing beside serving personnel, veterans and their families with gratitude, compassion and support.",
    image: "/soldiers-family.webp",
    alt: "An Indian soldier spending time with his family",
    href: "/services/standing-with-soldiers",
    points: [
      "Support for serving personnel",
      "Care for veterans and families",
      "Gratitude, dignity and community",
    ],
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

      <SupportPromptSection />

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
          <div className="initiative-details-list">
            {initiativeDetails.map(({ title, description, image, alt, href, points }, initiativeIndex) => (
              <article
                className={`featured-initiative-card initiative-detail-card ${
                  initiativeIndex % 2 === 1 ? "initiative-detail-card-dark" : ""
                }`}
                key={title}
              >
                <div className="featured-initiative-image">
                  <Image src={image} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                </div>

                <div className="featured-initiative-copy">
                  <p className="eyebrow eyebrow-compact">
                    {initiativeIndex === 0 ? "Featured initiative" : "Our initiative"}
                  </p>
                  <h2 id={initiativeIndex === 0 ? "featured-initiative-title" : undefined}>{title}</h2>
                  <p>{description}</p>
                  <ul>
                    {points.map((point, pointIndex) => {
                      const PointIcon = [BookOpen, HandHeart, GraduationCap][pointIndex];
                      return (
                        <li key={point}>
                          <span aria-hidden="true">
                            <PointIcon size={14} strokeWidth={2.1} />
                          </span>
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                  <Link href={href} className="initiative-link">
                    Explore the programme <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
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
