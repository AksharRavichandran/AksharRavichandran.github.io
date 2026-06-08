import React, { useCallback, useState } from "react";
import { experience } from "@/data/experience";
import { workIntro } from "@/data/workIntro";
import ExperienceRecord from "@/components/work/ExperienceRecord";

/**
 * Vertically stacked editorial work index — one record open at a time.
 */
export default function ExperienceIndex() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="experience-index">
      <header className="experience-index__intro">
        <p className="experience-index__eyebrow">{workIntro.eyebrow}</p>
        <h2 className="experience-index__title">{workIntro.title}</h2>
        <p className="experience-index__body">{workIntro.body}</p>
      </header>

      <div className="experience-index__list" role="list">
        {experience.map((record, i) => (
          <ExperienceRecord
            key={record.id}
            record={record}
            index={i}
            isOpen={openId === record.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
