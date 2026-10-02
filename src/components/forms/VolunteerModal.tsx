"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, X } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { site } from "@/config/site";
import {
  lockPageScroll,
  type PageScrollPosition,
} from "@/lib/page-scroll-lock";
import {
  volunteerApplicationSchema,
  type VolunteerApplicationInput,
} from "@/lib/validation";
import styles from "./VolunteerModal.module.css";

const causes = [
  "Education & Empowerment",
  "Medical & Healthcare Support",
  "Elderly Support",
  "Annadan / Food & Nutrition",
  "Environment & Welfare",
  "Culture & Heritage",
  "Any Cause / Wherever Needed",
] as const;

const causeAliases: Record<string, string> = {
  "Healthcare Support": "Medical & Healthcare Support",
  "Elderly Care": "Elderly Support",
  "Annadhan & Nutrition": "Annadan / Food & Nutrition",
};

function getInitialCause(initialCause?: string) {
  const cause = initialCause ? causeAliases[initialCause] ?? initialCause : "";
  return causes.find((option) => option === cause) ?? "";
}

type VolunteerModalProps = {
  children: ReactNode;
  className?: string;
  initialCause?: string;
  isActive?: boolean;
};

export default function VolunteerModal({
  children,
  className,
  initialCause,
  isActive = false,
}: VolunteerModalProps) {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<PageScrollPosition>({
    x: 0,
    y: 0,
  });
  const portalRoot = typeof document === "undefined" ? null : document.body;

  return (
    <>
      <button
        type="button"
        className={`${styles.trigger} ${className ?? ""} ${isActive ? "is-active" : ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setScrollPosition({ x: window.scrollX, y: window.scrollY });
          setOpen(true);
        }}
      >
        {children}
      </button>
      {open && portalRoot
        ? createPortal(
            <VolunteerDialog
              initialCause={initialCause}
              scrollPosition={scrollPosition}
              onClose={() => setOpen(false)}
            />,
            portalRoot,
          )
        : null}
    </>
  );
}

function VolunteerDialog({
  initialCause,
  scrollPosition,
  onClose,
}: {
  initialCause?: string;
  scrollPosition: PageScrollPosition;
  onClose: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [draftHref, setDraftHref] = useState("");

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const restorePageScroll = lockPageScroll(scrollPosition);
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
      restorePageScroll();
    };
  }, [scrollPosition]);

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
            <p className={styles.eyebrow}>Join our community</p>
            <h2 id={titleId}>Volunteer Your Time</h2>
            <p className={styles.lead}>
              Give your time, skills and passion to create meaningful change.
            </p>
            <p className={styles.intro}>
              Tell us how you would like to contribute and our team will connect
              you with a suitable volunteering opportunity.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            aria-label="Close volunteer form"
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>
        <div className={styles.content}>
          {draftHref ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon} aria-hidden="true">
                <Check size={24} />
              </span>
              <h3>Thank You for Volunteering!</h3>
              <p>
                Your interest in supporting Trimurti Foundation means a lot to
                us. Your application details are ready; open your email app and
                send the prepared message to complete your application.
              </p>
              <a className={styles.submit} href={draftHref}>
                Open email app <ArrowRight size={17} aria-hidden="true" />
              </a>
              <p className={styles.emailNote}>
                Our team can follow up once your email is sent.
              </p>
              <button className={styles.done} type="button" onClick={onClose}>
                Done
              </button>
            </div>
          ) : (
            <VolunteerApplicationForm
              initialCause={initialCause}
              onPrepare={(data) => setDraftHref(createEmailDraft(data))}
            />
          )}
        </div>
      </section>
    </div>
  );
}

function createEmailDraft(data: VolunteerApplicationInput) {
  const subject = encodeURIComponent(`Volunteer application — ${data.fullName}`);
  const body = encodeURIComponent(
    [
      `Full name: ${data.fullName}`,
      `Mobile / WhatsApp: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `City / State: ${data.city}`,
      `Age group: ${data.ageGroup || "Not provided"}`,
      `Cause: ${data.cause}`,
      `Contribution message: ${data.contribution || "Not provided"}`,
      `Volunteered before: ${data.volunteeredBefore || "Not provided"}`,
      `Previous experience: ${data.previousExperience || "Not provided"}`,
      "Consent to be contacted: Yes",
    ].join("\n"),
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

function VolunteerApplicationForm({
  initialCause,
  onPrepare,
}: {
  initialCause?: string;
  onPrepare: (data: VolunteerApplicationInput) => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerApplicationInput>({
    resolver: zodResolver(volunteerApplicationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      ageGroup: "",
      cause: getInitialCause(initialCause) || undefined,
      contribution: "",
      volunteeredBefore: "",
      previousExperience: "",
      consent: false,
    },
  });
  const volunteeredBefore = useWatch({ control, name: "volunteeredBefore" });

  async function submit(data: VolunteerApplicationInput) {
    await Promise.resolve();
    onPrepare(data);
  }

  const fieldError = (name: keyof VolunteerApplicationInput) => {
    const error = errors[name];
    return error?.message ? (
      <span className={styles.error} id={`${name}-error`}>
        {error.message}
      </span>
    ) : null;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)} noValidate>
      <fieldset className={styles.group}>
        <legend>Personal Details</legend>
        <div className={styles.fields}>
          <label className={styles.field} htmlFor="volunteer-full-name">
            <span>Full Name *</span>
            <input
              id="volunteer-full-name"
              autoComplete="name"
              placeholder="Enter your full name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              {...register("fullName")}
            />
            {fieldError("fullName")}
          </label>
          <label className={styles.field} htmlFor="volunteer-phone">
            <span>Mobile / WhatsApp Number *</span>
            <input
              id="volunteer-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {fieldError("phone")}
          </label>
          <label className={styles.field} htmlFor="volunteer-email">
            <span>Email Address</span>
            <input
              id="volunteer-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {fieldError("email")}
          </label>
          <label className={styles.field} htmlFor="volunteer-city">
            <span>City / State *</span>
            <input
              id="volunteer-city"
              autoComplete="address-level2"
              placeholder="Enter your city and state"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "city-error" : undefined}
              {...register("city")}
            />
            {fieldError("city")}
          </label>
          <label className={styles.field} htmlFor="volunteer-age-group">
            <span>Age Group</span>
            <select id="volunteer-age-group" {...register("ageGroup")}>
              <option value="">Select an age group</option>
              <option>Below 18</option>
              <option>18–25</option>
              <option>26–35</option>
              <option>36–50</option>
              <option>50+</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend>Cause</legend>
        <label className={styles.field} htmlFor="volunteer-cause">
          <span>Choose a Cause *</span>
          <select
            id="volunteer-cause"
            required
            aria-invalid={Boolean(errors.cause)}
            aria-describedby={errors.cause ? "cause-error" : undefined}
            {...register("cause")}
          >
            <option value="">Select a cause</option>
            {causes.map((cause) => <option key={cause}>{cause}</option>)}
          </select>
          {fieldError("cause")}
        </label>
      </fieldset>

      <fieldset className={styles.group}>
        <legend>Additional Information</legend>
        <label className={styles.field} htmlFor="volunteer-contribution">
          <span>Tell us how you would like to contribute</span>
          <textarea
            id="volunteer-contribution"
            rows={4}
            placeholder="Tell us about your interests, experience, ideas, or the type of volunteering opportunity you are looking for..."
            {...register("contribution")}
          />
        </label>
        <div className={styles.experience}>
          <span className={styles.fieldLabel} id="volunteer-experience-label">
            Have you volunteered with an NGO/Foundation before?
          </span>
          <div className={styles.inlineOptions} role="group" aria-labelledby="volunteer-experience-label">
            {(["Yes", "No"] as const).map((option) => (
              <label className={styles.choice} key={option}>
                <input type="radio" value={option} {...register("volunteeredBefore")} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        {volunteeredBefore === "Yes" && (
          <label className={styles.field} htmlFor="volunteer-previous-experience">
            <span>Tell us briefly about your experience</span>
            <textarea
              id="volunteer-previous-experience"
              rows={3}
              {...register("previousExperience")}
            />
          </label>
        )}
      </fieldset>

      <div className={styles.submitArea}>
        <label className={styles.consent} htmlFor="volunteer-consent">
          <input
            id="volunteer-consent"
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span>
            I agree to be contacted by Trimurti Foundation regarding
            volunteering opportunities, events and related initiatives. *
          </span>
        </label>
        {fieldError("consent")}
        <button className={styles.submit} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Preparing application..." : "Become a Volunteer"}
          <ArrowRight size={17} aria-hidden="true" />
        </button>
        <p className={styles.submitNote}>
          Our team will review your application and contact you for suitable
          opportunities.
        </p>
      </div>
    </form>
  );
}