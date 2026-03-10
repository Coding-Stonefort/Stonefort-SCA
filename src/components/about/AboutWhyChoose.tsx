import Image from "next/image";
import styles from "./AboutWhyChoose.module.css";

export default function AboutWhyChoose() {
  return (
    <section className={styles.section} aria-label="Why Choose Stonefort">
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose <span>Stonefort MENA</span>?</h2>

        <p className={styles.lead}>
          Stonefort MENA gives traders in the region secure access to Stonefort’s fully regulated services.
          Trade confidently on cutting-edge platforms with professional account support, expert guidance,
          and clear, transparent processes. We combine education, technology, and client-focused assistance
          to help you make smarter trading decisions every step of the way.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Image
                src="/images/about/homeregulated.webp"
                alt=""
                width={140}
                height={140}
                className={`${styles.iconImg} ${styles.iconRegulated}`}
              />
            </div>
            <h3>Regulated & Trusted</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Image
                src="/images/about/market-indices.webp"
                alt=""
                width={140}
                height={140}
                className={`${styles.iconImg} ${styles.iconMarket}`}
              />
            </div>
            <h3>Reliable Market Access</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Image
                src="/images/about/UAE-Based-Expertise.webp"
                alt=""
                width={140}
                height={140}
                className={`${styles.iconImg} ${styles.iconUae}`}
              />
            </div>
            <h3>UAE-Based Expertise</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Image
                src="/images/about/Full-Transparency.webp"
                alt=""
                width={140}
                height={140}
                className={`${styles.iconImg} ${styles.iconTransparency}`}
              />
            </div>
            <h3>Transparent Processes</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Image
                src="/images/about/image (3)-Photoroom.webp"
                alt=""
                width={140}
                height={140}
                className={`${styles.iconImg} ${styles.iconSupport}`}
              />
            </div>
            <h3>Expert Support & Education</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Image
                src="/images/about/Transparent.webp"
                alt=""
                width={140}
                height={140}
                className={`${styles.iconImg} ${styles.iconCommitment}`}
              />
            </div>
            <h3>Client-First Commitment</h3>
          </div>
        </div>
      </div>
    </section>
  );
}