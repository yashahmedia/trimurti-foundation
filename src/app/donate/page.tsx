import DonationForm from "@/components/donate/DonationForm";
import HeroSlider from "@/components/home/HeroSlider";
import TransformLifeSupportPanel from "@/components/services/TransformLifeSupportPanel";
import SupportRequestForm from "@/components/home/SupportRequestForm";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  Sprout,
  UsersRound,
} from "lucide-react";
import { seo } from "@/lib/seo";
import styles from "./donate.module.css";

export const metadata = seo(
  "Request a Support",
  "/donate",
  "Request practical support from Trimurthi Foundation for education, healthcare, nutrition, soldiers’ families, environment, or culture and heritage.",
);

const impactAreas = [
  {
    title: "Education & Empowerment",
    description:
      "Opening doors to learning, building confidence, and helping students develop skills for a brighter, more independent future.",
    image: "/education_empowerment.png",
    alt: "Students learning together with educational support",
    href: "/services/education",
  },
  {
    title: "Healthcare Support",
    description:
      "Making compassionate care and health awareness more accessible to individuals and families.",
    image: "/healthcare_support.png",
    alt: "A healthcare professional caring for an older woman",
    href: "/services/healthcare",
  },
  {
    title: "Annadhan & Nutrition",
    description:
      "Bringing communities together through nourishing meals and food support, with dignity at the heart of care.",
    image: "/annadhan_nutrition.png",
    alt: "Community meal and nutrition support",
    href: "/services/nutrition",
  },
  {
    title: "Elderly Care",
    description:
      "Honouring our elders with companionship, compassionate support, and care that helps them feel valued and connected.",
    image: "/elderly_care.png",
    alt: "Caregiver supporting an elderly woman",
    href: "/services/elderly-care",
  },
  {
    title: "Stand With Our Soldiers",
    description:
      "Standing beside serving personnel, veterans, and their families with gratitude, compassion, and support for their wellbeing.",
    image: "/soldiers-family.webp",
    alt: "An Indian soldier spending time with his family",
    href: "/services/standing-with-soldiers",
  },
  {
    title: "Environment & Welfare",
    description:
      "Encouraging tree planting, sustainable habits, and community participation for greener neighbourhoods.",
    image: "/environment_welfare.png",
    alt: "A volunteer planting a young tree",
    href: "/services/environment-welfare",
  },
  {
    title: "Culture & Heritage",
    description:
      "Celebrating Indian traditions, arts, and shared heritage, connecting generations through culture.",
    image: "/culture_heritage.png",
    alt: "Indian heritage architecture representing culture and tradition",
    href: "/services/culture-heritage",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <HeroSlider />

      <SupportRequestForm />

      <section
        className={styles.waysSection}
        id="ways-to-transform"
        aria-labelledby="ways-title"
      >
        <div className={styles.contentWidth}>
          <header className={styles.sectionHeading}>
            <span className={styles.eyebrow}>A place to begin</span>
            <h2 id="ways-title">Ways You Can Transform a Life</h2>
          </header>
          <div className={styles.waysPanel}>
              <TransformLifeSupportPanel showRequestSupport={false} />
          </div>
        </div>
      </section>

      <section className={styles.whySection} aria-labelledby="why-title">
        <div className={styles.whyInner}>
          <div className={styles.whyMark} aria-hidden="true">
            <Sprout size={34} strokeWidth={1.35} />
          </div>
          <div className={styles.whyCopy}>
            <span className={styles.eyebrow}>A reason to show up</span>
            <h2 id="why-title">Why Your Support Matters</h2>
            <p>
              Your contribution is more than a donation. Depending on the need
              and the initiative, it can help sustain learning opportunities,
              healthcare support, nourishment, elderly care, community welfare,
              cultural preservation, or support for soldiers and their
              families. Each form of help meets a human need with care and
              respect.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.donationImpact} aria-labelledby="donation-impact-title">
        <div className={styles.contentWidth}>
          <header className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Support with purpose</span>
            <h2 id="donation-impact-title">What Your Donation Can Help Do</h2>
            <p>
              Your support can contribute to ongoing work across the
              Foundation&apos;s initiatives.
            </p>
          </header>
          <div className={styles.impactGrid}>
            <article className={styles.impactItem}>
              <BookOpen size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3>Education</h3>
              <p>
                Help create learning opportunities through educational
                assistance, mentorship, and skill development.
              </p>
            </article>
            <article className={styles.impactItem}>
              <HeartPulse size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3>Healthcare</h3>
              <p>
                Support healthcare assistance and awareness for individuals
                and families facing difficult situations.
              </p>
            </article>
            <article className={styles.impactItem}>
              <Sprout size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3>Nutrition</h3>
              <p>
                Contribute to nourishment and food assistance for people and
                families who need support.
              </p>
            </article>
            <article className={styles.impactItem}>
              <UsersRound size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3>Community Support</h3>
              <p>
                Help strengthen community initiatives, from elderly care to
                environmental and family welfare.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.areasSection} aria-labelledby="areas-title">
        <div className={styles.contentWidth}>
          <header className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Where support can reach</span>
            <h2 id="areas-title">Real Areas of Community Work</h2>
            <p>
              Explore the initiatives where people can learn more and get
              involved.
            </p>
          </header>
          <div className={styles.areasGrid}>
            {impactAreas.map((area) => (
              <Link
                className={styles.areaCard}
                href={area.href}
                key={area.title}
              >
                <span className={styles.areaImage}>
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                </span>
                <span className={styles.areaCopy}>
                  <strong>{area.title}</strong>
                  <span>{area.description}</span>
                  <span className={styles.areaLink}>
                    Explore initiative <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formSection} aria-labelledby="donation-title">
        <div className={styles.contentWidth}>
          <div className={styles.donationPanel} id="donation-form">
            <header className="donation-panel-heading">
              <span className="donation-badge">Support a Cause</span>
              <h2 id="donation-title">Make your contribution</h2>
              <p>
                Share your details and choose how you would like to support
                Trimurthi Foundation.
              </p>
            </header>
            <DonationForm />
            <p className="donation-thank-you">
              Thank you for considering a contribution to the Foundation&apos;s
              work.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.finalSection} aria-labelledby="together-title">
        <div className={styles.finalInner}>
          <span className={styles.eyebrow}>Many ways, one shared purpose</span>
          <h2 id="together-title">Together, We Can Transform a Life</h2>
          <p>
            Whether you give your time, knowledge, resources, or financial
            support, your contribution can help create hope, dignity, and
            opportunity.
          </p>
          <div className={styles.finalActions}>
            <Link className="button" href="#donation-form">
              Donate to a Cause <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="button secondary" href="/volunteer">
              Volunteer Your Time
            </Link>
            <Link className={styles.exploreLink} href="/initiatives">
              Explore Our Initiatives
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
