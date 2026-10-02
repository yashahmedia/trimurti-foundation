"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import DonationForm from "@/components/donate/DonationForm";
import {
  lockPageScroll,
  type PageScrollPosition,
} from "@/lib/page-scroll-lock";

type DonationModalProps = {
  open: boolean;
  onClose: () => void;
  scrollPosition: PageScrollPosition;
  initialCause?: string;
  modalTitle?: string;
};

export default function DonationModal({
  open,
  onClose,
  scrollPosition,
  initialCause,
  modalTitle = "Donate to a Cause",
}: DonationModalProps) {
  const portalRoot = typeof document === "undefined" ? null : document.body;
  const [closing, setClosing] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement;
    const restorePageScroll = lockPageScroll(scrollPosition);

    document.body.classList.add("donation-modal-open");
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      document.body.classList.remove("donation-modal-open");
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
      restorePageScroll();
    };
  }, [open, scrollPosition]);

  function close() {
    if (closing) return;
    setClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setClosing(false);
      onClose();
    }, 180);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first || !last) {
      event.preventDefault();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  if (!open || !portalRoot) return null;

  return createPortal(
    <div
      className={`donation-modal-backdrop${closing ? " is-closing" : ""}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      onKeyDown={handleKeyDown}
    >
      <section
        className="donation-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <header className="donation-modal-header">
          <div className="donation-modal-heading">
            <h2 id={titleId}>{modalTitle}</h2>
            <p>Your contribution can help create meaningful change.</p>
            {initialCause && (
              <p className="donation-modal-cause">
                Supporting <strong>{initialCause}</strong>
              </p>
            )}
          </div>
          <button
            className="donation-modal-close"
            type="button"
            aria-label="Close donation form"
            ref={closeButtonRef}
            onClick={close}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>
        <div className="donation-modal-content">
          <DonationForm />
        </div>
      </section>
    </div>,
    portalRoot,
  );
}