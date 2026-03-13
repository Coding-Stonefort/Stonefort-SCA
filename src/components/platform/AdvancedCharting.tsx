// components/home/AdvancedCharting.tsx
import Image from "next/image";
import styles from "./AdvancedCharting.module.css";

const features = [
  {
    title: "Trade From Charts",
    desc: "Open, adjust, and manage trades directly from interactive charts using simple click-and-drag controls for precise order execution every time.",
  },
  {
    title: "Powerful Analysis Tools",
    desc: "Apply a wide range of technical tools and save your preferred chart setups as templates for consistent, accurate market analysis.",
  },
  {
    title: "Flexible Timeframes Charts",
    desc: "Study price movements across multiple timeframes and select chart styles that best suit your personal trading strategy efficiently.",
  },
  {
    title: "Enhanced Drawing Tools",
    desc: "Plan trades with over fifty drawing tools for trendlines, support, resistance, patterns, and detailed price projections with confidence.",
  },
  {
    title: "Customizable Workspace Layouts",
    desc: "Personalize your trading environment, including layouts, charts, and tools, saving everything as reusable templates for improved trading workflow.",
  },
];

export default function AdvancedCharting() {
  return (
    <section className={styles.section}>
      
      {/* NORMAL CONTENT */}
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Advanced Charting and <span>Trade Execution</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FULL WIDTH BLOCK */}
      <div className={styles.ctaBlock}>
        <div className={styles.ctaInner}>

          <h3>Free Tools</h3>

          <div className={styles.visual}>
            <Image
              src="/images/platform/freetools.webp"
              alt="Trading tools interface"
              width={1400}
              height={700}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.buttons}>
            <a
              href="https://stonefortsecurities.com/registration/"
              className={styles.primaryBtn}
            >
              Get Started
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}