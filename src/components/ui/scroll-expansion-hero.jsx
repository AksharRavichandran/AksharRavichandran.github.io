import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Scroll-driven hero: wheel/touch expands focal media, then reveals children below.
 * Vite/React port — uses <img> instead of next/image.
 *
 * @param {object} props
 * @param {'video'|'image'} [props.mediaType='image']
 * @param {string} props.mediaSrc — URL string or imported asset URL
 * @param {string} [props.posterSrc]
 * @param {string} props.bgImageSrc — full-bleed background (ignored if embedded)
 * @param {boolean} [props.embedded] — skip built-in bg; sit above parent backdrop (e.g. GradientBackground)
 * @param {string} [props.title]
 * @param {string} [props.date]
 * @param {string} [props.scrollToExpand]
 * @param {boolean} [props.scrollHintArrow] — animated chevron instead of scroll copy
 * @param {boolean} [props.animateTitleChars] — typewriter + caret (same timing feel as home name)
 * @param {boolean} [props.textBlend]
 * @param {boolean} [props.hideMedia] — text-only hero; scroll still reveals children
 * @param {string} [props.contentSectionClassName] — merged onto the scroll-reveal content wrapper
 * @param {number} [props.unlockAt] — scroll progress (0–1) to reveal children; default 1 (full travel)
 * @param {number} [props.wheelMultiplier] — wheel delta scale (higher = faster unlock)
 * @param {number} [props.touchBoost] — multiplies touch scroll factors when not expanded
 * @param {number} [props.revealDuration] — opacity transition for revealed section (seconds)
 * @param {string} [props.heroAreaClassName] — merged onto the hero viewport stack (title + hint)
 * @param {import('react').ReactNode} [props.heroContent] — replaces default title / typewriter / scroll hint when set
 * @param {import('react').ReactNode} [props.children]
 */
export default function ScrollExpandMedia({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  embedded = false,
  hideMedia = false,
  title,
  date,
  scrollToExpand,
  scrollHintArrow = false,
  animateTitleChars = false,
  textBlend = false,
  contentSectionClassName,
  unlockAt = 1,
  wheelMultiplier = 0.0009,
  touchBoost = 1,
  revealDuration = 0.7,
  heroAreaClassName,
  heroContent,
  children,
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const [titleAnimDone, setTitleAnimDone] = useState(!animateTitleChars);
  const [typedTitleLen, setTypedTitleLen] = useState(0);

  const sectionRef = useRef(null);
  const titleIntroRef = useRef(null);
  const titleInView = useInView(titleIntroRef, { once: true, amount: 0.4, margin: "0px 0px -12% 0px" });

  const resolvedUnlock = Math.min(1, Math.max(0.04, unlockAt));
  const hideLockLower = useMemo(
    () => (resolvedUnlock < 1 ? Math.max(0.06, resolvedUnlock * 0.55) : 0.75),
    [resolvedUnlock],
  );

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    setTitleAnimDone(!animateTitleChars);
    setTypedTitleLen(0);
  }, [mediaType, hideMedia, animateTitleChars]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setScrollProgress(0);
        setShowContent(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * wheelMultiplier;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= resolvedUnlock) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < hideLockLower) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setScrollProgress(0);
        setShowContent(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = (deltaY < 0 ? 0.008 : 0.005) * touchBoost;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= resolvedUnlock) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < hideLockLower) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, resolvedUnlock, hideLockLower, wheelMultiplier, touchBoost]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const TYPE_MS = 58;

  useEffect(() => {
    if (!animateTitleChars || !title || !titleInView) return undefined;
    setTypedTitleLen(0);
    setTitleAnimDone(false);
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      const next = Math.min(n, title.length);
      setTypedTitleLen(next);
      if (next >= title.length) {
        window.clearInterval(id);
        setTitleAnimDone(true);
      }
    }, TYPE_MS);
    return () => window.clearInterval(id);
  }, [animateTitleChars, titleInView, title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-start">
        <div className="relative flex min-h-[100dvh] w-full flex-col items-center">
          {!embedded && bgImageSrc ? (
            <motion.div
              className="absolute inset-0 z-0 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              <img
                src={bgImageSrc}
                alt=""
                className="h-screen w-screen object-cover object-center"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/10" aria-hidden />
            </motion.div>
          ) : null}

          <div className="relative z-10 mx-auto flex w-full max-w-[100vw] flex-col items-center justify-start px-0">
            <div
              className={cn(
                "relative flex h-[100dvh] w-full flex-col items-center px-4",
                hideMedia
                  ? "justify-center pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))]"
                  : "justify-start pt-[clamp(0.75rem,2.5vw,1.5rem)] sm:pt-10",
                heroAreaClassName,
              )}
            >
              {!hideMedia ? (
              <div
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-none"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                {mediaType === "video" ? (
                  mediaSrc.includes("youtube.com") ? (
                    <div className="pointer-events-none relative h-full w-full">
                      <iframe
                        title="Background video"
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes("embed")
                            ? `${mediaSrc}${mediaSrc.includes("?") ? "&" : "?"}autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1`
                            : `${mediaSrc.replace("watch?v=", "embed/")}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=${mediaSrc.split("v=")[1]}`
                        }
                        className="h-full w-full rounded-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="pointer-events-none absolute inset-0 z-10" />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="pointer-events-none relative h-full w-full">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="h-full w-full rounded-xl object-cover"
                        controls={false}
                      />
                      <div className="pointer-events-none absolute inset-0 z-10" />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative h-full w-full">
                    <img
                      src={mediaSrc}
                      alt={title || "Media content"}
                      className="h-full w-full rounded-xl object-cover"
                      decoding="async"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-black/50"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>
              ) : null}

              {heroContent ? (
                <div
                  ref={titleIntroRef}
                  className="pointer-events-auto relative z-10 mx-auto flex w-full max-w-[min(720px,96vw)] flex-col items-center justify-center text-center"
                >
                  {heroContent}
                </div>
              ) : (
              <div
                className={`scroll-expand-hero-copy home-hero-scene pointer-events-none relative z-10 ${
                  textBlend ? "mix-blend-difference" : ""
                }`}
              >
                <div ref={titleIntroRef} className="home-hero-scene-intro">
                  {date ? (
                    <p className="home-hero-greeting m-0 max-w-[min(560px,92vw)] px-2">{date}</p>
                  ) : null}
                  {title ? (
                    <p className="home-hero-headline home-hero-headline--name-only m-0 min-h-[1.15em]" aria-label={title}>
                      <span className="home-hero-name-wrap">
                        {animateTitleChars ? (
                          <span className="home-hero-name home-hero-name-inline inline-block text-center">
                            {title.slice(0, typedTitleLen)}
                          </span>
                        ) : (
                          <span className="home-hero-name home-hero-name-inline">{title}</span>
                        )}
                      </span>
                    </p>
                  ) : null}
                  {scrollHintArrow && titleAnimDone ? (
                    <motion.div
                      className="mt-2 flex justify-center"
                      role="img"
                      aria-label="Scroll to continue"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.28 }}
                    >
                      <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
                        className="flex justify-center"
                      >
                        <svg
                          className="h-9 w-9 text-white [filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.65))]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  ) : scrollToExpand ? (
                    <p className="m-0 max-w-md px-2 text-center text-sm font-medium leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_12px_rgba(0,0,0,0.75)] md:text-base">
                      {scrollToExpand}
                    </p>
                  ) : null}
                </div>
              </div>
              )}
            </div>

            <motion.section
              className={cn(
                "flex w-full flex-col px-6 py-10 md:px-12 lg:py-16",
                contentSectionClassName,
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: revealDuration, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
