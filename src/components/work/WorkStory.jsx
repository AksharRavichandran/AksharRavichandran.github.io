import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { workStory } from "@/data/workStory";
import { renderMarked } from "@/components/journal/MarkedText";
import JournalPolaroid from "@/components/about/JournalPolaroid";
import {
  aboutTabContainerVariants,
  aboutTabItemVariants,
} from "@/components/about/aboutTabMotion";
import computerImage from "@/assets/computer.JPG";
import gradImage from "@/assets/grad.JPG";

/** Inline photos threaded between chapters so the story is never a wall of text. */
const INLINE_PHOTOS = {
  "georgia-tech": {
    src: gradImage,
    alt: "Graduation day at Georgia Tech",
    caption: "the diploma",
    rotate: -3,
    tapeRotate: 5,
  },
  amazon: {
    src: computerImage,
    alt: "Working at the desk",
    caption: "the desk",
    rotate: 3,
    tapeRotate: -5,
  },
  markets: {
    alt: "Placeholder for a markets keepsake",
    placeholderLabel: "ticker tape",
    caption: "the markets",
    rotate: 4,
    tapeRotate: -6,
  },
  scheller: {
    alt: "Placeholder for a research keepsake",
    placeholderLabel: "market notes",
    caption: "the edge",
    rotate: -4,
    tapeRotate: 6,
  },
};

function WorkCard({ card }) {
  return (
    <aside className="work-card">
      {card.photo ? (
        <div className="work-card__reveal" aria-hidden>
          <JournalPolaroid
            orientation="landscape"
            src={card.photo.src}
            alt={card.photo.alt ?? card.photo.caption ?? ""}
            caption={card.photo.caption}
            placeholderLabel={card.photo.placeholderLabel}
            rotate={5}
            tapeRotate={-6}
          />
        </div>
      ) : null}

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
  const inlinePhoto = INLINE_PHOTOS[chapter.id];

  return (
    <MotionTag className="work-story__chapter" {...motionProps}>
      {chapter.paragraphs.map((para, i) => (
        <p key={i} className="journal-section__para">
          {renderMarked(para)}
        </p>
      ))}
      {chapter.card ? <WorkCard card={chapter.card} /> : null}
      {inlinePhoto ? (
        <JournalPolaroid
          orientation="landscape"
          {...inlinePhoto}
          className="work-story__inline-photo"
        />
      ) : null}
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
