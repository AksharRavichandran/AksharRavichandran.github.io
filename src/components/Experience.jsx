import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { experience } from "../data/experience";

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
