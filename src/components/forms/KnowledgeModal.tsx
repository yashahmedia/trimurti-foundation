"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, X } from "lucide-react";
import styles from "./VolunteerModal.module.css";

const contributionOptions = [
  "Teaching / Academic Support",
  "Mentoring",
  "Career Guidance",
  "Skill Training",
  "Professional Workshop",
  "Digital / Technology Training",
  "Entrepreneurship Guidance",
  "Online Knowledge Session",
  "Other",
] as const;

const recipientOptions = [
  "School Students",
  "College Students",
  "Youth",
  "Job Seekers",
  "Women",
  "Community Groups",
  "Anyone in Need",
] as const;

const modeOptions = ["Online", "In Person", "Both", "Flexible"] as const;

type KnowledgeModalProps = {
  children: ReactNode;
  className?: string;
};

export default function KnowledgeModal({
  children,
  className,
}: KnowledgeModalProps) {
  const [open, setOpen] = useState(false);
  const portalRoot = typeof document === "undefined" ? null : document.body;

  return (
    <>
      <button
        type="button"
        className={`${styles.trigger} ${className ?? ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open && portalRoot
        ? createPortal(
            <KnowledgeDialog onClose={() => setOpen(false)} />,
            portalRoot,
          )
        : null}
    </>
  );
}

function KnowledgeDialog({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const scrollY = window.scrollY;
    const previouslyFocused = document.activeElement;
    const originalBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.position = originalBodyStyles.position;
      document.body.style.top = originalBodyStyles.top;
      document.body.style.width = originalBodyStyles.width;
      document.body.style.overflow = originalBodyStyles.overflow;
      window.scrollTo(0, scrollY);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
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

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className={styles.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={handleKeyDown}
    >
      <section
        className={styles.dialog}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Share your expertise</p>
            <h2 id={titleId}>Empower Through Knowledge</h2>
            <p className={styles.lead}>
              Share your skills, experience, or knowledge to help someone learn,
              grow, and build a better future.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            aria-label="Close knowledge-sharing form"
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>
        <div className={styles.content}>
          {submitted ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon} aria-hidden="true">
                <Check size={24} />
              </span>
              <h3>Thank You for Sharing Your Knowledge!</h3>
              <p>
                Our team will review your details and contact you to understand
                your experience, availability, preferred activities, and how
                you can contribute to Trimurti Foundation.
              </p>
              <button
                className={styles.done}
                type="button"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit}>
              <fieldset className={styles.group}>
                <legend>Personal Details</legend>
                <div className={styles.fields}>
                  <label className={styles.field} htmlFor="knowledge-name">
                    <span>Full Name *</span>
                    <input
                      id="knowledge-name"
                      name="fullName"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </label>
                  <label className={styles.field} htmlFor="knowledge-phone">
                    <span>Phone / WhatsApp Number *</span>
                    <input
                      id="knowledge-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter your number"
                      required
                    />
                  </label>
                  <label className={styles.field} htmlFor="knowledge-email">
                    <span>Email Address *</span>
                    <input
                      id="knowledge-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      required
                    />
                  </label>
                  <label className={styles.field} htmlFor="knowledge-city">
                    <span>City / Location *</span>
                    <input
                      id="knowledge-city"
                      name="city"
                      autoComplete="address-level2"
                      placeholder="Enter your city"
                      required
                    />
                  </label>
                  <label className={styles.field} htmlFor="knowledge-role">
                    <span>Profession / Current Role</span>
                    <input
                      id="knowledge-role"
                      name="profession"
                      placeholder="Teacher, Student, Professional, Business Owner, etc."
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className={styles.group}>
                <legend>Ways to Contribute</legend>
                <div className={styles.fields}>
                  <label className={styles.field} htmlFor="knowledge-activity">
                    <span>How would you like to contribute? *</span>
                    <select
                      id="knowledge-activity"
                      name="activity"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select an activity
                      </option>
                      {contributionOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                  <label className={styles.field} htmlFor="knowledge-audience">
                    <span>Who would you like to support?</span>
                    <select id="knowledge-audience" name="audience" defaultValue="">
                      <option value="">Select a group</option>
                      {recipientOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                  <label className={styles.field} htmlFor="knowledge-mode">
                    <span>Preferred Mode *</span>
                    <select
                      id="knowledge-mode"
                      name="mode"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a mode
                      </option>
                      {modeOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className={styles.field} htmlFor="knowledge-expertise">
                  <span>Your Area of Knowledge / Expertise *</span>
                  <input
                    id="knowledge-expertise"
                    name="expertise"
                    placeholder="Mathematics, Coding, Business, Marketing, Spoken English, Career Guidance"
                    required
                  />
                </label>
                <label className={styles.field} htmlFor="knowledge-message">
                  <span>Anything You Would Like to Tell Us?</span>
                  <textarea
                    id="knowledge-message"
                    name="message"
                    rows={3}
                    placeholder="Share any additional details (optional)"
                  />
                </label>
              </fieldset>

              <div className={styles.submitArea}>
                <label className={styles.consent} htmlFor="knowledge-consent">
                  <input id="knowledge-consent" name="consent" type="checkbox" required />
                  <span>
                    I agree to be contacted by Trimurti Foundation regarding
                    knowledge-sharing and volunteering opportunities.
                  </span>
                </label>
                <button className={styles.submit} type="submit">
                  Share My Knowledge
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}