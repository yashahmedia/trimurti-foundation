import Link from "next/link";
import { ArrowUpRight, QrCode } from "lucide-react";

export default function DonateNow() {
  return (
    <section className="homepage-section donate-now-section" aria-labelledby="donate-now-title">
      <div className="container">
        <div className="homepage-section-heading">
          <div><p className="eyebrow">Give with confidence</p><h2 id="donate-now-title">Donate Now</h2><p>Every contribution helps create practical care, opportunity and hope.</p></div>
        </div>
        <div className="donate-now-panel">
          <div className="donate-qr-placeholder"><QrCode size={42} /><strong>UPI QR coming soon</strong><span>Finance details will be published after verification.</span></div>
          <div className="donate-details">
            <span className="section-chip">Secure giving</span>
            <h3>Choose how you want to help</h3>
            <div className="donate-amounts"><button type="button">₹500</button><button type="button">₹1,000</button><button type="button">₹2,500</button><button type="button">₹5,000</button><button type="button">Custom</button></div>
            <p className="donate-finance-note">UPI ID, bank account and 80G receipt details will be added once confirmed by the foundation team.</p>
            <div className="donate-actions"><Link href="/donate" className="button">Donate now <ArrowUpRight size={16} /></Link><Link href="/donate" className="text-link">Donation information <ArrowUpRight size={16} /></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}
