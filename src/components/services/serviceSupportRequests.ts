import {
  BookOpen,
  HeartPulse,
  Leaf,
  Landmark,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import type { SupportRequestConfig, SupportRequestField } from "@/components/home/SupportRequestModal";

export type ServiceSupportCategory =
  | "Education & Empowerment"
  | "Healthcare Support"
  | "Annadhan & Nutrition"
  | "Stand with our Soldiers"
  | "Environment & Welfare"
  | "Culture & Heritage";

const messageField: SupportRequestField = {
  name: "situation",
  label: "Briefly Describe Your Situation / Requirement",
  type: "textarea",
  placeholder: "Share the details that will help us understand your request.",
};

const serviceSupportRequests: Record<ServiceSupportCategory, SupportRequestConfig> = {
  "Education & Empowerment": {
    title: "Education & Empowerment",
    description: "Tell us about the student's education needs and the support required.",
    image: "/education_empowerment.png",
    alt: "A student learning with classmates",
    icon: BookOpen,
    documentSuggestions: ["School or college ID, current fee receipt, or admission proof"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      { name: "studentName", label: "Student's Full Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", min: 3, max: 100 },
      { name: "educationLevel", label: "Current Class / Education Level", type: "text" },
      { name: "schoolName", label: "School / College Name", type: "text" },
      {
        name: "educationSupport",
        label: "Type of Support Required",
        type: "select",
        required: true,
        options: ["School Fees", "Books & Stationery", "Uniform", "Digital Learning", "Skill Development", "Other"],
      },
      { name: "financialAssistance", label: "Total Financial Assistance Required (₹)", type: "number", min: 0 },
      messageField,
    ],
  },
  "Healthcare Support": {
    title: "Healthcare Support",
    description: "Share the patient's care needs so our team can understand the request.",
    image: "/health support.png",
    alt: "A healthcare worker providing community care",
    icon: HeartPulse,
    documentSuggestions: ["Recent medical report or prescription; include a treatment estimate if available"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      { name: "patientName", label: "Patient's Full Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", min: 0, max: 120 },
      { name: "diagnosis", label: "Medical Condition / Diagnosis", type: "text", required: true },
      { name: "hospital", label: "Hospital / Healthcare Centre Name", type: "text" },
      { name: "treatment", label: "Treatment Required", type: "text", required: true },
      {
        name: "healthcareSupport",
        label: "Type of Assistance",
        type: "select",
        required: true,
        options: ["Medical Expenses", "Medicines", "Tests / Diagnostics", "Surgery", "Hospitalisation", "Other"],
      },
      { name: "treatmentCost", label: "Estimated Treatment Cost (₹)", type: "number", min: 0 },
      { name: "assistanceAmount", label: "Amount of Assistance Required (₹)", type: "number", min: 0 },
      messageField,
    ],
  },
  "Annadhan & Nutrition": {
    title: "Annadhan & Nutrition",
    description: "Tell us who needs food support, where it is needed, and when.",
    image: "/annadhan_nutrition.png",
    alt: "A volunteer serving a community meal",
    icon: Utensils,
    documentSuggestions: ["A brief beneficiary or organisation note, or a distribution plan"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      { name: "applicantOrganisation", label: "Applicant / Organisation Name", type: "text", required: true },
      { name: "peopleCount", label: "Number of People Requiring Food Support", type: "number", required: true, min: 1 },
      {
        name: "beneficiaryType",
        label: "Beneficiary Type",
        type: "select",
        required: true,
        options: ["Children", "Elderly People", "Families in Need", "Homeless People", "Community Group", "Other"],
      },
      {
        name: "foodSupport",
        label: "Type of Support",
        type: "select",
        required: true,
        options: ["Food Rations", "Cooked Meals", "Nutrition Kits", "Community Meal Distribution", "Other"],
      },
      { name: "requiredDate", label: "Required Date / Duration", type: "text", placeholder: "For example, 20 June or 2 weeks" },
      { name: "deliveryLocation", label: "Delivery Location", type: "text", required: true },
      messageField,
    ],
  },
  "Stand with our Soldiers": {
    title: "Stand with our Soldiers",
    description: "Share the situation and the assistance needed for a service member or their family.",
    image: "/soldiers-family.webp",
    alt: "A soldier spending time with family",
    icon: ShieldCheck,
    documentSuggestions: ["Service ID / discharge record or a document showing the applicant's relationship, as applicable"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      { name: "applicantName", label: "Applicant's Full Name", type: "text", required: true },
      { name: "relationship", label: "Relationship to the Soldier (if applicable)", type: "text" },
      { name: "soldierName", label: "Soldier's Name", type: "text" },
      { name: "serviceDetails", label: "Service Details / Unit", type: "text" },
      {
        name: "soldierSupport",
        label: "Type of Support Required",
        type: "select",
        required: true,
        options: ["Family Assistance", "Education for Dependents", "Medical Support", "Emergency Financial Assistance", "Welfare Support", "Other"],
      },
      { name: "serviceLocation", label: "Location", type: "text", required: true },
      messageField,
    ],
  },
  "Environment & Welfare": {
    title: "Environment & Welfare",
    description: "Describe the initiative, its location, and the resources or assistance required.",
    image: "/environment_welfare.png",
    alt: "A community member planting a tree",
    icon: Leaf,
    documentSuggestions: ["A short project proposal or activity plan with the proposed location"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      { name: "applicantOrganisation", label: "Applicant / Organisation Name", type: "text", required: true },
      {
        name: "initiativeType",
        label: "Type of Initiative",
        type: "select",
        required: true,
        options: ["Tree Plantation", "Environmental Cleanup", "Water Conservation", "Animal Welfare", "Community Welfare", "Other"],
      },
      { name: "projectLocation", label: "Project / Initiative Location", type: "text", required: true },
      { name: "beneficiaries", label: "Number of People / Beneficiaries", type: "number", min: 0 },
      { name: "projectDate", label: "Expected Project Date", type: "date" },
      { name: "resources", label: "Resources or Assistance Required", type: "textarea" },
      messageField,
    ],
  },
  "Culture & Heritage": {
    title: "Culture & Heritage",
    description: "Tell us about the heritage or cultural project and the support you need.",
    image: "/culture_heritage.png",
    alt: "A cultural performer at a heritage site",
    icon: Landmark,
    documentSuggestions: ["A short project/event proposal or site details showing the request context"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      { name: "applicantOrganisation", label: "Applicant / Organisation Name", type: "text", required: true },
      {
        name: "initiativeType",
        label: "Type of Initiative",
        type: "select",
        required: true,
        options: ["Heritage Conservation", "Cultural Event", "Traditional Arts & Crafts", "Historical Site Preservation", "Community Cultural Programme", "Other"],
      },
      { name: "projectName", label: "Heritage Site / Event / Project Name", type: "text", required: true },
      { name: "projectLocation", label: "Project Location", type: "text", required: true },
      { name: "projectDate", label: "Expected Date", type: "date" },
      {
        name: "cultureSupport",
        label: "Type of Support Required",
        type: "select",
        required: true,
        options: ["Financial Assistance", "Materials / Resources", "Event Support", "Awareness & Promotion", "Volunteer Support", "Other"],
      },
      messageField,
    ],
  },
};

export default serviceSupportRequests;
