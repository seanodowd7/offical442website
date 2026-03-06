"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheck, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
        "flex flex-col rounded-lg border p-6 text-left",
        popular
          ? "border-brand-blue shadow-lg shadow-brand-blue/10 ring-1 ring-brand-blue/20 bg-[#0F1526]"
          : "border-white/[0.08] bg-[#0F1526]/60",
      )}
      aria-label={`${tier} plan`}
    >
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2">
          <Badge
            variant={popular ? "default" : "secondary"}
            className={cn(
              "rounded-full text-[10px] uppercase tracking-[0.15em]",
              popular
                ? "bg-brand-blue text-white border-brand-blue hover:bg-brand-blue/90"
                : "bg-white/[0.06] text-[#8896B0] border-white/10 hover:bg-white/[0.08]",
            )}
          >
            {tier}
          </Badge>
          {popular && (
            <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-[10px] font-medium text-brand-blue border border-brand-blue/20">
              Most Popular
            </span>
          )}
        </div>

        <p className="mb-2 mt-4 font-display text-4xl font-extrabold text-[#F2F2EE]">
          {price}
        </p>
        <p className="text-sm text-[#8896B0]">{bestFor}</p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-white/[0.08]" />

      {/* Features */}
      <ul className="flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm">
            {feature.checked ? (
              <CircleCheck className="h-4 w-4 flex-shrink-0 text-brand-blue" aria-hidden />
            ) : (
              <Circle className="h-4 w-4 flex-shrink-0 text-white/15" aria-hidden />
            )}
            <span className={cn(feature.checked ? "text-[#8896B0]" : "text-white/20 line-through")}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-6 pt-2">
        <Link href={href}>
          <button
            className={cn(
              "w-full rounded-md py-2.5 text-sm font-medium transition-colors",
              popular
                ? "bg-brand-blue text-white hover:bg-brand-blue/90"
                : "border border-white/10 bg-white/[0.04] text-[#F2F2EE] hover:bg-white/[0.08]",
            )}
          >
            {cta}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
      {pricingData.map((plan) => (
        <PricingCard key={plan.tier} {...plan} />
      ))}
    </div>
  );
}
