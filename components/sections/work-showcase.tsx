"use client";

import Image from "next/image";
import { Megaphone, BarChart2, CalendarDays } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Megaphone,
    title: "Social Media Content",
    desc: "Match-day graphics, weekly schedules, and branded posts — delivered every week.",
  },
  {
    icon: CalendarDays,
    title: "Event Promotion",
    desc: "Promote viewing parties, specials, and big match nights to drive foot traffic.",
  },
  {
    icon: BarChart2,
    title: "Targeted Ads",
    desc: "Meta campaigns targeted at local soccer fans — putting your bar in front of the right crowd.",
  },
];

export function WorkShowcase() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="border-b border-t border-white/[0.06] bg-white/[0.015] py-32 lg:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
            The Product
          </p>
          <h2
            className="font-display font-bold uppercase leading-tight text-[#F2F2EE]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
          >
            What Your Bar Gets
            <br />
            Every Week.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[#8896B0] sm:text-base">
            Professional, custom-branded graphics delivered to your social media
            &mdash; so your bar looks like a true soccer destination before every
            match.
          </p>
        </div>

        {/* Work samples */}
        <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="group relative overflow-hidden border border-white/[0.08]">
            <Image
              src="/images/work-gameday.jpg"
              alt="Sample match day graphic — Arsenal vs Man United"
              width={800}
              height={600}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="border-t border-white/[0.06] bg-white/[0.02] px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F2F2EE]">
                Match Day Graphics
              </p>
              <p className="mt-1 text-xs text-[#8896B0]">
                Branded with your bar&apos;s logo, location &amp; drink specials
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden border border-white/[0.08]">
            <Image
              src="/images/work-schedule.jpg"
              alt="Sample Premier League weekly schedule graphic"
              width={800}
              height={600}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="border-t border-white/[0.06] bg-white/[0.02] px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F2F2EE]">
                Weekly Schedules
              </p>
              <p className="mt-1 text-xs text-[#8896B0]">
                Premier League fixture graphics with your branding, every week
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div
          className="reveal mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          style={{ transitionDelay: "0.12s" }}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14]"
            >
              <Icon className="mb-4 h-5 w-5 text-brand-blue" strokeWidth={1.5} />
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.12em] text-[#F2F2EE]">
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
