import CultureFeaturePage from "@/components/culture/CultureFeaturePage";
import { cultureFeaturePages } from "@/data/culture-feature-pages";
import { seo } from "@/lib/seo";

const page = cultureFeaturePages["tourism-gurukul"];

export const metadata = seo(
  "Trimurthi Gurukul | Culture & Heritage",
  "/services/culture-heritage/tourism-gurukul",
  "Explore planned Trimurthi Gurukul categories for books, videos and other learning and reference material.",
);

export default function Page() {
  return <CultureFeaturePage page={page} />;
}
