import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ArtistInterestForm from "@/components/forms/ArtistInterestForm";
import styles from "./MusicArtsPage.module.css";

export default function MusicArtsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="music-arts-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Music &amp; Arts</p>
            <h1 id="music-arts-title">
              Celebrating Talent. Inspiring Generations.
            </h1>
            <p className={styles.heroDescription}>
              Trimurthi Foundation has been conducting Vasantha Utsavam, a music
              and dance festival in Dubai, since 2015, celebrating India&apos;s
              rich artistic traditions. Over the years, the festival has
              welcomed renowned maestros and accomplished artistes, while
              providing a platform for emerging talent to showcase their
              abilities through performances, concerts and workshops. Through
              Vasantha Utsavam, we aim to nurture the next generation of
              artists, encourage learning and collaboration, and keep
              India&apos;s musical and dance traditions alive for generations to
              come.
            </p>
            <div className={styles.discoverLink}>
              <span>Discover more about Vasantha Utsavam:</span>
              <a
                href="https://www.vasanthautsavam.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.vasanthautsavam.com
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/music&art.png"
              alt="Classical Indian dancer performing with musicians in a temple"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="festival-cta-title">
        <div className={styles.container}>
          <article className={styles.ctaCard}>
            <p className={styles.eyebrow}>Vasantha Utsavam</p>
            <h2 id="festival-cta-title">Be Part of Vasantha Utsavam</h2>
            <p>
              Are you a musician, dancer, performing artist or teacher
              interested in performing or conducting a workshop?
            </p>
            <a className={styles.primaryButton} href="#artist-interest-form">
              Express Your Interest
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section
        className={styles.formSection}
        id="artist-interest-form"
        aria-labelledby="artist-interest-title"
      >
        <div className={styles.container}>
          <header className={styles.formIntro}>
            <p className={styles.eyebrow}>Artist Enquiry</p>
            <h2 id="artist-interest-title">Express Your Interest</h2>
            <p>
              Share your details with us if you are a musician, dancer,
              performing artist, teacher, or cultural practitioner interested
              in participating in Vasantha Utsavam.
            </p>
          </header>
          <ArtistInterestForm />
        </div>
      </section>
    </div>
  );
}