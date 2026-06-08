import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import chennaiImage from "../assets/chennai.jpg";

/** @typedef {'loading' | 'background' | 'greeting' | 'definition' | 'ready'} HomeIntroStage */

const STAGE_ORDER = /** @type {const} */ ([
  "loading",
  "background",
  "greeting",
  "definition",
  "ready",
]);

const HomeIntroContext = createContext({
  /** @type {HomeIntroStage} */
  stage: "ready",
  advance: () => {},
  isHome: false,
});

export function HomeIntroProvider({ isHome, children }) {
  const [stage, setStage] = useState(/** @type {HomeIntroStage} */ (isHome ? "loading" : "ready"));
  const [bgReady, setBgReady] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setStage("ready");
      setBgReady(true);
      return;
    }

    setStage("loading");
    setBgReady(false);

    const img = new Image();
    img.src = chennaiImage;

    const finish = () => setBgReady(true);
    img.onload = finish;
    img.onerror = finish;
    if (img.complete) finish();

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [isHome]);

  useEffect(() => {
    if (isHome && bgReady && stage === "loading") {
      setStage("background");
    }
  }, [isHome, bgReady, stage]);

  const advance = useCallback(() => {
    setStage((current) => {
      const index = STAGE_ORDER.indexOf(current);
      return STAGE_ORDER[Math.min(index + 1, STAGE_ORDER.length - 1)];
    });
  }, []);

  const value = useMemo(
    () => ({
      stage,
      advance,
      isHome,
    }),
    [stage, advance, isHome],
  );

  return <HomeIntroContext.Provider value={value}>{children}</HomeIntroContext.Provider>;
}

export function useHomeIntro() {
  return useContext(HomeIntroContext);
}
