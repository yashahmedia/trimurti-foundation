"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import styles from "@/components/culture/MusicArtsPage.module.css";

export default function ArtistInterestForm() {
  const [emailLink, setEmailLink] = useState("");

  function submitInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) =>
      String(formData.get(name) ?? "").trim();
    const subject = encodeURIComponent(
      `Vasantha Utsavam Artist Interest — ${getValue("fullName")}`,
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${getValue("fullName")}`,
        `Contact Number: ${getValue("contactNumber")}`,
        `Email Address: ${getValue("email")}`,
        `City & Country: ${getValue("cityCountry")}`,
        `Postal Address: ${getValue("postalAddress") || "Not provided"}`,
        `Art Form: ${getValue("artForm") || "Not specified"}`,
        "",
        "Message:",
        getValue("message") || "Not provided",
      ].join("\n"),
    );

    setEmailLink(`mailto:${site.email}?subject=${subject}&body=${body}`);
  }

  return (
    <form className={styles.formCard} onSubmit={submitInterest}>
      <div className={styles.formGrid}>
        <label className={styles.field} htmlFor="artist-full-name">
          <span className={styles.fieldLabel}>
            Full Name<span aria-hidden="true">*</span>
          </span>
          <input
            id="artist-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-describedby="artist-name-hint"
            required
          />
          <span className={styles.fieldHint} id="artist-name-hint">
            Artist&apos;s name
          </span>
        </label>

        <label className={styles.field} htmlFor="artist-contact-number">
          <span className={styles.fieldLabel}>
            Contact Number<span aria-hidden="true">*</span>
          </span>
          <input
            id="artist-contact-number"
            name="contactNumber"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-describedby="artist-contact-hint"
            required
          />
          <span className={styles.fieldHint} id="artist-contact-hint">
            With country code
          </span>
        </label>

        <label className={styles.field} htmlFor="artist-email">
          <span className={styles.fieldLabel}>
            Email Address<span aria-hidden="true">*</span>
          </span>
          <input
            id="artist-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-describedby="artist-email-hint"
            required
          />
          <span className={styles.fieldHint} id="artist-email-hint">
            For event communication
          </span>
        </label>

        <label className={styles.field} htmlFor="artist-city-country">
          <span className={styles.fieldLabel}>
            City &amp; Country<span aria-hidden="true">*</span>
          </span>
          <input
            id="artist-city-country"
            name="cityCountry"
            type="text"
            autoComplete="address-level2"
            placeholder="City, Country"
            aria-describedby="artist-location-hint"
            required
          />
          <span className={styles.fieldHint} id="artist-location-hint">
            Current place of residence
          </span>
        </label>

        <label className={styles.field} htmlFor="artist-postal-address">
          <span className={styles.fieldLabel}>Postal Address</span>
          <input
            id="artist-postal-address"
            name="postalAddress"
            type="text"
            autoComplete="street-address"
            placeholder="Street address"
            aria-describedby="artist-address-hint"
          />
          <span className={styles.fieldHint} id="artist-address-hint">
            Optional at the initial stage
          </span>
        </label>

        <label className={styles.field} htmlFor="artist-art-form">
          <span className={styles.fieldLabel}>Art Form</span>
          <select id="artist-art-form" name="artForm" defaultValue="">
            <option value="" disabled>
              Select an art form
            </option>
            <option value="Carnatic music">Carnatic music</option>
            <option value="Hindustani music">Hindustani music</option>
            <option value="Bharatanatyam">Bharatanatyam</option>
            <option value="Other dance forms">Other dance forms</option>
            <option value="Instrumental music">Instrumental music</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className={`${styles.field} ${styles.fieldWide}`} htmlFor="artist-message">
          <span className={styles.fieldLabel}>Write a message</span>
          <textarea
            id="artist-message"
            name="message"
            rows={6}
            placeholder="Tell us about yourself, your artistic practice, and how you would like to participate in Vasantha Utsavam..."
          />
        </label>
      </div>

      <button className={styles.submitButton} type="submit">
        Submit Your Interest
        <ArrowRight size={19} aria-hidden="true" />
      </button>

      {emailLink && (
        <div className={styles.formStatus} role="status">
          <p>
            Your details are ready. Open your email app to review and send your
            interest to the foundation.
          </p>
          <a href={emailLink}>
            Open email app
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      )}
    </form>
  );
}