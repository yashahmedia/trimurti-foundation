import CultureHeritageExperience from "@/components/services/CultureHeritageExperience";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Culture & Heritage",
  "/services/culture-heritage",
  "Discover Trimurti Foundation’s initiatives to preserve cultural heritage, support traditional arts and connect younger generations with their roots.",
);

export default function Page() {
  return <CultureHeritageExperience />;
}
