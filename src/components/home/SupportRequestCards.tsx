"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  HandHeart,
  Heart,
  Leaf,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SupportRequestModal, {
  type SupportRequestConfig,
  type SupportRequestField,
} from "./SupportRequestModal";
import type { PageScrollPosition } from "@/lib/page-scroll-lock";
import styles from "./SupportRequestModal.module.css";

type SupportCategory = SupportRequestConfig & {
  iconName: string;
};

const messageField: SupportRequestField = {
  name: "message",
  label: "Message / Additional Information",
  type: "textarea",
  placeholder: "Share any other details that may help us support you.",
};

const supportCategories: SupportCategory[] = [
  {
    title: "Education for Children & Students",
    description:
      "Help us provide quality education, school supplies and learning opportunities for children and students.",
    image: "/education.png",
    alt: "A school student with books",
    icon: BookOpen,
    iconName: "school",
    documentSuggestions: [
      "School or college ID / fee receipt",
      "Education expense estimate",
      "Masked income or ration-card proof, if available",
    ],
    fields: [
      { name: "studentName", label: "Student/Child Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", min: 3, max: 100 },
      { name: "schoolLocation", label: "School / Location", type: "text", required: true },
      {
        name: "supportType",
        label: "Type of Educational Support",
        type: "select",
        required: true,
        options: ["School supplies", "Tuition support", "Learning materials", "Other"],
      },
      messageField,
    ],
  },
  {
    title: "Support for Elderly People",
    description:
      "Help us provide care, companionship and essential support to help elderly individuals live with dignity and wellness.",
    image: "/elder.webp",
    alt: "An elderly community member receiving care",
    icon: Users,
    iconName: "elder",
    documentSuggestions: [
      "Masked identity or age proof, if required",
      "Doctor’s prescription or care note",
      "Pension or income proof, if available",
    ],
    fields: [
      { name: "elderlyName", label: "Elderly Person’s Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", min: 50, max: 120 },
      { name: "location", label: "Location", type: "text", required: true },
      {
        name: "supportType",
        label: "Type of Support Needed",
        type: "select",
        required: true,
        options: ["Companionship", "Daily essentials", "Healthcare access", "Other"],
      },
      messageField,
    ],
  },
  {
    title: "Healthcare Support",
    description:
      "Help us provide access to medical treatment, medicines and healthcare services when they need it most.",
    image: "/health2.jpg",
    alt: "A patient receiving healthcare support",
    icon: Heart,
    iconName: "health",
    documentSuggestions: [
      "Medical report or doctor’s prescription",
      "Hospital bill, medicine receipt or cost estimate",
      "Masked identity proof, only if required",
    ],
    fields: [
      { name: "patientName", label: "Patient Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", min: 0, max: 120 },
      { name: "location", label: "Location", type: "text", required: true },
      {
        name: "supportType",
        label: "Type of Healthcare Support",
        type: "select",
        required: true,
        options: ["Medical treatment", "Medicines", "Healthcare services", "Other"],
      },
      {
        name: "urgency",
        label: "Urgency",
        type: "select",
        required: true,
        options: ["Routine", "Soon", "Urgent"],
      },
      messageField,
    ],
  },
  {
    title: "Food & Essentials",
    description:
      "Help us provide nutritious food, clean water and daily essentials to families facing hunger and hardship.",
    image: "/food.jpg",
    alt: "A family receiving food and essential supplies",
    icon: Leaf,
    iconName: "food",
    documentSuggestions: [
      "Ration-card or household proof, if available",
      "Income or work proof, if available",
      "Receipt or estimate for essential expenses",
    ],
    fields: [
      { name: "familyName", label: "Family/Beneficiary Name", type: "text", required: true },
      {
        name: "familyMembers",
        label: "Number of Family Members",
        type: "number",
        required: true,
        min: 1,
        max: 100,
      },
      { name: "location", label: "Location", type: "text", required: true },
      {
        name: "essentialsType",
        label: "Type of Essentials Needed",
        type: "select",
        required: true,
        options: ["Food", "Clean water", "Daily essentials", "Multiple needs"],
      },
      messageField,
    ],
  },
  {
    title: "Opportunities for Women",
    description:
      "Help us empower women with skills, training and resources to build independence and a safer future.",
    image: "/WOMAN.jpg",
    alt: "Women taking part in a community programme",
    icon: TrendingUp,
    iconName: "women",
    documentSuggestions: [
      "Education or skill-training certificate",
      "Income or livelihood proof, if available",
      "Masked identity proof, only if required",
    ],
    fields: [
      { name: "applicantName", label: "Applicant Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", min: 18, max: 120 },
      { name: "location", label: "Location", type: "text", required: true },
      {
        name: "opportunity",
        label: "Opportunity / Support Needed",
        type: "select",
        required: true,
        options: ["Skills training", "Mentorship", "Livelihood support", "Other"],
      },
      messageField,
    ],
  },
  {
    title: "Emergency & Crisis Support",
    description:
      "Help us provide immediate relief and long-term help to families affected by disasters, conflict or other emergencies.",
    image: "/We provide.jpeg",
    alt: "Community members supporting a family in need",
    icon: HandHeart,
    iconName: "support",
    documentSuggestions: [
      "Medical report or prescription, if relevant",
      "Hospital bill, repair receipt or expense estimate",
      "Incident or disaster-related proof, if available",
    ],
    fields: [
      { name: "personFamilyName", label: "Person/Family Name", type: "text", required: true },
      { name: "location", label: "Location", type: "text", required: true },
      {
        name: "emergencyType",
        label: "Type of Emergency",
        type: "select",
        required: true,
        options: ["Natural disaster", "Medical crisis", "Loss of essentials", "Other"],
      },
      {
        name: "urgency",
        label: "Urgency Level",
        type: "select",
        required: true,
        options: ["Immediate", "Within 24 hours", "Ongoing support"],
      },
      {
        name: "immediateSupport",
        label: "Immediate Support Needed",
        type: "text",
        required: true,
        placeholder: "What is needed right now?",
      },
      messageField,
    ],
  },
];

const categoryIcons: Record<string, LucideIcon> = {
  school: BookOpen,
  elder: Users,
  health: Heart,
  food: Leaf,
  women: TrendingUp,
  support: HandHeart,
};

export default function SupportRequestCards() {
  const [selectedRequest, setSelectedRequest] =
    useState<SupportCategory | null>(null);
  const [scrollPosition, setScrollPosition] = useState<PageScrollPosition>({
    x: 0,
    y: 0,
  });

  return (
    <>
      <div className="support-request-cards">
        {supportCategories.map((item) => {
          const Icon = categoryIcons[item.iconName];
          return (
            <button
              className={`support-request-card philosophy-card ${styles.supportCard}`}
              key={item.title}
              type="button"
              aria-haspopup="dialog"
              aria-label={`Open support request: ${item.title}`}
              onClick={() => {
                setScrollPosition({
                  x: window.scrollX,
                  y: window.scrollY,
                });
                setSelectedRequest(item);
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 22vw"
                className="philosophy-card-image"
              />
              <span className="philosophy-card-overlay" aria-hidden="true" />
              <span className="philosophy-card-content">
                <span
                  className={`philosophy-icon-badge support-request-card-icon-${item.iconName}`}
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
                <span className="philosophy-card-link">
                  Request support <ArrowUpRight size={14} />
                </span>
              </span>
            </button>
          );
        })}
      </div>
      {selectedRequest && (
        <SupportRequestModal
          request={selectedRequest}
          scrollPosition={scrollPosition}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </>
  );
}
