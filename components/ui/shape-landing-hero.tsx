"use client";

import { motion } from "motion/react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

function HeroGeometric({
  badge = "Premier League Marketing — World Cup 2026",
  title1 = "Make Your Bar The",
  title2 = "Soccer Destination.",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
  });

  return (
    <div className="relative w-full overflow-hidden bg-[#080C18] pb-0 pt-32 md:pt-40">
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, #4B8BC8 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[-8%] top-[20%] h-[400px] w-[400px] rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle, #C8A951 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-8 inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-3 py-1.5">
            <Circle className="h-1.5 w-1.5 fill-brand-gold text-brand-gold" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8896B0]">
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-display font-extrabold uppercase leading-none tracking-tight"
            style={{
              fontSize: "clamp(3.2rem, 9vw, 8rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
            }}
          >
            <span className="text-[#F2F2EE]">{title1}</span>
            <br />
            <span className="bg-gradient-to-r from-[#4B8BC8] via-[#F2F2EE]/90 to-[#C8A951] bg-clip-text text-transparent">
              {title2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.4)}
            className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-[#8896B0] sm:text-lg"
          >
            The 2026 World Cup begins in June. We help bars build their soccer
            identity through Premier League advertising &mdash; starting now.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-brand-blue px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#3a74b0]"
            >
              Book a Free Call &rarr;
            </Link>
            <Link
              href="/services"
              className="border border-white/[0.12] bg-white/[0.03] px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-[#F2F2EE] transition-colors hover:border-white/[0.25]"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Product mockup panel */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative mx-auto mt-16 w-full max-w-4xl",
            "border border-white/[0.08] bg-white/[0.02]",
            "p-3"
          )}
        >
          {/* Top bar — fake browser chrome */}
          <div className="mb-3 flex items-center gap-1.5 px-1">
            <span className="h-2 w-2 rounded-full bg-white/[0.12]" />
            <span className="h-2 w-2 rounded-full bg-white/[0.12]" />
            <span className="h-2 w-2 rounded-full bg-white/[0.12]" />
            <span className="ml-3 h-4 flex-1 rounded-none bg-white/[0.05] text-center text-[10px] leading-4 tracking-widest text-[#8896B0]/60">
              442 Marketing — Sample Work
            </span>
          </div>

          {/* Work samples grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/work-gameday.jpg"
                alt="442 Marketing — Game Day social post"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/work-schedule.jpg"
                alt="442 Marketing — Premier League weekly schedule"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Bottom label */}
          <div className="mt-3 flex items-center justify-between px-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8896B0]/60">
              Social media samples
            </span>
            <Link
              href="/services"
              className="text-[11px] uppercase tracking-[0.2em] text-brand-blue hover:text-[#F2F2EE] transition-colors"
            >
              View services &rarr;
            </Link>
          </div>
        </motion.div>

        {/* Bottom fade into next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080C18] to-transparent" />
      </div>

      {/* Section bottom padding */}
      <div className="h-24 md:h-32" />
    </div>
  );
}

export { HeroGeometric };
