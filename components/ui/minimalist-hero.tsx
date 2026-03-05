"use client";

import React from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function MinimalistHero442() {
  const mainText =
    "We help bars build their soccer identity through Premier League advertising — starting before the 2026 World Cup.";

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 md:p-12">
      {/* Spacer for fixed navbar */}
      <div className="h-16 w-full shrink-0 md:h-20" />

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left: Short copy + link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/60 md:mx-0">
            {mainText}
          </p>
          <Link
            href="/services"
            className="mt-5 inline-block text-sm font-medium uppercase tracking-[0.15em] text-brand-blue underline decoration-from-font transition-colors hover:text-[#F2F2EE]"
          >
            Our Services &rarr;
          </Link>
        </motion.div>

        {/* Center: Trophy + gold circle */}
        <div className="relative order-1 flex items-center justify-center py-8 md:order-2 md:py-0">
          {/* Gold circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[260px] w-[260px] rounded-full md:h-[360px] md:w-[360px] lg:h-[460px] lg:w-[460px]"
            style={{ backgroundColor: "#C8A951", opacity: 0.88 }}
          />
          {/* Trophy image */}
          {/* Save your World Cup trophy image to /public/images/world-cup-trophy.png */}
          <motion.img
            src="/images/world-cup-trophy.png"
            alt="FIFA World Cup Trophy"
            className="relative z-10 h-auto w-44 scale-150 object-contain md:w-52 lg:w-60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/400x600/C8A951/080C18?text=Trophy";
            }}
          />
        </div>

        {/* Right: Big overlay headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start md:text-left"
        >
          <h1
            className="font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
            style={{
              fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
            }}
          >
            Soccer Fans
            <br />
            <span className="text-brand-blue">Into Customers.</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer: socials + tagline */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          <a
            href="https://www.instagram.com/fourfourtwomarketing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 transition-colors hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/4-4-2-marketing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-[11px] uppercase tracking-[0.25em] text-foreground/30"
        >
          Premier League Marketing — 2026
        </motion.div>
      </footer>
    </div>
  );
}
