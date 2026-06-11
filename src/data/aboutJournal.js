import profileImage from "@/assets/profile.jpeg";
import chennaiImage from "@/assets/chennai.jpg";
import atlImage from "@/assets/atl.jpg";
import bwiImage from "@/assets/bwi.jpg";

/** Scrapbook journal sections for the About page. */
export const aboutJournalSections = [
  {
    id: "background",
    number: "01",
    title: "Background",
    kicker: "Where I come from",
    paragraphs: [],
    edgePhotos: [
      {
        src: bwiImage,
        alt: "Baltimore",
        caption: "home",
        side: "left",
        rotate: -8,
        tapeRotate: 6,
      },
      {
        side: "left",
        caption: "roots",
        placeholderLabel: "childhood",
        rotate: 6,
        tapeRotate: -5,
      },
      {
        src: chennaiImage,
        alt: "Chennai street scene",
        caption: "chennai",
        side: "right",
        rotate: 7,
        tapeRotate: -6,
      },
      {
        side: "right",
        caption: "heritage",
        placeholderLabel: "family table",
        rotate: -5,
        tapeRotate: 4,
      },
    ],
  },
  {
    id: "motivation",
    number: "02",
    title: "Motivation",
    kicker: "What drives me",
    paragraphs: [
      "When my dad was diagnosed with multiple sclerosis, I became an extra pair of hands at home. I could not fix the disease, but I could show up — and that became the filter I use for what's worth building: does it actually help someone, or does it just look good in a demo?",
      "It's why I built a wrist-worn device to damp his tremor with haptic feedback — embedded firmware, sensing, enclosures, and tests at home. It is the clearest example of who I am trying to be: someone who turns care into something you can hold.",
      "My VIP research at Tech bent my path toward academia. Working on monetary-policy sentiment, LLM benchmarks, and financial text taught me to care about questions that outlast a sprint. I still carry that patience into industry work: I would rather understand a system than ship the fastest patch.",
      "Track taught me the rest: progress is often slow, shared, and unglamorous. I am less interested in hero moments than in showing up again tomorrow.",
    ],
    edgePhotos: [
      {
        src: profileImage,
        alt: "Akshar",
        caption: "me",
        side: "right",
        rotate: -4,
        tapeRotate: 6,
      },
      {
        src: atlImage,
        alt: "Atlanta skyline",
        caption: "atlanta",
        side: "left",
        rotate: 7,
        tapeRotate: -5,
      },
    ],
  },
  {
    id: "beliefs",
    number: "03",
    title: "Beliefs",
    kicker: "What I hold to",
    intro:
      "Beliefs are not decorations on a page — they are the decisions I already made at home and on the track, stated plainly. Three ideas I return to when I am choosing what to prioritize next.",
    beliefs: [
      {
        term: "destiny",
        quote:
          "To realize one's destiny is a person's only real obligation; and when you want something, all the universe conspires in helping you to achieve it.",
        attribution: "Paulo Coelho, The Alchemist",
        note:
          "My grandfather filled a journal with my life before I could write it, then left the rest of the pages empty. This quote is how I read those pages: *wanting something on purpose is the obligation* — the universe handles the conspiring.",
      },
      {
        term: "polymath",
        quote:
          "A true polymath is not one who masters many fields, but one who listens so deeply to the world that every discipline begins to whisper the same truth in a different tongue.",
        attribution: null,
        note:
          "I keep ending up in different rooms — firmware one month, monetary policy the next, a race on the weekend. The thread was never mastery. It is listening long enough to hear the same truth told in a different tongue.",
      },
      {
        term: "family",
        quote: "No other success can compensate for failure in the home.",
        attribution: "often attributed to David O. McKay",
        note:
          "My dad's diagnosis made this one literal. The wristband I built to damp his tremor matters more to me than anything I have shipped — *home is the project that never gets deprioritized*.",
      },
    ],
    edgePhotos: [
      {
        side: "left",
        caption: "track",
        placeholderLabel: "track ribbon",
        rotate: -9,
        tapeRotate: 5,
      },
      {
        side: "left",
        caption: "finish line",
        placeholderLabel: "race bib",
        rotate: 5,
        tapeRotate: -7,
      },
      {
        side: "right",
        caption: "family",
        placeholderLabel: "family photo",
        rotate: 6,
        tapeRotate: -5,
      },
      {
        side: "right",
        caption: "home",
        placeholderLabel: "kitchen table",
        rotate: -7,
        tapeRotate: 6,
      },
    ],
  },
];

/** Margin photo placeholders for tabs defined outside aboutJournalSections. */
export const inspirationEdgePhotos = [
  {
    side: "left",
    caption: "the book",
    placeholderLabel: "leather journal",
    rotate: -7,
    tapeRotate: 6,
  },
  {
    side: "left",
    caption: "margin notes",
    placeholderLabel: "handwritten note",
    rotate: 8,
    tapeRotate: -4,
  },
  {
    side: "right",
    caption: "scrapbook",
    placeholderLabel: "family photos",
    rotate: 5,
    tapeRotate: -6,
  },
  {
    side: "right",
    caption: "keepsake",
    placeholderLabel: "old photograph",
    rotate: -6,
    tapeRotate: 5,
  },
];
