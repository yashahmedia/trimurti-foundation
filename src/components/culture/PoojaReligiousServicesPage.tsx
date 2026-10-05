"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  Coins,
  Copy,
  Flame,
  Flower2,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Upload,
  Waves,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./PoojaReligiousServicesPage.module.css";

type PoojaService = {
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  Icon: LucideIcon;
};

type BookingDetails = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
  city: string;
  participants: string;
  gotra: string;
  nakshatra: string;
  notes: string;
  confirmed: boolean;
  utr: string;
};

type DialogMode = "booking" | "enquiry" | null;
type DialogStep = "details" | "payment" | "success";

const services: PoojaService[] = [
  {
    title: "Ganapathy Homam",
    category: "Auspiciousness & removal of obstacles",
    description:
      "Ganapathy Homam is traditionally performed to invoke the blessings of Lord Ganesha, the remover of obstacles. It is believed to bring auspiciousness, clarity and positive energy, helping overcome obstacles and create a favourable beginning for important undertakings.",
    price: 3000,
    image: "/Ganapathy-Homam.webp",
    imageAlt: "Ganapathy Homam being performed before Lord Ganesha",
    Icon: Sparkles,
  },
  {
    title: "Dhanvantari Pooja & Ayush Homam",
    category: "Health, well-being & longevity",
    description:
      "Dhanvantari Pooja and Ayush Homam are traditionally associated with prayers for health, healing, longevity and well-being. Performing these rituals is believed to invoke blessings for vitality, strength, good health and a long and fulfilling life.",
    price: 3000,
    image: "/dhanvantri-puja.jpg",
    imageAlt: "Dhanvantari pooja and Ayush Homam devotional scene",
    Icon: HeartPulse,
  },
  {
    title: "Bhagavathi Seva",
    category: "Peace, protection & family well-being",
    description:
      "Bhagavathi Seva is a traditional form of worship of the Divine Mother, particularly associated with Kerala. Performed with lamps, prayers and devotional offerings, it is traditionally believed to invoke blessings for peace, protection, prosperity and the well-being of individuals and families.",
    price: 3000,
    image: "/bhagavathi_seva.jpg",
    imageAlt: "Bhagavathi Seva with devotional lamps and offerings",
    Icon: Flower2,
  },
  {
    title: "Swayamvara Parvathi Pooja",
    category: "Marriage & Family Life",
    description:
      "Swayamvara Parvathi Pooja is dedicated to Goddess Parvathi and is traditionally associated with marriage and family life. Performing this pooja is believed to remove obstacles related to marriage and invoke blessings for a suitable life partner, harmony, compatibility and a happy family life.",
    price: 3000,
    image: "/Swayamvara-Parvathi-Pooja.png",
    imageAlt: "Devotional image of Lord Shiva and Goddess Parvathi",
    Icon: HeartHandshake,
  },
  {
    title: "Navagraha Homam",
    category: "Planetary harmony & well-being",
    description:
      "Navagraha Homam is performed to invoke the blessings of the nine planetary deities recognised in Hindu tradition. It is traditionally believed to promote harmony and balance, reduce the effects of unfavourable planetary influences and bring peace, well-being and auspiciousness.",
    price: 4000,
    image: "/Navagraha-Homam.jpg",
    imageAlt: "Navagraha Homam artwork featuring the nine planetary deities",
    Icon: Waves,
  },
  {
    title: "Maha Mrityunjaya Homam",
    category: "Health, Long Life & protection",
    description:
      "Maha Mrityunjaya Homam is dedicated to Lord Shiva and is traditionally associated with prayers for health, strength and protection. Performing this homam is believed to provide spiritual strength, promote well-being and bring peace, courage and positive energy during challenging periods.",
    price: 4000,
    image: "/Maha-Mrityunjaya-Homam.jpg",
    imageAlt: "Sacred homam fire burning in a decorated ritual altar",
    Icon: ShieldCheck,
  },
  {
    title: "Lakshmi Kubera Pooja",
    category: "For Prosperity, Abundance & Financial Well-being",
    description:
      "Lakshmi Kubera Pooja is dedicated to Goddess Lakshmi and Lord Kubera, traditionally associated with prosperity and abundance. Performing this pooja is believed to invoke blessings for financial stability, prosperity, abundance and overall well-being, while fostering an auspicious and positive environment for individuals and families.",
    price: 3000,
    image: "/Lakshmi-Kubera-Pooja.jpg",
    imageAlt: "Goddess Lakshmi and Lord Kubera with traditional offerings",
    Icon: Coins,
  },
  {
    title: "Saraswati Pooja",
    category: "Knowledge, learning & arts",
    description:
      "Saraswati Pooja is dedicated to Goddess Saraswati, revered as the embodiment of knowledge, wisdom, learning and the arts. Performing this pooja is traditionally believed to support learning, concentration, creativity and intellectual growth, making it especially auspicious for students, teachers and artists.",
    price: 3000,
    image: "/Saraswati-Pooja.jpg",
    imageAlt: "Goddess Saraswati holding a veena among books and offerings",
    Icon: BookOpen,
  },
  {
    title: "Shanti Pooja",
    category: "Peace & harmony",
    description:
      "Shanti Pooja is traditionally performed with prayers for peace, harmony and well-being. Performing this pooja is believed to create a positive and peaceful environment, reduce negativity and promote harmony within the home and family, bringing greater tranquillity and spiritual well-being.",
    price: 3000,
    image: "/shanti-puja.webp",
    imageAlt: "Peaceful pooja altar arranged with lamps, flowers and offerings",
    Icon: HandHeart,
  },
];

const trustItems = [
  {
    title: "Authentic Traditions",
    description: "Respecting established customs and practices.",
    Icon: Flower2,
  },
  {
    title: "Thoughtful Coordination",
    description: "Helping families organise important ceremonies with care.",
    Icon: CalendarDays,
  },
  {
    title: "Transparent Process",
    description: "Clear communication regarding arrangements and applicable charges.",
    Icon: ShieldCheck,
  },
  {
    title: "Meaningful Occasions",
    description: "Supporting families through important spiritual and cultural moments.",
    Icon: HeartHandshake,
  },
];

const otherCeremonyServices = [
  {
    title: "Grihapravesham / Housewarming",
    description: "Begin your new journey with a blessed and traditional Grihapravesham ceremony.",
    image: "/shanti-puja.webp",
    imageAlt: "Sacred kalash, diya, flowers and havan arranged for a Hindu pooja",
    Icon: Flower2,
  },
  {
    title: "Upanayanam",
    description: "A meaningful traditional ceremony arranged with care and devotion.",
    image: "/Ganapathy-Homam.webp",
    imageAlt: "Hindu homam taking place before Lord Ganesha with priests gathered around",
    Icon: Sparkles,
  },
  {
    title: "Marriage Ceremonies",
    description: "Complete wedding ceremony coordination with traditional rituals and arrangements.",
    image: "/Swayamvara-Parvathi-Pooja.png",
    imageAlt: "Devotional illustration of Lord Shiva and Goddess Parvathi",
    Icon: HeartHandshake,
  },
  {
    title: "Shashtiapthapoorthi",
    description: "A sacred milestone ceremony celebrating a meaningful life journey.",
    image: "/elder support.png",
    imageAlt: "Older community members sharing a moment with younger family members",
    Icon: HandHeart,
  },
  {
    title: "Bheema Ratha Shanti",
    description: "Traditional rituals performed for blessings, wellbeing and a peaceful new chapter.",
    image: "/Maha-Mrityunjaya-Homam.jpg",
    imageAlt: "A priest offers into a sacred homam fire in a Hindu temple",
    Icon: Flame,
  },
  {
    title: "Shatabhishekam",
    description: "A deeply meaningful traditional ceremony honouring longevity and blessings.",
    image: "/pooja-service.png",
    imageAlt: "A traditional Hindu pooja with a priest, sacred fire, flowers and lamps",
    Icon: ShieldCheck,
  },
];

const ancestralCeremonies = [
  "Shraddham",
  "Tarpanam and other Pitru Karyas",
  "Kashi / Varanasi Pitru Karyas",
  "Other traditional ancestral ceremonies",
];

const paymentDetails = [
  { label: "Account Name", value: "Trimurthi Foundation" },
  { label: "Account Number", value: "[ADD ACCOUNT NUMBER]" },
  { label: "IFSC Code", value: "[ADD IFSC CODE]" },
  { label: "Bank Name", value: "[ADD BANK NAME]" },
  { label: "UPI ID", value: "[ADD UPI ID]" },
];

const emptyDetails: BookingDetails = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  date: "",
  time: "",
  city: "",
  participants: "1",
  gotra: "",
  nakshatra: "",
  notes: "",
  confirmed: false,
  utr: "",
};

const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

function localDateString() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${today.getFullYear()}-${month}-${day}`;
}

export default function PoojaReligiousServicesPage() {
  const [dialogMode, setDialogMode] = useState<DialogMode>(null);
  const [dialogStep, setDialogStep] = useState<DialogStep>("details");
  const [selectedService, setSelectedService] = useState<PoojaService | null>(
    null,
  );
  const [enquirySubject, setEnquirySubject] = useState("");
  const [details, setDetails] = useState<BookingDetails>(emptyDetails);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [copiedDetail, setCopiedDetail] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (dialogMode && !dialog.open) dialog.showModal();
    if (!dialogMode && dialog.open) dialog.close();
  }, [dialogMode]);

  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 });
  }, [dialogMode, dialogStep]);

  function startBooking(service: PoojaService) {
    setSelectedService(service);
    setEnquirySubject("");
    setDetails(emptyDetails);
    setScreenshot(null);
    setDialogStep("details");
    setDialogMode("booking");
  }

  function startEnquiry(subject = "") {
    setSelectedService(null);
    setEnquirySubject(subject);
    setDetails(emptyDetails);
    setScreenshot(null);
    setDialogStep("details");
    setDialogMode("enquiry");
  }

  function closeDialog() {
    setDialogMode(null);
    setDialogStep("details");
  }

  function handleDetailsSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDialogStep(dialogMode === "booking" ? "payment" : "success");
  }

  function handlePaymentSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDialogStep("success");
  }

  async function copyPaymentDetail(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopiedDetail(label);
    window.setTimeout(() => setCopiedDetail(null), 1800);
  }

  const today = localDateString();
  const displayDate = details.date
    ? new Date(`${details.date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not selected";

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="pooja-title">
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Pooja &amp; Religious Services</p>
            <h1 id="pooja-title">Pooja &amp; Religious Services</h1>
            <p className={styles.heroLead}>
              Traditional rituals, performed with devotion, care and authenticity.
            </p>
            <p className={styles.heroDescription}>
              Trimurthi Foundation supports individuals and families in organising
              traditional poojas, homams and religious ceremonies with care,
              coordination and respect for established customs and traditions.
            </p>
            <p className={styles.heroNote}>
              <span aria-hidden="true" /> Arrangements made with care and respect
            </p>
          </div>
          <figure className={styles.heroVisual}>
            <Image
              src="/pooja-service.png"
              alt="A priest performing a homam before a flower-adorned shrine with brass lamps"
              fill
              loading="eager"
              sizes="(max-width: 760px) 100vw, 48vw"
              className={styles.heroImage}
            />
            <figcaption>
              <span>Rituals rooted in tradition</span>
              <span>Care in every detail</span>
            </figcaption>
          </figure>
        </div>
        <span className={styles.heroFootnote} aria-hidden="true">
          A considered approach to every occasion
        </span>
      </section>

      <section
        className={styles.servicesSection}
        id="pooja-services"
        aria-labelledby="services-title"
      >
        <div className={styles.container}>
          <header className={styles.sectionHeaderLight}>
            <p className={styles.eyebrow}>Our Services</p>
            <h2 id="services-title">Pooja &amp; Religious Services</h2>
            <p>
              Traditional rituals for auspicious beginnings, well-being,
              prosperity and spiritual harmony.
            </p>
          </header>
          <div className={styles.serviceGrid}>
            {services.map(({ title, category, description, price, image, imageAlt, Icon }, index) => (
              <article className={styles.serviceCard} key={title}>
                <div className={styles.serviceImage}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className={styles.serviceImageOverlay} aria-hidden="true" />
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <Icon size={21} strokeWidth={1.5} />
                  </span>
                  <span className={styles.serviceIndex}>0{index + 1}</span>
                  <div className={styles.serviceImageCopy}>
                    <h3>{title}</h3>
                    <p className={styles.serviceCategory}>{category}</p>
                  </div>
                </div>
                <div className={styles.serviceBody}>
                  <p className={styles.serviceDescription}>{description}</p>
                  <div className={styles.serviceFooter}>
                    <p className={styles.servicePrice}>
                      <span>Offering</span>
                      <strong>{formatPrice(price)}</strong>
                    </p>
                    <button
                      className={styles.serviceButton}
                      type="button"
                      onClick={() => startBooking(services[index])}
                    >
                      Host the Pooja <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.occasionSection} aria-labelledby="occasion-title">
        <div className={styles.container}>
          <header className={styles.sectionHeaderLight}>
            <p className={styles.eyebrow}>Beyond the pooja</p>
            <h2 id="occasion-title">Other Religious &amp; Traditional Services</h2>
            <p className={styles.sectionSubheading}>
              Supporting You Through Important Ceremonies &amp; Family Occasions
            </p>
            <p>
              Through our event management team, Trimurthi Foundation also
              supports families in organising and coordinating important
              religious, cultural and traditional ceremonies.
            </p>
          </header>
          <div className={styles.otherServiceGrid}>
            {otherCeremonyServices.map(({ title, description, image, imageAlt, Icon }) => (
              <article className={styles.otherServiceCard} key={title}>
                <div className={styles.otherServiceImage}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span className={styles.otherServiceImageOverlay} aria-hidden="true" />
                </div>
                <div className={styles.otherServiceBody}>
                  <div className={styles.otherServiceHeading}>
                    <span className={styles.otherServiceIcon} aria-hidden="true">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <p>{description}</p>
                  <button
                    className={styles.otherServiceButton}
                    type="button"
                    onClick={() => startEnquiry(title)}
                  >
                    Apply for Pooja <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.ancestralPanel}>
            <figure className={styles.ancestralImage}>
              <Image
                src="/Temple&heritage.png"
                alt="Traditional Hindu temple at sunset"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
              />
              <span className={styles.ancestralImageOverlay} aria-hidden="true" />
              <figcaption>Honouring family traditions</figcaption>
            </figure>
            <div className={styles.ancestralContent}>
              <p className={styles.eyebrow}>Ancestral observances</p>
              <h3>Pitru Karyas &amp; Ancestral Rituals</h3>
              <ul>
                {ancestralCeremonies.map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className={styles.ancestralButton}
                type="button"
                onClick={() => startEnquiry("Pitru Karyas & Ancestral Rituals")}
              >
                Apply for Ancestral Ritual <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.customSection} aria-labelledby="custom-title">
        <div className={`${styles.container} ${styles.customLayout}`}>
          <div className={styles.customCopy}>
            <p className={styles.eyebrow}>Personal arrangements</p>
            <h2 id="custom-title">Every Ceremony Is Unique</h2>
            <p>
              Each requirement is unique. Once we understand your requirements
              and discuss the arrangements with you, we will provide the
              applicable charges and other details. The service will proceed
              upon your confirmation and agreement to the proposed arrangements
              and charges.
            </p>
            <button
              className={styles.buttonPrimary}
              type="button"
              onClick={startEnquiry}
            >
              Discuss Your Requirements <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          <div className={styles.customAside} aria-hidden="true">
            <div className={styles.customRule} />
            <p>Thoughtfully arranged</p>
            <span>with devotion</span>
          </div>
        </div>
      </section>

      <section className={styles.trustSection} aria-labelledby="trust-title">
        <div className={styles.container}>
          <header className={styles.trustHeader}>
            <p className={styles.eyebrow}>A promise of care</p>
            <h2 id="trust-title">Tradition With Care</h2>
          </header>
          <div className={styles.trustGrid}>
            {trustItems.map(({ title, description, Icon }, index) => (
              <article className={styles.trustItem} key={title}>
                <span className={styles.trustIndex}>0{index + 1}</span>
                <span className={styles.trustIcon} aria-hidden="true">
                  <Icon size={23} strokeWidth={1.55} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-title">
        <Image
          src="/pooja-service.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.finalImage}
          aria-hidden="true"
        />
        <div className={styles.finalOverlay} aria-hidden="true" />
        <div className={styles.finalContent}>
          <span className={styles.finalMotif} aria-hidden="true">
            <Flame size={23} strokeWidth={1.3} />
          </span>
          <p className={styles.eyebrow}>With devotion and care</p>
          <h2 id="final-title">Begin Your Sacred Occasion</h2>
          <p>
            Whether you are planning a pooja, homam, family ceremony or
            traditional ritual, Trimurthi Foundation is here to help you
            organise the occasion with care and devotion.
          </p>
          <div className={styles.finalActions}>
            <a className={styles.buttonPrimary} href="#pooja-services">
              Host a Pooja <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link className={styles.buttonSecondary} href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <dialog
        className={styles.dialog}
        ref={dialogRef}
        aria-labelledby="booking-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={() => setDialogMode(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className={styles.dialogShell}>
          <header className={styles.dialogHeader}>
            <div>
              <p className={styles.eyebrow}>
                {dialogMode === "enquiry" ? "Personal arrangements" : "Pooja booking"}
              </p>
              <h2 id="booking-dialog-title">
                {dialogStep === "payment"
                  ? "Complete Your Payment"
                  : dialogStep === "success"
                    ? dialogMode === "enquiry"
                      ? "Thank You for Reaching Out"
                      : "Request Submitted Successfully"
                    : dialogMode === "enquiry"
                      ? "Discuss Your Requirements"
                      : "Host the Pooja"}
              </h2>
              <p>
                {dialogStep === "payment"
                  ? "Please complete the payment using the details below to confirm your request."
                  : dialogStep === "success"
                    ? dialogMode === "enquiry"
                      ? "Thank you for sharing your requirements with Trimurthi Foundation."
                      : "Thank you for choosing Trimurthi Foundation. Your pooja request has been received successfully. Our team will review the details and contact you regarding the arrangements."
                    : dialogMode === "enquiry"
                      ? "Tell us a little about the ceremony you have in mind."
                      : "Share your details and preferred arrangements with us."}
              </p>
            </div>
            <button
              className={styles.iconButton}
              type="button"
              onClick={closeDialog}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </header>

          {dialogMode === "booking" && (
            <ol className={styles.progress} aria-label="Booking progress">
              {[
                ["details", "01", "Details"],
                ["payment", "02", "Payment"],
                ["success", "03", "Confirmation"],
              ].map(([step, number, label]) => {
                const active = dialogStep === step;
                const complete =
                  (step === "details" && dialogStep !== "details") ||
                  (step === "payment" && dialogStep === "success");
                return (
                  <li
                    className={active ? styles.progressActive : complete ? styles.progressComplete : ""}
                    key={step}
                    aria-current={active ? "step" : undefined}
                  >
                    <span>{complete ? <Check size={13} /> : number}</span>
                    {label}
                  </li>
                );
              })}
            </ol>
          )}

          {dialogStep === "details" && dialogMode === "booking" && (
            <form className={styles.dialogForm} onSubmit={handleDetailsSubmit}>
              {selectedService && (
                <div className={styles.selectedService}>
                  <div>
                    <span>Selected Service</span>
                    <strong>{selectedService.title}</strong>
                  </div>
                  <div>
                    <span>Price</span>
                    <strong>{formatPrice(selectedService.price)}</strong>
                  </div>
                </div>
              )}
              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span>Full Name <i>*</i></span>
                  <input
                    autoFocus
                    autoComplete="name"
                    required
                    value={details.fullName}
                    onChange={(event) => setDetails({ ...details, fullName: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Phone Number <i>*</i></span>
                  <input
                    autoComplete="tel"
                    inputMode="tel"
                    minLength={7}
                    maxLength={20}
                    required
                    value={details.phone}
                    onChange={(event) => setDetails({ ...details, phone: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Email Address <i>*</i></span>
                  <input
                    autoComplete="email"
                    type="email"
                    required
                    value={details.email}
                    onChange={(event) => setDetails({ ...details, email: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Address <i>*</i></span>
                  <input
                    autoComplete="street-address"
                    required
                    value={details.address}
                    onChange={(event) => setDetails({ ...details, address: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Preferred Date <i>*</i></span>
                  <input
                    type="date"
                    min={today}
                    required
                    value={details.date}
                    onChange={(event) => setDetails({ ...details, date: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Preferred Time <i>*</i></span>
                  <input
                    type="time"
                    required
                    value={details.time}
                    onChange={(event) => setDetails({ ...details, time: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>City <i>*</i></span>
                  <input
                    autoComplete="address-level2"
                    required
                    value={details.city}
                    onChange={(event) => setDetails({ ...details, city: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Number of Participants <i>*</i></span>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    required
                    value={details.participants}
                    onChange={(event) => setDetails({ ...details, participants: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Gotra (if known)</span>
                  <input
                    autoComplete="off"
                    value={details.gotra}
                    onChange={(event) => setDetails({ ...details, gotra: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Nakshatra / Birth Star (if known)</span>
                  <input
                    autoComplete="off"
                    value={details.nakshatra}
                    onChange={(event) => setDetails({ ...details, nakshatra: event.target.value })}
                  />
                </label>
                <label className={`${styles.field} ${styles.fieldWide}`}>
                  <span>Special Requirements / Additional Notes</span>
                  <textarea
                    rows={3}
                    value={details.notes}
                    onChange={(event) => setDetails({ ...details, notes: event.target.value })}
                  />
                </label>
              </div>
              <label className={styles.confirmCheck}>
                <input
                  type="checkbox"
                  required
                  checked={details.confirmed}
                  onChange={(event) => setDetails({ ...details, confirmed: event.target.checked })}
                />
                <span>I confirm that the details provided above are correct.</span>
              </label>
              <div className={styles.dialogActions}>
                <button className={styles.cancelButton} type="button" onClick={closeDialog}>
                  Cancel
                </button>
                <button className={styles.submitButton} type="submit">
                  Continue to Payment <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}

          {dialogStep === "details" && dialogMode === "enquiry" && (
            <form className={styles.dialogForm} onSubmit={handleDetailsSubmit}>
              {enquirySubject && (
                <div className={styles.selectedService}>
                  <div>
                    <span>Selected Ceremony</span>
                    <strong>{enquirySubject}</strong>
                  </div>
                </div>
              )}
              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span>Full Name <i>*</i></span>
                  <input
                    autoFocus
                    autoComplete="name"
                    required
                    value={details.fullName}
                    onChange={(event) => setDetails({ ...details, fullName: event.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span>Phone Number <i>*</i></span>
                  <input
                    autoComplete="tel"
                    inputMode="tel"
                    minLength={7}
                    maxLength={20}
                    required
                    value={details.phone}
                    onChange={(event) => setDetails({ ...details, phone: event.target.value })}
                  />
                </label>
                <label className={`${styles.field} ${styles.fieldWide}`}>
                  <span>Email Address <i>*</i></span>
                  <input
                    autoComplete="email"
                    type="email"
                    required
                    value={details.email}
                    onChange={(event) => setDetails({ ...details, email: event.target.value })}
                  />
                </label>
                <label className={`${styles.field} ${styles.fieldWide}`}>
                  <span>Special Requirements / Additional Notes <i>*</i></span>
                  <textarea
                    rows={4}
                    required
                    value={details.notes}
                    onChange={(event) => setDetails({ ...details, notes: event.target.value })}
                  />
                </label>
              </div>
              <div className={styles.dialogActions}>
                <button className={styles.cancelButton} type="button" onClick={closeDialog}>
                  Cancel
                </button>
                <button className={styles.submitButton} type="submit">
                  Send Enquiry <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}

          {dialogStep === "payment" && selectedService && (
            <form className={styles.dialogForm} onSubmit={handlePaymentSubmit}>
              <div className={styles.paymentSummary}>
                <div>
                  <span>Selected Pooja</span>
                  <strong>{selectedService.title}</strong>
                </div>
                <div>
                  <span>Amount Payable</span>
                  <strong>{formatPrice(selectedService.price)}</strong>
                </div>
              </div>
              <div className={styles.paymentLayout}>
                <section className={styles.qrPanel} aria-labelledby="scan-pay-title">
                  <div className={styles.qrPlaceholder} role="img" aria-label="UPI QR code placeholder; payment details are not configured">
                    <span className={styles.qrFinderOne} />
                    <span className={styles.qrFinderTwo} />
                    <span className={styles.qrFinderThree} />
                    <span className={styles.qrLabel}>UPI</span>
                  </div>
                  <h3 id="scan-pay-title">Scan &amp; Pay</h3>
                  <p>Scan the QR code using your preferred UPI app to complete the payment.</p>
                  <small>QR placeholder — replace with the Foundation’s verified payment QR.</small>
                </section>
                <section className={styles.bankPanel} aria-labelledby="bank-details-title">
                  <h3 id="bank-details-title">Bank / Payment Details</h3>
                  <dl>
                    {paymentDetails.map(({ label, value }) => (
                      <div className={styles.bankDetail} key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                        <button
                          className={styles.copyButton}
                          type="button"
                          onClick={() => copyPaymentDetail(label, value)}
                          aria-label={`Copy ${label}`}
                        >
                          {copiedDetail === label ? <Check size={14} /> : <Copy size={14} />}
                          <span>{copiedDetail === label ? "Copied" : "Copy"}</span>
                        </button>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
              <div className={styles.paymentInputs}>
                <label className={`${styles.field} ${styles.fieldWide}`}>
                  <span>Payment Reference / UTR Number <i>*</i></span>
                  <input
                    autoFocus
                    autoComplete="off"
                    required
                    value={details.utr}
                    onChange={(event) => setDetails({ ...details, utr: event.target.value })}
                    placeholder="Enter your UTR / transaction reference number"
                  />
                </label>
                <label className={`${styles.field} ${styles.fieldWide} ${styles.uploadField}`}>
                  <span>Upload Payment Screenshot</span>
                  <span className={styles.uploadControl}>
                    <Upload size={17} aria-hidden="true" />
                    {screenshot ? screenshot.name : "Choose an image"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => setScreenshot(event.target.files?.[0] ?? null)}
                    />
                  </span>
                </label>
              </div>
              <div className={styles.dialogActions}>
                <button className={styles.cancelButton} type="button" onClick={() => setDialogStep("details")}>
                  Back to Details
                </button>
                <button className={styles.submitButton} type="submit">
                  Confirm Payment &amp; Submit <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}

          {dialogStep === "success" && (
            <div className={styles.successState}>
              <span className={styles.successIcon} aria-hidden="true">
                <CheckCircle2 size={38} strokeWidth={1.5} />
              </span>
              <p>
                {dialogMode === "enquiry"
                  ? "Thank you for sharing your requirements with Trimurthi Foundation."
                  : "Thank you for choosing Trimurthi Foundation. Your pooja request has been received successfully. Our team will review the details and contact you regarding the arrangements."}
              </p>
              {dialogMode === "booking" && selectedService && (
                <dl className={styles.successSummary}>
                  <div><dt>Pooja</dt><dd>{selectedService.title}</dd></div>
                  <div><dt>Amount</dt><dd>{formatPrice(selectedService.price)}</dd></div>
                  <div><dt>Date</dt><dd>{displayDate}</dd></div>
                  <div><dt>Name</dt><dd>{details.fullName}</dd></div>
                </dl>
              )}
              <button className={styles.submitButton} type="button" onClick={closeDialog}>
                Done <Check size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}