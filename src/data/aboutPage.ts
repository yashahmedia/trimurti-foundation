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
  {
    portraitName: "KSM",
    image: "/images/ksm.jpeg",
    name: "Mahadevan K. S.",
    shortName: "KSM",
    role: "Founder & Trustee",
    background: "With over two decades of international professional experience across finance, business management and consulting, Mahadevan brings experience in financial management, business transformation, planning, performance improvement and advisory services. His professional journey across India, the UAE and Europe has provided exposure to organisations, businesses and people from diverse backgrounds.",
  },
  {
    portraitName: "KSV",
    image: "/images/ksv.jpeg",
    name: "Vaidyanathan K. S.",
    shortName: "KSV",
    role: "Founder & Trustee",
    background:
      "Dr. Vaidyanathan is an IIM alumnus, MBA graduate, Doctorate holder in Business Management, CA Finalist, PMP®, and FMVA® professional with over two decades of experience in finance, investment analysis and business management. His doctoral research focused on Investment Analysis and Portfolio Management. Currently pursuing Certified Financial Planner (CFP®) certification, he manages private portfolios and advises family offices on long-term value creation and sustainable wealth management. An active member of IBPC Dubai, Volunteer,ae, Indian People's Forum UAE, and Nabdh Al Emirates Voluntary Association, he supports humanitarian initiatives through the Consulate General of India, Dubai, and ICWC. He regularly participates in blood donation drives and volunteer-led community service  across the UAE.He received Dubai  Chamber’s Certificate of Appreciation  for volunteering on Emirati Humanitarian Work Day and holds CPR and AED Response certification under Dubai Health Authority’s Dubai Heart Safe City Initiative. In 2015, he co-founded VASANTHA UTSAVAM with his brothers to promote Indian classical music, dance, and culture. The festival operates under the patronage of India’s Ministry of Culture and in association with the Consulate General of India, Dubai. Through Trimurthi Charitable Foundation, he advances education, healthcare, cultural preservation, humanitarian assistance, and community welfare through meaningful, sustainable initiatives rooted in service and lifelong learning.",
  },
  {
    portraitName: "KSR",
    image: "/images/ksr.jpeg",
    name: "Ramanathan K. S.",
    shortName: "KSR",
    role: "Founder & Trustee",
    background:
      "Ramanathan holds a Master's degree and has worked in the UAE banking industry for the past 17 years. From a young age, he has been passionate about charitable service, initiating and supporting activities in India and the UAE. He actively volunteers in religious and cultural initiatives and has contributed to several organisations. He believes in upholding and promoting Indian culture and traditions wherever he is in the world. Through the Trimurthi Foundation, he continues his commitment to serving the community and supporting charitable, religious, and cultural causes.",
  },
];

export const governancePrinciples: Array<{ title: string; Icon: LucideIcon }> = [
  { title: "Registered Charitable Trust", Icon: Landmark },
  { title: "Compassion & Integrity", Icon: HeartHandshake },
  { title: "Community-Focused", Icon: UsersRound },
  { title: "Responsible Service", Icon: ShieldCheck },
  { title: "Dignity First", Icon: Leaf },
];
