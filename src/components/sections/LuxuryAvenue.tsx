import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LuxuryAvenue() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-[#080810] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-white text-4xl font-black mb-12"
        >
          Where the World's <span className="text-[#C9A84C]">Most Iconic Brands</span> Call Home
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-4">

          <div className="h-[520px] rounded-2xl overflow-hidden">
            <img
              src="https://images.ctfassets.net/0eh8v8vf1iw0/kUaeobN8BlzCPwg1E8D3l/8382cbd51989ddd2973677669df785e8/250304-Avenue_Homepage_Desktop.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-8 bg-white/5 rounded-2xl text-white">
              <p className="text-[#C9A84C] text-3xl font-bold">50+</p>
              <p>Luxury Flagship Stores</p>
            </div>

            <div className="p-8 bg-[#C9A84C] rounded-2xl text-black font-bold">
              Speak to Leasing Team →
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}