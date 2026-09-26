import type { ReactNode } from "react";
import Image from "next/image";
import CultureReveal from "@/components/culture/CultureReveal";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";

type InitiativeApproachSectionProps = {
  headingId: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  children: ReactNode;
};

export default function InitiativeApproachSection({
  headingId,
  image,
  imageAlt,
  imageCaption,
  children,
}: InitiativeApproachSectionProps) {
  return (
    <section
      className="healthcare-approach healthcare-section initiative-approach"
      aria-labelledby={headingId}
    >
      <div className="healthcare-container initiative-approach-grid">
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
          className="initiative-approach-support-wrap"
          delay={0.16}
        >
          <TransformLifeSupportPanel />
        </CultureReveal>
      </div>
    </section>
  );
}
