import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import JournalSectionLayout from "@/components/journal/JournalSectionLayout";
import { inspirationStory } from "@/data/inspirationStory";
import { inspirationEdgePhotos } from "@/data/aboutJournal";
import { renderMarked } from "@/components/journal/MarkedText";
import {
  aboutTabContainerVariants,
  aboutTabItemVariants,
} from "@/components/about/aboutTabMotion";

function ChapterMarker({ chapter, MotionTag = "div", motionProps = {} }) {
  return (
    <MotionTag className="inspiration-story__marker" {...motionProps}>
      <p className="inspiration-story__label">
        Chapter {chapter.chapter} / {chapter.label}
      </p>
      <h3 className="inspiration-story__chapter-title">{chapter.title}</h3>
    </MotionTag>
  );
}

function InspirationBody({ chapters, reduceMotion }) {
  if (reduceMotion) {
    return (
      <div className="inspiration-story__body">
        {chapters.map((chapter) => (
          <React.Fragment key={chapter.id}>
            <ChapterMarker chapter={chapter} />
            {chapter.paragraphs.map((para, i) => (
              <p key={i} className="journal-section__para">
                {renderMarked(para)}
              </p>
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="inspiration-story__body">
      {chapters.map((chapter) => (
        <React.Fragment key={chapter.id}>
          <ChapterMarker chapter={chapter} MotionTag={motion.div} motionProps={{ variants: aboutTabItemVariants }} />
          {chapter.paragraphs.map((para, i) => (
            <motion.p key={i} className="journal-section__para" variants={aboutTabItemVariants}>
              {renderMarked(para)}
            </motion.p>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

function InspirationContent({ reduceMotion }) {
  if (reduceMotion) {
    return (
      <div className="inspiration-story">
        <header className="inspiration-story__header">
          <h2 id="inspiration-title" className="inspiration-story__title">
            {inspirationStory.title}
          </h2>
          <p className="inspiration-story__intro journal-section__para">{inspirationStory.intro}</p>
        </header>

        <InspirationBody chapters={inspirationStory.chapters} reduceMotion />

        <p className="inspiration-story__closing journal-section__para">{inspirationStory.closing}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="inspiration-story"
      variants={aboutTabContainerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.header className="inspiration-story__header" variants={aboutTabItemVariants}>
        <h2 id="inspiration-title" className="inspiration-story__title">
          {inspirationStory.title}
        </h2>
        <p className="inspiration-story__intro journal-section__para">{inspirationStory.intro}</p>
      </motion.header>

      <InspirationBody chapters={inspirationStory.chapters} reduceMotion={false} />

      <motion.p className="inspiration-story__closing journal-section__para" variants={aboutTabItemVariants}>
        {inspirationStory.closing}
      </motion.p>
    </motion.div>
  );
}

/**
 * Inspiration tab: grandfather's journal and this scrapbook site.
 */
export default function InspirationStory() {
  const reduceMotion = useReducedMotion();

  return (
    <JournalSectionLayout
      id="inspiration"
      className="about-journal-tab"
      edgePhotos={inspirationEdgePhotos}
    >
      <InspirationContent reduceMotion={reduceMotion} />
    </JournalSectionLayout>
  );
}
