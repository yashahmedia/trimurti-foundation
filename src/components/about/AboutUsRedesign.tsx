import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { philosophyItems } from "@/data/philosophy";
import {
  connectAreas,
  foundationPillars,
  foundationValues,
  founders,
  trustPrinciples,
} from "@/data/aboutPage";
import {
  AdvisoryTeamSection,
  GovernanceSection,
  MissionVisionSection,
} from "./AboutUsFeatureSections";
import styles from "./AboutUsRedesign.module.css";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
};

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  theme = "light",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.sectionHeading} ${theme === "dark" ? styles.darkHeading : ""} ${align === "center" ? styles.center : ""}`}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </div>
  );
}

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <Icon size={22} strokeWidth={1.7} />
    </span>
  );
}

export default function AboutUsRedesign() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <Image
          src="/herobanner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>About Trimurthi Foundation</p>
            <h1 id="about-hero-title">
              Connecting People.
              <br className={styles.heroBreak} />
              {" "}Serving Humanity.
              <br className={styles.heroBreak} />
              {" "}<span>Transforming Lives.</span>
            </h1>
            <p className={styles.heroDescription}>
              Building a compassionate, connected and empowered community where
              people come together to support, uplift and grow with one another.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#about-foundation">
                Discover Our Purpose <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className={styles.secondaryButton} href="/volunteer">
                Join Trimurthi Family
              </Link>
            </div>
          </div>
        </div>
        <a className={styles.scrollCue} href="#trust-strip" aria-label="Scroll to learn about our values">
          <span>Scroll to explore</span>
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </section>

      <section className={styles.trustStrip} id="trust-strip" aria-label="Our values in action">
        <div className={styles.trustInner}>
          {trustPrinciples.map(({ title, description, Icon }) => (
            <article className={styles.trustItem} key={title}>
              <IconBadge Icon={Icon} />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.whoSection} ${styles.reveal}`} id="about-foundation" aria-labelledby="who-title">
        <div className={styles.container}>
          <div className={styles.whoGrid}>
            <div className={styles.storyVisual}>
              <span className={styles.storyFrame} aria-hidden="true" />
              <div className={styles.storyMainImage}>
                <Image src="/elder support.png" alt="Community support and care" fill sizes="(max-width: 760px) 90vw, 44vw" />
              </div>
              <div className={styles.storyInsetImage}>
                <Image src="/education-support.png" alt="Learning support for students" fill sizes="(max-width: 760px) 42vw, 18vw" />
              </div>
            </div>
            <div className={styles.whoCopy}>
              <p className={styles.eyebrow}>About Trimurthi Foundation</p>
              <h2 id="who-title">Connecting People. Serving Humanity. Creating Opportunities. Transforming Lives.</h2>
              <p>
                Trimurthi Foundation is a public charitable initiative founded with
                a simple belief: when people come together with compassion,
                knowledge and a genuine desire to serve, they can create meaningful
                and lasting change.
              </p>
              <p>
                Our journey is rooted in values of integrity, humility,
                education, compassion and service. While our work is inspired by
                the values and heritage we have grown up with, our commitment is to
                serve people without distinction and to create opportunities that
                make a positive difference in the lives of individuals, families and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.editorialSection} ${styles.reveal}`} aria-labelledby="what-we-do-title">
        <div className={styles.container}>
          <div className={styles.editorialInner}>
            <h2 id="what-we-do-title" className={styles.editorialHeading}>What We Do</h2>
            <p className={styles.editorialParagraph}>
              Our work broadly encompasses Community Care &amp; Social Impact, Nature &amp; Sustainability, and Culture &amp; Heritage.
              Through these areas, we seek to support deserving individuals and communities through initiatives relating to education, healthcare, nutrition, elderly care, environmental awareness, support for our soldiers, cultural preservation, traditional arts, temples, heritage and access to India's rich knowledge traditions.
              But we believe that service is not only about giving.
              It is also about creating opportunities, building connections and helping people become stronger and more self-reliant.
            </p>
            <div className={styles.whatWeDoGallery} aria-hidden="true">
              <div className={styles.galleryCard}>
                <Image src="/education.png" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" />
              </div>
              <div className={styles.galleryCard}>
                <Image src="/healthcare_support.png" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" />
              </div>
              <div className={styles.galleryCard}>
                <Image src="/culture_heritage.png" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.connectSection} ${styles.reveal}`} aria-labelledby="trimurthi-connect-title">
        <div className={styles.container}>
          <div className={styles.editorialInner}>
            <h2 id="trimurthi-connect-title" className={styles.editorialHeading}>Trimurthi Connect</h2>
            <div className={styles.connectLayout}>
              <p className={styles.editorialParagraph}>
                An important part of our vision is <strong>Trimurthi Connect</strong> — a community platform designed to connect people with opportunities, knowledge, skills, businesses, professionals, services and mentorship.
                Whether someone is looking for a career opportunity, seeking guidance, building a business, offering professional expertise or simply looking for a way to contribute, Trimurthi Connect aims to create meaningful connections that can help people move forward.
              </p>
              <div className={styles.connectVisual} aria-hidden="true">
                <Image src="/education-support.png" alt="" fill sizes="(max-width: 760px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.beliefSection} ${styles.reveal}`} aria-labelledby="our-belief-title">
        <div className={styles.container}>
          <div className={styles.editorialInner}>
            <h2 id="our-belief-title" className={styles.editorialHeading}>Our Belief</h2>
            <div className={styles.beliefContent}>
              <div className={styles.beliefLayout}>
                <div className={styles.beliefVisual} aria-hidden="true">
                  <Image src="/elder support.png" alt="" fill sizes="(max-width: 760px) 100vw, 1000px" />
                </div>
                <div className={styles.beliefText}>
                  <p className={styles.editorialParagraph}>
                    We believe that every individual has the potential to make a difference.
                    Sometimes that difference comes through financial support. Sometimes it comes through knowledge, time, skills, mentorship, opportunity or simply being there for someone.
                  </p>
                  <p className={styles.editorialParagraph}>
                    <strong>Our purpose is to bring these people together — those who need support, those who can provide it, and those who want to create something meaningful for society.</strong>
                  </p>
                </div>
              </div>
              <div className={styles.beliefCardGroup} aria-label="Core belief points">
                <div className={styles.beliefPointCard}><span>Connecting people.</span></div>
                <div className={styles.beliefPointCard}><span>Serving humanity.</span></div>
                <div className={styles.beliefPointCard}><span>Creating opportunities.</span></div>
                <div className={styles.beliefPointCard}><span>Transforming lives.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.founderSection} ${styles.reveal}`} id="founder" aria-labelledby="founders-title">
        <div className={styles.container}>
          <SectionHeading
            id="founders-title"
            eyebrow="Our Founders"
            title="Three Brothers. One Purpose."
            description="Trimurthi Foundation was founded by three brothers who share a common belief that success becomes meaningful when it creates value for others."
            align="center"
          />
          <div className={styles.founderGrid}>
            {founders.map(({ initials, name, role, background }, index) => (
              <article className={styles.founderCard} key={name}>
                <div className={`${styles.founderPortrait} ${index === 1 ? styles.founderPortraitWarm : index === 2 ? styles.founderPortraitCool : ""}`} aria-hidden="true">
                  <span>{initials}</span>
                  <span className={styles.portraitRule} />
                </div>
                <div className={styles.founderMeta}>
                  <p className={styles.founderRole}>{role}</p>
                  <h3>{name}</h3>
                  <p className={styles.founderBackground}>{background}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.journeySection} ${styles.reveal}`} aria-labelledby="journey-title">
        <div className={styles.container}>
          <div className={styles.journeyStory}>
            <h2 id="journey-title" className={styles.journeyTitle}>Our journey</h2>
            <p className={styles.journeyQuote}>“The strength of an institution is not measured by the buildings it owns or the funds it manages, but by the values it preserves and the lives it transforms.”</p>

            <div className={styles.journeyShowcase} aria-hidden="true">
              <figure className={styles.journeyMediaCard}>
                <Image src="/elder support.png" alt="" fill sizes="(max-width: 760px) 46vw, 24vw" />
              </figure>
              <figure className={styles.journeyMediaCardLarge}>
                <Image src="/culture_heritage.png" alt="" fill sizes="(max-width: 760px) 56vw, 28vw" />
              </figure>
              <figure className={styles.journeyMediaCard}>
                <Image src="/education-support.png" alt="" fill sizes="(max-width: 760px) 40vw, 18vw" />
              </figure>
            </div>

            <div className={styles.journeyTimeline} aria-label="Our journey timeline">
              <article className={styles.journeyChapter}>
                <span className={styles.journeyNode} aria-hidden="true">01</span>
                <div className={styles.journeyImageWrap} aria-hidden="true">
                  <Image src="/Every Institution Has a Beginning.png" alt="" fill sizes="(max-width: 760px) 100vw, 36vw" className={styles.journeyImage} />
                </div>
                <div className={styles.journeyContent}>
                  <h3>Every Institution Has a Beginning</h3>
                  <p>Every institution has a story. For Trimurthi Foundation, that story began long before this Foundation was formally established.</p>
                  <p>It began in a modest middle-class home in Thrissur, Kerala, where three brothers were raised with the belief that integrity, compassion, humility and service are among life's greatest values.</p>
                  <p>In 1997, our family experienced a profound loss when our father passed away while we were still in school. That early loss became an important part of our formative years and shaped our understanding of responsibility, resilience and the importance of family.</p>
                  <p>At the centre of our lives was our beloved mother, Mrs. P. V. Lakshmi, whose courage, strength and unwavering values guided us through those years. She taught us that education creates opportunity, integrity builds trust, and success carries with it a responsibility to uplift others.</p>
                </div>
              </article>

              <article className={styles.journeyChapter}>
                <span className={styles.journeyNode} aria-hidden="true">02</span>
                <div className={styles.journeyImageWrap} aria-hidden="true">
                  <Image src="/Values That Shaped Us.png" alt="" fill sizes="(max-width: 760px) 100vw, 36vw" className={styles.journeyImage} />
                </div>
                <div className={styles.journeyContent}>
                  <h3>Values That Shaped Us</h3>
                  <p>Long before we thought of creating a charitable foundation, service was already part of our lives.</p>
                  <p>Our early involvement in temple festivals, cultural programmes and community activities taught us the importance of teamwork, responsibility and giving without expecting recognition. It also nurtured our appreciation for India's rich cultural and spiritual heritage.</p>
                  <p>These early experiences planted the seeds of a belief that has remained with us: meaningful service can take many forms — supporting someone in need, sharing knowledge, creating an opportunity, preserving a tradition or simply standing beside someone when they need support.</p>
                </div>
              </article>

              <article className={styles.journeyChapter}>
                <span className={styles.journeyNode} aria-hidden="true">03</span>
                <div className={styles.journeyImageWrap} aria-hidden="true">
                  <Image src="/A Journey Beyond Borders.png" alt="" fill sizes="(max-width: 760px) 100vw, 36vw" className={styles.journeyImage} />
                </div>
                <div className={styles.journeyContent}>
                  <h3>A Journey Beyond Borders</h3>
                  <p>As we moved forward in our professional lives, our journey took us to the United Arab Emirates. While building our careers overseas, our connection with India and our commitment to community remained strong.</p>
                  <p>We were also among the founding members of our school alumni association's UAE chapter, which became a platform for bringing former students together and giving back to the wider community. Through the alumni network, we were involved in initiatives such as blood donation camps, food distribution to labour communities, assistance to people seeking employment and other community support activities.</p>
                  <p>These experiences gave us an opportunity to understand the value of organised community service and the difference that can be created when people come together with a shared purpose.</p>
                  <p>Living and working in a multicultural environment also broadened our perspectives and reinforced our belief in collaboration, mutual respect and the power of communities to support one another.</p>
                  <p>Over the years, we went on to organise and support various cultural, educational, spiritual and community initiatives, including Vasantha Utsavam – A Festival of Music and Dance, founded in 2015, which provides a platform to celebrate India's classical music and dance traditions while encouraging established and emerging artists.</p>
                </div>
              </article>

              <article className={styles.journeyChapter}>
                <span className={styles.journeyNode} aria-hidden="true">04</span>
                <div className={styles.journeyImageWrap} aria-hidden="true">
                  <Image src="/From Experience to Purpose.png" alt="" fill sizes="(max-width: 760px) 100vw, 36vw" className={styles.journeyImage} />
                </div>
                <div className={styles.journeyContent}>
                  <h3>From Experience to Purpose</h3>
                  <p>Over the years, we encountered people with different needs and aspirations — individuals seeking opportunities, young people looking for guidance, professionals willing to share their knowledge, entrepreneurs seeking connections and communities that could benefit from collective support.</p>
                  <p>These experiences gradually shaped a broader vision.</p>
                  <p>We came to believe that service is not only about giving; it is also about connecting people with opportunities, knowledge, skills and relationships that can help them move forward.</p>
                  <p>This became the inspiration behind Trimurthi Foundation and its two complementary dimensions — serving communities through meaningful social and cultural initiatives, and creating opportunities and connections through Trimurthi Connect.</p>
                </div>
              </article>

              <article className={styles.journeyChapter}>
                <span className={styles.journeyNode} aria-hidden="true">05</span>
                <div className={styles.journeyImageWrap} aria-hidden="true">
                  <Image src="/The Journey Continues.png" alt="" fill sizes="(max-width: 760px) 100vw, 36vw" className={styles.journeyImage} />
                </div>
                <div className={styles.journeyContent}>
                  <h3>The Journey Continues</h3>
                  <p>Trimurthi Foundation is not the beginning of our journey. It is the next chapter of a journey shaped by family, values, experience, community and service.</p>
                  <p>Today, our aspiration is to build an institution that grows beyond the three of us — bringing together individuals, professionals, entrepreneurs, volunteers and well-wishers who believe they can contribute something meaningful to society.</p>
                  <p>Whether through time, knowledge, skills, resources, mentorship or compassion, every contribution has the potential to make a difference.</p>
                </div>
              </article>

              <div className={styles.journeyEnding}>
                <p>The journey that began in a small home in Thrissur continues with a larger purpose — to connect people, serve humanity, create opportunities and transform lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.pillarsSection} ${styles.reveal}`} aria-labelledby="pillars-title">
        <div className={styles.container}>
          <SectionHeading
            id="pillars-title"
            title="Two Pillars. One Shared Purpose."
            description="Our purpose is built around two complementary pillars: serving people with care and connecting communities with opportunity."
            theme="dark"
            align="center"
          />
          <div className={styles.pillarGrid}>
            {foundationPillars.map(({ number, title, description, focus, Icon, href }) => (
              <article className={styles.pillarCard} key={number}>
                <span className={styles.pillarNumber} aria-hidden="true">{number}</span>
                <IconBadge Icon={Icon} />
                <h3>{title}</h3>
                <p className={styles.pillarDescription}>{description}</p>
                <ul className={styles.focusList}>
                  {focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className={styles.cardArrowLink} href={href} aria-label={`Explore ${title}`}>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.philosophySection} ${styles.reveal}`} id="journey" aria-labelledby="philosophy-title">
        <div className={styles.container}>
          <SectionHeading
            id="philosophy-title"
            eyebrow="Our Philosophy"
            title="The Trimurthy Philosophy"
            description="Five principles that guide our purpose, people and impact."
            align="center"
          />
          <div className={styles.philosophyGrid}>
            {philosophyItems.map(({ title, description, image, alt, icon: Icon }) => (
              <article className={styles.philosophyCard} key={title}>
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  className={styles.philosophyCardImage}
                />
                <span className={styles.philosophyCardOverlay} aria-hidden="true" />
                <div className={styles.philosophyCardContent}>
                  <span className={styles.philosophyIcon} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.connectSection} ${styles.reveal}`} id="trimurti-connect" aria-labelledby="connect-title">
        <div className={styles.container}>
          <SectionHeading
            id="connect-title"
            eyebrow="Trimurthi Connect"
            title="Connecting People. Creating Opportunities."
            description="Trimurthi Connect is a community ecosystem bringing together professionals, entrepreneurs, service providers, volunteers and well-wishers."
            theme="dark"
          />
          <div className={styles.connectGrid}>
            {connectAreas.map(({ title, description, Icon, href }) => (
              <Link className={styles.connectCard} href={href} key={title}>
                <IconBadge Icon={Icon} />
                <h3>{title}</h3>
                <p>{description}</p>
                <span className={styles.connectArrow} aria-hidden="true"><ArrowRight size={20} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <GovernanceSection />
      <AdvisoryTeamSection />

    </div>
  );
}