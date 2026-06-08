import React from "react";

/**
 * Margin-style metric annotation — large ink number, small muted label.
 * @param {{ value: string, label: string }} props
 */
export default function MetricNote({ value, label }) {
  return (
    <div className="metric-note">
      <p className="metric-note__value">{value}</p>
      <p className="metric-note__label">{label}</p>
    </div>
  );
}
