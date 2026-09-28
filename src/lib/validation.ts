import { z } from "zod";
const text = (min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min)
    .max(max)
    .refine((v) => !/[<>\x00-\x08]/.test(v), "Please use plain text.");
export const memberIdSchema = z
  .string()
  .trim()
  .toUpperCase()
  .regex(
    /^TF-(?:DEMO-|[0-9]{4}-)[A-Z0-9]{6,20}$/,
    "Use an ID such as TF-2026-ABC12345.",
  );
export const volunteerSchema = z.object({
  fullName: text(2, 100),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[ -]?)?[6-9][0-9]{9}$/,
      "Enter a valid 10-digit Indian mobile number.",
    ),
  email: z.email().max(150),
  city: text(2, 100),
  interest: z.enum([
    "Community Outreach",
    "Event Support",
    "Education & Mentoring",
    "Social Media & Digital Support",
    "Administrative Support",
    "Fundraising",
    "Other",
  ]),
  skills: text(0, 1000),
  frequency: z.enum(["One-time", "Weekly", "Monthly", "Occasionally", "Flexible"]),
  schedule: z.union([
    z.enum([
      "Weekdays",
      "Weekends",
      "Mornings",
      "Afternoons",
      "Evenings",
      "Flexible",
    ]),
    z.literal(""),
  ]),
  hours: text(0, 120),
  motivation: text(10, 1500),
  volunteeredBefore: z.union([z.enum(["Yes", "No"]), z.literal("")]),
  previousExperience: text(0, 1500).optional(),
  additionalInformation: text(0, 1500),
  consent: z
    .boolean()
    .refine((v) => v, "Please give consent to submit your application."),
  website: z.string().max(0),
  event: text(0, 100),
});
export type VolunteerInput = z.infer<typeof volunteerSchema>;

export const contactSchema = z.object({
  fullName: text(2, 100),
  email: z.string().trim().pipe(z.email().max(150)),
  phone: z
    .string()
    .trim()
    .refine(
      (value) =>
        /^(?:\+91)?[6-9][0-9]{9}$/.test(value.replace(/[\s-]/g, "")),
      "Enter a valid 10-digit Indian mobile number.",
    ),
  subject: z.enum([
    "General Enquiry",
    "Volunteer",
    "Partnership",
    "Donation",
    "Event",
    "Other",
  ]),
  message: text(10, 2000),
});
export type ContactInput = z.infer<typeof contactSchema>;
