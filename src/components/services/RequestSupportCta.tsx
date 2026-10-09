"use client";

import { useState } from "react";
import { ArrowRight, HandHeart } from "lucide-react";
import SupportRequestModal from "@/components/home/SupportRequestModal";
import type { PageScrollPosition } from "@/lib/page-scroll-lock";
import styles from "./RequestSupportCta.module.css";
import serviceSupportRequests, {
  type ServiceSupportCategory,
} from "./serviceSupportRequests";

type RequestSupportCtaProps = {
  category?: ServiceSupportCategory;
};

export default function RequestSupportCta({
  category,
}: RequestSupportCtaProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<PageScrollPosition>({
    x: 0,
    y: 0,
  });

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
        {category ? (
          <button
            className={styles.button}
            type="button"
            aria-haspopup="dialog"
            onClick={() => {
              setScrollPosition({ x: window.scrollX, y: window.scrollY });
              setIsOpen(true);
            }}
          >
            Request Support <ArrowRight size={18} aria-hidden="true" />
          </button>
        ) : (
          <a className={styles.button} href="/donate#support-request-form">
            Request Support <ArrowRight size={18} aria-hidden="true" />
          </a>
        )}
      </section>
      {isOpen && category && (
        <SupportRequestModal
          request={serviceSupportRequests[category]}
          scrollPosition={scrollPosition}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}