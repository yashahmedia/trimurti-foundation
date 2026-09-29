"use client";

import { useState, type ReactNode } from "react";
import DonationModal from "@/components/donate/DonationModal";

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

  return (
    <>
      <button
        className={className}
        type="button"
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      <DonationModal
        open={open}
        onClose={() => setOpen(false)}
        initialCause={initialCause}
        modalTitle={modalTitle}
      />
    </>
  );
}