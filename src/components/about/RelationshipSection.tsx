import Link from "next/link";
import Image from "next/image";
import styles from "./RelationshipSection.module.css";

export default function RelationshipSection() {
  return (
    <section className={styles.section} aria-label="Your Relationship with Stonefort MENA">
      <div className={styles.container}>
        <div className={styles.shell}>
          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <p className={styles.kicker}>REGULATED GUIDANCE</p>

            <h2 className={styles.title}>Your Relationship with <span>Stonefort MENA</span></h2>

            <div className={styles.body}>
              <p className={styles.desc}>
                Trade with confidence knowing that Stonefort MENA is a CMA Category 5 regulated
                broker. We do not hold client funds or execute trades directly. Instead, we connect
                you to Stonefort’s regulated entities, which provide trading services and manage
                accounts securely under their licences.
              </p>

              <p className={styles.desc}>
                As part of our commitment to client protection, Stonefort also offers insurance
                coverage of up to USD 1,000,000, giving an extra layer of security for your funds.
                Our role is to guide and support you in accessing these services while ensuring full
                compliance with CMA regulations.
              </p>

              <p className={styles.subtext}>
                For more details, visit the CMA website.
              </p>
            </div>

            <div className={styles.btnRow}>
              <Link
                href="https://www.sca.gov.ae/en/home.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.sfsBtn} ${styles["sfsBtn--primary"]}`}
              >
                CMA Website
              </Link>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className={styles.visual}>
            <div className={styles.mockCard}>
              <Image
                src="/images/about/phonedeskmockup.webp"
                alt="Stonefort MENA mobile trading mockup"
                width={560}
                height={620}
                className={styles.mockImage}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}