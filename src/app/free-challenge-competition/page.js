"use client";

import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import TradingInstruments from "../components/TradingInstruments";
import FeatureCards from "../components/FeatureCards";
import SmartPropFirm from "../components/SmartPropFirm";
import MidPageCTA from "../components/MidPageCTA";
import BecomeTrader from "../components/BecomeTrader";
import Footer from "../components/Footer";
import { becomeTraderContent } from "../config/content";

export default function freeChallengeCompetition() {
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
        <NavigationBar content={becomeTraderContent.navigation} />
        <HeroSection content={becomeTraderContent.hero} />
        <TradingInstruments content={becomeTraderContent.tradingInstruments} />
        <FeatureCards content={becomeTraderContent.featureCards} />
        <SmartPropFirm content={becomeTraderContent.smartPropFirm} />
        <MidPageCTA content={becomeTraderContent.midPageCTA} />
        <BecomeTrader content={becomeTraderContent.becomeTrader} />
        <Footer content={becomeTraderContent.footer} />
      </div>
    </div>
  );
}

