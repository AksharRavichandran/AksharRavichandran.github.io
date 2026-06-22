import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { aboutIntro } from "@/data/aboutIntro";
import { renderMarked } from "@/components/journal/MarkedText";
import {
  aboutTabContainerVariants,
  aboutTabItemVariants,
} from "@/components/about/aboutTabMotion";

function IntroBody({ MotionTag = "p", motionProps = {}, hideDateline = false }) {
  return (
    <>
      {aboutIntro.dateline && !hideDateline ? (
        <MotionTag className="about-intro__dateline" {...motionProps}>
          {aboutIntro.dateline}
        </MotionTag>
      ) : null}
      {aboutIntro.paragraphs.map((para, i) => (
        <MotionTag key={i} className="journal-section__para" {...motionProps}>
          {renderMarked(para)}
        </MotionTag>
      ))}
      <MotionTag className="about-intro__closing journal-section__para" {...motionProps}>
        <span className="about-intro__ps">p.s. —</span> {aboutIntro.closing}
      </MotionTag>
    </>
  );
}

/**
 * Concise personal intro for the Background tab — replaces body paragraphs, not the section title.
 */
export default function AboutIntro({ hideDateline = false }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="about-intro">
        <IntroBody hideDateline={hideDateline} />
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
      <IntroBody
        MotionTag={motion.p}
        motionProps={{ variants: aboutTabItemVariants }}
        hideDateline={hideDateline}
      />
    </motion.div>
  );
}
