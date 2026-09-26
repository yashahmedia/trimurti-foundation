import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pressCoverage = [
  {
    image: "/news%20paper.jpg",
    alt: "Trimurti Foundation newspaper coverage",
    label: "Newspaper coverage 1",
  },
  {
    image: "/news%20paper%202.jpg",
    alt: "Trimurti Foundation newspaper coverage",
    label: "Newspaper coverage 2",
  },
  {
    image: "/news%20paper%203.webp",
    alt: "Trimurti Foundation newspaper coverage",
    label: "Newspaper coverage 3",
  },
];

export default function OurPresence() {
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
              Trimurti Foundation in the news. Explore our newspaper coverage.
            </p>
          </div>
        </div>

        <div className="press-coverage-grid">
          {pressCoverage.map(({ image, alt, label }) => (
            <figure className="press-coverage-card" key={image}>
              <div className="press-coverage-image">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              </div>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>

        <Link href="/media" className="text-link presence-media-link">
          Explore our media <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
