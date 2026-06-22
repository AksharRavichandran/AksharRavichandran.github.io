#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env"
PROXY_DIR="$ROOT/api-proxy"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE"
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

for var in SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET SPOTIFY_REFRESH_TOKEN; do
  if [[ -z "${!var:-}" ]]; then
    echo "Missing $var in $ENV_FILE"
    exit 1
  fi
done

# Keep a local copy for the proxy repo (gitignored).
cat > "$PROXY_DIR/.env" <<EOF
SPOTIFY_CLIENT_ID=$SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET=$SPOTIFY_CLIENT_SECRET
SPOTIFY_REFRESH_TOKEN=$SPOTIFY_REFRESH_TOKEN
EOF

cd "$PROXY_DIR"

upsert_env() {
  local name="$1"
  local value="$2"
  local env="$3"

  vercel env rm "$name" "$env" --yes >/dev/null 2>&1 || true
  printf '%s' "$value" | vercel env add "$name" "$env" --force >/dev/null
  echo "Set $name for $env"
}

if ! vercel whoami >/dev/null 2>&1; then
  echo "Copied Spotify env vars to api-proxy/.env"
  echo "Run 'vercel login', then:"
  echo "  bash scripts/sync-vercel-spotify-env.sh"
  exit 0
fi

for env in production preview development; do
  upsert_env SPOTIFY_CLIENT_ID "$SPOTIFY_CLIENT_ID" "$env"
  upsert_env SPOTIFY_CLIENT_SECRET "$SPOTIFY_CLIENT_SECRET" "$env"
  upsert_env SPOTIFY_REFRESH_TOKEN "$SPOTIFY_REFRESH_TOKEN" "$env"
done

echo "Redeploying production..."
vercel deploy --prod --yes

echo "Done. Test with:"
echo "  curl https://strava-proxy-two.vercel.app/api/spotify"
