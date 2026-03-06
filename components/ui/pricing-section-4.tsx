"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const plans = [
  {
    name: "Little Kickers",
    price: "$150/mo",
    description: "Perfect for bars just getting started",
    popular: false,
    features: [
      "6 Graphics",
      "Professional captions",
      "TV Guide",
      "Full posting service",
    ],
  },
  {
    name: "Sunday League",
    price: "$200/mo",
    description: "More match coverage, same great service",
    popular: true,
    features: [
      "8 Graphics",
      "Professional captions",
      "TV Guide",
      "Full posting service",
    ],
  },
  {
    name: "Full Professional",
    price: "$250/mo",
    description: "Maximum coverage for bars that want to dominate",
    popular: false,
    features: [
      "10 Graphics",
      "Professional captions",
      "TV Guide",
      "Full posting service",
      "Prematch stories",
    ],
  },
];

export default function PricingSection4() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div
            className={cn(
              "relative flex flex-1 flex-col border p-6",
              plan.popular
                ? "border-brand-blue/40 bg-gradient-to-br from-[#0F1526] via-[#111827] to-[#0F1526] shadow-[0px_-6px_160px_0px_rgba(75,139,200,0.25)]"
                : "border-white/[0.08] bg-gradient-to-br from-[#0A0E1A] via-[#0F1526] to-[#0A0E1A]",
            )}
          >
            <h3 className="mb-3 font-display text-2xl font-bold text-[#F2F2EE]">
              {plan.name}
            </h3>

            <div className="mb-1">
              <span className="font-display text-4xl font-semibold text-[#F2F2EE]">
                {plan.price}
              </span>
            </div>

            <p className="mb-6 text-sm text-[#8896B0]">{plan.description}</p>

            <a href="/contact" className="mb-6 block">
              <button
                className={cn(
                  "w-full py-3.5 text-sm font-medium transition-colors",
                  plan.popular
                    ? "border border-brand-blue/60 bg-gradient-to-t from-brand-blue/80 to-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:opacity-90"
                    : "border border-brand-blue/40 text-[#F2F2EE] hover:border-brand-blue/70 hover:bg-brand-blue/10",
                )}
              >
                Get Started
              </button>
            </a>

            <div className="flex-1 border-t border-white/[0.06] pt-5">
              <ul className="space-y-2.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue/70" />
                    <span className="text-sm text-[#8896B0]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
