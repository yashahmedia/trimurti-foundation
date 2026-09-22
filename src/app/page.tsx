import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  HandHeart,
  IdCard,
  Leaf,
  Heart,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button, Impact, Empty } from "@/components/ui/Shared";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import LatestUpdates from "@/components/home/LatestUpdates";
import HeroSlider from "@/components/home/HeroSlider";
import Gallery from "@/components/media/Gallery";
import EventList from "@/components/events/EventList";
import { events, demoEvents } from "@/data/events";
import { about } from "@/data/about";
import { photos } from "@/data/media";
import { latestUpdates } from "@/data/updates";
import { Reveal } from "@/components/ui/Reveal";
import { seo } from "@/lib/seo";
export const metadata = seo("Compassion in action. Hope for everyone.", "/");
export default function Home() {
  return (
    <>
      <HeroSlider />

      <div className="hero-feature-wrap">
        <div className="container hero-feature-grid">
          {[
            {
              icon: Users,
              number: "01",
              title: "Engage",
              text: "Build stronger communities through active participation.",
              href: "/volunteer",
            },
            {
              icon: HandHeart,
              number: "02",
              title: "Empower",
              text: "Create opportunities for individuals to thrive.",
              href: "/about-us",
            },
            {
              icon: TrendingUp,
              number: "03",
              title: "Elevate",
              text: "Enable access to better education, health and resources.",
              href: "/services",
            },
            {
              icon: Leaf,
              number: "04",
              title: "Evolve",
              text: "Foster continuous growth for a stronger tomorrow.",
              href: "/community",
            },
            {
              icon: BookOpen,
              number: "05",
              title: "Enlighten",
              text: "Spread awareness and inspire change with purpose.",
              href: "/about-us",
            },
          ].map((q) => (
            <Link className="hero-feature-card" href={q.href} key={q.title}>
              <span className="hero-feature-number">{q.number}</span>
              <span className="hero-feature-icon">
                <q.icon size={28} strokeWidth={1.8} />
              </span>
              <h3>{q.title}</h3>
              <p>{q.text}</p>
              <span className="hero-feature-arrow">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <section className="container section split">
        <Reveal>
          <div className="about-image">
            <Image
              src="/nourish.png"
              alt="Illustrative scene of volunteers sharing fresh food with a family"
              width={650}
              height={560}
              sizes="(max-width:640px) 90vw, 45vw"
            />
            <div className="image-tag">
              <Heart size={30} strokeWidth={1.3} />
              <span>
                With people.
                <br />
                For people.
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="about-copy">
            <p className="eyebrow">The heart of Trimurti Foundation</p>
            <h2>
              Rooted in care.
              <br />
              Growing together.
            </h2>
            <p>{about.introduction}</p>
            <p>
              From a child’s first lesson to an elder’s helping hand, our
              purpose is simple: bring compassion into everyday life and create
              opportunities that last.
            </p>
            <div className="about-value-grid">
              {[
                {
                  icon: HandHeart,
                  title: "Compassion First",
                  text: "Understanding the people and communities we serve.",
                },
                {
                  icon: Users,
                  title: "Dignity Always",
                  text: "Support that respects every individual and helps them move forward.",
                },
                {
                  icon: Heart,
                  title: "Community Together",
                  text: "Bringing volunteers, families and supporters together.",
                },
                {
                  icon: Leaf,
                  title: "Lasting Impact",
                  text: "Creating opportunities that continue to make a difference.",
                },
              ].map((value) => (
                <div className="about-value-card" key={value.title}>
                  <span className="about-value-icon">
                    <value.icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="about-value-content">
                    <strong>{value.title}</strong>
                    <span>{value.text}</span>
                  </span>
                  <ArrowUpRight className="about-value-arrow" size={16} />
                </div>
              ))}
            </div>
            <Link href="/about-us" className="text-link">
              Discover our story <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we stand for</p>
              <h2>Programs built around real human needs</h2>
            </div>
            <Link href="/about-us" className="text-link">
              Learn about our mission <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="focus-grid">
            {[
              {
                icon: BookOpen,
                title: "Education Access",
                tag: "Learning",
                description:
                  "Helping children and young people build confidence, skills and brighter opportunities.",
              },
              {
                icon: Heart,
                title: "Health & Wellbeing",
                tag: "Care",
                description:
                  "Supporting families with compassionate healthcare awareness and timely assistance.",
              },
              {
                icon: Users,
                title: "Women Empowerment",
                tag: "Leadership",
                description:
                  "Creating pathways to dignity, confidence and collective economic resilience.",
              },
              {
                icon: HandHeart,
                title: "Community Relief",
                tag: "Support",
                description:
                  "Responding to urgent needs with food, shelter, care and recovery support.",
              },
            ].map((area) => (
              <article className="focus-card" key={area.title}>
                <div className="focus-icon">
                  <area.icon size={22} strokeWidth={1.8} />
                </div>
                <span className="focus-kicker">{area.tag}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <Link href={`/volunteer?area=${encodeURIComponent(area.title)}`}>
                  Explore this area <ArrowUpRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section tinted">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">Many ways to care. One shared purpose.</p>
            <h2>Where compassion takes action</h2>
            <p>
              Supporting people at every stage of life, while caring for the
              communities and traditions that bring us together.
            </p>
          </div>
          <Services featured showViewAll />
          <p className="small" style={{ marginTop: 20, textAlign: "center" }}>
            Our proposed areas of support. Images illustrate our purpose;
            verified activity reports will be shared as available.
          </p>
        </div>
      </section>
      <Impact />
      <LatestUpdates items={latestUpdates} />
      <section className="volunteer-apply home-volunteer-apply">
        <div className="volunteer-apply-overlay" />
        <div className="container volunteer-apply-grid">
          <div className="volunteer-apply-copy">
            <p className="eyebrow">Become a volunteer</p>
            <h2>Bring your time. Grow a stronger community.</h2>
            <p className="volunteer-apply-lead">
              Share your skills, your energy and your care. There is a meaningful
              place for every willing hand.
            </p>
            <div className="volunteer-home-actions">
              <Link href="/volunteer" className="volunteer-home-link">
                Learn about volunteering <ArrowUpRight size={16} />
              </Link>
              <div className="volunteer-home-action">
                <Button href="/volunteer">Open volunteer form</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Come together. Make a difference.</p>
            <h2>Good things on the horizon</h2>
            <p>Discover opportunities to connect, contribute and care.</p>
          </div>
          <Link href="/events" className="text-link">
            View all events <ArrowUpRight size={16} />
          </Link>
        </div>
        {events.length || demoEvents.length ? (
          <EventList items={[...events, ...demoEvents].slice(0, 2)} />
        ) : (
          <Empty title="Something meaningful is taking shape">
            Our next community events will appear here once dates and locations
            are confirmed. In the meantime, join our volunteer community.
          </Empty>
        )}
      </section>
      <section className="section tinted">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A glimpse of our purpose</p>
              <h2>Care, connection & community</h2>
            </div>
            <Link href="/media" className="text-link">
              Explore our media <ArrowUpRight size={16} />
            </Link>
          </div>
          <Gallery items={photos.slice(0, 3)} compact />
          <p className="small" style={{ marginTop: 18 }}>
            Illustrative gallery · Foundation activity photographs will be added
            after review.
          </p>
        </div>
      </section>
      <section className="donate-section section">
        <div className="container">
          <div className="center-heading donate-heading">
            <p className="eyebrow">Turn compassion into action</p>
            <h2>Your support can change what tomorrow looks like.</h2>
            <p>
              Every contribution helps us reach more people with practical
              care, opportunity and hope. Choose how you want to help build a
              stronger community.
            </p>
          </div>
          <div className="donate-options">
            <Link href="/donate" className="donate-option donate-option-relief">
              <Image
                src="/logo4.png"
                alt=""
                width={210}
                height={210}
                className="donate-card-logo donate-card-logo-top"
                aria-hidden="true"
              />
              <Image
                src="/logo4.png"
                alt=""
                width={165}
                height={165}
                className="donate-card-logo donate-card-logo-bottom"
                aria-hidden="true"
              />
              <span className="donate-option-mark">Help meet a need today</span>
              <h3>Be there when help is needed most.</h3>
              <p>
                Your contribution can help provide essential care, supplies and
                timely support to a family facing a difficult moment.
              </p>
              <span className="donate-option-link">
                Give immediate support <ArrowUpRight size={17} />
              </span>
            </Link>
            <Link href="/donate" className="donate-option donate-option-monthly">
              <Image
                src="/logo4.png"
                alt=""
                width={210}
                height={210}
                className="donate-card-logo donate-card-logo-top"
                aria-hidden="true"
              />
              <Image
                src="/logo4.png"
                alt=""
                width={165}
                height={165}
                className="donate-card-logo donate-card-logo-bottom"
                aria-hidden="true"
              />
              <span className="donate-option-mark">Help build what lasts</span>
              <h3>Keep possibility growing all year.</h3>
              <p>
                Ongoing support helps us plan ahead, stay consistent and create
                opportunities that strengthen communities over time.
              </p>
              <span className="donate-option-link">
                Build lasting support <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="container section testimonial-section">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          The spirit that brings us together
        </p>
        <Testimonials />
      </section>
    </>
  );
}
