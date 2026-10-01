"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpenCheck,
  HandCoins,
  Heart,
  LifeBuoy,
  UsersRound,
} from "lucide-react";
import DonationTrigger from "@/components/donate/DonationTrigger";
import KnowledgeModal from "@/components/forms/KnowledgeModal";
import VolunteerModal from "@/components/forms/VolunteerModal";

const supportActions = [
  {
    title: "Donate to a Cause",
    description: "Support our initiatives",
    href: "/donate",
    activePath: "/donate",
    icon: HandCoins,
    tone: "coral",
  },
  {
    title: "Volunteer Your Time",
    description: "Share your time and skills",
    href: "/volunteer",
    activePath: "/volunteer",
    icon: UsersRound,
    tone: "blue",
  },
  {
    title: "Empower Through Knowledge",
    description: "Conduct workshops / Mentor",
    href: "/volunteer?area=Workshops%20and%20Mentoring",
    icon: BookOpenCheck,
    tone: "teal",
  },
  {
    title: "Sponsor a Cause",
    description: "Fund a specific need",
    href: "/donate",
    icon: BadgeDollarSign,
    tone: "orange",
  },
  {
    title: "Request Support",
    description: "Get help for yourself or others",
    href: "/#support-request-title",
    icon: LifeBuoy,
    tone: "purple",
  },
];

export default function TransformLifeSupportPanel({
  showRequestSupport = true,
}: {
  showRequestSupport?: boolean;
}) {
  const pathname = usePathname();
  const initialCause = {
    "/services/education": "Education & Empowerment",
    "/services/healthcare": "Medical & Healthcare Support",
    "/services/nutrition": "Annadan / Food & Nutrition",
    "/services/elderly-care": "Elderly Support",
    "/services/environment-welfare": "Environment & Welfare",
    "/services/culture-heritage": "Culture & Heritage",
  }[pathname];

  return (
    <aside
      className="initiative-approach-support-panel"
      aria-labelledby="transform-life-support-title"
    >
      <header className="initiative-approach-support-header">
        <h3 id="transform-life-support-title">Transform a Life</h3>
        <p>Your support creates real change.</p>
      </header>

      <nav
        className="initiative-approach-support-list"
        aria-label="Ways to support"
      >
        {supportActions
          .filter(({ title }) => showRequestSupport || title !== "Request Support")
          .map(({ title, description, href, activePath, icon: Icon, tone }) => {
          const isActive = pathname === activePath;
          const content = (
            <>
              <span
                className={`initiative-approach-support-icon is-${tone}`}
                aria-hidden="true"
              >
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <span className="initiative-approach-support-copy">
                <strong>{title}</strong>
                <span>{description}</span>
              </span>
              <ArrowRight
                className="initiative-approach-support-arrow"
                size={17}
                aria-hidden="true"
              />
            </>
          );

          if (title === "Donate to a Cause" || title === "Sponsor a Cause") {
            return (
              <DonationTrigger
                className="initiative-approach-support-item donation-trigger"
                key={title}
                initialCause={initialCause}
                modalTitle={title}
              >
                {content}
              </DonationTrigger>
            );
          }

          if (title === "Volunteer Your Time") {
            return (
              <VolunteerModal
                className="initiative-approach-support-item"
                key={title}
                initialCause={initialCause}
                isActive={pathname === activePath}
              >
                {content}
              </VolunteerModal>
            );
          }

          if (title === "Empower Through Knowledge") {
            return (
              <KnowledgeModal
                className="initiative-approach-support-item"
                key={title}
              >
                {content}
              </KnowledgeModal>
            );
          }

          return (
            <Link
              className={`initiative-approach-support-item ${isActive ? "is-active" : ""}`}
              href={href}
              key={title}
              aria-current={isActive ? "page" : undefined}
            >
              {content}
            </Link>
          );
          })}
      </nav>

      <div className="initiative-approach-support-message">
        <p>
          Together, we can
          <br />
          make a difference
        </p>
        <span aria-hidden="true">
          <i />
          <Heart size={14} strokeWidth={1.5} />
          <i />
        </span>
      </div>
    </aside>
  );
}
