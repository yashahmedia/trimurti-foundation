"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Keyboard } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import "swiper/css";
import "swiper/css/pagination";
export default function Testimonials() {
  return (
    <Swiper
      modules={[A11y, Pagination, Keyboard]}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      spaceBetween={40}
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name}>
          <div className="testimonial">
            <blockquote>“{t.quote}”</blockquote>
            <strong>{t.name}</strong>
            <p className="small">{t.label}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
