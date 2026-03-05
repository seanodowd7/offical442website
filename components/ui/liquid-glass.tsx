"use client";

import React from "react";

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  tintColor?: string;
}

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_self",
  tintColor = "rgba(255,255,255,0.07)",
}) => {
  const glassStyle: React.CSSProperties = {
    boxShadow: "0 4px 16px rgba(0,0,0,0.3), 0 0 30px rgba(0,0,0,0.15)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex overflow-hidden cursor-pointer transition-all duration-500 ${className}`}
      style={glassStyle}
    >
      {/* Blur + distortion layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      {/* Tint layer */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: tintColor }}
      />
      {/* Inner highlight border */}
      <div
        className="absolute inset-0 z-20"
        style={{
          boxShadow:
            "inset 1px 1px 0 rgba(255,255,255,0.25), inset -1px -1px 0 rgba(255,255,255,0.08)",
        }}
      />
      {/* Content */}
      <div className="relative z-30 w-full">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export const GlassFilter: React.FC = () => (
  <svg
    style={{ display: "none", position: "absolute" }}
    aria-hidden="true"
  >
    <defs>
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.0015 0.006"
          numOctaves="1"
          seed="17"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="2" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="4"
          specularConstant="1"
          specularExponent="80"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="120"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);
