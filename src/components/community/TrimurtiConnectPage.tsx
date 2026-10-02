"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import DonationTrigger from "@/components/donate/DonationTrigger";
import EventBrowser from "@/components/events/EventBrowser";
import KnowledgeModal from "@/components/forms/KnowledgeModal";
import VolunteerModal from "@/components/forms/VolunteerModal";
import { demoEvents, events } from "@/data/events";
import styles from "./TrimurtiConnectPage.module.css";

const participationWays = [
  {
    id: "volunteer",
    number: "01",
    label: "Volunteer",
    title: "Give your time. Grow a community.",
    description:
      "Your time can become practical support, encouragement and connection for people in our communities. Find a way to contribute that fits your skills and availability.",
    image: "/volunteer.jpg",
    imageAlt: "Volunteers coming together to support their community",
    imagePosition: "center 42%",
    action: "volunteer",
  },
  {
    id: "events",
    number: "02",
    label: "Events",
    title: "Come together. Take part.",
    description:
      "Join neighbours, volunteers and local partners at community gatherings that turn shared care into action. Explore event details and follow the registration link when places are open.",
    image: "/empower1.png",
    imageAlt: "A community learning activity bringing people together",
    imagePosition: "center 45%",
    action: "events",
  },
  {
    id: "sponsor-learning",
    number: "03",
    label: "Sponsor Learning",
    title: "Make room for someone to learn.",
    description:
      "Help make learning resources, guidance and opportunities more accessible. Your contribution can support education and empowerment initiatives.",
    image: "/education-support.png",
    imageAlt: "A learner taking part in an educational activity",
    imagePosition: "center 44%",
    action: "sponsor",
  },
  {
    id: "professionals",
    number: "04",
    label: "Professionals",
    title: "Put your experience to work for good.",
    description:
      "Offer your professional experience where it can help someone learn, plan or move forward. Share your expertise, mentor, provide guidance or contribute a skills session.",
    image: "/offer mentorship.jpg",
    imageAlt: "A mentor sharing experience in a thoughtful conversation",
    imagePosition: "center 43%",
    action: "professionals",
  },
  {
    id: "business-support",
    number: "05",
    label: "Business Support",
    title: "Bring your organisation into the good.",
    description:
      "Start a conversation about partnership, practical resources or sustainable ways your organisation can support community-led work.",
    image: "/partner as an organisation.jpg",
    imageAlt: "People working together on a community partnership",
    imagePosition: "center 42%",
    action: "business",
  },
] as const;

type ParticipationWay = (typeof participationWays)[number];

function SectionImage({
  way,
  reducedMotion,
}: {
  way: ParticipationWay;
  reducedMotion: boolean;
}) {
  const imageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <motion.figure
      ref={imageRef}
      className={styles.imageFrame}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ y: reducedMotion ? 0 : parallaxY }}
    >
      <Image
        src={way.image}
        alt={way.imageAlt}
        fill
        loading={way.number === "01" ? "eager" : "lazy"}
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 46vw, 540px"
        style={{ objectPosition: way.imagePosition }}
      />
      <span className={styles.imageShade} aria-hidden="true" />
      <span className={styles.imageCaption} aria-hidden="true">
        <span>{way.number}</span>
        <span>{way.label}</span>
      </span>
      <span className={styles.imageAccent} aria-hidden="true" />
    </motion.figure>
  );
}

function ParticipationAction({ way }: { way: ParticipationWay }) {
  const label = {
    volunteer: "Open Volunteer Form",
    events: "Browse Events & Registration",
    sponsor: "Open Sponsorship Form",
    professionals: "Share Your Expertise",
    business: "Open Business Support Form",
  }[way.action];

  const content = (
    <>
      <span>{label}</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </>
  );

  switch (way.action) {
    case "volunteer":
      return (
        <VolunteerModal className={styles.action}>
          {content}
        </VolunteerModal>
      );
    case "events":
      return (
        <Link className={styles.action} href="/events">
          {content}
        </Link>
      );
    case "sponsor":
      return (
        <DonationTrigger
          className={styles.action}
          initialCause="Education & Empowerment"
          modalTitle="Sponsor a learner"
        >
          {content}
        </DonationTrigger>
      );
    case "professionals":
      return (
        <KnowledgeModal className={styles.action}>
          {content}
        </KnowledgeModal>
      );
    case "business":
      return (
        <Link className={styles.action} href="/contact#contact-form">
          {content}
        </Link>
      );
  }
}

export default function TrimurtiConnectPage() {
  const reducedMotion = Boolean(useReducedMotion());

  useEffect(() => {
    const sectionId = decodeURIComponent(window.location.hash.slice(1));
    if (!sectionId) return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const scrollToSection = (behavior: ScrollBehavior) => {
      const top =
        section.getBoundingClientRect().top + window.scrollY - 112;
      window.scrollTo({ top, behavior });
    };
    const initialScroll = window.setTimeout(
      () => scrollToSection(reducedMotion ? "auto" : "smooth"),
      100,
    );
    const settledScroll = window.setTimeout(
      () => scrollToSection("auto"),
      650,
    );

    return () => {
      window.clearTimeout(initialScroll);
      window.clearTimeout(settledScroll);
    };
  }, [reducedMotion]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <motion.div
          className={styles.heroInner}
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Be a part of Trimurthi family</p>
          <h1>Find Your Place in a Stronger Tomorrow</h1>
          <p className={styles.heroIntro}>
            Bring your time, skills, ideas or support. Find a meaningful way to
            stand with communities and help create lasting change.
          </p>
          <span className={styles.heroRule} aria-hidden="true" />
        </motion.div>
      </header>

      <div className={styles.ways} aria-label="Ways to connect">
        {participationWays.map((way, index) => (
          <motion.section
            className={`${styles.way} ${index % 2 ? styles.reversed : ""}`}
            id={way.id}
            key={way.id}
            aria-labelledby={`${way.id}-title`}
            initial={reducedMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{
              duration: 0.72,
              delay: reducedMotion ? 0 : 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.wayInner}>
              <SectionImage way={way} reducedMotion={reducedMotion} />
              <div className={styles.wayCopy}>
                <p className={styles.wayLabel}>
                  <span>{way.number}</span>
                  <span aria-hidden="true" />
                  {way.label}
                </p>
                <h2 id={`${way.id}-title`}>{way.title}</h2>
                <p className={styles.description}>{way.description}</p>
                <ParticipationAction way={way} />
                {way.action === "events" && (
                  <p className={styles.actionNote}>
                    Choose an event to view its details and registration status.
                  </p>
                )}
              </div>
            </div>
            {way.action === "events" && (
              <div className={styles.eventListing}>
                <EventBrowser items={[...events, ...demoEvents]} />
              </div>
            )}
          </motion.section>
        ))}
      </div>

      <div className={styles.closingNote}>
        <Leaf size={18} strokeWidth={1.4} aria-hidden="true" />
        <p>Many hands, one purpose — a more connected future.</p>
        <span aria-hidden="true" />
      </div>
    </div>
  );
}
