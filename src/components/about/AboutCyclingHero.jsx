import React, { useEffect, useRef, useState } from "react";

/** Cycling second word after the headline prefix — same line as “About ” / “Contact ”. */
const ME_FORMS = ["Me", "என்னை", "मुझे", "माम्"];
const ME_LANG = ["en", "ta", "hi", "sa"];

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

/** Prefix (e.g. “About ” or “Contact ”) + cycling “Me” on one headline line. */
export default function AboutCyclingHero({
  prefix = "About ",
  ariaLabel = "About Me headline with cycling word Me",
}) {
  const [meIndex, setMeIndex] = useState(0);
  const [displayedMe, setDisplayedMe] = useState("");
  const completedRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    const toText = ME_FORMS[meIndex];
    const fromText = completedRef.current;
    setDisplayedMe(fromText);
    const fromG = graphemes(fromText);
    const toG = graphemes(toText);

    const run = async () => {
      for (let n = fromG.length; n > 0; n -= 1) {
        if (cancelled) return;
        setDisplayedMe(fromG.slice(0, n).join(""));
        await sleep(DELETE_MS);
      }
      if (cancelled) return;
      setDisplayedMe("");

      for (let n = 0; n <= toG.length; n += 1) {
        if (cancelled) return;
        setDisplayedMe(toG.slice(0, n).join(""));
        await sleep(TYPE_MS);
      }

      completedRef.current = toText;

      if (cancelled) return;
      await sleep(PAUSE_AT_WORD_MS);
      if (cancelled) return;
      setMeIndex((i) => (i + 1) % ME_FORMS.length);
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [meIndex]);

  return (
    <p
      className="home-hero-headline home-hero-headline--name-only m-0 flex flex-wrap items-baseline justify-center gap-x-[0.12em] !text-center"
      aria-label={ariaLabel}
    >
      <span className="inline text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55),0_0_40px_rgba(0,0,0,0.3)]">
        {prefix}
      </span>
      <span lang={ME_LANG[meIndex]} className="home-hero-name-wrap inline text-left">
        <span className="home-hero-name home-hero-name-inline inline-block min-h-[1.15em] min-w-[2ch]" aria-live="polite" aria-atomic="true">
          {displayedMe}
        </span>
      </span>
    </p>
  );
}
