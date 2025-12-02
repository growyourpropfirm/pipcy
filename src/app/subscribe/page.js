"use client";

import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { homeContent } from "../config/content";

function SubscribeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("success");

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const statusParam = searchParams.get("status");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
    if (statusParam) {
      setStatus(statusParam);
    }
  }, [searchParams]);

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.15]">
          <Image
            src="/images/earth-bg.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute left-0 top-[807px] opacity-[0.26] w-full h-[753px] hidden lg:block">
          <Image
            src="/images/globe-bg.png"
            alt="Globe background"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <NavigationBar content={homeContent.navigation} />
        
        {/* Success Message Section */}
        <section className="relative pt-[120px] sm:pt-[140px] md:pt-[180px] lg:pt-[240px] pb-12 sm:pb-16 md:pb-20 flex items-center justify-center min-h-[80vh] px-4 sm:px-6 md:px-8 lg:px-[150px]">
          <div className="relative z-10 w-full max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-[19.5px] bg-[rgba(210,210,210,0.01)] border-2 border-[rgba(178,178,178,0.19)] rounded-[27px] p-8 sm:p-10 md:p-12 w-full"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-6 sm:gap-8 items-center text-center">
                {/* Success/Error Icon */}
                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-[#ddb87c] to-[#d6cbb3] flex items-center justify-center"
                  >
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#0d0d0d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-[#ddb87c] to-[#d6cbb3] flex items-center justify-center"
                  >
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#0d0d0d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                )}

                {/* Success/Error Message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {status === 'success' ? (
                    <>
                      <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] text-white">
                        🎉 You're In!
                      </h1>
                      
                      {email && (
                        <p className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#ddb87c]">
                          {email}
                        </p>
                      )}

                      <div className="flex flex-col gap-4 font-normal leading-[24px] text-[16px] sm:text-[18px] md:text-[20px] text-white">
                        <p>
                          Check your inbox — we've just sent your secure trial login link and setup steps.
                        </p>
                        <p className="text-[#ddb87c] font-medium">
                          You can start your evaluation anytime in the next 24 hours
                        </p>
                      </div>
                    </>
                  ) : status === 'already_subscribed' ? (
                    <>
                      <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] text-white">
                        Already Subscribed
                      </h1>
                      
                      {email && (
                        <p className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#ddb87c]">
                          {email}
                        </p>
                      )}

                      <div className="flex flex-col gap-4 font-normal leading-[24px] text-[16px] sm:text-[18px] md:text-[20px] text-white">
                        <p className="text-[#ddb87c] font-medium">
                          It seems you already subscribed!
                        </p>
                        <p>
                          Check your inbox for the secure trial login link and setup steps we sent earlier.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[50px] lg:leading-[60px] text-white">
                        Something Went Wrong
                      </h1>
                      
                      {email && (
                        <p className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#ddb87c]">
                          {email}
                        </p>
                      )}

                      <div className="flex flex-col gap-4 font-normal leading-[24px] text-[16px] sm:text-[18px] md:text-[20px] text-white">
                        <p className="text-[#ddb87c] font-medium">
                          We encountered an error processing your subscription.
                        </p>
                        <p>
                          Please try again later or contact support if the problem persists.
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Back to Home Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBackHome}
                  className="bg-gradient-to-r from-[#ddb87c] to-[#d6cbb3] rounded-[71px] px-8 sm:px-10 md:px-[32px] py-4 sm:py-5 md:py-[16px] mt-4 sm:mt-6"
                >
                  <span className="font-semibold text-[14px] sm:text-[16px] md:text-[18px] text-[#0d0d0d] uppercase whitespace-nowrap">
                    Back to Home
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer content={homeContent.footer} />
      </div>
    </div>
  );
}

export default function SubscribePage() {
  return (
    <Suspense fallback={
      <div className="relative min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <SubscribeContent />
    </Suspense>
  );
}

