"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TradingInstruments({ content }) {
  const { instruments = [], benefits = [] } = content || {};
  return (
    <section className="relative py-8 sm:py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-8 lg:px-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8 sm:gap-10 md:gap-[52px] items-center"
        data-aos="fade-up"
      >
        {/* Trading Instruments Row */}
        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-[20px] xl:gap-[79px] items-center justify-center w-full">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-[rgba(237,190,16,0.1)] to-[rgba(237,190,16,0)] border border-[#ddb87c] rounded-[64px] h-[44px] sm:h-[48px] md:h-[50px] px-3 sm:px-4 flex items-center gap-2 sm:gap-3 min-w-[120px] sm:min-w-[140px] md:min-w-[150px] lg:min-w-[178px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] flex-shrink-0">
                <Image
                  src={instrument.icon}
                  alt={instrument.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-[#ddb87c] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17.4px] leading-[16px] whitespace-nowrap">
                {instrument.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="h-[1px] w-full px-4 sm:px-0">
          <Image
            src="/images/shine-line.png"
            alt=""
            width={1140}
            height={1}
            className="w-full h-auto"
          />
        </div>

        {/* Benefits Row */}
        <div className="w-full overflow-x-auto px-2 sm:px-0">
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-[20px] items-center justify-center lg:min-w-max max-w-[1161px] mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-b from-[rgba(237,190,16,0.1)] to-[rgba(237,190,16,0)] border border-[#ddb87c] rounded-[64px] h-[44px] sm:h-[48px] md:h-[50px] px-3 sm:px-4 flex items-center gap-2 sm:gap-3 min-w-[200px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[275px]"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 500}
              >
                <div className="relative w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] flex-shrink-0">
                  <Image
                    src={benefit.icon}
                    alt={benefit.text}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-[#ddb87c] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] leading-[14px] sm:leading-[16px] lg:whitespace-pre-wrap">
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

