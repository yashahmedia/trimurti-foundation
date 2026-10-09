"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Check, X } from "lucide-react";
import styles from "./JoinNowButton.module.css";

type JoinNowButtonProps = {
  itemName: string;
  className?: string;
};

type Interest = {
  fullName: string;
  mobileNumber: string;
  email: string;
  message: string;
};

export default function JoinNowButton({
  itemName,
  className,
}: JoinNowButtonProps) {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [open]);

  function closeDialog() {
    dialogRef.current?.close();
    setOpen(false);
  }

  function handleClose() {
    setOpen(false);
    setError("");
    setSubmitted(false);
    setSubmitting(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const mobileNumber = String(data.get("mobileNumber") ?? "").replace(/[\s().-]/g, "");
    if (!/^\+?[1-9]\d{6,14}$/.test(mobileNumber)) {
      setError("Enter a valid mobile number with 7 to 15 digits.");
      return;
    }

    const interest: Interest = {
      fullName: String(data.get("fullName") ?? "").trim(),
      mobileNumber,
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setSubmitting(true);
    try {
      const response = await fetch("/api/event-interests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemName, ...interest }),
      });

      if (response.status === 404) {
        setError(
          "Online submissions are not available yet. Please contact our team to register your interest.",
        );
        return;
      }
      if (!response.ok) {
        setError("Your interest could not be submitted. Please try again later.");
        return;
      }

      const result: unknown = await response.json();
      if (
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        setError("Your interest could not be confirmed. Please try again later.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("We could not connect to the submission service. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button
        className={[styles.trigger, className].filter(Boolean).join(" ")}
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        Join Now
      </button>
      <dialog
        className={styles.dialog}
        ref={dialogRef}
        aria-labelledby={`${id}-title`}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <section className={styles.panel}>
          <header className={styles.header}>
            <div>
              <span className={styles.eyebrow}>Get involved</span>
              <h2 id={`${id}-title`}>Join {itemName}</h2>
            </div>
            <button
              className={styles.close}
              type="button"
              aria-label="Close join form"
              onClick={closeDialog}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>
          {submitted ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon}>
                <Check size={24} aria-hidden="true" />
              </span>
              <p>
                Thank you for your interest! Our team will get in touch with you
                soon.
              </p>
              <button className={styles.submit} type="button" onClick={closeDialog}>
                Done
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field} htmlFor={`${id}-name`}>
                <span>Full Name *</span>
                <input id={`${id}-name`} name="fullName" autoComplete="name" maxLength={120} required />
              </label>
              <label className={styles.field} htmlFor={`${id}-mobile`}>
                <span>Mobile Number *</span>
                <input
                  id={`${id}-mobile`}
                  name="mobileNumber"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+91 98765 43210"
                  maxLength={30}
                  required
                />
              </label>
              <label className={styles.field} htmlFor={`${id}-email`}>
                <span>Email Address (optional)</span>
                <input id={`${id}-email`} name="email" type="email" autoComplete="email" maxLength={150} />
              </label>
              <label className={`${styles.field} ${styles.messageField}`} htmlFor={`${id}-message`}>
                <span>Message / Reason for Joining (optional)</span>
                <textarea id={`${id}-message`} name="message" rows={4} maxLength={1000} />
              </label>
              {error && <p className={styles.error} role="alert">{error}</p>}
              <button className={styles.submit} type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Interest"}
              </button>
            </form>
          )}
        </section>
      </dialog>
    </>
  );
}
