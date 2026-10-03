import CultureFeaturePage from "@/components/culture/CultureFeaturePage";
import { cultureFeaturePages } from "@/data/culture-feature-pages";
import { seo } from "@/lib/seo";

const page = cultureFeaturePages["temple-support"];

export const metadata = seo(
  "Temple Support | Culture & Heritage",
  "/services/culture-heritage/temple-support",
  "Learn about the temple-support areas described in Trimurthi Foundation’s existing Culture & Heritage content.",
);

export default function Page() {
  return <CultureFeaturePage page={page} />;
}
