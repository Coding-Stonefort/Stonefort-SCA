import { Hero } from "@/components/product";
import { MetaBar } from "@/components/product";
import { TrustedPlatforms } from "@/components/product";
import { WhyChoose } from "@/components/product";
import { ExperiencedTraders } from "@/components/product";
import { CFDMarketsPro } from "@/components/product";
import { BeginnerTradersSection } from "@/components/product";
import { FlexibleTradingSolutions } from "@/components/product";
import { RiskFreeDemoCta } from "@/components/product";
import { AccountsPlans } from "@/components/product";
import { Steps3 } from "@/components/product";
import { GetStartedCTA } from "@/components/product";
import AboutUpgradeExperience from "@/components/about/AboutUpgradeExperience";
import AboutExploreLinks from "@/components/about/AboutExploreLinks";

export default function ProductPage() {
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
      <AboutUpgradeExperience />
      <RiskFreeDemoCta />
      <AboutExploreLinks />
      <AccountsPlans />
      <Steps3 />
      <GetStartedCTA />
    </>
  );
}