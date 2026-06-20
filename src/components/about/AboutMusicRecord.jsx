import React from "react";
import { useSpotifyData } from "@/hooks/useSpotifyData";

function formatPlayedAt(playedAt, isPlaying) {
  if (isPlaying) return { label: "Now playing", dateTime: undefined };

  if (!playedAt) return null;

  const parsed = new Date(playedAt);
  if (Number.isNaN(parsed.getTime())) {
    return { label: playedAt, dateTime: undefined };
  }

  const now = Date.now();
  const diffMs = now - parsed.getTime();
  const diffMins = Math.floor(diffMs / 60_000);

  if (diffMins < 1) return { label: "Just now", dateTime: parsed.toISOString() };
  if (diffMins < 60) {
    return {
      label: `${diffMins} min ago`,
      dateTime: parsed.toISOString(),
    };
  }

  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) {
    return {
      label: `${diffHours} hr${diffHours === 1 ? "" : "s"} ago`,
      dateTime: parsed.toISOString(),
    };
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
  const { track, playedAt, isPlaying, status } = useSpotifyData();
  const artistNames = track?.artists?.map((artist) => artist.name).join(", ");
  const played = formatPlayedAt(playedAt, isPlaying);

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
        <p className="about-current-record__label">Last listened</p>
        {played ? (
          <time
            className="about-current-record__date"
            dateTime={played.dateTime}
          >
            {played.label}
          </time>
        ) : null}
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
