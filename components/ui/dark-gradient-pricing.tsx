"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassEffect } from "@/components/ui/liquid-glass";

interface BenefitProps {
  text: string;
  checked: boolean;
}

const Benefit = ({ text, checked }: BenefitProps) => (
  <div className="flex items-center gap-3">
    {checked ? (
      <span className="grid h-4 w-4 flex-shrink-0 place-content-center rounded-full bg-brand-blue text-sm text-white">
        <Check className="h-2.5 w-2.5" />
      </span>
    ) : (
      <span className="grid h-4 w-4 flex-shrink-0 place-content-center rounded-full bg-navy-800 text-sm text-[#8896B0]">
        <X className="h-2.5 w-2.5" />
      </span>
    )}
    <span className="text-sm text-[#8896B0]">{text}</span>
  </div>
);

interface PricingCardProps {
  tier: string;
  price: string;
  bestFor: string;
  CTA: string;
  benefits: Array<{ text: string; checked: boolean }>;
  popular?: boolean;
  className?: string;
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  popular = false,
  className,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)", opacity: 0, y: 16 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
      viewport={{ once: true }}
      className="flex h-full flex-col"
    >
      <div
        className={cn(
          "relative flex flex-1 flex-col overflow-hidden border p-6",
          popular
            ? "border-brand-blue/50 bg-gradient-to-br from-brand-blue/10 to-navy-900/80"
            : "border-white/[0.08] bg-gradient-to-br from-navy-950/60 to-navy-900/80",
          className,
        )}
      >
        {popular && (
          <div className="absolute right-0 top-0 bg-brand-blue px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
            Most Popular
          </div>
        )}

        <div className="flex flex-col items-center border-b border-white/[0.08] pb-6">
          <span className="mb-6 font-display text-lg font-bold uppercase tracking-wider text-[#F2F2EE]">
            {tier}
          </span>
          <span className="mb-3 font-display text-5xl font-extrabold text-[#F2F2EE]">
            {price}
          </span>
          <span className="text-center text-sm text-[#8896B0]">{bestFor}</span>
        </div>

        <div className="flex-1 space-y-4 py-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>

        <GlassEffect href="/contact" tintColor="rgba(75,139,200,0.18)" className="w-full border border-brand-blue/40 hover:border-brand-blue/70">
          <span className="block w-full py-3 text-center text-xs uppercase tracking-[0.15em] text-[#F2F2EE]">
            {CTA}
          </span>
        </GlassEffect>
      </div>
    </motion.div>
  );
};
