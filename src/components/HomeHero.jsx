import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TextEffect } from "@/components/ui/text-effect";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { TypingCursor } from "@/components/ui/typing-cursor";
import { useHomeIntro } from "@/context/HomeIntroContext";
import profileImage from "../assets/profile.jpeg";
import chennaiImage from "../assets/chennai.jpg";
import atlImage from "../assets/atl.jpg";
import bwiImage from "../assets/bwi.jpg";

// Polaroids tucked into the four corners around the definition — a slanted
// scrapbook. `corner` drives placement (CSS), `rotate`/`tapeRotate` the tilt.
const SCRAPBOOK_PHOTOS = [
  { src: profileImage, alt: "Akshar", caption: "me", corner: "tl", rotate: -7, tapeRotate: 7 },
  { src: chennaiImage, alt: "Chennai traffic", caption: "chennai", corner: "tr", rotate: 6, tapeRotate: -6 },
  { src: atlImage, alt: "Atlanta", caption: "atlanta", corner: "bl", rotate: 5, tapeRotate: -8 },
  { src: bwiImage, alt: "Baltimore", caption: "home", corner: "br", rotate: -6, tapeRotate: 5 },
];

function ScrapbookPolaroid({ src, alt, caption, corner, rotate, tapeRotate, delay }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.figure
      className={`scrapbook-polaroid scrapbook-polaroid--${corner}`}
      style={{ "--tape-rotate": `${tapeRotate}deg` }}
      initial={{ opacity: 0, scale: 0.82, rotate: rotate * 1.9, y: -18 }}
      animate={{ opacity: 1, scale: 1, rotate, y: 0 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="scrapbook-tape" aria-hidden />
      <div className={`scrapbook-photo${loaded ? " is-loaded" : ""}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <figcaption className="scrapbook-caption">{caption}</figcaption>
    </motion.figure>
  );
}

function Scrapbook() {
  return (
    <div className="home-scrapbook" aria-hidden>
      {SCRAPBOOK_PHOTOS.map((photo, i) => (
        <ScrapbookPolaroid key={photo.corner} {...photo} delay={0.15 + i * 0.13} />
      ))}
    </div>
  );
}

const GREETING = "Hey, I'm ";
const NAME_FORMS = ["Akshar", "அக்ஷர்", "अक्षर", "अक्षरम्"];
const NAME_LANG = ["en", "ta", "hi", "sa"];

const DELETE_MS = 42;
const TYPE_MS = 58;
const PAUSE_AT_WORD_MS = 2200;

const DEFINITION_SECTION = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

const DEFINITION_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

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

function DictionaryEntry({ onRevealComplete }) {
  const revealDoneRef = useRef(false);

  useEffect(() => {
    revealDoneRef.current = false;
  }, []);

  return (
    <motion.article
      className="dictionary-entry home-hero-definition"
      aria-label="Dictionary-style definition of the name Akshar"
      variants={DEFINITION_CONTAINER}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => {
        if (revealDoneRef.current) return;
        revealDoneRef.current = true;
        onRevealComplete?.();
      }}
    >
      <motion.div className="dictionary-headword" variants={DEFINITION_SECTION}>
        <TextEffect as="span" per="char" preset="blur" className="dictionary-word" delay={0}>
          Akshar
        </TextEffect>
        <span className="dictionary-pron" lang="en">
          /əkˈʃɑːr/ <span className="dictionary-pron-label">also</span> /ˈæk.ʃər/
        </span>
        <span className="dictionary-pos">noun</span>
      </motion.div>

      <motion.p className="dictionary-ety" variants={DEFINITION_SECTION}>
        <TextEffect as="span" per="word" preset="blur" delay={0.06}>
          Sanskrit akṣara (अक्षर, अक्षरम्); cognate forms in Hindi and Tamil.
        </TextEffect>
      </motion.p>

      <motion.ol className="dictionary-definitions" variants={DEFINITION_CONTAINER}>
        <motion.li variants={DEFINITION_SECTION}>
          A <strong>letter</strong> or written character; the smallest unit of a script one reads or types.
        </motion.li>
        <motion.li variants={DEFINITION_SECTION}>
          In Indian thought, often glossed as an <em>imperishable syllable</em> or primordial sound—the kind of
          fixed, resonant unit that shows up in mantra and metaphor alike.
        </motion.li>
        <motion.li variants={DEFINITION_SECTION}>
          By extension (and a little playfully): a nod to <strong>language</strong>, <strong>code</strong>, and
          the clarity of getting a name—or a symbol—exactly right.
        </motion.li>
      </motion.ol>
    </motion.article>
  );
}

export default function HomeHero() {
  const { stage, advance } = useHomeIntro();
  const [nameIndex, setNameIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const [nameActive, setNameActive] = useState(false);
  const [nameIsTyping, setNameIsTyping] = useState(false);
  const [greetingTyped, setGreetingTyped] = useState(false);
  const completedNameRef = useRef("");
  const advancedFromGreetingRef = useRef(false);

  const showGreeting =
    stage === "greeting" || stage === "definition" || stage === "ready";
  const showDefinition = stage === "definition" || stage === "ready";
  const introComplete = stage === "ready";
  const showNameCursor =
    nameIsTyping || (stage === "greeting" && nameActive && displayedName.length > 0);

  useEffect(() => {
    if (stage === "greeting") {
      advancedFromGreetingRef.current = false;
      setGreetingTyped(false);
      setNameActive(false);
      setNameIsTyping(false);
      setDisplayedName("");
      setNameIndex(0);
      completedNameRef.current = "";
      return;
    }

    if (stage === "definition" || stage === "ready") {
      setGreetingTyped(true);
      setNameActive(true);
    } else {
      setNameActive(false);
      setNameIsTyping(false);
      setDisplayedName("");
      setNameIndex(0);
      setGreetingTyped(false);
      completedNameRef.current = "";
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "greeting" && greetingTyped) {
      setNameActive(true);
    }
  }, [stage, greetingTyped]);

  useEffect(() => {
    if (!nameActive) return;

    let cancelled = false;
    const targetText = NAME_FORMS[nameIndex];

    const run = async () => {
      if (!introComplete) {
        if (nameIndex !== 0) return;

        const akshar = NAME_FORMS[0];
        const aksharG = graphemes(akshar);

        if (completedNameRef.current === akshar) {
          setDisplayedName(akshar);
          setNameIsTyping(false);
          if (stage === "greeting" && !advancedFromGreetingRef.current) {
            advancedFromGreetingRef.current = true;
            await sleep(480);
            if (!cancelled) advance();
          }
          return;
        }

        setNameIsTyping(true);
        setDisplayedName("");
        for (let n = 0; n <= aksharG.length; n++) {
          if (cancelled) return;
          setDisplayedName(aksharG.slice(0, n).join(""));
          await sleep(TYPE_MS);
        }

        completedNameRef.current = akshar;
        setNameIsTyping(false);

        if (stage === "greeting" && !advancedFromGreetingRef.current) {
          advancedFromGreetingRef.current = true;
          await sleep(480);
          if (!cancelled) advance();
        }
        return;
      }

      const fromText = completedNameRef.current;
      setDisplayedName(fromText);
      const fromG = graphemes(fromText);
      const toG = graphemes(targetText);

      if (fromText === targetText && fromText.length > 0) {
        setNameIsTyping(false);
        await sleep(PAUSE_AT_WORD_MS);
        if (cancelled) return;
        setNameIndex((i) => (i + 1) % NAME_FORMS.length);
        return;
      }

      setNameIsTyping(true);

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

      completedNameRef.current = targetText;
      setNameIsTyping(false);

      if (cancelled) return;
      await sleep(PAUSE_AT_WORD_MS);
      if (cancelled) return;
      setNameIndex((i) => (i + 1) % NAME_FORMS.length);
    };

    run();

    return () => {
      cancelled = true;
      setNameIsTyping(false);
    };
  }, [nameIndex, nameActive, stage, advance, introComplete]);

  return (
    <header className="section home-hero-section home-hero-section--scrapbook">
      {showDefinition ? <Scrapbook /> : null}
      <div className="home-hero-scene">
        {showGreeting ? (
          <motion.div
            className="home-hero-scene-intro"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="home-hero-greeting">
              {stage === "greeting" && !greetingTyped ? (
                <TypewriterText
                  text={GREETING}
                  active
                  speed={52}
                  onComplete={() => setGreetingTyped(true)}
                />
              ) : (
                GREETING
              )}
            </span>
            <p className="home-hero-headline home-hero-headline--name-only">
              <span lang={NAME_LANG[nameIndex]} className="home-hero-name-wrap">
                <span className="home-hero-name home-hero-name-inline" aria-live="polite" aria-atomic="true">
                  {displayedName}
                  <TypingCursor hidden={!showNameCursor} />
                </span>
              </span>
            </p>
          </motion.div>
        ) : (
          <div className="home-hero-scene-intro home-hero-scene-intro--placeholder" aria-hidden />
        )}

        {showDefinition ? (
          <motion.div
            className="home-hero-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <DictionaryEntry
              onRevealComplete={() => {
                if (stage === "definition") advance();
              }}
            />
            {stage === "ready" ? (
              <motion.div
                className="home-hero-scene-actions"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <Link to="/about" className="home-hero-scene-link">
                  About me
                </Link>
                <Link to="/work" className="home-hero-scene-link">
                  My work
                </Link>
              </motion.div>
            ) : null}
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
