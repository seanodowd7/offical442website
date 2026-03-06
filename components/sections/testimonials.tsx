"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const quotes = [
  {
    quote:
      "We went from zero soccer presence to having a packed house for every Premier League weekend. The content looks incredibly professional. Our regulars can't believe we do it ourselves.",
    name: "Mike R.",
    role: "Owner",
    bar: "The Anchor Sports Bar, Chicago",
    initial: "M",
  },
  {
    quote:
      "I didn't know anything about soccer before 4-4-2 came in. Now we're the go-to spot in our neighborhood. The World Cup can't come soon enough. We'll be ready.",
    name: "Dana K.",
    role: "General Manager",
    bar: "Field & Tap, Austin",
    initial: "D",
  },
];

export function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="border-b border-white/[0.06] py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
            What Bars Say
          </p>
          <h2
            className="font-display font-bold uppercase leading-tight text-[#F2F2EE]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Results That Speak
            <br />
            For Themselves.
          </h2>
        </div>

        {/* Quote cards */}
        <div
          className="reveal grid grid-cols-1 gap-4 lg:grid-cols-2"
          style={{ transitionDelay: "0.1s" }}
        >
          {quotes.map(({ quote, name, role, bar, initial }) => (
            <div
              key={name}
              className="flex flex-col justify-between border border-white/[0.08] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.14]"
            >
              {/* Quote mark */}
              <div className="mb-6 font-serif text-5xl leading-none text-brand-gold/40">&ldquo;</div>

              <blockquote className="flex-1 font-serif text-base italic leading-relaxed text-[#C8C8C0]">
                {quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-brand-blue/20 font-display text-sm font-bold uppercase text-brand-blue">
                  {initial}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F2F2EE]">{name}</p>
                  <p className="text-xs text-[#8896B0]">
                    {role}, {bar}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="reveal mt-6 text-xs text-[#8896B0]/60"
          style={{ transitionDelay: "0.2s" }}
        >
          * Testimonials are representative of expected results. Replace with real client quotes.
        </p>
      </div>
    </section>
  );
}
