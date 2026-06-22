import wordsPdf from "../assets/722_Words_That_Unite_The_World.pdf";
import eventPdf from "../assets/EventDrivenAnalysis.pdf";
import roadForecastPdf from "../assets/Road_Condition_Forecasting___Final_Report.pdf";

/**
 * The Bottom Shelf — compact gallery cards at the bottom of the Work page.
 * One blurb each; links go straight to the source.
 */
export const projectCategories = [
  { id: "research-ml", label: "Research & ML" },
  { id: "software", label: "Software" },
  { id: "devices", label: "Devices" },
  { id: "data", label: "Data & Analytics" },
];

export const projects = [
  {
    id: "words-that-unite",
    category: "research-ml",
    title: "Words That Unite the World",
    dates: "2024",
    blurb:
      "Co-authored dataset and benchmark for reading policy stance across the world's central banks.",
    tags: ["Python", "NLP", "LLMs"],
    links: [{ label: "Paper", href: wordsPdf }],
  },
  {
    id: "event-driven-stocks",
    category: "research-ml",
    title: "Event-Driven Market Learning",
    dates: "2024",
    blurb:
      "BERT/ALBERT replication measuring which financial news events actually move the S&P 500.",
    tags: ["Python", "BERT", "ALBERT"],
    links: [{ label: "Paper", href: eventPdf }],
  },
  {
    id: "ic-quant",
    category: "research-ml",
    title: "IC Quant / Trading Systems",
    dates: "2025",
    blurb:
      "Kalman-filtered intraday beta pipeline and portfolio risk tooling for the Investment Committee.",
    tags: ["Python", "Kalman filtering"],
    links: [],
  },
  {
    id: "harmony-music",
    category: "software",
    title: "Harmony",
    dates: "2024",
    blurb:
      "Music collaboration platform for sharing stems, feedback, and version history in one place.",
    tags: ["React", "Web audio"],
    links: [],
  },
  {
    id: "apartments-for-u",
    category: "software",
    title: "Apartments For U",
    dates: "2024",
    blurb:
      "Palantir AIP workflow that scores apartment listings with XGBoost so the tradeoffs are visible.",
    tags: ["Palantir AIP", "XGBoost"],
    links: [{ label: "Demo", href: "https://www.youtube.com/watch?v=tr7z_phszNg" }],
  },
  {
    id: "spotify-wrapped",
    category: "software",
    title: "Spotify Wrapped, On Demand",
    dates: "2024",
    blurb:
      "Django app that snapshots your Spotify listening whenever you ask and has OpenAI tell the story back.",
    tags: ["Django", "Spotify API", "OpenAI"],
    links: [],
  },
  {
    id: "tremor-band",
    category: "devices",
    title: "Tremor-Assistance Wristband",
    dates: "Ongoing",
    blurb:
      "Haptic wristband that dampens tremor — firmware, sensing, and a printed enclosure built at home.",
    tags: ["Embedded", "Haptics", "Sensing"],
    links: [],
  },
  {
    id: "smart-chessboard",
    category: "devices",
    title: "Smart Chessboard",
    dates: "2023",
    blurb:
      "Sensor-equipped board that tracks piece movement and feeds game state into software.",
    tags: ["Embedded", "IoT"],
    links: [],
  },
  {
    id: "road-forecast",
    category: "data",
    title: "Road Condition Prediction",
    dates: "2023",
    blurb:
      "Forecasts pavement deterioration across 40k+ segments with strong out-of-sample accuracy.",
    tags: ["XGBoost", "Forecasting"],
    links: [{ label: "Report", href: roadForecastPdf }],
  },
  {
    id: "ncaa-basketball",
    category: "data",
    title: "NCAA Basketball Analytics",
    dates: "2023",
    blurb:
      "Pandas scraper for NCAA game data, feeding a win-probability model with the DSGT team.",
    tags: ["Python", "Pandas"],
    links: [],
  },
  {
    id: "nfl-analytics",
    category: "data",
    title: "NFL Analytics",
    status: "In progress",
    blurb: "Analytics toolkit for NFL game and player data — currently in progress.",
    tags: ["Python", "Sports analytics"],
    links: [{ label: "GitHub", href: "https://github.com/AksharRavichandran/NFLAnalytics" }],
  },
];
