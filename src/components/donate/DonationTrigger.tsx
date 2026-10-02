"use client";

import { useState, type ReactNode } from "react";
import DonationModal from "@/components/donate/DonationModal";
import type { PageScrollPosition } from "@/lib/page-scroll-lock";

type DonationTriggerProps = {
  children: ReactNode;
  className?: string;
  initialCause?: string;
  modalTitle?: string;
};

export default function DonationTrigger({
  children,
  className,
  initialCause,
  modalTitle,
}: DonationTriggerProps) {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<PageScrollPosition>({
    x: 0,
    y: 0,
  });

  return (
    <>
      <button
        className={className}
        type="button"
        onClick={() => {
          setScrollPosition({ x: window.scrollX, y: window.scrollY });
          setOpen(true);
        }}
      >
        {children}
      </button>
      <DonationModal
        open={open}
        scrollPosition={scrollPosition}
        onClose={() => setOpen(false)}
        initialCause={initialCause}
        modalTitle={modalTitle}
      />
    </>
  );
}