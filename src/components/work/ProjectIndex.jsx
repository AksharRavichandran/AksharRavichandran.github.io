import React, { useState } from "react";
import { projects } from "@/data/projects";
import { projectsIntro } from "@/data/projectsIntro";
import ProjectRecord from "@/components/work/ProjectRecord";

/**
 * Vertically stacked project notebook index — one record open at a time.
 */
export default function ProjectIndex() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="project-index">
      <header className="project-index__intro">
        <p className="project-index__eyebrow">{projectsIntro.eyebrow}</p>
        <h2 className="project-index__title">{projectsIntro.title}</h2>
        <p className="project-index__body">{projectsIntro.body}</p>
      </header>

      <div className="project-index__list">
        {projects.map((project, i) => (
          <ProjectRecord
            key={project.id}
            project={project}
            index={i}
            isOpen={openId === project.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
