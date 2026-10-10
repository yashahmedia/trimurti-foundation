"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { lockPageScroll } from "@/lib/page-scroll-lock";
import styles from "./TrimurtiConnectLanding.module.css";

type ConnectRequestActionProps = {
  connectionId: string;
  connectionLabel: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

const professions = [
  "Student",
  "Working Professional",
  "Teacher / Educator",
  "Doctor / Healthcare Professional",
  "Business Owner / Entrepreneur",
  "Social Worker / NGO Professional",
  "Government Employee",
  "Freelancer / Consultant",
  "Other",
] as const;

export default function ConnectRequestAction({
  connectionId,
  connectionLabel,
  isOpen: controlledIsOpen,
  onOpenChange,
}: ConnectRequestActionProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [profession, setProfession] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const isOpen = controlledIsOpen ?? internalIsOpen;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const submissionInFlight = useRef(false);
  const titleId = useId();
  const dialogId = `${connectionId}-form`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const restorePageScroll = lockPageScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
    return restorePageScroll;
  }, [isOpen]);

  function setOpen(nextIsOpen: boolean) {
    if (onOpenChange) {
      onOpenChange(nextIsOpen);
    } else {
      setInternalIsOpen(nextIsOpen);
    }
    if (!nextIsOpen) {
      setError("");
      setSubmitted(false);
      setProfession("");
    }
  }

  async function submitConnectionRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    if (!form.reportValidity() || submissionInFlight.current) return;

    const mobileInput = form.elements.namedItem("mobile");
    if (
      mobileInput instanceof HTMLInputElement &&
      !/^(?=.*[0-9])[+0-9(). -]{7,30}$/.test(mobileInput.value.trim())
    ) {
      mobileInput.setCustomValidity("Enter a valid phone number.");
      mobileInput.reportValidity();
      return;
    }
    if (mobileInput instanceof HTMLInputElement) {
      mobileInput.setCustomValidity("");
    }

    const formData = new FormData(form);
    const payload = {
      connection: connectionLabel,
      name: String(formData.get("name") ?? "").trim(),
      mobile: String(formData.get("mobile") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      profession: String(formData.get("profession") ?? ""),
      otherProfession: String(formData.get("otherProfession") ?? "").trim(),
    };

    submissionInFlight.current = true;
    setSubmitting(true);
    try {
      const response = await fetch("/api/trimurthi-connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: unknown = await response.json();
      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        const message =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Your enquiry could not be submitted. Please try again later.";
        setError(message);
        return;
      }
      setSubmitted(true);
    } catch {
      setError(
        "We could not connect to the submission service. Please try again later.",
      );
    } finally {
      submissionInFlight.current = false;
      setSubmitting(false);
    }
  }

  return (
    <>
      <button
        className={styles.connectButton}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? "Close form" : "Get in touch"}
      </button>
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <dialog
            className={styles.formDialog}
            id={dialogId}
            ref={dialogRef}
            aria-labelledby={titleId}
            onCancel={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                setOpen(false);
              }
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
            onClose={() => {
              if (isOpen) setOpen(false);
            }}
          >
            <section className={styles.formPanel}>
              <header className={styles.formHeader}>
                <div>
                  <p className={styles.formEyebrow}>{connectionLabel}</p>
                  <h2 id={titleId}>Get in touch</h2>
                </div>
                <button
                  className={styles.closeButton}
                  type="button"
                  aria-label="Close form"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </header>
              {submitted ? (
                <div className={styles.formSuccess} role="status">
                  <p>
                    Thank you. Your {connectionLabel.toLowerCase()} enquiry
                    has been submitted successfully. Our team will be in touch.
                  </p>
                  <button
                    className={styles.submitButton}
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={submitConnectionRequest}>
                  <label className={styles.field}>
                    <span>Your name *</span>
                    <input
                      autoComplete="name"
                      maxLength={120}
                      name="name"
                      required
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Mobile number *</span>
                    <input
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={30}
                      name="mobile"
                      required
                      title="Enter a valid phone number."
                      type="tel"
                      onChange={(event) =>
                        event.currentTarget.setCustomValidity("")
                      }
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Profession *</span>
                    <select
                      name="profession"
                      required
                      value={profession}
                      onChange={(event) =>
                        setProfession(event.currentTarget.value)
                      }
                    >
                      <option value="">Select your profession</option>
                      {professions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  {profession === "Other" && (
                    <label className={styles.field}>
                      <span>Please specify your profession *</span>
                      <input
                        autoComplete="organization-title"
                        maxLength={120}
                        name="otherProfession"
                        required
                      />
                    </label>
                  )}
                  <label className={styles.field}>
                    <span>Email address (optional)</span>
                    <input
                      autoComplete="email"
                      maxLength={150}
                      name="email"
                      type="email"
                    />
                  </label>
                  <p className={styles.formNote}>
                    Your enquiry will be sent directly to Trimurthi Foundation.
                    No email verification is required.
                  </p>
                  {error && (
                    <p className={styles.formError} role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit enquiry"}
                  </button>
                </form>
              )}
            </section>
          </dialog>,
          document.body,
        )}
    </>
  );
}
