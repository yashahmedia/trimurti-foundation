import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { philosophyItems } from "@/data/philosophy";

export default function TrimurthyPhilosophy() {
  return (
    <section className="philosophy-section" aria-labelledby="philosophy-title">
      <div className="philosophy-glow" aria-hidden="true" />
      <div className="container philosophy-inner">
        <Reveal>
          <header className="philosophy-heading">
            <span className="philosophy-mark" aria-hidden="true">
              <i />
              <span>✦</span>
              <i />
            </span>
            <h2 id="philosophy-title">
              <span>The Trimurthy</span> Philosophy
            </h2>
            <p>Five principles that guide our purpose, people and impact.</p>
            <span className="philosophy-divider" aria-hidden="true" />
          </header>
        </Reveal>

        <div className="philosophy-grid">
          {philosophyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal delay={index * 0.08} key={item.title}>
                <div className="philosophy-card">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 33vw, 20vw"
                    className="philosophy-card-image"
                  />
                  <span className="philosophy-card-overlay" aria-hidden="true" />
                  <span className="philosophy-card-content">
                    <span className="philosophy-icon-badge">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}