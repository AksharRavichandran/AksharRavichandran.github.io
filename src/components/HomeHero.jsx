import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TextEffect } from "@/components/ui/text-effect";

const NAME_FORMS = ["Akshar", "அக்ஷர்", "अक्षर", "अक्षरम्"];
const NAME_LANG = ["en", "ta", "hi", "sa"];

const DELETE_MS = 42;
const TYPE_MS = 58;
const PAUSE_AT_WORD_MS = 2200;

function graphemes(s) {
  if (!s) return [];
  try {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return [...seg.segment(s)].map((x) => x.segment);
  } catch {
    return [...s];
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function DictionaryEntry() {
  return (
    <article
      className="dictionary-entry home-hero-definition"
      aria-label="Dictionary-style definition of the name Akshar"
    >
      <div className="dictionary-headword">
        <span className="dictionary-word">Akshar</span>
        <span className="dictionary-pron" lang="en">
          /əkˈʃɑːr/ <span className="dictionary-pron-label">also</span> /ˈæk.ʃər/
        </span>
        <span className="dictionary-pos">noun</span>
      </div>
      <p className="dictionary-ety">
        Sanskrit <span lang="sa">akṣara</span> (अक्षर, अक्षरम्); cognate forms in Hindi and Tamil.
      </p>
      <ol className="dictionary-definitions">
        <li>
          A <strong>letter</strong> or written character; the smallest unit of a script one reads or types.
        </li>
        <li>
          In Indian thought, often glossed as an <em>imperishable syllable</em> or primordial sound—the kind of
          fixed, resonant unit that shows up in mantra and metaphor alike.
        </li>
        <li>
          By extension (and a little playfully): a nod to <strong>language</strong>, <strong>code</strong>, and
          the clarity of getting a name—or a symbol—exactly right.
        </li>
      </ol>
    </article>
  );
}

export default function HomeHero() {
  const [nameIndex, setNameIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const completedNameRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    const toText = NAME_FORMS[nameIndex];
    const fromText = completedNameRef.current;
    setDisplayedName(fromText);
    const fromG = graphemes(fromText);
    const toG = graphemes(toText);

    const run = async () => {
      for (let n = fromG.length; n > 0; n--) {
        if (cancelled) return;
        setDisplayedName(fromG.slice(0, n).join(""));
        await sleep(DELETE_MS);
      }
      if (cancelled) return;
      setDisplayedName("");

      for (let n = 0; n <= toG.length; n++) {
        if (cancelled) return;
        setDisplayedName(toG.slice(0, n).join(""));
        await sleep(TYPE_MS);
      }

      completedNameRef.current = toText;

      if (cancelled) return;
      await sleep(PAUSE_AT_WORD_MS);
      if (cancelled) return;
      setNameIndex((i) => (i + 1) % NAME_FORMS.length);
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [nameIndex]);

  return (
    <header className="section home-hero-section">
      <motion.div
        className="home-hero-scene"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="home-hero-scene-intro">
          <TextEffect per="char" preset="blur" as="span" className="home-hero-greeting" delay={0}>
            Hey, I'm{" "}
          </TextEffect>
          <p className="home-hero-headline home-hero-headline--name-only">
            <span lang={NAME_LANG[nameIndex]} className="home-hero-name-wrap">
              <span className="home-hero-name home-hero-name-inline" aria-live="polite" aria-atomic="true">
                {displayedName}
              </span>
            </span>
          </p>
        </div>

        <div className="home-hero-card">
          <DictionaryEntry />
          <div className="home-hero-scene-actions">
            <Link to="/work" className="home-hero-scene-link">
              View my work
            </Link>
            <Link to="/contact" className="home-hero-scene-link">
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
