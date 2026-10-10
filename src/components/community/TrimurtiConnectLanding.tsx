"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import styles from "./TrimurtiConnectLanding.module.css";

const connections = [
  {
    id: "professional-connect",
    label: "Professional Connect",
    title: "Connecting Professionals. Creating Impact.",
    description:
      "We bring together professionals, mentors and changemakers to share knowledge, build skills and create meaningful opportunities for a brighter future.",
    image: "/Professional Connect.jpeg",
    alt: "A professional sharing guidance with a student",
    position: "center",
  },
  {
    id: "business-connect",
    label: "Business Connect",
    title: "Stronger Businesses. Greater Good.",
    description:
      "We support businesses and entrepreneurs in creating sustainable growth, ethical practices and long-term social value.",
    image: "/Partner as an organisation..webp",
    alt: "Business partners collaborating on an organisation",
    position: "center",
  },
];

export default function TrimurtiConnectLanding() {
  const reducedMotion = Boolean(useReducedMotion());
  const [activeFormId, setActiveFormId] = useState<string | null>(null);
  const [requestEmail, setRequestEmail] = useState<{
    connectionId: string;
    href: string;
  } | null>(null);

  function submitConnectionRequest(
    event: FormEvent<HTMLFormElement>,
    connection: (typeof connections)[number],
  ) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const mobile = String(formData.get("mobile") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const details = [
      `Connection enquiry: ${connection.label}`,
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Email: ${email || "Not provided"}`,
    ].join("\n");

    setRequestEmail({
      connectionId: connection.id,
      href: `mailto:${site.email}?subject=${encodeURIComponent(`${connection.label} enquiry`)}&body=${encodeURIComponent(details)}`,
    });
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Trimurthi Connect</p>
          <h1>Building a Stronger Tomorrow Together</h1>
          <p className={styles.intro}>
            Through meaningful connections and collaborative efforts, we create
            opportunities that empower communities and transform lives.
          </p>
          <span className={styles.rule} aria-hidden="true" />
        </motion.div>
      </header>


      <div className={styles.cards} aria-label="Ways to connect">
        {connections.map((connection, index) => (
          <motion.section
            className={styles.card}
            id={connection.id}
            key={connection.id}
            aria-labelledby={`${connection.id}-title`}
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.7,
              delay: reducedMotion ? 0 : index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.image}>
              <Image
                src={connection.image}
                alt={connection.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 46vw, 560px"
                style={{ objectPosition: connection.position }}
              />
              <span className={styles.imageWash} aria-hidden="true" />
              <span className={styles.imageLabel}>{connection.label}</span>
            </div>
            <div className={styles.copy}>
              <span className={styles.cardEyebrow}>
                <span aria-hidden="true" />
                {connection.label}
              </span>
              <h2 id={`${connection.id}-title`}>{connection.title}</h2>
              <p>{connection.description}</p>
              <button
                className={styles.connectButton}
                type="button"
                aria-expanded={activeFormId === connection.id}
                aria-controls={
                  activeFormId === connection.id
                    ? `${connection.id}-form`
                    : undefined
                }
                onClick={() => {
                  setActiveFormId((current) =>
                    current === connection.id ? null : connection.id,
                  );
                  setRequestEmail(null);
                }}
              >
                {activeFormId === connection.id ? "Close form" : "Get in touch"}
              </button>

              {activeFormId === connection.id && (
                <div className={styles.formPanel} id={`${connection.id}-form`}>
                  {requestEmail?.connectionId === connection.id ? (
                    <div className={styles.formSuccess} role="status">
                      <p>Your enquiry is ready. Open your email app to review and send it.</p>
                      <a className={styles.submitButton} href={requestEmail.href}>
                        Open email to send
                      </a>
                      <button
                        className={styles.textButton}
                        type="button"
                        onClick={() => setRequestEmail(null)}
                      >
                        Edit details
                      </button>
                    </div>
                  ) : (
                    <form
                      className={styles.form}
                      onSubmit={(event) => submitConnectionRequest(event, connection)}
                    >
                      <label className={styles.field}>
                        <span>Your name *</span>
                        <input
                          autoComplete="name"
                          maxLength={120}
                          name="name"
                          required
                        />
                      </label>
                      <label className={styles.field}>
                        <span>Mobile number *</span>
                        <input
                          autoComplete="tel"
                          inputMode="tel"
                          maxLength={30}
                          name="mobile"
                          pattern="(?=.*[0-9])[+0-9(). -]{7,30}"
                          required
                          title="Enter a valid phone number."
                          type="tel"
                        />
                      </label>
                      <label className={styles.field}>
                        <span>Email address (optional)</span>
                        <input
                          autoComplete="email"
                          maxLength={150}
                          name="email"
                          type="email"
                        />
                      </label>
                      <p className={styles.formNote}>
                        Submitting prepares an email for you to review and send.
                      </p>
                      <button className={styles.submitButton} type="submit">
                        Continue
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
