"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    src: "/banner1.png",
    alt: "Trimurti Foundation banner showing education and community support",
    mobilePosition: "center",
    desktopPosition: "center",
  },
  {
    src: "/trimurti_hero.png",
    alt: "Trimurti Foundation banner highlighting compassionate outreach and care",
    mobilePosition: "center",
    desktopPosition: "center",
  },
  {
    src: "/herotrimurti.png",
    alt: "Trimurti Foundation mission banner for creating opportunities and transforming lives",
    mobilePosition: "center",
    desktopPosition: "center",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className="hero-slider" aria-label="Trimurti Foundation highlights">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`${slide.src}-${index}`}>
            <div className="hero-slide-wrap">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="hero-slide-image"
                style={{
                  objectPosition: slide.desktopPosition,
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow-left"
        onClick={() => goToSlide(activeIndex - 1)}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} strokeWidth={2.2} />
      </button>

      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow-right"
        onClick={() => goToSlide(activeIndex + 1)}
        aria-label="Next slide"
      >
        <ChevronRight size={22} strokeWidth={2.2} />
      </button>

      <div className="hero-slider-pagination" aria-label="Choose a slide">
        {slides.map((slide, index) => (
          <button
            key={`${slide.src}-dot-${index}`}
            type="button"
            className={`hero-slider-dot ${index === activeIndex ? "is-active" : ""}`}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
