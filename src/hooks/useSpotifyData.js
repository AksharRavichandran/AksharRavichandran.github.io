import { useEffect, useState } from "react";
import spotifySnapshot from "@/data/spotify.json";

export const SPOTIFY_API_URL =
  import.meta.env.VITE_SPOTIFY_API_URL ||
  "https://strava-proxy-two.vercel.app/api/spotify";

export const SPOTIFY_POLL_MS = 60_000;

function snapshotTrack() {
  if (spotifySnapshot.track) return spotifySnapshot.track;
  return spotifySnapshot.tracks?.[0] ?? null;
}

/**
 * @returns {{
 *   track: object | null,
 *   playedAt: string | null,
 *   isPlaying: boolean,
 *   lastUpdated: string | null,
 *   status: 'loading' | 'ready' | 'error'
 * }}
 */
export function useSpotifyData() {
  const [track, setTrack] = useState(snapshotTrack());
  const [playedAt, setPlayedAt] = useState(spotifySnapshot.playedAt || null);
  const [isPlaying, setIsPlaying] = useState(
    Boolean(spotifySnapshot.isPlaying)
  );
  const [lastUpdated, setLastUpdated] = useState(
    spotifySnapshot.lastUpdated || null
  );
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const resp = await fetch(SPOTIFY_API_URL);
        if (!resp.ok) throw new Error("Failed to load Spotify data.");
        const json = await resp.json();
        if (!isMounted) return;

        const nextTrack = json.track ?? json.tracks?.[0] ?? null;
        setTrack(nextTrack);
        setPlayedAt(json.playedAt ?? null);
        setIsPlaying(Boolean(json.isPlaying));
        setLastUpdated(json.lastUpdated ?? null);
        setStatus("ready");
      } catch {
        if (!isMounted) return;
        setStatus(snapshotTrack() ? "ready" : "error");
      }
    };

    load();
    const interval = setInterval(load, SPOTIFY_POLL_MS);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { track, playedAt, isPlaying, lastUpdated, status };
}
