import { motion } from "framer-motion";
import { brands } from "@/components/constants/brands";

export default function BrandStrip() {
  const doubled = [...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#080810] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#080810] to-transparent pointer-events-none" />

      <motion.div
        className="flex items-center gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((brand, i) => (
          <span
            key={i}
            className="text-white/30 hover:text-white/70 transition text-sm font-semibold tracking-[0.25em] uppercase whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
}