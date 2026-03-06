import type { Metadata } from "next";
import PricingSection4 from "@/components/ui/pricing-section-4";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for 4-4-2 Marketing. Choose the package that fits your bar. No long-term contracts, cancel anytime.",
};

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
          <PricingSection4 />

          {/* Footer note */}
          <p className="mt-10 text-center text-xs text-[#8896B0]/60">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
