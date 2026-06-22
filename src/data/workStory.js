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
      id: "odds",
      paragraphs: [
        "Computer science first started calling me through a simple card game: blackjack. The game bothered me because I kept feeling like there had to be an edge somewhere, even though I could never quite find it. So I hacked together a small simulation, probably messier than it needed to be, and ran the game over and over until the feeling had to answer to the numbers.",
        "The result was humbling. I found that I would only win around 42% of the time. But that number stuck with me because it changed how I saw code.",
      ],
    },
    {
      id: "georgia-tech",
      paragraphs: [
        "That curiosity followed me to Georgia Tech, where I chose the Artificial Intelligence and Devices threads because they felt like two sides of the same idea. AI was about understanding information, patterns, and decisions. Devices was about connecting software to the physical world and seeing how computation could interact with real environments.",
        "After my first couple of weeks, what surprised me most was not just the coursework, but the people around me. Everywhere I looked, someone was building something ambitious, researching something new, or solving a problem in a way I had never considered. Being surrounded by that level of talent and innovation pushed me to think bigger and immerse myself in the same culture. I wanted to find better answers to the questions I kept carrying with me.",
      ],
    },
    {
      id: "markets",
      paragraphs: [
        "One question that kept pulling me in was finance. Between investing, following markets, and spending way too much time looking at prices for different hypebeast sneakers, I became fascinated by the stories behind why things become valuable. Sometimes it was scarcity. Sometimes timing. Sometimes it was just a group of people deciding that something mattered because of the hype.",
        "What interested me most was that there never seemed to be a single explanation. Every price, trend, or market move felt like the result of thousands of small decisions layered on top of each other. The more I paid attention, the more I wanted to understand the people behind the numbers, and that curiosity eventually led me toward financial markets research.",
      ],
    },
    {
      id: "research",
      paragraphs: [
        "That curiosity about markets led me to VIP research in financial markets, where I studied central bank communication. If markets are shaped by beliefs and decisions, I wanted to understand how those beliefs are influenced in the first place. I helped annotate policy statements, evaluate language models, and contribute to a global dataset that became part of a NeurIPS 2025 accepted paper.",
      ],
      card: {
        name: "Georgia Tech · VIP Research",
        logo: vipLogo,
        meta: "Research Assistant · Jan 2024 — Present · Atlanta, GA",
        tech: ["Python", "LLMs", "NLP"],
        blurb:
          "Central-bank communication research using annotated policy statements, NLP models, and LLM benchmarks.",
        link: { label: "Read the paper", href: wordsPdf },
      },
    },
    {
      id: "sparksoft",
      paragraphs: [
        "Research taught me how to extract signals and discover insights from a complex system in the real world. Around the same time, I wanted to learn what it looked like to build and maintain those same systems in practice, which led me to my first professional software experience at Sparksoft, a government contractor for the Centers for Medicare & Medicaid Services. I worked on their Enterprise Portal, fixing frontend and backend issues, improving pages, and learning how different software feels when real people are depending on it.",
        "It was not the kind of work that always announces itself loudly. Sometimes the important part was making something less confusing, less fragile, or less painful for the next person who had to use it. Reliability, I learned, is a quiet kind of impact. Convenience is a necessity in the realm of software engineering.",
      ],
      card: {
        name: "Sparksoft",
        logo: sparksoftLogo,
        meta: "Full-Stack SWE Intern · Jun — Nov 2024 · Columbia, MD",
        tech: ["Angular", "Backend integration", "CMS"],
        blurb:
          "Maintained and improved the CMS Enterprise Portal for Medicare, resolving frontend/backend bugs and performance issues.",
      },
    },
    {
      id: "amazon",
      paragraphs: [
        "The next summer, I went to Amazon in Tempe, and the scale changed enormously. My task was to work on an internal certification management portal for Amazon Business sellers, designing and implementing features that centralized seller certification workflows across multiple business programs. In practice, that meant coordinating frontend interfaces, backend services, and access-controlled workflows across a large internal ecosystem.",
        "I built components using React on Amazon's Harmony framework, integrated Coral APIs to retrieve and update certification data, and developed tooling that supported auditing, editing, and managing seller certifications. What stood out to me was how much engineering at scale is really about reducing complexity. The technical challenge was not just building features; it was making distributed systems, permissions, and business logic feel intuitive to the people using them every day.",
      ],
      card: {
        name: "Amazon",
        logo: amazonLogo,
        meta: "SDE Intern · May — Aug 2025 · Tempe, AZ",
        tech: ["React", "Amazon Harmony", "Coral APIs"],
        blurb:
          "Built an internal Amazon Business certification portal that centralized seller certification workflows for PMs and engineers.",
      },
    },
    {
      id: "amazon-recommendations",
      paragraphs: [
        "This summer, I am returning to Amazon and moving closer to the kind of work that first made computer science feel exciting to me: recommendations, data, and decision-making. This time, I am working on client-facing infrastructure that supports ML-powered certification suggestions for third-party sellers.",
        "The work connects backend services, data models, APIs, and workflows that help sellers find opportunities they can actually act on. It brings together a lot of the things I care about: building systems that reason over information, reduce uncertainty, and help someone make a better next move.",
      ],
      card: {
        name: "Amazon Business",
        logo: amazonLogo,
        meta: "SDE Intern · May 2026 — Present · Tempe, AZ",
        tech: ["Backend services", "Data models", "REST APIs"],
        blurb:
          "Building recommendation infrastructure for Amazon Business sellers, including certification suggestions and supporting backend workflows.",
      },
    },
    {
      id: "scheller",
      paragraphs: [
        "The more time I spent working on recommendation systems, the more I realized they were really another version of the same question that first drew me to blackjack and later to markets: where is the edge? In blackjack, I tried to find it through simulation. In markets, I looked for it through behavior and incentives. As an engineer, I became interested in how data, language, and technology could uncover signals that are easy to miss.",
        "That intersection has led me to my current Polymarket project, where I am building a pipeline that connects social discourse from X and Reddit to prediction-market movement, exploring whether online narratives can provide an informational edge before prices fully react. In a way, it brings the story back to where it started: not trying to predict the future, but trying to better understand the truths about human nature that reveal themselves through uncertainty.",
      ],
      card: {
        name: "Scheller College of Business",
        logo: schellerLogo,
        meta: "Research Assistant · Dec 2025 — Present · Atlanta, GA",
        tech: ["Python", "LLMs", "Polymarket API"],
        blurb:
          "A research pipeline connecting social-media narratives to prediction-market signals.",
        link: {
          label: "View repository",
          href: "https://github.com/AksharRavichandran/Polymarket_Social_Signals",
        },
      },
    },
    {
      id: "closing",
      paragraphs: [
        "The rest of the shelf is below: smaller builds, prototypes, notebooks, and experiments that did not all fit into the main story. Some are technical, some are unfinished, and some are personal, like the tremor-assistance wristband I built for my dad when multiple sclerosis made everyday motion harder.",
      ],
    },
  ],
};

