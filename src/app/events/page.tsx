import { PageHero, CTA } from "@/components/ui/Shared";
import EventBrowser from "@/components/events/EventBrowser";
import { events, demoEvents } from "@/data/events";
import { seo } from "@/lib/seo";
export const metadata = seo("Events", "/events");
export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <>
      <PageHero
        title="Come together for good."
        eyebrow="Community Events"
        description="Meet, learn and contribute. Find opportunities to put compassion into action."
      />
      <section className="container section">
        <EventBrowser
          items={[...events, ...demoEvents]}
        />
      </section>
      <CTA />
    </>
  );
}
