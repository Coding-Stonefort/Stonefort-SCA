import styles from "./AboutMissionVision.module.css";
import Image from "next/image";

const markets = [
  {
    title: "Forex",
    desc: "Trade major, minor and exotic currency pairs in the global FX market.",
    icon: "/images/market/forex-2.webp",
  },
  {
    title: "Indices",
    desc: "Access leading global indices reflecting major economies and sectors.",
    icon: "/images/market/market-indices.webp",
  },
  {
    title: "Commodities",
    desc: "Trade energy, metals and agricultural products with competitive execution.",
    icon: "/images/market/marketcommodities.webp",
  },
  {
    title: "Shares",
    desc: "Gain exposure to internationally listed companies across key markets.",
    icon: "/images/market/Shares-CFDs.webp",
  },
  {
    title: "Precious Metals",
    desc: "Trade gold and silver in a secure and regulated trading environment.",
    icon: "/images/market/Metalsilver.webp",
  },
  {
    title: "Energy",
    desc: "Participate in global energy markets including crude oil benchmarks.",
    icon: "/images/about/Fast-excecution.webp",
  },
];

export default function AboutMissionVision() {
  return (
    <section className={styles.section} aria-label="Mission and Vision">
      <div className={styles.container}>
        

        <div className={styles.cards}>
          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
              src="/images/about/Trade-with-presition.webp"
              alt="Stonefort Mission"
              width={120}
              height={120}
              priority
              />
           
            </div>
            {/* <h3>Our Mission</h3> */}
            <h2 className={styles.heading}>Products Offered by <span>Stonefort MENA</span></h2>
            <p>
              Stonefort MENA connects you to our regulated trading ecosystem, providing access to a wide range of CFDs with competitive trading conditions and professional account support.
            </p>

            
          </div>

          {/* Vision Card */}
          {/* <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
              src="/images/about/aboutOurVision.webp"
              alt="Stonefort Vission"
              width={120}
              height={120}
              />
             
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a trusted and respected participant within the UAE’s
              financial ecosystem, connecting clients to global market
              opportunities while upholding the highest standards of regulatory
              compliance, transparency and operational excellence.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}