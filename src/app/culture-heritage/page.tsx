import { seo } from "@/lib/seo";
import CultureHeritagePage from "@/components/culture/CultureHeritagePage";

export const metadata = seo(
  "Culture & Heritage",
  "/culture-heritage",
  "Discover Trimurti Foundation’s work to preserve sacred spaces, share cultural learning and keep India’s living heritage connected to future generations.",
);

export default function Page() {
  return <CultureHeritagePage />;
}
