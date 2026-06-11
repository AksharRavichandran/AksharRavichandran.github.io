import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { buildAboutTabs } from "@/components/about/AboutPageTabs";
import JournalPolaroid from "@/components/about/JournalPolaroid";
import TypedJournalIntro from "@/components/journal/TypedJournalIntro";

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
        lead="Every structure begins with a foundation."
        body="Mine begins with a house in Kudavasal, where my grandfather grew up, and with the values that traveled far beyond it."
        onLeadComplete={() => setIntroDone(true)}
        afterLead={
          <JournalPolaroid
            orientation="landscape"
            placeholderLabel="landscape photo"
            caption="kudavasal"
            rotate={-2}
            tapeRotate={5}
            className="journal-intro__polaroid"
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
