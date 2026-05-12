import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";

function GitHubGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.37 1.12 2.95.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .85-.28 2.8 1.05.81-.23 1.67-.35 2.53-.35s1.72.12 2.53.35c1.95-1.33 2.8-1.05 2.8-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.56 5.09.36.32.67.95.67 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function DocGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7h5.5L15 3.5V9zM8 13h8v2H8v-2zm0 4h8v2H8v-2zm0-8h5v2H8V9z" />
    </svg>
  );
}

function YouTubeGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3.04 3.04 0 0 0-2.14-2.15C19.8 3.5 12 3.5 12 3.5s-7.8 0-9.36.55A3.04 3.04 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12c0 1.98.2 3.94.5 5.8.28 1.05 1.1 1.88 2.14 2.16C4.2 20.5 12 20.5 12 20.5s7.8 0 9.36-.55a3.04 3.04 0 0 0 2.14-2.15c.3-1.85.5-3.82.5-5.8 0-1.98-.2-3.94-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function linkButtonClass() {
  return "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.08] px-3 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-white/38 hover:bg-white/[0.14] hover:text-white";
}

/** Expandable project rows (job-listing style) with calmer contrast for titles and body. */
export default function JobListingProjects({ jobs, className, onProjectClick }) {
  const [activeItem, setActiveItem] = useState(null);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setActiveItem(null));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActiveItem(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            key="proj-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto fixed inset-0 z-[100] bg-black/60 backdrop-blur-lg"
            onClick={() => setActiveItem(null)}
            aria-hidden
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeItem ? (
          <div
            key="proj-modal-layer"
            className="pointer-events-none fixed inset-0 z-[101] grid place-items-center p-4"
          >
            <motion.div
              ref={modalRef}
              layoutId={`proj-item-${activeItem.id}`}
              className="pointer-events-auto flex max-h-[min(680px,88vh)] w-[min(560px,94vw)] cursor-default flex-col gap-5 overflow-y-auto rounded-2xl border border-white/[0.16] bg-[rgba(34,36,46,0.97)] p-6 shadow-2xl backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985, transition: { duration: 0.14 } }}
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
            >
              <div className="flex w-full min-w-0 flex-col gap-1">
                <h3 className="m-0 text-[1.15rem] font-semibold leading-snug tracking-tight text-[#fafaf8] md:text-[1.25rem]">
                  <motion.span layoutId={`proj-title-${activeItem.id}`} className="block">
                    {activeItem.title}
                  </motion.span>
                </h3>
                <p className="text-[0.8125rem] leading-snug text-zinc-300">
                  {activeItem.tagsLine}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.06 } }}
                transition={{ delay: 0.04, duration: 0.25 }}
                className="text-[0.9375rem] leading-[1.68] text-zinc-100"
              >
                {activeItem.desc}
              </motion.div>

              <div className="flex flex-wrap gap-2">
                {activeItem.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-1 text-[12px] font-medium tracking-wide text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(activeItem.github || activeItem.doc || activeItem.youtube) && (
                <div className="flex flex-wrap gap-2 border-t border-white/15 pt-4">
                  {activeItem.github && (
                    <a
                      className={linkButtonClass()}
                      href={activeItem.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubGlyph className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {activeItem.doc && (
                    <a
                      className={linkButtonClass()}
                      href={activeItem.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DocGlyph className="h-4 w-4" />
                      Paper / PDF
                    </a>
                  )}
                  {activeItem.youtube && (
                    <a
                      className={linkButtonClass()}
                      href={activeItem.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeGlyph className="h-4 w-4" />
                      Link
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className={cn("relative mx-auto flex w-full max-w-2xl items-start px-2 py-2", className)}>
        <ul className="relative m-0 flex w-full list-none flex-col gap-2 p-0">
          {jobs.map((role) => (
            <li key={role.id} className="w-full">
              <motion.button
                type="button"
                layoutId={`proj-item-${role.id}`}
                aria-label={`Open project details: ${role.title}`}
                aria-expanded={activeItem?.id === role.id}
                className="group flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/[0.14] bg-[rgba(34,36,46,0.88)] px-4 py-3.5 text-left shadow-lg shadow-black/30 backdrop-blur-md transition-[border-color,background-color] duration-200 hover:border-white/30 hover:bg-[rgba(44,46,58,0.92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(5,5,5,0.5)] md:px-5 md:py-4"
                onClick={() => {
                  setActiveItem(role);
                  onProjectClick?.(role);
                }}
              >
                <motion.span
                  layoutId={`proj-title-${role.id}`}
                  className="min-w-0 flex-1 text-[0.98rem] font-semibold leading-snug tracking-tight text-[#fafaf8] md:text-[1.06rem]"
                >
                  {role.title}
                </motion.span>
                <ChevronRight className="h-5 w-5 shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-200" />
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
