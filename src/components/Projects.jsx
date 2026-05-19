import React, { useMemo } from "react";
import JobListingProjects from "@/components/ui/job-listing-projects";
import { projects } from "../data/projects";

function tagSummary(tags) {
  if (!tags?.length) return "Project";
  const head = tags.slice(0, 3).join(" · ");
  const rest = tags.length > 3 ? ` · +${tags.length - 3}` : "";
  return `${head}${rest}`;
}

function buildJobs() {
  return projects.map((p) => ({
    id: p.id,
    title: p.title,
    desc: p.desc,
    tags: p.tags,
    tagsLine: tagSummary(p.tags),
    github: p.github,
    doc: p.doc,
    youtube: p.youtube,
  }));
}

export default function Projects({ embedded = false }) {
  const jobs = useMemo(() => buildJobs(), []);

  const list = <JobListingProjects jobs={jobs} className="!max-w-none px-0" />;

  if (embedded) {
    return (
      <div id="projects" className="work-tab-panel w-full min-w-0">
        {list}
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="section border-t border-white/[0.12] !pt-14 md:!pt-16"
      aria-labelledby="work-projects-heading"
    >
      <div className="mx-auto w-full max-w-2xl px-2">
        <header className="section-header">
          <h2 id="work-projects-heading">Projects</h2>
          <span className="section-underline" aria-hidden />
        </header>
        <p className="muted mb-8 text-sm leading-relaxed md:text-[0.9375rem]">
          Titles only — open a row for details and links.
        </p>
        {list}
      </div>
    </section>
  );
}
