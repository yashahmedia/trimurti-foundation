import PoojaReligiousServicesPage from "@/components/culture/PoojaReligiousServicesPage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Pooja & Religious Services | Culture & Heritage",
  "/services/culture-heritage/pooja-religious-service",
  "Traditional poojas, homams and religious ceremonies organised with care, coordination and respect for established customs and traditions.",
);

export default function Page() {
  return <PoojaReligiousServicesPage />;
}
