import React from "react";

/**
 * Shared scrapbook section header — numbered (01/02/03) title with a
 * monospace kicker. Used across all About tabs for a consistent rhythm.
 */
export default function SectionHeader({ number, title, kicker }) {
  return (
    <header className="journal-section__header">
      {number ? <p className="journal-section__number">{number}</p> : null}
      <h2 className="journal-section__title">{title}</h2>
      {kicker ? <p className="journal-section__kicker">{kicker}</p> : null}
    </header>
  );
}
