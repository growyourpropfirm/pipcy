"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection({ content }) {
  const { title, titleHighlight, description, disclaimer, emailForm } = content || {};
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - redirect to subscribe page
        router.push(`/subscribe?email=${encodeURIComponent(email)}&status=success`);
      } else {
        // Error - redirect with error message
        const errorMessage = data.error === 'already_subscribed' 
          ? 'already_subscribed' 
          : 'error';
        router.push(`/subscribe?email=${encodeURIComponent(email)}&status=${errorMessage}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      router.push(`/subscribe?email=${encodeURIComponent(email)}&status=error`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-[120px] sm:pt-[140px] md:pt-[180px] lg:pt-[240px] pb-12 sm:pb-16 md:pb-20 flex items-center px-4 sm:px-6 md:px-8 lg:px-[150px]" id="form">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[100%] mx-auto px-0 sm:px-4 md:px-8 lg:px-[70px]">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-4">
          {/* Left Side - Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 sm:gap-8 md:gap-[34px] items-center lg:items-start text-center lg:text-left w-full lg:max-w-[60%]"
            data-aos="fade-right"
          >
            <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-[36px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] text-white whitespace-pre-wrap px-2 sm:px-0">
              {title || "Start Your Trading Challenge for"}{" "}
              {titleHighlight && <span className="text-[#ddb87c]">{titleHighlight}</span>}
            </h1>
            <div className="flex flex-col font-normal leading-[22px] sm:leading-[24px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white whitespace-pre-wrap px-2 sm:px-0">
              {description && description.map((text, index) => (
                <p key={index} className={index === 0 ? "mb-0" : ""}>{text}</p>
              ))}
            </div>
            <p className="font-light italic text-[11px] sm:text-[12px] md:text-[14px] leading-[14px] sm:leading-[16px] text-white whitespace-pre-wrap px-2 sm:px-0">
              {disclaimer || " Trading involves risk. Qualification programs assess trading ability before granting access to live capital."}
            </p>
          </motion.div>

          {/* Right Side - Email Form */}
          <div id="form">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.4 },
              x: { duration: 0.8, delay: 0.4 }
            }}
            className="w-full sm:w-[90%] md:w-[85%] lg:w-[450px] lg:flex-shrink-0"
            data-aos="fade-left"
          >
            <motion.div
              animate={{ 
                y: [0, -12, 0]
              }}
              transition={{ 
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: [0.4, 0, 0.6, 1],
                  delay: 1.2
                }
              }}
            >
              <form onSubmit={handleSubmit} className="backdrop-blur-[19.5px] bg-[rgba(210,210,210,0.01)] border-2 border-[rgba(178,178,178,0.19)] rounded-[20px] sm:rounded-[27px] p-4 sm:p-6 md:p-8 w-full">
                <div className="flex flex-col gap-6 sm:gap-[30px] items-center">
                  <p className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[30px] text-[#ddb87c] text-center whitespace-pre-wrap px-2">
                    {emailForm?.heading || "Enter your email to start setting up your account."}
                  </p>
                  <div className="relative bg-[rgba(255,255,255,0.05)] border-2 border-[#ddb87c] rounded-[9px] w-full px-4 sm:px-[26px] py-5 sm:py-[28px] h-[50px] flex items-center overflow-hidden group">
                    {/* Shiny border effect */}
                    <div className="absolute inset-0 rounded-[9px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ddb87c] to-transparent opacity-30 animate-shimmer"></div>
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={emailForm?.placeholder || "Email address"}
                      className="relative z-10 bg-transparent border-none outline-none w-full font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[rgba(255,255,255,0.6)] placeholder:text-[rgba(255,255,255,0.5)] tracking-[-0.2px] text-left placeholder:text-center focus:placeholder:text-left focus:text-white transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !email}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className="bg-gradient-to-r from-[#ddb87c] to-[#d6cbb3] rounded-[71px] px-6 sm:px-8 md:px-[32px] py-3 sm:py-4 md:py-[16px] w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] text-[#0d0d0d] uppercase whitespace-nowrap">
                      {isSubmitting ? "Submitting..." : (emailForm?.buttonText || "Get Started for $23")}
                    </span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

