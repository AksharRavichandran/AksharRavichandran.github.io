import React, { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TypewriterText } from "@/components/ui/typewriter-text";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Journal page header with a home-style intro: the lead line types itself
 * out at the same cadence as the home greeting, then the rest of the
 * header (and, via `onLeadComplete`, the page content) reveals beneath it.
 */
export default function TypedJournalIntro({
  lead,
  body,
  afterLead = null,
  className = "",
  onLeadComplete,
}) {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);

  const handleComplete = useCallback(() => {
    setDone(true);
    onLeadComplete?.();
  }, [onLeadComplete]);

  useEffect(() => {
    if (reduceMotion) onLeadComplete?.();
  }, [reduceMotion, onLeadComplete]);

  if (reduceMotion) {
    return (
      <header className={`journal-intro${className ? ` ${className}` : ""}`}>
        <p className="journal-intro__lead">{lead}</p>
        {afterLead}
        {body !== undefined ? <p className="journal-intro__body">{body || "\u00a0"}</p> : null}
      </header>
    );
  }

  return (
    <header className={`journal-intro${className ? ` ${className}` : ""}`}>
      <p className="journal-intro__lead" aria-label={lead}>
        <span aria-hidden>
          <TypewriterText text={lead} active speed={52} onComplete={handleComplete} />
        </span>
      </p>

      {afterLead ? (
        <motion.div
          className="journal-intro__after-lead"
          initial={{ opacity: 0, y: 12 }}
          animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          {afterLead}
        </motion.div>
      ) : null}

      {body !== undefined ? (
        <motion.p
          className="journal-intro__body"
          initial={{ opacity: 0, y: 10 }}
          animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        >
          {body || "\u00a0"}
        </motion.p>
      ) : null}
    </header>
  );
}
