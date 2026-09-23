type NavigationItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string; icon?: string }>;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Who we are",
    href: "/about-us",
    children: [
      { label: "About Trimurti Foundation", href: "/about-us", icon: "foundation" },
      { label: "About our founder", href: "/about-us", icon: "founder" },
      { label: "Our journey", href: "/about-us", icon: "journey" },
      { label: "Mission & vision", href: "/about-us", icon: "mission" },
      { label: "Governance & Transparency", href: "/about-us", icon: "governance" },
      { label: "Advisory Board / Team", href: "/about-us", icon: "team" },
    ],
  },
  {
    label: "Our initiatives",
    href: "/services",
    children: [
      { label: "Education & Empowerment", href: "/services", icon: "education" },
      { label: "Healthcare Support", href: "/services", icon: "healthcare" },
      { label: "Annadhan & Nutrition", href: "/services", icon: "nutrition" },
      { label: "Elderly Care", href: "/services", icon: "elderly" },
      { label: "Environment & Welfare", href: "/services", icon: "environment" },
      { label: "Culture & Heritage", href: "/services", icon: "culture" },
    ],
  },
  {
    label: "Culture & Heritage",
    href: "/services",
    children: [
      { label: "Temple Support", href: "/services", icon: "temple" },
      { label: "Online Gurukul", href: "/services", icon: "gurukul" },
      { label: "Heritage Preservation", href: "/services", icon: "heritage" },
      { label: "Cultural Events", href: "/services", icon: "events" },
    ],
  },
  {
    label: "Join Trimurthi Family",
    href: "/volunteer",
    children: [
      { label: "Volunteer with us", href: "/volunteer", icon: "volunteer" },
      { label: "Join an Event", href: "/events", icon: "event" },
      { label: "Sponsor learning", href: "/services", icon: "sponsor" },
      { label: "Request for professionals", href: "/volunteer", icon: "professionals" },
      { label: "Request for Business support", href: "/volunteer", icon: "business" },
    ],
  },
  {
    label: "Trimurthi connect",
    href: "/community",
    children: [
      { label: "Professional Connect", href: "/community", icon: "professional" },
      { label: "Business Connect", href: "/community", icon: "businessconnect" },
    ],
  },
  {
    label: "Gallery",
    href: "/media",
    children: [
      { label: "Images", href: "/media/photos", icon: "image" },
      { label: "Videos", href: "/media/videos", icon: "video" },
    ],
  },
  {
    label: "Insights",
    href: "/events",
    children: [
      { label: "Events", href: "/events", icon: "event" },
      { label: "Campaigns", href: "/events", icon: "campaign" },
      { label: "Knowledge Center", href: "/events", icon: "knowledge" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
