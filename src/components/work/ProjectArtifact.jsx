import React, { useState } from "react";

const ROTATIONS = [-0.8, 0.6, -0.5, 0.9, -0.7, 0.4, -0.6, 0.8];

/**
 * Notebook insertion — optional artifact with paper frame and tape strips.
 * @param {{ artifact: object, id: string, index?: number, compact?: boolean }} props
 */
export default function ProjectArtifact({ artifact, id, index = 0, compact = false }) {
  const [loaded, setLoaded] = useState(false);

  if (!artifact?.src && !artifact?.type) return null;

  const rotate = artifact.rotate ?? ROTATIONS[index % ROTATIONS.length];
  const tapeRotate = artifact.tapeRotate ?? (index % 2 === 0 ? 6 : -5);

  if (!artifact.src) {
    return (
      <figure
        className={`project-artifact${compact ? " project-artifact--compact" : ""}`}
        style={{ "--artifact-rotate": `${rotate}deg`, "--tape-rotate": `${tapeRotate}deg` }}
      >
        <span className="project-artifact__tape project-artifact__tape--left" aria-hidden />
        <span className="project-artifact__tape project-artifact__tape--right" aria-hidden />
        <div className="project-artifact__frame project-artifact__frame--doc" aria-hidden>
          <span className="project-artifact__doc-label">PDF</span>
        </div>
        {artifact.caption ? (
          <figcaption className="project-artifact__caption">{artifact.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={`project-artifact${compact ? " project-artifact--compact" : ""}`}
      style={{ "--artifact-rotate": `${rotate}deg`, "--tape-rotate": `${tapeRotate}deg` }}
    >
      <span className="project-artifact__tape project-artifact__tape--left" aria-hidden />
      <span className="project-artifact__tape project-artifact__tape--right" aria-hidden />
      <div className={`project-artifact__frame${loaded ? " is-loaded" : ""}`}>
        <img
          src={artifact.src}
          alt={artifact.alt ?? ""}
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
        />
      </div>
      {artifact.caption ? (
        <figcaption className="project-artifact__caption">{artifact.caption}</figcaption>
      ) : null}
    </figure>
  );
}
