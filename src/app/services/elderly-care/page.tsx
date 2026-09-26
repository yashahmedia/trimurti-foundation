import ElderlyCarePage from "@/components/services/ElderlyCarePage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Elderly Care",
  "/services/elderly-care",
  "Learn how Trimurti Foundation supports older adults through companionship, practical care, wellbeing and community connection.",
);

export default function Page() {
  return <ElderlyCarePage />;
}
