"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Keep Up to 95% of Your Rewards",
    description: "Get rewarded for verified performance — your success, your share.",
    image: "/images/card1.png",
  },
  {
    title: "Your Skill = Our Capital",
    description: "Show consistent performance and qualify for live trading capital under Pipcy's program.",
    image: "/images/card2.png",
  },
  {
    title: "Grow With Us",
    description: "Scale your trading as you meet targets and maintain consistent results.",
    image: "/images/card3.png",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 md:px-[70px]">
      <div className="flex flex-col md:flex-row gap-[20px] items-center justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-[rgba(55,49,38,0.8)] border border-[rgba(237,190,16,0.2)] rounded-[15px] h-[258px] w-full md:w-[386px] overflow-hidden"
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
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 items-center">
              <h3 className="font-bold text-[#ddb87c] text-[18px] md:text-[20px] leading-[16px] text-center whitespace-nowrap">
                {card.title}
              </h3>
              <p className="font-medium text-white text-[14px] md:text-[16px] leading-[16px] text-center whitespace-pre-wrap max-w-[318px]">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

