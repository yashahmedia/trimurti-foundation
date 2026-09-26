import HealthcareSupportPage from "@/components/services/HealthcareSupportPage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Healthcare Support",
  "/services/healthcare",
  "Learn how Trimurti Foundation supports community health through awareness, preventive care, health camps and compassionate guidance.",
);

export default function Page() {
  return <HealthcareSupportPage />;
}
