import React, { useEffect, useRef, useState } from "react";

/** “Work” in four languages — same cadence as About “Me”. */
const WORK_FORMS = ["Work", "வேலை", "काम", "कार्यम्"];
const WORK_LANG = ["en", "ta", "hi", "sa"];

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

/** “My ” + cycling “Work” on one headline line. */
export default function WorkHeroHeadline() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const completedRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    const toText = WORK_FORMS[wordIndex];
    const fromText = completedRef.current;
    setDisplayed(fromText);
    const fromG = graphemes(fromText);
    const toG = graphemes(toText);

    const run = async () => {
      for (let n = fromG.length; n > 0; n -= 1) {
        if (cancelled) return;
        setDisplayed(fromG.slice(0, n).join(""));
        await sleep(DELETE_MS);
      }
      if (cancelled) return;
      setDisplayed("");

      for (let n = 0; n <= toG.length; n += 1) {
        if (cancelled) return;
        setDisplayed(toG.slice(0, n).join(""));
        await sleep(TYPE_MS);
      }

      completedRef.current = toText;

      if (cancelled) return;
      await sleep(PAUSE_AT_WORD_MS);
      if (cancelled) return;
      setWordIndex((i) => (i + 1) % WORK_FORMS.length);
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [wordIndex]);

  return (
    <p
      className="home-hero-headline home-hero-headline--name-only m-0 flex flex-wrap items-baseline justify-center gap-x-[0.12em] !text-center"
      aria-label="My Work headline with cycling word Work"
    >
      <span className="inline text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55),0_0_40px_rgba(0,0,0,0.3)]">
        My{" "}
      </span>
      <span lang={WORK_LANG[wordIndex]} className="home-hero-name-wrap inline text-left">
        <span
          className="home-hero-name home-hero-name-inline inline-block min-h-[1.15em] min-w-[2ch]"
          aria-live="polite"
          aria-atomic="true"
        >
          {displayed}
        </span>
      </span>
    </p>
  );
}
