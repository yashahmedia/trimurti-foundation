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

type InitiativesBannerProps = {
  pageTitle: string;
  image?: string;
  imageAlt?: string;
};

export default function InitiativesBanner({
  pageTitle,
  image = "/Our%20Initiatives.png",
  imageAlt = "Our Initiatives: Creating change where it matters most, from learning and healthcare to nutrition, elder care, environmental action and cultural preservation.",
}: InitiativesBannerProps) {
  const isOverview = pageTitle === "Our Initiatives";

  return (
    <section className="initiatives-banner" aria-label="Our initiatives">
      <h1 className="sr-only">{pageTitle}</h1>
      <div className="initiatives-banner-image">
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="eager"
          sizes="100vw"
        />
        {isOverview && (
          <nav
            className="initiatives-banner-hotspots"
            aria-label="Explore initiatives"
          >
            {initiatives.map(({ title, href }, index) => (
              <Link
                className={`initiatives-banner-hotspot initiatives-banner-hotspot-${index + 1}`}
                href={href}
                key={title}
                aria-label={title}
              />
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
