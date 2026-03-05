"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GlassEffect } from "@/components/ui/liquid-glass";

export function FinalCta() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] py-44 lg:py-60"
    >
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #4B8BC8 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[30%] top-[30%] h-[300px] w-[300px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #C8A951 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="reveal mb-6 text-xs uppercase tracking-[0.35em] text-brand-gold">
          The Clock Is Ticking
        </p>

        <h2
          className="reveal font-display font-extrabold uppercase leading-none"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            letterSpacing: "-0.01em",
            transitionDelay: "0.05s",
          }}
        >
          <span className="bg-gradient-to-r from-[#4B8BC8] via-[#F2F2EE] to-[#C8A951] bg-clip-text text-transparent">
            Ready to Own Soccer
            <br />
            In Your City?
          </span>
        </h2>

        <p
          className="reveal mx-auto mb-12 mt-8 max-w-xl text-sm leading-relaxed text-[#8896B0] sm:text-base"
          style={{ transitionDelay: "0.1s" }}
        >
          The World Cup starts in June 2026. The bars that start now will be the
          ones that win. Let&apos;s get your bar on the map.
        </p>

        <div
          className="reveal flex flex-wrap justify-center gap-4"
          style={{ transitionDelay: "0.15s" }}
        >
          <GlassEffect href="https://calendly.com/fourfourtwo-sales/30min" tintColor="rgba(75,139,200,0.18)" className="border border-brand-blue/40 hover:border-brand-blue/70">
            <span className="block px-10 py-4 text-sm uppercase tracking-[0.15em] text-[#F2F2EE]">
              Book a Free Strategy Call &rarr;
            </span>
          </GlassEffect>
          <GlassEffect href="mailto:fourfourtwo.sales@gmail.com" tintColor="rgba(75,139,200,0.18)" className="border border-brand-blue/40 hover:border-brand-blue/70">
            <span className="block px-10 py-4 text-sm uppercase tracking-[0.15em] text-[#F2F2EE]">
              fourfourtwo.sales@gmail.com
            </span>
          </GlassEffect>
        </div>
      </div>
    </section>
  );
}
