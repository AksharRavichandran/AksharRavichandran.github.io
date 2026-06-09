import React from "react";
import { motion } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { buildAboutTabs } from "@/components/about/AboutPageTabs";
import JournalPolaroid from "@/components/about/JournalPolaroid";

export default function AboutJournal() {
  const aboutTabs = buildAboutTabs();

  return (
    <motion.div
      className="about-journal journal-shell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="journal-intro">
        <p className="journal-intro__lead">Every structure begins with a foundation.</p>
        <JournalPolaroid
          orientation="landscape"
          placeholderLabel="landscape photo"
          caption="kudavasal"
          rotate={-2}
          tapeRotate={5}
          className="journal-intro__polaroid"
        />
        <p className="journal-intro__body">
          Mine begins with a house in Kudavasal, where my grandfather grew up, and with the values
          that traveled far beyond it.
        </p>
      </header>

      <div className="about-tabs-panel w-full">
        <AnimatedTabs
          layoutIdPrefix="about"
          integratedCard
          large
          defaultTab="background"
          tabs={aboutTabs}
          className="w-full max-w-none gap-4"
          panelClassName="!px-0 !pb-1 sm:!px-1 md:!pt-3"
        />
      </div>
    </motion.div>
  );
}
