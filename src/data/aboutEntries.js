import { aboutJournalSections, inspirationEdgePhotos } from "@/data/aboutJournal";
import { inspirationStory } from "@/data/inspirationStory";

const beliefsSection = aboutJournalSections.find((section) => section.id === "beliefs");

export const aboutEntries = [
  {
    slug: "inspiration",
    number: inspirationStory.sectionNumber ?? "03",
    dated: "03.02.2026",
    label: "Inspiration",
    title: inspirationStory.sectionTitle ?? "The Book That Started It",
    kicker: inspirationStory.sectionKicker ?? "Ten thousand miles from home",
    abstract:
      "The origin story behind the scrapbook itself: my grandfather's journal, my name, and the empty pages he left for me to fill.",
    edgePhotos: inspirationEdgePhotos,
    kind: "inspiration",
  },
  {
    slug: "beliefs",
    number: beliefsSection?.number ?? "04",
    dated: "01.11.2026",
    label: "Beliefs",
    title: beliefsSection?.title ?? "Beliefs",
    kicker: beliefsSection?.kicker ?? "What I return to",
    abstract:
      "A few ideas I keep coming back to when I decide what matters, what to pursue, and what kind of person I want to become.",
    edgePhotos: beliefsSection?.edgePhotos ?? [],
    kind: "beliefs",
  },
];

export function getAboutEntry(slug) {
  return aboutEntries.find((entry) => entry.slug === slug) ?? null;
}

export { beliefsSection, inspirationStory };
