import amazonLogo from "../assets/amazon.png";
import sparksoftLogo from "../assets/sparksoft.png";
import vipLogo from "../assets/vip.jpeg";
import schellerLogo from "../assets/scheller.jpeg";

/** Notebook-style section labels for expanded experience records. */
export const experienceSectionLabels = {
  context: "Context",
  problem: "The problem",
  ownership: "My part",
  system: "How it worked",
  outcome: "What changed",
  reflection: "What I carried forward",
};

export const experience = [
  {
    id: "scheller-ra",
    organization: "Scheller College of Business",
    company: "Scheller College of Business",
    role: "Research Assistant",
    location: "Atlanta, GA",
    dates: "Dec 2025 — Present",
    period: "Dec 2025 – Present",
    remote: "Hybrid",
    jobType: "Research",
    logo: schellerLogo,
    summary:
      "Building an LLM benchmark to connect social discourse on X and Reddit with prediction-market signals.",
    context:
      "Faculty-led research at Scheller studying how narrative and price move together in prediction markets — especially when the crowd may be reacting to the same headlines at different speeds.",
    problem:
      "Social text is noisy, platform-specific, and easy to misread. We needed a reproducible way to extract sentiment, stance, and narrative structure before testing whether those signals lead or lag market prices.",
    ownership:
      "I own the benchmark design and pipeline: dataset construction, model evaluation, and the first passes at linking discourse features to Polymarket price and volume shifts.",
    system:
      "Posts are collected from X and Reddit, passed through LLM-based classifiers for sentiment and stance, then aligned in time with market ticks to test lead–lag relationships against related equities.",
    outcome:
      "A working benchmark and early evidence on when social discourse precedes market moves — and when models are only echoing the crowd.",
    reflection:
      "Research like this rewards patience over clever one-off demos. I am more careful now about separating signal from narrative noise before drawing conclusions.",
    technologies: ["Python", "LLMs", "Polymarket API", "X / Reddit data", "Benchmark design"],
    metrics: [
      { value: "2", label: "platforms unified in one benchmark pipeline" },
      { value: "Lead–lag", label: "analysis linking discourse to market ticks" },
    ],
    flow: [
      "Social posts",
      "Sentiment & stance extraction",
      "Narrative tagging",
      "Market alignment",
      "Lead–lag testing",
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/AksharRavichandran/Polymarket_Social_Signals",
      },
    ],
    highlights: [
      "Building an LLM benchmark to extract sentiment, stance, and narratives from X and Reddit for prediction market signal testing",
      "Studying lead-lag effects between such social discourse and Polymarket price/volume shifts",
      "Exploring the impact of predicitons markets to their respective related equities",
    ],
    github: "https://github.com/AksharRavichandran/Polymarket_Social_Signals",
  },
  {
    id: "amazon-sde-intern",
    organization: "Amazon",
    company: "Amazon",
    role: "Software Development Engineer Intern",
    location: "Seattle, WA",
    dates: "Summer 2025",
    period: "Summer 2025",
    remote: "No",
    jobType: "Internship",
    logo: amazonLogo,
    summary:
      "Built an internal certification portal for Amazon Business sellers using React and Harmony.",
    context:
      "Amazon Business sellers move through certification workflows that PMs and SDEs need to track across teams. The existing tooling was fragmented — hard to see status, hard to ship changes safely.",
    problem:
      "Certification management was spread across tools and handoffs. Internal users needed one place to see progress, and engineering needed a production path that could land on multiple network fabrics.",
    ownership:
      "I developed the React front end on Amazon's Harmony framework, stood up the backing service, and wired a prodlink so the portal could connect across network fabrics.",
    system:
      "Seller certification data flows through internal services into a Harmony-backed portal where PMs and SDEs review status, trigger workflows, and ship updates through Amazon's production pipeline.",
    outcome:
      "A production-ready internal portal that consolidated certification management and reduced the friction of supporting Amazon Business sellers.",
    reflection:
      "Shipping inside Amazon taught me to design for operators first — clarity and reliability matter more than feature count when real teams depend on the tool daily.",
    technologies: ["React", "Harmony", "Internal services", "Prodlink", "Amazon Business"],
    metrics: [
      { value: "1", label: "production-ready portal shipped to internal users" },
      { value: "Multi-fabric", label: "prodlink connecting services across networks" },
    ],
    flow: [
      "Seller certification events",
      "Internal services",
      "Harmony portal",
      "PM / SDE workflows",
      "Live status updates",
    ],
    links: [],
    highlights: [
      "Developed one stop shop internal portal using React and Amazon's Harmony Framework",
      "Improved certification management for PMs and SDEs supporting Amazon Business sellers",
      "Established a production ready service and build a prodlink to connect my services onto multiple network fabrics",
    ],
  },
  {
    id: "sparksoft-intern",
    organization: "Sparksoft",
    company: "Sparksoft",
    role: "Software Engineering Intern",
    location: "Remote",
    dates: "Jun 2024 — Nov 2024",
    period: "Jun 2024 - Nov 2024",
    remote: "Yes",
    jobType: "Internship",
    logo: sparksoftLogo,
    summary:
      "Maintained and improved the Medicare CMS Enterprise Portal used by Centers for Medicare & Medicaid Services.",
    context:
      "Sparksoft supports a large Angular CMS portal that Medicare beneficiaries and administrators rely on. Small bugs and slow pages have real downstream cost when the user is not in the room with you.",
    problem:
      "Legacy workflows and performance bottlenecks were degrading stability. Client-facing updates had to ship without breaking regulated content paths.",
    ownership:
      "I resolved bugs, tuned performance, and collaborated with cross-functional teams to optimize feature workflows and deliver client-facing updates on schedule.",
    system:
      "Angular CMS modules talk to Medicare backend services. Changes move through QA and client review before reaching production portal users.",
    outcome:
      "Improved portal stability and user experience for Medicare-facing workflows — fewer regressions and smoother feature delivery.",
    reflection:
      "This was where I learned that enterprise work is mostly care: performance, clarity, and respect for the people who depend on the system.",
    technologies: ["Angular", "CMS", "Medicare / CMS", "Performance tuning"],
    metrics: [
      { value: "Medicare", label: "regulated portal serving CMS users" },
      { value: "Cross-team", label: "client-facing updates shipped on schedule" },
    ],
    flow: [
      "CMS content",
      "Angular portal",
      "Medicare services",
      "QA & client review",
      "Production release",
    ],
    links: [],
    highlights: [
      "Maintained and enhanced the CMS Enterprise Portal, a critical Angular-based platform supporting Medicare under the Centers for Medicare & Medicaid Services.",
      "Resolved many bugs and performance issues, improving stability and user experience for portal users.",
      "Collaborated with cross-functional teams to optimize feature workflows and deliver client-facing updates",
    ],
  },
  {
    id: "gt-vip-ra",
    organization: "Georgia Tech · Vertically Integrated Project",
    company: "Georgia Tech - Vertically Integrated Project",
    role: "Research Assistant",
    location: "Atlanta, GA",
    dates: "Jan 2024 — Present",
    period: "Jan 2024 – Present",
    remote: "Hybrid",
    jobType: "Research",
    logo: vipLogo,
    summary:
      "Research on monetary-policy sentiment — training and benchmarking LLMs on central-bank meeting minutes.",
    context:
      "Georgia Tech's VIP program pairs undergraduates with faculty on multi-semester research. Our team studied how language in central-bank communications reflects policy stance.",
    problem:
      "Policy minutes are long, domain-specific, and inconsistently labeled. We needed reliable classification benchmarks and cleaner financial text datasets before drawing conclusions.",
    ownership:
      "I trained and benchmarked LLMs for policy-sentiment classification, annotated RBI and Taiwan central-bank minutes, and improved financial news datasets with Polars and Pandas.",
    system:
      "Meeting minutes are segmented and labeled, models are benchmarked on stance classification, and financial news corpora are cleaned and evaluated before downstream analysis.",
    outcome:
      "Reusable benchmarks and annotated datasets that made policy-sentiment research reproducible across semesters.",
    reflection:
      "VIP is where research stopped feeling like a credential and started feeling like a path — questions that deserve years, not sprints.",
    technologies: ["Python", "LLMs", "Polars", "Pandas", "NLP", "Financial text"],
    metrics: [
      { value: "2", label: "central banks in annotated minute corpora" },
      { value: "Multi-semester", label: "benchmark reused across VIP cohorts" },
    ],
    flow: [
      "Policy minutes",
      "Sentence segmentation",
      "LLM classification",
      "Benchmark evaluation",
      "Dataset release",
    ],
    links: [],
    highlights: [
      "Monetary Policy Sentiment Analysis by training and benchmarking of LLMS to classify policy statements.",
      "Annotated and classified sentences from Reserve Bank of India (RBI) and Central Bank of Republic of China (Taiwan) meeting minutes.",
      "Performed Financial Datasets Analysis by evaluating datasets of financial news and press releases and improved them datasets using Polars and Panda.",
    ],
  },
];
