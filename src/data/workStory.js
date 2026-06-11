import amazonLogo from "../assets/amazon.png";
import sparksoftLogo from "../assets/sparksoft.png";
import vipLogo from "../assets/vip.jpeg";
import schellerLogo from "../assets/scheller.jpeg";
import wordsPdf from "../assets/722_Words_That_Unite_The_World.pdf";

/**
 * The Work page narrative — short chapters of prose, each optionally
 * followed by an inline card for the place or project it mentions.
 * Cards: { name, logo?, meta?, tech?, blurb, link? } — omit logo to
 * render an initial-letter tile instead.
 */
export const workStory = {
  eyebrow: "THE WORKING DRAFT",
  chapters: [
    {
      id: "the-band",
      paragraphs: [
        "The first thing I built that mattered was for my dad. When multiple sclerosis brought tremors, I could not fix the disease — so I built a wrist-worn band that damps them with haptic feedback. Firmware, sensing, an enclosure printed and reprinted until it fit. Nobody assigned it and nobody graded it, but it set the bar for everything since: *does this actually help someone?*",
      ],
      card: {
        name: "Tremor-Damping Wristband",
        meta: "Personal project · Ongoing",
        tech: ["Embedded firmware", "Haptics", "Sensing"],
        blurb:
          "A haptic wristband that damps tremor — built, worn, and tested at the kitchen table.",
      },
    },
    {
      id: "research",
      paragraphs: [
        "At Georgia Tech I found research. Our team reads central banks the way critics read novels — I train and benchmark LLMs on policy stance, annotated meeting minutes from the RBI and Taiwan's central bank, and helped turn the work into a global dataset and a co-authored paper.",
      ],
      card: {
        name: "Georgia Tech · VIP Research",
        logo: vipLogo,
        meta: "Research Assistant · Jan 2024 — Present · Atlanta, GA",
        tech: ["Python", "LLMs", "NLP"],
        blurb:
          "Monetary-policy sentiment research — the World Central Banks dataset and model benchmark.",
        link: { label: "Read the paper", href: wordsPdf },
      },
    },
    {
      id: "sparksoft",
      paragraphs: [
        "Sparksoft was my first taste of software with real people on the other end — the Medicare CMS Enterprise Portal. I fixed what was broken, tuned what was slow, and shipped client-facing updates on schedule. *Enterprise work, it turns out, is mostly care.*",
      ],
      card: {
        name: "Sparksoft",
        logo: sparksoftLogo,
        meta: "Software Engineering Intern · Jun — Nov 2024 · Remote",
        tech: ["Angular", "CMS"],
        blurb:
          "Maintained and improved the Medicare CMS Enterprise Portal for the Centers for Medicare & Medicaid Services.",
      },
    },
    {
      id: "amazon",
      paragraphs: [
        "The next summer I was at Amazon in Tempe, building an internal certification portal for Amazon Business — a React front end on the Harmony framework, a production-ready service behind it, and a prodlink tying it across network fabrics. One page that PMs and engineers could trust.",
      ],
      card: {
        name: "Amazon",
        logo: amazonLogo,
        meta: "SDE Intern · Summer 2025 · Tempe, AZ",
        tech: ["React", "Harmony"],
        blurb: "Internal certification portal for teams supporting Amazon Business sellers.",
      },
    },
    {
      id: "scheller",
      paragraphs: [
        "Now I split my time between classes and Scheller, building an LLM benchmark that links social discourse on X and Reddit to prediction-market moves — testing *when the crowd speaks before the market does*.",
      ],
      card: {
        name: "Scheller College of Business",
        logo: schellerLogo,
        meta: "Research Assistant · Dec 2025 — Present · Atlanta, GA",
        tech: ["Python", "LLMs", "Polymarket API"],
        blurb: "A benchmark connecting social-media narratives to prediction-market signals.",
        link: {
          label: "View repository",
          href: "https://github.com/AksharRavichandran/Polymarket_Social_Signals",
        },
      },
    },
    {
      id: "closing",
      paragraphs: [
        "The rest of the shelf is below — smaller experiments, same habit: notice something broken, build the fix, write it down.",
      ],
    },
  ],
};
