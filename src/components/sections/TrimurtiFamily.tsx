import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  Sprout,
  UsersRound,
} from "lucide-react";

const ways = [
  {
    title: "Volunteer",
    description:
      "Share your time, skills and energy. From community events to hands-on projects, your support makes a real difference.",
    action: "Explore volunteer opportunities",
    href: "/volunteer",
    image: "/volunteer.jpg",
    imageAlt: "Volunteers joining hands to support their community",
    Icon: UsersRound,
  },
  {
    title: "Become a donor",
    description:
      "Your generosity helps fund education, healthcare, and sustainable livelihoods for communities in need.",
    action: "Make a lasting impact",
    href: "/donate?type=monthly",
    image: "/become a dono.jpg",
    imageAlt: "A heart held in hands representing donor support",
    Icon: HeartHandshake,
  },
  {
    title: "Offer mentorship",
    description:
      "Share your experience, guide future leaders, and help someone reach their potential.",
    action: "Become a mentor",
    href: "/volunteer/professionals",
    image: "/offer mentorship.jpg",
    imageAlt: "A mentor guiding a learner",
    Icon: Handshake,
  },
];

export default function TrimurtiFamily() {
  return (
    <section
      className="homepage-section family-section"
      aria-labelledby="family-title"
    >
      <div className="container family-container">
        <Sprout className="family-decoration" aria-hidden="true" />
        <div className="homepage-section-heading family-heading">
          <div>
            <p className="eyebrow">Ways to get involved</p>
            <h2 id="family-title">Be Part of the Trimurti Family</h2>
            <p>
              Together, we can create lasting change. Choose how you’d like to
              contribute and be a part of a kinder, stronger community.
            </p>
          </div>
        </div>
        <div className="family-grid">
          {ways.map(({ title, description, action, href, image, imageAlt, Icon }) => (
            <article className="family-card" key={title}>
              <div className="family-card-image">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <span className="family-card-icon" aria-hidden="true">
                  <Icon size={21} strokeWidth={1.8} />
                </span>
              </div>
              <div className="family-card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={href} className="family-card-link">
                  {action} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
