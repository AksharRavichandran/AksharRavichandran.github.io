import profileImage from "@/assets/profile.jpeg";
import chennaiImage from "@/assets/chennai.jpg";
import atlImage from "@/assets/atl.jpg";
import bwiImage from "@/assets/bwi.jpg";

/** Scrapbook journal sections for the About page. */
export const aboutJournalSections = [
  {
    id: "background",
    number: "01",
    title: "Reporting Live from Atlanta, Georgia",
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
    title: "Written in the Margins",
    kicker: "What I return to",
    intro:
     "Beliefs are not decorations on a page. They are the ideas I try to live by, the ones I return to when I am deciding what matters most and what kind of person I want to become.",
    beliefs: [
      {
        term: "destiny",
        quote:
          "To realize one's destiny is a person's only real obligation; and when you want something, all the universe conspires in helping you to achieve it.",
        attribution: "Paulo Coelho, The Alchemist",
        note:
          "I have always wondered why things happen the way they do. Is it fate, luck, or something written before we are ready to understand it? I believe life leaves signs, and destiny is partly about learning how to read them. *The Alchemist* put words to that feeling for me: the idea that when you want something with purpose, the path begins to reveal itself.",
      },
      {
        term: "polymath",
        quote:
          "Jack of all trades, master of none, but oftentimes better than a master of one.",
        attribution: null,
        note:
          "I have heard the first half of this quote my entire life, but almost no one seems to recognize the second half. To me, being a polymath is not about trying to know everything. It is about being versatile enough to adapt to whatever setting, problem, or challenge you are placed in. I have never wanted to get too comfortable doing only one thing. Throughout college, I kept chasing projects that were different in scope: software, machine learning, hardware, finance, research, and ideas that did not fit neatly into one category. That range has taught me to stay curious, keep expanding my domain, and trust that different experiences can sharpen each other.",
      },

      {
        term: "family",
        quote: "No other success can compensate for failure in the home.",
        attribution: "David O. McKay",
        note:
          "Family is the thing I always find myself returning to. It keeps me grounded in my work, gives me motivation when I lack it, strength when I need it, and courage when I cannot find it on my own. Watching my parents move countries, fight illness, make sacrifices, and keep our family together has shown me what true success really means. Without family, success feels incomplete. *Home is where purpose starts*.",
      },


    ],
    edgePhotos: [],
  },
];

/** Margin photos for tabs defined outside aboutJournalSections. */
export const inspirationEdgePhotos = [];
