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
  // Always use dark brand text on the white navbar
  const brandColor = "#0B2545";
  const subTextColor = "#10B981";
  const dividerColor = "rgba(11, 37, 69, 0.20)";

  const parsedHeight =
    typeof height === "number"
      ? height
      : parseInt(height) || 64;

  return (
    <div
      className={`flex items-center select-none ${className}`}
      style={{
        height: parsedHeight,
      }}
    >
       {/* LOGO IMAGE */}
<div
  className="relative flex-shrink-0 overflow-hidden"
  style={{
    width: 125,
    height: 72,
  }}
>
  <Image
    src="/images/logo_icon.png"
    alt="Real Bird Netting"
    fill
    priority
    sizes="125px"
    className="object-contain"
    style={{
      transform: "scale(1.75)",
    }}
  />
</div>
      {/* ==============================
          DIVIDER
      =============================== */}
      <div
        className="mx-3"
        style={{
          width: "1px",
          height: "38px",
          backgroundColor: dividerColor,
        }}
      />

      {/* ==============================
          BRAND NAME
      =============================== */}
      <div
        className="flex flex-col justify-center"
        style={{
          minWidth: "125px",
        }}
      >
        <div
          style={{
            color: brandColor,
            fontSize: "22px",
            fontWeight: 800,
            lineHeight: "25px",
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
            fontSize: "11px",
            fontWeight: 700,
            lineHeight: "17px",
            letterSpacing: "4px",
            whiteSpace: "nowrap",
          }}
        >
          NETTING
        </div>
      </div>
    </div>
  );
}