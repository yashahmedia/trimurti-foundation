import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Leaf,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type WhoWeAreCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const cards: WhoWeAreCard[] = [
  {
    title: "About Trimurti Foundation",
    description: "Our mission and purpose",
    href: "/about-us",
    icon: Building2,
  },
  {
    title: "About our founder",
    description: "Leadership and vision",
    href: "/about-us",
    icon: Users,
  },
  {
    title: "Our journey",
    description: "The path we have taken",
    href: "/about-us",
    icon: Leaf,
  },
  {
    title: "Mission & vision",
    description: "What drives us",
    href: "/about-us",
    icon: Target,
  },
  {
    title: "Governance & Transparency",
    description: "Ethics and accountability",
    href: "/compliance",
    icon: ShieldCheck,
  },
  {
    title: "Advisory Board / Team",
    description: "People behind the mission",
    href: "/about-us",
    icon: BriefcaseBusiness,
  },
];

export default function WhoWeAre() {
  return (
    <section className="who-we-are" aria-labelledby="who-we-are-title">
      <div className="who-we-are-leaf who-we-are-leaf-left" aria-hidden="true" />
      <div className="who-we-are-leaf who-we-are-leaf-right" aria-hidden="true" />
      <div className="container who-we-are-inner">
        <div className="who-we-are-image-wrap">
          <div className="who-we-are-image">
            <Image
              src="/trimurti_hero.png"
              alt="Trimurti Foundation volunteers spending time with a child in their community"
              fill
              sizes="(max-width: 820px) 100vw, 46vw"
            />
          </div>
        </div>

        <div className="who-we-are-content">
          <span className="who-we-are-rule" aria-hidden="true" />
          <p className="eyebrow">The people behind the purpose</p>
          <h2 id="who-we-are-title">
            <span>Who</span> we are
          </h2>
          <p className="who-we-are-intro">
            The people, purpose, and principles behind Trimurti Foundation.
          </p>
          <div className="who-we-are-grid">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Link className="who-we-are-card" href={card.href} key={card.title}>
                  <span className="who-we-are-card-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>
                  <span className="who-we-are-card-copy">
                    <strong>{card.title}</strong>
                    <span>{card.description}</span>
                  </span>
                  <ArrowUpRight className="who-we-are-card-arrow" size={17} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}