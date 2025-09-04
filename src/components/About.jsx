import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

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
            I’m <strong>Akshar Ravichandran</strong> — a CS major at <strong>Georgia Tech</strong>,
            passionate about <strong>software engineering</strong>, <strong>quantitative finance</strong>,
            and <strong>machine learning</strong>. I’ve previously interned at
            <strong> Amazon</strong> and <strong>Sparksoft</strong>, while also contributing to
            research at Georgia Tech under the <strong>VIP program</strong>. I specialize in
            <strong> Devices</strong> and <strong>Artificial Intelligence</strong>, hoping to eventually work in a field where I can combine both. 
          </p>

          <p>
            Outside of code, I’m a huge <strong>food enthusiast</strong> —
            always exploring new spots, dialing in recipes, and hunting for the
            perfect cup of matcha 🍵. If you have recs, let me know!
          </p>

          <p>
            I’m also <strong>really into music</strong> 🎧 — you’ll usually find me
            cycling between <strong>R&B</strong>, <strong>Rap</strong>, and <strong>House</strong>,
            but I love discovering new music.
          </p>
          <div className="stats-row">
            {CURRENTLY.map((item) => (
              <div className="stat-card glass" key={item.label}>
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          {/* <div className="stats-row">
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
          </div> */}
          <div className="spotify-card glass" style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 8 }}>One of my favorite playlists, I've made:</h4>
            <iframe
              title="Spotify Embed"
              className="spotify-embed"
              src={SPOTIFY_EMBED_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
