import CultureFeaturePage from "@/components/culture/CultureFeaturePage";
import { cultureFeaturePages } from "@/data/culture-feature-pages";
import { seo } from "@/lib/seo";

const page = cultureFeaturePages["pooja-religious-service"];

export const metadata = seo(
  "Pooja & Religious Service | Culture & Heritage",
  "/services/culture-heritage/pooja-religious-service",
  "View approved Pooja and religious-service information and send an enquiry to Trimurthi Foundation.",
);

export default function Page() {
  return <CultureFeaturePage page={page} />;
}
