import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PoojaEnquiryForm from "@/components/forms/PoojaEnquiryForm";
import GurukulResourceSections from "@/components/culture/GurukulResourceSections";
import type { CultureFeaturePageData } from "@/data/culture-feature-pages";
import styles from "./CultureFeaturePage.module.css";

export default function CultureFeaturePage({
  page,
}: {
  page: CultureFeaturePageData;
}) {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="feature-title">
        <div className={styles.container}>
          <Link className={styles.backLink} href="/services/culture-heritage">
            <ArrowLeft size={16} aria-hidden="true" />
            Culture &amp; Heritage
          </Link>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{page.eyebrow}</p>
              <h1 id="feature-title">{page.title}</h1>
              <p>{page.description}</p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src={page.image}
                alt={page.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>


      <section className={styles.contentSection} aria-label={`${page.title} details`}>
        <div className={styles.container}>
          {page.sectionDisplay === "buttons" ? (
            <GurukulResourceSections sections={page.sections} />
          ) : (
            <div className={styles.cards}>
              {page.sections.map((section, index) => (
                <article
                  className={styles.infoCard}
                  key={`${section.title}-${index}`}
                >
                  <div className={styles.infoCardImage}>
                    <Image
                      src={section.image ?? page.image}
                      alt={section.imageAlt ?? page.imageAlt}
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 800px) 50vw, 33vw"
                    />
                  </div>
                  <span className={styles.cardIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
          )}

          {page.externalLink && (
            <aside className={styles.clientNote} aria-label="Website link status">
              <strong>Vasantha Utsavam official website</strong>
              <a
                href={page.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {page.externalLink.label}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </aside>
          )}

          {page.about && (
            <section className={styles.about} aria-labelledby="about-feature-title">
              <p className={styles.eyebrow}>{page.title}</p>
              <h2 id="about-feature-title">{page.about.title}</h2>
              <p>{page.about.description}</p>
            </section>
          )}

          {page.form && (
            <section className={styles.formSection} aria-labelledby="feature-form-title">
              <div className={styles.formIntro}>
                <p className={styles.eyebrow}>Enquiries</p>
                <h2 id="feature-form-title">{page.form.title}</h2>
                <p>{page.form.description}</p>
              </div>
              {page.form.kind === "pooja" ? (
                <PoojaEnquiryForm />
              ) : (
                <ContactForm initialSubject={page.form.subject} />
              )}
            </section>
          )}

          <Link className={styles.returnLink} href="/services/culture-heritage">
            Return to Culture &amp; Heritage
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
