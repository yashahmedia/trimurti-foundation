import { PageHero } from "@/components/ui/Shared";
import Gallery from "@/components/media/Gallery";
import { getMedia } from "@/lib/media";
import { seo } from "@/lib/seo";
export const metadata = seo("Photo Gallery", "/media/photos");
export const dynamic = "force-dynamic";
export default async function Page() {
  const photos = await getMedia(false);
  return (
    <>
      <PageHero
        title="Moments of connection."
        eyebrow="Photo Gallery"
        description="Explore our shared purpose through images and stories."
      />
      <section className="container section">
        {photos.some((p) => p.demo) && (
          <div className="notice">
            The supplied images are illustrative. Verified event photographs and
            dates will be published when available.
          </div>
        )}
        <Gallery items={photos} />
      </section>
    </>
  );
}
