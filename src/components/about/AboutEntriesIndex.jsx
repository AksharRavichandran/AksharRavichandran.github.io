import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AboutEntryPreview from "@/components/about/AboutEntryPreview";
import { aboutEntries } from "@/data/aboutEntries";

const ENTRY_EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: ENTRY_EASE } },
};

/**
 * The Entries index — a single running journal log linking to /entries/:slug.
 */
export default function AboutEntriesIndex() {
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");

  const entryRows = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return aboutEntries;

    return aboutEntries.filter((entry) =>
      [entry.title, entry.label, entry.kicker, entry.abstract]
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }, [query]);

  const log = (
    <div className="entry-log">
      <label className="entry-log__filter">
        <span className="entry-log__filter-label">search</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Find an entry by title or topic"
        />
      </label>

      {entryRows.length > 0 ? (
        <ol className="entry-log__list">
          {entryRows.map((entry) => (
            <AboutEntryPreview key={entry.slug} entry={entry} />
          ))}
        </ol>
      ) : (
        <p className="entry-log__empty">No entries match that search yet.</p>
      )}
    </div>
  );

  if (reduceMotion) {
    return (
      <section className="about-entries" aria-label="Entries">
        {log}
      </section>
    );
  }

  return (
    <section className="about-entries" aria-label="Entries">
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants}>{log}</motion.div>
      </motion.div>
    </section>
  );
}
