import React from "react";

/**
 * Lightweight text-node flow for architecture or workflow steps.
 * @param {{ steps: string[] }} props
 */
export default function SystemFlow({ steps }) {
  if (!steps?.length) return null;

  return (
    <div className="system-flow" aria-label="System flow">
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <span className="system-flow__node">{step}</span>
          {i < steps.length - 1 ? (
            <span className="system-flow__arrow" aria-hidden>
              →
            </span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
