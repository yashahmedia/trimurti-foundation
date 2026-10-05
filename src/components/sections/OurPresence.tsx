"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

const pressCoverage = [
  {
    image: "/news%20paper.jpg",
    alt: "Trimurthi Foundation newspaper coverage",
    label: "Newspaper coverage 1",
  },
  {
    image: "/news%20paper%202.jpg",
    alt: "Trimurthi Foundation newspaper coverage",
    label: "Newspaper coverage 2",
  },
  {
    image: "/news%20paper%203.webp",
    alt: "Trimurthi Foundation newspaper coverage",
    label: "Newspaper coverage 3",
  },
];

export default function OurPresence() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="homepage-section presence-section"
      aria-labelledby="presence-title"
    >
      <div className="container">
        <div className="homepage-section-heading presence-heading">
          <div>
            <p className="eyebrow">Shared with permission</p>
            <h2 id="presence-title">Our Presence</h2>
            <p>
              Trimurthi Foundation in the news. Explore our newspaper coverage.
            </p>
          </div>
        </div>

        <div
          className={`auto-scroll-marquee press-coverage-marquee${isPaused ? " is-paused" : ""}`}
          role="region"
          aria-label="Scrolling newspaper coverage"
          tabIndex={0}
        >
          <div className="auto-scroll-track press-coverage-track">
            {[false, true].map((isDuplicate) => (
              <div
                className="auto-scroll-group press-coverage-group"
                key={String(isDuplicate)}
                aria-hidden={isDuplicate || undefined}
              >
                {pressCoverage.map(({ image, alt, label }) => (
                  <figure
                    className="press-coverage-card"
                    key={`${image}-${isDuplicate}`}
                  >
                    <div className="press-coverage-image">
                      <Image
                        src={image}
                        alt={isDuplicate ? "" : alt}
                        fill
                        sizes="(max-width: 640px) 84vw, (max-width: 1000px) 45vw, 33vw"
                      />
                    </div>
                    <figcaption>{label}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="auto-scroll-controls">
          <button
            type="button"
            className="auto-scroll-toggle"
            aria-pressed={isPaused}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            {isPaused ? <Play size={15} /> : <Pause size={15} />}
            {isPaused ? "Resume scrolling" : "Pause scrolling"}
          </button>
        </div>

        <Link href="/media" className="text-link presence-media-link">
          Explore our media <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
