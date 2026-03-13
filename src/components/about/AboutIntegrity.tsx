import Link from "next/link";
import Image from "next/image";
import styles from "./AboutIntegrity.module.css";

export default function AboutIntegritySection() {
  return (
    <section className={styles.section} aria-label="Integrity Responsibility Innovation">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            At<span> Stonefort</span>  MENA
          </h2>

          <p className={styles.lead}>
            We believe access to global financial markets should be simple, professional, transparent, and fully supported.
          </p>

          <p className={styles.text}>
            As a CMA Category 5 regulated broker, we empower clients by connecting them to Stonefort’s regulated trading services and providing expert guidance at every step. 
          </p>

          <p className={styles.text}>
            Our mission is to guide you through your trading journey with trusted market access, educational insights, clear communication, and responsive support you can rely on.  
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} href="https://stonefortsecurities.com/registration/">
              Open an account
            </Link>
            <Link className={styles.ctaGhost} href="https://stonefortsecurities.com/all-login">
              Login
            </Link>
          </div>
        </div>

        <div className={styles.right} aria-hidden="true">
       

          <div className={styles.mockupWrap}>
            <Image
              src="/images/about/CMA-based.webp"
              alt=""
              width={760}
              height={520}
              className={styles.mockupImg}
              priority={false}
            />
          </div>
          

          {/* OPTION B: Placeholder mockup block */}
          {/* <div className={styles.mockupWrap}>
            <div className={styles.mockupCard} />
            <div className={styles.mockupGlow} />
          </div> */}
        </div>
      </div>
    </section>
  );
}