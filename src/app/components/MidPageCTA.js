"use client";

import { motion } from "framer-motion";

export default function MidPageCTA() {
  return (
    <section className="relative py-[45px] md:py-[45px] w-full min-h-[457px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(221,184,124,0.5)] to-[80.769%] to-[rgba(115,115,115,0)]" />
      <div className="relative z-10 w-full max-w-[100%] mx-auto px-4 md:px-[243px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[45px] items-center"
          data-aos="fade-up"
        >
          <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[40px] md:leading-[50px] lg:leading-[60px] text-center text-white whitespace-pre-wrap max-w-[954px]">
            Pipcy makes professional trading accessible. Fast payouts, clear rules, and fair profit splits — built for traders who want real opportunities to scale.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#ddb87c] to-[#d7ccb4] rounded-[71px] px-[32px] py-[16px]"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <span className="font-semibold text-[16px] md:text-[20px] text-[#0d0d0d] uppercase whitespace-nowrap">
              Start the Challenge
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

