"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  HeartPulse,
  Landmark,
  Leaf,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SupportRequestForm from "@/components/home/SupportRequestForm";

type Initiative = {
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
};

const initiatives: Initiative[] = [
  {
    title: "Education & Empowerment",
    shortTitle: "Education",
    description: "Opening doors to learning and opportunity.",
    image: "/education-support.png",
    alt: "Children learning together through Trimurthi Foundation support",
    icon: BookOpenText,
  },
  {
    title: "Healthcare Support",
    shortTitle: "Healthcare",
    description: "Making compassionate care more accessible.",
    image: "/health support.png",
    alt: "Community healthcare support from Trimurthi Foundation",
    icon: HeartPulse,
  },
  {
    title: "Annadhan & Nutrition",
    shortTitle: "Nutrition",
    description: "Nourishment and dignity for every family.",
    image: "/nourish.png",
    alt: "Food and nourishment assistance for a community family",
    icon: UtensilsCrossed,
  },
  {
    title: "Elderly Care",
    shortTitle: "Elderly Care",
    description: "Companionship, care and dignity across generations.",
    image: "/elder support.png",
    alt: "Trimurthi Foundation elderly support initiative",
    icon: HandHeart,
  },
  {
    title: "Environment & Welfare",
    shortTitle: "Environment",
    description: "Greener, healthier and connected communities.",
    image: "/protect.png",
    alt: "Trimurthi Foundation community and environment welfare initiative",
    icon: Leaf,
  },
  {
    title: "Culture & Heritage",
    shortTitle: "Culture",
    description: "Keeping shared traditions alive for generations.",
    image: "/heritage.png",
    alt: "Cultural heritage preservation through Trimurthi Foundation",
    icon: Landmark,
  },
  {
    title: "Stand With Our Soldiers",
    shortTitle: "Our Soldiers",
    description: "Standing with serving personnel, veterans and their families.",
    image: "/soldiers-family.webp",
    alt: "An Indian soldier spending time with his family",
    icon: ShieldCheck,
  },
];

const AUTOPLAY_DELAY = 5500;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % initiatives.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (!selectedCategory || !popupPosition) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const clickedInsidePopup = target.closest(".initiative-support-popup");
      const clickedInitiative = target.closest(".initiative-card");
      const clickedDot = target.closest(".initiative-slider-dots button");
      if (clickedInsidePopup || clickedInitiative || clickedDot) return;
      setSelectedCategory(null);
      setPopupPosition(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [popupPosition, selectedCategory]);

  const openSupportForm = (index: number, anchorElement?: HTMLButtonElement | null) => {
    const initiative = initiatives[index];
    setSelectedCategory(initiative.title);
    setIsPaused(true);

    if (anchorElement) {
      const rect = anchorElement.getBoundingClientRect();
      const left = Math.min(rect.right + 26, window.innerWidth - 760);
      const top = Math.min(Math.max(rect.top - 20, 24), window.innerHeight - 420);
      setPopupPosition({ top, left: Math.max(left, 18) });
      return;
    }

    const fallbackButton = buttonRefs.current[index] ?? buttonRefs.current[activeIndex];
    if (fallbackButton) {
      const rect = fallbackButton.getBoundingClientRect();
      const left = Math.min(rect.right + 26, window.innerWidth - 760);
      const top = Math.min(Math.max(rect.top - 12, 24), window.innerHeight - 420);
      setPopupPosition({ top, left: Math.max(left, 18) });
      return;
    }

    setPopupPosition({ top: 124, left: 360 });
  };

  const selectInitiative = (index: number, anchorElement?: HTMLButtonElement | null) => {
    setActiveIndex(index);
    openSupportForm(index, anchorElement);
  };

  const moveSlide = (direction: number) => {
    const nextIndex =
      (activeIndex + direction + initiatives.length) % initiatives.length;
    setActiveIndex(nextIndex);
    openSupportForm(nextIndex, buttonRefs.current[nextIndex]);
  };

  const activeInitiative = initiatives[activeIndex];

  return (
    <>
      <section
        className={`initiative-hero${initiatives.length > 6 ? " has-expanded-initiative-grid" : ""}`}
        aria-label="Trimurthi Foundation initiatives"
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
              Explore the areas where Trimurthi Foundation is creating meaningful, lasting impact.
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
                    ref={(node) => {
                      buttonRefs.current[index] = node;
                    }}
                    onClick={(event) => selectInitiative(index, event.currentTarget)}
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
                      onClick={(event) => selectInitiative(index, event.currentTarget)}
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

      {selectedCategory && popupPosition && (
        <div
          className="initiative-support-popup"
          style={{ top: popupPosition.top, left: popupPosition.left }}
          role="dialog"
          aria-modal="false"
          aria-label={`${selectedCategory} support request form`}
        >
          <button
            type="button"
            className="initiative-support-popup-close"
            aria-label="Close support form"
            onClick={() => {
              setSelectedCategory(null);
              setPopupPosition(null);
            }}
          >
            ×
          </button>
          <SupportRequestForm key={selectedCategory} initialCategory={selectedCategory} compact />
        </div>
      )}
    </>
  );
}
