"use client";

import { Megaphone, Send, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    number: "01",
    icon: Megaphone,
    title: "We Create Your Content",
    desc: "Custom-branded match graphics, Premier League schedule posts, and event promotions — tailored to your bar.",
  },
  {
    number: "02",
    icon: Send,
    title: "We Schedule & Post",
    desc: "We handle publishing across all your social channels on optimal days and times, so you never have to think about it.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "You Fill the Bar",
    desc: "Targeted Meta ads bring local soccer fans through your door, building a loyal crowd match after match.",
  },
];

export function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="border-b border-t border-white/[0.06] bg-white/[0.015] py-32 lg:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
            The Process
          </p>
          <h2
            className="font-display font-bold uppercase leading-tight text-[#F2F2EE]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Simple. Fast.
            <br />
            Effective.
          </h2>
        </div>

        {/* Step cards */}
        <div
          className="reveal grid grid-cols-1 gap-4 sm:grid-cols-3"
          style={{ transitionDelay: "0.1s" }}
        >
          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div
              key={number}
              className="border border-white/[0.08] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.14]"
            >
              <div className="mb-6 flex items-start justify-between">
                <Icon className="h-6 w-6 text-brand-blue" strokeWidth={1.5} />
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8896B0]/40">
                  {number}
                </span>
              </div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-[#F2F2EE]">
                {title}
              </p>
              <p className="text-xs leading-relaxed text-[#8896B0]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
