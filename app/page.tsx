import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { ScrollRevealWrapper } from "@/components/ui/scroll-reveal-wrapper";
import { GlassEffect } from "@/components/ui/liquid-glass";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <ServicesSection />

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-navy-800 px-6 py-28 lg:px-10 lg:py-36"
      >
        <ScrollRevealWrapper>
          <div className="mx-auto max-w-3xl">
            <div className="reveal">
              <span className="mb-6 inline-block border border-brand-blue bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                Our Story
              </span>
              <h2
                className="mb-16 font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 0.9,
                }}
              >
                About
                <br />
                <span className="text-brand-blue">4-4-2</span>
              </h2>
              <div className="space-y-8 text-lg leading-relaxed text-[#8896B0]">
                <p>
                  4-4-2 is a soccer-first marketing agency built for bars. We exist
                  to turn ordinary venues into the go-to soccer destinations in their
                  city, before the biggest sporting event in the world arrives on
                  American soil.
                </p>
                <p>
                  We provide a blend of soccer knowledge and advertising expertise.
                  From early morning Premier League kickoffs to Champions League nights,
                  we know what gets fans through the door. We help bars and restaurants
                  turn those matches into real matchday atmospheres through simple,
                  consistent marketing.
                </p>
                <p>
                  When the 2026 World Cup was awarded to the United States, everything
                  clicked. America is on the verge of a soccer explosion. Bars are
                  perfectly positioned to be at the center of it. Most just
                  don&apos;t know how yet. That&apos;s exactly the gap we fill.
                </p>
              </div>
            </div>
          </div>
        </ScrollRevealWrapper>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-navy-800 px-6 py-28 lg:px-10 lg:py-36"
      >
        <ScrollRevealWrapper>
          <div className="mx-auto max-w-3xl">
            <div className="reveal">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
                Get In Touch
              </p>
              <h2
                className="mb-10 font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 0.9,
                }}
              >
                Let&apos;s Build
                <br />
                Your Soccer
                <br />
                <span className="text-brand-blue">Bar.</span>
              </h2>
              <p className="mb-14 max-w-md leading-relaxed text-[#8896B0]">
                Book a free 30-minute strategy call. No commitment, no pressure.
                Just a conversation about how to make your bar the soccer
                destination in your city.
              </p>
              <div className="flex justify-start">
                <GlassEffect
                  href="https://calendly.com/fourfourtwo-sales/30min"
                  tintColor="rgba(75,139,200,0.18)"
                  className="border border-brand-blue/40 hover:border-brand-blue/70"
                >
                  <span className="block px-10 py-4 text-sm uppercase tracking-[0.15em] text-[#F2F2EE]">
                    Book a Free Strategy Call &rarr;
                  </span>
                </GlassEffect>
              </div>
            </div>
          </div>
        </ScrollRevealWrapper>
      </section>
    </main>
  );
}
