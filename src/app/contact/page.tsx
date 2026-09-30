import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  UsersRound,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";
import styles from "./contact.module.css";

export const metadata = seo(
  "Contact Us",
  "/contact",
  "Get in touch with Trimurti Foundation in Thrissur, Kerala. Ask a question, volunteer, explore a partnership or request support.",
);

type ContactCard = {
  title: string;
  icon: LucideIcon;
  content: React.ReactNode;
};

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", mark: "f" },
  { label: "Instagram", href: "https://www.instagram.com", mark: "◎" },
  { label: "LinkedIn", href: "https://www.linkedin.com", mark: "in" },
  { label: "YouTube", href: "https://www.youtube.com", mark: "▶" },
];

const contactCards: ContactCard[] = [
  {
    title: "Visit Us",
    icon: MapPin,
    content: (
      <>
        <span>Thrissur, Kerala 680001</span>
        <span>India</span>
      </>
    ),
  },
  {
    title: "Call Us",
    icon: Phone,
    content: (
      <>
        <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
        <span>Mon – Fri, 9:00 AM – 5:00 PM</span>
      </>
    ),
  },
  {
    title: "Email Us",
    icon: Mail,
    content: (
      <>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span>We’ll get back to you soon.</span>
      </>
    ),
  },
  {
    title: "Connect With Us",
    icon: UsersRound,
    content: (
      <>
        <span>Follow our journey on social media</span>
        <span className={styles.socialLinks}>
          {socialLinks.map(({ label, href, mark }) => (
            <a
              href={href}
              key={label}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">{mark}</span>
            </a>
          ))}
        </span>
      </>
    ),
  },
];

const waysToConnect = [
  {
    number: "01",
    title: "General Enquiries",
    description: "Have a question about our work, programs or how we operate?",
    action: "Get in touch",
    href: `mailto:${site.email}`,
  },
  {
    number: "02",
    title: "Volunteer & Events",
    description: "Want to volunteer, join an event or be part of our community?",
    action: "Learn more",
    href: "/volunteer",
  },
  {
    number: "03",
    title: "Partnerships & Support",
    description: "Interested in partnering with us or supporting our mission?",
    action: "Explore opportunities",
    href: "/initiatives",
  },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <i aria-hidden="true" /> Get in touch
            </span>
            <h1 id="contact-title">We’d love to hear from you</h1>
            <p>
              Have a question, want to volunteer, explore a partnership or need
              support? We’re here to help. Reach out to us — we’d be happy to
              connect.
            </p>
            <Link className={styles.primaryButton} href="#contact-form">
              Start a conversation <ArrowRight size={17} />
            </Link>
            <span className={styles.heroLeaf} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/education-support.png"
              alt="Students learning together in a supportive community"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
              className={styles.heroImage}
            />
            <span className={styles.heroImageCaption}>
              Listening is where connection begins.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.contactCardsSection} aria-label="Contact details">
        <div className={`${styles.container} ${styles.contactCards}`}>
          {contactCards.map(({ title, icon: Icon, content }) => (
            <article className={styles.contactCard} key={title}>
              <span className={styles.contactIcon}>
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <h2>{title}</h2>
              <div className={styles.contactCardContent}>{content}</div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.conversationSection}
        id="contact-form"
        aria-labelledby="conversation-title"
      >
        <div className={`${styles.container} ${styles.conversationGrid}`}>
          <div className={styles.formPanel}>
            <span className={styles.eyebrow}>We’re listening</span>
            <h2 id="conversation-title">Let’s start a conversation</h2>
            <p className={styles.sectionLead}>
              Fill out the form below and we’ll get back to you as soon as
              possible.
            </p>
            <ContactForm />
          </div>

          <aside className={styles.locationPanel} aria-labelledby="location-title">
            <span className={styles.eyebrow}>Find us in Kerala</span>
            <h2 id="location-title">Thrissur, Kerala, India</h2>
            <p>
              Our office is located in the heart of Thrissur, where we work
              closely with our communities.
            </p>
            <a
              className={styles.mapPlaceholder}
              href="https://maps.google.com/?q=Thrissur,+Kerala,+India"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Thrissur, Kerala in Google Maps"
            >
              <span className={styles.mapRoadOne} aria-hidden="true" />
              <span className={styles.mapRoadTwo} aria-hidden="true" />
              <span className={styles.mapRoadThree} aria-hidden="true" />
              <span className={styles.mapWater} aria-hidden="true" />
              <span className={styles.mapPin}>
                <MapPin size={22} fill="currentColor" />
              </span>
              <span className={styles.mapLabel}>
                <strong>Trimurti Foundation</strong>
                <span>Thrissur, Kerala</span>
              </span>
              <span className={styles.mapAction}>
                Open map <ArrowUpRight size={14} />
              </span>
            </a>
            <div className={styles.locationAddress}>
              <span className={styles.addressIcon}>
                <MapPin size={17} />
              </span>
              <span>
                <strong>Our address</strong>
                <span>Thrissur, Kerala 680001, India</span>
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.helpSection} aria-labelledby="help-title">
        <div className={styles.container}>
          <div className={styles.helpHeading}>
            <span className={styles.eyebrow}>How can we help?</span>
            <h2 id="help-title">We’re here for you</h2>
            <p>
              Choose how you’d like to connect with us. Our team is ready to
              support you and guide you in the right direction.
            </p>
          </div>
          <div className={styles.helpCards}>
            {waysToConnect.map((item) => (
              <article className={styles.helpCard} key={item.number}>
                <span className={styles.helpNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.href}>
                  {item.action} <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="contact-cta-title">
        <div className={`${styles.container} ${styles.ctaBanner}`}>
          <Image
            src="/life.png"
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 92vw"
            className={styles.ctaImage}
            aria-hidden="true"
          />
          <div className={styles.ctaOverlay} />
          <span className={styles.ctaLeaf} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <div className={styles.ctaContent}>
            <span className={styles.eyebrow}>Together, we can</span>
            <h2 id="contact-cta-title">
              Turn compassion
              <br />
              into action.
            </h2>
            <p>
              Your support helps us create lasting change in the lives of
              children, families and communities.
            </p>
            <div className={styles.ctaActions}>
              <Link className={styles.primaryButton} href="/donate">
                Donate <ArrowUpRight size={16} />
              </Link>
              <Link className={styles.secondaryButton} href="/volunteer">
                Get Involved <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
