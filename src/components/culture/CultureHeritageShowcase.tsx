"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Flower2,
  Landmark,
  Music2,
} from "lucide-react";
import { useState } from "react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./CultureHeritageShowcase.module.css";

const slides = [
  {
    image: "/preserve.png",
    alt: "Traditional Indian cultural performance",
  },
  {
    image: "/heritage.png",
    alt: "Temple and heritage setting",
  },
  {
    image: "/education_empowerment.png",
    alt: "Learners reading and studying together",
  },
];

const features = [
  {
    title: "Music & Art",
    description: "Vasantha Utsavam and cultural arts information.",
    image: "/preserve.png",
    imageAlt: "Traditional Indian cultural performance",
    href: "/services/culture-heritage/music-art",
    icon: Music2,
  },
  {
    title: "Temple Support",
    description: "Information about temple support areas.",
    image: "/heritage.png",
    imageAlt: "Temple and heritage setting",
    href: "/services/culture-heritage/temple-support",
    icon: Landmark,
  },
  {
    title: "Tourism Gurukul",
    description: "Books, videos and learning resources.",
    image: "/education_empowerment.png",
    imageAlt: "Learners reading and studying together",
    href: "/services/culture-heritage/tourism-gurukul",
    icon: BookOpenText,
  },
  {
    title: "Pooja & Religious Service",
    description: "Approved service information and enquiries.",
    image: "/culture_heritage.png",
    imageAlt: "Cultural and religious heritage setting",
    href: "/services/culture-heritage/pooja-religious-service",
    icon: Flower2,
  },
];

export default function CultureHeritageShowcase() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section className={styles.section} aria-labelledby="culture-showcase-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Explore our focus areas</p>
          <h2 id="culture-showcase-title">Culture, knowledge and community</h2>
          <p>
            Explore the cultural initiatives and learning areas connected with
            our work.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.slider}>
            <Swiper
              modules={[A11y, Autoplay, Keyboard, Pagination]}
              a11y={{ enabled: true }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              keyboard={{ enabled: true }}
              loop
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className={styles.swiper}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                  <article className={styles.slide}>
                    <div className={styles.slideImage}>
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 55vw, 48vw"
                      />
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.controls} aria-label="Culture slider controls">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                aria-label="Previous culture slide"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                aria-label="Next culture slide"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav className={styles.cards} aria-label="Culture and heritage areas">
            {features.map(
              ({ title, description, image, imageAlt, href, icon: Icon }) => (
                <Link className={styles.card} href={href} key={title}>
                  <span className={styles.cardImage}>
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 22vw"
                    />
                  </span>
                  <span className={styles.cardDetails}>
                    <span className={styles.cardIcon} aria-hidden="true">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                    <span className={styles.cardCopy}>
                      <strong>{title}</strong>
                      <span>{description}</span>
                    </span>
                    <ArrowRight
                      className={styles.cardArrow}
                      size={18}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
