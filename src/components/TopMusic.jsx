import React, { useEffect, useRef, useState } from "react";
import spotifyData from "../data/spotify.json";

const ITEMS_PER_VIEW = 5;

// Card Components
function Card({ children, className = "" }) {
  return <div className={`glass music-card ${className}`}>{children}</div>;
}

function CardHeader({ children, className = "" }) {
  return <div className={`music-card__header ${className}`}>{children}</div>;
}

function CardTitle({ children, className = "" }) {
  return <h3 className={`music-card__title ${className}`}>{children}</h3>;
}

function CardContent({ children, className = "" }) {
  return <div className={`music-card__content ${className}`}>{children}</div>;
}

function useSnapScroll(itemsLength) {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const itemSizeRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;
    if (!container || !list) return;

    const updateItemSize = () => {
      const firstItem = list.querySelector(".music-item");
      if (!firstItem) return;
      const styles = window.getComputedStyle(list);
      const gap = parseFloat(styles.rowGap || styles.gap || "0");
      itemSizeRef.current = firstItem.offsetHeight + gap;
    };

    updateItemSize();
    const ro = new ResizeObserver(updateItemSize);
    ro.observe(list);
    return () => ro.disconnect();
  }, [itemsLength]);

  const onWheel = (event) => {
    const container = containerRef.current;
    if (!container || !itemSizeRef.current) return;
    event.preventDefault();

    const direction = event.deltaY > 0 ? 1 : -1;
    const next = Math.max(
      0,
      Math.min(
        container.scrollHeight - container.clientHeight,
        container.scrollTop + direction * itemSizeRef.current
      )
    );
    container.scrollTo({ top: next, behavior: "smooth" });
  };

  return { containerRef, listRef, onWheel };
}

// Top Tracks Card Component
function TopTracksCard({ tracks }) {
  const [tracksIndex, setTracksIndex] = useState(0);
  const [isPaging, setIsPaging] = useState(false);
  const [pageDir, setPageDir] = useState(null);
  const pageTimeoutRef = useRef(null);
  const snap = useSnapScroll(tracks.length);

  const maxIndex = Math.max(0, tracks.length - ITEMS_PER_VIEW);
  const canScrollUp = tracksIndex > 0;
  const canScrollDown = tracksIndex < maxIndex && tracks.length > ITEMS_PER_VIEW;

  useEffect(() => {
    return () => {
      if (pageTimeoutRef.current) clearTimeout(pageTimeoutRef.current);
    };
  }, []);

  const triggerPaging = (dir) => {
    setPageDir(dir);
    setIsPaging(true);
    if (pageTimeoutRef.current) clearTimeout(pageTimeoutRef.current);
    pageTimeoutRef.current = setTimeout(() => setIsPaging(false), 320);
  };

  const handleScrollUp = () => {
    if (!canScrollUp) return;
    triggerPaging("up");
    setTracksIndex((prev) => Math.max(0, prev - ITEMS_PER_VIEW));
  };

  const handleScrollDown = () => {
    if (!canScrollDown) return;
    triggerPaging("down");
    setTracksIndex((prev) => Math.min(maxIndex, prev + ITEMS_PER_VIEW));
  };

  const visibleTracks = tracks.slice(tracksIndex, tracksIndex + ITEMS_PER_VIEW);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span role="img" aria-hidden>
            🎵
          </span>
          Top Tracks
        </CardTitle>
        {spotifyData.lastUpdated && (
          <span className="muted small">
            Updated {new Date(spotifyData.lastUpdated).toLocaleDateString()}
          </span>
        )}
      </CardHeader>

      <CardContent>
        <div className="music-list-header">
          <span className="muted small">
            Showing {tracksIndex + 1}-
            {Math.min(tracksIndex + ITEMS_PER_VIEW, tracks.length)} of{" "}
            {tracks.length}
          </span>
        </div>

        <div className="music-navigation">
          <button
            className="music-nav-arrow up"
            onClick={handleScrollUp}
            disabled={!canScrollUp}
            aria-label="Show previous tracks"
          >
            ▲
          </button>

          {/* Render ONLY the 5 visible tracks */}
          <div className="music-carousel-container" ref={snap.containerRef} onWheel={snap.onWheel}>
            <ol
              className={`music-carousel-list${isPaging ? ` paging-${pageDir}` : ""}`}
              ref={snap.listRef}
            >
              {visibleTracks.map((t, idx) => (
                <li key={`${t.id}-${tracksIndex + idx}`} className="music-item">
                  <span className="rank-number">#{tracksIndex + idx + 1}</span>

                  {t.album?.images?.[2]?.url && (
                    <img
                      src={t.album.images[2].url}
                      alt={t.name}
                      className="thumb"
                      loading="lazy"
                    />
                  )}

                  <div className="item-text">
                    <div className="primary">{t.name}</div>
                    <div className="muted small">
                      {t.artists?.map((a) => a.name).join(", ")}
                    </div>
                  </div>

                  {t.external_urls?.spotify && (
                    <a
                      className="pill-link"
                      href={t.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${t.name} on Spotify`}
                    >
                      Open
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <button
            className="music-nav-arrow down"
            onClick={handleScrollDown}
            disabled={!canScrollDown}
            aria-label="Show next tracks"
          >
            ▼
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

// Top Artists Card Component
function TopArtistsCard({ artists }) {
  const [artistsIndex, setArtistsIndex] = useState(0);
  const [isPaging, setIsPaging] = useState(false);
  const [pageDir, setPageDir] = useState(null);
  const pageTimeoutRef = useRef(null);
  const snap = useSnapScroll(artists.length);

  const maxIndex = Math.max(0, artists.length - ITEMS_PER_VIEW);
  const canScrollUp = artistsIndex > 0;
  const canScrollDown =
    artistsIndex < maxIndex && artists.length > ITEMS_PER_VIEW;

  useEffect(() => {
    return () => {
      if (pageTimeoutRef.current) clearTimeout(pageTimeoutRef.current);
    };
  }, []);

  const triggerPaging = (dir) => {
    setPageDir(dir);
    setIsPaging(true);
    if (pageTimeoutRef.current) clearTimeout(pageTimeoutRef.current);
    pageTimeoutRef.current = setTimeout(() => setIsPaging(false), 320);
  };

  const handleScrollUp = () => {
    if (!canScrollUp) return;
    triggerPaging("up");
    setArtistsIndex((prev) => Math.max(0, prev - ITEMS_PER_VIEW));
  };

  const handleScrollDown = () => {
    if (!canScrollDown) return;
    triggerPaging("down");
    setArtistsIndex((prev) => Math.min(maxIndex, prev + ITEMS_PER_VIEW));
  };

  const visibleArtists = artists.slice(
    artistsIndex,
    artistsIndex + ITEMS_PER_VIEW
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span role="img" aria-hidden>
            ⭐
          </span>
          Top Artists
        </CardTitle>
        {spotifyData.lastUpdated && (
          <span className="muted small">
            Updated {new Date(spotifyData.lastUpdated).toLocaleDateString()}
          </span>
        )}
      </CardHeader>

      <CardContent>
        <div className="music-list-header">
          <span className="muted small">
            Showing {artistsIndex + 1}-
            {Math.min(artistsIndex + ITEMS_PER_VIEW, artists.length)} of{" "}
            {artists.length}
          </span>
        </div>

        <div className="music-navigation">
          <button
            className="music-nav-arrow up"
            onClick={handleScrollUp}
            disabled={!canScrollUp}
            aria-label="Show previous artists"
          >
            ▲
          </button>

          {/* Render ONLY the 5 visible artists */}
          <div className="music-carousel-container" ref={snap.containerRef} onWheel={snap.onWheel}>
            <ol
              className={`music-carousel-list${isPaging ? ` paging-${pageDir}` : ""}`}
              ref={snap.listRef}
            >
              {visibleArtists.map((a, idx) => (
                <li
                  key={`${a.id}-${artistsIndex + idx}`}
                  className="music-item"
                >
                  <span className="rank-number">#{artistsIndex + idx + 1}</span>

                  {a.images?.[2]?.url && (
                    <img
                      src={a.images[2].url}
                      alt={a.name}
                      className="thumb"
                      loading="lazy"
                    />
                  )}

                  <div className="item-text">
                    <div className="primary">{a.name}</div>
                    <div className="muted small">
                      {a.genres?.slice(0, 2).join(" • ") || "Artist"}
                    </div>
                  </div>

                  {a.external_urls?.spotify && (
                    <a
                      className="pill-link"
                      href={a.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${a.name} on Spotify`}
                    >
                      Open
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <button
            className="music-nav-arrow down"
            onClick={handleScrollDown}
            disabled={!canScrollDown}
            aria-label="Show next artists"
          >
            ▼
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Component
export default function TopMusic() {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setTracks(spotifyData.tracks || []);
      setArtists(spotifyData.artists || []);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load Spotify data:", error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top tracks & artists</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="muted">Loading your top music…</p>
        </CardContent>
      </Card>
    );
  }

  if (tracks.length === 0 && artists.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top tracks & artists</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="muted">
            No music data available. Update spotify.json with your top tracks and
            artists.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="music-cards-grid">
      {tracks.length > 0 && <TopTracksCard tracks={tracks} />}
      {artists.length > 0 && <TopArtistsCard artists={artists} />}
    </div>
  );
}
