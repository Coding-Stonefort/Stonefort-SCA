import styles from "./StonefortLensBanner..module.css";

export default function StonefortLensBanner() {
  return (
    <section className={styles.section} aria-label="See the Markets Through the Stonefort Lens">
      <div className={styles.container}>
        <div className={styles.banner}>
          {/* overlay */}
          <div className={styles.overlay} aria-hidden="true" />

          <div className={styles.content}>
            <h2 className={styles.title}>
              See the Markets Through the <span>Stonefort Lens</span> 
            </h2>

            <p className={styles.p}>
              Trade with clarity using Stonefort’s advanced platforms. Access powerful charts, intuitive trade management, and integrated market insights to analyse opportunities and manage positions efficiently. 
            </p>

            <p className={styles.p}>
              Leverage dynamic charts and advanced tools to refine your strategy and stay informed across global markets. 
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}