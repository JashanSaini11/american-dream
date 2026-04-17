import { motion } from "framer-motion";
import CTAButton from "../ui/Button";

export default function RetailSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#080810]"
      style={{ height: "75vh", minHeight: 760 }}
    >
      {/* ── Noise texture — always visible, never CORS blocked ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundSize: "180px 180px",
          opacity: 0.08,
          mixBlendMode: "overlay",
        }}
      />

      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
        src="https://videos.ctfassets.net/0eh8v8vf1iw0/3RnYKeC28TYUE0uPWIetiG/0c1ecef864eff5fb0d85d20dec0f6f54/Retail_Muted_15min.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#080810] via-[#080810]/30 to-[#080810]/50" />

      {/* Center content */}
      <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-white/30" />
            <span className="text-white/45 text-[10px] font-semibold tracking-[0.4em] uppercase font-body">
              Retail & Leasing
            </span>
            <div className="h-px w-8 bg-white/30" />
          </div>

          <h2
            className="text-white font-semibold leading-[0.95] tracking-tight
            text-[clamp(3.5rem,9vw,8rem)] font-display"
          >
            Shop the Dream
          </h2>

          <p className="text-white/50 text-sm leading-relaxed max-w-md font-body">
            450+ brands across every tier — from the world's most coveted luxury
            flagships to the brands your customers love every day.
          </p>

          <CTAButton
            label="Explore Leasing"
            variant="glass"
            accent="#d8e0de"
            isVideo={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
