import React from "react";
import { experience } from "@/data/experience";
import { workIntro } from "@/data/workIntro";
import ExperienceRecord from "@/components/work/ExperienceRecord";

/**
 * Vertically stacked work journal — each entry flows on the page as written prose.
 */
export default function ExperienceIndex() {
  return (
    <div className="experience-index">
      <header className="experience-index__intro">
        <p className="experience-index__eyebrow">{workIntro.eyebrow}</p>
        <h2 className="experience-index__title">{workIntro.title}</h2>
        <p className="experience-index__body">{workIntro.body}</p>
      </header>

      <div className="experience-index__list">
        {experience.map((record, i) => (
          <ExperienceRecord key={record.id} record={record} index={i} />
        ))}
      </div>
    </div>
  );
}
