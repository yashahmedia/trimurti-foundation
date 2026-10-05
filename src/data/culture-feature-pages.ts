export type CultureFeaturePageData = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  sectionDisplay?: "cards" | "buttons";
  sections: {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
  }[];
  about?: { title: string; description: string };
  externalLink?: { label: string; href: string };
  form?:
    | {
        kind: "contact";
        title: string;
        description: string;
        subject: "Event" | "Other";
      }
    | { kind: "pooja"; title: string; description: string };
};

export const cultureFeaturePages = {
  "music-art": {
    title: "Music & Arts",
    eyebrow: "Culture & Heritage",
    description: "Celebrating Talent. Inspiring Generations.",
    image: "/preserve.png",
    imageAlt: "Traditional Indian cultural performance",
    sections: [
      {
        title: "Vasantha Utsavam",
        description:
          "Trimurthi Foundation has been conducting Vasantha Utsavam, a music and dance festival in Dubai, since 2015, celebrating India's rich artistic traditions. Over the years, the festival has welcomed renowned maestros and accomplished artistes, while providing a platform for emerging talent to showcase their abilities through performances, concerts and workshops. Through Vasantha Utsavam, we aim to nurture the next generation of artists, encourage learning and collaboration, and keep India's musical and dance traditions alive for generations to come.",
        image: "/preserve.png",
        imageAlt: "Traditional Indian cultural performance",
      },
    ],
    externalLink: {
      label: "www.vasanthautsavam.com",
      href: "https://www.vasanthautsavam.com",
    },
    form: {
      kind: "contact",
      title: "Enquire about Music & Art",
      description:
        "Send a request about Vasantha Utsavam or Music & Art. We will prepare a message for the foundation's existing contact email.",
      subject: "Event",
    },
  },
  "temple-support": {
    title: "Temple Support",
    eyebrow: "Culture & Heritage",
    description:
      "Learn about the foundation's stated focus on supporting temples and sacred places as centers of faith, culture and community.",
    image: "/heritage.png",
    imageAlt: "Temple and heritage setting",
    sections: [
      {
        title: "Restoration & Conservation",
        description:
          "Support for restoration and conservation of temples and sacred places, as described in the existing Culture & Heritage content.",
        image: "/heritage.png",
        imageAlt: "Temple and heritage setting",
      },
      {
        title: "Community Engagement",
        description:
          "Community engagement around sacred places is an existing stated area of focus.",
        image: "/culture_heritage.png",
        imageAlt: "Indian culture and heritage",
      },
      {
        title: "Sustainable Maintenance",
        description:
          "The existing Culture & Heritage content identifies sustainable maintenance as a temple-support area.",
        image: "/preserve.png",
        imageAlt: "Cultural heritage preservation",
      },
    ],
  },
  "tourism-gurukul": {
    title: "Trimurthi Gurukul",
    eyebrow: "Culture & Heritage",
    description:
      "A place for learning and reference resources connected with culture and heritage. Resource listings will be added after client approval.",
    image: "/education_empowerment.png",
    imageAlt: "Learners reading and studying together",
    sectionDisplay: "buttons",
    sections: [
      {
        title: "Books",
        description:
          "Approved book titles, descriptions and availability details are to be supplied by the client.",
        image: "/education_empowerment.png",
        imageAlt: "Learners reading and studying together",
      },
      {
        title: "Videos",
        description:
          "Approved video titles, descriptions and links are to be supplied by the client.",
        image: "/preserve.png",
        imageAlt: "Traditional Indian cultural performance",
      },
      {
        title: "Learning & Reference Material",
        description:
          "Other learning and reference resources can be listed here once the client provides the approved material.",
        image: "/heritage.png",
        imageAlt: "Temple and heritage setting",
      },
    ],
  },
  "pooja-religious-service": {
    title: "Pooja & Religious Service",
    eyebrow: "Culture & Heritage",
    description:
      "Find approved information about Pooja and religious services. Service details are to be confirmed by the client.",
    image: "/culture_heritage.png",
    imageAlt: "Cultural and religious heritage setting",
    sections: [
      {
        title: "Pooja category — details pending",
        description:
          "The client has not yet provided approved Pooja or religious-service categories and descriptions.",
        image: "/culture_heritage.png",
        imageAlt: "Cultural and religious heritage setting",
      },
      {
        title: "Religious service category — details pending",
        description:
          "Add another service category after the client confirms its name and details.",
        image: "/heritage.png",
        imageAlt: "Temple and heritage setting",
      },
      {
        title: "Additional category — details pending",
        description:
          "Add any further categories only after the client provides approved information.",
        image: "/preserve.png",
        imageAlt: "Cultural heritage preservation",
      },
    ],
    about: {
      title: "About Pooja",
      description:
        "This section is reserved for approved information about Pooja and religious services. The service scope and any participation or scheduling details need client confirmation.",
    },
    form: {
      kind: "pooja",
      title: "Pooja & Religious Service Enquiry",
      description:
        "Share your request or question. We will prepare a message using the foundation's existing contact process.",
    },
  },
} satisfies Record<string, CultureFeaturePageData>;

export type CultureFeatureSlug = keyof typeof cultureFeaturePages;
