"use client";

import { useRef } from "react";
import styles from "./StonefortAppSlider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/images/platform/stonefortrader1.webp", alt: "StonefortTrader splash screen" },
    { id: 4, image: "/images/platform/stonefortrader4.webp", alt: "StonefortTrader charts screen" },
  // { id: 2, image: "/images/platform/stonefortrader2.webp", alt: "StonefortTrader trading screen" },
  { id: 3, image: "/images/platform/stonefortrader3.webp", alt: "StonefortTrader login screen" },

  { id: 5, image: "/images/platform/stonefortrader5.webp", alt: "StonefortTrader order screen" },
  { id: 6, image: "/images/platform/stonefortrader6.webp", alt: "StonefortTrader account performance screen" },
  { id: 7, image: "/images/platform/stonefortrader7.webp", alt: "StonefortTrader currency strength screen" },
  { id: 8, image: "/images/platform/stonefortrader8.webp", alt: "StonefortTrader calculator screen" },
  { id: 9, image: "/images/platform/stonefortrader9.webp", alt: "StonefortTrader education screen" },
  { id: 10, image: "/images/platform/stonefortrader10.webp", alt: "StonefortTrader widgets screen" },
];

export default function StonefortAppSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className={styles.section} aria-label="StonefortTrader mobile app preview">
      <div className={styles.container}>
        <div className={styles.head}>
          <span className={styles.kicker}>Stonefortrader</span>
          <h2 className={styles.title}>
            Explore the Platform <span>in Action</span>
          </h2>

        </div>

        <div className={styles.sliderShell}>
          <button
            ref={prevRef}
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            ref={nextRef}
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            aria-label="Next slide"
          >
            ›
          </button>

<Swiper
  modules={[Autoplay, Navigation, Pagination, Mousewheel, A11y]}
  className={styles.slider}
  loop={true}
  centeredSlides={false}
  grabCursor={true}
  simulateTouch={true}
  allowTouchMove={true}
  speed={900}
  slidesPerView={5}
  spaceBetween={16}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{
    clickable: true,
  }}
  mousewheel={{
    forceToAxis: true,
  }}
  onBeforeInit={(swiper) => {
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
breakpoints={{
  0: {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 18,
    centeredSlides: false,
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 22,
    centeredSlides: false,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 24,
    centeredSlides: false,
  },
}}
>
            {slides.map((slide) => (
<SwiperSlide key={slide.id} className={styles.slide}>
  <div className={styles.imageWrap}>
    <div className={styles.phoneFrame}>
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        className={`${styles.image} ${slide.id === 2 ? styles.imageZoom : ""}`}
        priority={slide.id <= 2}
      />
    </div>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}