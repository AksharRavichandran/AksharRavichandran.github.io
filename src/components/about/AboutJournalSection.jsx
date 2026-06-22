import React from "react";
import JournalSectionLayout from "@/components/journal/JournalSectionLayout";
import AboutIntro from "@/components/about/AboutIntro";
import AboutBeliefs from "@/components/about/AboutBeliefs";
import AboutCurrentRecords from "@/components/about/AboutCurrentRecords";
import SectionHeader from "@/components/about/SectionHeader";

const MARGIN_NOTE =
  "Beyond the work, these are a few of the things currently filling the margins.";

/**
 * One About tab panel — background, inspiration (via separate component), or beliefs.
 */
export default function AboutJournalSection({ section }) {
  const isOverview = section.id === "background";
  const isBeliefs = section.id === "beliefs";

  return (
    <JournalSectionLayout
      id={section.id}
      className={`about-journal-tab${isBeliefs ? " journal-section--beliefs" : ""}`}
      edgePhotos={section.edgePhotos ?? []}
    >
      {isOverview ? (
        <div className="about-overview">
          <SectionHeader
            number={section.number}
            title={section.title}
            kicker={section.kicker}
          />
          <AboutIntro hideDateline />
          <p className="about-overview__margin-note">{MARGIN_NOTE}</p>
          <AboutCurrentRecords />
        </div>
      ) : isBeliefs ? (
        <>
          <SectionHeader
            number={section.number}
            title={section.title}
            kicker={section.kicker}
          />
          <AboutBeliefs intro={section.intro} beliefs={section.beliefs} />
        </>
      ) : (
        <>
          <SectionHeader
            number={section.number}
            title={section.title}
            kicker={section.kicker}
          />
          {section.intro ? <p className="journal-section__intro">{section.intro}</p> : null}
          {section.paragraphs?.map((para, i) => (
            <p key={i} className="journal-section__para">
              {para}
            </p>
          ))}
        </>
      )}
    </JournalSectionLayout>
  );
}
