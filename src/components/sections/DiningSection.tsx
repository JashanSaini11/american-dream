import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import CTAButton from "../ui/Button";
import { diningSlides } from "@/components/constants/Dining";
import { useVideoAutoplay } from "@/hooks/useVideoAutoplay";

export default function DiningSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRef = useVideoAutoplay();

  return (
    <>
      {/* ── Cinematic Video Hero ── */}
      <section
        className="relative w-full overflow-hidden bg-[#080810]"
        style={{ height: "75vh", minHeight: 560 }}
      >
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-55 z-[1]"
          ref={videoRef}
          src="https://videos.ctfassets.net/0eh8v8vf1iw0/4L6wksud5tdLYTr7v0rslB/f22eb25d5bc17e4d35b32bd204aa6233/Dining_Muted_720p.mp4"
          preload="none"
          muted
          loop
          playsInline
        />

        {/* Gradients */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#080810] via-[#080810]/30 to-[#080810]/50" />

        {/* Center content */}
        <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5 max-w-2xl"
          >
            {/* Headline */}
            <h2
              className="text-white font-black leading-[0.95] tracking-tight
                text-[clamp(2.5rem,6vw,5.5rem)] font-display [text-shadow:0_4px_24px_rgba(0,0,0,0.4)]"
            >
              Great Eats for All
            </h2>

            {/* Sub */}
            <p className="text-white/55 text-lg leading-relaxed max-w-xxl">
              Taste buds delighted here! Whatever the occasion, you'll find
              dozens of delicious options ranging from the finest cuisine to
              simple and quick bites!
            </p>

            {/* CTA */}
            <CTAButton
              label="Explore Dining"
              variant="glass"
              className="hover:bg-white hover:text-black text-[14px] tracking-tight"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Dining Slider Section ── */}
      <section ref={ref} className="bg-[#080810] w-full pt-20 overflow-hidden">
        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative max-w-7xl mx-auto"
        >
          <Swiper
            slidesPerView={2.8}
            centeredSlides
            loop
            speed={900}
            spaceBetween={12}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 12 },
              1024: { slidesPerView: 2.2, spaceBetween: 16 },
              1280: { slidesPerView: 2.8, spaceBetween: 20 },
            }}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
            onSlideChange={(s) => setActiveIdx(s.realIndex)}
            className="w-full"
          >
            {diningSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                {(isActive) => (
                  <div className="relative w-full  aspect-[4/4] rounded-3xl overflow-hidden border-[2px] border-[#454545] group">
                    {/* Image */}
                    <img
                      src={slide.image}
                      alt=""
                      loading={isActive ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-white text-2xl font-bold mb-3">
                        {slide.title}
                      </h3>

                      <button className="bg-white text-black text-sm px-4 py-2 rounded-full">
                        Learn More
                      </button>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-[-300px] top-1/2 -translate-y-1/2 z-20
    w-14 h-14 rounded-full bg-black/50 backdrop-blur-md
    border border-white/10 text-white flex items-center justify-center
    hover:scale-110 hover:bg-black/70 active:scale-95
    transition-all duration-300"
            aria-label="Previous"
          >
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
              <path
                d="M30 20H9.167M9.167 20L19.167 10M9.167 20L19.167 30"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-[-300px] top-1/2 -translate-y-1/2 z-20
    w-14 h-14 rounded-full bg-black/50 backdrop-blur-md
    border border-white/10 text-white flex items-center justify-center
    hover:scale-110 hover:bg-black/70 active:scale-95
    transition-all duration-300 "
            aria-label="Next"
          >
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
              <path
                d="M10 20H30.833M30.833 20L20.833 10M30.833 20L20.833 30"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 pb-10">
            {diningSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className="rounded-full border-none cursor-pointer transition-all duration-300 p-0"
                style={{
                  width: activeIdx === i ? 24 : 6,
                  height: 6,
                  background:
                    activeIdx === i ? "#fff" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
