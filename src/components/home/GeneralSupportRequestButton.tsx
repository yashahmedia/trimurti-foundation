"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SupportRequestModal from "@/components/home/SupportRequestModal";
import { getSupportRequestForPath } from "@/components/services/serviceSupportRequests";
import styles from "@/app/donate/donate.module.css";

export default function GeneralSupportRequestButton() {
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={buttonRef}
        className={styles.requestSupportButton}
        type="button"
        aria-haspopup="dialog"
      >
        Request Support <ArrowRight size={16} aria-hidden="true" />
      </button>
      <SupportRequestModal
        request={getSupportRequestForPath(pathname)}
        scrollPosition={{ x: 0, y: 0 }}
        triggerRef={buttonRef}
        onClose={() => {}}
      />
    </>
  );
}
