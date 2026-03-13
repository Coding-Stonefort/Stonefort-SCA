import styles from "./FlexibleTradingSolutions.module.css";

type Platform = {
  badge: string;
  title: string;
  desc: string;
  features: string[];
};

const platforms: Platform[] = [
  {
    badge: "Stonefortrader",
    title: "Stonefortrader",
    desc: "StonefortTrader is our proprietary app, providing tools for trading multiple asset classes with Stonefort liquidity and execution.",
    features: [
      "Algorithmic trading support – Run automated strategies through Expert Advisors.",
      "Advanced order management – Flexible order types for precise trade execution.",
      "Integrated market analysis – Multiple charts and timeframes for deeper insights.",
      "Secure trading environment – Reliable platform built for stable performance.",
    ],
  },
  {
    badge: "MetaTrader",
    title: "MetaTrader 5",
    desc: "MetaTrader 5 (MT5) is the updated version of MT4, offering additional tools for trading multiple asset classes with Stonefort liquidity and execution.",
    features: [
      "MQL5 support – Automated trading with Expert Advisors.",
      "Enhanced order types – Greater trade management options.",
      "More timeframes and charts – Flexible market analysis.",
    ],
  },
];

export default function FlexibleTradingSolutions() {
  return (
    <section className={styles.section} aria-label="Flexible Trading Solutions">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Flexible <span>Trading Solutions</span>
          </h2>
          <p className={styles.subtext}>
            Stonefortrader is the proprietary trading app, offering advanced tools for trading multiple asset classes with Stonefort liquidity and execution.
          </p>
        </header>

        <div className={styles.row}>
          {platforms.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.badge}>{p.badge}</span>
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.features}>
                <p className={styles.featuresTitle}>Key Features</p>
                <ul className={styles.list}>
                  {p.features.map((f) => (
                    <li key={f} className={styles.item}>
                      <span className={styles.dot} aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomCtaWrap}>
          <a className={styles.linkBtn} href="/platform">
            Explore Platforms 
          </a>
        </div>
      </div>
    </section>
  );
}