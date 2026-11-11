"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showGlow?: boolean;
}

/**
 * EMBER EASE brand logo — recreated from user's reference design.
 * Structure: stylized lowercase "e" mark + lime green dot above-left,
 * vertical divider, "ember" wordmark + "e a s e" tagline.
 * Pink accent from the original replaced with brand lime green.
 */
export function BrandLogo({
  className,
  showText = true,
  showGlow = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* === MARK: lowercase "e" with lime dot above-left === */}
      <div className="relative flex-shrink-0">
        {showGlow && (
          <div className="absolute inset-0 bg-lime rounded-full blur-md opacity-25" />
        )}
        <svg
          viewBox="0 0 36 44"
          className="relative h-10 w-9"
          aria-label="EMBER EASE logo mark"
        >
          {/* Lime green dot — above and left of the e */}
          <circle cx="10" cy="8" r="3.5" fill="var(--lime-400)" />

          {/* Stylized lowercase "e" — flowing, organic shape with enclosed counter */}
          <path
            fillRule="evenodd"
            d="
              M 29 15
              C 24 11, 13 13, 9 21
              C 5 30, 9 40, 17 41
              C 24 42, 29 39, 30 35
              C 30 34, 30 33, 29 33
              L 20 33
              C 16 33, 14 30, 14 26
              C 14 22, 16 20, 20 20
              L 30 20
              C 30 19, 30 17, 29 15
              Z
              M 16 26
              C 16 24, 18 23, 20 23
              L 24 23
              C 26 23, 27 24, 27 26
              C 27 28, 26 29, 24 29
              L 20 29
              C 18 29, 16 28, 16 26
              Z
            "
            fill="currentColor"
          />
        </svg>
      </div>

      {showText && (
        <>
          {/* === DIVIDER: thin vertical line === */}
          <div className="h-9 w-px bg-white/15 mx-0.5" />

          {/* === WORDMARK === */}
          <div className="flex flex-col leading-none gap-1">
            <span className="text-sm font-bold tracking-tight text-foreground lowercase">
              ember
            </span>
            <span className="text-[8px] text-muted-foreground tracking-[0.35em] lowercase font-medium">
              e a s e
            </span>
          </div>
        </>
      )}
    </div>
  );
}

/** Compact version — just the mark, no wordmark */
export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex-shrink-0", className)}>
      <svg
        viewBox="0 0 36 44"
        className="h-full w-full"
        aria-label="EMBER EASE logo mark"
      >
        <circle cx="10" cy="8" r="3.5" fill="var(--lime-400)" />
        <path
          fillRule="evenodd"
          d="
            M 29 15
            C 24 11, 13 13, 9 21
            C 5 30, 9 40, 17 41
            C 24 42, 29 39, 30 35
            C 30 34, 30 33, 29 33
            L 20 33
            C 16 33, 14 30, 14 26
            C 14 22, 16 20, 20 20
            L 30 20
            C 30 19, 30 17, 29 15
            Z
            M 16 26
            C 16 24, 18 23, 20 23
            L 24 23
            C 26 23, 27 24, 27 26
            C 27 28, 26 29, 24 29
            L 20 29
            C 18 29, 16 28, 16 26
            Z
          "
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
