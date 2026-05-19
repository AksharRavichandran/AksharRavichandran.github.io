import React from "react";
import { motion } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import AboutCyclingHero from "@/components/about/AboutCyclingHero";
import { buildAboutStoryTabs } from "@/components/about/AboutStoryTabs";

export default function About() {
  const storyTabs = buildAboutStoryTabs();

  return (
    <section
      id="about"
      className="section home-hero-section about about--story about-hero-fill flex min-h-0 flex-1 flex-col overflow-hidden"
    >
      <motion.div
        className="home-hero-scene about-hero-scene-wide flex min-h-0 flex-1 flex-col overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="home-hero-scene-intro shrink-0">
          <AboutCyclingHero />
        </div>

        <div className="home-hero-card about-tabs-in-card flex min-h-0 w-full flex-1 flex-col overflow-hidden">
          <AnimatedTabs
            layoutIdPrefix="about"
            integratedCard
            large
            fillHeight
            defaultTab="background"
            tabs={storyTabs}
            className="w-full max-w-none min-h-0 flex-1 gap-4"
            panelClassName="!px-0 !pb-1 sm:!px-1 md:!pt-3"
          />
        </div>
      </motion.div>
    </section>
  );
}
