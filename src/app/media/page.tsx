import Image from "next/image";
import { PageHero, Button } from "@/components/ui/Shared";
import { seo } from "@/lib/seo";
export const metadata = seo("Our Media", "/media");
export default function Page() {
  return (
    <>
      <PageHero
        title="Stories that bring us closer."
        eyebrow="Our Media"
        description="Explore moments of care, shared purpose and community connection."
      />
      <section className="container section content-grid">
        {[
          {
            title: "Photo Gallery",
            image: "/heritage.png",
            href: "/media/photos",
            text: "A visual journey through our areas of support.",
          },
          {
            title: "Video Gallery",
            image: "/protect.png",
            href: "/media/videos",
            text: "Hear the stories behind community action.",
          },
        ].map((m) => (
          <article className="service-card" key={m.title}>
            <Image
              src={m.image}
              width={650}
              height={360}
              alt={m.title + " illustrative cover"}
            />
            <div className="panel">
              <h2>{m.title}</h2>
              <p style={{ marginBottom: 20 }}>{m.text}</p>
              <Button href={m.href}>Explore gallery</Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
