"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  BookOpenCheck,
  Banknote,
  CalendarDays,
  Clock3,
  FileText,
  FileUp,
  HeartHandshake,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import {
  lockPageScroll,
  type PageScrollPosition,
} from "@/lib/page-scroll-lock";
import {
  maxFiles,
  maxTotalSize,
  uploadSupportingDocuments,
  type UploadReference,
  validateSupportingFile,
} from "@/lib/support-request-uploads";
import styles from "./SupportRequestModal.module.css";

export type SupportRequestField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "date" | "select" | "textarea";
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
  documentSuggestions: string[];
  requiredDocuments?: boolean;
  includeHouseholdFields?: boolean;
};

type SupportRequestModalProps = {
  request: SupportRequestConfig;
  onClose: () => void;
  scrollPosition: PageScrollPosition;
};

type FormValues = Record<string, string>;
type FormErrors = Record<string, string>;

function getFieldIcon(name: string): LucideIcon {
  if (name === "email") return Mail;
  if (name === "phone") return Phone;
  if (name === "occupation") return BriefcaseBusiness;
  if (name === "monthlyIncome") return Banknote;
  if (name === "age" || name === "familyMembers") return CalendarDays;
  if (name === "location" || name === "schoolLocation" || name === "city") return MapPin;
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
    placeholder: "you@example.com",
  },
  {
    name: "phone",
    label: "Mobile Number",
    type: "tel",
    required: true,
    placeholder: "+91 98765 43210",
  },
  {
    name: "city",
    label: "City / Location",
    type: "text",
    required: true,
    placeholder: "Your city or location",
  },
];

const householdFields: SupportRequestField[] = [
  {
    name: "occupation",
    label: "Applicant / Guardian’s Profession",
    type: "text",
    placeholder: "For example, teacher, farm worker, homemaker",
  },
  {
    name: "monthlyIncome",
    label: "Approx. Monthly Household Income",
    type: "select",
    options: [
      "No current income",
      "Under ₹5,000",
      "₹5,000–₹10,000",
      "₹10,001–₹20,000",
      "₹20,001–₹40,000",
      "Above ₹40,000",
      "Prefer not to say",
    ],
    placeholder: "Select an income range (optional)",
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
  scrollPosition,
}: SupportRequestModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formValues, setFormValues] = useState<FormValues>({});
  const [emailHref, setEmailHref] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [documentConsent, setDocumentConsent] = useState(false);
  const [contactConsent, setContactConsent] = useState(false);
  const [fileError, setFileError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadReference, setUploadReference] =
    useState<UploadReference | null>(null);
  const Icon = request.icon;
  const fields = [
    ...contactFields,
    ...(request.includeHouseholdFields === false ? [] : householdFields),
    ...request.fields,
  ];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement;
    const restorePageScroll = lockPageScroll(scrollPosition);
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
      if (dialog.open) dialog.close();
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
      restorePageScroll();
    };
  }, [scrollPosition]);

  function addFiles(fileList: FileList | null) {
    if (!fileList?.length) return;
    const incoming = Array.from(fileList);
    const nextFiles = [...selectedFiles, ...incoming];
    if (nextFiles.length > maxFiles) {
      setFileError(`Choose no more than ${maxFiles} documents.`);
      return;
    }
    const invalidFile = incoming.map(validateSupportingFile).find(Boolean);
    if (invalidFile) {
      setFileError(invalidFile);
      return;
    }
    if (nextFiles.reduce((total, file) => total + file.size, 0) > maxTotalSize) {
      setFileError("The total size of all documents must be 30 MB or less.");
      return;
    }
    setSelectedFiles(nextFiles);
    setUploadReference(null);
    setFileError("");
  }

  function removeFile(fileToRemove: File) {
    setSelectedFiles((current) =>
      current.filter((file) => file !== fileToRemove),
    );
    setUploadReference(null);
    setFileError("");
    if (selectedFiles.length <= 1) setDocumentConsent(false);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
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
    if (!contactConsent) {
      setFileError("Please agree to be contacted about this support request.");
      dialogRef.current
        ?.querySelector<HTMLInputElement>("#support-contact-consent")
        ?.focus();
      return;
    }
    if (request.requiredDocuments && selectedFiles.length === 0) {
      setFileError("At least one supporting document is required to continue.");
      dialogRef.current
        ?.querySelector<HTMLInputElement>("#support-document-upload")
        ?.focus();
      return;
    }
    if (selectedFiles.length && !documentConsent) {
      setFileError(
        "Please confirm that you agree to share the selected documents for this support request.",
      );
      dialogRef.current
        ?.querySelector<HTMLInputElement>("#support-document-consent")
        ?.focus();
      return;
    }

    setIsUploading(true);
    setFileError("");
    try {
      const reference = selectedFiles.length
        ? uploadReference?.keys.length === selectedFiles.length
          ? uploadReference
          : await uploadSupportingDocuments(request.title, selectedFiles)
        : null;
      const subject = encodeURIComponent(`Support request — ${request.title}`);
      const body = encodeURIComponent(
        [
          `Support category: ${request.title}`,
          "",
          ...fields.map(
            (field) =>
              `${field.label}: ${values[field.name] || "Not provided"}`,
          ),
          ...(reference
            ? [
                "",
                "Private document upload reference:",
                `Request ID: ${reference.requestId}`,
                ...reference.keys.map((key, index) => `Document ${index + 1}: ${key}`),
                "Documents are stored in the foundation’s private storage and are not attached to this email.",
                "Applicant consented to share the uploaded documents for this request.",
              ]
            : []),
        ].join("\n"),
      );
      setUploadReference(reference);
      setEmailHref(`mailto:${site.email}?subject=${subject}&body=${body}`);
    } catch (error) {
      setFileError(
        error instanceof Error
          ? error.message
          : "The request could not be prepared. Please try again.",
      );
    } finally {
      setIsUploading(false);
    }
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
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
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
                    The website does not send support requests automatically.
                    Open your email app and send the prepared message to our
                    team to complete your request.
                  </p>
                  {uploadReference && (
                    <p className={styles.uploadConfirmation}>
                      {uploadReference.keys.length} document
                      {uploadReference.keys.length === 1 ? "" : "s"} uploaded
                      to private storage. Reference:{" "}
                      <strong>{uploadReference.requestId}</strong>. The email
                      includes the private file references, not attachments.
                    </p>
                  )}
                  <a
                    className={styles.submitButton}
                    href={emailHref}
                  >
                    Open email app <ArrowRight size={17} />
                  </a>
                  <button
                    className={styles.editButton}
                    type="button"
                    onClick={() => {
                      setEmailHref("");
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
                    {request.requiredDocuments && (
                      <p>
                        At least one supporting document is required. The
                        request is completed only after you send the prepared
                        email to our team.
                      </p>
                    )}
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
                    <section
                      className={styles.documentsSection}
                      aria-labelledby="support-documents-title"
                    >
                      <div className={styles.documentsHeading}>
                        <span className={styles.fieldLabel}>
                          <FileText size={14} aria-hidden="true" />
                          <span id="support-documents-title">
                            Supporting documents
                            {request.requiredDocuments ? " *" : " (optional)"}
                          </span>
                        </span>
                        <p>
                          Examples for this request:
                          {" "}
                          {request.documentSuggestions.join(" · ")}
                        </p>
                      </div>
                      <label
                        className={styles.filePicker}
                        htmlFor="support-document-upload"
                      >
                        <FileUp size={19} aria-hidden="true" />
                        <span>
                          <strong>Choose documents</strong>
                          <small>
                            PDF, JPG or PNG · up to 5 files · 10 MB each
                          </small>
                        </span>
                        <input
                          id="support-document-upload"
                          className={styles.visuallyHidden}
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                          multiple
                          aria-describedby={
                            fileError ? "support-documents-error" : undefined
                          }
                          onChange={(event) => {
                            addFiles(event.currentTarget.files);
                            event.currentTarget.value = "";
                          }}
                        />
                      </label>
                      {selectedFiles.length > 0 && (
                        <ul className={styles.fileList} aria-label="Selected documents">
                          {selectedFiles.map((file, index) => (
                            <li
                              className={styles.fileItem}
                              key={`${file.name}-${file.lastModified}-${index}`}
                            >
                              <span>
                                <FileText size={15} aria-hidden="true" />
                                {file.name}
                                <small>
                                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                                </small>
                              </span>
                              <button
                                type="button"
                                aria-label={`Remove ${file.name}`}
                                onClick={() => removeFile(file)}
                              >
                                <Trash2 size={15} />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                      <p className={styles.documentPrivacy}>
                        Do not upload documents you were not asked for. If an
                        Aadhaar copy is necessary, mask the first 8 digits
                        before uploading. Files are kept in private storage
                        and are not attached to the email.
                      </p>
                      <label className={styles.consentLabel}>
                        <input
                          id="support-contact-consent"
                          type="checkbox"
                          checked={contactConsent}
                          onChange={(event) => {
                            setContactConsent(event.currentTarget.checked);
                            setFileError("");
                          }}
                          aria-invalid={Boolean(fileError && !contactConsent)}
                        />
                        <span>
                          I give Trimurti Foundation permission to contact me
                          about this support request.
                        </span>
                      </label>
                      {selectedFiles.length > 0 && (
                        <label className={styles.consentLabel}>
                          <input
                            id="support-document-consent"
                            type="checkbox"
                            checked={documentConsent}
                            onChange={(event) => {
                              setDocumentConsent(event.currentTarget.checked)
                              setFileError("");
                            }}
                            aria-invalid={Boolean(fileError && !documentConsent)}
                          />
                          <span>
                            I agree to share these documents for the purpose
                            of assessing this support request.
                          </span>
                        </label>
                      )}
                      {fileError && (
                        <p
                          className={styles.fieldError}
                          id="support-documents-error"
                          role="alert"
                        >
                          {fileError}
                        </p>
                      )}
                    </section>
                    <button
                      className={styles.submitButton}
                      type="submit"
                      disabled={isUploading}
                    >
                      {isUploading
                        ? "Uploading documents securely…"
                        : "Submit Support Request"}
                      {!isUploading && <ArrowRight size={17} />}
                    </button>
                    <p className={styles.privacyNote}>
                      <ShieldCheck size={15} />
                      Share only the information needed for your request.
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
      </div>
    </dialog>
  );
}
