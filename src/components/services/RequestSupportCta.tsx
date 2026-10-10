"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, HandHeart } from "lucide-react";
import SupportRequestModal from "@/components/home/SupportRequestModal";
import styles from "./RequestSupportCta.module.css";
import serviceSupportRequests, {
  type ServiceSupportCategory,
} from "./serviceSupportRequests";

type RequestSupportCtaProps = {
  category: ServiceSupportCategory;
};

export default function RequestSupportCta({
  category,
}: RequestSupportCtaProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      new URLSearchParams(window.location.search).get("requestSupport") !==
      "1"
    ) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      buttonRef.current?.click();
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <section className={styles.section} aria-labelledby="request-support-cta-title">
        <HandHeart className={styles.watermark} aria-hidden="true" />
        <div className={styles.copy}>
          <p className={styles.label}>Need help? We’re here for you</p>
          <h2 id="request-support-cta-title">Request Support</h2>
          <p className={styles.description}>
            Every challenge deserves a helping hand. Tell us what support you need,
            and together we can create a path toward a better tomorrow.
          </p>
        </div>
        <button
          ref={buttonRef}
          className={styles.button}
          type="button"
          aria-haspopup="dialog"
        >
          Request Support <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>
      <SupportRequestModal
        request={serviceSupportRequests[category]}
        scrollPosition={{ x: 0, y: 0 }}
        triggerRef={buttonRef}
        onClose={() => {}}
      />
    </>
  );
}