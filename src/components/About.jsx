import React from "react";
import { motion } from "framer-motion";
import AboutHousePillars from "@/components/about/AboutHousePillars";

export default function About() {
  return (
    <section
      id="about"
      className="section home-hero-section about about--story flex flex-col"
    >
      <motion.div
        className="home-hero-scene about-hero-scene-wide flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <header className="about-foundation home-hero-scene-intro">
          <p className="about-foundation__lead">
            Every structure begins with a foundation.
          </p>
          <p className="about-foundation__body">
            Mine begins with a house in Kudavasal, where my grandfather grew up,
            and with the values that traveled far beyond it.
          </p>
          <p className="about-foundation__sub">
            Three pillars hold the structure together.
          </p>
          <p className="about-foundation__body">
            The house rests on three pillars: background, motivation, and
            beliefs.
          </p>
          <p className="about-foundation__hint">
            Select a pillar to explore the values and experiences behind the
            work I do today.
          </p>
        </header>

        <div className="about-house-scroll w-full">
          <AboutHousePillars />
        </div>
      </motion.div>
    </section>
  );
}
