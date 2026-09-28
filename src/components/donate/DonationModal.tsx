"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import DonationForm from "@/components/donate/DonationForm";

type DonationModalProps = {
  open: boolean;
  onClose: () => void;
  initialCause?: string;
};

export default function DonationModal({
  open,
  onClose,
  initialCause,
}: DonationModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [closing, setClosing] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!open) return;

    setClosing(false);
    const scrollY = window.scrollY;
    const previouslyFocused = document.activeElement;
    const originalBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.classList.add("donation-modal-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      document.body.classList.remove("donation-modal-open");
      document.body.style.position = originalBodyStyles.position;
      document.body.style.top = originalBodyStyles.top;
      document.body.style.width = originalBodyStyles.width;
      document.body.style.overflow = originalBodyStyles.overflow;
      window.scrollTo(0, scrollY);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, [open]);

  function close() {
    if (closing) return;
    setClosing(true);
    closeTimerRef.current = window.setTimeout(onClose, 180);
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
            <h2 id={titleId}>Donate to a Cause</h2>
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