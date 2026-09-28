import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type SupportItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

const supportItems: SupportItem[] = [
  {
    title: "Education & Empowerment",
    description: "Learning and opportunity",
    image: "/education_empowerment.png",
    alt: "Students learning together with educational support",
    href: "/services/education",
  },
  {
    title: "Healthcare Support",
    description: "Access to care",
    image: "/healthcare_support.png",
    alt: "Healthcare professional providing compassionate care",
    href: "/services/healthcare",
  },
  {
    title: "Annadhan & Nutrition",
    description: "Meals and nourishment",
    image: "/annadhan_nutrition.png",
    alt: "Community meal and nutrition support",
    href: "/services/nutrition",
  },
  {
    title: "Elderly Care",
    description: "Support and dignity",
    image: "/elderly_care.png",
    alt: "Caregiver supporting an elderly woman",
    href: "/services/elderly-care",
  },
  {
    title: "Environment & Welfare",
    description: "Greener communities",
    image: "/environment_welfare.png",
    alt: "Volunteer planting a young tree",
    href: "/services/environment-welfare",
  },
  {
    title: "Culture & Heritage",
    description: "Keeping roots alive",
    image: "/culture_heritage.png",
    alt: "Indian heritage temple representing culture and tradition",
    href: "/services/culture-heritage",
  },
];

export default function TransformALife() {
  return (
    <section className="transform-life-section" aria-labelledby="transform-life-title">
      <div className="container transform-life-inner">
        <Reveal>
          <header className="transform-life-heading">
            <span className="transform-life-mark" aria-hidden="true">
              <i />
              <span>♥</span>
              <i />
            </span>
            <h2 id="transform-life-title">Transform a Life</h2>
            <p>
              Every act of support creates hope, dignity, and opportunity for
              stronger communities.
            </p>
          </header>
        </Reveal>

        <div className="transform-life-grid">
          {supportItems.map((item, index) => (
            <Reveal delay={index * 0.07} key={item.title}>
              <Link className="philosophy-card transform-life-card" href={item.href}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="philosophy-card-image"
                />
                <span className="philosophy-card-overlay" aria-hidden="true" />
                <span className="philosophy-card-content">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                  <span className="philosophy-card-link">
                    Explore initiative <ArrowUpRight size={15} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}