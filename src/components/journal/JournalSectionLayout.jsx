import React from "react";
import JournalPolaroid from "@/components/about/JournalPolaroid";

/**
 * Scrapbook journal section — center content with optional edge polaroids.
 */
export default function JournalSectionLayout({
  id,
  className = "",
  edgePhotos = [],
  children,
}) {
  const leftPhotos = edgePhotos.filter((p) => p.side === "left");
  const rightPhotos = edgePhotos.filter((p) => p.side === "right");

  return (
    <section
      id={id}
      className={`journal-section${className ? ` ${className}` : ""}`}
    >
      <div className="journal-section__inner">
        {leftPhotos.length > 0 ? (
          <aside className="journal-edge journal-edge--left" aria-hidden>
            <div className="journal-edge__stack">
              {leftPhotos.map((photo) => (
                <JournalPolaroid key={photo.caption} {...photo} />
              ))}
            </div>
          </aside>
        ) : (
          <div className="journal-edge journal-edge--left journal-edge--empty" aria-hidden />
        )}

        <div className="journal-section__content">{children}</div>

        {rightPhotos.length > 0 ? (
          <aside className="journal-edge journal-edge--right" aria-hidden>
            <div className="journal-edge__stack">
              {rightPhotos.map((photo) => (
                <JournalPolaroid key={photo.caption} {...photo} />
              ))}
            </div>
          </aside>
        ) : (
          <div className="journal-edge journal-edge--right journal-edge--empty" aria-hidden />
        )}

        {edgePhotos.length > 0 ? (
          <div className="journal-edge journal-edge--mobile" aria-hidden>
            {leftPhotos.length > 0 ? (
              <div className="journal-edge__stack journal-edge__stack--mobile">
                {leftPhotos.map((photo) => (
                  <JournalPolaroid key={`m-${photo.caption}`} {...photo} />
                ))}
              </div>
            ) : null}
            {rightPhotos.length > 0 ? (
              <div className="journal-edge__stack journal-edge__stack--mobile">
                {rightPhotos.map((photo) => (
                  <JournalPolaroid key={`m-${photo.caption}`} {...photo} />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
