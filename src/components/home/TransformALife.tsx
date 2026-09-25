"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Leaf,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type SupportItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  theme: string;
  icon: LucideIcon;
};

const supportItems: SupportItem[] = [
  {
    title: "Education & Empowerment",
    description: "Learning and opportunity",
    image: "/education_empowerment.png",
    alt: "Students learning together with educational support",
    theme: "education",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Support",
    description: "Access to care",
    image: "/healthcare_support.png",
    alt: "Healthcare professional providing compassionate care",
    theme: "healthcare",
    icon: HeartPulse,
  },
  {
    title: "Annadhan & Nutrition",
    description: "Meals and nourishment",
    image: "/annadhan_nutrition.png",
    alt: "Community meal and nutrition support",
    theme: "annadhan",
    icon: Utensils,
  },
  {
    title: "Elderly Care",
    description: "Support and dignity",
    image: "/elderly_care.png",
    alt: "Caregiver supporting an elderly woman",
    theme: "elderly",
    icon: HandHeart,
  },
  {
    title: "Environment & Welfare",
    description: "Greener communities",
    image: "/environment_welfare.png",
    alt: "Volunteer planting a young tree",
    theme: "environment",
    icon: Leaf,
  },
  {
    title: "Culture & Heritage",
    description: "Keeping roots alive",
    image: "/culture_heritage.png",
    alt: "Indian heritage temple representing culture and tradition",
    theme: "culture",
    icon: Landmark,
  },
];

export default function TransformALife() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % supportItems.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="transform-life-section" aria-labelledby="transform-life-title">
      <div className="transform-life-shape transform-life-shape-green" aria-hidden="true" />
      <div className="transform-life-shape transform-life-shape-peach" aria-hidden="true" />
      <div className="transform-life-shape transform-life-shape-blue" aria-hidden="true" />
      <div className="container transform-life-inner">
        <div className="transform-life-layout">
          <div className="transform-life-copy">
            <Reveal>
              <header className="transform-life-heading">
                <span className="transform-life-mark" aria-hidden="true">
                  <i />
                  <span>♥</span>
                  <i />
                </span>
                <h2 id="transform-life-title">Transform a Life</h2>
                <p>Every act of support creates hope, dignity, and opportunity for stronger communities.</p>
              </header>
            </Reveal>

            <div className="transform-life-grid">
              {supportItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal delay={index * 0.08} key={item.title}>
                    <article className={`support-card support-card-${item.theme}`}>
                      <span className="support-card-icon"><Icon size={25} strokeWidth={1.8} /></span>
                      <span className="support-card-copy">
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </span>
                      <span className="support-card-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal>
            <div
              className="transform-life-slider"
              aria-label="Transform a Life stories"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {supportItems.map((item, index) => (
                <div
                  className={`transform-life-slide ${index === activeSlide ? "is-active" : ""}`}
                  key={item.title}
                  aria-hidden={index !== activeSlide}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="transform-life-slide-image"
                  />
                  <div className="transform-life-slide-overlay" />
                  <div className="transform-life-slide-caption">
                    <span>Transform a life through</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              ))}
              <div className="transform-life-slider-dots" aria-label="Choose a story">
                {supportItems.map((item, index) => (
                  <button
                    type="button"
                    key={item.title}
                    aria-label={`Show ${item.title}`}
                    aria-current={index === activeSlide ? "true" : undefined}
                    className={index === activeSlide ? "is-active" : ""}
                    onClick={() => {
                      setActiveSlide(index);
                      setIsPaused(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}