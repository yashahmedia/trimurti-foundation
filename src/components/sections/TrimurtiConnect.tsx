import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ContactRound,
  GraduationCap,
  Handshake,
  Leaf,
  Sprout,
  UsersRound,
} from "lucide-react";

const connections = [
  {
    label: "Professional Connect",
    title: "Bring your expertise.",
    description:
      "Doctors, teachers, lawyers and designers offering pro-bono hours, workshops or one-on-one guidance to the people we serve.",
    href: "/volunteer/professionals",
    cta: "Join as a professional",
    image: "/bring your expertise.jpg",
    imageAlt: "Professionals sharing their knowledge and experience",
    Icon: ContactRound,
    features: [
      { label: "Share your skills", Icon: GraduationCap },
      { label: "Mentor and guide", Icon: UsersRound },
      { label: "Create lasting impact", Icon: Sprout },
    ],
  },
  {
    label: "Business Connect",
    title: "Partner as an organisation.",
    description:
      "CSR partnerships, in-kind support and cause-marketing collaborations with businesses who share our purpose.",
    href: "/volunteer/business-support",
    cta: "Partner with us",
    image: "/partner as an organisation.jpg",
    imageAlt: "Business professionals discussing a partnership",
    Icon: BriefcaseBusiness,
    features: [
      { label: "Build meaningful partnerships", Icon: Handshake },
      { label: "Support sustainable change", Icon: Leaf },
      { label: "Amplify your social impact", Icon: UsersRound },
    ],
  },
];

export default function TrimurtiConnect() {
  return (
    <section
      className="homepage-section connect-section"
      aria-labelledby="connect-title"
    >
      <div className="container connect-container">
        <Sprout className="connect-decoration" aria-hidden="true" />
        <div className="homepage-section-heading connect-heading">
          <div>
            <p className="eyebrow">Skills that strengthen communities</p>
            <h2 id="connect-title">Trimurti Connect</h2>
            <p>
              Professionals and organisations can contribute in ways that go
              beyond donations.
            </p>
          </div>
        </div>
        <div className="connect-grid">
          {connections.map(
            ({
              label,
              title,
              description,
              href,
              cta,
              image,
              imageAlt,
              Icon,
              features,
            }) => (
              <article className="connect-card" key={label}>
                <div className="connect-card-image">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className="connect-card-body">
                  <span className="connect-card-label">{label}</span>
                  <div className="connect-card-title">
                    <span className="connect-icon" aria-hidden="true">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <p className="connect-card-description">{description}</p>
                  <ul className="connect-features">
                    {features.map(({ label: feature, Icon: FeatureIcon }) => (
                      <li key={feature}>
                        <FeatureIcon size={19} strokeWidth={1.6} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={href} className="connect-card-link">
                    {cta} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
