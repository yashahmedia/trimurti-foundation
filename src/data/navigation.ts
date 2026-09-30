type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: Array<{ label: string; href: string; icon?: string; description?: string }>;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/", description: "Overview" },
  {
    label: "Who we are",
    href: "/about-us",
    description: "Our story and values",
    children: [
      { label: "About Trimurti Foundation", href: "/about-us#about-foundation", icon: "foundation", description: "Our mission and purpose" },
      { label: "Our Founders", href: "/about-us#founder", icon: "founder", description: "Leadership and vision" },
      { label: "Our journey", href: "/about-us#journey", icon: "journey", description: "The path we have taken" },
      { label: "Mission & vision", href: "/about-us#mission-vision", icon: "mission", description: "What drives us" },
      { label: "Governance & Transparency", href: "/about-us#governance", icon: "governance", description: "Ethics and accountability" },
      { label: "Advisory Board / Team", href: "/about-us#team", icon: "team", description: "People behind the mission" },
    ],
  },
  {
    label: "Our initiatives",
    href: "/initiatives",
    description: "Impact programmes",
    children: [
      { label: "Education & Empowerment", href: "/services/education", icon: "education", description: "Learning and opportunity" },
      { label: "Healthcare Support", href: "/services/healthcare", icon: "healthcare", description: "Access to care" },
      { label: "Annadhan & Nutrition", href: "/services/nutrition", icon: "nutrition", description: "Meals and nourishment" },
      { label: "Stand with our Soldiers", href: "/services/elderly-care", icon: "elderly", description: "Support and dignity" },
      { label: "Environment & Welfare", href: "/services/environment-welfare", icon: "environment", description: "Greener communities" },
      { label: "Culture & Heritage", href: "/services/culture-heritage", icon: "culture", description: "Keeping roots alive" },
      ],
  },
  { label: "Transform a Life", href: "/donate", description: "Support a cause" },
  {
    label: "Trimurthi Connect",
    href: "/community",
    description: "Network and collaborate",
    children: [
      { label: "Professional Connect", href: "/community/professional-connect", icon: "professional", description: "Expert community" },
      { label: "Business Connect", href: "/community/business-connect", icon: "businessconnect", description: "Commercial partnerships" },
    ],
  },
  {
    label: "Be a part of Trimurthi family",
    href: "/volunteer",
    description: "Get involved",
    children: [
      { label: "Volunteer with us", href: "/volunteer", icon: "volunteer", description: "Contribute your time" },
      { label: "Join an Event", href: "/events", icon: "event", description: "Participate with the community" },
      { label: "Sponsor learning", href: "/services/education", icon: "sponsor", description: "Support a learner" },
      { label: "Request for professionals", href: "/volunteer/professionals", icon: "professionals", description: "Offer specialist help" },
      { label: "Request for Business support", href: "/volunteer/business-support", icon: "business", description: "Partner with us" },
    ],
  },
  {
    label: "News & Updates",
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
  { label: "Contact", href: "/contact", description: "Reach us" },
];
