import PlatformHero from "@/components/platform/PlatformHero";
import StonefortAppSlider from "@/components/platform/StonefortAppSlider";
// import PlatformTabs from "@/components/platform/PlatformTabs";
import TradeWithoutCompromise from "@/components/platform/TradeWithoutCompromise";

import InspireConfidence from "@/components/platform/InspireConfidence";
import StonefortLensBanner from "@/components/platform/StonefortLensBanner";
import AdvancedCharting from "@/components/platform/AdvancedCharting";

import MT5Spotlight from "@/components/platform/MT5Spotlight";
import PlatformFaq from "@/components/platform/platformFaq";
import StonefortAccount from "@/components/platform/StonefortAccount";
import GetStartedCTA from "@/components/contact/GetStartedCTA";



export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <StonefortAppSlider />
      {/* <PlatformTabs /> */}
      <TradeWithoutCompromise />
      <StonefortLensBanner />
      <InspireConfidence />
      
      <AdvancedCharting />
      
      <MT5Spotlight />
      <StonefortAccount />
      <PlatformFaq />
      <GetStartedCTA />
    </>
  );
}