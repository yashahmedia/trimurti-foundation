import EnvironmentWelfarePage from "@/components/services/EnvironmentWelfarePage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Environment & Welfare",
  "/services/environment-welfare",
  "Explore Trimurti Foundation’s community environmental initiatives, promoting greener spaces, responsible practices and sustainable living.",
);

export default function Page() {
  return <EnvironmentWelfarePage />;
}
