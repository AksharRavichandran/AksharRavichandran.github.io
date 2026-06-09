import React from "react";
import ExperienceDetails from "@/components/work/ExperienceDetails";
import RecordPolaroid from "@/components/work/RecordPolaroid";

const POLAROID_ROTATES = [-4, 5, -3, 4];
const TAPE_ROTATES = [7, -6, 5, -5];

/**
 * One experience entry in the work journal — header + full narrative, always visible.
 */
export default function ExperienceRecord({ record, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="experience-record experience-record--flow">
      <header className="experience-record__header">
        <span className="experience-record__number">{number}</span>

        {record.logo ? (
          <span className="experience-record__polaroid-col">
            <RecordPolaroid
              src={record.logo}
              alt={`${record.organization} logo`}
              id={record.id}
              rotate={POLAROID_ROTATES[index % POLAROID_ROTATES.length]}
              tapeRotate={TAPE_ROTATES[index % TAPE_ROTATES.length]}
            />
          </span>
        ) : (
          <span className="experience-record__polaroid-col experience-record__polaroid-col--empty" aria-hidden />
        )}

        <div className="experience-record__main">
          <h3 className="experience-record__organization">{record.organization}</h3>
          <p className="experience-record__role">{record.role}</p>
          <p className="experience-record__location">{record.location}</p>
          <p className="experience-record__summary">{record.summary}</p>
        </div>

        <div className="experience-record__meta">
          <time className="experience-record__dates" dateTime={record.dates}>
            {record.dates}
          </time>
        </div>
      </header>

      <div className="experience-record__body">
        <ExperienceDetails record={record} />
      </div>
    </article>
  );
}
