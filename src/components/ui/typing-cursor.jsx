import React from "react";
import { cn } from "@/lib/utils";

export function TypingCursor({ className, hidden = false }) {
  if (hidden) return null;

  return (
    <span
      className={cn("typing-cursor", className)}
      aria-hidden="true"
    />
  );
}
