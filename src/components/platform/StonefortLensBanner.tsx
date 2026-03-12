import styles from "./StonefortLensBanner.module.css";
import Image from "next/image";

export default function StonefortLensBanner() {
  return (
    <section
      className={styles.section}
      aria-label="See the Markets Through the Stonefort Lens"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bgGlow} aria-hidden="true" />
          <div className={styles.gridLines} aria-hidden="true" />

          <div className={styles.left}>
            <div className={styles.eyebrow}>Advanced Market View</div>

            <h2 className={styles.title}>
              See the Markets Through the <span>Stonefort Lens</span>
            </h2>

            <p className={styles.desc}>
              Trade with clarity using Stonefort’s advanced platforms. Access
              powerful charts, intuitive trade management, and integrated
              market insights to analyse opportunities and manage positions
              efficiently.
            </p>

            <p className={styles.descSecondary}>
              Leverage dynamic charts, real-time visual data, and smart tools
              to refine your strategy across global markets.
            </p>


          </div>

          <div className={styles.right}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/platform/maximiseTrading.webp"
                alt="Trader analysing interactive market charts"
                width={900}
                height={620}
                className={styles.image}
              />

              <div className={`${styles.floatingCard} ${styles.cardTop}`}>
                <span className={styles.cardLabel}>Market View</span>
                <strong className={styles.cardValue}>Real-Time Analysis</strong>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
                <span className={styles.cardLabel}>Execution Tools</span>
                <strong className={styles.cardValue}>Built for Clarity</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}