import MusicArtsPage from "@/components/culture/MusicArtsPage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Music & Arts | Culture & Heritage",
  "/services/culture-heritage/music-art",
  "Discover Vasantha Utsavam, a music and dance festival in Dubai celebrating India's musical and dance traditions since 2015.",
);

export default function Page() {
  return <MusicArtsPage />;
}
