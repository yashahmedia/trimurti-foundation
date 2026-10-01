import HealthcareSupportExperience from "@/components/services/HealthcareSupportExperience";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Healthcare Support",
  "/services/healthcare",
  "Learn how timely medical support can provide relief during difficult moments and help individuals receive the care they need.",
);

export default function Page() {
  return <HealthcareSupportExperience />;
}
