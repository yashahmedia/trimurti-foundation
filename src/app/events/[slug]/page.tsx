import { notFound } from "next/navigation";
import Image from "next/image";
import { events, demoEvents } from "@/data/events";
import { PageHero, Button } from "@/components/ui/Shared";
import EventList from "@/components/events/EventList";
import Share from "@/components/events/Share";
import { seo } from "@/lib/seo";
import { site } from "@/config/site";
import { format } from "date-fns";
const records = () => [...events, ...demoEvents];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = records().find((e) => e.slug === slug);
  return {
    ...seo(e?.title || "Event not found", "/events/" + slug),
    ...(e?.demo ? { robots: { index: false, follow: false } } : {}),
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = records().find((e) => e.slug === slug);
  if (!e) notFound();
  return (
    <>
      <PageHero
        title={e.title}
        eyebrow={e.demo ? "Demo event — not scheduled" : "Community event"}
        description={e.description}
      />
      <section className="container section split">
        <Image src={e.image} alt={e.title} width={800} height={500} />
        <div className="panel stack">
          <h2>Event details</h2>
          <p>
            {format(new Date(e.date), "EEEE, d MMMM yyyy · HH:mm")} IST
            <br />
            {e.location}
          </p>
          <span className="badge">Registration {e.status.toLowerCase()}</span>
          <p>{e.description}</p>
          {e.status === "Open" && !e.demo ? (
            <Button href={"/volunteer?event=" + e.slug}>
              Express interest
            </Button>
          ) : (
            <p>Registration is not currently available.</p>
          )}
          <Share />
        </div>
      </section>
      <section className="container section">
        <h2 style={{ marginBottom: 25 }}>Related events</h2>
        <EventList items={events.filter((i) => i.slug !== slug).slice(0, 3)} />
      </section>
      {!e.demo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: e.title,
              startDate: e.date,
              description: e.description,
              image: site.url + e.image,
              location: { "@type": "Place", name: e.location },
              organizer: { "@type": "NGO", name: site.name, url: site.url },
            }).replace(/</g, "\u003c"),
          }}
        />
      )}
    </>
  );
}
