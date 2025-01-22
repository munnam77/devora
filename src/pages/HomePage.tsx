import React from "react";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PricingSection } from "../components/PricingSection";
export const HomePage = () => {
  return <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
    </main>;
};