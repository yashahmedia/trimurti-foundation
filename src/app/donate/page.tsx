import DonationForm from "@/components/donate/DonationForm";
import { seo } from "@/lib/seo";

export const metadata = seo("Support a Cause", "/donate");

export default function Page() {
  return (
    <main className="donation-page">
      <section
        className="donation-layout donation-layout-compact"
        aria-labelledby="donation-title"
      >
        <div className="donation-panel">
          <header className="donation-panel-heading">
            <span className="donation-badge">Support a Cause</span>
            <h1 id="donation-title">
              Your contribution can help make a meaningful difference.
            </h1>
            <p>Please complete the form below to make your donation.</p>
          </header>
          <DonationForm />
          <p className="donation-thank-you">
            Thank you for your generosity. Every contribution helps create a
            positive impact.
          </p>
        </div>
      </section>
    </main>
  );
}
