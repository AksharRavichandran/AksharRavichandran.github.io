import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { experience } from "../data/experience";

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

export default function Experience() {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft < maxScroll - 4);
    };
    const onScroll = () => {
      update();
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 250);
    };

    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const pan = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.max(260, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2>Experience</h2>
        <div className="section-underline" />
      </div>
      <div className={`carousel ${isScrolling ? "scrolling" : ""}`}>
        <button
          className="carousel-arrow left"
          aria-label="Previous experience"
          onClick={() => pan(-1)}
          disabled={!canLeft}
        >
          &#10094;
        </button>
        <div className="carousel-track" ref={trackRef}>
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
              {item.github && (
                <div className="exp-actions">
                  <a
                    className="icon-btn"
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.company} on GitHub`}
                    title="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
        <button
          className="carousel-arrow right"
          aria-label="Next experience"
          onClick={() => pan(1)}
          disabled={!canRight}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
