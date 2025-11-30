"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BecomeTrader({ content }) {
  const { title = "", description = "", buttonText = "", backgroundImage = "" } = content || {};

  return (
    <section className="relative py-8 sm:py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
      <div className="h-[2px] bg-transparent w-full mb-6 sm:mb-8 md:mb-10" />
      <div className="h-[1px] w-full px-4 sm:px-0">
          <Image
            src="/images/shine-line.png"
            alt=""
            width={1140}
            height={1}
            className="w-full h-auto"
          />
        </div>
      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full rounded-lg overflow-hidden mt-6 sm:mt-8">
        <Image
          src={backgroundImage || "/images/section6-bg.png"}
          alt={title || "Become a Pipcy Trader"}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
          <div className="flex flex-col gap-2 sm:gap-[8px] w-full md:w-auto">
            <h2 className="font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34.6px] leading-[28px] sm:leading-[32px] md:leading-[42px] text-white">
              {title || "Become a Pipcy Trader"}
            </h2>
            <p className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[21.4px] leading-[20px] sm:leading-[24px] md:leading-[30px] text-white max-w-[574px]">
              {description || "This is where skilled traders qualify for real capital and long-term growth."}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#ddb87c] to-[#d7cbb3] rounded-[999px] px-4 sm:px-6 py-2 sm:py-3 md:px-[24px] md:py-[11px] h-[40px] sm:h-[44px] flex items-center justify-center w-full md:w-auto"
            data-aos="zoom-in"
          >
            <span className="font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17.4px] leading-[16px] text-[#0d0d0d] uppercase whitespace-nowrap">
              {buttonText || "START FROM $23"}
            </span>
          </motion.button>
        </div>
      </div>
      <div className="h-[1px] w-full px-4 sm:px-0 mt-6 sm:mt-8">
          <Image
            src="/images/shine-line.png"
            alt=""
            width={1140}
            height={1}
            className="w-full h-auto"
          />
        </div>
      <div className="h-[2px] bg-transparent w-full mt-6 sm:mt-8 md:mt-10" />
    </section>
  );
}

