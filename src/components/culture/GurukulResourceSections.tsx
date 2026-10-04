"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import type { CultureFeaturePageData } from "@/data/culture-feature-pages";
import styles from "./CultureFeaturePage.module.css";

export default function GurukulResourceSections({
  sections,
}: {
  sections: CultureFeaturePageData["sections"];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const panelRef = useRef<HTMLElement>(null);
  const activeSection =
    activeIndex === null ? null : sections[activeIndex] ?? null;

  useEffect(() => {
    if (activeSection) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeSection]);

  return (
    <div className={styles.resourceSections}>
      <div className={styles.resourceButtons}>
        {sections.map((section, index) => {
          const isActive = activeIndex === index;
          const Icon = isActive ? ArrowUp : ArrowDown;

          return (
            <button
              aria-controls="gurukul-resource-panel"
              aria-expanded={isActive}
              className={styles.resourceButton}
              key={section.title}
              onClick={() => setActiveIndex(isActive ? null : index)}
              type="button"
            >
              <span className={styles.resourceButtonIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{section.title}</span>
              <Icon aria-hidden="true" size={18} />
            </button>
          );
        })}
      </div>

      <section
        aria-label={activeSection?.title ?? "Gurukul resources"}
        className={styles.resourcePanel}
        hidden={!activeSection}
        id="gurukul-resource-panel"
        ref={panelRef}
      >
        {activeSection && (
          <>
            <p className={styles.eyebrow}>Trimurthi Gurukul</p>
            <h2>{activeSection.title}</h2>
            <p>{activeSection.description}</p>
            <div className={styles.resourcePlaceholder} aria-live="polite">
              {activeSection.title} and related learning resources will be
              available here soon.
            </div>
          </>
        )}
      </section>
    </div>
  );
}
