import StandingWithSoldiersExperience from "@/components/services/StandingWithSoldiersExperience";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Standing With Our Soldiers",
  "/services/standing-with-soldiers",
  "Learn how Trimurthi Foundation recognises and supports serving personnel, veterans and their families.",
);

export default function Page() {
  return <StandingWithSoldiersExperience />;
}