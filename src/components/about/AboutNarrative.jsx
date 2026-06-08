import React from "react";
import { cn } from "@/lib/utils";

const legible = "text-[#1f1c18]";

/** Section title inside an About tab. */
export function AboutNarrativeTitle({ children, className }) {
  return (
    <h2
      className={cn(
        "about-narrative-title m-0 mb-6 text-xl font-semibold tracking-tight text-[#14110e] md:text-2xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** Body copy — same font/size as dictionary beats (set on .about-narrative). */
export function AboutProse({ children, className }) {
  return (
    <div
      className={cn("about-prose space-y-4 text-[#1f1c18]/85", className)}
    >
      {children}
    </div>
  );
}

export function AboutProseP({ children, className }) {
  return <p className={cn("m-0", className)}>{children}</p>;
}

/** Marks a word in prose that is defined in the dictionary block below. */
export function AboutTerm({ children, className }) {
  return (
    <strong className={cn("font-semibold text-[#14110e]", className)}>
      {children}
    </strong>
  );
}

/**
 * Narrative beat: prose mentions a term, then dictionary entry follows immediately.
 */
export function AboutStoryBeat({ children, className }) {
  return <div className={cn("about-story-beat", className)}>{children}</div>;
}

/** Dictionary block placed right after the term appears in prose above. */
export function AboutDictionaryEntry({
  word,
  pron,
  pos,
  ety,
  quote,
  defs,
  media,
  className,
}) {
  return (
    <div
      className={cn(
        "about-dict-beat my-5 grid gap-5",
        media && "lg:grid-cols-[minmax(0,1fr)_minmax(160px,240px)] lg:items-start",
        className,
      )}
    >
      <article
        className="dictionary-entry about-story-dict m-0"
        aria-label={`Definition of ${word}`}
      >
        <div className="dictionary-headword">
          <span className="dictionary-word">{word}</span>
          {pron ? <span className="dictionary-pron">{pron}</span> : null}
          <span className="dictionary-pos">{pos}</span>
        </div>
        {ety ? <p className="dictionary-ety">{ety}</p> : null}
        {quote ? (
          <blockquote className="about-story-quote m-0 mb-4 border-l-2 border-black/20 pl-4 italic text-[#1f1c18]/90">
            {quote}
          </blockquote>
        ) : null}
        <ol className="dictionary-definitions">
          {defs.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ol>
      </article>
      {media ? (
        <img
          src={media.src}
          alt={media.alt}
          className="h-44 w-full shrink-0 rounded-xl border border-black/10 object-cover shadow-[0_10px_28px_rgba(40,30,20,0.18)] lg:h-auto lg:max-h-[220px]"
        />
      ) : null}
    </div>
  );
}

/** Pull quote / belief line. */
export function AboutPullQuote({ children, attribution, className }) {
  return (
    <blockquote
      className={cn(
        "about-story-quote my-6 border-l-2 border-black/25 pl-4 italic text-[#1f1c18]/90",
        className,
      )}
    >
      {children}
      {attribution ? (
        <footer className="mt-2 text-[0.85rem] not-italic text-[#1f1c18]/55">{attribution}</footer>
      ) : null}
    </blockquote>
  );
}

/**
 * Org / role highlight card (logo + title + optional tags + blurb).
 * Matches “Polititeen / Noodle / Warp” style blocks from reference portfolios.
 */
export function AboutHighlight({
  name,
  logo,
  logoAlt,
  logoFallback,
  tags = [],
  children,
  href,
  className,
}) {
  const inner = (
    <>
      <div className="flex shrink-0 items-start gap-3">
        {logo ? (
          <img
            src={logo}
            alt={logoAlt ?? ""}
            className="h-11 w-11 shrink-0 rounded-lg border border-black/12 bg-white object-contain p-1"
          />
        ) : (
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-black/12 bg-black/[0.05] text-sm font-bold text-[#14110e]"
            aria-hidden
          >
            {logoFallback ?? name?.[0] ?? "?"}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="m-0 text-[1.02rem] font-semibold leading-snug text-[#14110e]">{name}</p>
          {tags.length > 0 ? (
            <p className="about-highlight-tags m-0 mt-1.5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-black/12 bg-black/[0.04] px-2 py-0.5 text-[11px] font-medium tracking-wide text-[#1f1c18]/75"
                >
                  {tag}
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
      {children ? (
        <p className="about-highlight-body m-0 mt-3 text-[0.94rem] leading-relaxed text-[#1f1c18]/80">
          {children}
        </p>
      ) : null}
    </>
  );

  const cardClass = cn(
    "about-highlight my-5 rounded-[3px] border border-black/12 bg-[rgba(255,255,255,0.5)] p-4 shadow-[0_8px_22px_rgba(40,30,20,0.1)]",
    href && "transition-colors hover:border-black/20 hover:bg-[rgba(255,255,255,0.72)]",
    className,
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cn(cardClass, "block no-underline")}>
        {inner}
      </a>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}
