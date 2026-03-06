import type { Metadata } from "next";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for 4-4-2 Marketing. Choose the package that fits your bar. No long-term contracts, cancel anytime.",
};

const tiers = [
  {
    tier: "Little Kickers",
    price: "$150/mo",
    bestFor: "Perfect for bars just getting started",
    CTA: "Get Started",
    popular: false,
    benefits: [
      { text: "4 Full Match Schedule posts / month", checked: true },
      { text: "2 Feature Match posts / month", checked: true },
      { text: "Professional Captions included", checked: true },
      { text: "Full posting service", checked: true },
      { text: "OpenTable integration", checked: true },
      { text: "Targeted Meta Ad Campaigns", checked: true },
      { text: "1 Bonus Match post / month", checked: false },
    ],
  },
  {
    tier: "Sunday League",
    price: "$200/mo",
    bestFor: "More match coverage, same great service",
    CTA: "Get Started",
    popular: false,
    benefits: [
      { text: "4 Full Match Schedule posts / month", checked: true },
      { text: "4 Feature Match posts / month", checked: true },
      { text: "Professional captions included", checked: true },
      { text: "Full posting service", checked: true },
      { text: "OpenTable integration", checked: true },
      { text: "Targeted Meta Ad Campaigns", checked: true },
      { text: "1 Bonus Match post / month", checked: false },
    ],
  },
  {
    tier: "Full Professional",
    price: "$250/mo",
    bestFor: "Maximum coverage for bars that want to dominate",
    CTA: "Get Started",
    popular: false,
    benefits: [
      { text: "4 Full Match Schedule posts / month", checked: true },
      { text: "6 Feature Match posts / month", checked: true },
      { text: "Professional captions included", checked: true },
      { text: "Full posting service", checked: true },
      { text: "OpenTable integration", checked: true },
      { text: "Targeted Meta Ad Campaigns", checked: true },
      { text: "1 Bonus Match post / month", checked: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="min-h-screen px-6 pb-32 pt-40 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-brand-gold">
              Investment
            </p>
            <h1
              className="mb-6 font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "-0.01em",
                lineHeight: 0.9,
              }}
            >
              Package Pricing
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#8896B0] sm:text-base">
              Choose what fits you. All packages are totally customizable and
              include professional design and writing, plus direct posting on
              your social channels to save you time. We highly recommend
              starting with Premier League content today and shifting into World
              Cup content as the tournament approaches.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <PricingCard key={tier.tier} {...tier} />
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-10 text-center text-xs text-[#8896B0]/60">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
