import TrimurtiConnectLanding from "@/components/community/TrimurtiConnectLanding";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Trimurthi Connect",
  "/trimurti-connect",
  "Connect with professionals and businesses to share expertise, build partnerships and create meaningful opportunities with Trimurthi Foundation.",
);

export default function Page() {
  return <TrimurtiConnectLanding />;
}
