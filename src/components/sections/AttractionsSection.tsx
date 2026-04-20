import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { attractions } from "@/data";
import AttractionCard from "@/components/ui/AttractionCards";
import { entertainment } from "@/components/constants/entertainment";
import CTAButton from "../ui/Button";

// ─── Main Section ─────────────────────────────────────────────────
export default function AttractionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const entertainmentRef = useRef(null);
  const entertainmentInView = useInView(entertainmentRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <>
      {/* ── Attractions ── */}
      <section
        ref={ref}
        className="py-24 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(rgb(255,255,255) 0%, rgba(255,156,51,0.3) 20%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-orange-400" />
              <span
                className="text-orange-400 text-[10px] font-bold tracking-[0.4em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                What's Inside
              </span>
              <div className="h-px w-8 bg-orange-400" />
            </div>

            <h2
              className="text-slate-900 font-black leading-[1.02] tracking-tight
                text-[clamp(2.2rem,5vw,4rem)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Attractions & Entertainment
            </h2>

            <p
              className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Discover endless excitement with unique attractions and
              family-friendly activities to experience!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 mb-24 pb-10">
            {attractions.map((a, i) => (
              <AttractionCard
                key={a.name}
                attraction={a}
                index={i}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center"
          >
            <CTAButton
              label=" Explore All Attractions"
              variant="solid"
              className="text-[20px] font-semibold text-white bg-black"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Entertainment Strip — dark cinematic ── */}
      <section
        ref={entertainmentRef}
        className="bg-[#080810] py-24 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={entertainmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#00E5A0]" />
              <span
                className="text-[#00E5A0] text-[10px] font-bold tracking-[0.4em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Live Entertainment
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                className="text-white font-black leading-[1.02] tracking-tight
                  text-[clamp(2rem,4vw,3.5rem)] max-w-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Global Stage for{" "}
                <span className="text-[#00E5A0]">Unforgettable Moments</span>
              </h2>
              <CTAButton
                label="See Upcoming Events"
                variant="glass"
                className="hover:bg-[#00E5A0] hover:text-black text-[14px]"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {entertainment.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={entertainmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-white/5 bg-white/[0.03]
                  p-8 flex flex-col gap-4 hover:bg-white/[0.06]
                  transition-colors duration-300 group"
              >
                <span className="text-4xl">{item.icon}</span>

                <div className="w-8 h-[2px] rounded-full bg-[#00E5A0]" />

                <h3
                  className="text-white font-black text-2xl leading-tight font-display"

                >
                  {item.title}
                </h3>

                <p
                  className="text-white/40 text-lg leading-relaxed"
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
