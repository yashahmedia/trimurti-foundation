"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Camera,
  ChevronDown,
  Compass,
  Globe,
  GraduationCap,
  HandHeart,
  Handshake,
  HeartPulse,
  Home,
  ImageIcon,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Music4,
  Play,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Users,
  UserPlus,
  Video,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { navigation } from "@/data/navigation";
import { site } from "@/config/site";
import LuxuryDivider from "@/components/LuxuryDivider";

const dropdownIcons: Record<string, LucideIcon> = {
  foundation: Building2,
  founder: Users,
  journey: Compass,
  mission: Sparkles,
  governance: ShieldCheck,
  team: BriefcaseBusiness,
  education: GraduationCap,
  healthcare: HeartPulse,
  nutrition: UtensilsCrossed,
  elderly: HandHeart,
  environment: Leaf,
  culture: Landmark,
  temple: Landmark,
  gurukul: GraduationCap,
  heritage: Landmark,
  events: Music4,
  volunteer: Users,
  event: CalendarDays,
  sponsor: GraduationCap,
  professionals: Handshake,
  business: BriefcaseBusiness,
  professional: Users,
  businessconnect: BriefcaseBusiness,
  image: ImageIcon,
  video: Video,
  campaign: Megaphone,
  knowledge: BookOpenText,
};

export default function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState<string | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeAllMenus = () => {
    clearCloseTimer();
    setActiveMenu(null);
    setMobileAccordionOpen(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileAccordionOpen(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (dialog.current) {
      if (mobileMenuOpen) {
        dialog.current.showModal();
      } else if (dialog.current.open) {
        dialog.current.close();
      }
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleDesktopMenuEnter = (label: string) => {
    clearCloseTimer();
    setActiveMenu(label);
  };

  const handleDesktopMenuLeave = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const toggleDesktopMenu = (label: string) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  const closeMenuAndDrawer = () => {
    setActiveMenu(null);
    setMobileAccordionOpen(null);
    setMobileMenuOpen(false);
    if (dialog.current?.open) {
      dialog.current.close();
    }
  };

  const renderDesktopItem = (item: (typeof navigation)[number]) => {
    const hasChildren = Boolean(item.children?.length);
    const isCurrent = pathname === item.href;
    const isActive = activeMenu === item.label;

    if (!hasChildren) {
      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isCurrent ? "page" : undefined}
          className={`nav-item ${isCurrent ? "is-active" : ""}`}
        >
          {item.label === "Home" ? <Home size={15} /> : null}
          <span>{item.label}</span>
        </Link>
      );
    }

    const children = item.children ?? [];

    return (
      <div
        key={item.href}
        className={`nav-dropdown ${isActive ? "is-open" : ""}`}
        onMouseEnter={() => handleDesktopMenuEnter(item.label)}
        onMouseLeave={handleDesktopMenuLeave}
      >
        <button
          type="button"
          className={`nav-item nav-trigger ${isCurrent ? "is-active" : ""}`}
          onClick={() => toggleDesktopMenu(item.label)}
          onFocus={() => handleDesktopMenuEnter(item.label)}
          aria-expanded={isActive}
          aria-haspopup="menu"
          aria-controls={`submenu-${item.label}`}
        >
          <span>{item.label}</span>
          <ChevronDown size={12} className={`nav-chevron ${isActive ? "is-open" : ""}`} />
        </button>

        <div
          id={`submenu-${item.label}`}
          className={`nav-dropdown-menu ${isActive ? "is-open" : ""}`}
          role="menu"
          aria-label={`${item.label} submenu`}
          onMouseEnter={() => clearCloseTimer()}
          onMouseLeave={handleDesktopMenuLeave}
        >
          {children.map((child) => {
            const Icon = dropdownIcons[child.icon ?? "foundation"];
            return (
              <Link
                key={`${item.href}-${child.href}-${child.label}`}
                href={child.href}
                className="nav-dropdown-item"
                role="menuitem"
                onClick={closeMenuAndDrawer}
              >
                <span className="nav-dropdown-icon">
                  <Icon size={16} />
                </span>
                <span className="nav-dropdown-text-wrap">
                  <span className="nav-dropdown-label">{child.label}</span>
                  {child.description ? <span className="nav-dropdown-description">{child.description}</span> : null}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMobileItem = (item: (typeof navigation)[number]) => {
    const hasChildren = Boolean(item.children?.length);
    const isCurrent = pathname === item.href;
    const isOpen = mobileAccordionOpen === item.label;

    if (!hasChildren) {
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={closeMenuAndDrawer}
          aria-current={isCurrent ? "page" : undefined}
          className={`nav-item mobile-link ${isCurrent ? "is-active" : ""}`}
        >
          {item.label === "Home" ? <Home size={15} /> : null}
          <span>{item.label}</span>
        </Link>
      );
    }

    const children = item.children ?? [];

    return (
      <div key={item.href} className="mobile-accordion-item">
        <button
          type="button"
          className={`nav-item mobile-accordion-trigger ${isCurrent ? "is-active" : ""}`}
          aria-expanded={isOpen}
          onClick={() => setMobileAccordionOpen((current) => (current === item.label ? null : item.label))}
        >
          <span>{item.label}</span>
          <ChevronDown size={12} className={`nav-chevron ${isOpen ? "is-open" : ""}`} />
        </button>

        <div className={`mobile-submenu ${isOpen ? "is-open" : ""}`}>
          <div className="mobile-submenu-inner">
            {children.map((child) => {
              const Icon = dropdownIcons[child.icon ?? "foundation"];
              return (
                <Link
                  key={`${item.href}-${child.href}-${child.label}`}
                  href={child.href}
                  onClick={closeMenuAndDrawer}
                  className="mobile-submenu-item"
                >
                  <span className="nav-dropdown-icon">
                    <Icon size={16} />
                  </span>
                  <span>{child.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="site-header" ref={navRef}>
      <div className="top-utility-bar">
        <div className="container top-utility-inner">
          <div className="utility-meta">
            <span className="utility-item">
              <MapPin size={14} />
              <span>{site.address}</span>
            </span>
            <span className="utility-divider" aria-hidden="true" />
            <span className="utility-item">
              <Mail size={14} />
              <span>{site.email}</span>
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
              {navigation.map(renderDesktopItem)}
            </nav>
            <div className="nav-cta-group">
              <Link href="/register" className="nav-signup-button" aria-label="Sign up" title="Sign up">
                <UserPlus size={18} />
              </Link>
              <button
                type="button"
                className="mobile-toggle"
                aria-label="Open navigation menu"
                onClick={() => setMobileMenuOpen(true)}
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
            <span className="brand-tagline-lead">Compassion in action</span>
            <span className="brand-tagline-line" aria-hidden="true" />
            <span className="brand-tagline-main">
              <span>Connecting people</span>
              <i aria-hidden="true">·</i>
              <span>Serving humanity</span>
              <i aria-hidden="true">·</i>
              <span>Creating opportunities</span>
              <i aria-hidden="true">·</i>
              <span>Transforming lives</span>
            </span>
          </p>
        </div>
      </div>

      <dialog
        ref={dialog}
        className="mobile-menu"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setMobileMenuOpen(false);
          }
        }}
      >
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button type="button" className="icon-button" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)}>
            <X size={18} />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {navigation.map(renderMobileItem)}
          <Link href="/register" className="nav-signup-button mobile-nav-donate" onClick={closeMenuAndDrawer} aria-label="Sign up" title="Sign up">
            <UserPlus size={18} />
          </Link>
        </nav>
      </dialog>
    </header>
  );
}
