"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="homepage-section testimonials-home-section"
      aria-labelledby="testimonials-home-title"
    >
      <div className="container">
        <div className="homepage-section-heading">
          <div>
            <p className="eyebrow">Stories from our community</p>
            <h2 id="testimonials-home-title">Testimonials</h2>
            <p>
              Illustrative community reflections, not real testimonials.
              Consented stories will be shared here after approval.
            </p>
          </div>
        </div>

        <div
          className={`auto-scroll-marquee${isPaused ? " is-paused" : ""}`}
          role="region"
          aria-label="Scrolling community reflections"
          tabIndex={0}
        >
          <div className="auto-scroll-track testimonial-marquee-track">
            {[false, true].map((isDuplicate) => (
              <div
                className="auto-scroll-group testimonial-marquee-group"
                key={String(isDuplicate)}
                aria-hidden={isDuplicate || undefined}
              >
                {testimonials.map(({ quote, name, label }, index) => (
                  <article key={name}>
                    <span className="quote-mark" aria-hidden="true">
                      “
                    </span>
                    <p>{quote}</p>
                    <strong>{name}</strong>
                    <small>{label}</small>
                    {!isDuplicate && (
                      <span className="sr-only">
                        Reflection {index + 1} of {testimonials.length}
                      </span>
                    )}
                  </article>
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

        <Link
          href="/media/videos"
          className="testimonial-video-placeholder"
        >
          <span className="video-play">
            <Play size={18} fill="currentColor" />
          </span>
          <span>
            <strong>Video testimonials coming soon</strong>
            <small>
              Approved community stories will be linked here after consent and
              review.
            </small>
          </span>
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
