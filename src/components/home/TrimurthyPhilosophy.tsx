import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  HandHeart,
  Leaf,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type PhilosophyItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  icon: LucideIcon;
};

const philosophyItems: PhilosophyItem[] = [
  {
    title: "Engage",
    description: "Build stronger communities through active participation, collaboration and meaningful connection.",
    image: "/Philosophy1.png",
    alt: "Trimurti Foundation community engagement initiative",
    href: "/volunteer",
    icon: Users,
  },
  {
    title: "Empower",
    description: "Create opportunities that give individuals the confidence, support and resources to thrive.",
    image: "/Philosophy2.png",
    alt: "Trimurti Foundation empowerment initiative",
    href: "/about-us",
    icon: HandHeart,
  },
  {
    title: "Elevate",
    description: "Enable better access to education, healthcare and essential resources for a better quality of life.",
    image: "/Philosophy3.png",
    alt: "Trimurti Foundation elevation initiative",
    href: "/services",
    icon: TrendingUp,
  },
  {
    title: "Evolve",
    description: "Encourage continuous growth, learning and positive transformation for a stronger tomorrow.",
    image: "/Philosophy4.png",
    alt: "Trimurti Foundation evolution initiative",
    href: "/community",
    icon: Leaf,
  },
  {
    title: "Enlighten",
    description: "Spread awareness, inspire positive change and guide communities with knowledge and purpose.",
    image: "/Philosophy5.png",
    alt: "Trimurti Foundation enlightenment initiative",
    href: "/about-us",
    icon: BookOpen,
  },
];

export default function TrimurthyPhilosophy() {
  return (
    <section className="philosophy-section" aria-labelledby="philosophy-title">
      <div className="philosophy-glow" aria-hidden="true" />
      <div className="container philosophy-inner">
        <Reveal>
          <header className="philosophy-heading">
            <span className="philosophy-mark" aria-hidden="true">
              <i />
              <span>✦</span>
              <i />
            </span>
            <h2 id="philosophy-title">
              <span>The Trimurthy</span> Philosophy
            </h2>
            <p>Five principles that guide our purpose, people and impact.</p>
            <span className="philosophy-divider" aria-hidden="true" />
          </header>
        </Reveal>

        <div className="philosophy-grid">
          {philosophyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal delay={index * 0.08} key={item.title}>
                <Link className="philosophy-card" href={item.href}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 33vw, 20vw"
                    className="philosophy-card-image"
                  />
                  <span className="philosophy-card-overlay" aria-hidden="true" />
                  <span className="philosophy-card-content">
                    <span className="philosophy-icon-badge">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                    <span className="philosophy-card-link">
                      Explore principle <ArrowUpRight size={15} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}