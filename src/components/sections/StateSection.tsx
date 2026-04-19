import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/index";
import StatCard from "@/components/ui/StateCard";

/* ── Floating particle component ── */
function FloatingParticle({
  size,
  left,
  top,
  delay,
  duration,
  color,
}: {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: color,
        filter: `blur(${size > 6 ? 1 : 0}px)`,
      }}
      animate={{
        y: [0, -20, 0, 15, 0],
        x: [0, 10, -5, 8, 0],
        opacity: [0.15, 0.35, 0.2, 0.3, 0.15],
        scale: [1, 1.2, 0.9, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Bottom strip highlight facts ── */
const highlights = [
  { text: "#1 Most Visited in New Jersey", icon: "🏆" },
  { text: "Minutes from Manhattan", icon: "🌆" },
  { text: "Est. 2019 · East Rutherford, NJ", icon: "📍" },
  { text: "Open 365 Days a Year", icon: "🗓️" },
];

/* ── Particles config ── */
const particles = [
  { size: 4, left: "8%", top: "15%", delay: 0, duration: 7, color: "#89C05833" },
  { size: 6, left: "92%", top: "20%", delay: 1.2, duration: 8, color: "#38BDF833" },
  { size: 3, left: "15%", top: "75%", delay: 0.5, duration: 6.5, color: "#eb008b33" },
  { size: 5, left: "85%", top: "80%", delay: 2, duration: 7.5, color: "#F4A26133" },
  { size: 4, left: "50%", top: "10%", delay: 1.5, duration: 9, color: "#00E5A033" },
  { size: 7, left: "25%", top: "60%", delay: 0.8, duration: 8.5, color: "#38BDF822" },
  { size: 3, left: "70%", top: "40%", delay: 2.5, duration: 6, color: "#89C05822" },
  { size: 5, left: "40%", top: "85%", delay: 1, duration: 7, color: "#eb008b22" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden py-28 md:py-36 px-6"
    >
      {/* ── Layered gradient background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgb(255,255,255) 0%, rgba(255,156,51,0.12) 30%, rgba(0,229,160,0.06) 60%, rgb(255,255,255) 100%)",
        }}
      />

      {/* ── Subtle grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* ── Decorative blurred orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,160,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(235,0,139,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* ── Animated label ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="h-px bg-accent"
            />
            <span className="text-accent text-[10px] font-bold tracking-[0.45em] uppercase font-body">
              Why American Dream
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 32 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="h-px bg-accent"
            />
          </motion.div>

          {/* ── Headline ── */}
          <h2
            className="text-slate-900 font-black leading-[1.05] tracking-tight
              text-[clamp(2rem,4.5vw,3.8rem)] max-w-2xl mx-auto font-display"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block"
            >
              The Scale of a City.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
              style={{
                background: "linear-gradient(135deg, #00E5A0, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Soul of a Dream.
            </motion.span>
          </h2>

          {/* ── Subheading ── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto mt-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Not a mall. A global destination combining the energy of a theme
            park, the prestige of luxury retail, and the scale of a city — all
            under one extraordinary roof.
          </motion.p>
        </motion.div>

        {/* ── Stat cards grid ── */}
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} trigger={inView} />
          ))}
        </div>

        {/* ── Bottom highlights strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full
                bg-slate-50/80 border border-slate-100
                hover:bg-white hover:shadow-md hover:border-slate-200
                hover:scale-[1.03] transition-all duration-300 cursor-default group/pill"
            >
              <span className="text-sm group-hover/pill:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-slate-600 text-[10.5px] tracking-[0.14em] uppercase font-medium font-body">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
