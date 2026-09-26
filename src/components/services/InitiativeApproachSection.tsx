import type { ReactNode } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import CultureReveal from "@/components/culture/CultureReveal";

type InitiativeImpactMetric = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type InitiativeApproachSectionProps = {
  headingId: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  metrics?: InitiativeImpactMetric[];
  impactNote?: string;
  panelTitle?: string;
  focusItems?: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  focusStatement?: string;
  children: ReactNode;
};

export default function InitiativeApproachSection({
  headingId,
  image,
  imageAlt,
  imageCaption,
  metrics,
  impactNote,
  panelTitle = "Our Impact",
  focusItems,
  focusStatement,
  children,
}: InitiativeApproachSectionProps) {
  return (
    <section
      className="healthcare-approach healthcare-section initiative-approach-impact"
      aria-labelledby={headingId}
    >
      <div className="healthcare-container initiative-approach-impact-grid">
        <CultureReveal className="healthcare-section-copy initiative-approach-copy">
          {children}
        </CultureReveal>

        <CultureReveal
          className="healthcare-section-visual initiative-approach-visual"
          delay={0.08}
        >
          <div className="healthcare-image-frame healthcare-editorial-image initiative-approach-image">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 38vw"
            />
          </div>
          <span className="healthcare-image-caption">{imageCaption}</span>
        </CultureReveal>

        <CultureReveal
          className={`initiative-approach-impact-panel${focusItems ? " has-focus-items" : ""}`}
          delay={0.16}
        >
          <h3 id={`${headingId}-impact`}>{panelTitle}</h3>
          {focusItems ? (
            <>
              <div className="initiative-approach-focus-list">
                {focusItems.map(({ title, description, icon: Icon }) => (
                  <div className="initiative-approach-focus-item" key={title}>
                    <span aria-hidden="true">
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {focusStatement && (
                <p className="initiative-approach-focus-statement">
                  {focusStatement}
                </p>
              )}
            </>
          ) : (
            <>
              <div className="initiative-approach-impact-list">
                {metrics?.map(({ value, label, icon: Icon }) => (
                  <div className="initiative-approach-impact-item" key={label}>
                    <span aria-hidden="true">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <div>
                      <strong>{value}</strong>
                      <p>{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              {impactNote && (
                <p className="initiative-approach-impact-note">{impactNote}</p>
              )}
            </>
          )}
        </CultureReveal>
      </div>
    </section>
  );
}

export type { InitiativeImpactMetric };
