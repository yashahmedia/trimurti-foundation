import { PageHero } from "@/components/ui/Shared";
import Gallery from "@/components/media/Gallery";
import { getMedia } from "@/lib/media";
import { seo } from "@/lib/seo";
export const metadata = seo("Video Gallery", "/media/videos");
export const dynamic = "force-dynamic";
export default async function Page() {
  const videos = await getMedia(true);
  return (
    <>
      <PageHero
        title="Stories in motion."
        eyebrow="Video Gallery"
        description="Explore our shared purpose through images and stories."
      />
      <section className="container section">
        <Gallery items={videos} video />
      </section>
    </>
  );
}
