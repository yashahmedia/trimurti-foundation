import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  MapPin,
  Megaphone,
  Sprout,
} from "lucide-react";
import { seo } from "@/lib/seo";
import styles from "./insights.module.css";

export const metadata = seo(
  "Insights",
  "/insights",
  "Explore Trimurti Foundation events, community initiatives and practical resources for creating lasting impact.",
);

const events = [
  {
    image: "/education-support.png",
    category: "Learning",
    title: "Community Learning Day",
    date: "Date to be announced",
    location: "Location to be announced",
  },
  {
    image: "/health support.png",
    category: "Wellbeing",
    title: "Community Care Day",
    date: "Date to be announced",
    location: "Location to be announced",
  },
  {
    image: "/women-empower.png",
    category: "Community",
    title: "Skills & Connection Workshop",
    date: "Date to be announced",
    location: "Location to be announced",
  },
];

const campaigns = [
  {
    image: "/nourish.png",
    category: "Nutrition",
    title: "Nourish with Care",
    description:
      "Learn how community nutrition and everyday essentials can support families.",
    href: "/services/nutrition",
  },
  {
    image: "/protect.png",
    category: "Environment",
    title: "Greener Communities",
    description:
      "Explore ways to build healthier, greener and more connected neighbourhoods.",
    href: "/services/environment-welfare",
  },
  {
    image: "/heritage.png",
    category: "Culture",
    title: "Keep Heritage Alive",
    description:
      "Discover the value of preserving traditions and passing them on to the next generation.",
    href: "/services/culture-heritage",
  },
];

const resources = [
  {
    image: "/education_empowerment.png",
    type: "Report",
    title: "A shared vision for community wellbeing",
    description:
      "An introduction to the focus areas that help communities learn, grow and thrive.",
    href: "/about-us",
    icon: BookOpen,
  },
  {
    image: "/volunteer.jpg",
    type: "Blog",
    title: "Why showing up for one another matters",
    description:
      "A reflection on participation, compassion and the strength of local connection.",
    href: "/community",
    icon: Megaphone,
  },
  {
    image: "/preserve.png",
    type: "Guide",
    title: "Find a meaningful way to get involved",
    description:
      "Explore practical ways to share your time, skills and support with the community.",
    href: "/volunteer",
    icon: Sprout,
  },
];

export default function InsightsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="insights-title">
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Ideas that move us forward</span>
            <h1 id="insights-title">Explore. Learn. Create Impact.</h1>
            <p>
              Discover the people, ideas and opportunities bringing communities
              closer to a brighter future.
            </p>
            <Link className={styles.heroLink} href="#events">
              Explore our insights <ArrowRight size={17} />
            </Link>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/trimurti_hero.png"
              alt="Community members coming together to support one another"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
              className={styles.heroImage}
            />
            <div className={styles.heroImageShade} />
            <div className={styles.heroNote}>
              <span className={styles.heroNoteIcon}>
                <Sprout size={20} />
              </span>
              <span>
                <strong>Small steps, lasting change</strong>
                <span>Rooted in community</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <nav className={styles.tabs} aria-label="Insights sections">
        <a className={styles.tab} href="#events">
          <CalendarDays size={16} /> Events
        </a>
        <a className={styles.tab} href="#campaigns">
          <Megaphone size={16} /> Campaigns
        </a>
        <a className={styles.tab} href="#knowledge-center">
          <BookOpen size={16} /> Knowledge Center
        </a>
      </nav>

      <section
        className={`${styles.contentSection} ${styles.eventsSection}`}
        id="events"
        aria-labelledby="events-title"
      >
        <div className={`${styles.container} ${styles.sectionLayout}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionIcon}>
              <CalendarDays size={19} />
            </span>
            <span className={styles.eyebrow}>Meet, share, take part</span>
            <h2 id="events-title">Our Events</h2>
            <p>
              Come together to learn, connect and turn shared purpose into
              meaningful action.
            </p>
            <Link className={styles.textLink} href="/events">
              View All Events <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className={styles.cardGrid}>
            {events.map((event) => (
              <article className={styles.card} key={event.title}>
                <Link className={styles.cardImageLink} href="/events">
                  <Image
                    src={event.image}
                    alt=""
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 24vw"
                    className={styles.cardImage}
                  />
                  <span className={styles.dateBadge}>
                    <CalendarDays size={14} /> Date to be announced
                  </span>
                </Link>
                <div className={styles.cardBody}>
                  <span className={styles.category}>{event.category}</span>
                  <h3>{event.title}</h3>
                  <div className={styles.eventMeta}>
                    <span>
                      <MapPin size={14} /> {event.location}
                    </span>
                    <span>
                      <Clock3 size={14} /> Details coming soon
                    </span>
                  </div>
                  <Link className={styles.cardLink} href="/events">
                    Explore event <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.contentSection} ${styles.campaignsSection}`}
        id="campaigns"
        aria-labelledby="campaigns-title"
      >
        <div className={`${styles.container} ${styles.sectionLayout}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionIcon}>
              <Megaphone size={19} />
            </span>
            <span className={styles.eyebrow}>Care in action</span>
            <h2 id="campaigns-title">Our Campaigns</h2>
            <p>
              Get to know the causes and community initiatives that help create
              a more caring, resilient future.
            </p>
            <Link className={styles.textLink} href="/services">
              Explore Our Initiatives <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className={styles.cardGrid}>
            {campaigns.map((campaign) => (
              <article className={styles.card} key={campaign.title}>
                <Link className={styles.cardImageLink} href={campaign.href}>
                  <Image
                    src={campaign.image}
                    alt=""
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 24vw"
                    className={styles.cardImage}
                  />
                  <span className={styles.imageTag}>Community initiative</span>
                </Link>
                <div className={styles.cardBody}>
                  <span className={styles.category}>{campaign.category}</span>
                  <h3>{campaign.title}</h3>
                  <p className={styles.cardDescription}>
                    {campaign.description}
                  </p>
                  <Link className={styles.cardLink} href={campaign.href}>
                    Learn more <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.contentSection} ${styles.knowledgeSection}`}
        id="knowledge-center"
        aria-labelledby="knowledge-title"
      >
        <div className={`${styles.container} ${styles.sectionLayout}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionIcon}>
              <BookOpen size={19} />
            </span>
            <span className={styles.eyebrow}>Ideas, stories and tools</span>
            <h2 id="knowledge-title">Knowledge Center</h2>
            <p>
              Find thoughtful perspectives and practical starting points for
              learning, helping and making a difference.
            </p>
            <Link className={styles.textLink} href="/about-us">
              Explore Resources <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className={styles.cardGrid}>
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <article className={styles.card} key={resource.title}>
                  <Link className={styles.cardImageLink} href={resource.href}>
                    <Image
                      src={resource.image}
                      alt=""
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 24vw"
                      className={styles.cardImage}
                    />
                    <span className={styles.imageTag}>
                      <Icon size={14} /> {resource.type}
                    </span>
                  </Link>
                  <div className={styles.cardBody}>
                    <span className={styles.category}>{resource.type}</span>
                    <h3>{resource.title}</h3>
                    <p className={styles.cardDescription}>
                      {resource.description}
                    </p>
                    <Link className={styles.cardLink} href={resource.href}>
                      Read more <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
