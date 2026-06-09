import React from "react";
import { experienceSectionLabels } from "@/data/experience";
import MetricNote from "@/components/work/MetricNote";
import SystemFlow from "@/components/work/SystemFlow";

const NARRATIVE_KEYS = [
  "context",
  "problem",
  "ownership",
  "system",
  "outcome",
  "reflection",
];

function NarrativeSection({ labelKey, text }) {
  if (!text) return null;
  return (
    <section className="experience-record__section">
      <h4 className="experience-record__section-label">
        {experienceSectionLabels[labelKey]}
      </h4>
      <p className="experience-record__section-body">{text}</p>
    </section>
  );
}

function GitHubGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.37 1.12 2.95.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .85-.28 2.8 1.05.81-.23 1.67-.35 2.53-.35s1.72.12 2.53.35c1.95-1.33 2.8-1.05 2.8-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.56 5.09.36.32.67.95.67 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

/**
 * Notebook case-study prose for one experience record.
 * @param {{ record: object, detailsId?: string }} props
 */
export default function ExperienceDetails({ record, detailsId }) {
  const metrics = record.metrics?.slice(0, 3) ?? [];
  const links =
    record.links?.length > 0
      ? record.links
      : record.github
        ? [{ label: "View repository", href: record.github }]
        : [];

  const hasSidebar =
    metrics.length > 0 ||
    record.flow?.length > 0 ||
    record.technologies?.length > 0 ||
    record.artifact;

  return (
    <div
      {...(detailsId ? { id: detailsId } : {})}
      className="experience-record__details"
    >
      <div className="experience-record__details-grid">
        <div className="experience-record__narrative">
          {NARRATIVE_KEYS.map((key) => (
            <NarrativeSection key={key} labelKey={key} text={record[key]} />
          ))}
        </div>

        {hasSidebar ? (
          <aside className="experience-record__sidebar">
            {record.flow?.length > 0 ? (
              <div className="experience-record__sidebar-block">
                <h4 className="experience-record__section-label">Flow</h4>
                <SystemFlow steps={record.flow} />
              </div>
            ) : null}

            {metrics.length > 0 ? (
              <div className="experience-record__sidebar-block">
                <h4 className="experience-record__section-label">Notes</h4>
                <div className="experience-record__metrics">
                  {metrics.map((m) => (
                    <MetricNote key={m.label} value={m.value} label={m.label} />
                  ))}
                </div>
              </div>
            ) : null}

            {record.technologies?.length > 0 ? (
              <div className="experience-record__sidebar-block">
                <h4 className="experience-record__section-label">Technologies</h4>
                <ul className="experience-record__tech-list">
                  {record.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {record.artifact ? (
              <figure
                className="experience-record__artifact"
                style={{ "--artifact-rotate": `${record.artifact.rotate ?? 0.5}deg` }}
              >
                <img
                  src={record.artifact.src}
                  alt={record.artifact.alt ?? ""}
                  loading="lazy"
                  decoding="async"
                />
                {record.artifact.caption ? (
                  <figcaption>{record.artifact.caption}</figcaption>
                ) : null}
              </figure>
            ) : null}
          </aside>
        ) : null}
      </div>

      {links.length > 0 ? (
        <div className="experience-record__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-record__link"
            >
              <GitHubGlyph className="experience-record__link-icon" />
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
