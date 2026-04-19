import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import type { stats } from "@/data/index";

/* ── Animated counter with spring easing ── */
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
    const duration = 2200;
    const step = 16;
    const total = duration / step;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease-out cubic for a satisfying deceleration
      const t = frame / total;
      const eased = 1 - Math.pow(1 - t, 3);
      start = Math.floor(eased * value);

      if (frame >= total) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [trigger, value]);

  return (
    <div className="flex items-baseline gap-0.5 select-none">
      <span
        className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-black leading-none tracking-[-0.03em] font-display"
        style={{ color: accent }}
      >
        {display}
      </span>
      <span
        className="text-[clamp(1.1rem,2.2vw,1.8rem)] font-bold leading-none"
        style={{ color: accent, opacity: 0.85 }}
      >
        {suffix}
      </span>
    </div>
  );
}

type Stat = (typeof stats)[number];

/* ── Icons for each stat ── */
const statIcons = ["👥", "🏗️", "🛍️", "🎢"];

export default function StatCard({
  stat,
  index,
  trigger,
}: {
  stat: Stat;
  index: number;
  trigger: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  /* Smooth spring-based tilt */
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const resetMouse = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      animate={trigger ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      className="relative group flex-1 min-w-[240px] max-w-[290px]"
    >
      {/* ── Animated gradient border ── */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100
          transition-opacity duration-500 blur-[0.5px]"
        style={{
          background: `linear-gradient(135deg, ${stat.accent}66, transparent 40%, ${stat.accent}44, transparent 70%, ${stat.accent}66)`,
          backgroundSize: "200% 200%",
          animation: "borderShift 3s ease infinite",
        }}
      />

      {/* ── Card body ── */}
      <div
        className="relative flex flex-col gap-4 p-7 pb-6 rounded-3xl
          bg-white/80 backdrop-blur-sm
          border border-slate-100/80
          shadow-[0_4px_32px_-8px_rgba(0,0,0,0.06)]
          group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]
          group-hover:bg-white
          transition-all duration-500 ease-out
          overflow-hidden"
      >
        {/* ── Background radial glow ── */}
        <div
          className="absolute -top-12 -right-12 w-40 h-40 rounded-full
            opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700
            pointer-events-none blur-2xl"
          style={{ background: stat.accent }}
        />

        {/* ── Shimmer overlay on hover ── */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100
            transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 55%, transparent 60%)",
            backgroundSize: "300% 100%",
            animation: "shimmer 2.5s ease-in-out infinite",
          }}
        />

        {/* ── Top row: icon + accent bar ── */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={trigger ? { scale: 1, rotate: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              delay: 0.35 + index * 0.12,
            }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl
              shadow-sm group-hover:scale-110 transition-transform duration-300"
            style={{
              background: `${stat.accent}14`,
              border: `1px solid ${stat.accent}22`,
            }}
          >
            {statIcons[index]}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={trigger ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[3px] w-10 rounded-full origin-right"
            style={{ background: stat.accent }}
          />
        </div>

        {/* ── Label ── */}
        <p className="text-slate-500 text-[11px] tracking-[0.22em] uppercase font-semibold font-body">
          {stat.label}
        </p>

        {/* ── Big number ── */}
        <Counter
          value={stat.value}
          suffix={stat.suffix}
          accent={stat.accent}
          trigger={trigger}
        />

        {/* ── Description ── */}
        <p className="text-slate-400 text-[13px] leading-relaxed font-body mt-auto">
          {stat.desc}
        </p>

        {/* ── Animated bottom progress line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={trigger ? { scaleX: 1 } : {}}
          transition={{
            duration: 1.2,
            delay: 0.6 + index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-[2px] rounded-full origin-left mt-1"
          style={{
            background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}33)`,
          }}
        />
      </div>
    </motion.div>
  );
}
