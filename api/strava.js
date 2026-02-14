const STRAVA_TOKEN_URL = "https://www.strava.com/oauth/token";
const STRAVA_ACTIVITIES_URL = "https://www.strava.com/api/v3/athlete/activities";

function metersToMiles(meters) {
  return meters / 1609.344;
}

function formatMiles(miles) {
  return `${miles.toFixed(2)} mi`;
}

function formatPace(secondsPerMile) {
  if (!Number.isFinite(secondsPerMile) || secondsPerMile <= 0) return "—";
  const totalSeconds = Math.round(secondsPerMile);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")} /mi`;
}

function getDateDaysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    res.status(500).json({ error: "Missing Strava environment variables." });
    return;
  }

  try {
    const tokenResp = await fetch(STRAVA_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!tokenResp.ok) {
      const errorText = await tokenResp.text();
      res.status(500).json({ error: `Token refresh failed: ${errorText}` });
      return;
    }

    const tokenData = await tokenResp.json();
    const accessToken = tokenData.access_token;

    const activitiesResp = await fetch(
      `${STRAVA_ACTIVITIES_URL}?per_page=30&page=1`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (!activitiesResp.ok) {
      const errorText = await activitiesResp.text();
      res.status(500).json({ error: `Activities fetch failed: ${errorText}` });
      return;
    }

    const activities = await activitiesResp.json();
    const runs = activities.filter((a) => a.type === "Run");

    const lastRun = runs[0];
    let lastRunDistance = "—";
    let lastRunPace = "—";
    let lastRunDate = "—";
    let lastRunPolyline = null;

    if (lastRun) {
      const miles = metersToMiles(lastRun.distance);
      const paceSeconds = lastRun.moving_time / miles;
      lastRunDistance = formatMiles(miles);
      lastRunPace = formatPace(paceSeconds);
      lastRunDate = new Date(lastRun.start_date_local).toLocaleDateString();
      lastRunPolyline = lastRun.map?.summary_polyline || null;
    }

    const weekStart = getDateDaysAgo(7);
    const weekMiles = runs
      .filter((run) => new Date(run.start_date_local) >= weekStart)
      .reduce((sum, run) => sum + metersToMiles(run.distance), 0);
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    res.status(200).json({
      lastRunDistance,
      lastRunPace,
      lastRunDate,
      weekMiles: formatMiles(weekMiles),
      lastRunPolyline,
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Unknown error" });
  }
}
