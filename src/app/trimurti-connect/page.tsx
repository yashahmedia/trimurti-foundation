import TrimurtiConnectLanding from "@/components/community/TrimurtiConnectLanding";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Trimurti Connect",
  "/trimurti-connect",
  "Connect with professionals and businesses to share expertise, build partnerships and create meaningful opportunities with Trimurti Foundation.",
);

export default function Page() {
  return <TrimurtiConnectLanding />;
}
