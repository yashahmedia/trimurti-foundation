import BreadcrumbSchema from "./BreadcrumbSchema";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { site } from "@/config/site";
import CountUp from "./CountUp";
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={secondary ? "button secondary" : "button"} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function PageHero({
  title,
  eyebrow = "Together, we make a difference",
  description,
}: {
  title: string;
  eyebrow?: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <BreadcrumbSchema title={title} />
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          {title}
        </div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
export function Empty({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="empty">
      <HeartHandshake size={34} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
export function CTA() {
  return (
    <section className="container section">
      <div className="cta">
        <div>
          <p className="eyebrow">A little time. A lasting difference.</p>
          <h2>
            Your kindness can
            <br />
            be someone’s new beginning.
          </h2>
          <p>
            Bring your skills, your energy, and your heart. Let’s grow together.
          </p>
        </div>
        <Button href="/volunteer">Register as Volunteer</Button>
      </div>
    </section>
  );
}
export function Impact() {
  return (
    <section className="impact">
      <div className="container">
        <p className="eyebrow">Every act of care matters</p>
        <div className="stats">
          {site.impact.map((s) => (
            <div key={s.label}>
              <strong>
                {s.value === null ? "—" : <CountUp value={s.value} />}
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <p className="small">
          Verified impact figures will be published after review.
        </p>
      </div>
    </section>
  );
}
