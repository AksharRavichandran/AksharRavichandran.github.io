import React from "react";
import { useSpotifyData } from "@/hooks/useSpotifyData";

function formatUpdatedDate(lastUpdated) {
  if (!lastUpdated) return null;
  const parsed = new Date(lastUpdated);
  if (Number.isNaN(parsed.getTime())) {
    return { label: lastUpdated, dateTime: undefined };
  }
  return {
    label: parsed.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    dateTime: parsed.toISOString().slice(0, 10),
  };
}

export default function AboutMusicRecord() {
  const { tracks, lastUpdated, status } = useSpotifyData();
  const track = tracks[0];
  const artistNames = track?.artists?.map((artist) => artist.name).join(", ");
  const updated = formatUpdatedDate(lastUpdated);

  if (status === "loading") {
    return (
      <article className="about-current-record about-current-record--loading">
        <p className="about-current-record__status">Updating listening note...</p>
      </article>
    );
  }

  if (!track) {
    return (
      <article className="about-current-record about-current-record--empty">
        <p className="about-current-record__status">
          Listening data is currently unavailable.
        </p>
      </article>
    );
  }

  return (
    <article className="about-current-record">
      <header className="about-current-record__header">
        <p className="about-current-record__label">Listening note</p>
        <time
          className="about-current-record__date"
          dateTime={updated?.dateTime}
        >
          {updated?.label ?? "Recently played"}
        </time>
      </header>

      <p className="about-current-record__primary">{track.name}</p>
      {artistNames ? (
        <p className="about-current-record__secondary">{artistNames}</p>
      ) : null}

      {track.external_urls?.spotify ? (
        <a
          className="about-current-record__link"
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Spotify ↗
        </a>
      ) : null}
    </article>
  );
}
