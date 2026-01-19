/**
 * Helper script to get a Spotify access token using your Client ID
 * 
 * This opens a browser window for you to authorize, then extracts the token
 * 
 * Usage: node scripts/get-spotify-token.js
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import readline from 'readline';
import open from 'open';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
const REDIRECT_URI =
  process.env.SPOTIFY_REDIRECT_URI ||
  process.env.VITE_SPOTIFY_REDIRECT_URI ||
  envFile.SPOTIFY_REDIRECT_URI ||
  envFile.VITE_SPOTIFY_REDIRECT_URI;
const SCOPES = 'user-top-read';

if (!CLIENT_ID || !REDIRECT_URI) {
  throw new Error(
    'Missing Spotify env vars. Set SPOTIFY_CLIENT_ID and SPOTIFY_REDIRECT_URI in .env.'
  );
}

console.log('\n🎵 Spotify Token Helper\n');
console.log('This will open your browser to authorize Spotify access.\n');

// Generate PKCE values
function generateCodeVerifier() {
  return crypto.randomUUID().replace(/-/g, '');
}

async function sha256Base64Url(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const bytes = new Uint8Array(digest);
  const binary = Array.from(bytes)
    .map((b) => String.fromCharCode(b))
    .join('');
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

const codeVerifier = generateCodeVerifier();
const codeChallenge = await sha256Base64Url(codeVerifier);
const state = crypto.randomUUID();

const authUrl = new URL('https://accounts.spotify.com/authorize');
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('client_id', CLIENT_ID);
authUrl.searchParams.set('scope', SCOPES);
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('code_challenge_method', 'S256');
authUrl.searchParams.set('code_challenge', codeChallenge);
authUrl.searchParams.set('state', state);

console.log('📋 Copy this URL and open it in your browser:\n');
console.log(authUrl.toString());
console.log('\nAfter authorizing, you will be redirected to a localhost URL.');
console.log('Copy the ENTIRE redirect URL (including the code parameter) and paste it below.\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Paste the redirect URL here: ', async (redirectUrl) => {
  try {
    const url = new URL(redirectUrl);
    const code = url.searchParams.get('code');
    const returnedState = url.searchParams.get('state');

    if (returnedState !== state) {
      console.error('❌ State mismatch. Please try again.');
      rl.close();
      process.exit(1);
    }

    if (!code) {
      console.error('❌ No authorization code found in URL.');
      rl.close();
      process.exit(1);
    }

    console.log('\n🔄 Exchanging authorization code for access token...');

    // Exchange code for token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        code_verifier: codeVerifier,
      }),
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      console.error('❌ Failed to get token:', error);
      rl.close();
      process.exit(1);
    }

    const tokenData = await tokenResponse.json();
    console.log('\n✅ Success! Your access token:\n');
    console.log(tokenData.access_token);
    console.log('\n💡 Now run:');
    console.log(`   node scripts/fetch-spotify-data.js ${tokenData.access_token}\n`);
    
    rl.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
});
