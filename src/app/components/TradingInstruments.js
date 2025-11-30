"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tradingInstruments = [
  { name: "Forex", icon: "/images/forex.png" },
  { name: "Metals", icon: "/images/metals.png" },
  { name: "Indices", icon: "/images/indices.png" },
  { name: "Commodities", icon: "/images/commodities.png" },
  { name: "Crypto", icon: "/images/crypto.png" },
];

const benefits = [
  { text: "Access real capital after qualification", icon: "/images/access.png" },
  { text: "Keep up to 95% performance rewards", icon: "/images/keep.png" },
  { text: "No time limits, no restrictions", icon: "/images/notime.png" },
  { text: "Fast payouts and fair rules", icon: "/images/fast.png" },
];

export default function TradingInstruments() {
  return (
    <section className="relative py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 md:px-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-[52px] items-center"
        data-aos="fade-up"
      >
        {/* Trading Instruments Row */}
        <div className="flex flex-wrap gap-[20px] md:gap-[79px] items-center justify-center w-full">
          {tradingInstruments.map((instrument, index) => (
            <motion.div
              key={instrument.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-[rgba(237,190,16,0.1)] to-[rgba(237,190,16,0)] border border-[#ddb87c] rounded-[64px] h-[50px] px-4 flex items-center gap-3 min-w-[150px] md:min-w-[178px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-[32px] h-[32px] flex-shrink-0">
                <Image
                  src={instrument.icon}
                  alt={instrument.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-[#ddb87c] text-[15px] md:text-[17.4px] leading-[16px] whitespace-nowrap">
                {instrument.name}
              </span>
            </motion.div>
          ))}
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

        {/* Benefits Row */}
        <div className="w-full overflow-x-auto">
          <div className="flex flex-wrap gap-[20px] md:gap-[20px] items-center justify-center min-w-max md:min-w-0 max-w-[1161px] mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-b from-[rgba(237,190,16,0.1)] to-[rgba(237,190,16,0)] border border-[#ddb87c] rounded-[64px] h-[50px] px-4 flex items-center gap-3 min-w-[250px] md:min-w-[275px]"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 500}
              >
                <div className="relative w-[32px] h-[32px] flex-shrink-0">
                  <Image
                    src={benefit.icon}
                    alt={benefit.text}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-[#ddb87c] text-[13px] md:text-[15px] leading-[16px] whitespace-pre-wrap">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

