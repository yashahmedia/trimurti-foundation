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
  age: z.number().int().min(18, "Applicants must be at least 18.").max(100),
  gender: z.enum(["Woman", "Man", "Non-binary", "Prefer not to say"]),
  occupation: text(2, 100),
  availability: z.enum(["Weekdays", "Weekends", "Flexible", "Remote"]),
  area: text(2, 120),
  skills: text(2, 1000),
  experience: text(0, 1500),
  motivation: text(10, 1500),
  consent: z
    .boolean()
    .refine((v) => v, "Please give consent to submit your application."),
  website: z.string().max(0),
  event: text(0, 100).optional(),
});
export type VolunteerInput = z.infer<typeof volunteerSchema>;
