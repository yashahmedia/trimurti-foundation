import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./SupportPromptSection.module.css";

export default function SupportPromptSection() {
  return (
    <section className={styles.section} aria-labelledby="support-prompt-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>
            <span aria-hidden="true" />
            Support
          </p>
          <h2 id="support-prompt-title">We’re Here to Support You</h2>
          <p className={styles.description}>
            Trimurthi Foundation is dedicated to supporting individuals and
            communities in need. If you or someone you know needs assistance,
            reach out to us and our team will guide you through the next steps.
          </p>
          <Link className={styles.button} href="/donate#support-request-form">
            Request Support
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <span className={styles.orbit} />
          <Image
            className={styles.image}
            src="/life.png"
            alt=""
            fill
            sizes="(max-width: 760px) 75vw, 35vw"
          />
        </div>
      </div>
    </section>
  );
}
