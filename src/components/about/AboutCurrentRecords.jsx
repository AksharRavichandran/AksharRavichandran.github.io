import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import AboutRunRecord from "@/components/about/AboutRunRecord";
import AboutMusicRecord from "@/components/about/AboutMusicRecord";

const ENTRY_EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: ENTRY_EASE },
  },
};

export default function AboutCurrentRecords() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section aria-label="Current activity" className="about-current-records">
        <AboutRunRecord />
        <AboutMusicRecord />
      </section>
    );
  }

  return (
    <motion.section
      aria-label="Current activity"
      className="about-current-records"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.div variants={itemVariants}>
        <AboutRunRecord />
      </motion.div>
      <motion.div variants={itemVariants}>
        <AboutMusicRecord />
      </motion.div>
    </motion.section>
  );
}
