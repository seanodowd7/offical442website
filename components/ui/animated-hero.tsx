"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ChevronDown } from "lucide-react";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import NeuralBackground from "@/components/ui/flow-field-background";

const titles = [
  "packed matchdays",
  "soccer fans",
  "Premier League crowds",
  "Champions League nights",
  "The World Cup",
];

// Isolated component — its state changes never re-render the static headline
function RotatingWord() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-1 w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center font-display font-extrabold uppercase"
          style={{
            fontSize: "clamp(2.2rem, 7vw, 6.5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            background: "linear-gradient(90deg, #FFB800, #FFE066, #C8A951)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {titles[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function AnimatedHero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center sm:py-32">
      {/* Flow field background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <NeuralBackground
          color="#4B8BC8"
          trailOpacity={0.08}
          particleCount={500}
          speed={0.6}
        />
      </div>
      <GlassFilter />
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, #4B8BC8 0%, transparent 65%)",
          filter: "blur(100px)",
          opacity: 0.1,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, #C8A951 0%, transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.06,
        }}
      />

      {/* Content — z-10 keeps it above the absolute glow layers */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-3 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8896B0] sm:text-[11px] sm:tracking-[0.25em]">
            Premier League / World Cup Marketing
          </span>
        </motion.div>

        {/* Static headline — no state dependency, animates once on mount */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1
            className="font-display font-extrabold uppercase leading-none text-white"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 6.5rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.0,
            }}
          >
            Turn your bar into
            <br />
            the home for
          </h1>
        </motion.div>

        {/* Rotating word — isolated so re-renders stay contained */}
        <RotatingWord />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-sm px-2 text-sm leading-relaxed text-[#8896B0] sm:max-w-lg sm:text-base lg:text-lg"
        >
          The 2026 World Cup begins in June. We help bars build their soccer
          identity through Premier League advertising, starting now.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          <GlassEffect href="https://calendly.com/fourfourtwo-sales/30min" tintColor="rgba(75,139,200,0.18)" className="w-full border border-brand-blue/40 hover:border-brand-blue/70 sm:w-auto">
            <span className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-[#F2F2EE]">
              <Phone className="h-3.5 w-3.5" />
              Book a Call
            </span>
          </GlassEffect>
          <GlassEffect
            href="/#services"
            tintColor="rgba(75,139,200,0.18)" className="w-full border border-brand-blue/40 hover:border-brand-blue/70 sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-[#F2F2EE]">
              See How It Works
              <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </GlassEffect>
        </motion.div>

      </div>{/* end z-10 content wrapper */}
    </div>
  );
}
