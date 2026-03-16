import Image from "next/image";
import styles from "./TraderReviews.module.css";

const reviews = [
  {
    id: 1,
    platform: "Google Reviews",
    logo: "/images/googleReview.webp",
    logoAlt: "Google Reviews",
    tag: "Google Reviews",
    // rating: "★★★★★",
    quote:
      "I’ve just signed up with Stonefort Securities, and their service has already surpassed my expectations.",
    label: "Client Feedback",
    sublabel: "New account holder",
    buttonText: "View",
    href: "https://www.google.com/maps/place/Stonefort+Securities+L.L.C/@25.1853977,55.2640765,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f692f5bbd2b2d:0xd3a6184083590416!8m2!3d25.1853977!4d55.2640765!16s%2Fg%2F11mddl08w8?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  },
  {
    id: 2,
    platform: "WikiFX",
    logo: "/images/wikiFX.webp",
    logoAlt: "WikiFX",
    tag: "WikiFX • Client Review",
    // rating: "★★★★★",
    quote:
      "Stonefort Trader simplifies the entire trading experience. 🙂 Highly recommend!",
    label: "Client Feedback",
    sublabel: "WikiFX community",
    buttonText: "View",
    href: "https://www.wikifx.com/en/dealer/1401450413.html",
  },
];

export default function TraderReviews() {
  return (
    <section className={styles.section} aria-label="Trader reviews">
      <div className={styles.container}>
        <div className={styles.grid}>
          {reviews.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.topRow}>
                <div className={styles.logoWrap}>
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    width={170}
                    height={48}
                    className={styles.logo}
                  />
                </div>

                <div className={styles.tag}>{item.tag}</div>
              </div>

              {/* <div className={styles.rating}>{item.rating}</div> */}

              <blockquote className={styles.quote}>
                “{item.quote}”
              </blockquote>

              <div className={styles.bottomRow}>
                <div className={styles.meta}>
                  <h3 className={styles.metaTitle}>{item.label}</h3>
                  <p className={styles.metaText}>{item.sublabel}</p>
                </div>

                <a
                  href={item.href}
                  className={styles.button}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.buttonText}</span>
                  <svg
                    className={styles.buttonIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.66675 11.3333L11.3334 4.66666M11.3334 4.66666H6.00008M11.3334 4.66666V9.99999"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <span className={styles.glowOne} />
              <span className={styles.glowTwo} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}