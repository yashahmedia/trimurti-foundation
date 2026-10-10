import Image from "next/image";
import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  UsersRound,
  Sprout,
} from "lucide-react";
import DonationTrigger from "@/components/donate/DonationTrigger";
import KnowledgeModal from "@/components/forms/KnowledgeModal";
import VolunteerModal from "@/components/forms/VolunteerModal";

const ways = [
  {
    title: "Volunteer",
    action: "Join as a volunteer",
    form: "volunteer",
    description:
      "Share your time, skills and energy to meaningful initiatives. Whether supporting community programmes, events or people in need, your contribution can make a real difference.",
    image: "/volunteer.jpg",
    imageAlt: "Volunteers joining hands to support their community",
    Icon: UsersRound,
  },
  {
    title: "Become a Donor",
    action: "Donate now",
    form: "donation",
    description:
      "Your contribution can help create opportunities, support those in need and strengthen communities through education, healthcare, nutrition, elderly care and other meaningful initiatives.",
    image: "/Become a donor.jpg",
    imageAlt: "A donation being placed into a community collection box",
    Icon: HeartHandshake,
  },
  {
    title: "Offer mentorship",
    action: "Share your expertise",
    form: "knowledge",
    description:
      "Share your experience, knowledge and guidance to help individuals grow, make informed choices and realise their potential.",
    image: "/offer mentorship.jpg",
    imageAlt: "A mentor guiding students during a community workshop",
    Icon: Handshake,
  },
];

function FamilyAction({
  form,
  action,
}: {
  form: (typeof ways)[number]["form"];
  action: string;
}) {
  const className = "family-card-link";
  const content = (
    <>
      {action}
      <ArrowRight size={16} aria-hidden="true" />
    </>
  );

  if (form === "volunteer") {
    return <VolunteerModal className={className}>{content}</VolunteerModal>;
  }

  if (form === "donation") {
    return <DonationTrigger className={className}>{content}</DonationTrigger>;
  }

  return <KnowledgeModal className={className}>{content}</KnowledgeModal>;
}

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
            <h2 id="family-title">Be Part of the Trimurthi Family</h2>
            <p>
              Together, we can create lasting change. Choose how you’d like to
              contribute and be a part of a kinder, stronger community.
            </p>
          </div>
        </div>
        <div className="family-grid">
          {ways.map(
            ({ title, action, form, description, image, imageAlt, Icon }) => (
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
                  <FamilyAction action={action} form={form} />
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
