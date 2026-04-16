import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { stats } from "@/data/index";

function Counter({
  value,
  suffix,
  accent,
  trigger,
}: {
  value: number;
  suffix: string;
  accent: string;
  trigger: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [trigger, value]);

  return (
    <div className="flex items-baseline gap-0">
      <span
        className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.02em]"
        style={{ color: accent }}
      >
        {display}
      </span>
      <span
        className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold leading-none ml-0.5"
        style={{ color: accent }}
      >
        {suffix}
      </span>
    </div>
  );
}

type Stat = (typeof stats)[number];

export default function StatCard({
  stat,
  index,
  trigger,
}: {
  stat: Stat;
  index: number;
  trigger: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex flex-col gap-3 p-8 rounded-2xl bg-white
        border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]
        hover:shadow-[0_16px_56px_-12px_rgba(0,0,0,0.13)]
        hover:-translate-y-1 transition-all duration-300 group
        flex-1 min-w-[220px] max-w-[280px]"
    >
      {/* Subtle top accent bar */}
      <div
        className="w-8 h-[3px] rounded-full mb-1"
        style={{ background: stat.accent }}
      />

      {/* Label — above number like Image 2 */}
      <p className="text-slate-600 text-xs tracking-[0.2em] uppercase font-semibold font-body">
        {stat.label}
      </p>

      {/* Big number */}
      <Counter
        value={stat.value}
        suffix={stat.suffix}
        accent={stat.accent}
        trigger={trigger}
      />

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mt-1 font-body">
        {stat.desc}
      </p>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5
          transition-opacity duration-500 pointer-events-none"
        style={{ background: stat.accent }}
      />
    </motion.div>
  );
}
