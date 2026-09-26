import Image from "next/image";
import Link from "next/link";

const initiatives = [
  {
    title: "Education & Empowerment",
    href: "/services/education",
  },
  {
    title: "Healthcare Support",
    href: "/services/healthcare",
  },
  {
    title: "Annadhan & Nutrition",
    href: "/services/nutrition",
  },
  {
    title: "Elderly Care",
    href: "/services/elderly-care",
  },
  {
    title: "Environment & Welfare",
    href: "/services/environment-welfare",
  },
  {
    title: "Culture & Heritage",
    href: "/services/culture-heritage",
  },
];

export default function InitiativesBanner({ pageTitle }: { pageTitle: string }) {
  return (
    <section className="initiatives-banner" aria-label="Our initiatives">
      <h1 className="sr-only">{pageTitle}</h1>
      <div className="initiatives-banner-image">
        <Image
          src="/Our%20Initiatives.png"
          alt="Our Initiatives: Creating change where it matters most, from learning and healthcare to nutrition, elder care, environmental action and cultural preservation."
          fill
          loading="eager"
          sizes="100vw"
        />
        <nav className="initiatives-banner-hotspots" aria-label="Explore initiatives">
          {initiatives.map(({ title, href }, index) => (
            <Link
              className={`initiatives-banner-hotspot initiatives-banner-hotspot-${index + 1}`}
              href={href}
              key={title}
              aria-label={title}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
