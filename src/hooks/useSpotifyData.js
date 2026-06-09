import { useEffect, useState } from "react";
import spotifySnapshot from "@/data/spotify.json";

export const SPOTIFY_API_URL =
  import.meta.env.VITE_SPOTIFY_API_URL || "/api/spotify";

/**
 * @returns {{
 *   tracks: object[],
 *   artists: object[],
 *   lastUpdated: string | null,
 *   status: 'loading' | 'ready' | 'error'
 * }}
 */
export function useSpotifyData() {
  const [tracks, setTracks] = useState(spotifySnapshot.tracks || []);
  const [artists, setArtists] = useState(spotifySnapshot.artists || []);
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
        setTracks(json.tracks || []);
        setArtists(json.artists || []);
        setLastUpdated(json.lastUpdated || null);
        setStatus("ready");
      } catch {
        if (!isMounted) return;
        const hasSnapshot =
          (spotifySnapshot.tracks?.length ?? 0) > 0 ||
          (spotifySnapshot.artists?.length ?? 0) > 0;
        setStatus(hasSnapshot ? "ready" : "error");
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return { tracks, artists, lastUpdated, status };
}
