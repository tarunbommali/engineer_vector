"use client";

import React, { useEffect, useState } from "react";
import { ACCENT } from "./ShareBar";

const LAUNCH_DATE = new Date("2026-08-01T00:00:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(target.getTime() - new Date().getTime());

    const id = setInterval(() => {
      setTimeLeft(target.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  const clamped = Math.max(timeLeft, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);

  return { days, hours, minutes, seconds, done: clamped <= 0, mounted };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="ev-font-display font-bold text-2xl sm:text-3xl tabular-nums w-[2ch] text-center">
        {String(value).padStart(2, "0")}
      </span>
      <span className="ev-font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">
        {label}
      </span>
    </div>
  );
}

interface LaunchCountdownProps {
  className?: string;
}

export default function LaunchCountdown({ className = "" }: LaunchCountdownProps) {
  const { days, hours, minutes, seconds, done, mounted } = useCountdown(LAUNCH_DATE);

  if (!mounted) {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <div className="ev-font-mono text-[11px] tracking-[0.28em] uppercase text-white/50">
          Launching Aug 01
        </div>
        <div className="flex items-stretch gap-3 sm:gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03]">
          <CountdownUnit value={0} label="Days" />
          <span className="ev-font-display font-bold text-xl sm:text-2xl text-white/20 self-start pt-1">:</span>
          <CountdownUnit value={0} label="Hrs" />
          <span className="ev-font-display font-bold text-xl sm:text-2xl text-white/20 self-start pt-1">:</span>
          <CountdownUnit value={0} label="Min" />
          <span className="ev-font-display font-bold text-xl sm:text-2xl text-white/20 self-start pt-1">:</span>
          <CountdownUnit value={0} label="Sec" />
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div
        className={`inline-flex items-center gap-2 ev-font-mono text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full border border-white/15 text-white/70 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
        We&apos;re live
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
      <div className="ev-font-mono text-[11px] tracking-[0.28em] uppercase text-white/50">
        Launching Aug 01
      </div>
      <div className="flex items-stretch gap-3 sm:gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03]">
        <CountdownUnit value={days} label="Days" />
        <span className="ev-font-display font-bold text-xl sm:text-2xl text-white/20 self-start pt-1">:</span>
        <CountdownUnit value={hours} label="Hrs" />
        <span className="ev-font-display font-bold text-xl sm:text-2xl text-white/20 self-start pt-1">:</span>
        <CountdownUnit value={minutes} label="Min" />
        <span className="ev-font-display font-bold text-xl sm:text-2xl text-white/20 self-start pt-1">:</span>
        <CountdownUnit value={seconds} label="Sec" />
      </div>
    </div>
  );
}
