import { HeroSection } from "@/components/marketing/hero-section";
import { NewsSection } from "@/components/marketing/news-section";
import { StatsSection } from "@/components/marketing/stats-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { WhyChooseSection } from "@/components/marketing/why-choose-section";
import { InvestSection } from "@/components/marketing/invest-section";
import { FleetSection } from "@/components/marketing/fleet-section";
import { AwardsSection } from "@/components/marketing/awards-section";
import { CtaSection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <WhyChooseSection />
      <InvestSection />
      <FleetSection />
      <AwardsSection />
      <CtaSection />
    </>
  );
}