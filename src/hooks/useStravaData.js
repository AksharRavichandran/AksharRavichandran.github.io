import { useEffect, useState } from "react";

export const STRAVA_API_URL = "https://strava-proxy-two.vercel.app/api/strava";

/**
 * @returns {{ data: object | null, status: 'loading' | 'ready' | 'error' }}
 */
export function useStravaData() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const resp = await fetch(STRAVA_API_URL);
        if (!resp.ok) throw new Error("Failed to load Strava stats.");
        const json = await resp.json();
        if (!isMounted) return;
        setData(json);
        setStatus("ready");
      } catch {
        if (!isMounted) return;
        setStatus("error");
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, status };
}
