import React, { ReactNode } from "react";
import { Send } from "lucide-react";
import { TELEGRAM_URL, ACCENT } from "./ShareBar";

interface JoinButtonProps {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: ReactNode;
  bgColor?: string;
  style?: React.CSSProperties;
}

export default function JoinButton({
  children = "Join Telegram",
  className = "",
  size = "md",
  href = TELEGRAM_URL,
  icon,
  bgColor,
  style,
}: JoinButtonProps) {
  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-5 py-3",
    lg: "text-base px-7 py-4",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`ev-cta inline-flex items-center justify-center gap-2 rounded-full font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 ${sizes[size]} ${className}`}
      style={{ background: bgColor || ACCENT, ...style }}
    >
      {icon ? icon : <Send size={size === "lg" ? 20 : 18} strokeWidth={2.25} />}
      {children}
    </a>
  );
}
