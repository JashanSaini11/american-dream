import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { slides, type Slide } from "@/data";

import "swiper/css";
import "swiper/css/navigation";
import CTAButton from "@/components/ui/Button";        

// ─── Slide Inner ──────────────────────────────────────────────────
function SlideInner({
  slide,
  isActive,
  activeIdx,
  onDotClick,
}: {
  slide: Slide;
  isActive: boolean;
  activeIdx: number;
  onDotClick: (i: number) => void;
}) {

  return (
    <div className="w-full h-full flex items-start justify-center bg-transparent">
      <div className="relative w-full h-[90%] overflow-hidden">
        {/* ── Media ── */}
        <div className="absolute inset-0 z-[1]">
          {slide.type === "video" ? (
            <video
              src={slide.mediaSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slide.mediaSrc}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* ── Gradient ── */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%)",
          }}
        />

        {/* ── Content (video only) — single parent animation ── */}
        {slide.type === "video" && (
          <motion.div
            className="absolute inset-0 z-[10] flex items-center justify-center px-[5%] text-center"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={
              isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }
            }
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ maxWidth: 680 }}>

              {/* Headline */}
              <div className="mb-5">
                {slide.headline.map((line, i) => (
                  <h1
                    key={i}
                    className="text-white font-black leading-[0.95] tracking-tight
            text-[clamp(2.5rem,6vw,5.5rem)] font-display [text-shadow:0_4px_24px_rgba(0,0,0,0.4)]"
                  >
                    {line}
                  </h1>
                ))}
              </div>

              {/* Sub */}
              <p
                className="mx-auto mb-9 text-center leading-6 max-w-[420px]"
                style={{
                  color: "rgba(255,255,255,0.80)",
                  fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {slide.sub}
              </p>

              {/* CTA */}
              <CTAButton
                label={slide.cta}
                variant="glass"
                isVideo={slide.type === "video"}
              />
            </div>
          </motion.div>
        )}

        {/* ── Dots ── */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => onDotClick(i)}
              style={{
                width: activeIdx === i ? 28 : 8,
                height: 8,
                borderRadius: 99,
                border: "none",
                background:
                  activeIdx === i ? s.accent : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────
export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full h-screen min-h-[640px] relative overflow-hidden">
      <motion.div
        className="w-full h-full relative z-0"
        style={{ transformOrigin: "center center" }}
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Swiper
          className="hero-swiper w-full h-full relative z-0"
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
          loop
          speed={1100}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          onSlideChange={(s) => setActiveIdx(s.realIndex)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <SlideInner
                  slide={slide}
                  isActive={isActive}
                  activeIdx={activeIdx}
                  onDotClick={(i) => swiperRef.current?.slideToLoop(i)}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom curve */}
        <div className="absolute bottom-[50px] left-0 right-0 z-[999] pointer-events-none leading-[0]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ width: "100%", height: 100, display: "block" }}
          >
            <path
              d="M0,40 C0,40 720,100 1440,40 L1440,100 L0,100 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </motion.div>

      {/* Prev Arrow */}
      <button
        className="hero-prev absolute left-0 top-[40%] -translate-y-1/2 z-30
          w-16 h-16 border-none  bg-[rgba(0,0,0,0.35)] backdrop-blur-[8px]
          text-white flex items-center justify-center cursor-pointer
          rounded-[50%] hover:bg-[rgba(0,0,0,0.55)] transition-all duration-300"
        aria-label="Previous slide"
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

      {/* Next Arrow */}
      <button
        className="hero-next absolute right-0 top-[40%] -translate-y-1/2 z-30
          w-16 h-16 border-none bg-[rgba(0,0,0,0.35)] backdrop-blur-[8px]
          text-white flex items-center justify-center cursor-pointer
          rounded-[50%] hover:bg-[rgba(0,0,0,0.55)] transition-all duration-300"
        aria-label="Next slide"
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
    </section>
  );
}
