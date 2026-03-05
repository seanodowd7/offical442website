"use client";

import Link from "next/link";
import { Users, MapPin, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  {
    icon: Users,
    number: "5.1B",
    label: "Global Viewers",
    sub: "watched the last World Cup",
  },
  {
    icon: MapPin,
    number: "11",
    label: "US Host Cities",
    sub: "including LA, New York, Dallas",
  },
  {
    icon: Calendar,
    number: "June '26",
    label: "World Cup Starts",
    sub: "the window to build your audience is now",
  },
];

export function WhyNow() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="border-b border-white/[0.06] py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section label */}
        <p className="reveal mb-5 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
          Why Now
        </p>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Stats */}
          <div className="reveal space-y-4">
            {stats.map(({ icon: Icon, number, label, sub }) => (
              <div
                key={label}
                className="flex items-start gap-5 border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14]"
              >
                <div className="mt-1 flex-shrink-0">
                  <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-display text-4xl font-extrabold uppercase leading-none text-brand-gold">
                    {number}
                  </span>
                  <span className="mt-1 block text-sm font-medium uppercase tracking-[0.15em] text-[#F2F2EE]">
                    {label}
                  </span>
                  <span className="mt-1 block text-xs text-[#8896B0]">{sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Copy */}
          <div className="reveal" style={{ transitionDelay: "0.12s" }}>
            <h2
              className="mb-8 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              The Opportunity
              <br />
              Is Right Now.
            </h2>
            <div className="space-y-5 text-sm leading-relaxed text-[#8896B0] sm:text-base">
              <p>
                Soccer is exploding in America. With the World Cup coming to US
                soil, bars that position themselves as soccer destinations{" "}
                <em className="not-italic text-[#F2F2EE]">today</em> will reap
                the rewards for years.
              </p>
              <p>
                The Premier League is the most-watched sports league among
                Americans aged 18&ndash;34. Every weekend morning, millions of
                fans are looking for somewhere to watch. They need a bar that
                speaks their language.
              </p>
              <p>
                We make sure that bar is{" "}
                <em className="not-italic text-[#F2F2EE]">yours.</em>
              </p>
            </div>
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <Link
                href="/services"
                className="text-sm uppercase tracking-[0.15em] text-brand-blue transition-colors hover:text-[#F2F2EE]"
              >
                See How We Do It &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
