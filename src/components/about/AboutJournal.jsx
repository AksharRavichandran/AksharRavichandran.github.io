import React, { useState } from "react";
import { motion } from "framer-motion";
import AboutEntriesIndex from "@/components/about/AboutEntriesIndex";
import TypedJournalIntro from "@/components/journal/TypedJournalIntro";

export default function AboutJournal() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <motion.div
      className="about-journal journal-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <TypedJournalIntro lead="Entries" onLeadComplete={() => setIntroDone(true)} />

      <motion.div
        className="about-tabs-panel w-full"
        initial={{ opacity: 0, y: 16 }}
        animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <AboutEntriesIndex />
      </motion.div>
    </motion.div>
  );
}
