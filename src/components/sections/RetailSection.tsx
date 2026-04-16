import { motion } from "framer-motion";
import BrandStrip from "../ui/BrandStrip";

export default function RetailSection() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#080810]">

      <video
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        src="YOUR_VIDEO_URL"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-[#080810]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810]/60 via-transparent to-[#080810]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-white text-[clamp(4rem,10vw,9rem)] font-black">
            Shop the Dream
          </h2>

          <p className="text-white/55 mt-4 max-w-lg">
            450+ brands across every tier — from luxury to everyday retail.
          </p>

          <a
            href="#contact"
            className="inline-flex mt-6 px-8 py-3 rounded-full border border-white/25 text-white hover:bg-white hover:text-black transition"
          >
            Explore Leasing
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full">
        <BrandStrip />
      </div>
    </section>
  );
}