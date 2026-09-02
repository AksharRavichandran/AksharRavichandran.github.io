import React from "react";

/**
 * Render a string with lightweight notebook markup:
 *   *highlighted*  -> marker swipe (<mark>)
 *   **bold**       -> weighted emphasis (<strong>)
 * Bold is parsed first so its double asterisks aren't mistaken for highlights.
 */
function renderHighlights(text, keyPrefix) {
  if (!text.includes("*")) return text;

  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={`${keyPrefix}-h${i}`} className="notebook-mark">
        {part}
      </mark>
    ) : (
      <React.Fragment key={`${keyPrefix}-t${i}`}>{part}</React.Fragment>
    )
  );
}

export function renderMarked(text) {
  if (typeof text !== "string" || !text.includes("*")) return text;

  const segments = text.split(/\*\*([^*]+)\*\*/g);
  return segments.map((segment, i) =>
    i % 2 === 1 ? (
      <strong key={`b${i}`} className="notebook-strong">
        {segment}
      </strong>
    ) : (
      <React.Fragment key={`s${i}`}>
        {renderHighlights(segment, `s${i}`)}
      </React.Fragment>
    )
  );
}
