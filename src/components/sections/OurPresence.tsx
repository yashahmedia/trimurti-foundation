import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

export default function OurPresence() {
  return <section className="homepage-section presence-section" aria-labelledby="presence-title"><div className="container"><div className="homepage-section-heading"><div><p className="eyebrow">Shared with permission</p><h2 id="presence-title">Our Presence</h2><p>Press mentions and verified coverage will be added once publication details and logo permissions are confirmed.</p></div></div><div className="press-placeholders"><span>Publication logo pending</span><span>Publication logo pending</span><span>Publication logo pending</span></div><div className="empty presence-empty"><Newspaper size={30} /><h3>News coverage is being prepared</h3><p>Real headlines, dates and external links will appear here after verification.</p><Link href="/media" className="text-link">Explore our media <ArrowUpRight size={16} /></Link></div></div></section>;
}
