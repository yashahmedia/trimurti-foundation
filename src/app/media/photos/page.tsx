import Gallery from "@/components/media/Gallery";
import { getMedia } from "@/lib/media";
import { seo } from "@/lib/seo";
export const metadata = seo("Photo Gallery", "/media/photos");
export const dynamic = "force-dynamic";
export default async function Page() {
  const photos = await getMedia(false);
  return (
    <section className="container section">
      <h1 className="sr-only">Photo Gallery</h1>
      {photos.some((p) => p.demo) && (
        <div className="notice">
          The supplied images are illustrative. Verified event photographs and
          dates will be published when available.
        </div>
      )}
      <Gallery items={photos} />
    </section>
  );
}
