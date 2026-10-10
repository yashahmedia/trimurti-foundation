"use client";

import Image from "next/image";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SupportRequestModal from "@/components/home/SupportRequestModal";
import { getSupportRequestForPath } from "@/components/services/serviceSupportRequests";
import styles from "./SupportPromptSection.module.css";

export default function SupportPromptSection() {
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.section} aria-labelledby="support-prompt-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>
            <span aria-hidden="true" />
            Support
          </p>
          <h2 id="support-prompt-title">We’re Here to Support You</h2>
          <p className={styles.description}>
            Trimurthi Foundation is dedicated to supporting individuals and
            communities in need. If you or someone you know needs assistance,
            reach out to us and our team will guide you through the next steps.
          </p>
          <button
            ref={buttonRef}
            className={styles.button}
            type="button"
            aria-haspopup="dialog"
          >
            Request Support
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
