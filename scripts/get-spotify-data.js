/**
 * Complete Spotify data fetcher using Authorization Code flow
 * Uses your Client ID and Secret to get user-authorized token
 * 
 * Usage: node scripts/get-spotify-data.js
 */

import http from 'http';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadEnvFile() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return {};
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  return lines.reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) return acc;
    const [key, ...rest] = trimmed.split('=');
    const rawValue = rest.join('=').trim();
    const value = rawValue.replace(/^['"]|['"]$/g, '');
    acc[key.trim()] = value;
    return acc;
  }, {});
}

const envFile = loadEnvFile();
const CLIENT_ID =
  process.env.SPOTIFY_CLIENT_ID ||
  process.env.VITE_SPOTIFY_CLIENT_ID ||
  envFile.SPOTIFY_CLIENT_ID ||
  envFile.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET || envFile.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI =
  process.env.SPOTIFY_REDIRECT_URI ||
  process.env.VITE_SPOTIFY_REDIRECT_URI ||
  envFile.SPOTIFY_REDIRECT_URI ||
  envFile.VITE_SPOTIFY_REDIRECT_URI;
const PORT = 8080;
const SCOPES = 'user-top-read';

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
  throw new Error(
    'Missing Spotify env vars. Set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REDIRECT_URI in .env.'
  );
}

let server;
let codeVerifier;
let state;

function generateCodeVerifier() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let result = '';
  for (let i = 0; i < 128; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function sha256Base64Url(str) {
  const hash = crypto.createHash('sha256').update(str).digest('base64');
  return hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function startServer() {
  return new Promise((resolve) => {
    server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://127.0.0.1:${PORT}/`);
      
      // Handle both /callback and /callback/ (with trailing slash)
      if (url.pathname === '/callback' || url.pathname === '/callback/') {
        const code = url.searchParams.get('code');
        const returnedState = url.searchParams.get('state');
        const error = url.searchParams.get('error');

        if (error) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body style="font-family: system-ui; padding: 40px; text-align: center;">
                <h1 style="color: #ff6b6b;">❌ Authorization Failed</h1>
                <p>Error: ${error}</p>
                <p>You can close this window.</p>
              </body>
            </html>
          `);
          server.close();
          process.exit(1);
        }

        if (returnedState !== state) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body style="font-family: system-ui; padding: 40px; text-align: center;">
                <h1 style="color: #ff6b6b;">❌ State Mismatch</h1>
                <p>Please try again.</p>
                <p>You can close this window.</p>
              </body>
            </html>
          `);
          server.close();
          process.exit(1);
        }

        if (code) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body style="font-family: system-ui; padding: 40px; text-align: center; background: #0a0b10; color: #e8ebff;">
                <h1>✅ Authorization Successful!</h1>
                <p>Fetching your Spotify data...</p>
                <p>You can close this window.</p>
              </body>
            </html>
          `);
          
          exchangeCodeForToken(code).then(() => {
            server.close();
            process.exit(0);
          }).catch((err) => {
            console.error('❌ Error:', err.message);
            server.close();
            process.exit(1);
          });
        }
      } else {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, '127.0.0.1', () => {
      console.log(`\n🌐 Local server started on http://127.0.0.1:${PORT}`);
      resolve();
    });
  });
}

async function exchangeCodeForToken(code) {
  console.log('🔄 Exchanging authorization code for access token...');

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    }),
  });

  if (!tokenResponse.ok) {
    const error = await tokenResponse.text();
    throw new Error(`Failed to get token: ${error}`);
  }

  const tokenData = await tokenResponse.json();
  console.log('✅ Access token obtained!\n');

  // Now fetch the top tracks and artists
  await fetchSpotifyData(tokenData.access_token);
}

async function fetchSpotifyData(accessToken) {
  console.log('📊 Fetching your top tracks and artists...\n');

  try {
    const [tracksResponse, artistsResponse] = await Promise.all([
      fetch('https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term', {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      fetch('https://api.spotify.com/v1/me/top/artists?limit=10&time_range=short_term', {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    ]);

    if (!tracksResponse.ok || !artistsResponse.ok) {
      throw new Error('Failed to fetch Spotify data');
    }

    const tracksData = await tracksResponse.json();
    const artistsData = await artistsResponse.json();

    const data = {
      tracks: tracksData.items || [],
      artists: artistsData.items || [],
      lastUpdated: new Date().toISOString().split('T')[0],
    };

    const outputPath = path.join(__dirname, '../src/data/spotify.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log(`✅ Successfully saved to ${outputPath}`);
    console.log(`   📀 ${data.tracks.length} tracks`);
    console.log(`   🎤 ${data.artists.length} artists`);
    console.log(`   📅 Last updated: ${data.lastUpdated}\n`);
    console.log('🎉 Done! Refresh your browser to see the updated data.\n');
  } catch (error) {
    throw new Error(`Failed to fetch Spotify data: ${error.message}`);
  }
}

async function main() {
  console.log('\n🎵 Spotify Data Fetcher\n');
  console.log('This script will:');
  console.log('1. Open your browser for Spotify authorization');
  console.log('2. Fetch your top 10 tracks and artists');
  console.log('3. Save them to src/data/spotify.json\n');

  // Check if redirect URI is configured
  console.log('✅ Using redirect URI:');
  console.log(`   ${REDIRECT_URI}\n`);
  console.log('   (This should already be configured in your Spotify app)\n');

  // Generate PKCE values
  codeVerifier = generateCodeVerifier();
  const codeChallenge = sha256Base64Url(codeVerifier);
  state = crypto.randomUUID();

  // Start local server
  await startServer();

  // Build authorization URL
  const authUrl = new URL('https://accounts.spotify.com/authorize');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', CLIENT_ID);
  authUrl.searchParams.set('scope', SCOPES);
  authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.set('code_challenge_method', 'S256');
  authUrl.searchParams.set('code_challenge', codeChallenge);
  authUrl.searchParams.set('state', state);

  console.log('🌐 Opening browser for authorization...\n');
  
  // Open browser (cross-platform)
  const url = authUrl.toString();
  const platform = process.platform;
  let command;
  
  if (platform === 'darwin') {
    command = `open "${url}"`;
  } else if (platform === 'win32') {
    command = `start "" "${url}"`;
  } else {
    command = `xdg-open "${url}"`;
  }
  
  try {
    exec(command);
  } catch (error) {
    console.log('⚠️  Could not open browser automatically.');
    console.log('📋 Please open this URL manually:\n');
    console.log(url + '\n');
  }

  console.log('⏳ Waiting for authorization...\n');
}

main().catch((error) => {
  console.error('❌ Error:', error.message);
  if (server) server.close();
  process.exit(1);
});
