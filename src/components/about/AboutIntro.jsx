import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { aboutIntro } from "@/data/aboutIntro";
import {
  aboutTabContainerVariants,
  aboutTabItemVariants,
} from "@/components/about/aboutTabMotion";

/**
 * Concise personal intro for the Background tab — replaces body paragraphs, not the section title.
 */
export default function AboutIntro() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="about-intro">
        {aboutIntro.paragraphs.map((para, i) => (
          <p key={i} className="journal-section__para">
            {para}
          </p>
        ))}
        <p className="about-intro__closing journal-section__para">{aboutIntro.closing}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="about-intro"
      variants={aboutTabContainerVariants}
      initial="hidden"
      animate="show"
    >
      {aboutIntro.paragraphs.map((para, i) => (
        <motion.p key={i} className="journal-section__para" variants={aboutTabItemVariants}>
          {para}
        </motion.p>
      ))}
      <motion.p className="about-intro__closing journal-section__para" variants={aboutTabItemVariants}>
        {aboutIntro.closing}
      </motion.p>
    </motion.div>
  );
}
