"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureCards({ content = [] }) {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-8 lg:px-[70px]">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-[20px] items-center justify-center">
        {content.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-[rgba(55,49,38,0.8)] border border-[rgba(237,190,16,0.2)] rounded-[15px] h-[220px] sm:h-[240px] md:h-[258px] w-full sm:w-[90%] md:w-[386px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="absolute inset-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 flex flex-col gap-2 items-center">
              <h3 className="font-bold text-[#ddb87c] text-[16px] sm:text-[18px] md:text-[20px] leading-[16px] text-center lg:whitespace-nowrap">
                {card.title}
              </h3>
              <p className="font-medium text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[14px] sm:leading-[16px] text-center whitespace-pre-wrap max-w-[318px] px-2">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

