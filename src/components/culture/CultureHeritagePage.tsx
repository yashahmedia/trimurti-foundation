import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Flower2,
  GraduationCap,
  HandHeart,
  Landmark,
  Leaf,
  Music2,
  Sprout,
  Users,
} from "lucide-react";
import CultureReveal from "@/components/culture/CultureReveal";

const values = [
  { label: "Preserve traditions", icon: Landmark },
  { label: "Promote cultural education", icon: BookOpen },
  { label: "Support artisans & communities", icon: Users },
  { label: "Build a stronger tomorrow", icon: Flower2 },
];

const supportAreas = [
  {
    title: "Education",
    description: "Help create access to learning, skills and better opportunities.",
    image: "/education_empowerment.png",
    alt: "A young student learning in a classroom",
    icon: BookOpen,
    href: "/donate?cause=education",
  },
  {
    title: "Health Care",
    description: "Support access to essential healthcare and wellbeing initiatives.",
    image: "/healthcare_support.png",
    alt: "A doctor offering compassionate care to an older woman",
    icon: HandHeart,
    href: "/donate?cause=healthcare",
  },
  {
    title: "Elder Support",
    description: "Help create dignity, care and companionship for senior citizens.",
    image: "/elderly_care.png",
    alt: "A caregiver sharing a warm moment with an older woman",
    icon: Users,
    href: "/donate?cause=elder-support",
  },
  {
    title: "Heritage",
    description: "Help preserve culture, traditions and community heritage.",
    image: "/culture_heritage.png",
    alt: "Traditional arts and heritage in an Indian cultural setting",
    icon: Landmark,
    href: "/donate?cause=heritage",
  },
];

const gurukulFeatures = [
  { label: "Vedic Knowledge", icon: BookOpen },
  { label: "Value Education", icon: HeartIcon },
  { label: "Cultural Learning", icon: Landmark },
  { label: "Flexible Access", icon: GraduationCap },
];

function HeartIcon({ size = 18 }: { size?: number }) {
  return <Flower2 size={size} strokeWidth={1.7} />;
}

function EditorialCopy({
  eyebrow,
  title,
  subtitle,
  description,
  id,
  link,
  linkLabel,
  features,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  id: string;
  link: string;
  linkLabel: string;
  features?: string[];
}) {
  return (
    <div className="culture-copy">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <h3>{subtitle}</h3>
      <p className="culture-description">{description}</p>
      {features && (
        <ul className="culture-feature-list">
          {features.map((feature) => (
            <li key={feature}>
              <span aria-hidden="true"><Leaf size={16} /></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link className="culture-text-link" href={link}>
        {linkLabel} <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}

export default function CultureHeritagePage() {
  return (
    <div className="culture-page">
      <section className="culture-hero" aria-labelledby="culture-hero-title">
        <div className="culture-botanical culture-botanical-hero" aria-hidden="true">
          <Sprout />
        </div>
        <div className="culture-container culture-hero-grid">
          <CultureReveal className="culture-hero-copy">
            <p className="eyebrow">Culture &amp; Heritage</p>
            <h1 id="culture-hero-title">
              Rooted in Our Heritage, Building a Brighter Future
            </h1>
            <p className="culture-hero-description">
              We celebrate our rich cultural heritage and timeless traditions,
              while creating opportunities for future generations to stay
              connected with their roots.
            </p>
            <div className="culture-values" aria-label="Our cultural values">
              {values.map(({ label, icon: Icon }) => (
                <div className="culture-value" key={label}>
                  <span className="culture-value-icon" aria-hidden="true">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </CultureReveal>

          <CultureReveal className="culture-hero-visual" delay={0.12}>
            <div className="culture-hero-image culture-image-frame">
              <Image
                src="/preserve.png"
                alt="Indian classical dancers learning traditional art in a temple courtyard"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 55vw"
              />
            </div>
            <span className="culture-image-caption">
              Traditions carried forward, together
            </span>
            <span className="culture-botanical culture-botanical-image" aria-hidden="true">
              <Leaf />
            </span>
          </CultureReveal>
        </div>
      </section>

      <section
        className="culture-editorial culture-temple"
        id="temple-support"
        aria-labelledby="temple-support-title"
      >
        <div className="culture-container culture-editorial-grid">
          <CultureReveal className="culture-section-visual">
            <div className="culture-section-image culture-image-frame">
              <Image
                src="/heritage.png"
                alt="An Indian temple at golden hour, surrounded by its community"
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <span className="culture-image-index">01 / Sacred spaces</span>
          </CultureReveal>
          <CultureReveal className="culture-section-copy" delay={0.1}>
            <EditorialCopy
              eyebrow="Temple Support"
              title="Temple Support"
              subtitle="Preserving sacred spaces, strengthening communities."
              description="We support the restoration and maintenance of temples and sacred places, ensuring they remain vibrant centers of faith, culture and community for generations to come."
              id="temple-support-title"
              link="/contact"
              linkLabel="Learn more about temple support"
              features={[
                "Restoration & Conservation",
                "Community Engagement",
                "Sustainable Maintenance",
              ]}
            />
          </CultureReveal>
        </div>
      </section>

      <section
        className="culture-editorial culture-gurukul"
        id="online-gurukul"
        aria-labelledby="online-gurukul-title"
      >
        <div className="culture-container culture-editorial-grid culture-editorial-reverse">
          <CultureReveal className="culture-section-copy">
            <EditorialCopy
              eyebrow="Online Gurukul"
              title="Online Gurukul"
              subtitle="Vedic and cultural learning for a brighter future."
              description="Our online Gurukul brings the wisdom of ancient traditions to modern learners, offering structured courses in Vedic knowledge, values, and Indian culture — accessible to all."
              id="online-gurukul-title"
              link="/contact?interest=online-gurukul"
              linkLabel="Explore online Gurukul"
            />
          </CultureReveal>
          <CultureReveal className="culture-section-visual culture-gurukul-visual" delay={0.1}>
            <div className="culture-section-image culture-image-frame">
              <Image
                src="/education_empowerment.png"
                alt="An Indian student learning and reading alongside classmates"
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <div className="culture-learning-card">
              <span className="culture-learning-card-mark" aria-hidden="true">
                <Flower2 size={20} />
              </span>
              <p>Learning for life</p>
              <ul>
                {gurukulFeatures.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </CultureReveal>
        </div>
      </section>

      <section
        className="culture-editorial culture-preservation"
        id="heritage-preservation"
        aria-labelledby="heritage-preservation-title"
      >
        <div className="culture-botanical culture-botanical-preservation" aria-hidden="true">
          <Landmark />
        </div>
        <div className="culture-container culture-editorial-grid">
          <CultureReveal className="culture-section-visual">
            <div className="culture-section-image culture-image-frame">
              <Image
                src="/culture_heritage.png"
                alt="Traditional Indian dance and artisan work in a heritage courtyard"
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <span className="culture-image-index">02 / Living heritage</span>
          </CultureReveal>
          <CultureReveal className="culture-section-copy" delay={0.1}>
            <EditorialCopy
              eyebrow="Heritage Preservation"
              title="Heritage Preservation"
              subtitle="Protecting our legacy, for generations to come."
              description="We work towards the conservation of historical sites, monuments and cultural landmarks, preserving India’s rich heritage and inspiring pride in our shared history."
              id="heritage-preservation-title"
              link="/contact?interest=heritage-preservation"
              linkLabel="Learn more"
            />
          </CultureReveal>
        </div>
      </section>

      <section
        className="culture-editorial culture-events"
        id="cultural-events"
        aria-labelledby="cultural-events-title"
      >
        <div className="culture-container culture-editorial-grid culture-editorial-reverse">
          <CultureReveal className="culture-section-copy">
            <EditorialCopy
              eyebrow="Cultural Events"
              title="Cultural Events"
              subtitle="Celebrating traditions, bringing people together."
              description="From festivals to cultural gatherings, we organize and support events that keep our traditions alive and create a sense of unity, joy and belonging in communities."
              id="cultural-events-title"
              link="/events"
              linkLabel="View upcoming events"
            />
          </CultureReveal>
          <CultureReveal className="culture-section-visual" delay={0.1}>
            <div className="culture-section-image culture-image-frame culture-events-image">
              <Image
                src="/preserve.png"
                alt="A community gathering with Indian cultural performances and shared traditions"
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <span className="culture-image-index">
              <Music2 size={15} aria-hidden="true" /> Culture in celebration
            </span>
          </CultureReveal>
        </div>
      </section>

      <section className="culture-support" aria-labelledby="culture-support-title">
        <div className="culture-container">
          <CultureReveal className="culture-support-heading">
            <div>
              <p className="eyebrow">Request a Support</p>
              <h2 id="culture-support-title">Support Our Work</h2>
            </div>
            <div className="culture-support-intro">
              <p>
                Your contribution helps us preserve culture, protect heritage
                and create opportunities for future generations.
              </p>
              <Link className="culture-donate-link" href="/donate">
                Make a Donation <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </CultureReveal>
          <div className="culture-support-grid">
            {supportAreas.map(({ title, description, image, alt, icon: Icon, href }, index) => (
              <CultureReveal key={title} delay={index * 0.07} className="culture-support-reveal">
                <article className="culture-support-card">
                  <Link className="culture-support-image" href={href} aria-label={`Support ${title}`}>
                    <Image src={image} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 25vw" />
                    <span className="culture-support-icon" aria-hidden="true">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                  </Link>
                  <div className="culture-support-card-copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link className="culture-card-arrow" href={href} aria-label={`Explore ${title} support`}>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </article>
              </CultureReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="culture-presence" aria-labelledby="culture-presence-title">
        <div className="culture-botanical culture-botanical-presence" aria-hidden="true">
          <Sprout />
        </div>
        <div className="culture-container culture-presence-grid">
          <CultureReveal className="culture-presence-copy">
            <p className="eyebrow">Our Presence</p>
            <h2 id="culture-presence-title">Working across communities, creating lasting change.</h2>
            <p>
              Our roots are strengthened by the people, places and traditions
              we care for together. We work alongside communities to keep
              heritage alive and create a sense of belonging for generations
              to come.
            </p>
            <Link className="culture-text-link" href="/about-us">
              Discover who we are <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </CultureReveal>
          <CultureReveal className="culture-presence-visual" delay={0.1}>
            <div className="culture-presence-image culture-image-frame">
              <Image
                src="/volunteer.jpg"
                alt="A younger volunteer and an elder sharing a warm moment in their community"
                fill
                sizes="(max-width: 800px) 100vw, 55vw"
              />
            </div>
            <div className="culture-presence-stat">
              <span>12+</span>
              <p>Communities Reached</p>
              <span className="culture-stat-flower" aria-hidden="true">
                <Flower2 size={22} />
              </span>
            </div>
          </CultureReveal>
        </div>
      </section>
    </div>
  );
}
