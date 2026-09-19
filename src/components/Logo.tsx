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
  height = 64,
  className = "",
  isScrolled = false,
  theme = "adaptive",
}: LogoProps) {
  const brandColor = "#0B2545";
  const subTextColor = "#10B981";
  const dividerColor = "rgba(11, 37, 69, 0.20)";

  const parsedHeight =
    typeof height === "number"
      ? height
      : parseInt(height) || 64;

  // Responsive sizes
  const isMobile = parsedHeight <= 48;

  const logoWidth = isMobile ? 78 : 105;
  const logoHeight = isMobile ? 46 : 60;
  const logoScale = isMobile ? 1.25 : 1.55;

  const dividerHeight = isMobile ? 30 : 38;

  const brandFontSize = isMobile ? 17 : 22;
  const brandLineHeight = isMobile ? 20 : 25;

  const subFontSize = isMobile ? 8 : 11;
  const subLetterSpacing = isMobile ? "2.5px" : "4px";

  return (
    <div
      className={`flex items-center select-none ${className}`}
      style={{
        height: parsedHeight,
      }}
    >
      {/* =========================================
          LOGO IMAGE
      ========================================== */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{
          width: logoWidth,
          height: logoHeight,
        }}
      >
        <Image
          src="/images/logo_icon.png"
          alt="Real Bird Netting"
          fill
          priority
          sizes={isMobile ? "78px" : "105px"}
          className="object-contain"
          style={{
            transform: `scale(${logoScale})`,
          }}
        />
      </div>

      {/* =========================================
          DIVIDER
      ========================================== */}
      <div
        className={isMobile ? "mx-2" : "mx-3"}
        style={{
          width: "1px",
          height: dividerHeight,
          backgroundColor: dividerColor,
        }}
      />

      {/* =========================================
          BRAND NAME
      ========================================== */}
      <div
        className="flex flex-col justify-center"
        style={{
          minWidth: isMobile ? "88px" : "125px",
        }}
      >
        <div
          style={{
            color: brandColor,
            fontSize: `${brandFontSize}px`,
            fontWeight: 800,
            lineHeight: `${brandLineHeight}px`,
            whiteSpace: "nowrap",
            fontFamily:
              "var(--font-display), 'Outfit', 'Inter', sans-serif",
          }}
        >
          Real Bird
        </div>

        <div
          style={{
            color: subTextColor,
            fontSize: `${subFontSize}px`,
            fontWeight: 700,
            lineHeight: isMobile ? "13px" : "17px",
            letterSpacing: subLetterSpacing,
            whiteSpace: "nowrap",
          }}
        >
          NETTING
        </div>
      </div>
    </div>
  );
}