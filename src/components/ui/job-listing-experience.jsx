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

function extrasLine(job) {
  const { remote, location, job_time } = job;
  let place = "";
  if (remote === "Hybrid") place = `${remote} / ${location}`;
  else if (remote === "Yes" || remote === "No") place = location;
  else place = location;
  return (
    <>
      {place} | {job_time}
    </>
  );
}

/** Expandable experience rows with shared-element layout (job-listing style). */
export default function JobListingExperience({ jobs, className, onJobClick }) {
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
            key="exp-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-0 z-[100] bg-black/60 backdrop-blur-lg"
            onClick={() => setActiveItem(null)}
            aria-hidden
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeItem ? (
          <div
            key="exp-modal-layer"
            className="pointer-events-none fixed inset-0 z-[101] grid place-items-center p-4"
          >
            <motion.div
              ref={modalRef}
              layoutId={`exp-item-${activeItem.id}`}
              className="pointer-events-auto flex max-h-[min(640px,85vh)] w-[min(520px,92vw)] cursor-default flex-col gap-4 overflow-y-auto rounded-2xl border border-black/12 bg-[rgba(248,245,238,0.98)] p-6 shadow-[0_24px_60px_rgba(40,30,20,0.28)] backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            >
              <div className="flex w-full items-start gap-4">
                <motion.div layoutId={`exp-logo-${activeItem.id}`} className="shrink-0">
                  {activeItem.logo}
                </motion.div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <motion.div
                    layoutId={`exp-company-${activeItem.id}`}
                    className="text-[1.02rem] font-semibold leading-snug tracking-tight text-[#14110e] md:text-[1.08rem]"
                  >
                    {activeItem.company}
                  </motion.div>
                  <motion.p
                    layoutId={`exp-title-${activeItem.id}`}
                    className="text-[0.875rem] leading-snug text-[#3f3a32]"
                  >
                    {activeItem.title} / {activeItem.period}
                  </motion.p>
                  <motion.div
                    layoutId={`exp-extras-${activeItem.id}`}
                    className="text-[0.75rem] font-medium tracking-wide text-[#6b6357]"
                  >
                    {extrasLine(activeItem)}
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.06 } }}
                transition={{ delay: 0.05 }}
                className="text-[0.9375rem] leading-[1.65] text-[#2a2620]"
              >
                <ul className="m-0 list-disc space-y-2.5 pl-5 marker:text-[#8a3d3d]">
                  {activeItem.highlights.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </motion.div>

              {activeItem.github ? (
                <div className="flex border-t border-black/12 pt-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-lg border border-black/15 bg-black/[0.04] px-3 py-2 text-sm font-medium text-[#2a2620] transition-colors hover:border-[#8a3d3d] hover:bg-black/[0.07] hover:text-[#8a3d3d]"
                    href={activeItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubGlyph className="h-4 w-4" />
                    View repository
                  </a>
                </div>
              ) : null}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className={cn("relative mx-auto flex w-full max-w-2xl items-start px-2 py-2", className)}>
        <div className="relative flex w-full flex-col items-stretch gap-3">
          {jobs.map((role) => (
            <motion.div
              role="button"
              tabIndex={0}
              key={role.id}
              layoutId={`exp-item-${role.id}`}
              className="group flex w-full cursor-pointer flex-row items-center gap-4 rounded-[3px] border border-black/12 bg-[rgba(255,255,255,0.5)] p-3.5 text-left shadow-[0_8px_22px_rgba(40,30,20,0.1)] transition-[border-color,background-color] duration-200 hover:border-[#8a3d3d]/40 hover:bg-[rgba(255,255,255,0.78)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a3d3d]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f2e7] md:gap-5 md:p-4"
              aria-label={`Open details: ${role.company}`}
              onClick={() => {
                setActiveItem(role);
                onJobClick?.(role);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveItem(role);
                  onJobClick?.(role);
                }
              }}
            >
              <motion.div layoutId={`exp-logo-${role.id}`} className="shrink-0">
                {role.logo}
              </motion.div>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5">
                <motion.span
                  layoutId={`exp-company-${role.id}`}
                  className="text-[0.98rem] font-semibold leading-snug tracking-tight text-[#14110e] md:text-[1.02rem]"
                >
                  {role.company}
                </motion.span>
                <motion.span
                  layoutId={`exp-title-${role.id}`}
                  className="text-[0.8125rem] leading-snug text-[#3f3a32]"
                >
                  {role.title} / {role.period}
                </motion.span>
                <motion.span
                  layoutId={`exp-extras-${role.id}`}
                  className="text-[0.75rem] font-medium tracking-wide text-[#6b6357]"
                >
                  {extrasLine(role)}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
