import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpenCheck,
  HandCoins,
  Heart,
  LifeBuoy,
  UsersRound,
} from "lucide-react";

const supportActions = [
  {
    title: "Donate to a Cause",
    description: "Support our initiatives",
    href: "/donate",
    icon: HandCoins,
    tone: "coral",
  },
  {
    title: "Volunteer Your Time",
    description: "Share your time and skills",
    href: "/volunteer",
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

export default function TransformLifeSupportPanel() {
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
        {supportActions.map(({ title, description, href, icon: Icon, tone }) => (
          <Link
            className="initiative-approach-support-item"
            href={href}
            key={title}
          >
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
          </Link>
        ))}
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
