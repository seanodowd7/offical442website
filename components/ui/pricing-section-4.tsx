"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useState } from "react";

const plans = [
  {
    name: "Little Kickers",
    description: "Perfect for bars just getting started with soccer content",
    price: 150,
    yearlyPrice: 1500,
    buttonText: "Get Started",
    popular: false,
    includes: [
      "What's included:",
      "4 Full Match Schedule posts / month",
      "2 Feature Match posts / month",
      "Professional Captions",
      "Full posting service",
      "OpenTable integration",
      "Meta Ads (Facebook & Instagram)",
    ],
  },
  {
    name: "Sunday League",
    description: "More match coverage, same great service for growing bars",
    price: 200,
    yearlyPrice: 2000,
    buttonText: "Get Started",
    popular: true,
    includes: [
      "Everything in Little Kickers, plus:",
      "4 Feature Match posts / month",
      "Professional captions",
      "Full posting service",
      "OpenTable integration",
      "Meta Ads (Facebook & Instagram)",
    ],
  },
  {
    name: "Full Professional",
    description: "Maximum coverage for bars that want to dominate",
    price: 250,
    yearlyPrice: 2500,
    buttonText: "Get Started",
    popular: false,
    includes: [
      "Everything in Sunday League, plus:",
      "6 Feature Match posts / month",
      "1 Bonus Match post / month",
      "Professional captions",
      "Full posting service",
      "OpenTable integration",
      "Meta Ads (Facebook & Instagram)",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full border border-white/10 bg-[#0A0E1A] p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 h-10 rounded-full px-6 py-2 text-sm font-medium transition-colors",
            selected === "0" ? "text-white" : "text-[#8896B0]",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch"
              className="absolute left-0 top-0 h-10 w-full rounded-full border-2 border-brand-blue bg-gradient-to-t from-brand-blue/80 to-brand-blue shadow-sm shadow-brand-blue/50"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 h-10 rounded-full px-6 py-2 text-sm font-medium transition-colors",
            selected === "1" ? "text-white" : "text-[#8896B0]",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch"
              className="absolute left-0 top-0 h-10 w-full rounded-full border-2 border-brand-blue bg-gradient-to-t from-brand-blue/80 to-brand-blue shadow-sm shadow-brand-blue/50"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-[10px] text-brand-gold">
              2 months free
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);

  return (
    <div>
      <div className="mb-10">
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card
              className={cn(
                "relative h-full text-white",
                plan.popular
                  ? "border-brand-blue/50 bg-gradient-to-br from-[#0F1526] via-[#111827] to-[#0F1526] shadow-[0px_-8px_180px_0px_rgba(75,139,200,0.3)] z-20"
                  : "border-white/[0.08] bg-gradient-to-br from-[#0A0E1A] via-[#0F1526] to-[#0A0E1A] z-10",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-blue px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-white whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-left">
                <h3 className="mb-2 font-display text-2xl font-bold text-[#F2F2EE]">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-[#F2F2EE]">
                    $
                    <NumberFlow value={isYearly ? plan.yearlyPrice : plan.price} />
                  </span>
                  <span className="ml-1 text-sm text-[#8896B0]">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#8896B0]">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <a href="/contact">
                  <button
                    className={cn(
                      "mb-6 w-full rounded-xl p-3.5 text-sm font-medium transition-colors",
                      plan.popular
                        ? "border border-brand-blue/60 bg-gradient-to-t from-brand-blue/80 to-brand-blue text-white shadow-lg shadow-brand-blue/30 hover:from-brand-blue hover:to-brand-blue/80"
                        : "border border-white/10 bg-gradient-to-t from-[#0A0E1A] to-[#1E2A4A] text-[#F2F2EE] shadow-sm hover:border-white/20",
                    )}
                  >
                    {plan.buttonText}
                  </button>
                </a>

                <div className="space-y-2.5 border-t border-white/[0.06] pt-5">
                  <h4 className="mb-3 text-sm font-medium text-[#F2F2EE]">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2.5">
                    {plan.includes.slice(1).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue/70" />
                        <span className="text-sm text-[#8896B0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
