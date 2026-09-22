export type FoundationEvent = {
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  images?: string[];
  description: string;
  status: "Open" | "Closed";
  demo: boolean;
};
export const events: FoundationEvent[] = [];
export const demoEvents: FoundationEvent[] = [
  {
    slug: "demo-community-learning",
    title: "Community learning day",
    date: "2026-11-14T09:00:00+05:30",
    location: "Venue to be confirmed",
    image: "/education-support.png",
    images: ["/education-support.png", "/nourish.png", "/women-empower.png"],
    description:
      "Demo event: a day of shared learning and volunteer-led activities. This is not a scheduled foundation event.",
    status: "Closed",
    demo: true,
  },
  {
    slug: "demo-community-care-day",
    title: "Community care day",
    date: "2026-12-05T10:00:00+05:30",
    location: "Location to be confirmed",
    image: "/health support.png",
    images: ["/health support.png", "/elder support.png", "/protect.png"],
    description:
      "Demo event: a community day focused on wellbeing, connection and practical support for local families.",
    status: "Closed",
    demo: true,
  },
];
