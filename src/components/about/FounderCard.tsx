"use client";

import Image from "next/image";
import { useId, useState } from "react";
import styles from "./AboutUsRedesign.module.css";

type FounderCardProps = {
  image: string;
  name: string;
  shortName: string;
  role: string;
  background: string;
  index: number;
};

export default function FounderCard({
  image,
  name,
  shortName,
  role,
  background,
  index,
}: FounderCardProps) {
  const [expanded, setExpanded] = useState(false);
  const backgroundId = useId();
  const backgroundParts = background.split("Volunteer.ae");

  return (
    <article className={styles.founderCard}>
      <div
        className={`${styles.founderPortrait} ${index === 1 ? styles.founderPortraitWarm : index === 2 ? styles.founderPortraitCool : ""}`}
        aria-label={`${name} founder portrait`}
      >
        <Image
          src={image}
          alt={`${name} portrait`}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
          className={styles.founderImage}
        />
      </div>
      <div className={styles.founderMeta}>
        <p className={styles.founderRole}>{role}</p>
        <h3 className={styles.founderName}>
          {name} <span>{`(${shortName})`}</span>
        </h3>
        <p
          id={backgroundId}
          className={`${styles.founderBackground} ${expanded ? "" : styles.founderBackgroundCollapsed}`}
        >
          {backgroundParts.map((part, partIndex) => (
            <span key={`${part}-${partIndex}`}>
              {part}
              {partIndex < backgroundParts.length - 1 && (
                <a href="https://volunteer.ae" target="_blank" rel="noopener noreferrer">
                  Volunteer.ae
                </a>
              )}
            </span>
          ))}
        </p>
        <button
          type="button"
          className={styles.founderReadMore}
          aria-expanded={expanded}
          aria-controls={backgroundId}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </article>
  );
}
