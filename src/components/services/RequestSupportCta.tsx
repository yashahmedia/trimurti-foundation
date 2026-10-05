import Link from "next/link";
import { ArrowRight, HandHeart } from "lucide-react";
import styles from "./RequestSupportCta.module.css";

export default function RequestSupportCta() {
  return (
    <section className={styles.section} aria-labelledby="request-support-cta-title">
      <HandHeart className={styles.watermark} aria-hidden="true" />
      <div className={styles.copy}>
        <p className={styles.label}>Need help? We’re here for you</p>
        <h2 id="request-support-cta-title">Request Support</h2>
        <p className={styles.description}>
          Every challenge deserves a helping hand. Tell us what support you need,
          and together we can create a path toward a better tomorrow.
        </p>
      </div>
      <Link className={styles.button} href="/#support-request-title">
        Request Support <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}