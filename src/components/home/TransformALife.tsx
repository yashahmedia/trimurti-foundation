"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type SupportItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  theme: string;
};

const supportItems: SupportItem[] = [
  {
    title: "Education & Empowerment",
    description: "Learning and opportunity",
    image: "/education_empowerment.png",
    alt: "Students learning together with educational support",
    theme: "education",
  },
  {
    title: "Healthcare Support",
    description: "Access to care",
    image: "/healthcare_support.png",
    alt: "Healthcare professional providing compassionate care",
    theme: "healthcare",
  },
  {
    title: "Annadhan & Nutrition",
    description: "Meals and nourishment",
    image: "/annadhan_nutrition.png",
    alt: "Community meal and nutrition support",
    theme: "annadhan",
  },
  {
    title: "Elderly Care",
    description: "Support and dignity",
    image: "/elderly_care.png",
    alt: "Caregiver supporting an elderly woman",
    theme: "elderly",
  },
  {
    title: "Environment & Welfare",
    description: "Greener communities",
    image: "/environment_welfare.png",
    alt: "Volunteer planting a young tree",
    theme: "environment",
  },
  {
    title: "Culture & Heritage",
    description: "Keeping roots alive",
    image: "/culture_heritage.png",
    alt: "Indian heritage temple representing culture and tradition",
    theme: "culture",
  },
];

export default function TransformALife() {
  const [activeSlide, setActiveSlide] = useState(0);

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
                <p>
                  Every act of support creates hope, dignity, and opportunity for
                  stronger communities.
                </p>
              </header>
            </Reveal>

            <div className="transform-life-grid">
              {supportItems.map((item, index) => (
                <Reveal delay={index * 0.07} key={item.title}>
                  <button
                    type="button"
                    className={`transform-life-card transform-life-card-${item.theme} ${
                      index === activeSlide ? "is-active" : ""
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(10, 25, 22, 0.08), rgba(10, 25, 22, 0.46)), url(${item.image})`,
                    }}
                    aria-label={`Highlight ${item.title}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <span className="transform-life-card-overlay" />
                    <span className="transform-life-card-content">
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </span>
                    <span className="transform-life-card-arrow" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="transform-life-feature-wrap">
              <div
                className="transform-life-feature"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(10, 25, 22, 0.08), rgba(10, 25, 22, 0.7)), url(${supportItems[activeSlide].image})`,
                }}
              >
                <div className="transform-life-feature-overlay" />
                <div className="transform-life-feature-caption">
                  <span>Transform a life through</span>
                  <strong>{supportItems[activeSlide].title}</strong>
                </div>
                <div className="transform-life-feature-dots" aria-label="Choose a story">
                  {supportItems.map((item, index) => (
                    <button
                      type="button"
                      key={item.title}
                      aria-label={`Show ${item.title}`}
                      aria-current={index === activeSlide ? "true" : undefined}
                      className={index === activeSlide ? "is-active" : ""}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}