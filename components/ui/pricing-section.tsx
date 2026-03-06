"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheck, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  checked: boolean;
}

interface PricingCardProps {
  tier: string;
  price: string;
  bestFor: string;
  cta: string;
  href: string;
  features: PricingFeature[];
  popular?: boolean;
}

const pricingData: PricingCardProps[] = [
  {
    tier: "Little Kickers",
    price: "$150/mo",
    bestFor: "Perfect for bars just getting started",
    cta: "Get Started",
    href: "/contact",
    popular: false,
    features: [
      { text: "4 Full Match Schedule posts / month", checked: true },
      { text: "2 Feature Match posts / month", checked: true },
      { text: "Professional Captions included", checked: true },
      { text: "Full posting service", checked: true },
      { text: "OpenTable integration", checked: true },
      { text: "Meta Ads (Facebook & Instagram)", checked: true },
      { text: "1 Bonus Match post / month", checked: false },
    ],
  },
  {
    tier: "Sunday League",
    price: "$200/mo",
    bestFor: "More match coverage, same great service",
    cta: "Get Started",
    href: "/contact",
    popular: true,
    features: [
      { text: "4 Full Match Schedule posts / month", checked: true },
      { text: "4 Feature Match posts / month", checked: true },
      { text: "Professional captions included", checked: true },
      { text: "Full posting service", checked: true },
      { text: "OpenTable integration", checked: true },
      { text: "Meta Ads (Facebook & Instagram)", checked: true },
      { text: "1 Bonus Match post / month", checked: false },
    ],
  },
  {
    tier: "Full Professional",
    price: "$250/mo",
    bestFor: "Maximum coverage for bars that want to dominate",
    cta: "Get Started",
    href: "/contact",
    popular: false,
    features: [
      { text: "4 Full Match Schedule posts / month", checked: true },
      { text: "6 Feature Match posts / month", checked: true },
      { text: "Professional captions included", checked: true },
      { text: "Full posting service", checked: true },
      { text: "OpenTable integration", checked: true },
      { text: "Meta Ads (Facebook & Instagram)", checked: true },
      { text: "1 Bonus Match post / month", checked: true },
    ],
  },
];

function PricingCard({ tier, price, bestFor, cta, href, features, popular }: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col border p-6 text-left",
        popular
          ? "border-brand-blue/50 bg-gradient-to-br from-brand-blue/10 to-[#0F1526]/80"
          : "border-white/[0.08] bg-gradient-to-br from-[#080C18]/60 to-[#0F1526]/80",
      )}
      aria-label={`${tier} plan`}
    >
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            className={cn(
              "px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] font-semibold",
              popular
                ? "bg-brand-blue text-white"
                : "border border-white/20 text-[#8896B0]",
            )}
          >
            {tier}
          </span>
          {popular && (
            <span className="bg-brand-blue/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-brand-blue border border-brand-blue/30">
              Most Popular
            </span>
          )}
        </div>
        <p className="mb-1 font-display text-5xl font-extrabold text-[#F2F2EE]">
          {price}
        </p>
        <p className="text-sm text-[#8896B0]">{bestFor}</p>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-3 py-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            {feature.checked ? (
              <CircleCheck className="h-4 w-4 flex-shrink-0 text-brand-blue" aria-hidden />
            ) : (
              <Circle className="h-4 w-4 flex-shrink-0 text-white/20" aria-hidden />
            )}
            <span className={feature.checked ? "text-[#8896B0]" : "text-white/25 line-through"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href={href} className="mt-auto block">
        <button
          className={cn(
            "w-full py-3 text-xs uppercase tracking-[0.15em] transition-colors",
            popular
              ? "bg-brand-blue text-white hover:bg-brand-blue/90"
              : "border border-brand-blue/40 text-[#F2F2EE] hover:border-brand-blue/70 hover:bg-brand-blue/10",
          )}
        >
          {cta}
        </button>
      </Link>
    </div>
  );
}

export default function PricingSection() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {pricingData.map((plan) => (
        <PricingCard key={plan.tier} {...plan} />
      ))}
    </div>
  );
}
