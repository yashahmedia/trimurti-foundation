export const site = {
  name: "Trimurti Foundation",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Bringing people, care and opportunity together for stronger communities.",
  logo: "/logo2.png",
  email: "hello@trimurtifoundation.org",
  phone: "+91 98765 43210",
  address: "Thrissur, Kerala, India",
  registration: "",
  social: [],
  // TODO: confirm the legacy email hello@trimurtifoundation.org before publishing.
  // TODO: supply legal registration, leadership, bank details, approved policies and verified impact.
  impact: [
    { label: "Lives supported", value: 10000 },
    { label: "Community programs", value: 25 },
    { label: "Volunteers", value: 500 },
    { label: "Events conducted", value: 18 },
  ] as { label: string; value: number | null }[],
};
