import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { demoEvents, events } from "@/data/events";

export default function EventsCampaigns() {
  const items = [...events, ...demoEvents].slice(0, 4);
  const featured = items[0];

  return (
    <section className="homepage-section events-campaigns-section" aria-labelledby="events-campaigns-title">
      <div className="container">
        <div className="homepage-section-heading">
          <div>
            <p className="eyebrow">Come together. Make a difference.</p>
            <h2 id="events-campaigns-title">Events &amp; Campaigns</h2>
            <p>Find a meaningful way to connect, contribute and care.</p>
          </div>
          <Link href="/events" className="text-link">View full calendar <ArrowUpRight size={16} /></Link>
        </div>
        {featured ? (
          <div className="events-campaigns-layout">
            <article className="event-feature-card">
              <div className="event-feature-image">
                <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className="event-feature-content">
                <span className="section-chip"><CalendarDays size={14} /> Featured event</span>
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                <Link href={`/events/${featured.slug}`} className="button">Reserve a seat <ArrowUpRight size={16} /></Link>
              </div>
            </article>
            <div className="upcoming-events-list">
              {items.slice(0, 4).map((event) => (
                <Link href={`/events/${event.slug}`} className="upcoming-event" key={event.slug}>
                  <time dateTime={event.date}>{new Date(event.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</time>
                  <span><strong>{event.title}</strong><small>{event.location} · {event.status}</small></span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty"><h3>New events are taking shape</h3><p>Upcoming events will appear here once dates and locations are confirmed.</p></div>
        )}
        <div className="campaign-strip">
          <div><span className="section-chip">Campaign</span><h3>Support a community need</h3><p>Campaign details and verified progress will be shared here once confirmed.</p></div>
          <div className="campaign-placeholder"><span>Campaign goal pending confirmation</span><div className="campaign-progress"><i /></div></div>
          <Link href="/donate" className="button button-light">Support this campaign <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
