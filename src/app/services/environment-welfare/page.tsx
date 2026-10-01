import EnvironmentWelfareExperience from "@/components/services/EnvironmentWelfareExperience";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Environment & Welfare",
  "/services/environment-welfare",
  "Learn how care for nature, responsible practices and community participation can create a cleaner and healthier future.",
);

export default function Page() {
  return <EnvironmentWelfareExperience />;
}
