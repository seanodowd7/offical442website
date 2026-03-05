"use client";

import { CreativePricing, PricingTier } from "@/components/ui/creative-pricing";
import { Shield, Trophy, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tiers: PricingTier[] = [
  {
    name: "Little Kickers",
    icon: <Shield className="h-6 w-6" />,
    price: 150,
    description: "Perfect for bars just getting started with soccer marketing.",
    accentColor: "#4B8BC8",
    features: [
      "4 Full Match Schedule posts / month",
      "2 Feature Match posts / month",
      "Professional captions included",
      "Full posting service",
      "OpenTable integration",
      "Targeted Meta Ad Campaigns",
    ],
  },
  {
    name: "Sunday League",
    icon: <Trophy className="h-6 w-6" />,
    price: 200,
    description: "Our most popular plan — more match coverage, same great service.",
    accentColor: "#C8A951",
    popular: true,
    features: [
      "4 Full Match Schedule posts / month",
      "4 Feature Match posts / month",
      "Professional captions included",
      "Full posting service",
      "OpenTable integration",
      "Targeted Meta Ad Campaigns",
    ],
  },
  {
    name: "Full Professional",
    icon: <Star className="h-6 w-6" />,
    price: 250,
    description: "Maximum coverage for bars that want to dominate their market.",
    accentColor: "#22C55E",
    features: [
      "4 Full Match Schedule posts / month",
      "6 Feature Match posts / month",
      "1 Bonus Match post / month",
      "Professional captions included",
      "Full posting service",
      "OpenTable integration",
      "Targeted Meta Ad Campaigns",
    ],
  },
];

export function PricingSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="border-b border-navy-800 py-32 lg:py-44">
      <div className="reveal">
        <CreativePricing
          tag="Simple Pricing"
          title="Pick Your Plan"
          description=""
          tiers={tiers}
        />
      </div>
    </section>
  );
}
