import React from "react";
import { motion } from "framer-motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import WorkHeroHeadline from "@/components/work/WorkHeroHeadline";
import { buildWorkTabs } from "@/components/work/WorkPageTabs";
import atlImage from "../assets/atl.jpg";

export default function WorkPage() {
  const workTabs = buildWorkTabs();

  return (
    <main className="page-main work-page work-page--viewport relative isolate flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <GradientBackground
          className="brightness-[0.72] contrast-[1.02]"
          backgroundImage={atlImage}
          enableNoise
          noiseIntensity={1}
          noisePatternSize={90}
          noisePatternRefreshInterval={2}
          noisePatternAlpha={50}
        />
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-black/28 via-black/10 to-black/34"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_110%_75%_at_50%_12%,rgba(255,255,255,0.08),transparent_58%)]"
        aria-hidden
      />
      <div className="relative z-[2] flex min-h-0 flex-1 flex-col">
        <section
          id="work"
          className="section home-hero-section work work--story work-hero-fill flex min-h-0 flex-1 flex-col overflow-hidden"
        >
          <motion.div
            className="home-hero-scene work-hero-scene-wide flex min-h-0 flex-1 flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="home-hero-scene-intro shrink-0">
              <WorkHeroHeadline />
            </div>

            <div className="home-hero-card work-tabs-in-card flex min-h-0 w-full flex-1 flex-col overflow-hidden">
              <AnimatedTabs
                layoutIdPrefix="work"
                integratedCard
                large
                fillHeight
                defaultTab="experience"
                tabs={workTabs}
                className="w-full max-w-none min-h-0 flex-1 gap-4"
                panelClassName="!px-0 !pb-1 sm:!px-1 md:!pt-3"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
