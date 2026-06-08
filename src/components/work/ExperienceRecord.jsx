import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceDetails from "@/components/work/ExperienceDetails";
import RecordPolaroid from "@/components/work/RecordPolaroid";

const EASE = [0.22, 1, 0.36, 1];
const POLAROID_ROTATES = [-4, 5, -3, 4];
const TAPE_ROTATES = [7, -6, 5, -5];

function Chevron({ open }) {
  return (
    <svg
      className={`experience-record__chevron${open ? " is-open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/**
 * One expandable experience row in the editorial work index.
 * @param {{
 *   record: object,
 *   index: number,
 *   isOpen: boolean,
 *   onToggle: (id: string) => void,
 * }} props
 */
export default function ExperienceRecord({ record, index, isOpen, onToggle }) {
  const detailsId = `experience-details-${record.id}`;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`experience-record${isOpen ? " experience-record--open" : ""}`}>
      <button
        type="button"
        className="experience-record__trigger"
        aria-expanded={isOpen}
        aria-controls={detailsId}
        onClick={() => onToggle(record.id)}
      >
        <span className="experience-record__number">{number}</span>

        {record.logo ? (
          <span className="experience-record__polaroid-col">
            <RecordPolaroid
              src={record.logo}
              alt={`${record.organization} logo`}
              id={record.id}
              rotate={POLAROID_ROTATES[index % POLAROID_ROTATES.length]}
              tapeRotate={TAPE_ROTATES[index % TAPE_ROTATES.length]}
            />
          </span>
        ) : (
          <span className="experience-record__polaroid-col experience-record__polaroid-col--empty" aria-hidden />
        )}

        <span className="experience-record__main">
          <span className="experience-record__organization">{record.organization}</span>
          <span className="experience-record__role">{record.role}</span>
          <span className="experience-record__location">{record.location}</span>
          <span className="experience-record__summary">{record.summary}</span>
        </span>

        <span className="experience-record__meta">
          <span className="experience-record__dates">{record.dates}</span>
          <span className="experience-record__label">
            {isOpen ? "Close" : "Open"}
            <Chevron open={isOpen} />
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="details"
            className="experience-record__panel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <ExperienceDetails record={record} detailsId={detailsId} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
