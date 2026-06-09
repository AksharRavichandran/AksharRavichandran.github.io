import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectDetails from "@/components/work/ProjectDetails";
import ProjectArtifact from "@/components/work/ProjectArtifact";

function ChevronRight({ className, open }) {
  return (
    <svg
      className={`${className}${open ? " is-open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function formatTechnologies(project) {
  const list = project.technologies ?? project.tags ?? [];
  return list.length ? list.join(" / ") : null;
}

const motionProps = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 4 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

/**
 * One collapsible project row in the work notebook index.
 */
export default function ProjectRecord({ project, index, isOpen, onToggle }) {
  const number = String(index + 1).padStart(2, "0");
  const detailsId = `project-details-${project.id}`;
  const thesis = project.thesis ?? project.desc;
  const techLine = formatTechnologies(project);
  const metaLabel = project.dates ?? project.status ?? null;
  const hasArtifactPreview = Boolean(project.artifact?.src || project.artifact?.type);

  return (
    <article className={`project-record${isOpen ? " project-record--open" : ""}`}>
      <button
        type="button"
        className="project-record__trigger"
        aria-expanded={isOpen}
        aria-controls={detailsId}
        onClick={() => onToggle(project.id)}
      >
        <span className="project-record__number">{number}</span>

        {hasArtifactPreview ? (
          <span className="project-record__artifact-col">
            <ProjectArtifact
              artifact={project.artifact}
              id={project.id}
              index={index}
              compact
            />
          </span>
        ) : (
          <span
            className="project-record__artifact-col project-record__artifact-col--empty"
            aria-hidden
          />
        )}

        <div className="project-record__main">
          <h3 className="project-record__title">{project.title}</h3>
          <p className="project-record__thesis">{thesis}</p>
          {techLine ? <p className="project-record__tech">{techLine}</p> : null}
        </div>

        <div className="project-record__meta">
          {metaLabel ? (
            <span className="project-record__status">{metaLabel}</span>
          ) : null}
          <span className="project-record__label">
            {isOpen ? "Close" : "Open"}
            <ChevronRight className="project-record__chevron" open={isOpen} />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="panel"
            className="project-record__panel"
            {...motionProps}
          >
            <ProjectDetails project={project} detailsId={detailsId} index={index} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
