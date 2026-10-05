"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./TrimurtiConnectLanding.module.css";

const connections = [
  {
    id: "professional-connect",
    label: "Professional Connect",
    title: "Connecting Professionals. Creating Impact.",
    description:
      "We bring together professionals, mentors and changemakers to share knowledge, build skills and create meaningful opportunities for a brighter future.",
    image: "/education_empowerment.png",
    alt: "An Indian teacher guiding students in a classroom",
    position: "center 43%",
  },
  {
    id: "business-connect",
    label: "Business Connect",
    title: "Stronger Businesses. Greater Good.",
    description:
      "We support businesses and entrepreneurs in creating sustainable growth, ethical practices and long-term social value.",
    image: "/environment_welfare.png",
    alt: "Indian community members working together on a local initiative",
    position: "center 42%",
  },
];

export default function TrimurtiConnectLanding() {
  const reducedMotion = Boolean(useReducedMotion());

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
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
