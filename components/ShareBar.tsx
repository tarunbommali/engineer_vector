"use client";

import React, { useState } from "react";
import { MessageSquare, Globe, Share2 } from "lucide-react";

export const TELEGRAM_URL = "https://t.me/engineer_vector";
export const ACCENT = "#229ED9";
const SHARE_TEXT = "Engineer Vector — daily MCQs, memes, and interview prep for engineers. Join here:";

interface ShareBarProps {
  className?: string;
}

export default function ShareBar({ className = "" }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = TELEGRAM_URL;

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${shareUrl}`)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  };

  const iconBtn =
    "w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/35 transition-colors duration-200 cursor-pointer";

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span className="ev-font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
        Share Engineer Vector
      </span>
      <div className="flex items-center gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on WhatsApp"
          className={iconBtn}
        >
          <MessageSquare size={18} />
        </a>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on LinkedIn"
          className={iconBtn}
        >
          <Globe size={18} />
        </a>
        <button onClick={handleCopy} aria-label="Copy link" className={iconBtn}>
          <Share2 size={18} />
        </button>
      </div>
      {copied && <span className="ev-font-mono text-[11px] text-white/50">Link copied</span>}
    </div>
  );
}
