import WhoWeAre from "@/components/home/WhoWeAre";
import TrimurthyPhilosophy from "@/components/home/TrimurthyPhilosophy";
import TransformALife from "@/components/home/TransformALife";
import SupportRequestSection from "@/components/home/SupportRequestSection";
import EventsCampaigns from "@/components/sections/EventsCampaigns";
import DonateNow from "@/components/sections/DonateNow";
import TrimurtiFamily from "@/components/sections/TrimurtiFamily";
import TrimurtiConnect from "@/components/sections/TrimurtiConnect";
import TestimonialsSection from "@/components/sections/Testimonials";
import OurPresence from "@/components/sections/OurPresence";
import { seo } from "@/lib/seo";
const showSupportRequestSection = false;
export const metadata = seo("Trimurthi Foundation", "/");
export default function Home() {
  return (
    <>
      <WhoWeAre />
      <TransformALife />
      <TrimurthyPhilosophy />
      {showSupportRequestSection && <SupportRequestSection />}
      <EventsCampaigns />
      <DonateNow />
      <TrimurtiFamily />
      <TrimurtiConnect />
      <TestimonialsSection />
      <OurPresence />
    </>
  );
}
