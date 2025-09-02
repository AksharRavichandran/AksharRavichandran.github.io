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
          Building delightful software with precision
          <span className="neon">.</span>
        </h1>
        <p className="subtitle">
          CS @ Georgia Tech • Software Engineering • Quant Finance • ML
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#footer" className="btn btn-ghost">Contact</a>
        </div>
      </motion.div>
    </header>
  );
}
