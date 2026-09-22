"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { volunteerSchema, type VolunteerInput } from "@/lib/validation";
import { services } from "@/data/services";
export default function VolunteerForm({
  area = "",
  event = "",
}: {
  area?: string;
  event?: string;
}) {
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerInput>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: { website: "", experience: "", area, event, consent: false },
  });
  const field = (name: keyof VolunteerInput, label: string, type = "text") => (
    <label key={name} htmlFor={name}>
      <span id={name + "-label"}>{label}</span>
      <input
        id={name}
        aria-labelledby={name + "-label"}
        type={type}
        {...register(name, type === "number" ? { valueAsNumber: true } : {})}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? name + "-error" : undefined}
      />
      {errors[name] && (
        <span className="error" id={name + "-error"}>
          {errors[name]?.message}
        </span>
      )}
    </label>
  );
  const select = (
    name: keyof VolunteerInput,
    label: string,
    options: string[],
  ) => (
    <label htmlFor={name}>
      <span id={name + "-label"}>{label}</span>
      <select id={name} aria-labelledby={name + "-label"} aria-describedby={errors[name] ? name + "-error" : undefined} {...register(name)} aria-invalid={!!errors[name]}>
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {errors[name] && <span className="error" id={name + "-error"}>{errors[name]?.message}</span>}
    </label>
  );
  async function submit(data: VolunteerInput) {
    setResult("");
    const subject = encodeURIComponent("Volunteer application");
    const body = encodeURIComponent(
      Object.entries(data)
        .filter(([key]) => key !== "website" && key !== "consent")
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    );
    window.location.href = `mailto:hello@trimurtifoundation.org?subject=${subject}&body=${body}`;
    setResult("Your email client is ready with the application details.");
    reset();
  }
  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="form-grid">
      {field("fullName", "Full name")}
      {field("phone", "Phone number", "tel")}
      {field("email", "Email", "email")}
      {field("city", "City")}
      {field("age", "Age (18 or above)", "number")}
      {select("gender", "Gender", [
        "Woman",
        "Man",
        "Non-binary",
        "Prefer not to say",
      ])}
      {field("occupation", "Occupation")}
      {select("availability", "Availability", [
        "Weekdays",
        "Weekends",
        "Flexible",
        "Remote",
      ])}
      <div className="wide">
        {select(
          "area",
          "Preferred volunteering area",
          services.map((s) => s.title),
        )}
      </div>
      {[
        ["skills", "Skills and interests"],
        ["experience", "Previous experience (optional)"],
        ["motivation", "Why would you like to volunteer?"],
      ].map(([name, label]) => (
        <label className="wide" key={name} htmlFor={name}>
          <span id={name + "-label"}>{label}</span>
          <textarea
            id={name}
            aria-labelledby={name + "-label"}
            aria-describedby={errors[name as keyof VolunteerInput] ? name + "-error" : undefined}
            {...register(name as keyof VolunteerInput)}
            aria-invalid={!!errors[name as keyof VolunteerInput]}
          />
          {errors[name as keyof VolunteerInput] && (
            <span className="error" id={name + "-error"}>
              {errors[name as keyof VolunteerInput]?.message}
            </span>
          )}
        </label>
      ))}
      <label className="honeypot" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" {...register("website")} />
      </label>
      <label className="consent wide">
        <input type="checkbox" {...register("consent")} />
        <span>
          I am at least 18 and consent to the foundation using these details to
          review my application and contact me about volunteering. I have read
          the{" "}
          <a href="/privacy-policy" className="text-link">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.consent && <p className="error wide">{errors.consent.message}</p>}
      <div className="wide">
        <button className="button" disabled={isSubmitting}>
          {isSubmitting ? "Sending application…" : "Submit application ↗"}
        </button>
      </div>
      {result && (
        <p
          role="status"
          className={
            "wide " + (result.startsWith("Thank") ? "success" : "error")
          }
        >
          {result}
        </p>
      )}
    </form>
  );
}
