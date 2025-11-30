"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BecomeTrader() {
  return (
    <section className="relative py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 md:px-[150px]">
      <div className="h-[2px] bg-transparent w-full mb-10" />
      <div className="h-[1px] w-full">
          <Image
            src="/images/shine-line.png"
            alt=""
            width={1140}
            height={1}
            className="w-full h-auto"
          />
        </div>
      <div className="relative h-[240px] w-full rounded-lg overflow-hidden">
        <Image
          src="/images/section6-bg.png"
          alt="Become a Pipcy Trader"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          <div className="flex flex-col gap-[8px] w-full md:w-auto">
            <h2 className="font-bold text-[28px] md:text-[34.6px] leading-[42px] text-white">
              Become a Pipcy Trader
            </h2>
            <p className="font-medium text-[18px] md:text-[21.4px] leading-[30px] text-white max-w-[574px]">
              This is where skilled traders qualify for real capital and long-term growth.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#ddb87c] to-[#d7cbb3] rounded-[999px] px-6 py-3 md:px-[24px] md:py-[11px] h-[44px] flex items-center justify-center"
            data-aos="zoom-in"
          >
            <span className="font-bold text-[15px] md:text-[17.4px] leading-[16px] text-[#0d0d0d] uppercase whitespace-nowrap">
              START FROM $23
            </span>
          </motion.button>
        </div>
      </div>
      <div className="h-[1px] w-full">
          <Image
            src="/images/shine-line.png"
            alt=""
            width={1140}
            height={1}
            className="w-full h-auto"
          />
        </div>
      <div className="h-[2px] bg-transparent w-full mt-10" />
    </section>
  );
}

