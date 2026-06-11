import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { workStory } from "@/data/workStory";
import { renderMarked } from "@/components/journal/MarkedText";
import {
  aboutTabContainerVariants,
  aboutTabItemVariants,
} from "@/components/about/aboutTabMotion";

function WorkCard({ card }) {
  return (
    <aside className="work-card">
      <div className="work-card__head">
        {card.logo ? (
          <img
            className="work-card__logo"
            src={card.logo}
            alt={`${card.name} logo`}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        ) : (
          <span className="work-card__initial" aria-hidden>
            {card.name.charAt(0)}
          </span>
        )}
        <div className="work-card__heading">
          <p className="work-card__name">{card.name}</p>
          {card.meta ? <p className="work-card__meta">{card.meta}</p> : null}
        </div>
      </div>

      {card.tech?.length > 0 ? (
        <p className="work-card__tech">
          {card.tech.map((t) => (
            <span key={t} className="work-card__chip">
              {t}
            </span>
          ))}
        </p>
      ) : null}

      <p className="work-card__blurb">{card.blurb}</p>

      {card.link ? (
        <a
          className="work-card__link"
          href={card.link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {card.link.label} ↗
        </a>
      ) : null}
    </aside>
  );
}

function Chapter({ chapter, MotionTag = "div", motionProps = {} }) {
  return (
    <MotionTag className="work-story__chapter" {...motionProps}>
      {chapter.paragraphs.map((para, i) => (
        <p key={i} className="journal-section__para">
          {renderMarked(para)}
        </p>
      ))}
      {chapter.card ? <WorkCard card={chapter.card} /> : null}
    </MotionTag>
  );
}

/**
 * The Work narrative — short prose chapters with inline cards for the
 * places and projects they mention.
 */
export default function WorkStory() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="work-story">
        <p className="work-story__eyebrow">{workStory.eyebrow}</p>
        {workStory.chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="work-story"
      variants={aboutTabContainerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.p className="work-story__eyebrow" variants={aboutTabItemVariants}>
        {workStory.eyebrow}
      </motion.p>
      {workStory.chapters.map((chapter) => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          MotionTag={motion.div}
          motionProps={{ variants: aboutTabItemVariants }}
        />
      ))}
    </motion.div>
  );
}
