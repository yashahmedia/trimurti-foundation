import { PageHero, Button } from "@/components/ui/Shared";
export default function NotFound() {
  return (
    <>
      <PageHero
        title="Let’s find your way back."
        eyebrow="404 · Page not found"
        description="This page may have moved, or the link may be incomplete."
      />
      <section className="container section">
        <Button href="/">Return home</Button>
      </section>
    </>
  );
}
