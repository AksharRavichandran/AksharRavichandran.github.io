import React from "react";
import { motion } from "framer-motion";

const sampleProjects = [
  {
    title: "Market Alpha Scanner",
    desc: "Quant toolkit for factor screens and backtests.",
    tags: ["Python", "Pandas", "Backtrader"],
  },
  {
    title: "Realtime Dashboard",
    desc: "Streaming analytics UI with alerts and drill-downs.",
    tags: ["React", "WebSocket", "Vite"],
  },
  {
    title: "ML Service",
    desc: "Inference microservice with A/B routing and tracing.",
    tags: ["FastAPI", "Docker", "Grafana"],
  },
];

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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
