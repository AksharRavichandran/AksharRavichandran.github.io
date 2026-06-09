import wordsPdf from "../assets/722_Words_That_Unite_The_World.pdf";
import eventPdf from "../assets/EventDrivenAnalysis.pdf";
import roadForecastPdf from "../assets/Road_Condition_Forecasting___Final_Report.pdf";

/** Notebook-style section labels for expanded project records. */
export const projectSectionLabels = {
  idea: "The idea",
  problem: "The problem",
  built: "What I built",
  system: "How it works",
  outcome: "Outcome",
  stack: "Stack",
};

export const projects = [
  {
    id: "words-that-unite",
    title: "Words That Unite the World",
    thesis:
      "Benchmark transformer and LLM models on a global central-bank communications dataset.",
    desc: "Co-authored research project creating a World Central Banks (WCB) dataset, compiling monetary policy communications from central banks across the globe.  and benchmarked transformer-based models and LLMs to analyze policy stance.",
    idea:
      "Central banks speak in different registers across countries — could a shared dataset and model benchmark make policy stance comparable at scale?",
    problem:
      "Policy communications are scattered, multilingual, and inconsistently labeled. There was no unified corpus for comparing how models read monetary stance across institutions.",
    built:
      "Co-authored the World Central Banks (WCB) dataset and benchmarked transformer-based models and LLMs on policy-stance classification.",
    system:
      "Communications were compiled across central banks, normalized for analysis, and evaluated with transformer and LLM baselines on stance and sentiment tasks.",
    outcome:
      "A reusable dataset and benchmark for cross-institution policy-language analysis, published as a research paper.",
    tags: ["Python", "NLP", "Transformers", "LLMs", "Financial Analytics", "Benchmarking"],
    dates: "2024",
    doc: wordsPdf,
    artifact: {
      type: "document",
      alt: "Words That Unite the World research paper cover",
      caption: "research paper",
    },
  },
  {
    id: "event-driven-stocks",
    title: "Event-Driven Learning of Systematic Behaviours in Stock Markets",
    thesis:
      "Measure how financial news events and sentiment move S&P 500 prices using BERT and ALBERT.",
    desc: "Replicated study to analyze the impact of financial news on stock price movements using event extraction and sentiment classification. Leveraged BERT/ALBERT to predict S&P 500 market reactions to news events.",
    idea:
      "Markets react to news — but which events matter, and can language models capture the systematic part of that reaction?",
    problem:
      "Raw news streams are noisy. The study needed structured event extraction and sentiment signals tied to measurable price movement.",
    built:
      "Replicated an event-driven pipeline with BERT/ALBERT sentiment classifiers to predict S&P 500 reactions to extracted news events.",
    system:
      "News events were extracted and classified, aligned in time with market ticks, and evaluated for predictive signal against benchmark baselines.",
    outcome:
      "Documented replication results and model comparisons in a formal research write-up.",
    tags: ["Python", "BERT", "ALBERT", "NLP", "Event Driven Analysis"],
    dates: "2024",
    doc: eventPdf,
    artifact: {
      type: "document",
      alt: "Event-driven stock market analysis paper",
      caption: "analysis paper",
    },
  },
  {
    id: "prediction-pipeline",
    title: "Prediction Pipeline",
    thesis:
      "Forecast pavement deterioration across 40k+ roadway segments with multi-year simulation.",
    desc: "Built a pavement deterioration forecasting pipeline using 40k+ roadway, traffic, climate, and structural features across 5+ datasets. Trained Ridge/Lasso, PCA-linear regression, Random Forest, and XGBoost to reach 0.065 RMSE for next-year MRI, then simulated multi-year deterioration to flag at-risk segments aligned to repaving cycles.",
    idea:
      "Road agencies need to prioritize repaving before failure — can heterogeneous infrastructure data predict deterioration early enough to act?",
    problem:
      "Features lived across five datasets with different schemas, and single-year accuracy alone would not support multi-year maintenance planning.",
    built:
      "A forecasting pipeline spanning data integration, model comparison, and multi-year deterioration simulation for segment-level risk flagging.",
    system:
      "Ridge/Lasso, PCA-linear regression, Random Forest, and XGBoost were trained on unified roadway, traffic, climate, and structural features; the best model fed a forward simulation aligned to repaving cycles.",
    outcome:
      "Achieved 0.065 RMSE on next-year MRI and produced at-risk segment flags for maintenance planning.",
    tags: ["Python", "Forecasting", "XGBoost", "Random Forest", "PCA Regression", "Infrastructure"],
    dates: "2023",
    doc: roadForecastPdf,
    metrics: [{ value: "0.065", label: "RMSE on next-year MRI prediction" }],
    artifact: {
      type: "document",
      alt: "Road condition forecasting final report",
      caption: "final report",
    },
  },
  {
    id: "apartments-for-u",
    title: "Apartments For U",
    thesis: "Score apartment listings with an XGBoost model inside a Palantir AIP workflow.",
    desc: "Built a AIP workflow that aggregates apartment data and scores listings using an XGBoost model, providing a recommendation system for finding ideal places to live.",
    idea:
      "Apartment hunting means comparing dozens of listings — could a scored ontology make the tradeoffs visible?",
    built:
      "A Palantir AIP workflow that aggregates listing data, scores apartments with XGBoost, and surfaces recommendations.",
    system:
      "Listing attributes flow through a data ontology into a trained XGBoost scorer that ranks options against user-weighted preferences.",
    tags: ["Python", "Palantir AIP", "Data Ontology", "XGBoost"],
    youtube: "https://www.youtube.com/watch?v=tr7z_phszNg",
  },
  {
    id: "spotify-wrapped",
    title: "Spotify Wrapped",
    thesis: "Personal listening insights from Spotify and OpenAI APIs in a Django app.",
    desc: "A Django web app integrating Spotify and OpenAI APIs to deliver personalized listening insights. Captures user data, genres, artists, and tracks, storing snapshots of Spotify 'Wrapped' statistics.",
    idea:
      "Spotify Wrapped is once a year — what if you could capture and revisit listening snapshots on demand?",
    built:
      "A Django web app that pulls Spotify listening history and uses OpenAI to generate personalized insight summaries.",
    system:
      "OAuth connects a user's Spotify account; genre, artist, and track data are stored as snapshots and passed to OpenAI for narrative summaries.",
    tags: ["Django", "Python", "Spotify API", "OpenAI API"],
    youtube: "https://sites.google.com/view/atlfoodfinder21/team?authuser=0",
  },
  {
    id: "ncaa-basketball",
    title: "NCAA Basketball Analytics",
    thesis: "Scrape NCAA game data and collaborate on a win-probability model.",
    desc: "Built a Python-based web scraper using Pandas to collect data of NCAA basketball games. Collaborated with a DSGT team to develop a win probability model.",
    built:
      "A Pandas web scraper for NCAA game data and collaborative work on a team win-probability model.",
    tags: ["Python", "Pandas", "Web Scraping", "Data Analysis"],
  },
  {
    id: "intraday-beta",
    title: "Intraday Beta Estimation",
    thesis: "Intraday beta estimation pipeline for portfolio risk analysis.",
    desc: "Built an intraday beta estimation pipeline for portfolio risk analysis; details are confidential under the Investment Committee.",
    built:
      "An intraday beta estimation pipeline using Kalman filtering for portfolio risk analysis under Investment Committee oversight.",
    tags: ["Python", "Kalman Filtering", "Pandas", "NumPy"],
  },
  {
    id: "nfl-analytics",
    title: "NFL Analytics",
    thesis: "In-progress analytics toolkit for NFL game and player data.",
    desc: "In progress...",
    status: "In progress",
    tags: ["Python", "Data Analysis", "Sports Analytics"],
    github: "https://github.com/AksharRavichandran/NFLAnalytics",
  },
];
