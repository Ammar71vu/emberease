"use client";

import * as React from "react";
import { motion } from "framer-motion";

/**
 * Fixed ambient green glow spreading from the bottom-left corner.
 * Light spreads broadly across the page — covers a wide area,
 * not a single spot. Brightest in the corner, long gradient falloff.
 */
export function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* === BOTTOM-LEFT: SPREADING GLOW === */}

      {/* Layer 1 — Ultra-wide glow (covers most of the viewport) */}
      <motion.div
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          bottom: "-400px",
          left: "-400px",
          width: "1800px",
          height: "1800px",
          background:
            "radial-gradient(circle at center, oklch(0.92 0.22 130 / 0.2) 0%, oklch(0.85 0.2 130 / 0.14) 15%, oklch(0.8 0.2 135 / 0.08) 35%, oklch(0.7 0.2 135 / 0.03) 55%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />

      {/* Layer 2 — Large spread */}
      <motion.div
        animate={{ opacity: [0.55, 0.75, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          bottom: "-250px",
          left: "-250px",
          width: "1000px",
          height: "1000px",
          background:
            "radial-gradient(circle at center, oklch(0.92 0.22 130 / 0.35) 0%, oklch(0.85 0.2 130 / 0.18) 25%, oklch(0.8 0.2 135 / 0.08) 50%, transparent 75%)",
          filter: "blur(45px)",
        }}
      />

      {/* Layer 3 — Bright core */}
      <motion.div
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          bottom: "-100px",
          left: "-100px",
          width: "550px",
          height: "550px",
          background:
            "radial-gradient(circle at center, oklch(0.92 0.22 130 / 0.5) 0%, oklch(0.88 0.21 130 / 0.25) 35%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      {/* Layer 4 — Hotspot (brightest in corner) */}
      <motion.div
        animate={{ opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          bottom: "-30px",
          left: "-30px",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle at center, oklch(0.95 0.2 130 / 0.65) 0%, oklch(0.9 0.21 130 / 0.18) 50%, transparent 70%)",
          filter: "blur(15px)",
        }}
      />

      {/* === SPREADING STREAKS — carry light far from the corner === */}

      {/* Wide vertical beam along the left edge */}
      <div
        className="absolute"
        style={{
          bottom: "0",
          left: "0",
          width: "500px",
          height: "100vh",
          background:
            "linear-gradient(to top, oklch(0.92 0.22 130 / 0.16) 0%, oklch(0.88 0.2 130 / 0.08) 30%, oklch(0.8 0.2 135 / 0.02) 60%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 500px 1500px at bottom left, black 0%, black 25%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 500px 1500px at bottom left, black 0%, black 25%, transparent 85%)",
        }}
      />

      {/* Wide horizontal beam along the bottom edge — reaches far right */}
      <div
        className="absolute"
        style={{
          bottom: "0",
          left: "0",
          width: "100vw",
          height: "500px",
          background:
            "linear-gradient(to right, oklch(0.92 0.22 130 / 0.15) 0%, oklch(0.88 0.2 130 / 0.06) 35%, oklch(0.8 0.2 135 / 0.02) 60%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 2200px 500px at bottom left, black 0%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 2200px 500px at bottom left, black 0%, black 20%, transparent 85%)",
        }}
      />

      {/* Large diagonal wash across the whole viewport */}
      <div
        className="absolute"
        style={{
          bottom: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(ellipse 80% 80% at 0% 100%, oklch(0.92 0.22 130 / 0.05) 0%, oklch(0.85 0.2 130 / 0.015) 40%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />
    </div>
  );
}
