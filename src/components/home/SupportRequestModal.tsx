"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Check,
  Clock3,
  HeartHandshake,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import styles from "./SupportRequestModal.module.css";

export type SupportRequestField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  min?: number;
  max?: number;
};

export type SupportRequestConfig = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  fields: SupportRequestField[];
};

type SupportRequestModalProps = {
  request: SupportRequestConfig;
  onClose: () => void;
};

type FormValues = Record<string, string>;
type FormErrors = Record<string, string>;

function getFieldIcon(name: string): LucideIcon {
  if (name === "email") return Mail;
  if (name === "phone") return Phone;
  if (name === "age" || name === "familyMembers") return CalendarDays;
  if (name === "location" || name === "schoolLocation") return MapPin;
  if (name === "message") return MessageSquareText;
  if (name === "supportType" || name === "essentialsType") return BookOpenCheck;
  if (name.toLowerCase().includes("name")) return UserRound;
  return HeartHandshake;
}

const contactFields: SupportRequestField[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Your full name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "you@example.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    placeholder: "+91 98765 43210",
  },
];

function validateField(field: SupportRequestField, value: string): string {
  const trimmedValue = value.trim();

  if (field.required && !trimmedValue) {
    return `${field.label} is required.`;
  }

  if (!trimmedValue) {
    return "";
  }

  if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return "Enter a valid email address.";
  }

  if (
    field.type === "tel" &&
    !/^(?:\+91)?[6-9][0-9]{9}$/.test(trimmedValue.replace(/[\s()-]/g, ""))
  ) {
    return "Enter a valid 10-digit Indian mobile number.";
  }

  if (field.type === "number") {
    const number = Number(trimmedValue);
    if (!Number.isFinite(number)) {
      return `Enter a valid ${field.label.toLowerCase()}.`;
    }
    if (field.min !== undefined && number < field.min) {
      return `${field.label} must be at least ${field.min}.`;
    }
    if (field.max !== undefined && number > field.max) {
      return `${field.label} must be no more than ${field.max}.`;
    }
  }

  if (field.name === "message" && trimmedValue.length < 10) {
    return "Please provide at least 10 characters.";
  }

  return "";
}

export default function SupportRequestModal({
  request,
  onClose,
}: SupportRequestModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formValues, setFormValues] = useState<FormValues>({});
  const [emailHref, setEmailHref] = useState("");
  const [emailOpened, setEmailOpened] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const Icon = request.icon;
  const fields = [...contactFields, ...request.fields];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    const focusFrame = window.requestAnimationFrame(() => {
      dialog.scrollTop = 0;
      dialog
        .querySelector<HTMLButtonElement>("[data-modal-close]")
        ?.focus({ preventScroll: true });
      dialog.scrollTop = 0;
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values: FormValues = {};
    const nextErrors: FormErrors = {};

    fields.forEach((field) => {
      const value = String(formData.get(field.name) ?? "");
      values[field.name] = value;
      const error = validateField(field, value);
      if (error) nextErrors[field.name] = error;
    });

    setFormValues(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      dialogRef.current
        ?.querySelector<HTMLElement>("[aria-invalid='true']")
        ?.focus();
      return;
    }

    const subject = encodeURIComponent(`Support request — ${request.title}`);
    const body = encodeURIComponent(
      [
        `Support category: ${request.title}`,
        "",
        ...fields.map((field) => `${field.label}: ${values[field.name] || "Not provided"}`),
      ].join("\n"),
    );
    setEmailHref(`mailto:${site.email}?subject=${subject}&body=${body}`);
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-modal="true"
      aria-labelledby="support-modal-title"
      aria-describedby="support-modal-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          data-modal-close
          type="button"
          onClick={onClose}
          aria-label="Close support request"
        >
          <X size={19} />
        </button>

        {submitted ? (
          <div className={styles.successState}>
            <span className={styles.successIcon}>
              <Check size={34} strokeWidth={2.3} />
            </span>
            <span className={styles.successAccent} aria-hidden="true" />
            <h2 id="support-modal-title">Thank You!</h2>
            <p id="support-modal-description">
              Your request has been submitted successfully. Our team will get
              back to you soon.
            </p>
            <button
              className={styles.submitButton}
              type="button"
              onClick={onClose}
            >
              Close
            </button>
            <span className={styles.successFootnote}>
              Together, we make a difference.
            </span>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.modalIntro}>
                <span className={styles.categoryIcon}>
                  <Icon size={21} strokeWidth={1.8} />
                </span>
                <span className={styles.eyebrow}>Request support</span>
                <h2 id="support-modal-title">{request.title}</h2>
                <p id="support-modal-description">{request.description}</p>
              </div>
              <div className={styles.bannerImage}>
                <Image
                  src={request.image}
                  alt={request.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 36vw"
                />
              </div>
            </div>

            <div className={styles.formSection}>
              {emailHref ? (
                <div className={styles.emailStep} role="status">
                  <span className={styles.emailStepIcon}>
                    <Mail size={20} />
                  </span>
                  <h3>Your request is ready to send</h3>
                  <p>
                    Open your email app and send the prepared request to our
                    team. After you send it, return here to confirm.
                  </p>
                  <a
                    className={styles.submitButton}
                    href={emailHref}
                    onClick={() => setEmailOpened(true)}
                  >
                    Open email app <ArrowRight size={17} />
                  </a>
                  {emailOpened && (
                    <button
                      className={styles.confirmButton}
                      type="button"
                      onClick={() => setSubmitted(true)}
                    >
                      I’ve sent my request
                    </button>
                  )}
                  <button
                    className={styles.editButton}
                    type="button"
                    onClick={() => {
                      setEmailHref("");
                      setEmailOpened(false);
                    }}
                  >
                    Return to form
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.formHeading}>
                    <h3>Tell us how we can help</h3>
                    <p>Fields marked * are required.</p>
                  </div>
                  <form className={styles.form} onSubmit={submit} noValidate>
                    <div className={styles.formGrid}>
                      {fields.map((field) => {
                        const error = errors[field.name];
                        const inputId = `support-${field.name}`;
                        const FieldIcon = getFieldIcon(field.name);
                        const commonProps = {
                          id: inputId,
                          name: field.name,
                          required: field.required,
                          "aria-invalid": Boolean(error),
                          "aria-describedby": error
                            ? `${inputId}-error`
                            : undefined,
                          onChange: () =>
                            setErrors((current) => {
                              if (!current[field.name]) return current;
                              const updated = { ...current };
                              delete updated[field.name];
                              return updated;
                            }),
                        };

                        return (
                          <label
                            className={`${styles.field} ${
                              field.type === "textarea" ? styles.fieldWide : ""
                            }`}
                            htmlFor={inputId}
                            key={field.name}
                          >
                            <span className={styles.fieldLabel}>
                              <FieldIcon size={13} aria-hidden="true" />
                              <span>
                                {field.label}
                                {field.required ? " *" : ""}
                              </span>
                            </span>
                            {field.type === "select" ? (
                              <select
                                {...commonProps}
                                defaultValue={formValues[field.name] ?? ""}
                              >
                                <option value="" disabled>
                                  {field.placeholder ?? "Select an option"}
                                </option>
                                {field.options?.map((option) => (
                                  <option value={option} key={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            ) : field.type === "textarea" ? (
                              <textarea
                                {...commonProps}
                                defaultValue={formValues[field.name] ?? ""}
                                placeholder={field.placeholder}
                                rows={4}
                              />
                            ) : (
                              <input
                                {...commonProps}
                                defaultValue={formValues[field.name] ?? ""}
                                type={field.type}
                                placeholder={field.placeholder}
                                min={field.min}
                                max={field.max}
                                autoComplete={
                                  field.name === "fullName"
                                    ? "name"
                                    : field.name === "email"
                                      ? "email"
                                      : field.name === "phone"
                                        ? "tel"
                                        : undefined
                                }
                              />
                            )}
                            {error && (
                              <span
                                className={styles.fieldError}
                                id={`${inputId}-error`}
                              >
                                {error}
                              </span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                    <button className={styles.submitButton} type="submit">
                      Submit Request <ArrowRight size={17} />
                    </button>
                    <p className={styles.privacyNote}>
                      <ShieldCheck size={15} />
                      Your information is safe with us.
                    </p>
                  </form>
                </>
              )}
            </div>
            <div className={styles.modalFooter}>
              <span>
                <MapPin size={14} /> Thrissur, Kerala
              </span>
              <span>
                <Phone size={14} /> Support with care
              </span>
              <span>
                <Clock3 size={14} /> We’ll be in touch
              </span>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
