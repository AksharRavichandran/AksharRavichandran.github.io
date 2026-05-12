import React, { useMemo } from "react";
import JobListingExperience from "@/components/ui/job-listing-experience";
import { experience } from "../data/experience";

function buildJobs() {
  return experience.map((item) => ({
    id: item.id,
    company: item.company,
    title: item.role,
    logo: item.logo ? (
      <img
        className="h-[52px] w-[52px] shrink-0 rounded-[10px] border border-white/15 bg-white object-contain p-1.5 shadow-[inset_0_0_12px_rgba(255,255,255,0.06)]"
        src={item.logo}
        alt=""
      />
    ) : (
      <div
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-[rgba(24,26,32,0.9)] text-lg font-semibold text-[#e8e6e1]"
        aria-hidden
      >
        {item.company?.[0] ?? "?"}
      </div>
    ),
    highlights: item.highlights,
    period: item.period,
    location: item.location,
    remote: item.remote,
    job_time: item.jobType,
    github: item.github,
  }));
}

export default function Experience() {
  const jobs = useMemo(() => buildJobs(), []);

  return (
    <section
      id="experience"
      className="section !pt-12 md:!pt-14"
      aria-labelledby="work-experience-heading"
    >
      <div className="mx-auto w-full max-w-2xl px-2">
        <header className="section-header">
          <h2 id="work-experience-heading">Experience</h2>
          <span className="section-underline" aria-hidden />
        </header>
        <p className="muted mb-8 text-sm leading-relaxed md:text-[0.9375rem]">
        </p>
        <JobListingExperience jobs={jobs} className="!max-w-none px-0" />
      </div>
    </section>
  );
}
