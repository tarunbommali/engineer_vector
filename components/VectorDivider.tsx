import React, { ReactNode } from "react";
import { ACCENT } from "./ShareBar";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: ACCENT }} />
      <span
        className="ev-font-mono text-[11px] tracking-[0.28em] uppercase"
        style={{ color: ACCENT }}
      >
        {children}
      </span>
    </div>
  );
}

export function VectorDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative w-full h-10 sm:h-14 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        className={`w-full h-full ${flip ? "scale-x-[-1]" : ""}`}
      >
        <line
          x1="0"
          y1="40"
          x2="200"
          y2="0"
          stroke={ACCENT}
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>
    </div>
  );
}
