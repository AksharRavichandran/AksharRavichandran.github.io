import React from "react";
import ExperienceIndex from "@/components/work/ExperienceIndex";

export default function Experience({ embedded = false }) {
  const index = <ExperienceIndex />;

  if (embedded) {
    return (
      <div id="experience" className="work-tab-panel w-full min-w-0">
        {index}
      </div>
    );
  }

  return (
    <section
      id="experience"
      className="section !pt-12 md:!pt-14"
      aria-labelledby="work-experience-heading"
    >
      <div className="mx-auto w-full max-w-3xl px-2">{index}</div>
    </section>
  );
}
