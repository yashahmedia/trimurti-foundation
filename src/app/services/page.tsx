import { seo } from "@/lib/seo";
import OurInitiativesPage from "@/components/services/OurInitiativesPage";

export const metadata = seo(
  "Our Initiatives",
  "/services",
  "Explore Trimurti Foundation’s initiatives across education, healthcare, nutrition, elderly care, environment and cultural heritage.",
);

export default function Page() {
  return <OurInitiativesPage />;
}
