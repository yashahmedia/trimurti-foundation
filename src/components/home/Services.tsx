import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartPulse, House } from "lucide-react";
import { services } from "@/data/services";
const featuredTitles = [
  "Healthcare & Medical Assistance",
  "Education Support",
  "Community Development",
];
const categoryIcons = {
  Healthcare: HeartPulse,
  Education: BookOpen,
  Community: House,
};

export default function Services({
  featured = false,
  showViewAll = false,
}: {
  featured?: boolean;
  showViewAll?: boolean;
}) {
  const visibleServices = featured
    ? featuredTitles
        .map((title) => services.find((service) => service.title === title))
        .filter((service): service is (typeof services)[number] => Boolean(service))
    : services;

  return (
    <>
      <div className={featured ? "service-grid service-grid-featured" : "service-grid"}>
        {visibleServices.map((s, index) => {
          const CategoryIcon = categoryIcons[s.category as keyof typeof categoryIcons] ?? House;

          return (
            <article className="service-card" key={s.title}>
              <div className="service-media">
                <Image
                  src={s.image}
                  alt={s.title + " — illustrative community scene"}
                  width={500}
                  height={300}
                  sizes="(max-width:640px) 90vw, (max-width:1150px) 45vw, 30vw"
                />
                <span className="service-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="service-category" aria-label={s.category}>
                  <CategoryIcon size={18} strokeWidth={1.8} />
                </span>
              </div>
              <div className="service-body">
                <span className="service-meta">{s.category}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link href={"/volunteer?area=" + encodeURIComponent(s.title)}>
                  <span>Our focus</span>
                  <span className="service-link-icon">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      {showViewAll && (
        <div className="service-grid-footer">
          <div>
            <span>Together, we can</span>
            <strong>Turn compassion into <em>action.</em></strong>
          </div>
          <Link href="/services">
            View all programs <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </>
  );
}
