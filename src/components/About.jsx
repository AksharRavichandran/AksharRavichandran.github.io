import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import TopMusic from "./TopMusic";

// Update these to your own details
const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/playlist/6AHFDICqERuGKomhF5hdNB?utm_source=generator"; 
const CURRENTLY = [
  { label: "Working on", value: "Intraday Beta Estimation Strategy" },
  { label: "Learning", value: "Kalman Filtering" },
  { label: "Craving", value: "Thai Food" },
];

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
          {/* Place your image at public/profile.jpg or update src below */}
          <img
            className="profile glass"
            src={profileImg}
            alt="Akshar Ravichandran portrait"
            loading="lazy"
          />
        </div>
        <div className="about-right glass">
          <h2>About Me</h2>
          <p>
            I’m Akshar Ravichandran a Computer Science major at Georgia Tech, specializing in devices and artificial intelligence. I'm
            passionate about software engineering, quantitative finance,
            and machine learning. I’ve previously interned at
            Amazon and Sparksoft, while also contributing to
            research at Georgia Tech under the VIP program and the Scheller College of Business.
            While my experiences span across multiple domains, they all tie back to my core interests in building, learning, and problem solving.
            I hope enjoy exploring my work!
          </p>
        </div>
      </motion.div>
      <motion.div
        className="about-music glass"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h3 className="music-section-title">The foundation to all of my work:</h3>
        <div className="music-grid">
          <TopMusic />
          <div className="spotify-card glass">
            <h4 style={{ marginBottom: 8 }}>One of my favorite playlists, I've made:</h4>
            <iframe
              title="Spotify Embed"
              className="spotify-embed"
              src={SPOTIFY_EMBED_URL}
              width="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
