"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  ChevronDown,
  Globe,
  Heart,
  Home,
  Mail,
  MapPin,
  Menu,
  Play,
  X,
} from "lucide-react";
import { navigation } from "@/data/navigation";
import { site } from "@/config/site";
import LuxuryDivider from "@/components/LuxuryDivider";

export default function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const closeMobileMenu = () => {
    dialog.current?.close();
  };

  const renderNavLinks = (mobile = false) => (
    <>
      {navigation.map((item) => {
        const isCurrent = pathname === item.href;

        if (item.label === "Our Media") {
          return (
            <div key={item.href} className="nav-dropdown">
              <details className="nav-dropdown-details">
                <summary>
                  <span>{item.label}</span>
                  <ChevronDown size={12} />
                </summary>
                <div className="nav-dropdown-menu">
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={mobile ? closeMobileMenu : undefined}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={mobile ? closeMobileMenu : undefined}
            aria-current={isCurrent ? "page" : undefined}
            className={`nav-item ${isCurrent ? "is-active" : ""}`}
          >
            {item.label === "Home" ? <Home size={15} /> : null}
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="site-header">
      <div className="top-utility-bar">
        <div className="container top-utility-inner">
          <div className="utility-meta">
            <span className="utility-item">
              <MapPin size={14} />
              <span>New Delhi, India</span>
            </span>
            <span className="utility-divider" aria-hidden="true" />
            <span className="utility-item">
              <Mail size={14} />
              <span>info@trimurthifoundation.org</span>
            </span>
          </div>

          <div className="utility-actions">
            <span className="utility-follow">Follow Us:</span>
            <div className="social-links" aria-label="Social media">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <Globe size={14} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <Camera size={14} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
                <Play size={14} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-shell-wrapper">
        <div className="container nav-shell-wrapper-inner">
          <div className="nav-shell">
            <nav aria-label="Main navigation" className="desktop-nav">
              {renderNavLinks(false)}
            </nav>
            <div className="nav-cta-group">
              <Link href="/donate" className="nav-donate">
                <Heart size={15} />
                <span>Donate</span>
                <ArrowRight size={15} />
              </Link>
              <button
                type="button"
                className="mobile-toggle"
                aria-label="Open navigation menu"
                onClick={() => dialog.current?.showModal()}
              >
                <Menu size={18} />
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-header">
        <div className="container brand-header-inner">
          <Link href="/" aria-label="Trimurti Foundation home" className="brand-logo-link">
            <Image
              src={site.logo}
              alt="Trimurti Foundation logo"
              width={430}
              height={190}
              priority
              className="brand-logo"
            />
          </Link>

          <LuxuryDivider animated />

          <p className="brand-tagline" aria-label="Foundation tagline">
            CONNECTING PEOPLE. SERVING HUMANITY. CREATING OPPORTUNITIES. TRANSFORMING LIVES.
          </p>
        </div>
      </div>

      <dialog
        ref={dialog}
        className="mobile-menu"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMobileMenu();
        }}
      >
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button type="button" className="icon-button" aria-label="Close navigation" onClick={closeMobileMenu}>
            <X size={18} />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {renderNavLinks(true)}
          <Link href="/donate" className="nav-donate mobile-nav-donate" onClick={closeMobileMenu}>
            <Heart size={15} />
            <span>Donate</span>
            <ArrowRight size={15} />
          </Link>
        </nav>
      </dialog>
    </header>
  );
}
