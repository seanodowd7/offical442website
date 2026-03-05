"use client";

import {
  BarChart2,
  CalendarDays,
  Globe,
  Megaphone,
  Trophy,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// 442 Marketing — GlowingEffect integration
//
// Applied to:
//  1. Service cards grid ("What Your Bar Gets")
//  2. "How It Works" process steps
//  3. Stats / Why-Now figures
//  4. World Cup spotlight card
//  5. Testimonial cards
// ─────────────────────────────────────────────────────────────────────────────

// ── 1. SERVICES GRID ─────────────────────────────────────────────────────────

export function ServicesGlowGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
      <ServiceCard
        area="md:[grid-area:1/1/2/7]"
        icon={<CalendarDays className="h-4 w-4" />}
        label="01"
        title="Weekly Content"
        description="Custom match day posters and Premier League schedule graphics, branded with your bar's identity and specials — delivered every week, ready to post."
      />
      <ServiceCard
        area="md:[grid-area:1/7/2/13]"
        icon={<Megaphone className="h-4 w-4" />}
        label="02"
        title="Event Promotion"
        description="Watch party campaigns, happy hour promotions, and local outreach to get soccer fans through your door on match day mornings and afternoons."
      />
      <ServiceCard
        area="md:[grid-area:2/1/3/5]"
        icon={<BarChart2 className="h-4 w-4" />}
        label="03"
        title="Digital Advertising"
        description="Geo-targeted paid ads reaching soccer fans within miles of your bar — so when the Premier League is on, they think of you first."
      />
      <ServiceCard
        area="md:[grid-area:2/5/3/13]"
        icon={<Trophy className="h-4 w-4" />}
        label="04"
        title="World Cup Build-Up"
        description="Aggressive pre-tournament campaigns to establish your bar as the soccer destination before the 2026 World Cup begins in June — the biggest sporting event on earth, on US soil."
      />
    </ul>
  );
}

interface ServiceCardProps {
  area: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}

function ServiceCard({ area, icon, label, title, description }: ServiceCardProps) {
  return (
    <li className={cn("min-h-[12rem] list-none", area)}>
      <div className="relative h-full rounded-none border border-[#1E2A4A] p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden bg-[#0F1526] p-6">
          {/* Icon chip */}
          <div className="w-fit border border-[#1E2A4A] bg-[#080C18] p-2 text-[#8896B0]">
            {icon}
          </div>
          <div className="space-y-3">
            {/* Gold number */}
            <span
              className="block font-serif text-3xl text-[#C8A951]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              {label}
            </span>
            <h3
              className="text-xl font-bold uppercase tracking-wide text-[#F2F2EE]"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#8896B0]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

// ── 2. HOW IT WORKS — PROCESS STEPS ──────────────────────────────────────────

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative border border-[#1E2A4A] p-2">
      <GlowingEffect
        spread={30}
        glow={true}
        disabled={false}
        proximity={48}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative bg-[#0F1526] px-8 py-10">
        <span
          className="block text-2xl text-[#C8A951]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {number}
        </span>
        <h3
          className="mt-3 text-2xl font-bold uppercase text-[#F2F2EE]"
          style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#8896B0]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HowItWorksGlow() {
  return (
    <div className="space-y-3">
      <ProcessStep
        number="01"
        title="Consult"
        description="We start with a free strategy call to understand your bar, your market, and your goals. We'll map out exactly how to position you as the go-to soccer destination in your area."
      />
      <ProcessStep
        number="02"
        title="Strategy"
        description="We build your content calendar, design your branded templates, and set up your advertising — all done-for-you. You focus on running your bar; we handle making it famous for soccer."
      />
      <ProcessStep
        number="03"
        title="Launch"
        description="Your bar goes live as a soccer destination — weekly match day content, social ads running, and a growing community of fans making your place their home base every match day."
      />
    </div>
  );
}

// ── 3. STATS / WHY-NOW FIGURES ────────────────────────────────────────────────

interface StatCardProps {
  figure: string;
  description: string;
}

export function StatCard({ figure, description }: StatCardProps) {
  return (
    <div className="relative border border-[#1E2A4A] p-2">
      <GlowingEffect
        spread={35}
        glow={true}
        disabled={false}
        proximity={48}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative bg-[#080C18] px-6 py-8">
        <span
          className="block text-[#C8A951]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1,
          }}
        >
          {figure}
        </span>
        <p className="mt-3 text-sm leading-relaxed text-[#8896B0]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function WhyNowStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatCard
        figure="5.1 Billion"
        description="people watched the 2022 FIFA World Cup — the most-watched event in sporting history."
      />
      <StatCard
        figure="11 US Cities"
        description="will host 2026 World Cup matches — including New York, Los Angeles, and Dallas."
      />
      <StatCard
        figure="June 2026"
        description="the tournament begins. The bars that own soccer now will own the World Cup crowd."
      />
    </div>
  );
}

// ── 4. WORLD CUP SPOTLIGHT CARD ───────────────────────────────────────────────

export function WorldCupCard() {
  return (
    <div className="relative border border-[#1E2A4A] p-2">
      <GlowingEffect
        spread={50}
        glow={true}
        disabled={false}
        proximity={80}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative overflow-hidden bg-[#0F1526]">
        <img
          src="https://images.unsplash.com/photo-1540747913346-19212a4a745d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Soccer fans celebrating at the World Cup"
          className="h-72 w-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="px-8 py-10">
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-[#4B8BC8]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#8896B0]">
              World Cup 2026
            </span>
          </div>
          <h3
            className="mt-4 text-[#F2F2EE]"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            The Biggest Event In Sports Is Coming{" "}
            <span className="text-[#4B8BC8]">To America.</span>
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#8896B0]">
            For the first time since 1994, the FIFA World Cup comes to the United
            States. 48 nations. 60+ matches. 5+ billion viewers. The bars that
            build their soccer identity now will own the World Cup crowd.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── 5. TESTIMONIAL CARDS ──────────────────────────────────────────────────────

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  variant?: "dark" | "surface";
}

export function TestimonialCard({
  quote,
  name,
  role,
  variant = "dark",
}: TestimonialCardProps) {
  return (
    <div className="relative border border-[#1E2A4A] p-2">
      <GlowingEffect
        spread={30}
        glow={true}
        disabled={false}
        proximity={48}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div
        className={cn(
          "relative p-10 lg:p-14",
          variant === "dark" ? "bg-[#080C18]" : "bg-[#0F1526]"
        )}
      >
        <p
          className="leading-relaxed text-[#F2F2EE]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            fontStyle: "italic",
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-8">
          <p className="text-sm font-medium text-[#F2F2EE]">{name}</p>
          <p className="mt-1 text-xs text-[#8896B0]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsGlow() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <TestimonialCard
        quote="We went from zero soccer nights to packed watch parties in six weeks. The custom graphics alone made us look like a proper Premier League pub. Weekend revenue is up 30%."
        name="Marcus T."
        role="Owner, The Anchor Bar — Chicago, IL"
        variant="dark"
      />
      <TestimonialCard
        quote="The weekly Premier League schedule posts do all the work for us. Customers know to come in on Saturday mornings now. 442 turned soccer into a real, consistent revenue stream."
        name="Sarah K."
        role="Manager, Draft House — Nashville, TN"
        variant="surface"
      />
    </div>
  );
}
