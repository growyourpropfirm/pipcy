"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavigationBar({ content }) {
  const { logo, logoAlt } = content || {};

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      data-aos="fade-down"
    >
      <div className="absolute backdrop-blur-[19.5px] bg-[rgba(210,210,210,0.01)] border-2 border-[rgba(178,178,178,0.19)] h-[70px] sm:h-[80px] md:h-[100px] left-1/2 -translate-x-1/2 w-full max-w-[100%] top-0" />
      <div className="relative h-[80px] sm:h-[90px] md:h-[120px] max-w-[100%] mx-auto flex items-center">
        <Link href={"/"}>
        <div className="absolute h-[32px] sm:h-[38px] md:h-[44px] left-4 sm:left-6 md:left-[120px] top-[20px] sm:top-[25px] md:top-[35px] w-[100px] sm:w-[120px] md:w-[136.687px]">
          <Image
            src={logo || "/images/PIPCY.png"}
            alt={logoAlt || "Pipcy Logo"}
            width={137}
            height={44}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        </Link>
      </div>
    </motion.nav>
  );
}

