import styles from "./CFDMarketsPro.module.css";
import MarketBoard from "./MarketBoard";

export default function CFDMarketsPro() {
  return (
    <section className={styles.section} aria-label="Our CFD markets">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>Our CFD <span>Markets</span></h2>
          <p className={styles.desc}>
            Explore live indicative quotes across indices and commodities through internationally recognised trading platforms.
          </p>
        </div>

        <MarketBoard />

        {/* <a className={styles.browse} href="/Market">
          Browse all markets
        </a> */}

        <p className={styles.disclaimer}>
  Disclaimer: All market data is provided for informational purposes only and does not constitute an offer or solicitation of trading services.
</p>
      </div>
    </section>
  );
}