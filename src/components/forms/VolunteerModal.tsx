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
  volunteerApplicationSchema,
  type VolunteerApplicationInput,
} from "@/lib/validation";
import styles from "./VolunteerModal.module.css";

const volunteerTypes = [
  "On-Ground Volunteer",
  "Online / Remote Volunteer",
  "Event Volunteer",
  "Professional / Skill-Based Volunteer",
  "Awareness & Outreach",
  "Teaching / Mentoring",
  "Fundraising Support",
  "Content & Social Media",
  "Photography / Videography",
  "Administrative Support",
  "Other",
] as const;

const causes = [
  "Education & Empowerment",
  "Medical & Healthcare Support",
  "Elderly Support",
  "Annadan / Food & Nutrition",
  "Environment & Welfare",
  "Culture & Heritage",
  "Any Cause / Wherever Needed",
] as const;

const skills = [
  "Teaching",
  "Healthcare",
  "Digital Marketing",
  "Social Media",
  "Graphic Design",
  "Photography",
  "Videography",
  "Web / Technology",
  "Event Management",
  "Fundraising",
  "Public Relations",
  "Administration",
  "Legal Services",
  "Professional Consulting",
  "Writing / Content",
  "Other",
] as const;

const availabilityOptions = [
  "Weekdays",
  "Weekends",
  "Morning",
  "Afternoon",
  "Evening",
  "Flexible",
] as const;

const timeCommitments = [
  "A Few Hours",
  "One Day",
  "Weekends",
  "2–4 Hours Per Week",
  "5–10 Hours Per Week",
  "Regular / Long-Term Volunteer",
  "Only During Events",
  "Flexible",
] as const;

const modeDescriptions = {
  "On-Site": "Participate directly in foundation activities and events.",
  Remote: "Contribute digitally from your location.",
  Both: "I am comfortable with both on-site and remote opportunities.",
} as const;

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
  const portalRoot = typeof document === "undefined" ? null : document.body;

  return (
    <>
      <button
        type="button"
        className={`${styles.trigger} ${className ?? ""} ${isActive ? "is-active" : ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open && portalRoot
        ? createPortal(
            <VolunteerDialog
              initialCause={initialCause}
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
  onClose,
}: {
  initialCause?: string;
  onClose: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [draftHref, setDraftHref] = useState("");

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
      `Volunteer interests: ${data.volunteerTypes.join(", ")}`,
      `Other volunteering preference: ${data.volunteerOther || "Not provided"}`,
      `Cause: ${data.cause}`,
      `Skills: ${data.skills.length ? data.skills.join(", ") : "Not provided"}`,
      `Other skill: ${data.skillOther || "Not provided"}`,
      `Time commitment: ${data.timeCommitment}`,
      `Availability: ${data.availability.length ? data.availability.join(", ") : "Not provided"}`,
      `Preferred mode: ${data.mode}`,
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
      volunteerTypes: [],
      volunteerOther: "",
      cause: getInitialCause(initialCause) || undefined,
      skills: [],
      skillOther: "",
      timeCommitment: undefined,
      availability: [],
      mode: undefined,
      contribution: "",
      volunteeredBefore: "",
      previousExperience: "",
      consent: false,
    },
  });
  const selectedTypes = useWatch({ control, name: "volunteerTypes" }) ?? [];
  const selectedSkills = useWatch({ control, name: "skills" }) ?? [];
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
        <legend>How You Want to Help</legend>
        <div className={styles.choiceGrid}>
          {volunteerTypes.map((option) => (
            <label className={styles.choice} key={option}>
              <input type="checkbox" value={option} {...register("volunteerTypes")} />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {fieldError("volunteerTypes")}
        {selectedTypes.includes("Other") && (
          <label className={`${styles.field} ${styles.revealedField}`} htmlFor="volunteer-other">
            <span>Please tell us how you would like to volunteer</span>
            <input
              id="volunteer-other"
              placeholder="Describe how you would like to help"
              {...register("volunteerOther")}
            />
          </label>
        )}

        <p className={styles.fieldLabel}>Choose a Cause *</p>
        <div className={styles.causeGrid} role="radiogroup" aria-label="Choose a cause">
          {causes.map((cause) => (
            <label className={styles.choice} key={cause}>
              <input type="radio" value={cause} {...register("cause")} />
              <span>{cause}</span>
            </label>
          ))}
        </div>
        {fieldError("cause")}
      </fieldset>

      <fieldset className={styles.group}>
        <legend>Skills & Interests</legend>
        <p className={styles.fieldLabel}>What skills can you contribute?</p>
        <div className={styles.choiceGrid}>
          {skills.map((skill) => (
            <label className={styles.choice} key={skill}>
              <input type="checkbox" value={skill} {...register("skills")} />
              <span>{skill}</span>
            </label>
          ))}
        </div>
        {selectedSkills.includes("Other") && (
          <label className={`${styles.field} ${styles.revealedField}`} htmlFor="volunteer-skill-other">
            <span>Tell us about your skill</span>
            <input
              id="volunteer-skill-other"
              placeholder="Describe your skill or expertise"
              {...register("skillOther")}
            />
          </label>
        )}
      </fieldset>

      <fieldset className={styles.group}>
        <legend>Availability</legend>
        <label className={`${styles.field} ${styles.commitment}`} htmlFor="volunteer-time">
          <span>How much time can you contribute? *</span>
          <select
            id="volunteer-time"
            aria-invalid={Boolean(errors.timeCommitment)}
            aria-describedby={errors.timeCommitment ? "timeCommitment-error" : undefined}
            {...register("timeCommitment")}
          >
            <option value="">Select a time commitment</option>
            {timeCommitments.map((option) => <option key={option}>{option}</option>)}
          </select>
          {fieldError("timeCommitment")}
        </label>
        <p className={styles.fieldLabel}>When are you usually available?</p>
        <div className={styles.choiceGrid}>
          {availabilityOptions.map((option) => (
            <label className={styles.choice} key={option}>
              <input type="checkbox" value={option} {...register("availability")} />
              <span>{option}</span>
            </label>
          ))}
        </div>

        <p className={styles.fieldLabel}>How would you prefer to volunteer? *</p>
        <div className={styles.modeGrid} role="radiogroup" aria-label="Preferred volunteering mode">
          {(["On-Site", "Remote", "Both"] as const).map((mode) => (
            <label className={styles.modeCard} key={mode}>
              <input type="radio" value={mode} {...register("mode")} />
              <span className={styles.modeTitle}>{mode}</span>
              <span className={styles.modeDescription}>{modeDescriptions[mode]}</span>
            </label>
          ))}
        </div>
        {fieldError("mode")}
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