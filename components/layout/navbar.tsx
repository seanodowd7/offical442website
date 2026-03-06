"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { Briefcase, Tag, Users, Mail, LayoutGrid } from "lucide-react";

const navItems = [
  { name: "Services", url: "/#services", icon: LayoutGrid },
  { name: "Our Work", url: "/#our-work", icon: Briefcase },
  { name: "Pricing",  url: "/#pricing",  icon: Tag },
  { name: "About",    url: "/#about",    icon: Users },
  { name: "Contact",  url: "/#contact",  icon: Mail },
];

const mobileLinks = navItems;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        ref={navbarRef}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] transition-all duration-300",
          scrolled ? "bg-navy-950/97 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="4-4-2 Marketing"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop — tubelight pill nav */}
          <div className="hidden md:flex">
            <TubelightNavBar items={navItems} />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col gap-[6px] p-2 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block h-px w-6 origin-center bg-[#F2F2EE] transition-all duration-300",
                menuOpen && "translate-x-[5px] translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-[#F2F2EE] transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px origin-center bg-[#F2F2EE] transition-all duration-300",
                menuOpen
                  ? "w-6 translate-x-[5px] -translate-y-[5px] -rotate-45"
                  : "w-4"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy-950 transition-all duration-300",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-col items-center gap-8 text-center">
          {mobileLinks.map(({ name, url }) => (
            <li key={url}>
              <Link
                href={url}
                onClick={closeMenu}
                className="font-display text-5xl font-bold uppercase tracking-widest text-[#F2F2EE] transition-colors hover:text-brand-blue"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
