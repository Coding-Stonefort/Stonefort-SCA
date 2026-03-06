// InspireConfidence.tsx
import styles from "./InspireConfidence.module.css";
import Image from "next/image";

const TOP = [
  {
    title: "Fast & Reliable Execution",
    desc: "Trade on a stable, automated infrastructure designed for speed and consistent performance across global markets.",
    img: "/images/platform/iinstant-execution.webp",
    alt: "Instant execution icon",
  },
  {
    title: "Transparent Pricing",
    desc: "View bid and ask prices clearly before placing trades, helping you understand market conditions and trading costs.",
    img: "/images/platform/Transparent.webp",
    alt: "Transparent pricing icon",
  },
  {
    title: "Advanced Charting & Analysis",
    desc: "Analyse price movements with a range of technical indicators, drawing tools, and timeframes available across our platforms.",
    img: "/images/platform/Advanced-Charting.webp",
    alt: "Advanced charting icon",
  },
];

const BOTTOM = [
  {
    title: "Market Insights & Trading Signals",
    desc: "Use integrated analytical tools and pattern recognition to identify trends and support informed decisions.",
    img: "/images/platform/Market-insight.webp",
    alt: "Market insights icon",
  },
  {
    title: "Trusted Market News & Updates",
    desc: "Stay up to date with real-time market information and professional insights directly within your trading environment.",
    img: "/images/platform/Market-trusted 2.webp",
    alt: "Market news icon",
  },
  {
    title: "Trade Anytime, Anywhere",
    desc: "Access global markets with the Stonefort Trader mobile app - manage and monitor trades wherever you are.",
    img: "/images/platform/Trade-anywhere.webp",
    alt: "Trade anywhere icon",
  },
];

type CardProps = {
  title: string;
  desc: string;
  img: string;
  alt: string;
};

function Card({ title, desc, img, alt }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.badge} aria-hidden="true">
        <div className={styles.iconWrap}>
  <Image
    src={img}
    alt={alt}
    width={90}
    height={90}
    className={styles.iconImage}
    priority
  />
  <span className={styles.iconGlow} aria-hidden="true" />
</div>
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>

      <div className={styles.cardGlow} aria-hidden="true" />
    </article>
  );
}

export default function InspireConfidence() {
  const ALL = [...TOP, ...BOTTOM];

  return (
    <section className={styles.section} aria-label="Trading Platforms That Inspire Confidence">
      <div className={styles.container}>
        <header className={styles.head}>
          <h2 className={styles.title}>
            Trading Platforms That <span>Inspire Confidence</span>
          </h2>
        </header>

        {/*  ONE GRID so all 6 cards align perfectly */}
        <div className={styles.grid}>
          {ALL.map((c) => (
            <Card key={c.title} title={c.title} desc={c.desc} img={c.img} alt={c.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}