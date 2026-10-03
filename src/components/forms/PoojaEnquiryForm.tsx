"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { site } from "@/config/site";
import {
  poojaEnquirySchema,
  type PoojaEnquiryInput,
} from "@/lib/validation";
import contactStyles from "@/app/contact/contact.module.css";
import pageStyles from "@/components/culture/CultureFeaturePage.module.css";

export default function PoojaEnquiryForm() {
  const [emailLink, setEmailLink] = useState("");
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PoojaEnquiryInput>({
    resolver: zodResolver(poojaEnquirySchema),
    defaultValues: {
      fullName: "",
      nakshatra: "",
      gothra: "",
      address: "",
      email: "",
      phone: "",
      poojaHomam: "",
      preferredDate: "",
      specialRequest: "",
      consent: false,
    },
  });

  function submit(data: PoojaEnquiryInput) {
    const subject = encodeURIComponent(
      `Pooja / Homam Enquiry — ${data.fullName}`,
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${data.fullName}`,
        `Nakshatra / Birth Star: ${data.nakshatra}`,
        `Gothra: ${data.gothra}`,
        `Address for Prasadam: ${data.address}`,
        `Email Address: ${data.email}`,
        `Contact Number: ${data.phone}`,
        `Pooja / Homam: ${data.poojaHomam}`,
        `Preferred Date: ${data.preferredDate || "Not specified"}`,
        `Special Request / Additional Information: ${data.specialRequest || "None"}`,
        "",
        "The requester confirmed their details and agreed to the terms of the pooja service.",
      ].join("\n"),
    );
    setEmailLink(`mailto:${site.email}?subject=${subject}&body=${body}`);
    setResult(
      "Your request is ready. Open your email app to review and send it to the foundation.",
    );
  }

  function fieldError(name: keyof PoojaEnquiryInput) {
    const error = errors[name];
    return error ? (
      <span className={contactStyles.fieldError} id={`pooja-${name}-error`}>
        {error.message}
      </span>
    ) : null;
  }

  return (
    <form
      className={contactStyles.form}
      onSubmit={handleSubmit(submit)}
      noValidate
      aria-describedby={result ? "pooja-form-status" : undefined}
    >
      <div className={contactStyles.formGrid}>
        <label className={contactStyles.field} htmlFor="pooja-full-name">
          <span>Full Name *</span>
          <input
            id="pooja-full-name"
            autoComplete="name"
            placeholder="Enter your name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "pooja-fullName-error" : undefined}
            {...register("fullName")}
          />
          {fieldError("fullName")}
        </label>

        <label className={contactStyles.field} htmlFor="pooja-nakshatra">
          <span>Nakshatra / Birth Star *</span>
          <input
            id="pooja-nakshatra"
            placeholder="Select / enter"
            aria-invalid={Boolean(errors.nakshatra)}
            aria-describedby={errors.nakshatra ? "pooja-nakshatra-error" : undefined}
            {...register("nakshatra")}
          />
          {fieldError("nakshatra")}
        </label>

        <label className={contactStyles.field} htmlFor="pooja-gothra">
          <span>Gothra *</span>
          <input
            id="pooja-gothra"
            placeholder="Enter Gothra"
            aria-invalid={Boolean(errors.gothra)}
            aria-describedby={errors.gothra ? "pooja-gothra-error" : undefined}
            {...register("gothra")}
          />
          {fieldError("gothra")}
        </label>

        <label className={contactStyles.field} htmlFor="pooja-email">
          <span>Email Address *</span>
          <input
            id="pooja-email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "pooja-email-error" : undefined}
            {...register("email")}
          />
          {fieldError("email")}
        </label>

        <label
          className={`${contactStyles.field} ${contactStyles.fieldWide}`}
          htmlFor="pooja-address"
        >
          <span>Address for Prasadam *</span>
          <textarea
            id="pooja-address"
            rows={3}
            autoComplete="street-address"
            placeholder="Address"
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? "pooja-address-error" : undefined}
            {...register("address")}
          />
          {fieldError("address")}
        </label>

        <label className={contactStyles.field} htmlFor="pooja-phone">
          <span>Contact Number *</span>
          <input
            id="pooja-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Mobile Number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "pooja-phone-error" : undefined}
            {...register("phone")}
          />
          {fieldError("phone")}
        </label>

        <label className={contactStyles.field} htmlFor="pooja-homam">
          <span>Pooja / Homam *</span>
          <input
            id="pooja-homam"
            placeholder="Select / enter Pooja"
            aria-invalid={Boolean(errors.poojaHomam)}
            aria-describedby={errors.poojaHomam ? "pooja-poojaHomam-error" : undefined}
            {...register("poojaHomam")}
          />
          {fieldError("poojaHomam")}
        </label>

        <label className={contactStyles.field} htmlFor="pooja-date">
          <span>Preferred Date</span>
          <input
            id="pooja-date"
            type="date"
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={
              errors.preferredDate ? "pooja-preferredDate-error" : undefined
            }
            {...register("preferredDate")}
          />
          {fieldError("preferredDate")}
        </label>

        <label
          className={`${contactStyles.field} ${contactStyles.fieldWide}`}
          htmlFor="pooja-special-request"
        >
          <span>Special Request / Additional Information</span>
          <textarea
            id="pooja-special-request"
            rows={4}
            placeholder="Optional"
            aria-invalid={Boolean(errors.specialRequest)}
            aria-describedby={
              errors.specialRequest ? "pooja-specialRequest-error" : undefined
            }
            {...register("specialRequest")}
          />
          {fieldError("specialRequest")}
        </label>
      </div>

      <label className={pageStyles.consent} htmlFor="pooja-consent">
        <input
          id="pooja-consent"
          type="checkbox"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "pooja-consent-error" : undefined}
          {...register("consent")}
        />
        <span>
          I confirm that the above details are correct and agree to the terms of
          the pooja service.
        </span>
      </label>
      {fieldError("consent")}

      <button
        className={contactStyles.submitButton}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Preparing request..." : "Submit Request"}
        <ArrowRight size={17} aria-hidden="true" />
      </button>

      {result && (
        <div
          className={contactStyles.formStatus}
          id="pooja-form-status"
          role="status"
        >
          <p>{result}</p>
          <a href={emailLink}>
            Open email app <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      )}
    </form>
  );
}
