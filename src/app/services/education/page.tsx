import EducationEmpowermentPage from "@/components/services/EducationEmpowermentPage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Education & Empowerment",
  "/services/education",
  "Explore Trimurti Foundation’s education and empowerment work supporting learning, confidence, skills and opportunity.",
);

export default function Page() {
  return <EducationEmpowermentPage />;
}
