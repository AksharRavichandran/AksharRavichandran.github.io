import React from "react";
import { motion } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import WorkHeroHeadline from "@/components/work/WorkHeroHeadline";
import { buildWorkTabs } from "@/components/work/WorkPageTabs";

export default function WorkPage() {
  const workTabs = buildWorkTabs();

  return (
    <main className="page-main work-page relative flex flex-col">
      <div className="relative z-[2] flex flex-1 flex-col">
        <section
          id="work"
          className="section home-hero-section work work--story flex flex-col"
        >
          <motion.div
            className="home-hero-scene work-hero-scene-wide flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="home-hero-scene-intro">
              <WorkHeroHeadline />
            </div>

            <div className="work-tabs-panel w-full">
              <AnimatedTabs
                layoutIdPrefix="work"
                integratedCard
                large
                defaultTab="experience"
                tabs={workTabs}
                className="w-full max-w-none gap-4"
                panelClassName="!px-0 !pb-1 sm:!px-1 md:!pt-3"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
