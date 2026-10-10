"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, FileText, Trash2 } from "lucide-react";
import { site } from "@/config/site";
import {
  maxFiles,
  maxTotalSize,
  removeUploadedDocuments,
  uploadSupportingDocuments,
  validateSupportingFile,
  type UploadReference,
} from "@/lib/support-request-uploads";
import styles from "./SupportRequestForm.module.css";

type FieldOption = {
  value: string;
  label: string;
};

type CategoryField = {
  name: string;
  label: string;
  type: "text" | "number" | "date" | "select" | "textarea";
  required?: boolean;
  min?: number;
  max?: number;
  options?: FieldOption[];
  placeholder?: string;
};

type SupportCategory = {
  title: string;
  uploadLabel: string;
  fields: CategoryField[];
};

const categories: SupportCategory[] = [
  {
    title: "Education & Empowerment",
    uploadLabel: "Upload School Fee Receipt, Admission Proof or Education Estimate",
    fields: [
      { name: "studentName", label: "Student's Full Name", type: "text", required: true },
      { name: "studentAge", label: "Age", type: "number", min: 3, max: 100 },
      { name: "educationLevel", label: "Current Class / Education Level", type: "text" },
      { name: "schoolName", label: "School / College Name", type: "text" },
      {
        name: "educationSupportType",
        label: "Type of Support Required",
        type: "select",
        required: true,
        options: [
          "School Fees",
          "Books & Stationery",
          "Uniform",
          "Digital Learning",
          "Skill Development",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      { name: "educationAmount", label: "Total Financial Assistance Required (optional)", type: "number", min: 0 },
      { name: "educationSituation", label: "Briefly Describe Your Situation", type: "textarea", required: true },
    ],
  },
  {
    title: "Healthcare Support",
    uploadLabel: "Upload Medical Report, Prescription or Treatment Cost Estimate",
    fields: [
      { name: "patientName", label: "Patient's Full Name", type: "text", required: true },
      { name: "patientAge", label: "Age", type: "number", min: 0, max: 120 },
      { name: "medicalCondition", label: "Medical Condition / Diagnosis", type: "text", required: true },
      { name: "hospitalName", label: "Hospital / Healthcare Centre Name", type: "text" },
      { name: "treatmentRequired", label: "Treatment Required", type: "text", required: true },
      {
        name: "healthAssistanceType",
        label: "Type of Assistance",
        type: "select",
        required: true,
        options: [
          "Medical Expenses",
          "Medicines",
          "Tests / Diagnostics",
          "Surgery",
          "Hospitalisation",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      { name: "treatmentCost", label: "Estimated Treatment Cost (optional)", type: "number", min: 0 },
      { name: "healthAssistanceAmount", label: "Amount of Assistance Required (optional)", type: "number", min: 0 },
      { name: "healthSituation", label: "Briefly Describe Your Situation", type: "textarea", required: true },
    ],
  },
  {
    title: "Annadhan & Nutrition",
    uploadLabel: "Upload Beneficiary / Organisation Details or Distribution Plan",
    fields: [
      { name: "foodApplicantName", label: "Applicant / Organisation Name", type: "text", required: true },
      { name: "beneficiaryCount", label: "Number of People Requiring Food Support", type: "number", required: true, min: 1 },
      {
        name: "beneficiaryType",
        label: "Beneficiary Type",
        type: "select",
        required: true,
        options: [
          "Children",
          "Elderly People",
          "Families in Need",
          "Homeless People",
          "Community Group",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      {
        name: "foodSupportType",
        label: "Type of Support",
        type: "select",
        required: true,
        options: [
          "Food Rations",
          "Cooked Meals",
          "Nutrition Kits",
          "Community Meal Distribution",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      { name: "requiredDateDuration", label: "Required Date / Duration", type: "text", required: true, placeholder: "For example, 20 October or two weeks" },
      { name: "deliveryLocation", label: "Delivery Location", type: "text", required: true },
      { name: "foodRequirement", label: "Briefly Describe the Requirement", type: "textarea", required: true },
    ],
  },
  {
    title: "Stand with our Soldiers",
    uploadLabel: "Upload Service Proof or Document Showing Relationship to the Soldier",
    fields: [
      { name: "soldierApplicantName", label: "Applicant's Full Name", type: "text", required: true },
      { name: "soldierRelationship", label: "Relationship to the Soldier (if applicable)", type: "text" },
      { name: "soldierName", label: "Soldier's Name (optional)", type: "text" },
      { name: "serviceDetails", label: "Service Details / Unit (optional)", type: "text" },
      {
        name: "soldierSupportType",
        label: "Type of Support Required",
        type: "select",
        required: true,
        options: [
          "Family Assistance",
          "Education for Dependents",
          "Medical Support",
          "Emergency Financial Assistance",
          "Welfare Support",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      { name: "soldierLocation", label: "Location", type: "text", required: true },
      { name: "soldierSituation", label: "Briefly Describe the Situation", type: "textarea", required: true },
    ],
  },
  {
    title: "Environment & Welfare",
    uploadLabel: "Upload Project Proposal or Activity Plan",
    fields: [
      { name: "environmentApplicantName", label: "Applicant / Organisation Name", type: "text", required: true },
      {
        name: "environmentInitiativeType",
        label: "Type of Initiative",
        type: "select",
        required: true,
        options: [
          "Tree Plantation",
          "Environmental Cleanup",
          "Water Conservation",
          "Animal Welfare",
          "Community Welfare",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      { name: "environmentLocation", label: "Project / Initiative Location", type: "text", required: true },
      { name: "environmentBeneficiaries", label: "Number of People / Beneficiaries (if applicable)", type: "number", min: 0 },
      { name: "environmentDate", label: "Expected Project Date", type: "date" },
      { name: "environmentResources", label: "Resources or Assistance Required", type: "text", required: true },
      { name: "environmentDescription", label: "Briefly Describe the Initiative", type: "textarea", required: true },
    ],
  },
  {
    title: "Culture & Heritage",
    uploadLabel: "Upload Event Proposal or Heritage Site Details",
    fields: [
      { name: "cultureApplicantName", label: "Applicant / Organisation Name", type: "text", required: true },
      {
        name: "cultureInitiativeType",
        label: "Type of Initiative",
        type: "select",
        required: true,
        options: [
          "Heritage Conservation",
          "Cultural Event",
          "Traditional Arts & Crafts",
          "Historical Site Preservation",
          "Community Cultural Programme",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      { name: "heritageProjectName", label: "Heritage Site / Event / Project Name", type: "text", required: true },
      { name: "cultureLocation", label: "Project Location", type: "text", required: true },
      { name: "cultureExpectedDate", label: "Expected Date", type: "date" },
      {
        name: "cultureSupportType",
        label: "Type of Support Required",
        type: "select",
        required: true,
        options: [
          "Financial Assistance",
          "Materials / Resources",
          "Event Support",
          "Awareness & Promotion",
          "Volunteer Support",
          "Other",
        ].map((value) => ({ value, label: value })),
      },
      { name: "cultureDescription", label: "Briefly Describe the Initiative", type: "textarea", required: true },
    ],
  },
];

type ContactDetails = {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  city: string;
  consent: boolean;
};

const emptyContact: ContactDetails = {
  fullName: "",
  mobileNumber: "",
  emailAddress: "",
  city: "",
  consent: false,
};

function validMobile(value: string): boolean {
  const normalized = value.replace(/[\s().-]/g, "");
  return /^\+?[1-9]\d{6,14}$/.test(normalized);
}

export default function SupportRequestForm({
  initialCategory = "",
  compact = false,
}: {
  initialCategory?: string;
  compact?: boolean;
}) {
  const [contact, setContact] = useState<ContactDetails>(emptyContact);
  const [category, setCategory] = useState(initialCategory);
  const [categoryValues, setCategoryValues] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [documentConsent, setDocumentConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deliveryHref, setDeliveryHref] = useState("");
  const [uploadReference, setUploadReference] = useState<UploadReference | null>(null);
  const currentCategory = categories.find((item) => item.title === category);

  function updateContact(field: keyof ContactDetails, value: string | boolean) {
    setContact((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function updateCategoryField(name: string, value: string) {
    setCategoryValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function clearUploadedFiles(): Promise<boolean> {
    if (!uploadReference) return true;
    try {
      await removeUploadedDocuments(uploadReference);
      setUploadReference(null);
      return true;
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Previously uploaded files could not be removed. Please contact the foundation.",
      );
      return false;
    }
  }

  async function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
    const next = [...files, ...Array.from(event.currentTarget.files ?? [])];
    event.currentTarget.value = "";
    if (next.length > maxFiles) {
      setFormError(`Choose no more than ${maxFiles} documents.`);
      return;
    }
    const invalid = next.map(validateSupportingFile).find(Boolean);
    if (invalid) {
      setFormError(invalid);
      return;
    }
    if (next.reduce((total, file) => total + file.size, 0) > maxTotalSize) {
      setFormError("The total size of all documents must be 30 MB or less.");
      return;
    }
    if (!(await clearUploadedFiles())) return;
    setFiles(next);
    setErrors((current) => {
      const updated = { ...current };
      delete updated.documents;
      return updated;
    });
    setFormError("");
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (contact.fullName.trim().length < 2) next.fullName = "Enter your full name.";
    if (!validMobile(contact.mobileNumber)) {
      next.mobileNumber = "Enter a valid mobile number (7 to 15 digits, including country code if needed).";
    }
    if (
      contact.emailAddress.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.emailAddress.trim())
    ) {
      next.emailAddress = "Enter a valid email address.";
    }
    if (contact.city.trim().length < 2) next.city = "Enter your city or location.";
    if (!category) next.category = "Select a support category.";
    if (!files.length) next.documents = "Upload at least one relevant supporting document.";
    currentCategory?.fields.forEach((field) => {
      const value = categoryValues[field.name]?.trim() ?? "";
      if (field.required && !value) {
        next[field.name] = `${field.label} is required.`;
      } else if (field.type === "number" && value) {
        const number = Number(value);
        if (!Number.isFinite(number) || number < (field.min ?? 0) || (field.max !== undefined && number > field.max)) {
          next[field.name] = `Enter a valid ${field.label.toLowerCase()}.`;
        }
      }
    });
    if (!contact.consent) next.consent = "Please allow our team to contact you about this request.";
    if (files.length && !documentConsent) {
      next.documentConsent = "Please confirm that you agree to share the selected documents.";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      const firstError = Object.keys(next)[0];
      document
        .getElementById(firstError === "documents" ? "support-request-files" : `support-request-${firstError}`)
        ?.focus();
      return false;
    }
    return true;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    if (!validate() || !currentCategory) return;

    setSubmitting(true);
    try {
      const reference = files.length
        ? uploadReference?.keys.length === files.length
          ? uploadReference
          : await uploadSupportingDocuments(category, files)
        : null;
      const details = [
        "Trimurthi Foundation — Support Request",
        `Support Category: ${category}`,
        "",
        `Full Name: ${contact.fullName.trim()}`,
        `Mobile Number: ${contact.mobileNumber.trim()}`,
        `Email Address: ${contact.emailAddress.trim() || "Not provided"}`,
        `City / Location: ${contact.city.trim()}`,
        "Permission to contact: Yes",
        "",
        ...currentCategory.fields
          .filter((field) => categoryValues[field.name]?.trim())
          .map((field) => `${field.label}: ${categoryValues[field.name].trim()}`),
        ...(reference
          ? [
              "",
              `Private documents reference: ${reference.requestId}`,
              ...reference.keys.map((key, index) => `Document ${index + 1}: ${key}`),
            ]
          : []),
        "",
        "The applicant has consented to be contacted about this request.",
      ].join("\n");
      const subject = encodeURIComponent(`Support request — ${category}`);
      setUploadReference(reference);
      setDeliveryHref(
        `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(details)}`,
      );
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Your request could not be prepared. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function renderField(field: CategoryField) {
    const id = `support-request-${field.name}`;
    const error = errors[field.name];
    const common = {
      id,
      name: field.name,
      required: field.required,
      min: field.min,
      max: field.max,
      value: categoryValues[field.name] ?? "",
      "aria-invalid": Boolean(error),
      "aria-describedby": error ? `${id}-error` : undefined,
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        updateCategoryField(field.name, event.target.value),
    };

    return (
      <label className={`${styles.field} ${field.type === "textarea" ? styles.wide : ""}`} htmlFor={id} key={field.name}>
        <span>{field.label}{field.required ? " *" : ""}</span>
        {field.type === "select" ? (
          <select {...common}>
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option value={option.value} key={option.value}>{option.label}</option>
            ))}
          </select>
        ) : field.type === "textarea" ? (
          <textarea {...common} rows={4} placeholder={field.placeholder} />
        ) : (
          <input {...common} type={field.type} placeholder={field.placeholder} />
        )}
        {error && <span className={styles.fieldError} id={`${id}-error`}>{error}</span>}
      </label>
    );
  }

  const compactStyles = compact
    ? {
        section: { padding: 0, background: "transparent", boxShadow: "none" },
        inner: { width: "100%", maxWidth: "100%" },
        heading: { margin: "0 0 18px", textAlign: "left" as const },
        form: { padding: "18px 16px", boxShadow: "none" },
      }
    : undefined;

  return (
    <section
      className={`${styles.section} ${compact ? "initiative-support-form" : ""}`}
      id="support-request-form"
      aria-labelledby="support-request-form-title"
      style={compactStyles?.section}
    >
      <div className={styles.inner} style={compactStyles?.inner}>
        <header className={styles.heading} style={compactStyles?.heading}>
          <span className={styles.eyebrow}>We are here to help</span>
          <h2 id="support-request-form-title">Request a Support</h2>
          <p>Share a few details so our team can understand your need and guide you to the right support.</p>
        </header>

        {deliveryHref ? (
          <div className={styles.deliveryPanel} role="status">
            <span className={styles.deliveryIcon}><Check size={23} aria-hidden="true" /></span>
            <h3>Your request is ready to send</h3>
            <p>
              This website does not yet have a service to receive and store support requests. Your email app will open with the request details. The request is sent only after you send that email.
            </p>
            {uploadReference && (
              <p className={styles.uploadNote}>
                {uploadReference.keys.length} document{uploadReference.keys.length === 1 ? "" : "s"} uploaded to private storage. Reference: {uploadReference.requestId}.
              </p>
            )}
            <div className={styles.deliveryActions}>
              <a className={styles.submitButton} href={deliveryHref}>Open email to send request</a>
              <button className={styles.secondaryButton} type="button" onClick={() => setDeliveryHref("")}>Return to form</button>
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={submit} noValidate style={compactStyles?.form}>
            <fieldset className={styles.group}>
              <legend>Your contact details</legend>
              <div className={styles.grid}>
                <label className={styles.field} htmlFor="support-request-fullName">
                  <span>Full Name *</span>
                  <input id="support-request-fullName" autoComplete="name" maxLength={120} required value={contact.fullName} onChange={(event) => updateContact("fullName", event.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "support-request-fullName-error" : undefined} />
                  {errors.fullName && <span className={styles.fieldError} id="support-request-fullName-error">{errors.fullName}</span>}
                </label>
                <label className={styles.field} htmlFor="support-request-mobileNumber">
                  <span>Mobile Number *</span>
                  <input id="support-request-mobileNumber" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" maxLength={30} required value={contact.mobileNumber} onChange={(event) => updateContact("mobileNumber", event.target.value)} aria-invalid={Boolean(errors.mobileNumber)} aria-describedby={errors.mobileNumber ? "support-request-mobileNumber-error" : undefined} />
                  {errors.mobileNumber && <span className={styles.fieldError} id="support-request-mobileNumber-error">{errors.mobileNumber}</span>}
                </label>
                <label className={styles.field} htmlFor="support-request-emailAddress">
                  <span>Email Address (optional)</span>
                  <input id="support-request-emailAddress" type="email" autoComplete="email" maxLength={150} value={contact.emailAddress} onChange={(event) => updateContact("emailAddress", event.target.value)} aria-invalid={Boolean(errors.emailAddress)} aria-describedby={errors.emailAddress ? "support-request-emailAddress-error" : undefined} />
                  {errors.emailAddress && <span className={styles.fieldError} id="support-request-emailAddress-error">{errors.emailAddress}</span>}
                </label>
                <label className={styles.field} htmlFor="support-request-city">
                  <span>City / Location *</span>
                  <input id="support-request-city" autoComplete="address-level2" required value={contact.city} onChange={(event) => updateContact("city", event.target.value)} aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? "support-request-city-error" : undefined} />
                  {errors.city && <span className={styles.fieldError} id="support-request-city-error">{errors.city}</span>}
                </label>
                <label className={`${styles.field} ${styles.wide}`} htmlFor="support-request-category">
                  <span>Select Support Category *</span>
                  <select
                    id="support-request-category"
                    required
                    value={category}
                    onChange={async (event) => {
                      const nextCategory = event.target.value;
                      if (nextCategory !== category) {
                        if (!(await clearUploadedFiles())) return;
                        setFiles([]);
                        setDocumentConsent(false);
                      }
                      setCategory(nextCategory);
                      setErrors((current) => {
                        const next = { ...current };
                        delete next.category;
                        delete next.documentConsent;
                        delete next.documents;
                        return next;
                      });
                      setFormError("");
                    }}
                    aria-invalid={Boolean(errors.category)}
                    aria-describedby={errors.category ? "support-request-category-error" : undefined}
                  >
                    <option value="">Choose the type of support you need</option>
                    {categories.map((item) => <option value={item.title} key={item.title}>{item.title}</option>)}
                  </select>
                  {errors.category && <span className={styles.fieldError} id="support-request-category-error">{errors.category}</span>}
                </label>
              </div>
            </fieldset>

            {currentCategory && (
              <fieldset className={styles.group}>
                <legend>{currentCategory.title} details</legend>
                <div className={styles.grid}>
                  {currentCategory.fields.map(renderField)}
                  <div className={`${styles.uploadArea} ${styles.wide}`}>
                    <label className={styles.field} htmlFor="support-request-files">
                      <span>{currentCategory.uploadLabel} *</span>
                      <input
                        id="support-request-files"
                        type="file"
                        required
                        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                        multiple
                        onChange={handleFilesChange}
                      />
                      <small>
                        Required: upload at least one document relevant to
                        {` ${currentCategory.title}`}. PDF, JPG or PNG · up to
                        5 files · 10 MB each, 30 MB total. Do not upload
                        unrelated identity documents.
                      </small>
                    </label>
                    {files.length > 0 && (
                      <ul className={styles.fileList}>
                        {files.map((file, index) => (
                          <li key={`${file.name}-${file.lastModified}-${index}`}>
                            <span><FileText size={15} aria-hidden="true" />{file.name}</span>
                            <button type="button" aria-label={`Remove ${file.name}`} onClick={async () => {
                              if (!(await clearUploadedFiles())) return;
                              const remainingFiles = files.filter((item) => item !== file);
                              setFiles(remainingFiles);
                              if (!remainingFiles.length) setDocumentConsent(false);
                            }}>
                              <Trash2 size={15} aria-hidden="true" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    {files.length > 0 && (
                      <label className={styles.checkbox} htmlFor="support-request-documentConsent">
                        <input id="support-request-documentConsent" type="checkbox" checked={documentConsent} onChange={(event) => setDocumentConsent(event.target.checked)} />
                        <span>I agree to share these documents with the foundation to assess my request.</span>
                      </label>
                    )}
                    {errors.documentConsent && <span className={styles.fieldError}>{errors.documentConsent}</span>}
                    {errors.documents && <span className={styles.fieldError} id="support-request-documents-error">{errors.documents}</span>}
                  </div>
                </div>
              </fieldset>
            )}

            <label className={`${styles.checkbox} ${styles.contactConsent}`} htmlFor="support-request-consent">
              <input id="support-request-consent" type="checkbox" required checked={contact.consent} onChange={(event) => updateContact("consent", event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "support-request-consent-error" : undefined} />
              <span>I give permission for Trimurthi Foundation to contact me about this support request. *</span>
            </label>
            {errors.consent && <span className={styles.fieldError} id="support-request-consent-error">{errors.consent}</span>}
            {formError && <p className={styles.formError} role="alert">{formError}</p>}
            {!deliveryHref && (
              <p className={styles.backendNote}>
                Online request delivery is not connected yet. Submitting prepares an email for you to review and send.
              </p>
            )}
            <button className={styles.submitButton} type="submit" disabled={submitting}>
              {submitting ? "Preparing request..." : "Submit Support Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
