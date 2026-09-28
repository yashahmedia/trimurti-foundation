"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { site } from "@/config/site";
import { contactSchema, type ContactInput } from "@/lib/validation";
import styles from "@/app/contact/contact.module.css";

const subjects = [
  "General Enquiry",
  "Volunteer",
  "Partnership",
  "Donation",
  "Event",
  "Other",
];

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [emailLink, setEmailLink] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "General Enquiry",
      message: "",
    },
  });

  const fieldError = (name: keyof ContactInput) => {
    const error = errors[name];
    return error ? (
      <span className={styles.fieldError} id={`${name}-error`}>
        {error.message}
      </span>
    ) : null;
  };

  function submit(data: ContactInput) {
    const subject = encodeURIComponent(`${data.subject} — ${data.fullName}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Subject: ${data.subject}`,
        "",
        data.message,
      ].join("\n"),
    );
    setEmailLink(
      `mailto:${site.email}?subject=${subject}&body=${body}`,
    );
    setResult(
      "Your message is ready. Open your email app using the link below to review and send it.",
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(submit)}
      noValidate
      aria-describedby={result ? "contact-form-status" : undefined}
    >
      <div className={styles.formGrid}>
        <label className={styles.field} htmlFor="contact-full-name">
          <span>Full Name *</span>
          <input
            id="contact-full-name"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {fieldError("fullName")}
        </label>

        <label className={styles.field} htmlFor="contact-email">
          <span>Email Address *</span>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {fieldError("email")}
        </label>

        <label className={styles.field} htmlFor="contact-phone">
          <span>Phone Number *</span>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {fieldError("phone")}
        </label>

        <label className={styles.field} htmlFor="contact-subject">
          <span>Subject *</span>
          <select
            id="contact-subject"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {fieldError("subject")}
        </label>

        <label
          className={`${styles.field} ${styles.fieldWide}`}
          htmlFor="contact-message"
        >
          <span>Message *</span>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Tell us how we can help..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {fieldError("message")}
        </label>
      </div>

      <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Preparing message..." : "Send Message"}
        <ArrowRight size={17} aria-hidden="true" />
      </button>

      {result && (
        <div className={styles.formStatus} id="contact-form-status" role="status">
          <p>{result}</p>
          <a href={emailLink}>
            Open email app <ArrowRight size={15} />
          </a>
        </div>
      )}
    </form>
  );
}
