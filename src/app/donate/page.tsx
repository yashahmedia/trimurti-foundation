import { PageHero } from "@/components/ui/Shared";
import { seo } from "@/lib/seo";
export const metadata = seo("Support Our Work", "/donate");
export default function Page() {
  return (
    <>
      <PageHero title="Support our work." eyebrow="Donate" description="Your support helps us create stronger communities." />
      <section className="container section"><div className="panel"><h2>Ways to support</h2><p>Please contact us to learn how you can contribute.</p><a className="button" href="mailto:hello@trimurtifoundation.org">Contact the foundation</a></div></section>
    </>
  );
}
