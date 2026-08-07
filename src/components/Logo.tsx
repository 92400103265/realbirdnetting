 "use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  height?: number | string;
  className?: string;
  isScrolled?: boolean;
  theme?: "light" | "dark" | "adaptive";
}

export default function Logo({
  height = 40,
  className = "",
  isScrolled = false,
  theme = "adaptive",
}: LogoProps) {
  // Determine theme colors
  const isDarkTheme =
    theme === "dark" || (theme === "adaptive" && !isScrolled);

  const brandColor = isDarkTheme ? "#ffffff" : "#0B2545";
  const subTextColor = isDarkTheme ? "#10b981" : "#134074";
  const dividerColor = isDarkTheme
    ? "rgba(255,255,255,0.25)"
    : "rgba(11,37,69,0.25)";

  const parsedHeight =
    typeof height === "number" ? height : parseInt(height) || 40;

  const iconSize = Math.round(parsedHeight * 0.95);

  return (
    <div
      className={`flex items-center select-none transition-all duration-300 ${className}`}
      style={{ height: parsedHeight }}
    >
      {/* Logo Image */}
      <div
        className="relative flex-shrink-0 transition-all duration-300 rounded-xl overflow-hidden"
        style={{ width: iconSize, height: iconSize }}
      >
        <Image
          src="/images/logo_icon.png"
          alt="Real Bird Netting Logo"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      </div>

      {/* Divider */}
      <div
        className="h-3/5 w-[1.2px] mx-3.5 transition-colors duration-300"
        style={{ backgroundColor: dividerColor }}
      />

      {/* Logo Text */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={parsedHeight}
        viewBox="0 0 200 56"
        fill="none"
        className="flex-shrink-0"
      >
        <g className="transition-colors duration-300">
          <text
            x="2"
            y="24"
            fontFamily="var(--font-display), 'Outfit', 'Inter', system-ui, -apple-system, sans-serif"
            fontSize="20"
            fontWeight="900"
            fill={brandColor}
            className="transition-colors duration-300"
          >
            Real Bird
          </text>

          <text
            x="2"
            y="44"
            fontFamily="var(--font-display), 'Outfit', 'Inter', system-ui, -apple-system, sans-serif"
            fontSize="12"
            fontWeight="700"
            fill={subTextColor}
            letterSpacing="3"
            className="transition-colors duration-300"
          >
            NETTING
          </text>
        </g>
      </svg>
    </div>
  );
}