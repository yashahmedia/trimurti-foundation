import {
  BookOpen,
  HeartPulse,
  Leaf,
  Landmark,
  LifeBuoy,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import type { SupportRequestConfig, SupportRequestField } from "@/components/home/SupportRequestModal";

export type ServiceSupportCategory =
  | "Education & Empowerment"
  | "Healthcare Support"
  | "Annadhan & Nutrition"
  | "Elderly Care"
  | "Stand with our Soldiers"
  | "Environment & Welfare"
  | "Culture & Heritage"
  | "General Support";

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
    documentSuggestions: ["Current school/college fee receipt, admission proof, or education expense estimate"],
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
    documentSuggestions: ["Recent medical report or prescription; upload a hospital treatment or cost estimate when requesting financial assistance"],
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
    documentSuggestions: ["Beneficiary/organisation note, food distribution plan, or food quantity/cost estimate"],
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
  "Elderly Care": {
    title: "Elderly Care",
    description: "Tell us about the older adult who needs support and the care or assistance that would help.",
    image: "/elderly_care.png",
    alt: "An older adult receiving compassionate care",
    icon: HeartPulse,
    documentSuggestions: ["Care plan or doctor’s prescription/medical note relevant to the requested elderly care"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      { name: "elderlyName", label: "Older Adult's Full Name", type: "text", required: true },
      { name: "age", label: "Age", type: "number", min: 50, max: 120 },
      { name: "relationship", label: "Your Relationship to the Older Adult", type: "text" },
      {
        name: "elderlySupport",
        label: "Type of Support Required",
        type: "select",
        required: true,
        options: ["Companionship", "Daily Care", "Healthcare Access", "Daily Essentials", "Community Activities", "Other"],
      },
      { name: "careNeeds", label: "Care Needs / Additional Information", type: "textarea", required: true, placeholder: "Describe the support needed." },
      messageField,
    ],
  },
  "Stand with our Soldiers": {
    title: "Stand with our Soldiers",
    description: "Share the situation and the assistance needed for a service member or their family.",
    image: "/soldiers-family.webp",
    alt: "A soldier spending time with family",
    icon: ShieldCheck,
    documentSuggestions: ["Service/discharge record or a document confirming the applicant’s relationship to the service member, as applicable"],
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
    documentSuggestions: ["Project proposal/activity plan, location details, or an estimate for the requested environmental/community work"],
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
    documentSuggestions: ["Cultural event/project proposal, heritage-site details, or a conservation/material estimate"],
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
  "General Support": {
    title: "General Support",
    description: "Tell us who needs help, what kind of support is needed, and how we can reach you.",
    image: "/life.png",
    alt: "A community member offering a helping hand",
    icon: LifeBuoy,
    documentSuggestions: ["A document related to the selected support need, such as a medical estimate, education fee note, or project proposal"],
    requiredDocuments: true,
    includeHouseholdFields: false,
    fields: [
      {
        name: "supportArea",
        label: "Area of Support",
        type: "select",
        required: true,
        options: [
          "Education",
          "Healthcare",
          "Food & Nutrition",
          "Elderly Care",
          "Soldiers and Families",
          "Environment & Community Welfare",
          "Culture & Heritage",
          "Emergency Support",
          "Other",
        ],
      },
      { name: "beneficiaryName", label: "Name of Person / Organisation Needing Support", type: "text", required: true },
      {
        name: "urgency",
        label: "When Is Support Needed?",
        type: "select",
        required: true,
        options: ["As soon as possible", "Within a week", "Not urgent"],
      },
      { name: "situation", label: "How Can We Help?", type: "textarea", required: true, placeholder: "Briefly describe the situation and support needed." },
    ],
  },
};

export default serviceSupportRequests;

export function getSupportRequestForPath(pathname: string): SupportRequestConfig {
  const servicePaths: Array<[string, ServiceSupportCategory]> = [
    ["/services/education", "Education & Empowerment"],
    ["/services/healthcare", "Healthcare Support"],
    ["/services/nutrition", "Annadhan & Nutrition"],
    ["/services/elderly-care", "Elderly Care"],
    ["/services/standing-with-soldiers", "Stand with our Soldiers"],
    ["/services/environment-welfare", "Environment & Welfare"],
    ["/services/culture-heritage", "Culture & Heritage"],
  ];
  const match = servicePaths.find(([path]) => pathname.startsWith(path));
  return serviceSupportRequests[match?.[1] ?? "General Support"];
}
