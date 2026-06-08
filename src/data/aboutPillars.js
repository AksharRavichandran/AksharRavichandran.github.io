// About-page "pillars" — three story sections keyed to three visible posts on
// the house photo. `hotspot` values are PERCENTAGES of the rendered image, so
// the clickable overlays scale with the responsive image (never pixels).
//
// Adjust these percentages after checking the overlay in the browser.
// (left/top = top-left corner of the hotspot, width/height = its size.)
export const aboutPillars = [
  {
    id: "background",
    number: "01",
    title: "Background",
    kicker: "Where I come from",
    hotspot: { left: 15, top: 24, width: 6, height: 44 },
    body: [
      "I grew up in Baltimore as an only child. Without siblings to lean on, I learned early to figure things out myself and to take responsibility when something needed doing — independence that still shows up when I sit with a hard problem longer than I probably should.",
      "My family's roots run back to a house like this one in Tamil Nadu. Between Baltimore, Atlanta, and Chennai, \u201chome\u201d became less a single place than a set of habits I carry: show up, stay patient, and keep the people who raised me close.",
    ],
  },
  {
    id: "motivation",
    number: "02",
    title: "Motivation",
    kicker: "What drives me",
    hotspot: { left: 37, top: 24, width: 6, height: 44 },
    body: [
      "When my dad was diagnosed with multiple sclerosis, I became an extra pair of hands at home. I couldn't fix the disease, but I could show up — and that became the filter I use for what's worth building: does it actually help someone, or does it just look good in a demo?",
      "It's why I built a wrist-worn device to damp his tremor, and why I'd rather understand a system than ship the fastest patch. Track taught me the rest: a respect for repetition. The person who trains in bad weather is the same one who debugs firmware at midnight.",
    ],
  },
  {
    id: "beliefs",
    number: "03",
    title: "Beliefs",
    kicker: "What I hold to",
    hotspot: { left: 51, top: 24, width: 6, height: 44 },
    body: [
      "I think realizing your destiny is a real obligation — not passive waiting, but choosing to move toward what you're meant to build. And being a polymath isn't collecting fields for a r\u00e9sum\u00e9; it's listening deeply enough that different disciplines start echoing the same truth.",
      "Everything else fits around family — the people who raised you and the home you come back to. No other success makes up for failing there.",
    ],
  },
];
