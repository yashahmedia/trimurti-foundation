"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { demoEvents, events } from "@/data/events";

export default function EventsCampaigns() {
  const items = [...events, ...demoEvents];
  const railRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateScrollState = () => {
      setCanScroll(rail.scrollWidth > rail.clientWidth + 1);
      setAtStart(rail.scrollLeft <= 1);
      setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1);
    };
    const frame = window.requestAnimationFrame(updateScrollState);
    const observer = new ResizeObserver(updateScrollState);

    observer.observe(rail);
    rail.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener("scroll", updateScrollState);
    };
  }, [items.length]);

  function scrollCards(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;

    const card = rail.querySelector<HTMLElement>(".events-card");
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    const distance = card ? card.offsetWidth + gap : rail.clientWidth;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth";

    rail.scrollBy({ left: distance * direction, behavior });
  }

  const emptyEventDate = (date: string) =>
    new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });

  return (
    <section className="homepage-section events-campaigns-section" aria-labelledby="events-campaigns-title">
      <div className="container">
        <div className="events-section-header">
          <div className="homepage-section-heading events-section-heading">
            <p className="eyebrow">Come together. Make a difference.</p>
            <h2 id="events-campaigns-title">Events &amp; Campaigns</h2>
            <p>Find a meaningful way to connect, contribute and care.</p>
          </div>
          <div className="events-section-actions">
            <Link href="/events" className="text-link">View full calendar <ArrowUpRight size={16} /></Link>
            {canScroll ? (
              <div className="events-carousel-controls" aria-label="Event and campaign carousel controls">
                <button
                  type="button"
                  aria-label="Show previous events and campaigns"
                  onClick={() => scrollCards(-1)}
                  disabled={atStart}
                >
                  <ArrowLeft size={17} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Show next events and campaigns"
                  onClick={() => scrollCards(1)}
                  disabled={atEnd}
                >
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div
          className="events-card-rail"
          ref={railRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Events and campaigns"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollCards(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollCards(1);
            }
          }}
        >
          {items.length ? items.map((event) => (
            <article className="events-card" key={event.slug}>
              <div className="events-card-image">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 620px) 88vw, (max-width: 900px) 48vw, 33vw"
                />
                <span className="events-image-shade" aria-hidden="true" />
                <span className="events-type-badge">{event.demo ? "Demo event" : "Event"}</span>
              </div>
              <div className="events-card-content">
                <h3>{event.title}</h3>
                <div className="events-card-meta">
                  <span><CalendarDays size={14} aria-hidden="true" /><time dateTime={event.date}>{emptyEventDate(event.date)}</time></span>
                  <span className={`events-status events-status-${event.status.toLowerCase()}`}>{event.status}</span>
                </div>
                <p className="events-card-location"><MapPin size={14} aria-hidden="true" />{event.location}</p>
                <p className="events-card-description">{event.description}</p>
                <Link href={`/events/${event.slug}#event-details`} className="events-card-action">
                  View details <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          )) : (
            <article className="events-card events-empty-card">
              <div className="events-empty-mark"><CalendarDays size={34} aria-hidden="true" /></div>
              <div className="events-card-content">
                <span className="events-type-badge events-type-badge-static">Events</span>
                <h3>New events are taking shape</h3>
                <p className="events-card-description">Upcoming events will appear here once dates and locations are confirmed.</p>
              </div>
            </article>
          )}
          <article className="events-card campaign-card">
            <div className="events-card-image campaign-card-image">
              <Image
                src="/protect.png"
                alt="Community support"
                fill
                sizes="(max-width: 620px) 88vw, (max-width: 900px) 48vw, 33vw"
              />
              <span className="events-image-shade" aria-hidden="true" />
              <span className="events-type-badge">Campaign</span>
            </div>
            <div className="events-card-content">
              <h3>Support a community need</h3>
              <p className="events-card-description">Campaign details and verified progress will be shared here once confirmed.</p>
              <p className="campaign-goal-note">Campaign goal pending confirmation</p>
              <Link href="/donate" className="events-card-action">
                Support this campaign <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
