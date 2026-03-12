import styles from "./WhyCFDs.module.css";

const POINTS = [
  {
    title: "Leverage access",
    text: "Use leverage to optimise capital efficiency, keeping entry costs low while increasing market exposure, while understanding that profits and losses are both amplified.",
    chips: ["Margin", "Exposure", "Risk"],
  },
  {
    title: "Go long or short",
    text: "Benefit from rising and falling market conditions by taking long or short positions, allowing strategies to adapt dynamically to market movements.",
    chips: ["Buy", "Sell", "Two-way"],
  },
  {
    title: "One account, many markets",
    text: "Access thousands of global markets seamlessly through a single trading account, enabling diversified trading across multiple asset classes and international instruments.",
    chips: ["FX", "Indices", "Shares", "Commodities"],
  },
  {
    title: "Extended trading hours",
    text: "Trade selected instruments beyond standard hours, with certain markets available around the clock to support continuous opportunities and flexible trading strategies.",
    chips: ["24/5", "24/7*", "Select markets"],
  },
];

const LABELS = ["FOREX", "INDICES", "SHARES", "COMMODITIES"];

export default function WhyCFDs() {
  return (
    <section className={styles.section} aria-label="Why trade CFDs">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* LEFT: narrative panel */}
          <div className={styles.left}>
            <div className={styles.badge} data-aos="fade-up">
              Education
            </div>

            <h2 className={styles.title} data-aos="fade-up" data-aos-delay="70">
              Why trade <span>global markets</span> using CFDs?
            </h2>

            <p className={styles.lead} data-aos="fade-up" data-aos-delay="140">
              CFDs are derivative instruments that mirror the price movement of underlying markets
              such as forex, indices, shares and commodities. They allow traders to access global
              opportunities efficiently without owning the actual asset.
            </p>

            <div className={styles.checklist} data-aos="fade-up" data-aos-delay="210">
              <div className={styles.checkItem}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>Trade opportunities across major global markets</span>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>Flexible strategies with two-way positions</span>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>Efficient access via a single account</span>
              </div>
            </div>

            <p className={styles.note} data-aos="fade-up" data-aos-delay="280">
              *Availability depends on instrument and market conditions. Leverage can magnify both
              profits and losses.
            </p>
          </div>

          {/* RIGHT: 4 creative cards */}
          <div className={styles.right} aria-label="CFD benefits">
            {POINTS.map((p, i) => (
              <article
                key={p.title}
                className={styles.panel}
                data-aos="fade-up"
                data-aos-delay={i * 90}
              >
                <div className={styles.panelTop}>
                  <span className={styles.kicker}>{LABELS[i] ?? "MARKETS"}</span>
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className={styles.panelTitle}>{p.title}</h3>
                <p className={styles.panelDesc}>{p.text}</p>

                <div className={styles.panelBottom}>
                  <div className={styles.pills}>
                    {p.chips.map((c) => (
                      <span key={c} className={styles.pill}>
                        {c}
                      </span>
                    ))}
                  </div>
                  {/* <span className={styles.arrow} aria-hidden="true" /> */}
                </div>

                {/* decorative */}
                <span className={styles.diag} aria-hidden="true" />
                <span className={styles.ring} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}