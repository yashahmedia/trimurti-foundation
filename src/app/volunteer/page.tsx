import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenCheck,
  CalendarDays,
  ClipboardList,
  Heart,
  HeartHandshake,
  Megaphone,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import VolunteerForm from "@/components/forms/VolunteerForm";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import { seo } from "@/lib/seo";

export const metadata = seo("Volunteer Your Time", "/volunteer");

const reasonsToVolunteer: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: HeartHandshake,
    title: "Create an Impact",
    description: "Contribute directly to causes that matter.",
  },
  {
    icon: BookOpenCheck,
    title: "Share Your Skills",
    description: "Use your knowledge and experience to support our work.",
  },
  {
    icon: UsersRound,
    title: "Meet New People",
    description:
      "Connect with like-minded individuals and build a strong community.",
  },
  {
    icon: ArrowUpRight,
    title: "Learn & Grow",
    description: "Gain new experiences and develop valuable skills.",
  },
  {
    icon: Heart,
    title: "Be Part of the Change",
    description: "Every hour you contribute can make a difference.",
  },
];

const volunteerOpportunities = [
  {
    title: "Community Outreach",
    description: "Be there for people and families in our community.",
    icon: HeartHandshake,
  },
  {
    title: "Event Support",
    description: "Help bring community events and initiatives to life.",
    icon: CalendarDays,
  },
  {
    title: "Education & Mentoring",
    description: "Share your knowledge and encourage lifelong learning.",
    icon: BookOpenCheck,
  },
  {
    title: "Social Media & Digital Support",
    description: "Help more people discover and support our work.",
    icon: Megaphone,
  },
  {
    title: "Administrative Support",
    description: "Put your planning and organisational skills to good use.",
    icon: ClipboardList,
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ area?: string; event?: string }>;
}) {
  const { area = "", event = "" } = await searchParams;
  const volunteerInterests = volunteerOpportunities.map(({ title }) => title);
  const initialInterest =
    area === "Workshops and Mentoring"
      ? "Education & Mentoring"
      : volunteerInterests.includes(area)
        ? area
        : "";

  return (
    <main className="volunteer-page">
      <section className="volunteer-hero" aria-labelledby="volunteer-title">
        <div className="container">
          <nav className="volunteer-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Volunteer Your Time</span>
          </nav>
          <div className="volunteer-hero-grid">
            <div className="volunteer-hero-copy">
              <p className="volunteer-eyebrow">
                <span aria-hidden="true" />
                Volunteer with Trimurti
              </p>
              <h1 id="volunteer-title">
                Make a Difference
                <span>With Your Time</span>
              </h1>
              <p className="volunteer-hero-lead">
                You don’t need to make a donation to make an impact. Your time,
                skills, and dedication can help create meaningful change in
                our community.
              </p>
              <p className="volunteer-hero-description">
                Whether you can volunteer for a few hours, a day, or on a
                regular basis, there is a place for you. Join our volunteer
                community and help us turn compassion into action.
              </p>
              <div className="volunteer-hero-actions">
                <a href="#volunteer-application" className="volunteer-primary-cta">
                  Find your way to help <ArrowDown size={17} />
                </a>
                <span className="volunteer-hero-promise">
                  <Heart size={15} aria-hidden="true" />
                  Every helping hand matters
                </span>
              </div>
            </div>
            <div className="volunteer-hero-visual">
              <Image
                src="/volunteer.jpg"
                alt="Community volunteers joining hands to support one another"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 48vw"
              />
              <div className="volunteer-photo-caption">
                <span className="volunteer-photo-icon">
                  <HeartHandshake size={21} aria-hidden="true" />
                </span>
                <span>
                  <strong>Give a little time.</strong>
                  <small>Be part of something meaningful.</small>
                </span>
              </div>
              <span className="volunteer-image-spark" aria-hidden="true">
                ✳
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="volunteer-reasons-section"
        aria-labelledby="volunteer-reasons-title"
      >
        <div className="container">
          <div className="volunteer-section-heading">
            <p className="eyebrow">More than giving your time</p>
            <h2 id="volunteer-reasons-title">Why Volunteer With Us?</h2>
            <p>
              Bring what makes you you. There are many ways to make a
              difference, and every one of them matters.
            </p>
          </div>
          <ul className="volunteer-reasons-list">
            {reasonsToVolunteer.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <span className="volunteer-reason-icon">
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="container volunteer-ways-section"
        aria-labelledby="volunteer-ways-title"
      >
        <div className="volunteer-section-heading">
          <p className="eyebrow">There’s a place for you</p>
          <h2 id="volunteer-ways-title">Ways You Can Volunteer</h2>
        </div>
        <div className="volunteer-ways">
          {volunteerOpportunities.map(({ title, description, icon: Icon }, index) => (
            <article className="volunteer-way" key={title}>
              <span className="volunteer-way-icon">
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="volunteer-way-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="volunteer-cta"
        aria-labelledby="volunteer-time-title"
      >
        <div className="container volunteer-cta-content">
          <div>
            <p className="volunteer-cta-eyebrow">Small acts. Lasting change.</p>
            <h2 id="volunteer-time-title">Your Time Matters</h2>
            <p className="volunteer-cta-body">
              Every volunteer brings something unique. Whether you have
              professional skills or simply a willingness to help, your
              contribution can make a real difference.
            </p>
            <p className="volunteer-cta-invitation">
              Join us today and become part of a community working toward a
              better tomorrow.
            </p>
          </div>
          <a className="volunteer-primary-cta" href="#volunteer-application">
            Become a Volunteer <ArrowDown size={17} />
          </a>
        </div>
      </section>

      <section
        className="container volunteer-application-section"
        id="volunteer-application"
        aria-labelledby="volunteer-application-title"
      >
        <div className="volunteer-application-layout">
          <div className="volunteer-form-card">
            <div className="volunteer-form-heading">
              <p className="eyebrow">Join our community</p>
              <h2 id="volunteer-application-title">Become a Volunteer</h2>
              <p>
                Thank you for your interest in volunteering with us. Please
                fill out the form below, and our team will get in touch with
                you.
              </p>
            </div>
            <VolunteerForm initialInterest={initialInterest} event={event} />
          </div>
          <TransformLifeSupportPanel />
        </div>
      </section>
    </main>
  );
}
