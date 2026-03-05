"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element becomes 8% visible, the `.visible` class is added,
 * triggering the `.reveal` CSS animation defined in globals.css.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   return <section ref={ref} className="reveal">...</section>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe the root element and all .reveal children inside it
    if (el.classList.contains("reveal")) {
      observer.observe(el);
    }
    el.querySelectorAll<HTMLElement>(".reveal").forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
