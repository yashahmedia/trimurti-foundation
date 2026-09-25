import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  HandHeart,
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
import WhoWeAre from "@/components/home/WhoWeAre";
import TrimurthyPhilosophy from "@/components/home/TrimurthyPhilosophy";
import TransformALife from "@/components/home/TransformALife";
import Gallery from "@/components/media/Gallery";
import EventList from "@/components/events/EventList";
import EventsCampaigns from "@/components/sections/EventsCampaigns";
import DonateNow from "@/components/sections/DonateNow";
import TrimurtiFamily from "@/components/sections/TrimurtiFamily";
import TrimurtiConnect from "@/components/sections/TrimurtiConnect";
import TestimonialsSection from "@/components/sections/Testimonials";
import OurPresence from "@/components/sections/OurPresence";
import { events, demoEvents } from "@/data/events";
import { photos } from "@/data/media";
import { latestUpdates } from "@/data/updates";
import { seo } from "@/lib/seo";
export const metadata = seo("Trimurti Foundation", "/");
export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhoWeAre />
      <TrimurthyPhilosophy />
      <TransformALife />
      <section className="support-request-section" aria-labelledby="support-request-title">
        <div className="container">
          <div className="support-request-heading">
            <div>
              <p className="eyebrow">Support when you need it</p>
              <h2 id="support-request-title">Request a Support</h2>
            </div>
            <p>
              We stand with those in need — providing essential resources,
              opportunities and hope for a better tomorrow.
            </p>
          </div>
          <div className="support-request-grid">
            <div className="support-request-cards">
              {[
                {
                  image: "/education.png",
                  title: "Education for Children & Students",
                  description: "We support children and students with access to quality education, school supplies and learning opportunities.",
                  icon: "school",
                },
                {
                  image: "/elder.webp",
                  title: "Support for Elderly People",
                  description: "We provide care, companionship and essential support to help elderly individuals live with dignity and wellness.",
                  icon: "elder",
                },
                {
                  image: "/health2.jpg",
                  title: "Healthcare Support",
                  description: "We help families access medical treatment, medicines and healthcare services when they need it most.",
                  icon: "health",
                },
                {
                  image: "/food.jpg",
                  title: "Food & Essentials",
                  description: "We provide nutritious food, clean water and daily essentials to families facing hunger and hardship.",
                  icon: "food",
                },
                {
                  image: "/WOMAN.jpg",
                  title: "Opportunities for Women",
                  description: "We empower women with skills, training and resources to build independence and a safer future.",
                  icon: "women",
                },
                {
                  image: "/We provide.jpeg",
                  title: "Emergency & Crisis Support",
                  description: "We provide immediate relief and long-term help to families affected by disasters, conflict or other emergencies.",
                  icon: "support",
                },
              ].map((item) => (
                <article className="support-request-card" key={item.title}>
                  <div className="support-request-card-image">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="support-request-card-body">
                    <div className={`support-request-card-icon support-request-card-icon-${item.icon}`} aria-hidden="true">
                      {item.icon === "school" && <BookOpen size={18} strokeWidth={1.8} />}
                      {item.icon === "elder" && <Users size={18} strokeWidth={1.8} />}
                      {item.icon === "health" && <Heart size={18} strokeWidth={1.8} />}
                      {item.icon === "food" && <Leaf size={18} strokeWidth={1.8} />}
                      {item.icon === "women" && <TrendingUp size={18} strokeWidth={1.8} />}
                      {item.icon === "support" && <HandHeart size={18} strokeWidth={1.8} />}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link href="/volunteer" className="support-request-link">
                      Learn how we help <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <aside className="support-request-panel">
              <Image
                src="/logo4.png"
                alt=""
                width={82}
                height={82}
                className="support-request-panel-logo"
                aria-hidden="true"
              />
              <div className="support-request-panel-header">
                <span className="support-request-eyebrow">Your support matters</span>
                <h3>
                  Your support
                  <br />
                  can change
                  <br />
                  a life.
                </h3>
              </div>

              <p>
                Someone around you may need food, education, healthcare, or
                simply a helping hand.
              </p>

              <Link href="/volunteer" className="support-request-cta">
                <span className="support-request-cta-icon" aria-hidden="true">
                  <Heart size={17} fill="currentColor" />
                </span>
                Request Support <ArrowUpRight size={16} />
              </Link>

              <div className="support-request-quote">
                <p>No one should have to face life’s challenges alone</p>
                <span aria-hidden="true">♡</span>
              </div>
              <div className="support-request-panel-image">
                <Image
                  src="/life.png"
                  alt="Hands offering care and support to a community"
                  fill
                  sizes="(max-width: 1100px) 100vw, 32vw"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <EventsCampaigns />
      <DonateNow />
      <TrimurtiFamily />
      <TrimurtiConnect />
      <TestimonialsSection />
      <OurPresence />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we stand for</p>
              <h2>Programs built around real human needs</h2>
              <p>
                We focus on creating lasting change through accessible programs
                that support individuals, families and communities.
              </p>
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
