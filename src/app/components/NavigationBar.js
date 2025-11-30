"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NavigationBar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      data-aos="fade-down"
    >
      <div className="absolute backdrop-blur-[19.5px] bg-[rgba(210,210,210,0.01)] border-2 border-[rgba(178,178,178,0.19)] h-[100px] left-1/2 -translate-x-1/2 w-full max-w-[100%] top-0" />
      <div className="relative h-[120px] max-w-[100%] mx-auto flex items-center">
        <div className="absolute h-[44px] left-[120px] top-[35px] w-[136.687px]">
          <Image
            src="/images/PIPCY.png"
            alt="Pipcy Logo"
            width={137}
            height={44}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </motion.nav>
  );
}

