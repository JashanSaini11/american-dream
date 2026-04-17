import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { luxuryTenants } from "../constants/luxuryTenants";
import "swiper/css";
import CTAButton from "../ui/Button";

export default function LuxuryAvenue() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section ref={ref} className="pt-20 overflow-hidden">
      {/* ── Header row: left title + right button ── */}
      <div className="w-full max-w-[1248px] mx-auto flex flex-row justify-between items-center pt-[98px] pb-[68px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-row justify-between items-center"
        >
          {/* LEFT */}
          <div className="flex flex-col gap-4 max-w-xl">
            <img
              src="https://images.ctfassets.net/0eh8v8vf1iw0/LDBMCLoV7dPZKOBS4azME/4733024842bedf881a3249047faa6df1/TheAvenue-Logo-White-Primary.png"
              alt="The Avenue Logo"
              className="object-contain"
            />

            <p className="text-white text-lg leading-relaxed w-[920px]">
              The most prestigious luxury collection in the Western Hemisphere —
              a destination within a destination. Where iconic fashion houses,
              fine craftsmanship, and immersive experiences come together to
              redefine modern luxury.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex-shrink-0">
            <CTAButton
              accent="#fff"
              variant="solid"
              label="Browse Luxury Stores"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Store Slider — manual arrows, no autoplay ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".luxury-prev",
            nextEl: ".luxury-next",
          }}
          slidesPerView={1.15}
          spaceBetween={0}
          centeredSlides
          loop
          speed={900}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.8 },
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          onSlideChange={(s) => setActiveIdx(s.realIndex)}
          className="w-full"
        >
          {luxuryTenants.map((store, i) => (
            <SwiperSlide key={store.name}>
              {({ isActive }) => (
                <div
                  className="overflow-hidden transition-all duration-500 rounded-xl"
                  style={{
                    height: 480,
                    transform: isActive ? "scale(1)" : "scale(0.94)",
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT ARROW */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="luxury-prev absolute left-6 top-1/2 -translate-y-1/2 z-20
    w-16 h-16 md:w-20 md:h-20
    rounded-full
    bg-black/40 backdrop-blur-xl
    border border-white/10
    text-white flex items-center justify-center
    transition-all duration-300
    hover:scale-110 hover:bg-black/60 active:scale-95 hidden md:flex"
          aria-label="Previous store"
        >
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <path
              d="M26 8L14 20L26 32"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="luxury-next absolute right-6 top-1/2 -translate-y-1/2 z-20
    w-16 h-16 md:w-20 md:h-20
    rounded-full
    bg-black/40 backdrop-blur-xl
    border border-white/10
    text-white flex items-center justify-center
    transition-all duration-300
    hover:scale-110 hover:bg-black/60 active:scale-95 hidden md:flex"
          aria-label="Next store"
        >
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <path
              d="M14 8L26 20L14 32"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dot counter */}
        <div className="flex justify-center gap-1.5 mt-6 pb-10">
          {luxuryTenants.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="rounded-full transition-all duration-400 border-none"
              style={{
                width: activeIdx === i ? 24 : 6,
                height: 6,
                background:
                  activeIdx === i ? "#C9A84C" : "rgba(255,255,255,0.2)",
                padding: 0,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
