import Image from "next/image";
import { about } from "@/data/about";
import { PageHero, CTA, Impact } from "@/components/ui/Shared";
import Services from "@/components/home/Services";
import { seo } from "@/lib/seo";
export const metadata = seo("About Us", "/about-us");
export default function Page() {
  return (
    <>
      <PageHero
        title="A foundation for belonging."
        eyebrow="About Trimurti Foundation"
        description={about.introduction}
      />
      <section className="container section split">
        <Image
          src="/elder support.png"
          alt="Illustrative scene of companionship and elder care"
          width={650}
          height={450}
          style={{ borderRadius: 10 }}
        />
        <div className="about-copy">
          <p className="eyebrow">Our story</p>
          <h2>Care begins with connection.</h2>
          <p>{about.story}</p>
          <p className="small">
            Our organizational story is being prepared for publication. This
            introduction outlines our intended purpose.
          </p>
        </div>
      </section>
      <section className="container content-grid">
        <div className="panel">
          <p className="eyebrow">Our mission</p>
          <h2>Compassion, made practical.</h2>
          <p>{about.mission}</p>
        </div>
        <div className="panel">
          <p className="eyebrow">Our vision</p>
          <h2>Opportunity for everyone.</h2>
          <p>{about.vision}</p>
        </div>
      </section>
      <section className="container section">
        <div className="center-heading">
          <p className="eyebrow">What guides us</p>
          <h2>People always come first.</h2>
        </div>
        <div className="service-grid">
          {about.values.map((v, i) => (
            <div className="panel" key={v}>
              <p className="eyebrow">0{i + 1}</p>
              <h3>{v}</h3>
            </div>
          ))}
        </div>
      </section>
      <Impact />
      <section className="container section">
        <div className="section-heading">
          <h2>Our major objectives</h2>
          <p>Practical support, shared with dignity.</p>
        </div>
        <Services />
      </section>
      <section className="section tinted">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">The journey we envision</p>
            <h2>Listen. Connect. Support.</h2>
          </div>
          <div className="transparency-grid">
            {about.journey.map((j) => (
              <div className="panel" key={j.title}>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </div>
            ))}
          </div>
          <div className="panel" style={{ marginTop: 30 }}>
            <h3>A message from our leadership</h3>
            <p>{about.leadership}</p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
