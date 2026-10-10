type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: Array<{ label: string; href: string; icon?: string; description?: string }>;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/", description: "Overview" },
  {
    label: "Who We Are",
    href: "/about-us",
    description: "Our story and values",
    children: [
      { label: "About Trimurthi Foundation", href: "/about-us#about-foundation", icon: "foundation", description: "Our mission and purpose" },
      { label: "Our Founders", href: "/about-us#founder", icon: "founder", description: "Leadership and vision" },
      { label: "Our journey", href: "/about-us#journey", icon: "journey", description: "The path we have taken" },
      { label: "Mission & vision", href: "/about-us#mission-vision", icon: "mission", description: "What drives us" },
      { label: "Governance & Transparency", href: "/about-us#governance", icon: "governance", description: "Ethics and accountability" },
      { label: "Advisory Board / Team", href: "/about-us#team", icon: "team", description: "People behind the mission" },
    ],
  },
  {
    label: "Transform a Life",
    href: "/initiatives",
    description: "Impact programmes",
    children: [
      { label: "Education & Empowerment", href: "/services/education", icon: "education", description: "Learning and opportunity" },
      { label: "Healthcare Support", href: "/services/healthcare", icon: "healthcare", description: "Access to care" },
      { label: "Annadhan & Nutrition", href: "/services/nutrition", icon: "nutrition", description: "Meals and nourishment" },
      { label: "Stand with our Soldiers", href: "/services/standing-with-soldiers", icon: "elderly", description: "Support and dignity" },
      { label: "Environment & Welfare", href: "/services/environment-welfare", icon: "environment", description: "Greener communities" },
      { label: "Culture & Heritage", href: "/services/culture-heritage", icon: "culture", description: "Keeping roots alive" },
    ],
  },
  {
    label: "Request a Support",
    href: "/donate#support-request-form",
    description: "Explore ways to receive and offer support",
  },
  {
    label: "Trimurthi Connect",
    href: "/trimurti-connect",
    description: "Network and collaborate",
    children: [
      { label: "Professional Connect", href: "/trimurti-connect#professional-connect", icon: "professional", description: "Share expertise and build skills" },
      { label: "Business Connect", href: "/trimurti-connect#business-connect", icon: "businessconnect", description: "Explore meaningful partnerships" },
    ],
  },
  {
    label: "News and Events",
    href: "/insights",
    description: "Learning and updates",
    children: [
      { label: "Events", href: "/insights#events", icon: "event", description: "Upcoming programmes" },
      { label: "Campaigns", href: "/insights#campaigns", icon: "campaign", description: "Impact stories" },
      { label: "Knowledge Center", href: "/insights#knowledge-center", icon: "knowledge", description: "Resources and learning" },
    ],
  },
  {
    label: "Gallery",
    href: "/media",
    description: "Moments and stories",
    children: [
      { label: "Images", href: "/media/photos", icon: "image", description: "Photo gallery" },
      { label: "Videos", href: "/media/videos", icon: "video", description: "Video stories" },
    ],
  },
  { label: "Wall of Honour", href: "/wall-of-honour", description: "Recognizing those who stand with our mission" },
  { label: "Contact", href: "/contact", description: "Reach us" },
];
