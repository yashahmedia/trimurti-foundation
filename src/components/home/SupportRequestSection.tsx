"use client";

import Image from "next/image";
import SupportRequestCards from "@/components/home/SupportRequestCards";

export default function SupportRequestSection() {
  return (
    <section
      className="support-request-section"
      aria-labelledby="support-request-title"
    >
      <div className="container">
        <div className="support-request-heading">
          <div>
            <p className="eyebrow">Support when you need it</p>
            <h2 id="support-request-title">Request a Support</h2>
          </div>
          <p>
            We stand with those in need — providing essential resources,
            opportunities and hope for a better tomorrow.
          </p>
        </div>
        <div className="support-request-grid">
          <SupportRequestCards />

          <aside className="support-request-panel">
            <Image
              src="/logo4.png"
              alt=""
              width={82}
              height={82}
              className="support-request-panel-logo"
              aria-hidden="true"
            />
            <div className="support-request-panel-header">
              <span className="support-request-eyebrow">Your support matters</span>
              <h3>
                Your support
                <br />
                can change
                <br />a life.
              </h3>
            </div>

            <p>
              Someone around you may need food, education, healthcare, or
              simply a helping hand.
            </p>

            <div className="support-request-quote">
              <p>No one should have to face life’s challenges alone</p>
              <span aria-hidden="true">♡</span>
            </div>
            <div className="support-request-panel-image">
              <Image
                src="/life.png"
                alt="Hands offering care and support to a community"
                fill
                sizes="(max-width: 1100px) 100vw, 32vw"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
