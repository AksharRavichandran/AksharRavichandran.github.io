import React, { useState } from "react";

const CAPTIONS = {
  "scheller-ra": "scheller",
  "amazon-sde-intern": "amazon",
  "sparksoft-intern": "sparksoft",
  "gt-vip-ra": "georgia tech",
};

/**
 * Small scrapbook polaroid pinned to one experience record's blurb.
 * @param {{ src: string, alt: string, id: string, rotate?: number, tapeRotate?: number }} props
 */
export default function RecordPolaroid({ src, alt, id, rotate = -3, tapeRotate = 6 }) {
  const [loaded, setLoaded] = useState(false);
  const caption = CAPTIONS[id] ?? alt.split(" ")[0].toLowerCase();

  return (
    <figure
      className="record-polaroid"
      style={{ "--record-rotate": `${rotate}deg`, "--tape-rotate": `${tapeRotate}deg` }}
    >
      <span className="record-polaroid__tape" aria-hidden />
      <div className={`record-polaroid__photo${loaded ? " is-loaded" : ""}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <figcaption className="record-polaroid__caption">{caption}</figcaption>
    </figure>
  );
}
