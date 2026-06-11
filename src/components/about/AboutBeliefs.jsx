import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { renderMarked } from "@/components/journal/MarkedText";
import {
  aboutTabContainerVariants,
  aboutTabItemVariants,
} from "@/components/about/aboutTabMotion";

const ROTATES = [-1.1, 0.9, -0.7];
const SHIFTS = ["-1.25rem", "1.5rem", "-0.5rem"];
const TAPE_ROTATES = [5, -6, 4];

function BeliefCard({ belief, index }) {
  return (
    <figure
      className="belief-card"
      style={{
        "--belief-rotate": `${ROTATES[index % ROTATES.length]}deg`,
        "--belief-shift": SHIFTS[index % SHIFTS.length],
        "--belief-tape-rotate": `${TAPE_ROTATES[index % TAPE_ROTATES.length]}deg`,
      }}
    >
      <span className="belief-card__tape" aria-hidden />
      <figcaption className="belief-card__term">{belief.term}</figcaption>
      <blockquote className="belief-card__quote">
        <p className="journal-section__para">{belief.quote}</p>
      </blockquote>
      {belief.attribution ? (
        <p className="belief-card__attr">— {belief.attribution}</p>
      ) : null}
      {belief.note ? (
        <div className="belief-card__note">
          <span className="belief-card__note-label">in my margins —</span>{" "}
          {renderMarked(belief.note)}
        </div>
      ) : null}
    </figure>
  );
}

/**
 * Beliefs tab body — quotes as taped notebook cards, with the same
 * stagger reveal as Background.
 */
export default function AboutBeliefs({ intro, beliefs = [] }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="about-beliefs">
        {intro ? <p className="journal-section__intro">{intro}</p> : null}
        {beliefs.map((belief, i) => (
          <BeliefCard key={belief.term} belief={belief} index={i} />
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
      {beliefs.map((belief, i) => (
        <motion.div key={belief.term} variants={aboutTabItemVariants}>
          <BeliefCard belief={belief} index={i} />
        </motion.div>
      ))}
    </motion.div>
  );
}
