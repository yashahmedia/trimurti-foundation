"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { volunteerSchema, type VolunteerInput } from "@/lib/validation";

const interests = [
  "Community Outreach",
  "Event Support",
  "Education & Mentoring",
  "Social Media & Digital Support",
  "Administrative Support",
  "Fundraising",
  "Other",
] as const;

const frequencies = [
  "One-time",
  "Weekly",
  "Monthly",
  "Occasionally",
  "Flexible",
] as const;
const schedules = [
  "Weekdays",
  "Weekends",
  "Mornings",
  "Afternoons",
  "Evenings",
  "Flexible",
 ] as const;
const initialVolunteerInterest = (value: string) =>
  interests.find((interest) => interest === value);

export default function VolunteerForm({
  initialInterest = "",
  event = "",
}: {
  initialInterest?: string;
  event?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerInput>({
    resolver: zodResolver(volunteerSchema),
    shouldUnregister: true,
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      interest: initialVolunteerInterest(initialInterest),
      frequency: undefined,
      schedule: "",
      hours: "",
      volunteeredBefore: "",
      previousExperience: "",
      consent: false,
      website: "",
      event,
    },
  });

  const volunteeredBefore = useWatch({
    control,
    name: "volunteeredBefore",
  });

  const field = (
    name: "fullName" | "email" | "phone" | "city" | "hours",
    label: string,
    type = "text",
    placeholder?: string,
  ) => (
    <label htmlFor={name} key={name}>
      <span>{label}</span>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete={
          name === "fullName"
            ? "name"
            : name === "email"
              ? "email"
              : name === "phone"
                ? "tel"
                : undefined
        }
        required={["fullName", "email", "phone", "city"].includes(name)}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        {...register(name)}
      />
      {errors[name] && (
        <span className="error" id={`${name}-error`}>
          {errors[name]?.message}
        </span>
      )}
    </label>
  );

  function submit(data: VolunteerInput) {
    const subject = encodeURIComponent("Volunteer application");
    const body = encodeURIComponent(
      Object.entries(data)
        .filter(([key, value]) => key !== "website" && key !== "consent" && value)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    );
    window.open(
      `mailto:hello@trimurtifoundation.org?subject=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="form-grid volunteer-form"
    >
      <fieldset className="volunteer-form-group wide">
        <legend>Personal Information</legend>
        <div className="volunteer-form-fields">
          {field("fullName", "Full Name *")}
          {field("email", "Email Address *", "email")}
          {field("phone", "Phone Number *", "tel")}
          {field("city", "City / Location *")}
        </div>
      </fieldset>

      <fieldset className="volunteer-form-group wide">
        <legend>Volunteer Interests</legend>
        <div className="volunteer-form-fields">
          <label htmlFor="interest" className="wide">
            <span>How would you like to volunteer? *</span>
            <select
              id="interest"
              required
              aria-invalid={!!errors.interest}
              aria-describedby={errors.interest ? "interest-error" : undefined}
              {...register("interest")}
            >
              <option value="">Select an area</option>
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            {errors.interest && (
              <span className="error" id="interest-error">
                {errors.interest.message}
              </span>
            )}
          </label>
        </div>
      </fieldset>

      <fieldset className="volunteer-form-group wide">
        <legend>Availability</legend>
        <div className="volunteer-form-fields">
          <label htmlFor="frequency">
            <span>How often would you like to volunteer? *</span>
            <select
              id="frequency"
              required
              aria-invalid={!!errors.frequency}
              aria-describedby={
                errors.frequency ? "frequency-error" : undefined
              }
              {...register("frequency")}
            >
              <option value="">Select frequency</option>
              {frequencies.map((frequency) => (
                <option key={frequency} value={frequency}>
                  {frequency}
                </option>
              ))}
            </select>
            {errors.frequency && (
              <span className="error" id="frequency-error">
                {errors.frequency.message}
              </span>
            )}
          </label>
          <label htmlFor="schedule">
            <span>Preferred Volunteer Schedule</span>
            <select
              id="schedule"
              aria-invalid={!!errors.schedule}
              aria-describedby={errors.schedule ? "schedule-error" : undefined}
              {...register("schedule")}
            >
              <option value="">Select a schedule</option>
              {schedules.map((schedule) => (
                <option key={schedule} value={schedule}>
                  {schedule}
                </option>
              ))}
            </select>
            {errors.schedule && (
              <span className="error" id="schedule-error">
                {errors.schedule.message}
              </span>
            )}
          </label>
          <div className="wide">
            {field(
              "hours",
              "Hours you can contribute",
              "text",
              "Number of hours / preferred schedule",
            )}
          </div>
        </div>
      </fieldset>

      <fieldset className="volunteer-form-group wide">
        <legend>Previous Experience</legend>
        <div className="volunteer-form-fields">
          <label htmlFor="volunteeredBefore" className="wide">
            <span>Have you volunteered with another organization before?</span>
            <select id="volunteeredBefore" {...register("volunteeredBefore")}>
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          {volunteeredBefore === "Yes" && (
            <label htmlFor="previousExperience" className="wide">
              <span>
                If yes, please tell us about your previous experience
              </span>
              <textarea
                id="previousExperience"
                {...register("previousExperience")}
              />
            </label>
          )}
        </div>
      </fieldset>

      <label className="consent wide" htmlFor="consent">
        <input
          id="consent"
          type="checkbox"
          required
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          {...register("consent")}
        />
        <span>
          I agree to be contacted regarding volunteer opportunities and
          activities.
        </span>
      </label>
      {errors.consent && (
        <p className="error wide" id="consent-error">
          {errors.consent.message}
        </p>
      )}

      <input type="hidden" {...register("event")} />

      <label className="honeypot" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" {...register("website")} />
      </label>

      <div className="wide">
        <button className="button volunteer-submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Submitting application..."
            : "Submit Volunteer Application"}
        </button>
      </div>
      {submitted && (
        <>
          <p role="status" className="success wide volunteer-success">
            Thank you for choosing to give your time and make a difference. Our
            team will get in touch with you soon.
          </p>
          <p className="wide volunteer-success-followup">
            Your email application should open with your details. Please send
            the email to complete your application. If it doesn&apos;t open,
            contact us at{" "}
            <a href="mailto:hello@trimurtifoundation.org">
              hello@trimurtifoundation.org
            </a>
            .
          </p>
        </>
      )}
    </form>
  );
}
