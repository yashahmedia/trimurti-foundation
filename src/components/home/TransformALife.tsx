import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./TransformALife.module.css";

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
    description: "Opening doors to learning, building confidence, and helping students develop the skills to shape a brighter, more independent future.",
    image: "/education_empowerment.png",
    alt: "Students learning together with educational support",
    href: "/services/education",
  },
  {
    title: "Healthcare Support",
    description: "Making compassionate care and health awareness more accessible, so individuals and families can take the next step towards healthier lives.",
    image: "/healthcare_support.png",
    alt: "Healthcare professional providing compassionate care",
    href: "/services/healthcare",
  },
  {
    title: "Annadhan & Nutrition",
    description: "Bringing communities together through nourishing meals and food support, helping families face each day with strength, hope, and dignity.",
    image: "/annadhan_nutrition.png",
    alt: "Community meal and nutrition support",
    href: "/services/nutrition",
  },
  {
    title: "Elderly Care",
    description: "Honouring our elders with companionship, compassionate support, and care that helps them feel valued, connected, and respected.",
    image: "/elderly_care.png",
    alt: "Caregiver supporting an elderly woman",
    href: "/services/elderly-care",
  },
  {
    title: "Environment & Welfare",
    description: "Encouraging tree planting, sustainable habits, and community participation to nurture greener neighbourhoods and a healthier environment for all.",
    image: "/environment_welfare.png",
    alt: "Volunteer planting a young tree",
    href: "/services/environment-welfare",
  },
  {
    title: "Culture & Heritage",
    description: "Celebrating Indian traditions, arts, and shared heritage, connecting generations with the stories and practices that keep our culture alive.",
    image: "/culture_heritage.png",
    alt: "Indian heritage temple representing culture and tradition",
    href: "/services/culture-heritage",
  },
];

const soldiers: SupportItem = {
  title: "Stand With Our Soldiers",
  description: "Honouring those who serve our nation by standing beside serving personnel, veterans, and their families with gratitude, compassion, and support for their wellbeing.",
  image: "/soldiers-family.webp",
  alt: "Illustrative portrait of an Indian soldier spending time with his family",
  href: "/about-us#standing-with-soldiers",
};

function CauseCard({ item, featured = false }: { item: SupportItem; featured?: boolean }) {
  return (
    <Link className={[styles.card, featured ? styles.featured : ""].join(" ")} href={item.href}>
      <div className={styles.image}>
        <Image src={item.image} alt={item.alt} fill
          sizes={featured ? "(max-width: 1099px) 100vw, 500px" : "(max-width: 639px) 100vw, (max-width: 1099px) 50vw, 400px"} />
      </div>
      <div className={styles.content}>
        {featured && <span className={styles.kicker}>Serving those who serve</span>}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span className={styles.link}>Explore Initiative <ArrowRight size={16} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

export default function TransformALife() {
  return (
    <section className={styles.section} aria-labelledby="transform-life-title">
      <div className={"container " + styles.inner}>
        <Reveal>
          <header className={styles.heading}>
            <span className={styles.eyebrow}>Our Initiatives</span>
            <h2 id="transform-life-title">Transform a Life</h2>
            <p>
              Every act of support creates hope, dignity, and opportunity for
              stronger communities.
            </p>
            <span className={styles.divider} aria-hidden="true" />
          </header>
        </Reveal>
        <div className={styles.grid}>
          <div className={styles.featuredSlot}><CauseCard item={soldiers} featured /></div>
          {supportItems.map((item, index) => (
            <div className={styles.causeSlot + " " + (index < 2 ? styles.primarySlot : styles.secondarySlot)} key={item.title}>
              <CauseCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
