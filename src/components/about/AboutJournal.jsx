import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { buildAboutTabs } from "@/components/about/AboutPageTabs";
import JournalPolaroid from "@/components/about/JournalPolaroid";
import TypedJournalIntro from "@/components/journal/TypedJournalIntro";
import kuduvasalImage from "@/assets/kuduvasal.jpg";

export default function AboutJournal() {
  const aboutTabs = buildAboutTabs();
  const [introDone, setIntroDone] = useState(false);

  return (
    <motion.div
      className="about-journal journal-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <TypedJournalIntro
        lead="About Me"
        body="Every story stars with a foundation. Mine begins with a house in Kudavasal: the home of my grandfather."
        onLeadComplete={() => setIntroDone(true)}
        afterLead={
          <JournalPolaroid
            orientation="landscape"
            src={kuduvasalImage}
            alt="House in Kudavasal with banana-tree arch at the entrance"
            rotate={0}
            tapeRotate={0}
            className="journal-intro__polaroid journal-intro__polaroid--flush"
          />
        }
      />

      <motion.div
        className="about-tabs-panel w-full"
        initial={{ opacity: 0, y: 16 }}
        animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatedTabs
          layoutIdPrefix="about"
          integratedCard
          large
          defaultTab="background"
          tabs={aboutTabs}
          className="w-full max-w-none gap-4"
          panelClassName="!px-0 !pb-1 sm:!px-1 md:!pt-3"
        />
      </motion.div>
    </motion.div>
  );
}
