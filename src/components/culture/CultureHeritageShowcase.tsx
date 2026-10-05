import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Flower2, Landmark, Music2 } from "lucide-react";
import CultureReveal from "@/components/culture/CultureReveal";
import styles from "./CultureHeritageInitiatives.module.css";

const features = [
  {
    title: "Music & Arts",
    image: "/music&art.png",
    imageAlt: "Classical Indian dancer performing with musicians in a temple",
    href: "/services/culture-heritage/music-art",
    icon: Music2,
  },
  {
    title: "Temples & Heritage",
    image: "/Temple&heritage.png",
    imageAlt: "Ornate Indian temple tower against a sunset sky",
    href: "/services/culture-heritage/temple-support",
    icon: Landmark,
  },
  {
    title: "Trimurthi Gurukul",
    image: "/trimurthi-gurukul.png",
    imageAlt: "Teacher guiding students in a traditional Gurukul lesson",
    href: "/services/culture-heritage/tourism-gurukul",
    icon: BookOpenText,
  },
  {
    title: "Pooja & Havan",
    image: "/pooja-service.png",
    imageAlt: "Priest performing a havan before a decorated shrine",
    href: "/services/culture-heritage/pooja-religious-service",
    icon: Flower2,
  },
];

export default function CultureHeritageShowcase() {
  return (
    <section className={styles.section} aria-labelledby="culture-showcase-title">
      <div className={styles.container}>
        <CultureReveal className={styles.intro}>
          <div className={styles.introCopy}>
            <h2 id="culture-showcase-title">How Trimurthi Foundation Creates Impact</h2>
            <h3>
              Preserving our heritage. Celebrating our traditions. Sharing
              timeless knowledge.
            </h3>
          </div>
          <p className={styles.description}>
            Through 4 interconnected initiatives, Trimurthi Foundation aims to
            preserve India&apos;s rich cultural heritage, support traditional arts
            and temples, make ancient knowledge accessible to new generations,
            and help people stay connected with their traditions through pooja
            services.
          </p>
        </CultureReveal>

        <header className={styles.heading}>
          <p className={styles.eyebrow}>Explore our Cultural initiatives</p>
          <h3>4 interconnected initiatives</h3>
        </header>

        <nav className={styles.cards} aria-label="Culture and heritage initiatives">
          {features.map(({ title, image, imageAlt, href, icon: Icon }, index) => (
            <CultureReveal className={styles.cardReveal} delay={index * 0.06} key={title}>
              <Link className={styles.card} href={href}>
                <span className={styles.cardImage}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 25vw"
                  />
                </span>
                <span className={styles.cardDetails}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <strong>{title}</strong>
                  <ArrowRight className={styles.cardArrow} size={18} aria-hidden="true" />
                </span>
              </Link>
            </CultureReveal>
          ))}
        </nav>
      </div>
    </section>
  );
}
