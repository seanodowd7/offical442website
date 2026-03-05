"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  /** Hex color string for the icon and price accent, e.g. "#22C55E" */
  accentColor: string;
}

function CreativePricing({
  tag = "Simple Pricing",
  title = "Pick Your Plan",
  description = "No contracts. Cancel anytime.",
  tiers,
}: {
  tag?: string;
  title?: string;
  description?: string;
  tiers: PricingTier[];
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {/* Section header */}
      <div className="mb-16 space-y-4 text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-[#8896B0]">
          {tag}
        </p>
        <h2
          className="font-display font-extrabold uppercase text-[#F2F2EE]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
        >
          {title}
        </h2>
        <p className="text-[#8896B0]">{description}</p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={cn(
              "relative group transition-all duration-300",
              index === 0 && "md:rotate-[-1deg]",
              index === 1 && "md:rotate-[1deg]",
              index === 2 && "md:rotate-[-1deg]"
            )}
          >
            {/* Card shadow layer */}
            <div
              className={cn(
                "absolute inset-0 rounded-xl",
                "bg-[#0F1526]",
                "border border-[#2A3A5E]",
                "shadow-[4px_4px_0px_0px] shadow-brand-blue/30",
                "transition-all duration-300",
                "group-hover:shadow-[8px_8px_0px_0px] group-hover:shadow-brand-blue/40",
                "group-hover:-translate-x-1 group-hover:-translate-y-1"
              )}
            />

            {/* Card content */}
            <div className="relative p-6 lg:p-7">
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -right-2 -top-2 rotate-12 rounded-full border-2 border-brand-blue bg-brand-blue px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Popular
                </div>
              )}

              {/* Icon + name */}
              <div className="mb-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#2A3A5E]"
                  style={{ color: tier.accentColor }}
                >
                  {tier.icon}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[#F2F2EE]">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-[#8896B0]">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 border-t border-[#1E2A4A] pt-6">
                <span
                  className="font-display text-lg font-bold"
                  style={{ color: tier.accentColor }}
                >
                  $
                </span>
                <span
                  className="font-display font-extrabold"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                    lineHeight: 1,
                    color: tier.accentColor,
                  }}
                >
                  {tier.price}
                </span>
                <span className="ml-1 text-sm text-[#8896B0]">/mo</span>
              </div>

              {/* Feature list */}
              <div className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ color: tier.accentColor }}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm leading-relaxed text-[#F2F2EE]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <Button
                asChild
                className={cn(
                  "h-12 w-full font-display text-base font-bold uppercase tracking-widest",
                  "border border-[#2A3A5E]",
                  "shadow-[3px_3px_0px_0px] shadow-brand-blue/25",
                  "transition-all duration-300",
                  "hover:shadow-[5px_5px_0px_0px] hover:shadow-brand-blue/40",
                  "hover:-translate-x-0.5 hover:-translate-y-0.5",
                  tier.popular
                    ? "bg-brand-blue text-white hover:bg-[#3a74b0]"
                    : "bg-[#080C18] text-[#F2F2EE] hover:bg-[#0F1526]"
                )}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CreativePricing };
