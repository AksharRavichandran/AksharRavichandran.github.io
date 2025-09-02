import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-left">
          <div className="profile glass" />
        </div>
        <div className="about-right glass">
          <h2>About Me</h2>
          <p>
            I’m Akshar Ravichandran — a CS student at Georgia Tech, passionate about
            software engineering, quantitative finance, and machine learning. I’ve
            shipped production systems at Amazon and Sparksoft and contributed to
            research at Georgia Tech.
          </p>
          <div className="stats-row">
            <div className="stat-card glass">
              <h4>🎧 Top Artist</h4>
              <p>Drake</p>
            </div>
            <div className="stat-card glass">
              <h4>🎵 Top Song</h4>
              <p>Jimmy Cooks</p>
            </div>
            <div className="stat-card glass">
              <h4>⏱ Minutes</h4>
              <p>42,367</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
