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

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 z-10 bg-gradient-to-b from-[#080810] to-transparent pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-[#080810] to-transparent pointer-events-none" />

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

          <h2
            className="text-white font-black leading-[0.95] tracking-tight
           text-[clamp(2.5rem,6vw,5.5rem)] font-display [text-shadow:0_4px_24px_rgba(0,0,0,0.4)]"
          >
            Shop the Dream
          </h2>

          <p className="text-white/50 text-lg leading-relaxed max-w-xl font-body">
            450+ brands across every tier — from the world's most coveted luxury
            flagships to the brands your customers love every day.
          </p>

          <CTAButton
            label="Explore Leasing"
            variant="glass"
            isVideo={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
