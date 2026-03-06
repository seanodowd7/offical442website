"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function WorldCupSpotlight() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="border-b border-white/[0.06] py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <div className="reveal">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
              World Cup 2026
            </p>
            <h2
              className="mb-8 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              The Biggest Event
              <br />
              In Sports Is Coming
              <br />
              <span className="text-brand-blue">To America.</span>
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-[#8896B0] sm:text-base">
              <p>
                For the first time since 1994, the FIFA World Cup comes to the
                United States. Forty-eight nations. Over sixty matches. A global
                audience of 5+ billion, and millions of those fans will be
                right here in America, looking for the perfect bar to watch.
              </p>
              <p>
                The bars that win the World Cup won&apos;t be the ones who
                scramble in June. They&apos;ll be the ones who spent the last
                season building a soccer community through Premier League, through
                social media, through smart local marketing.{" "}
                <span className="text-[#F2F2EE]">That window is now.</span>
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block bg-brand-blue px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#3a74b0]"
              >
                Get Started &rarr;
              </Link>
              <Link
                href="/services"
                className="inline-block border border-white/[0.10] px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-[#F2F2EE] transition-colors hover:border-white/[0.22]"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="reveal" style={{ transitionDelay: "0.12s" }}>
            <div className="border border-white/[0.08]">
              <Image
                src="https://images.unsplash.com/photo-1540747913346-19212a4a745d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Packed soccer stadium, World Cup atmosphere"
                width={900}
                height={680}
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                loading="lazy"
              />
            </div>

            {/* Stat strip below image */}
            <div className="grid grid-cols-3 divide-x divide-white/[0.06] border border-t-0 border-white/[0.08]">
              {[
                { num: "48", label: "Nations" },
                { num: "60+", label: "Matches" },
                { num: "11", label: "US Cities" },
              ].map(({ num, label }) => (
                <div key={label} className="bg-white/[0.02] px-4 py-4 text-center">
                  <span className="block font-display text-2xl font-extrabold uppercase text-brand-gold">
                    {num}
                  </span>
                  <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-[#8896B0]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
