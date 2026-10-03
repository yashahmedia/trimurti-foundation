import CultureFeaturePage from "@/components/culture/CultureFeaturePage";
import { cultureFeaturePages } from "@/data/culture-feature-pages";
import { seo } from "@/lib/seo";

const page = cultureFeaturePages["music-art"];

export const metadata = seo(
  "Music & Art | Culture & Heritage",
  "/services/culture-heritage/music-art",
  "Information about Music & Art and Vasantha Utsavam. Event details and the official website link are pending client confirmation.",
);

export default function Page() {
  return <CultureFeaturePage page={page} />;
}
