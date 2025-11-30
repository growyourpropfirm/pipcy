"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ content }) {
  const { logo, logoAlt, legalTitle, legalLinks = [], disclaimerTitle, disclaimer } = content || {};

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 sm:gap-6 md:gap-[19px]"
        data-aos="fade-up"
      >
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[216px] items-start md:items-center">
          <Link href={"/"}>
            <div className="h-[36px] sm:h-[40px] md:h-[44px] w-[110px] sm:w-[120px] md:w-[136.687px]">
              <Image
                src={logo || "/images/PIPCY.png"}
                alt={logoAlt || "Pipcy Logo"}
                width={137}
                height={44}
                className="object-contain w-full h-full"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-2 sm:gap-[4px]">
            <h3 className="font-bold text-[#ddb87c] text-[18px] sm:text-[20px] md:text-[22px] leading-[30px]">
              {legalTitle || "Legal"}
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-[19px] items-center">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ opacity: 0.7 }}
                  className="font-normal text-white text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16.9px] leading-[20px] sm:leading-[24px] md:leading-[26px] hover:text-[#ddb87c] transition-colors"
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
        <div className="h-[1px] w-full px-4 sm:px-0">
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
          <h4 className="font-bold text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[16px]">
            {disclaimerTitle || "Disclaimer"}
          </h4>
          <p className="font-light text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] sm:leading-[18px] whitespace-pre-wrap max-w-[1088px]">
            {disclaimer || "Pipcy provides trader qualification programs operated by Conquest Services Limited. Participants who meet the performance standards may become eligible for allocation of live trading capital under Pipcy's proprietary funding structure. Trading carries significant risk of loss and may not be suitable for all individuals. There is no guarantee of future profits."}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

