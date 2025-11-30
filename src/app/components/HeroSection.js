"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-[240px] pb-20 flex items-center  px-4 md:px-[150px]">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[100%] mx-auto px-4 md:px-[70px]">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-4">
          {/* Left Side - Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-[34px] items-center lg:items-start text-center lg:text-left w-full lg:max-w-[60%]"
            data-aos="fade-right"
          >
            <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[54px] leading-[40px] md:leading-[50px] lg:leading-[60px] text-white whitespace-pre-wrap">
              Start Your Trading Challenge for{" "}
              <span className="text-[#ddb87c]">Just $23</span>
            </h1>
            <div className="flex flex-col font-normal leading-[24px] text-[16px] md:text-[18px] lg:text-[20px] text-white whitespace-pre-wrap">
              <p className="mb-0">Take the Pipcy Qualification Challenge at a massive discount.</p>
              <p>Prove your trading skills and get access to live capital once you qualify.</p>
            </div>
            <p className="font-light italic text-[12px] md:text-[14px] leading-[16px] text-white whitespace-pre-wrap">
              {" Trading involves risk. Qualification programs assess trading ability before granting access to live capital."}
            </p>
          </motion.div>

          {/* Right Side - Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[450px] lg:flex-shrink-0"
            data-aos="fade-left"
          >
            <div className="backdrop-blur-[19.5px] bg-[rgba(210,210,210,0.01)] border-2 border-[rgba(178,178,178,0.19)] rounded-[27px] p-6 md:p-8 w-full lg:w-full">
              <div className="flex flex-col gap-[30px] items-center">
                <p className="font-semibold text-[20px] md:text-[24px] leading-[30px] text-[#ddb87c] text-center whitespace-pre-wrap">
                  Enter your email to start setting up your account.
                </p>
                <div className="bg-[rgba(255,255,255,0.05)] border border-[#ddb87c] rounded-[9px] w-full px-[26px] py-[22px] h-[44px] flex items-center">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="
      bg-transparent 
      border-none 
      outline-none 
      w-full 
      font-normal 
      text-[16px] 
      md:text-[20px] 
      text-[rgba(255,255,255,0.6)] 
      placeholder:text-[rgba(255,255,255,0.6)] 
      tracking-[-0.2px] 

      text-left 
      placeholder:text-center
      focus:placeholder:text-left
    "
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#ddb87c] to-[#d6cbb3] rounded-[71px] px-[32px] py-[16px] w-full"
                >
                  <span className="font-semibold text-[14px] md:text-[16px] text-[#0d0d0d] uppercase whitespace-nowrap">
                    Get Started for $23
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

