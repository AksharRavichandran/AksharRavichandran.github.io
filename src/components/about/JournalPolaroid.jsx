import React, { useState } from "react";

/**
 * Small taped polaroid for the About journal — image or empty margin placeholder.
 */
export default function JournalPolaroid({
  src,
  alt,
  caption,
  placeholderLabel,
  rotate = -4,
  tapeRotate = 5,
  orientation = "square",
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const isPlaceholder = !src;
  const isLandscape = orientation === "landscape";

  return (
    <figure
      className={`journal-polaroid${isPlaceholder ? " journal-polaroid--placeholder" : ""}${isLandscape ? " journal-polaroid--landscape" : ""} ${className}`.trim()}
      style={{ "--journal-rotate": `${rotate}deg`, "--journal-tape-rotate": `${tapeRotate}deg` }}
    >
      <span className="journal-polaroid__tape" aria-hidden />
      {isPlaceholder ? (
        <div className="journal-polaroid__photo journal-polaroid__photo--placeholder">
          <span className="journal-polaroid__placeholder-label">
            {placeholderLabel ?? caption ?? "photo"}
          </span>
        </div>
      ) : (
        <div className={`journal-polaroid__photo${loaded ? " is-loaded" : ""}`}>
          <img
            src={src}
            alt={alt ?? caption ?? ""}
            loading="lazy"
            decoding="async"
            draggable={false}
            onLoad={() => setLoaded(true)}
          />
        </div>
      )}
      {caption ? <figcaption className="journal-polaroid__caption">{caption}</figcaption> : null}
    </figure>
  );
}
