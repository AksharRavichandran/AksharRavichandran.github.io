import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";

const TABS = [{ id: "all", label: "Everything" }, ...projectCategories];

const CATEGORY_LABELS = Object.fromEntries(
  projectCategories.map((c) => [c.id, c.label])
);

function GalleryCard({ project }) {
  const metaLabel = project.dates ?? project.status ?? null;

  return (
    <article className="work-gallery__card">
      <p className="work-gallery__card-meta">
        {CATEGORY_LABELS[project.category] ?? "Project"}
        {metaLabel ? <span className="work-gallery__card-dates"> · {metaLabel}</span> : null}
      </p>
      <h3 className="work-gallery__card-title">{project.title}</h3>
      <p className="work-gallery__card-blurb">{project.blurb}</p>
      <div className="work-gallery__card-foot">
        {project.tags?.length > 0 ? (
          <p className="work-gallery__card-tags">{project.tags.join(" / ")}</p>
        ) : null}
        {project.links?.length > 0 ? (
          <p className="work-gallery__card-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="work-gallery__card-link"
              >
                {link.label} ↗
              </a>
            ))}
          </p>
        ) : null}
      </div>
    </article>
  );
}

/**
 * The shelf — compact gallery below the narrative, with tabs to flip
 * between areas.
 */
export default function WorkGallery() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="work-gallery" aria-label="Project gallery">
      <header className="work-gallery__header">
        <p className="work-gallery__eyebrow">THE SHELF</p>
        <p className="work-gallery__note">
          Everything else, kept like clippings — the links go straight to the source.
        </p>
      </header>

      <div className="work-gallery__tabs" role="tablist" aria-label="Project areas">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`work-gallery__tab${active === tab.id ? " is-active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          className="work-gallery__grid"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {visible.map((project) => (
            <GalleryCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
