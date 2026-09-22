import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { navigation } from "@/data/navigation";
import { site } from "@/config/site";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src="/logo3.png"
            width={230}
            height={77}
            alt="Trimurti Foundation"
            className="footer-logo"
          />
          <p>
            Inspiring lives. Building communities.
            <br />
            Creating legacy.
          </p>
          <p className="small">
            Rooted in Thrissur, Kerala, we bring people together to serve with
            dignity, compassion and purpose.
          </p>
          <div className="footer-socials" aria-label="Social media links">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <span aria-hidden="true">f</span>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <span aria-hidden="true">◎</span>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <span aria-hidden="true">in</span>
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <span aria-hidden="true">▶</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            {navigation.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Our services</h3>
          <div className="footer-links footer-service-links">
            <Link href="/services">Healthcare</Link>
            <Link href="/services">Education</Link>
            <Link href="/services">Soldiers&apos; families</Link>
            <Link href="/services">Heritage &amp; culture</Link>
            <Link href="/volunteer">Volunteer</Link>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Reach us</h3>
          {site.address && (
            <p>
              <MapPin size={17} />
              <span>{site.address}</span>
            </p>
          )}
          {site.phone && (
            <p>
              <Phone size={17} />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
          )}
          {site.email && (
            <p>
              <Mail size={17} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          )}
        </div>
        <div className="footer-newsletter">
          <h3>Stay connected</h3>
          <p>Receive thoughtful updates, stories and ways to make a difference.</p>
          <form action="/contact">
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>
            <input id="footer-email" name="email" type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Subscribe">
              <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Trimurti Foundation. All rights reserved.
        </span>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
