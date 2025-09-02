import React from "react";
import { motion } from "framer-motion";

const sampleProjects = [
  {
    title: "Market Alpha Scanner",
    desc: "Quant toolkit for factor screens and backtests.",
    tags: ["Python", "Pandas", "Backtrader"],
    github: "https://github.com/yourname/alpha-scanner",
    doc: "https://yourdomain.com/alpha-scanner-notes",
  },
  {
    title: "Realtime Dashboard",
    desc: "Streaming analytics UI with alerts and drill-downs.",
    tags: ["React", "WebSocket", "Vite"],
    github: "https://github.com/yourname/realtime-dashboard",
  },
  {
    title: "ML Service",
    desc: "Inference microservice with A/B routing and tracing.",
    tags: ["FastAPI", "Docker", "Grafana"],
    doc: "https://yourdomain.com/ml-service-doc",
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
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="section-underline" />
      </div>
      <div className="cards-grid">
        {sampleProjects.map((p, idx) => (
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
            {(p.github || p.doc) && (
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
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
