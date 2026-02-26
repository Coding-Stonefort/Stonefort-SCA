import styles from "./TradeWithoutCompromise.module.css";

const FEATURES = [
  {
    tag: "Platform",
    title: "Multi-Platform Trading",
    desc: "Seamlessly trade on Stonefort Trader Mobile, Web Terminal, and MetaTrader 5 with fast execution and flexible order management.",
  },
  {
    tag: "Tools",
    title: "Advanced Charting Tools",
    desc: "Use 50+ professional drawing tools, and analytics to make informed decisions.",
  },
  {
    tag: "Insights",
    title: "Market Insights",
    desc: "Spot opportunities with Autochartist pattern recognition, key price levels, and setups.",
  },
  {
    tag: "news",
    title: "Market News",
    desc: "Stay ahead with real-time updates, economic events, and sentiment indicators.",
  },
    {
    tag: "Experience",
    title: "Personalised Experience",
    desc: "Customise your dashboard, build watchlists, set alerts, and switch themes to suit your trading style.",
  },
];

export default function TradeWithoutCompromise() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Top Heading */}
        <div className={styles.top}>
          <h2 className={styles.title}>Trade Without Compromise</h2>
          <p className={styles.sub}>
            Powerful Platforms. Complete Control. 
          </p>
{/* 
          <div className={styles.pillRow}>
            <span className={styles.pill}>Execution</span>
            <span className={styles.pill}>Tools</span>
            <span className={styles.pill}>Insights</span>
            <span className={styles.pill}>Custom</span>
          </div> */}
        </div>

        {/* 4 Grid Cards */}
        <div className={styles.grid}>
  {FEATURES.map((f) => (
    <div key={f.title} className={styles.card}>
      <div className={styles.tag}>{f.tag}</div>
      <h3 className={styles.cardTitle}>{f.title}</h3>
      <p className={styles.cardDesc}>{f.desc}</p>
    </div>
  ))}

  {/* Long card becomes the 6th item in grid */}
  <div className={`${styles.card} ${styles.longCard}`}>
    <div className={styles.tag}>Customisation</div>
    <h3 className={styles.cardTitle}>Personalised Trading Experience</h3>
    <p className={styles.cardDesc}>
      Customise layouts, build watchlists, set alerts, and switch between light and dark themes.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}