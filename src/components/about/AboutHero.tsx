import Link from "next/link";
import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-label="About Stonefort">

      {/* TEXT CONTENT */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your Gateway to Global <span>Financial Markets</span>
        </h1>

        <p className={styles.desc}>
          Empowering your trading journey through education, technology,
          and dedicated support.
        </p>

        <div className={styles.ctaRow}>
          <Link
            className={styles.cta}
            href="https://stonefortsecurities.com/registration/"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <div className={styles.heroImage}>
        <Image
          src="/images/about/stonefortMenabanner.webp"
          alt="Global trading markets"
          fill
          priority
          className={styles.image}
        />
      </div>

    </section>
  );
}