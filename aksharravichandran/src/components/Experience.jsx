import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2>Experience</h2>
        <div className="section-underline" />
      </div>
      <div className="exp-grid">
        {experience.map((item, idx) => (
          <motion.article
            key={item.company + idx}
            className="exp-card glass"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <header className="exp-header">
              <div className="exp-headline">
                {item.logo ? (
                  <img
                    className="exp-logo"
                    src={item.logo}
                    alt={`${item.company} logo`}
                    loading="lazy"
                  />
                ) : (
                  <div className="exp-logo placeholder" aria-hidden>
                    {item.company?.[0] || ""}
                  </div>
                )}
                <div className="exp-meta">
                  <h3>{item.role}</h3>
                  <span className="company">{item.company}</span>
                </div>
                <span className="period">{item.period}</span>
              </div>
            </header>
            <ul className="exp-highlights">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
