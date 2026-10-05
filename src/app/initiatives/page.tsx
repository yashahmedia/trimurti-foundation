import OurInitiativesPage from "@/components/services/OurInitiativesPage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Our Initiatives",
  "/initiatives",
  "Explore Trimurthi Foundation’s initiatives across education, healthcare, nutrition, elderly care, environment and cultural heritage.",
);

export default function Page() {
  return <OurInitiativesPage />;
}