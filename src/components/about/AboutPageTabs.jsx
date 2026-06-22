import React from "react";
import { aboutJournalSections } from "@/data/aboutJournal";
import AboutJournalSection from "@/components/about/AboutJournalSection";
import InspirationStory from "@/components/about/InspirationStory";

/** Short, stable navigation labels — independent of the longer section titles. */
const TAB_LABELS = {
  background: "Background",
  beliefs: "Beliefs",
};

export function buildAboutTabs() {
  return aboutJournalSections.flatMap((section) => {
    if (section.id === "motivation") {
      return [
        {
          id: "inspiration",
          label: "Inspiration",
          content: <InspirationStory />,
        },
      ];
    }

    return [
      {
        id: section.id,
        label: TAB_LABELS[section.id] ?? section.title,
        content: <AboutJournalSection section={section} />,
      },
    ];
  });
}
