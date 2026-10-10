"use client";

import Image from "next/image";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SupportRequestModal from "@/components/home/SupportRequestModal";
import { getSupportRequestForPath } from "@/components/services/serviceSupportRequests";
import styles from "./SupportPromptSection.module.css";

type SupportPromptSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export default function SupportPromptSection({
  id,
  eyebrow = "Support",
  title = "We’re Here to Support You",
  description = "Trimurthi Foundation is dedicated to supporting individuals and communities in need. If you or someone you know needs assistance, reach out to us and our team will guide you through the next steps.",
  buttonLabel = "Request Support",
}: SupportPromptSectionProps) {
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      className={styles.section}
      id={id}
      aria-labelledby="support-prompt-title"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>
            <span aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="support-prompt-title">{title}</h2>
          <p className={styles.description}>{description}</p>
          <button
            ref={buttonRef}
            className={styles.button}
            type="button"
            aria-haspopup="dialog"
          >
            {buttonLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <span className={styles.orbit} />
          <Image
            className={styles.image}
            src="/life.png"
            alt=""
            fill
            sizes="(max-width: 760px) 75vw, 35vw"
          />
        </div>
      </div>
      <SupportRequestModal
        request={getSupportRequestForPath(pathname)}
        scrollPosition={{ x: 0, y: 0 }}
        triggerRef={buttonRef}
        onClose={() => {}}
      />
    </section>
  );
}
