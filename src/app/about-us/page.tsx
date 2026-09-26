import AboutUsPage from "@/components/about/AboutUsPage";
import { seo } from "@/lib/seo";

export const metadata = seo("Who We Are", "/about-us");

export default function Page() {
  return <AboutUsPage />;
}
