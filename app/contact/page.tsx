import type { Metadata } from "next";
import { GlassEffect } from "@/components/ui/liquid-glass";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call with 4-4-2 Marketing and let's turn your bar into a soccer destination before the 2026 World Cup.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="min-h-screen px-6 pb-32 pt-40 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
            Get In Touch
          </p>
          <h1
            className="mb-10 font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
            }}
          >
            Let&apos;s Build
            <br />
            Your Soccer
            <br />
            <span className="text-brand-blue">Bar.</span>
          </h1>

          <p className="mx-auto mb-14 max-w-md leading-relaxed text-[#8896B0]">
            Book a free 30-minute strategy call. No commitment, no pressure.
            Just a conversation about how to make your bar the soccer
            destination in your city.
          </p>

          <div className="flex justify-center">
            <GlassEffect
              href="https://calendly.com/fourfourtwo-sales/30min"
              tintColor="rgba(75,139,200,0.18)"
              className="border border-brand-blue/40 hover:border-brand-blue/70"
            >
              <span className="block px-10 py-4 text-sm uppercase tracking-[0.15em] text-[#F2F2EE]">
                Book a Free Strategy Call &rarr;
              </span>
            </GlassEffect>
          </div>
        </div>
      </section>
    </main>
  );
}
