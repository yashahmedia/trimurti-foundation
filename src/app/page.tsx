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
import HeroSlider from "@/components/home/HeroSlider";
import WhoWeAre from "@/components/home/WhoWeAre";
import TrimurthyPhilosophy from "@/components/home/TrimurthyPhilosophy";
import TransformALife from "@/components/home/TransformALife";
import EventsCampaigns from "@/components/sections/EventsCampaigns";
import DonateNow from "@/components/sections/DonateNow";
import TrimurtiFamily from "@/components/sections/TrimurtiFamily";
import TrimurtiConnect from "@/components/sections/TrimurtiConnect";
import TestimonialsSection from "@/components/sections/Testimonials";
import OurPresence from "@/components/sections/OurPresence";
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
    </>
  );
}
