import React from "react";
import { projectSectionLabels } from "@/data/projects";
import MetricNote from "@/components/work/MetricNote";
import ProjectArtifact from "@/components/work/ProjectArtifact";

const NARRATIVE_KEYS = ["idea", "problem", "built", "system", "outcome"];

function formatTechnologies(project) {
  const list = project.technologies ?? project.tags ?? [];
  return list.length ? list.join(" / ") : null;
}

function NarrativeSection({ labelKey, text }) {
  if (!text) return null;
  return (
    <section className="project-record__section">
      <h4 className="project-record__section-label">{projectSectionLabels[labelKey]}</h4>
      <p className="project-record__section-body">{text}</p>
    </section>
  );
}

function projectLinks(project) {
  const links = [];
  if (project.github) links.push({ label: "GitHub", href: project.github });
  if (project.doc) links.push({ label: "Paper", href: project.doc });
  if (project.youtube) links.push({ label: "Video", href: project.youtube });
  if (project.demo) links.push({ label: "Demo", href: project.demo });
  return links;
}

function resolveNarrative(project, key) {
  if (project[key]) return project[key];
  if (key === "idea") {
    if (project.thesis) return project.thesis;
    const hasRich =
      project.problem || project.built || project.system || project.outcome;
    if (!hasRich) return project.desc;
  }
  return null;
}

/**
 * Expanded notebook details for one project record.
 * @param {{ project: object, detailsId: string, index?: number }} props
 */
export default function ProjectDetails({ project, detailsId, index = 0 }) {
  const techLine = formatTechnologies(project);
  const links = projectLinks(project);
  const metrics = project.metrics?.slice(0, 3) ?? [];
  const hasSidebar =
    metrics.length > 0 || project.artifact?.src || project.artifact?.type;

  return (
    <div id={detailsId} className="project-record__details">
      <div className="project-record__details-grid">
        <div className="project-record__narrative">
          {NARRATIVE_KEYS.map((key) => (
            <NarrativeSection
              key={key}
              labelKey={key}
              text={resolveNarrative(project, key)}
            />
          ))}
          {techLine ? (
            <section className="project-record__section">
              <h4 className="project-record__section-label">
                {projectSectionLabels.stack}
              </h4>
              <p className="project-record__tech-line">{techLine}</p>
            </section>
          ) : null}
        </div>

        {hasSidebar ? (
          <aside className="project-record__sidebar">
            {metrics.length > 0 ? (
              <div className="project-record__sidebar-block">
                <h4 className="project-record__section-label">Notes</h4>
                <div className="project-record__metrics">
                  {metrics.map((m) => (
                    <MetricNote key={m.label} value={m.value} label={m.label} />
                  ))}
                </div>
              </div>
            ) : null}

            {project.artifact ? (
              <ProjectArtifact
                artifact={project.artifact}
                id={project.id}
                index={index}
              />
            ) : null}
          </aside>
        ) : null}
      </div>

      {links.length > 0 ? (
        <div className="project-record__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-record__link"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
