"use client";

import styles from "./ExperiencedTraders.module.css";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Advanced Charting Tools & Indicators",
    desc: "Analyze markets using intuitive charting interfaces equipped with advanced drawing tools and more than 100 professional technical indicators, enabling traders to interpret price action effectively and make informed trading decisions.",
  },
  {
    title: "Flexible Leverage",
    desc: "Leverage enables traders to control significantly larger market exposure with a relatively smaller margin across selected instruments, while recognizing that leverage amplifies both potential profits and potential losses in volatile market conditions.",
  },
  {
    title: "Proprietary Analytics",
    desc: "Monitor and evaluate trading performance through integrated platform analytics that provide structured insights into trading activity, helping traders review execution patterns, measure outcomes, and continuously refine their overall trading strategies.",
  },
  {
    title: "Customisable Price Alerts",
    desc: "Configure real-time price alerts across preferred trading instruments to stay informed of important market movements, allowing traders to respond efficiently and manage positions in alignment with their defined trading strategy.",
  },
];

export default function ExperiencedTraders() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} aria-label="For Experienced Traders">
      <div className={styles.container}>
        <div className={styles.head}>
          
          <h2 className={styles.title}>For Experienced <span>Traders</span></h2>
          <p className={styles.sub}>
            A range of tools and controls designed to support analysis, monitoring, and informed decision-making.
          </p>
        </div>

        <div className={`${styles.grid} ${inView ? styles.in : ""}`}>
          {cards.map((c, i) => (
            <article key={c.title} className={styles.card} style={{ ["--d" as any]: `${i * 90}ms` }}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true" />
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>
              <p className={styles.cardDesc}>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}