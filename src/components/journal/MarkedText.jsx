import React from "react";

/**
 * Render a string with *highlighted* spans as notebook marker swipes.
 * Wrap any phrase in single asterisks inside data files to highlight it.
 */
export function renderMarked(text) {
  if (typeof text !== "string" || !text.includes("*")) return text;

  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="notebook-mark">
        {part}
      </mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
