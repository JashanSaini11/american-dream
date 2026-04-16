import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/index";
import StatCard from "@/components/ui/StateCard";

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-white overflow-hidden py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00E5A0]/5 via-slate-50/40 to-white pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase font-body">
              Why American Dream
            </span>
          </div>

          <h2
            className="text-slate-900 font-black leading-[1.05] tracking-tight
              text-[clamp(2rem,4.5vw,3.8rem)] max-w-2xl mx-auto font-display"
          >
            The Scale of a City. <br />
            <span className="text-accent">The Soul of a Dream.</span>
          </h2>

          <p
            className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto mt-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Not a mall. A global destination combining the energy of a theme
            park, the prestige of luxury retail, and the scale of a city — all
            under one extraordinary roof.
          </p>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} trigger={inView} />
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
        >
          {[
            "#1 Most Visited in New Jersey",
            "Minutes from Manhattan",
            "Est. 2019 · East Rutherford, NJ",
            "Open 365 Days a Year",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-slate-600 text-[11px] tracking-[0.15em] uppercase font-medium font-body">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
