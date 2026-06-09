import React, { useEffect, useRef, useState } from "react";
import { useStravaData } from "@/hooks/useStravaData";

export default function StravaStats() {
  const { data, status } = useStravaData();
  const mapRef = useRef(null);
  const mapElRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    if (!data?.lastRunPolyline || !mapElRef.current) return;
    const L = window.L;
    if (!L) return;

    const points = decodePolyline(data.lastRunPolyline);
    if (points.length === 0) return;

    if (!mapRef.current) {
      mapRef.current = L.map(mapElRef.current, {
        zoomControl: false,
        attributionControl: true,
      });
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(mapRef.current);
    }

    if (layerRef.current) {
      layerRef.current.remove();
    }

    layerRef.current = L.polyline(points, {
      color: "#94a3b8",
      weight: 4,
      opacity: 0.9,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(mapRef.current);

    mapRef.current.fitBounds(layerRef.current.getBounds(), {
      padding: [12, 12],
    });

    return () => {
      if (layerRef.current) {
        layerRef.current.remove();
        layerRef.current = null;
      }
    };
  }, [data]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="strava-card glass">
      <div className="strava-header">
      </div>
      {status === "loading" && <p className="muted">Loading latest runs…</p>}
      {status === "error" && (
        <p className="muted">Unable to load Strava stats right now.</p>
      )}
      {status === "ready" && data && (
        <div className="strava-stats">
          <div className="strava-stat">
            <span className="eyebrow">Last Run</span>
            <span className="strava-value">{data.lastRunDistance}</span>
            <span className="muted small">{data.lastRunDate}</span>
          </div>
          <div className="strava-stat">
            <span className="eyebrow">Pace</span>
            <span className="strava-value">{data.lastRunPace}</span>
            <span className="muted small">Last run pace</span>
          </div>
          <div className="strava-stat">
            <span className="eyebrow">30 Days</span>
            <span className="strava-value">{data.monthMiles}</span>
            <span className="muted small">Run mileage</span>
          </div>
        </div>
      )}
      {status === "ready" && data?.lastRunPolyline && (
        <div className="strava-map">
          <div className="strava-map-header">
            <span className="eyebrow">Last Run Route</span>
          </div>
          <div className="strava-map-canvas" ref={mapElRef} />
        </div>
      )}
    </div>
  );
}

function decodePolyline(encoded) {
  let index = 0;
  const len = encoded.length;
  let lat = 0;
  let lng = 0;
  const coordinates = [];

  while (index < len) {
    let result = 0;
    let shift = 0;
    let byte = null;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    const deltaLat = (result & 1) ? ~(result >> 1) : result >> 1;
    lat += deltaLat;

    result = 0;
    shift = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    const deltaLng = (result & 1) ? ~(result >> 1) : result >> 1;
    lng += deltaLng;

    coordinates.push([lat / 1e5, lng / 1e5]);
  }

  return coordinates;
}
