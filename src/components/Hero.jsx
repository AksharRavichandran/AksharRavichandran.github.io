import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header id="hero" className="section hero">
      <motion.div
        className="hero-inner glass"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Hi, i'm Akshar
          <span className="neon">.</span>
        </h1>
        <p className="subtitle">
          CS @ Georgia Tech • Prev SDE @ Amazon • Software Engineer
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="#footer" className="btn btn-ghost">Contact Me</a>
        </div>
      </motion.div>
    </header>
  );
}
