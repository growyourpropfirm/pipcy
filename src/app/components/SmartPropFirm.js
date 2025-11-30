"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Trade Your Edge",
    description: "Use any strategy that fits your style. No time limits, no restrictions.",
  },
  {
    title: "Performance-Based Rewards",
    description: "We back proven consistency. Keep up to 95% of verified trading results.",
  },
  {
    title: "No Time Pressure",
    description: "Trade at your own pace — when you're ready.",
  },
  {
    title: "Fair Rules",
    description: "Clear, simple structure. Pass the challenge, and qualify for live capital.",
  },
  {
    title: "Choice of Challenges",
    description: "Pick between a 1-Step or 2-Step evaluation based on your goals.",
  },
  {
    title: "Fast Withdrawals",
    description: "Receive payouts quickly via crypto or card once verified.",
  },
];

export default function SmartPropFirm() {
  return (
    <section className="relative py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 md:px-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-[65px] items-center"
        data-aos="fade-up"
      >
        <h2 className="font-bold text-[32px] md:text-[40px] leading-[44px] text-center text-white whitespace-pre-wrap max-w-[997px]">
          A smarter prop firm built for real traders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[48px] gap-x-[70px] w-full max-w-[997px]">
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
              <h3 className="font-bold text-[#ddb87c] text-[18px] md:text-[20px] leading-[16px]">
                {feature.title}
              </h3>
              <p className="font-medium text-white text-[14px] md:text-[16px] leading-[16px] whitespace-pre-wrap w-full md:w-[285px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

