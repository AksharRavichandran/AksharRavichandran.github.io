import React from "react";
import { useStravaData } from "@/hooks/useStravaData";

function formatDisplayDate(value, iso) {
  if (iso) {
    const parsed = new Date(iso);
    if (!Number.isNaN(parsed.getTime())) {
      return {
        label: parsed.toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        dateTime: iso,
      };
    }
  }
  if (value && value !== "—") {
    return { label: value, dateTime: undefined };
  }
  return null;
}

function buildSecondary(data) {
  const parts = [];
  if (data.lastRunName) parts.push(data.lastRunName);
  else if (data.lastRunLocation) parts.push(data.lastRunLocation);
  if (data.lastRunPace && data.lastRunPace !== "—") parts.push(data.lastRunPace);
  return parts.join(" · ");
}

export default function AboutRunRecord() {
  const { data, status } = useStravaData();
  const hasRun = data?.lastRunDistance && data.lastRunDistance !== "—";
  const date = formatDisplayDate(data?.lastRunDate, data?.lastRunDateIso);
  const secondary = data ? buildSecondary(data) : "";

  if (status === "loading") {
    return (
      <article className="about-current-record about-current-record--loading">
        <p className="about-current-record__status">Updating running log...</p>
      </article>
    );
  }

  if (status === "error" || !hasRun) {
    return (
      <article className="about-current-record about-current-record--empty">
        <p className="about-current-record__status">Run data is currently unavailable.</p>
      </article>
    );
  }

  return (
    <article className="about-current-record">
      <header className="about-current-record__header">
        <p className="about-current-record__label">Running log</p>
        {date ? (
          <time className="about-current-record__date" dateTime={date.dateTime}>
            {date.label}
          </time>
        ) : null}
      </header>

      <p className="about-current-record__primary">{data.lastRunDistance}</p>
      {secondary ? (
        <p className="about-current-record__secondary">{secondary}</p>
      ) : null}

      {data.lastRunUrl ? (
        <a
          className="about-current-record__link"
          href={data.lastRunUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View activity ↗
        </a>
      ) : null}
    </article>
  );
}
