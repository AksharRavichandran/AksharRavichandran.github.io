import amazonLogo from "@/assets/amazon.png";
import sparksoftLogo from "@/assets/sparksoft.png";
import vipLogo from "@/assets/vip.jpeg";
import schellerLogo from "@/assets/scheller.jpeg";
import wordsPdf from "@/assets/722_Words_That_Unite_The_World.pdf";

const georgiaTechLogo = "/logos/georgia-tech.svg";

export const workHighlights = [
  {
    label: "Focus",
    value: "ML systems, internal tools, and research workflows",
  },
  {
    label: "Throughline",
    value: "Turning messy information into something useful for real people",
  },
  {
    label: "Working Style",
    value: "Builder first, patient with systems, biased toward clarity",
  },
];

export const workOrigin = {
  kicker: "Where it started",
  title: "The blackjack problem",
  paragraphs: [
    "Computer science first started calling me through a simple card game: blackjack. I kept feeling like there had to be an edge somewhere, so I hacked together a small simulation and ran the game until the feeling had to answer to the numbers.",
    "I found that I would only win around 42% of the time. That number stuck with me because it changed how I saw code: a way to test a hunch, not just write instructions.",
  ],
};

export const workExperiences = [
  {
    id: "amazon-business-2026",
    category: "experience",
    number: "01",
    organization: "Amazon Business",
    role: "SDE Intern",
    location: "Tempe, AZ",
    dates: "May 2026 — Present",
    summary:
      "Building recommendation infrastructure that helps third-party sellers discover certifications worth acting on.",
    tech: ["Backend services", "Data models", "REST APIs"],
    logo: amazonLogo,
    artifactCaption: "seller recs",
    focus:
      "I am working closer to the decision-making side of software now: the services and workflows that support ML-powered certification suggestions for sellers.",
    impact:
      "The work ties together APIs, backend logic, and supporting data models so recommendations feel operational instead of theoretical.",
    takeaway:
      "This is the kind of engineering I want more of: systems that reduce uncertainty and make the next best move clearer.",
  },
  {
    id: "scheller",
    category: "experience",
    number: "02",
    organization: "Scheller College of Business",
    role: "Research Assistant",
    location: "Atlanta, GA",
    dates: "Dec 2025 — Present",
    summary:
      "Building a research pipeline connecting social-media narratives to prediction-market movement.",
    tech: ["Python", "LLMs", "Polymarket API"],
    logo: schellerLogo,
    artifactCaption: "market edge",
    focus:
      "This project asks a question I keep returning to: where is the edge? I am studying whether online discourse surfaces information before prediction markets fully absorb it.",
    impact:
      "The pipeline links narrative signals from platforms like X and Reddit to Polymarket movement so the relationship can be tested instead of guessed.",
    takeaway:
      "It brings together finance, language, and engineering in a way that feels very close to my long-term interests.",
    links: [
      {
        label: "View repository",
        href: "https://github.com/AksharRavichandran/Polymarket_Social_Signals",
      },
    ],
  },
  {
    id: "amazon-2025",
    category: "experience",
    number: "03",
    organization: "Amazon",
    role: "SDE Intern",
    location: "Tempe, AZ",
    dates: "May 2025 — Aug 2025",
    summary:
      "Built internal certification-management workflows for Amazon Business across frontend, backend, and permissions-heavy systems.",
    tech: ["React", "Amazon Harmony", "Coral APIs"],
    logo: amazonLogo,
    artifactCaption: "cert portal",
    focus:
      "I designed and implemented features for an internal certification portal used to manage seller workflows across multiple business programs.",
    impact:
      "That meant stitching together UI components, service calls, and access-controlled business logic into tooling that was easier for PMs and engineers to use day to day.",
    takeaway:
      "At scale, the hard part is often not adding another feature. It is making complexity legible to the people operating inside it.",
  },
  {
    id: "sparksoft",
    category: "experience",
    number: "04",
    organization: "Sparksoft",
    role: "Full-Stack SWE Intern",
    location: "Columbia, MD",
    dates: "Jun 2024 — Nov 2024",
    summary:
      "Maintained and improved the CMS Enterprise Portal, resolving frontend and backend issues for production users.",
    tech: ["Angular", "Backend integration", "CMS"],
    logo: sparksoftLogo,
    artifactCaption: "cms portal",
    focus:
      "My first professional software experience was less about flashy launches and more about reliability: fixing bugs, improving pages, and learning how enterprise software behaves in the real world.",
    impact:
      "The work made the portal less fragile and less confusing, which is often the most practical form of impact in systems that people depend on every day.",
    takeaway:
      "I learned early that convenience and clarity are not cosmetic. In software, they are part of the product working at all.",
  },
  {
    id: "vip-research",
    category: "experience",
    number: "05",
    organization: "Georgia Tech VIP Research",
    role: "Research Assistant",
    location: "Atlanta, GA",
    dates: "Jan 2024 — Present",
    summary:
      "Researched central-bank communication with annotated policy text, NLP workflows, and LLM benchmarking for a NeurIPS 2025 accepted paper.",
    tech: ["Python", "LLMs", "NLP"],
    logo: vipLogo,
    artifactCaption: "policy nlp",
    focus:
      "I studied how central-bank language shapes market expectations by annotating policy statements, evaluating models, and helping build a global research dataset.",
    impact:
      "The project became part of a NeurIPS 2025 accepted paper and sharpened how I think about signal extraction from messy human language.",
    takeaway:
      "Research taught me to slow down, ask better questions, and care about systems that outlast a sprint.",
    links: [{ label: "Read the paper", href: wordsPdf }],
  },
  {
    id: "georgia-tech-ms",
    category: "education",
    number: "06",
    organization: "Georgia Tech",
    role: "M.S. Computer Science",
    location: "Atlanta, GA",
    dates: "2026 — 2027",
    summary:
      "Pursuing a Master's specializing in Machine Learning, deepening the AI foundation behind my research and engineering work.",
    tech: ["Machine Learning", "Artificial Intelligence", "Computer Science"],
    logo: georgiaTechLogo,
    artifactCaption: "grad school",
    focus:
      "Building on the AI thread from my undergrad, with a concentration in machine learning systems and applied research.",
    impact:
      "The graduate coursework ties directly into the market and policy research I care about most.",
    takeaway:
      "A chance to go deeper on the questions that first pulled me toward computer science.",
  },
  {
    id: "georgia-tech",
    category: "education",
    number: "07",
    organization: "Georgia Tech",
    role: "B.S. Computer Science",
    location: "Atlanta, GA",
    dates: "2021 — 2026",
    summary:
      "Studied the AI and Devices threads — the foundation behind everything else on this page.",
    tech: ["Artificial Intelligence", "Devices", "Computer Science"],
    logo: georgiaTechLogo,
    artifactCaption: "where it started",
    focus:
      "I chose the AI and Devices threads because they felt like two sides of the same idea: understanding information, and connecting software to the physical world.",
    impact:
      "Being surrounded by people building ambitious things pushed me to think bigger about the questions I kept carrying with me — from blackjack odds to market behavior.",
    takeaway:
      "Georgia Tech is where curiosity turned into a habit of building things to answer my own questions.",
  },
];
