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
    </figure>
  );
}

function BeliefNote({ belief }) {
  if (!belief.note) return null;
  return <p className="belief-note journal-section__para">{renderMarked(belief.note)}</p>;
}

/**
 * Beliefs tab body — each quote is a taped, slightly slanted notebook card,
 * with the reflection set as plain text between the cards.
 */
export default function AboutBeliefs({ intro, beliefs = [] }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="about-beliefs">
        {intro ? <p className="journal-section__intro">{intro}</p> : null}
        {beliefs.map((belief, i) => (
          <React.Fragment key={belief.term}>
            <BeliefCard belief={belief} index={i} />
            <BeliefNote belief={belief} />
          </React.Fragment>
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
        <React.Fragment key={belief.term}>
          <motion.div variants={aboutTabItemVariants}>
            <BeliefCard belief={belief} index={i} />
          </motion.div>
          {belief.note ? (
            <motion.p
              className="belief-note journal-section__para"
              variants={aboutTabItemVariants}
            >
              {renderMarked(belief.note)}
            </motion.p>
          ) : null}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
