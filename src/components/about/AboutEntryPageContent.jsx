import React from "react";
import AboutBeliefs from "@/components/about/AboutBeliefs";
import InspirationStory from "@/components/about/InspirationStory";
import JournalSectionLayout from "@/components/journal/JournalSectionLayout";
import SectionHeader from "@/components/about/SectionHeader";
import { beliefsSection } from "@/data/aboutEntries";

function BeliefsEntry() {
  return (
    <JournalSectionLayout
      id="about-beliefs-entry"
      className="about-entry-page__section journal-section--beliefs"
      edgePhotos={beliefsSection?.edgePhotos ?? []}
    >
      <SectionHeader
        title={beliefsSection?.title}
        kicker={beliefsSection?.kicker}
      />
      <AboutBeliefs intro={beliefsSection?.intro} beliefs={beliefsSection?.beliefs} />
    </JournalSectionLayout>
  );
}

export default function AboutEntryPageContent({ entry }) {
  if (!entry) return null;

  switch (entry.kind) {
    case "inspiration":
      return <InspirationStory />;
    case "beliefs":
      return <BeliefsEntry />;
    default:
      return null;
  }
}
