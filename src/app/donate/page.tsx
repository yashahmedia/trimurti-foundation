import DonationTrigger from "@/components/donate/DonationTrigger";
import HeroSlider from "@/components/home/HeroSlider";
import GeneralSupportRequestButton from "@/components/home/GeneralSupportRequestButton";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  HandHeart,
} from "lucide-react";
import { seo } from "@/lib/seo";
import VolunteerModal from "@/components/forms/VolunteerModal";
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
    href: "/services/education?requestSupport=1#request-support-cta-title",
  },
  {
    title: "Healthcare Support",
    description:
      "Making compassionate care and health awareness more accessible to individuals and families.",
    image: "/healthcare_support.png",
    alt: "A healthcare professional caring for an older woman",
    href: "/services/healthcare?requestSupport=1#request-support-cta-title",
  },
  {
    title: "Annadhan & Nutrition",
    description:
      "Bringing communities together through nourishing meals and food support, with dignity at the heart of care.",
    image: "/annadhan_nutrition.png",
    alt: "Community meal and nutrition support",
    href: "/services/nutrition?requestSupport=1#request-support-cta-title",
  },
  {
    title: "Elderly Care",
    description:
      "Honouring our elders with companionship, compassionate support, and care that helps them feel valued and connected.",
    image: "/elderly_care.png",
    alt: "Caregiver supporting an elderly woman",
    href: "/services/elderly-care?requestSupport=1#request-support-cta-title",
  },
  {
    title: "Stand With Our Soldiers",
    description:
      "Standing beside serving personnel, veterans, and their families with gratitude, compassion, and support for their wellbeing.",
    image: "/soldiers-family.webp",
    alt: "An Indian soldier spending time with his family",
    href: "/services/standing-with-soldiers?requestSupport=1#request-support-cta-title",
  },
  {
    title: "Environment & Welfare",
    description:
      "Encouraging tree planting, sustainable habits, and community participation for greener neighbourhoods.",
    image: "/environment_welfare.png",
    alt: "A volunteer planting a young tree",
    href: "/services/environment-welfare?requestSupport=1#request-support-cta-title",
  },
  {
    title: "Culture & Heritage",
    description:
      "Celebrating Indian traditions, arts, and shared heritage, connecting generations through culture.",
    image: "/culture_heritage.png",
    alt: "Indian heritage architecture representing culture and tradition",
    href: "/services/culture-heritage?requestSupport=1#request-support-cta-title",
  },
];

const supportSteps = [
  {
    title: "What do you need support with?",
    description: "Tell us the area in which you are seeking support.",
    Icon: HandHeart,
  },
  {
    title: "Tell us about your situation",
    description:
      "Explain your current circumstances and how you hope Trimurthi Foundation can help.",
    Icon: ClipboardCheck,
  },
  {
    title: "Explore the next steps",
    description:
      "Our team will review your request and explore appropriate support options with you.",
    Icon: HandHeart,
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <HeroSlider />

      <section
        className={styles.helpSection}
        id="ways-to-transform"
        aria-labelledby="ways-title"
      >
        <div className={styles.helpInner}>
          <div className={styles.helpCopy}>
            <span className={styles.eyebrow}>For people seeking help</span>
            <h2 id="ways-title">
              You don’t have to face a difficult time alone.
            </h2>
            <p>
              Whether you need support for yourself or someone close to you,
              your situation deserves to be heard with care. Tell us what is
              happening, and our team can help you understand possible next
              steps.
            </p>
            <div className={styles.helpPromise}>
              <HandHeart size={20} strokeWidth={1.7} aria-hidden="true" />
              <span>Every request begins with listening and understanding.</span>
            </div>
            <GeneralSupportRequestButton />
          </div>
          <aside className={styles.helpGuide} aria-label="How we can guide you">
            <span className={styles.guideEyebrow}>
              A helping hand when you need it
            </span>
            <h3>Your journey towards support starts here.</h3>
            <ol>
              {supportSteps.map(({ title, description, Icon }, index) => (
                <li key={title}>
                  <span className={styles.stepIcon} aria-hidden="true">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>
                  <span className={styles.stepCopy}>
                    <span className={styles.stepNumber}>
                      STEP 0{index + 1}
                    </span>
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </span>
                </li>
              ))}
            </ol>
          </aside>
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
            <DonationTrigger className="button">
              Donate to a Cause <ArrowRight size={16} aria-hidden="true" />
            </DonationTrigger>
            <VolunteerModal className="button secondary">
              Volunteer Your Time
            </VolunteerModal>
            <Link className={styles.exploreLink} href="/initiatives">
              Explore Our Initiatives
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
