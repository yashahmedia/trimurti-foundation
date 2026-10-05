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
    image: "/enagage.png",
    alt: "Community members sharing ideas in a group discussion",
    icon: Users,
  },
  {
    title: "Empower",
    description:
      "Create opportunities that give individuals the confidence, support and resources to thrive.",
    image: "/5es4.png",
    alt: "A team joining hands to show unity and mutual support",
    icon: HandHeart,
  },
  {
    title: "Elevate",
    description:
      "Enable better access to education, healthcare and essential resources for a better quality of life.",
    image: "/Philosophy3.png",
    alt: "Students taking part in a hands-on science learning activity",
    icon: TrendingUp,
  },
  {
    title: "Evolve",
    description:
      "Encourage continuous growth, learning and positive transformation for a stronger tomorrow.",
    image: "/5es2.png",
    alt: "School children learning and experimenting together",
    icon: RefreshCw,
  },
  {
    title: "Enlighten",
    description:
      "Spread awareness, inspire positive change and guide communities with knowledge and purpose.",
    image: "/5es1.png",
    alt: "Women learning skills together in a community workshop",
    icon: BookOpen,
  },
];
