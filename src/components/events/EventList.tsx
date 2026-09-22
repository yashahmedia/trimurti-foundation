"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, CalendarDays } from "lucide-react";
import type { FoundationEvent } from "@/data/events";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";

function EventSlider({ event }: { event: FoundationEvent }) {
  const images = event.images?.length ? event.images : [event.image];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className="event-media">
      {images.map((image, index) => (
        <Image
          className={index === activeIndex ? "is-active" : ""}
          key={image}
          src={image}
          width={800}
          height={520}
          alt={`${event.title} — image ${index + 1}`}
        />
      ))}
      <span className="event-status">{event.demo ? "Demo event" : event.status}</span>
      <div className="event-dots" aria-label="Event images">
        {images.map((image, index) => (
          <button
            aria-label={`Show image ${index + 1}`}
            className={index === activeIndex ? "is-active" : ""}
            key={image}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

export default function EventList({ items }: { items: FoundationEvent[] }) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div className="event-carousel">
      <button
        className="event-nav event-nav-prev"
        type="button"
        aria-label="Previous event"
        onClick={() => swiper?.slidePrev()}
      >
        <ArrowLeft size={18} />
      </button>
      <Swiper
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true }}
        loop={items.length > 1}
        onSwiper={setSwiper}
        slidesPerView={1}
        spaceBetween={24}
        className="event-grid"
      >
        {items.map((e) => (
          <SwiperSlide key={e.slug}>
            <article className="event-card">
              <EventSlider event={e} />
              <div className="event-card-body">
                <span className="event-kicker">{e.demo ? "Community gathering" : "Foundation event"}</span>
                <h3>{e.title}</h3>
                <p>
                  <CalendarDays size={14} />
                  {format(new Date(e.date), "dd MMM yyyy · HH:mm")}
                </p>
                <p>
                  <MapPin size={14} /> {e.location}
                </p>
                <p className="event-description">{e.description}</p>
                <Link href={"/events/" + e.slug}>
                  View details <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="event-nav event-nav-next"
        type="button"
        aria-label="Next event"
        onClick={() => swiper?.slideNext()}
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
