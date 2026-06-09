import React from "react";
import { aboutJournalSections } from "@/data/aboutJournal";
import AboutJournalSection from "@/components/about/AboutJournalSection";
import InspirationStory from "@/components/about/InspirationStory";

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
        label: section.title,
        content: <AboutJournalSection section={section} />,
      },
    ];
  });
}
