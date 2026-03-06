"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/[0.08] bg-navy-950/60 px-1 py-1 backdrop-blur-sm",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab !== null && activeTab === item.name;

        return (
          <Link
            key={item.name}
            href={item.url}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "relative cursor-pointer rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors",
              isActive ? "text-[#F2F2EE]" : "text-[#8896B0] hover:text-[#F2F2EE]"
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            <span className="md:hidden">
              <Icon size={16} strokeWidth={2} />
            </span>
            {isActive && (
              <motion.div
                layoutId="tubelight-lamp"
                className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              >
                {/* Tubelight glow effect */}
                <div className="absolute -top-2 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-t-full bg-brand-blue">
                  <div className="absolute -left-2 -top-2 h-5 w-12 rounded-full bg-brand-blue/20 blur-md" />
                  <div className="absolute -top-1 left-0 h-4 w-8 rounded-full bg-brand-blue/20 blur-sm" />
                  <div className="absolute left-2 top-0 h-3 w-4 rounded-full bg-brand-blue/30 blur-sm" />
                </div>
              </motion.div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
