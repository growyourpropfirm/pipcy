"use client";

import { motion } from "framer-motion";

export default function MidPageCTA({ content }) {
  const { statement = "", buttonText = "" } = content || {};

  return (
    <section className="relative py-8 sm:py-10 md:py-[45px] w-full min-h-[300px] sm:min-h-[350px] md:min-h-[457px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(221,184,124,0.5)] to-[80.769%] to-[rgba(115,115,115,0)]" />
      <div className="relative z-10 w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[243px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 sm:gap-8 md:gap-[45px] items-center"
          data-aos="fade-up"
        >
          <h2 className="font-bold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px] text-center text-white whitespace-pre-wrap max-w-[954px] px-2 sm:px-0">
            {statement || "Pipcy makes professional trading accessible. Fast payouts, clear rules, and fair profit splits — built for traders who want real opportunities to scale."}
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#ddb87c] to-[#d7ccb4] rounded-[71px] px-6 sm:px-8 md:px-[32px] py-3 sm:py-4 md:py-[16px]"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <span className="font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#0d0d0d] uppercase whitespace-nowrap">
              {buttonText || "Start the Challenge"}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

