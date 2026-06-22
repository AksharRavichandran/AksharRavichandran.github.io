/**
 * Refresh spotify.json using the saved refresh token (no browser auth).
 *
 * Usage: node scripts/refresh-spotify-data.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadEnvFile() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return {};
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  return lines.reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return acc;
    const [key, ...rest] = trimmed.split("=");
    const rawValue = rest.join("=").trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");
    acc[key.trim()] = value;
    return acc;
  }, {});
}

const envFile = loadEnvFile();
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || envFile.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET || envFile.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN =
  process.env.SPOTIFY_REFRESH_TOKEN || envFile.SPOTIFY_REFRESH_TOKEN;

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  throw new Error(
    "Missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, or SPOTIFY_REFRESH_TOKEN in .env"
  );
}

async function refreshAccessToken() {
  const creds = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const resp = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${creds}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  if (!resp.ok) {
    throw new Error(`Token refresh failed: ${await resp.text()}`);
  }

  const data = await resp.json();
  if (data.refresh_token) {
    const envPath = path.join(__dirname, "..", ".env");
    let content = fs.readFileSync(envPath, "utf8");
    const line = `SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`;
    content = /^SPOTIFY_REFRESH_TOKEN=.*$/m.test(content)
      ? content.replace(/^SPOTIFY_REFRESH_TOKEN=.*$/m, line)
      : `${content.trimEnd()}\n${line}\n`;
    fs.writeFileSync(envPath, content);
  }

  return data.access_token;
}

async function fetchLastPlayed(accessToken) {
  const currentlyResp = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  if (currentlyResp.status === 200) {
    const data = await currentlyResp.json();
    if (data?.item?.type === "track") {
      return {
        track: data.item,
        playedAt: new Date().toISOString(),
        isPlaying: Boolean(data.is_playing),
      };
    }
  }

  const recentResp = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  if (!recentResp.ok) {
    throw new Error(`Recently played fetch failed: ${await recentResp.text()}`);
  }

  const recentData = await recentResp.json();
  const item = recentData.items?.[0];

  if (!item?.track) {
    return { track: null, playedAt: null, isPlaying: false };
  }

  return {
    track: item.track,
    playedAt: item.played_at,
    isPlaying: false,
  };
}

const accessToken = await refreshAccessToken();
const { track, playedAt, isPlaying } = await fetchLastPlayed(accessToken);

const output = {
  track,
  playedAt,
  isPlaying,
  tracks: track ? [track] : [],
  lastUpdated: new Date().toISOString(),
};

const outputPath = path.join(__dirname, "../src/data/spotify.json");
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

if (track) {
  console.log(`Saved last played: ${track.name}`);
  console.log(isPlaying ? "Now playing" : playedAt);
} else {
  console.log("No recent listening history found.");
}

console.log(`Updated ${outputPath}`);
