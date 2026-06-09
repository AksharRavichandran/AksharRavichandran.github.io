import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  aboutTabContainerVariants,
  aboutTabItemVariants,
} from "@/components/about/aboutTabMotion";

function BeliefEntry({ quote, attribution }) {
  return (
    <figure className="about-journal-belief">
      <blockquote className="about-journal-quote">
        <p className="journal-section__para">{quote}</p>
      </blockquote>
      {attribution ? (
        <figcaption className="about-journal-quote__attr journal-section__para">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Beliefs tab body — journal paragraphs with the same stagger reveal as Background.
 */
export default function AboutBeliefs({ intro, beliefs = [] }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="about-beliefs">
        {intro ? <p className="journal-section__intro">{intro}</p> : null}
        {beliefs.map((belief) => (
          <BeliefEntry key={belief.term} {...belief} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="about-beliefs"
      variants={aboutTabContainerVariants}
      initial="hidden"
      animate="show"
    >
      {intro ? (
        <motion.p className="journal-section__intro" variants={aboutTabItemVariants}>
          {intro}
        </motion.p>
      ) : null}
      {beliefs.map((belief) => (
        <motion.div key={belief.term} variants={aboutTabItemVariants}>
          <BeliefEntry {...belief} />
        </motion.div>
      ))}
    </motion.div>
  );
}
