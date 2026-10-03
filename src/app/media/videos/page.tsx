import Gallery from "@/components/media/Gallery";
import SupportPromptSection from "@/components/home/SupportPromptSection";
import { getMedia } from "@/lib/media";
import { seo } from "@/lib/seo";
export const metadata = seo("Video Gallery", "/media/videos");
export const dynamic = "force-dynamic";
export default async function Page() {
  const videos = await getMedia(true);
  return (
    <>
      <section className="container section">
        <h1 className="sr-only">Video Gallery</h1>
        <Gallery items={videos} video />
      </section>
      <SupportPromptSection />
    </>
  );
}
