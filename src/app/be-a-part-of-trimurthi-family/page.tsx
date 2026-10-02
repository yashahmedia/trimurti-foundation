import TrimurtiConnectPage from "@/components/community/TrimurtiConnectPage";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Be a Part of the Trimurthi Family",
  "/be-a-part-of-trimurthi-family",
  "Explore ways to volunteer, join events, sponsor learning, share professional expertise and support community partnerships.",
);

export default function Page() {
  return <TrimurtiConnectPage />;
}
