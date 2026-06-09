import React from "react";
import { useStravaData } from "@/hooks/useStravaData";

function RunIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.5 10 16.5 9 17.4 9H20V7h-2.6c-.9 0-1.7.4-2.3 1.1L13.5 9.5 11.3 7H6v2h2.3l1.5 4.4z" />
    </svg>
  );
}

/**
 * Compact latest-run line for the navbar — sits under the airport clocks.
 */
export default function NavLatestRun() {
  const { data, status } = useStravaData();

  if (status === "loading") {
    return (
      <p className="nav-latest-run nav-latest-run--loading" aria-hidden>
        <RunIcon className="nav-latest-run__icon" />
        …
      </p>
    );
  }

  if (status === "error" || !data?.lastRunDistance || data.lastRunDistance === "—") {
    return null;
  }

  const hasDate = data.lastRunDate && data.lastRunDate !== "—";
  const hasLocation = Boolean(data.lastRunLocation);

  return (
    <p
      className="nav-latest-run"
      aria-label={
        hasDate
          ? `Run on ${data.lastRunDate}${hasLocation ? ` in ${data.lastRunLocation}` : ""}: ${data.lastRunDistance} at ${data.lastRunPace}`
          : `Latest run: ${data.lastRunDistance} at ${data.lastRunPace}`
      }
    >
      <RunIcon className="nav-latest-run__icon" />
      {hasDate ? <span className="nav-latest-run__date">{data.lastRunDate}</span> : null}
      {hasLocation ? (
        <>
          <span className="nav-latest-run__sep" aria-hidden>
            ·
          </span>
          <span className="nav-latest-run__location">{data.lastRunLocation}</span>
        </>
      ) : null}
      <span className="nav-latest-run__sep" aria-hidden>
        ·
      </span>
      <span className="nav-latest-run__value">{data.lastRunDistance}</span>
      <span className="nav-latest-run__sep" aria-hidden>
        ·
      </span>
      <span className="nav-latest-run__value">{data.lastRunPace}</span>
    </p>
  );
}
