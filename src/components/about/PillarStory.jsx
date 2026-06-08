import React from "react";
import { motion } from "framer-motion";

/**
 * Story content for the currently selected house pillar. Re-keyed on the
 * pillar id so a gentle fade/slide replays when the selection changes.
 * @param {{ pillar: { id: string, number: string, title: string, kicker: string, body: string[] } }} props
 */
export default function PillarStory({ pillar }) {
  if (!pillar) return null;

  return (
    <motion.div
      key={pillar.id}
      className="pillar-story"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      aria-live="polite"
    >
      <p className="pillar-story__kicker">
        <span className="pillar-story__number">{pillar.number}</span>
        {pillar.kicker}
      </p>
      <h3 className="pillar-story__title">{pillar.title}</h3>
      {pillar.body.map((para, i) => (
        <p key={i} className="pillar-story__body">
          {para}
        </p>
      ))}
    </motion.div>
  );
}
