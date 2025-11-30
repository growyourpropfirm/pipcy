"use client";

import { motion } from "framer-motion";

export default function SmartPropFirm({ content }) {
  const { heading = "", features = [] } = content || {};

  return (
    <section className="relative py-8 sm:py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-8 lg:px-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8 sm:gap-12 md:gap-[65px] items-center"
        data-aos="fade-up"
      >
        <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[36px] md:leading-[44px] text-center text-white whitespace-pre-wrap max-w-[997px] px-2 sm:px-0">
          {heading || "A smarter prop firm built for real traders"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-10 md:gap-y-[48px] gap-x-4 sm:gap-x-6 md:gap-x-[70px] w-full max-w-[997px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="font-bold text-[#ddb87c] text-[16px] sm:text-[18px] md:text-[20px] leading-[16px]">
                {feature.title}
              </h3>
              <p className="font-medium text-white text-[13px] sm:text-[14px] md:text-[16px] leading-[16px] whitespace-pre-wrap w-full md:w-[285px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

