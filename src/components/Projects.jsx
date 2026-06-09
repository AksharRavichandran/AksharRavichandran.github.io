import React from "react";
import ProjectIndex from "@/components/work/ProjectIndex";

export default function Projects({ embedded = false }) {
  const index = <ProjectIndex />;

  if (embedded) {
    return (
      <div id="projects" className="work-tab-panel w-full min-w-0">
        {index}
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="section !pt-12 md:!pt-14"
      aria-labelledby="work-projects-heading"
    >
      <div className="mx-auto w-full max-w-3xl px-2">{index}</div>
    </section>
  );
}
