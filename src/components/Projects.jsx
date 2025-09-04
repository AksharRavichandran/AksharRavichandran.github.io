import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import wordsPdf from "../assets/722_Words_That_Unite_The_World.pdf";
import eventPdf from "../assets/EventDrivenAnalysis.pdf";

const projects = [
  {
    title: "Words That Unite the World",
    desc: "Co-authored research project creating a World Central Banks (WCB) dataset, compiling monetary policy communications from central banks across the globe.  and benchmarked transformer-based models and LLMs to analyze policy stance.",
    tags: [
      "Python",
      "NLP",
      "Transformers",
      "LLMs",
      "Financial Analytics",
      "Benchmarking"
    ],
    doc: wordsPdf,
  },
  {
    title: "Event-Driven Learning of Systematic Behaviours in Stock Markets",
    desc: "Replicated study to analyze the impact of financial news on stock price movements using event extraction and sentiment classification. Leveraged BERT/ALBERT to predict S&P 500 market reactions to news events.",
    tags: ["Python", "BERT", "ALBERT",  "NLP", "Event Driven Analysis"],
    doc: eventPdf,
  },
  {
    title: "Apartments For U",
    desc: "Built a AIP workflow that aggregates apartment data and scores listings using an XGBoost model, providing a recommendation system for finding ideal places to live.",
    tags: ["Python", "Palantir AIP", "Data Ontology", "XGBoost"],
    youtube: "https://www.youtube.com/watch?v=tr7z_phszNg",
  },
  {
    title: "Spotify Wrapped",
    desc: "A Django web app integrating Spotify and OpenAI APIs to deliver personalized listening insights. Captures user data, genres, artists, and tracks, storing snapshots of Spotify 'Wrapped' statistics.",
    tags:[
      "Django",
      "Python",
      "Spotify API",
      "OpenAI API"
    ],
    youtube: "https://sites.google.com/view/atlfoodfinder21/team?authuser=0"
  },
  {
    title: "NCAA Basketball Analytics",
    desc: "Built a Python-based web scraper using Pandas to collect data of NCAA basketball games. Collaborated with a DSGT team to develop a win probability model.",
    tags: [
      "Python",
      "Pandas",
      "Web Scraping",
      "Data Analysis"
    ]
  },
  {
    title: "Intraday Beta Estimation",
    desc: "In progress...",
    tags: ["Python", "Kalman Filtering", "Pandas", "NumPy"],
  },
];

function GitHubIcon({ className = "icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.37 1.12 2.95.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .85-.28 2.8 1.05.81-.23 1.67-.35 2.53-.35s1.72.12 2.53.35c1.95-1.33 2.8-1.05 2.8-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.56 5.09.36.32.67.95.67 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function DocIcon({ className = "icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7h5.5L15 3.5V9zM8 13h8v2H8v-2zm0 4h8v2H8v-2zm0-8h5v2H8V9z" />
    </svg>
  );
}

export default function Projects() {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft < maxScroll - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const pan = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.max(280, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="section-underline" />
      </div>
      <div className="carousel">
        <button
          className="carousel-arrow left"
          aria-label="Previous projects"
          onClick={() => pan(-1)}
          disabled={!canLeft}
        >
          &#10094;
        </button>
        <div className="carousel-track" ref={trackRef}>
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              className="project-card glass"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
            >
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              {(p.github || p.doc || p.youtube) && (
                <div className="proj-actions">
                  {p.github && (
                    <a
                      className="icon-btn"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      title="GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {p.doc && (
                    <a
                      className="icon-btn"
                      href={p.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} documentation`}
                      title="Documentation"
                    >
                      <DocIcon />
                    </a>
                  )}
                  {p.youtube && (
                    <a
                      className="icon-btn"
                      href={p.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on YouTube`}
                      title="YouTube"
                    >
                      <YouTubeIcon />
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
        <button
          className="carousel-arrow right"
          aria-label="Next projects"
          onClick={() => pan(1)}
          disabled={!canRight}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

function YouTubeIcon({ className = "icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.5 6.2a3.04 3.04 0 0 0-2.14-2.15C19.8 3.5 12 3.5 12 3.5s-7.8 0-9.36.55A3.04 3.04 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12c0 1.98.2 3.94.5 5.8.28 1.05 1.1 1.88 2.14 2.16C4.2 20.5 12 20.5 12 20.5s7.8 0 9.36-.55a3.04 3.04 0 0 0 2.14-2.15c.3-1.85.5-3.82.5-5.8 0-1.98-.2-3.94-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  );
}
