import { Hero } from "@/components/home-v2";
import { MetaBar } from "@/components/home-v2";
import { TrustedPlatforms } from "@/components/home-v2";
import { WhyChoose } from "@/components/home-v2";
import { ExperiencedTraders } from "@/components/home-v2";
import { CFDMarketsPro } from "@/components/home-v2";
import { BeginnerTradersSection } from "@/components/home-v2";
import { FlexibleTradingSolutions } from "@/components/home-v2";
import { RiskFreeDemoCta } from "@/components/Home";
import { PaymentGatewaysSlider } from "@/components/home-v2";
import { AccountsPlans } from "@/components/home-v2";
import { Steps3 } from "@/components/home-v2";
import { GetStartedCTA } from "@/components/home-v2";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetaBar />
      <TrustedPlatforms />
      <WhyChoose />
      <ExperiencedTraders />
      <CFDMarketsPro />
      <BeginnerTradersSection />
      <FlexibleTradingSolutions />
      <RiskFreeDemoCta />
      {/* <PaymentGatewaysSlider /> */}
      <AccountsPlans />
      <Steps3 />
       <GetStartedCTA />

    </>
  );
}