"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  HeartPulse,
  Landmark,
  Leaf,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Initiative = {
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  icon: LucideIcon;
};

const initiatives: Initiative[] = [
  {
    title: "Education & Empowerment",
    shortTitle: "Education",
    description: "Opening doors to learning and opportunity.",
    image: "/education-support.png",
    alt: "Children learning together through Trimurti Foundation support",
    href: "/services/education",
    icon: BookOpenText,
  },
  {
    title: "Healthcare Support",
    shortTitle: "Healthcare",
    description: "Making compassionate care more accessible.",
    image: "/health support.png",
    alt: "Community healthcare support from Trimurti Foundation",
    href: "/services/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Annadhan & Nutrition",
    shortTitle: "Nutrition",
    description: "Nourishment and dignity for every family.",
    image: "/nourish.png",
    alt: "Food and nourishment assistance for a community family",
    href: "/services/nutrition",
    icon: UtensilsCrossed,
  },
  {
    title: "Elderly Care",
    shortTitle: "Elderly Care",
    description: "Companionship, care and dignity across generations.",
    image: "/elder support.png",
    alt: "Trimurti Foundation elderly support initiative",
    href: "/services/elderly-care",
    icon: HandHeart,
  },
  {
    title: "Environment & Welfare",
    shortTitle: "Environment",
    description: "Greener, healthier and connected communities.",
    image: "/protect.png",
    alt: "Trimurti Foundation community and environment welfare initiative",
    href: "/services/environment",
    icon: Leaf,
  },
  {
    title: "Culture & Heritage",
    shortTitle: "Culture",
    description: "Keeping shared traditions alive for generations.",
    image: "/heritage.png",
    alt: "Cultural heritage preservation through Trimurti Foundation",
    href: "/services/culture-heritage",
    icon: Landmark,
  },
];

const AUTOPLAY_DELAY = 5500;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % initiatives.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const selectInitiative = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const moveSlide = (direction: number) => {
    setActiveIndex((current) => (current + direction + initiatives.length) % initiatives.length);
    setIsPaused(true);
  };

  const activeInitiative = initiatives[activeIndex];

  return (
    <section
      className="initiative-hero"
      aria-label="Trimurti Foundation initiatives"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
        setIsPaused(true);
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(distance) > 45) moveSlide(distance > 0 ? -1 : 1);
        touchStartX.current = null;
      }}
    >
      <div className="initiative-hero-inner">
        <div className="initiative-hero-copy">
          <p className="initiative-hero-eyebrow">Our initiatives</p>
          <h1>Serving communities. Preserving values.</h1>
          <p className="initiative-hero-intro">
            Explore the areas where Trimurti Foundation is creating meaningful, lasting impact.
          </p>

          <div className="initiative-grid" role="tablist" aria-label="Choose an initiative">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`initiative-slide-${index}`}
                  className={`initiative-card ${isActive ? "is-active" : ""}`}
                  key={initiative.title}
                  onClick={() => selectInitiative(index)}
                >
                  <span className="initiative-card-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  <span className="initiative-card-copy">
                    <strong>{initiative.shortTitle}</strong>
                    <span>{initiative.description}</span>
                  </span>
                  <ArrowUpRight className="initiative-card-arrow" size={17} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="initiative-slider" aria-live="polite">
          <div className="initiative-slider-frame">
            {initiatives.map((initiative, index) => (
              <div
                className={`initiative-slide ${index === activeIndex ? "is-active" : ""}`}
                id={`initiative-slide-${index}`}
                key={initiative.title}
                role="tabpanel"
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={initiative.image}
                  alt={initiative.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className="initiative-slide-image"
                />
                <div className="initiative-slide-overlay" />
                <div className="initiative-slide-content">
                  <p>{initiative.shortTitle}</p>
                  <h2>{initiative.title}</h2>
                  <span>{initiative.description}</span>
                  <Link href={initiative.href} onClick={() => setIsPaused(true)}>
                    Explore initiative <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            ))}

            <div className="initiative-slider-controls">
              <button type="button" aria-label="Previous initiative" onClick={() => moveSlide(-1)}>
                <ChevronLeft size={17} />
              </button>
              <div className="initiative-slider-dots" aria-label="Choose initiative slide">
                {initiatives.map((initiative, index) => (
                  <button
                    type="button"
                    key={initiative.title}
                    aria-label={`Show ${initiative.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={index === activeIndex ? "is-active" : ""}
                    onClick={() => selectInitiative(index)}
                  />
                ))}
              </div>
              <button type="button" aria-label="Next initiative" onClick={() => moveSlide(1)}>
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className="initiative-hero-mark" aria-hidden="true" />
      <span className="initiative-hero-mark initiative-hero-mark-right" aria-hidden="true" />
      <span className="sr-only">Currently showing {activeInitiative.title}</span>
    </section>
  );
}
