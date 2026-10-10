"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import styles from "./TrimurtiConnectLanding.module.css";

type ConnectRequestActionProps = {
  connectionId: string;
  connectionLabel: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export default function ConnectRequestAction({
  connectionId,
  connectionLabel,
  isOpen: controlledIsOpen,
  onOpenChange,
}: ConnectRequestActionProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [requestEmail, setRequestEmail] = useState<string | null>(null);
  const isOpen = controlledIsOpen ?? internalIsOpen;

  function toggleForm() {
    const nextIsOpen = !isOpen;
    if (onOpenChange) {
      onOpenChange(nextIsOpen);
    } else {
      setInternalIsOpen(nextIsOpen);
    }
    setRequestEmail(null);
  }

  function submitConnectionRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const mobile = String(formData.get("mobile") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const details = [
      `Connection enquiry: ${connectionLabel}`,
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Email: ${email || "Not provided"}`,
    ].join("\n");

    setRequestEmail(
      `mailto:${site.email}?subject=${encodeURIComponent(`${connectionLabel} enquiry`)}&body=${encodeURIComponent(details)}`,
    );
  }

  return (
    <>
      <button
        className={styles.connectButton}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? `${connectionId}-form` : undefined}
        onClick={toggleForm}
      >
        {isOpen ? "Close form" : "Get in touch"}
      </button>
      {isOpen && (
        <div className={styles.formPanel} id={`${connectionId}-form`}>
          {requestEmail ? (
            <div className={styles.formSuccess} role="status">
              <p>
                Your enquiry is ready. Open your email app to review and send
                it.
              </p>
              <a className={styles.submitButton} href={requestEmail}>
                Open email to send
              </a>
              <button
                className={styles.textButton}
                type="button"
                onClick={() => setRequestEmail(null)}
              >
                Edit details
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
                  pattern="(?=.*[0-9])[+0-9(). -]{7,30}"
                  required
                  title="Enter a valid phone number."
                  type="tel"
                />
              </label>
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
                Submitting prepares an email for you to review and send.
              </p>
              <button className={styles.submitButton} type="submit">
                Continue
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
