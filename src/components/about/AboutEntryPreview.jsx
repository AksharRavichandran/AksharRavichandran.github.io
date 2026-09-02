import React from "react";
import { Link } from "react-router-dom";

export default function AboutEntryPreview({ entry }) {
  return (
    <li className="entry-log__row">
      <Link className="entry-log__line" to={`/entries/${entry.slug}`}>
        {entry.dated ? (
          <>
            <span className="entry-log__date">{entry.dated}</span>
            <span className="entry-log__sep" aria-hidden>
              ·
            </span>
          </>
        ) : null}
        <span className="entry-log__title">{entry.title}</span>
        <span className="entry-log__dash" aria-hidden>
          —
        </span>
        <span className="entry-log__kicker">{entry.kicker}</span>
      </Link>
    </li>
  );
}
