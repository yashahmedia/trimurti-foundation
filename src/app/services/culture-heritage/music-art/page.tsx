import CultureFeaturePage from "@/components/culture/CultureFeaturePage";
import { cultureFeaturePages } from "@/data/culture-feature-pages";
import { seo } from "@/lib/seo";

const page = cultureFeaturePages["music-art"];

export const metadata = seo(
  "Music & Arts | Culture & Heritage",
  "/services/culture-heritage/music-art",
  "Discover Vasantha Utsavam, a music and dance festival in Dubai celebrating India's musical and dance traditions since 2015.",
);

export default function Page() {
  return <CultureFeaturePage page={page} />;
}
