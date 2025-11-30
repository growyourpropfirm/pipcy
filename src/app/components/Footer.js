"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const legalLinks = [
  "Privacy Policy",
  "AML Policy",
  "Cookies Policy",
  "Terms of Service",
];

export default function Footer() {
  return (
    <footer className="relative py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 md:px-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-[19px]"
        data-aos="fade-up"
      >
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[216px] items-start md:items-center">
          <div className="h-[44px] w-[136.687px]">
            <Image
              src="/images/PIPCY.png"
              alt="Pipcy Logo"
              width={137}
              height={44}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <h3 className="font-bold text-[#ddb87c] text-[20px] md:text-[22px] leading-[30px]">
              Legal
            </h3>
            <div className="flex flex-wrap gap-[19px] items-center">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ opacity: 0.7 }}
                  className="font-normal text-white text-[15px] md:text-[16.9px] leading-[26px] hover:text-[#ddb87c] transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="h-[1px] w-full">
          <Image
            src="/images/line.png"
            alt=""
            width={1140}
            height={1}
            className="w-full h-auto"
          />
        </div>

        {/* Disclaimer */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white text-[18px] md:text-[20px] leading-[16px]">
            Disclaimer
          </h4>
          <p className="font-light text-white text-[14px] md:text-[16px] leading-[16px] whitespace-pre-wrap max-w-[1088px]">
            Pipcy provides trader qualification programs operated by Conquest Services Limited. Participants who meet the performance standards may become eligible for allocation of live trading capital under Pipcy's proprietary funding structure. Trading carries significant risk of loss and may not be suitable for all individuals. There is no guarantee of future profits.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

