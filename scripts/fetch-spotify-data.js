/**
 * Script to fetch your Spotify top tracks and artists
 * 
 * Usage:
 * 1. Get your Spotify access token from: https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/
 * 2. Run: node scripts/fetch-spotify-data.js YOUR_ACCESS_TOKEN
 * 
 * Or set SPOTIFY_ACCESS_TOKEN environment variable:
 * SPOTIFY_ACCESS_TOKEN=your_token node scripts/fetch-spotify-data.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const accessToken = process.env.SPOTIFY_ACCESS_TOKEN || process.argv[2];

if (!accessToken) {
  console.error('Error: Spotify access token required');
  console.log('\nUsage:');
  console.log('  node scripts/fetch-spotify-data.js YOUR_ACCESS_TOKEN');
  console.log('  or');
  console.log('  SPOTIFY_ACCESS_TOKEN=your_token node scripts/fetch-spotify-data.js');
  console.log('\nGet your token from: https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/');
  process.exit(1);
}

async function fetchTop(endpoint) {
  const response = await fetch(
    `https://api.spotify.com/v1/me/top/${endpoint}?limit=10&time_range=short_term`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }

  return response.json();
}

async function main() {
  try {
    console.log('Fetching top tracks and artists from Spotify...');
    
    const [tracksData, artistsData] = await Promise.all([
      fetchTop('tracks'),
      fetchTop('artists'),
    ]);

    const data = {
      tracks: tracksData.items || [],
      artists: artistsData.items || [],
      lastUpdated: new Date().toISOString().split('T')[0],
    };

    const outputPath = path.join(__dirname, '../src/data/spotify.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log(`✅ Successfully saved ${data.tracks.length} tracks and ${data.artists.length} artists to ${outputPath}`);
    console.log(`📅 Last updated: ${data.lastUpdated}`);
  } catch (error) {
    console.error('❌ Error fetching Spotify data:', error.message);
    process.exit(1);
  }
}

main();
