# AksharRavichandran.github.io

Personal website built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the linter:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Deployment

This repository deploys via GitHub Pages using Actions. On pushes to `main`, the site is built with Vite to `dist/` and published to Pages automatically. The old `docs/` folder is no longer used.

## Spotify Top Tracks/Artists

The About section displays your Spotify top 10 tracks and artists from a static JSON file (`src/data/spotify.json`). This approach doesn't require OAuth or API keys in production.

### Updating Your Spotify Data

**Option 1: Using the helper script (recommended)**
1. Get a Spotify access token:
   - Go to https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/
   - Click "Get Token" and authorize with `user-top-read` scope
   - Copy the access token
2. Run the script:
   ```bash
   node scripts/fetch-spotify-data.js YOUR_ACCESS_TOKEN
   ```
   Or set it as an environment variable:
   ```bash
   SPOTIFY_ACCESS_TOKEN=your_token node scripts/fetch-spotify-data.js
   ```
3. The script will update `src/data/spotify.json` with your top tracks and artists

**Option 2: Manual update**
1. Fetch your top tracks/artists from Spotify API (or use the Spotify Web API console)
2. Update `src/data/spotify.json` with the following structure:
   ```json
   {
     "tracks": [...],  // Array of track objects
     "artists": [...], // Array of artist objects
     "lastUpdated": "2024-01-01"
   }
   ```
3. Each track/artist should match the Spotify API response format (see example in `spotify.json`)

**Note:** Update the JSON file periodically (weekly/monthly) to keep your top music current.
