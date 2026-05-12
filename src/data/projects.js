import wordsPdf from "../assets/722_Words_That_Unite_The_World.pdf";
import eventPdf from "../assets/EventDrivenAnalysis.pdf";
import roadForecastPdf from "../assets/Road_Condition_Forecasting___Final_Report.pdf";

export const projects = [
  {
    id: "words-that-unite",
    title: "Words That Unite the World",
    desc: "Co-authored research project creating a World Central Banks (WCB) dataset, compiling monetary policy communications from central banks across the globe.  and benchmarked transformer-based models and LLMs to analyze policy stance.",
    tags: ["Python", "NLP", "Transformers", "LLMs", "Financial Analytics", "Benchmarking"],
    doc: wordsPdf,
  },
  {
    id: "event-driven-stocks",
    title: "Event-Driven Learning of Systematic Behaviours in Stock Markets",
    desc: "Replicated study to analyze the impact of financial news on stock price movements using event extraction and sentiment classification. Leveraged BERT/ALBERT to predict S&P 500 market reactions to news events.",
    tags: ["Python", "BERT", "ALBERT", "NLP", "Event Driven Analysis"],
    doc: eventPdf,
  },
  {
    id: "prediction-pipeline",
    title: "Prediction Pipeline",
    desc: "Built a pavement deterioration forecasting pipeline using 40k+ roadway, traffic, climate, and structural features across 5+ datasets. Trained Ridge/Lasso, PCA-linear regression, Random Forest, and XGBoost to reach 0.065 RMSE for next-year MRI, then simulated multi-year deterioration to flag at-risk segments aligned to repaving cycles.",
    tags: ["Python", "Forecasting", "XGBoost", "Random Forest", "PCA Regression", "Infrastructure"],
    doc: roadForecastPdf,
  },
  {
    id: "apartments-for-u",
    title: "Apartments For U",
    desc: "Built a AIP workflow that aggregates apartment data and scores listings using an XGBoost model, providing a recommendation system for finding ideal places to live.",
    tags: ["Python", "Palantir AIP", "Data Ontology", "XGBoost"],
    youtube: "https://www.youtube.com/watch?v=tr7z_phszNg",
  },
  {
    id: "spotify-wrapped",
    title: "Spotify Wrapped",
    desc: "A Django web app integrating Spotify and OpenAI APIs to deliver personalized listening insights. Captures user data, genres, artists, and tracks, storing snapshots of Spotify 'Wrapped' statistics.",
    tags: ["Django", "Python", "Spotify API", "OpenAI API"],
    youtube: "https://sites.google.com/view/atlfoodfinder21/team?authuser=0",
  },
  {
    id: "ncaa-basketball",
    title: "NCAA Basketball Analytics",
    desc: "Built a Python-based web scraper using Pandas to collect data of NCAA basketball games. Collaborated with a DSGT team to develop a win probability model.",
    tags: ["Python", "Pandas", "Web Scraping", "Data Analysis"],
  },
  {
    id: "intraday-beta",
    title: "Intraday Beta Estimation",
    desc: "Built an intraday beta estimation pipeline for portfolio risk analysis; details are confidential under the Investment Committee.",
    tags: ["Python", "Kalman Filtering", "Pandas", "NumPy"],
  },
  {
    id: "nfl-analytics",
    title: "NFL Analytics",
    desc: "In progress...",
    tags: ["Python", "Data Analysis", "Sports Analytics"],
    github: "https://github.com/AksharRavichandran/NFLAnalytics",
  },
];
