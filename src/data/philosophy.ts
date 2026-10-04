import {
  BookOpen,
  HandHeart,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PhilosophyItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
};

export const philosophyItems: PhilosophyItem[] = [
  {
    title: "Engage",
    description:
      "Build stronger communities through active participation, collaboration and meaningful connection.",
    image: "/engage 2.jpg",
    alt: "A couple exchanging rings during an engagement ceremony",
    icon: Users,
  },
  {
    title: "Empower",
    description:
      "Create opportunities that give individuals the confidence, support and resources to thrive.",
    image: "/empower.png",
    alt: "A team joining hands to show unity and mutual support",
    icon: HandHeart,
  },
  {
    title: "Elevate",
    description:
      "Enable better access to education, healthcare and essential resources for a better quality of life.",
    image: "/elevate.png",
    alt: "Students taking part in a hands-on science learning activity",
    icon: TrendingUp,
  },
  {
    title: "Evolve",
    description:
      "Encourage continuous growth, learning and positive transformation for a stronger tomorrow.",
    image: "/evolve-current-202609281559.png",
    alt: "School children learning and experimenting together",
    icon: RefreshCw,
  },
  {
    title: "Enlighten",
    description:
      "Spread awareness, inspire positive change and guide communities with knowledge and purpose.",
    image: "/enlighten-current-202609281559.png",
    alt: "Women learning skills together in a community workshop",
    icon: BookOpen,
  },
];
