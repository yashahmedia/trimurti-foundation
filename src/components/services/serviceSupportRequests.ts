import {
  BookOpen,
  HeartPulse,
  Leaf,
  Landmark,
  LifeBuoy,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import type {
  SupportRequestConfig,
  SupportRequestField,
} from "@/components/home/SupportRequestModal";

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
    documents: [
      {
        id: "identityProof",
        label: "Aadhaar Card / Identity Proof",
        description:
          "Upload a masked Aadhaar or another accepted identity document.",
        required: true,
      },
      {
        id: "educationFeeReceipt",
        label: "School/College Fee Receipt",
        description: "Upload the current fee receipt for the student's school or college.",
        required: true,
      },
      {
        id: "educationAdmissionProof",
        label: "Admission Letter / Bonafide Certificate",
        description: "Provide a current admission letter or bonafide certificate.",
        required: true,
      },
      {
        id: "educationFeeEstimate",
        label: "Fee Structure / Education Expense Estimate",
        description: "Include the fee structure or an estimate of the education costs requested.",
        required: true,
      },
    ],
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
    documents: [
      {
        id: "identityProof",
        label: "Identity Proof",
        description:
          "Upload a masked Aadhaar or another accepted identity document.",
        required: true,
      },
      {
        id: "medicalReports",
        label: "Doctor’s Prescription / Medical Reports",
        description: "Upload the current prescription or medical reports related to the treatment.",
        required: true,
      },
      {
        id: "hospitalEstimate",
        label: "Hospital Estimate / Treatment Cost Estimate",
        description: "Provide the hospital or care provider's estimate for the requested treatment.",
        required: true,
      },
      {
        id: "hospitalAdmissionRecord",
        label: "Hospital Admission Record / Discharge Summary",
        description: "Upload the hospital admission record or discharge summary.",
        required: true,
      },
    ],
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
    documents: [
      {
        id: "identityProof",
        label: "Identity Proof",
        description: "Upload identity proof for the applicant or beneficiary.",
        required: true,
      },
      {
        id: "familyIncomeProof",
        label: "Family Income Proof / BPL Card / Ration Card",
        description:
          "Upload family income proof, a BPL card, or a ration card.",
        required: true,
      },
      {
        id: "nutritionRequirement",
        label: "Food or Nutrition Support Requirement Details",
        description: "Describe the food or nutrition need, including quantities or distribution details.",
        required: true,
      },
      {
        id: "nutritionRecommendation",
        label: "Recommendation Letter from a Local Authority / Community Organisation",
        description: "Upload a recommendation letter from a local authority or community organisation.",
        required: true,
      },
    ],
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
    documents: [
      {
        id: "elderlyCarePlan",
        label: "Care Plan / Doctor’s Prescription / Medical Note",
        description: "Provide a care or medical document relevant to the requested elderly support.",
        required: true,
      },
    ],
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
    documents: [
      {
        id: "serviceProof",
        label: "Service ID / Ex-Serviceman ID / Other Relevant Service Proof",
        description:
          "Upload a service ID, Ex-Serviceman ID, or other relevant service proof.",
        required: true,
      },
      {
        id: "identityProof",
        label: "Identity Proof of Applicant",
        description: "Upload identity proof for the applicant.",
        required: true,
      },
      {
        id: "soldierExpenseProof",
        label: "Medical Expense / Education Expense / Family Assistance Supporting Documents",
        description:
          "Upload the expense or family assistance documents relevant to the selected support type.",
        required: true,
      },
      {
        id: "unitRecommendation",
        label: "Supporting Letter from the Unit / Relevant Authority / Ex-Servicemen Organisation",
        description: "Upload a supporting letter from the unit, relevant authority, or Ex-Servicemen organisation.",
        required: true,
      },
    ],
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
    documents: [
      {
        id: "identityProof",
        label: "Identity Proof of Applicant / Community Representative",
        description: "Upload identity proof for the applicant or community representative.",
        required: true,
      },
      {
        id: "environmentProposal",
        label: "Project Proposal / Environmental or Welfare Initiative Description",
        description: "Explain the initiative, its activities, location, and intended community benefit.",
        required: true,
      },
      {
        id: "environmentBudget",
        label: "Estimated Budget / Cost Breakdown",
        description: "Provide an itemised estimate of the requested project costs.",
        required: true,
      },
      {
        id: "environmentSiteProof",
        label: "Site Photographs / Location Proof / Supporting Permission Documents",
        description: "Upload site photographs, location proof, or supporting permission documents.",
        required: true,
      },
    ],
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
    documents: [
      {
        id: "identityProof",
        label: "Identity Proof of Applicant / Organisation Representative",
        description: "Upload identity proof for the applicant or organisation representative.",
        required: true,
      },
      {
        id: "cultureProposal",
        label: "Cultural Programme / Heritage Preservation Proposal",
        description: "Describe the programme or preservation work, its activities, and intended outcomes.",
        required: true,
      },
      {
        id: "cultureBudget",
        label: "Estimated Budget / Event Cost Breakdown",
        description: "Provide an itemised estimate of the requested event or project costs.",
        required: true,
      },
      {
        id: "cultureVenueProof",
        label: "Venue Permission / Supporting Photographs / Recommendation Letter",
        description: "Upload venue permission, supporting photographs, or a recommendation letter.",
        required: true,
      },
    ],
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
    documents: [
      {
        id: "generalSupportProof",
        label: "Supporting Document Relevant to the Request",
        description: "Upload one document relevant to the selected support need, if available.",
        required: true,
      },
    ],
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
