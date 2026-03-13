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
                Stonefort MENA provides introductions to Stonefort Securities Ltd. Which remains solely responsible for all trading services and account management.
              </p>

              <p className={styles.desc}>
                We do not hold client funds or execute trades. All trading services, account management, and fund custody are provided directly by Stonefort Securities Ltd under its regulatory licenses.
              </p>

              <p className={styles.desc}>
                Stonefort Securities Ltd also offers insurance coverage of up to USD 1,000,000, providing an extra layer of protection for client funds. Stonefort MENA’s role is to introduce, guide, and support clients in accessing these services while ensuring full compliance with CMA Category 5 regulations.
              </p>

              <p className={styles.subtext}>
                For more details regarding Stonefort MENA’s licensed services, please visit the CMA website
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