"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Megaphone } from "lucide-react";
import { Autoplay, A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { FoundationUpdate } from "@/data/updates";
import "swiper/css";

export default function LatestUpdates({ items }: { items: FoundationUpdate[] }) {
  return (
    <section className="latest-updates" aria-labelledby="latest-updates-title">
      <div className="container">
        <div className="latest-updates-heading">
          <div>
            <p className="eyebrow">
              <Megaphone size={15} /> Latest updates
            </p>
            <h2 id="latest-updates-title">What is happening at Trimurti</h2>
          </div>
          <Link href="/events" className="latest-updates-view-all">
            View all <ArrowUpRight size={15} />
          </Link>
        </div>
        <Swiper
          aria-label="Latest foundation updates"
          modules={[Autoplay, A11y, Keyboard]}
          autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 1.15, spaceBetween: 14 },
            640: { slidesPerView: 2.2, spaceBetween: 16 },
            980: { slidesPerView: 4, spaceBetween: 18 },
          }}
          keyboard={{ enabled: true }}
          loop={items.length > 4}
          speed={850}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="latest-update-card">
                <Link href={item.href} className="latest-update-image">
                  <Image src={item.image} alt={item.title} width={420} height={220} />
                  <span className="latest-update-arrow" aria-hidden="true">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
                <div className="latest-update-body">
                  <span className="latest-update-category">{item.category}</span>
                  <h3>
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p>{item.summary}</p>
                  <span className="latest-update-date">
                    {item.date === "Available now"
                      ? item.date
                      : new Intl.DateTimeFormat("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }).format(new Date(item.date))}
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
