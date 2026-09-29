import {
  BookOpenCheck,
  BriefcaseBusiness,
  Handshake,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Leaf,
  ShieldCheck,
  Sprout,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const foundationValues = ["Compassion", "Integrity", "Humility", "Service"];

export const trustPrinciples: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  { title: "Compassion", description: "Humanity at the heart of every action", Icon: HeartHandshake },
  { title: "Integrity", description: "Responsible and transparent service", Icon: ShieldCheck },
  { title: "Community", description: "Creating stronger connections", Icon: UsersRound },
  { title: "Opportunity", description: "Helping people learn, grow and progress", Icon: Sprout },
];

export const foundationPillars: Array<{
  number: string;
  title: string;
  description: string;
  focus: string[];
  Icon: LucideIcon;
  href: string;
}> = [
  {
    number: "01",
    title: "Serving Humanity",
    description: "Supporting individuals and communities through meaningful initiatives that create hope, dignity and opportunity.",
    focus: ["Education & Empowerment", "Healthcare Support", "Nutrition & Community Welfare", "Elderly Care", "Culture & Heritage", "Standing with Our Soldiers"],
    Icon: HeartHandshake,
    href: "#areas-of-impact",
  },
  {
    number: "02",
    title: "Connecting & Empowering Communities",
    description: "Creating trusted connections that allow people to share knowledge, resources and opportunities.",
    focus: ["Professional Connect", "Business Connect", "Service Connect", "Mentorship", "Community Collaboration"],
    Icon: UsersRound,
    href: "#trimurti-connect",
  },
];

export const beliefs: Array<{
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  { number: "01", title: "Support With Dignity", description: "Those who need support receive assistance respectfully.", Icon: HeartHandshake },
  { number: "02", title: "Knowledge Shared", description: "Those with knowledge help others learn and grow.", Icon: BookOpenCheck },
  { number: "03", title: "Resources Create Opportunity", description: "People with resources help open new possibilities.", Icon: Sprout },
  { number: "04", title: "Experience Guides", description: "Mentors and professionals guide others forward.", Icon: Target },
  { number: "05", title: "Communities Grow Together", description: "People come together to strengthen one another.", Icon: UsersRound },
];

export const impactAreas = [
  {
    category: "Learning & opportunity",
    title: "Education & Empowerment",
    description: "Supporting deserving individuals through educational assistance, mentorship, skill development and opportunities that enable them to build a better future.",
    image: "/education_empowerment.png",
    imageAlt: "Education and learning support",
    href: "/services/education",
  },
  {
    category: "Care & wellbeing",
    title: "Healthcare Support",
    description: "Extending assistance and support during medical needs while contributing towards better health and wellbeing.",
    image: "/health support.png",
    imageAlt: "Healthcare support and community wellbeing",
    href: "/services/healthcare",
  },
  {
    category: "Food & community care",
    title: "Nutrition & Community Welfare",
    description: "Supporting initiatives that provide nourishment, care and assistance to those requiring support.",
    image: "/nourish.png",
    imageAlt: "Food and nutrition support",
    href: "/services/nutrition",
  },
  {
    category: "Care across generations",
    title: "Elderly Care",
    description: "Creating a caring ecosystem that supports senior citizens with dignity, companionship and assistance.",
    image: "/elder support.png",
    imageAlt: "Elder support and companionship",
    href: "/services/elderly-care",
  },
  {
    category: "Tradition & belonging",
    title: "Culture & Heritage",
    description: "Keeping shared traditions alive for generations to come.",
    image: "/culture_heritage.png",
    imageAlt: "Indian culture and heritage",
    href: "/services/culture-heritage",
  },
  {
    category: "Sustainable communities",
    title: "Environment & Welfare",
    description: "Working together for greener, healthier and more connected neighbourhoods.",
    image: "/environment_welfare.png",
    imageAlt: "Environmental care and community welfare",
    href: "/services/environment-welfare",
  },
];

export const connectAreas: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
}> = [
  {
    title: "Professional Connect",
    description: "Share knowledge, provide guidance, create mentorship opportunities and support one another.",
    Icon: BriefcaseBusiness,
    href: "/community/professional-connect",
  },
  {
    title: "Business Connect",
    description: "Enable entrepreneurs and businesses to build relationships and explore opportunities for mutual growth.",
    Icon: Handshake,
    href: "/community/business-connect",
  },
  {
    title: "Service Connect",
    description: "Connect individuals with trusted service providers who can support community needs.",
    Icon: HeartPulse,
    href: "/community",
  },
];

export const journeySteps = [
  { number: "01", title: "Listen", description: "Understand what communities truly need." },
  { number: "02", title: "Connect", description: "Bring people, knowledge and resources together." },
  { number: "03", title: "Support", description: "Turn shared purpose into meaningful action." },
  { number: "04", title: "Empower", description: "Create opportunities for people to grow independently." },
  { number: "05", title: "Strengthen", description: "Build communities that continue supporting one another." },
];

export const founders = [
  { initials: "MKS", name: "Mahadevan K Subbaraman", role: "Founder & Trustee", background: "Finance | Management | Business Consulting" },
  { initials: "VKS", name: "Vaidyanathan K Subbaraman", role: "Founder & Trustee", background: "Finance | Wealth Management" },
  { initials: "RKS", name: "Ramanathan K Subbaraman", role: "Founder & Trustee", background: "Banking" },
];

export const governancePrinciples: Array<{ title: string; Icon: LucideIcon }> = [
  { title: "Registered Charitable Trust", Icon: Landmark },
  { title: "Compassion & Integrity", Icon: HeartHandshake },
  { title: "Community-Focused", Icon: UsersRound },
  { title: "Responsible Service", Icon: ShieldCheck },
  { title: "Dignity First", Icon: Leaf },
];
