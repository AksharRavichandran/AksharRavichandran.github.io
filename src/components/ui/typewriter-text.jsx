import React, { useEffect, useRef, useState } from "react";
import { TypingCursor } from "@/components/ui/typing-cursor";
import { cn } from "@/lib/utils";

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

/**
 * Reveals text one unit at a time with an inline caret at the end while typing.
 */
export function TypewriterText({
  text,
  active = true,
  speed = 58,
  className,
  showCursor = true,
  keepCursor = false,
  onComplete,
}) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    finishedRef.current = false;
    setDisplayed("");
    setIsTyping(false);
  }, [text]);

  useEffect(() => {
    if (!active) {
      if (finishedRef.current) setDisplayed(text);
      return;
    }

    if (finishedRef.current) {
      setDisplayed(text);
      return;
    }

    let cancelled = false;
    const units = graphemes(text);

    setIsTyping(true);
    setDisplayed("");

    const run = async () => {
      for (let n = 0; n <= units.length; n++) {
        if (cancelled) return;
        setDisplayed(units.slice(0, n).join(""));
        if (n < units.length) await sleep(speed);
      }

      if (cancelled) return;
      setIsTyping(false);
      finishedRef.current = true;
      onComplete?.();
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [active, text, speed, onComplete]);

  const cursorVisible =
    showCursor && (isTyping || (keepCursor && displayed.length > 0 && !isTyping));

  return (
    <span className={cn("typewriter-text", className)}>
      {displayed}
      <TypingCursor hidden={!cursorVisible} />
    </span>
  );
}
