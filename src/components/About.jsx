import React from "react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import TopMusic from "./TopMusic";
import StravaStats from "./StravaStats";

const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/playlist/5gWOsJFdToIBRQFCBWh65d?utm_source=generator";

const storyLegible =
  "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.8),0_4px_20px_rgba(0,0,0,0.5)]";

export default function About() {
  return (
    <section id="about" className="about about--story">
      <ScrollExpandMedia
        hideMedia
        embedded
        animateTitleChars
        title="About Me"
        scrollHintArrow
      >
        <motion.div
          className="about-music glass mx-auto mt-12 w-full max-w-[min(1100px,92vw)] px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`music-section-title ${storyLegible}`}>The motivation behind my work</h3>
          <div className="music-grid">
            <TopMusic />
            <div className="spotify-card glass">
              <h4 className={storyLegible} style={{ marginBottom: 8 }}>
                One of my favorite playlists I&apos;ve made:
              </h4>
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
          <StravaStats />
        </motion.div>
      </ScrollExpandMedia>
    </section>
  );
}
