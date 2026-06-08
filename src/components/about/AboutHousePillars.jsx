import React, { useState } from "react";
import { motion } from "framer-motion";
import houseImage from "@/assets/k31-1.png";
import { aboutPillars } from "@/data/aboutPillars";
import PillarStory from "@/components/about/PillarStory";

const DEFAULT_PILLAR = "background";

/**
 * The house photo is the centerpiece: three clickable hotspots sit on top of
 * three visible posts. Selecting one swaps the story shown beside/below the
 * image. No modals, no scroll-jacking — just plain state + percentage overlays.
 */
export default function AboutHousePillars() {
  const [selectedId, setSelectedId] = useState(DEFAULT_PILLAR);
  const selected =
    aboutPillars.find((p) => p.id === selectedId) ?? aboutPillars[0];

  return (
    <div className="house-pillars">
      <motion.figure
        className="house-frame"
        initial={{ opacity: 0, scale: 0.96, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="house-frame__tape" aria-hidden />

        <div className="house-frame__media">
          <img
            src={houseImage}
            alt="My family's house in Tamil Nadu — a tiled-roof home with a row of pillared verandah posts."
            width={1545}
            height={840}
            loading="lazy"
            decoding="async"
            draggable={false}
          />

          {aboutPillars.map((pillar) => {
            const isSelected = pillar.id === selectedId;
            return (
              <button
                key={pillar.id}
                type="button"
                className={`house-hotspot${isSelected ? " is-selected" : ""}`}
                style={{
                  left: `${pillar.hotspot.left}%`,
                  top: `${pillar.hotspot.top}%`,
                  width: `${pillar.hotspot.width}%`,
                  height: `${pillar.hotspot.height}%`,
                }}
                aria-label={`Show ${pillar.title} — ${pillar.kicker}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedId(pillar.id)}
              >
                <span className="house-hotspot__label">{pillar.title}</span>
              </button>
            );
          })}
        </div>

        <figcaption className="house-frame__caption">
          our house — Tamil Nadu
        </figcaption>
      </motion.figure>

      <PillarStory pillar={selected} />
    </div>
  );
}
