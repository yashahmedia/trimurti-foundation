"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Eye, HandHeart, Scale, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import styles from "./AboutUsRedesign.module.css";

const principles = [
  {
    number: "01",
    title: "Accountability",
    description: "Taking responsibility for every decision and every commitment.",
    Icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Transparency",
    description: "Keeping our work clear and understandable to those we serve.",
    Icon: Eye,
  },
  {
    number: "03",
    title: "Integrity",
    description: "Doing what is right, even when no one is watching.",
    Icon: Scale,
  },
  {
    number: "04",
    title: "Responsibility",
    description: "Using every opportunity and resource with purpose and care.",
    Icon: HandHeart,
  },
];

export function MissionVisionSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={`${styles.section} ${styles.missionSection}`}
      id="mission-vision"
      aria-labelledby="mission-vision-title"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.missionHeader}
          initial={false}
          whileInView={
            reducedMotion ? {} : { opacity: [0, 1], y: [22, 0] }
          }
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className={styles.eyebrow}>Our purpose</p>
          <h2 id="mission-vision-title">Our Mission &amp; Vision</h2>
          <p>Driven by compassion. Guided by purpose.</p>
        </motion.div>

        <div className={styles.missionEditorial}>
          <article className={`${styles.missionBlock} ${styles.missionBlockMission}`}>
            <motion.div
              className={styles.missionVisual}
              initial={false}
              whileInView={
                reducedMotion
                  ? {}
                  : { clipPath: ["inset(12% 0 0 0)", "inset(0% 0 0 0)"] }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Image
                src="/elder support.png"
                alt="A younger community member offering support to older adults"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span className={styles.missionImageNote}>Care, with dignity</span>
            </motion.div>
            <motion.div
              className={styles.missionCopy}
              initial={false}
              whileInView={
                reducedMotion ? {} : { opacity: [0, 1], x: [22, 0] }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            >
              <p className={styles.missionKicker}>01 / Mission</p>
              <h3>Every life deserves an opportunity.</h3>
              <p>
                Our mission is to serve people with dignity and compassion,
                creating opportunities that help individuals and communities
                move towards a more secure, inclusive and hopeful future.
              </p>
              <span className={styles.missionRule} aria-hidden="true" />
            </motion.div>
          </article>

          <article className={`${styles.missionBlock} ${styles.missionBlockVision}`}>
            <motion.div
              className={styles.missionVisual}
              initial={false}
              whileInView={
                reducedMotion
                  ? {}
                  : { clipPath: ["inset(0 0 12% 0)", "inset(0% 0 0 0)"] }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            >
              <Image
                src="/education-support.png"
                alt="A teacher helping students learn together"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span className={styles.missionImageNote}>Room to grow</span>
            </motion.div>
            <motion.div
              className={styles.missionCopy}
              initial={false}
              whileInView={
                reducedMotion ? {} : { opacity: [0, 1], x: [-22, 0] }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            >
              <p className={styles.missionKicker}>02 / Vision</p>
              <h3>A future where no one is left behind.</h3>
              <p>
                We envision a society where every person has the opportunity to
                learn, grow, contribute and live with dignity, regardless of
                their circumstances.
              </p>
              <span className={styles.missionRule} aria-hidden="true" />
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function GovernanceSection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 52%"],
  });
  const imageY = useTransform(
    sectionProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [18, -18],
  );
  const lineScale = useTransform(
    timelineProgress,
    [0, 0.9],
    reducedMotion ? [1, 1] : [0, 1],
  );

  return (
    <section
      className={`${styles.section} ${styles.governanceEditorial}`}
      id="governance"
      aria-labelledby="governance-title"
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.governanceIntro}>
          <motion.div
            className={styles.governanceImage}
            style={{ y: imageY }}
            initial={false}
            whileInView={
              reducedMotion
                ? {}
                : { clipPath: ["inset(10% 0 0 0)", "inset(0% 0 0 0)"] }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src="/environment_welfare.png"
              alt="Indian community members working together on a local initiative"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span className={styles.governanceImageCaption}>
              Decisions made with care
            </span>
          </motion.div>
          <motion.div
            className={styles.governanceCopy}
            initial={false}
            whileInView={
              reducedMotion ? {} : { opacity: [0, 1], x: [24, 0] }
            }
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 id="governance-title">Governance &amp; Transparency</h2>
            <h3 className={styles.governanceLead}>
              Building Trust Through Accountability
            </h3>
            <p>
              Trimurthi Foundation believes that trust is built through responsible governance, transparency and accountability.
            </p>
            <p>
              We are committed to conducting our activities in accordance with our governing documents and applicable laws and regulations. We believe our supporters, beneficiaries, volunteers and partners should have access to relevant information about the Foundation and its legal status.
            </p>
            <div className={styles.governancePromise} aria-hidden="true">
              <span>Trust</span>
              <i />
              <span>Responsibility</span>
              <i />
              <span>Impact</span>
            </div>
          </motion.div>
        </div>

        <div className={styles.principleJourney} ref={timelineRef}>
          <motion.span
            className={styles.principleJourneyLine}
            aria-hidden="true"
            style={{ scaleX: lineScale }}
          />
          <ol className={styles.principleList}>
            {principles.map(({ number, title, description, Icon }, index) => (
              <motion.li
                className={styles.principleItem}
                key={number}
                initial={false}
                whileInView={
                  reducedMotion
                    ? {}
                    : { opacity: [0, 1], x: [-14, 0] }
                }
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: 0.55,
                  delay: reducedMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
              >
                <span className={styles.principleNumber}>{number}</span>
                <span className={styles.principleIcon} aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function AdvisoryTeamSection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [10, -10],
  );

  return (
    <section
      className={`${styles.section} ${styles.advisorySection}`}
      id="team"
      aria-labelledby="advisory-title"
      ref={sectionRef}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.advisoryFeatureLayout}
          initial={false}
          whileInView={
            reducedMotion ? {} : { opacity: [0, 1], y: [18, 0] }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.advisoryPeople}>
            <motion.figure
              className={styles.advisoryImage}
              style={{ y: imageY }}
              initial={false}
              whileInView={
                reducedMotion
                  ? {}
                  : { clipPath: ["inset(8% 0 0 0)", "inset(0% 0 0 0)"] }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                  src="/elder support.png"
                  alt="A younger community member offering support to older adults"
                  fill
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
                <figcaption>People at the heart of our work</figcaption>
            </motion.figure>
            <div className={styles.advisoryMoments} aria-label="Community moments">
              <figure>
                <div className={styles.advisoryMomentImage}>
                  <Image
                    src="/education-support.png"
                    alt="A teacher helping children learn together"
                    fill
                    sizes="(max-width: 760px) 50vw, 20vw"
                  />
                </div>
                <figcaption>Learning, together</figcaption>
              </figure>
              <figure>
                <div className={styles.advisoryMomentImage}>
                  <Image
                    src="/health support.png"
                    alt="A healthcare worker supporting an older woman during a check-up"
                    fill
                    sizes="(max-width: 760px) 50vw, 20vw"
                  />
                </div>
                <figcaption>Care across generations</figcaption>
              </figure>
            </div>
          </div>

          <div className={styles.advisoryStory}>
            <p className={styles.eyebrow}>Advisory Board / Team</p>
            <h2 id="advisory-title">People who bring experience to purpose.</h2>
            <p>
              Behind every meaningful effort are people who listen with care,
              bring thoughtful experience and take responsibility for what
              comes next.
            </p>
            <p>
              Their guidance helps the Foundation serve communities with
              clarity, compassion and purpose.
            </p>
            <span className={styles.advisoryStoryRule} aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
