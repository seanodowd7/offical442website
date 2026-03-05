import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { ScrollRevealWrapper } from "@/components/ui/scroll-reveal-wrapper";
import { GlassEffect } from "@/components/ui/liquid-glass";

const tiers = [
  {
    tier: "Little Kickers",
    price: "$150/mo",
    bestFor: "Perfect for bars just getting started",
    CTA: "Get Started",
    popular: false,
    benefits: [
      { text: "6 Graphics", checked: true },
      { text: "Professional captions", checked: true },
      { text: "TV Guide", checked: true },
      //{ text: "OpenTable integration", checked: true },
      //{ text: "Targeted Meta Ad Campaigns", checked: true },
      { text: "Full posting service", checked: true },
      //{ text: "Premier League Staff Education", checked: false },
      //{ text: "Supporters Club Outreach", checked: false },
      //{ text: "Instagram Story Templates", checked: false },
    ],
  },
  {
    tier: "Sunday League",
    price: "$200/mo",
    bestFor: "More match coverage, same great service",
    CTA: "Get Started",
    popular: true,
    benefits: [
      { text: "8 Graphics", checked: true },
      //{ text: "4 Feature Match posts / month", checked: true },
      { text: "Professional Captions", checked: true },
      { text: "TV Guide", checked: true },
      //{ text: "Premier League Staff Education", checked: false },
      { text: "Full Posting Service", checked: true },
      //{ text: "Supports Club Outreach", checked: true },
      //{ text: "Premier League Staff Education", checked: false },
      //{ text: "Instagram Story Templates", checked: false },
    ],
  },
  {
    tier: "Full Professional",
    price: "$250/mo",
    bestFor: "Maximum coverage for bars that want to dominate",
    CTA: "Get Started",
    popular: false,
    benefits: [
      { text: "10 Graphics", checked: true },
      //{ text: "6 Feature Match posts / month", checked: true },
      { text: "Professional Captions", checked: true },
      { text: "TV Guide", checked: true },
      { text: "Full Posting Service", checked: true },
      //{ text: "OpenTable integration", checked: true },
      //{ text: "Targeted Meta Ad Campaigns", checked: true },
      //{ text: "Premier League Staff Education", checked: true },
      //{ text: "Supporters Club Outreach", checked: true },
      { text: "Prematch Stories", checked: true },
    ],
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <ServicesSection />

      {/* Pricing */}
      <section
        id="pricing"
        className="scroll-mt-24 border-t border-navy-800 px-6 py-28 lg:px-10 lg:py-36"
      >
        <ScrollRevealWrapper>
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center reveal">
              <span className="mb-6 inline-block border border-brand-blue bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                Investment
              </span>
              <h2
                className="mb-6 font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 0.9,
                }}
              >
                Package Pricing
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#8896B0] sm:text-base">
                Choose what fits you. All packages are totally customizable and
                include professional design and writing, plus direct posting on
                your social channels to save you time. We highly recommend
                starting with Premier League content today and shifting into World
                Cup content as the tournament approaches.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 reveal" style={{ transitionDelay: "0.1s" }}>
              {tiers.map((tier) => (
                <PricingCard key={tier.tier} {...tier} />
              ))}
            </div>
          </div>
        </ScrollRevealWrapper>
      </section>

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
                  city — before the biggest sporting event in the world arrives on
                  American soil.
                </p>
                <p>
                  We&apos;re an Irish family and lifelong Leeds United fans. Soccer
                  has been part of our lives since before we could walk. We understand
                  the culture, the matchday energy, and what it takes to make a bar
                  feel like a real supporter&apos;s home.
                </p>
                <p>
                  When the 2026 World Cup was awarded to the United States, everything
                  clicked. America is on the verge of a soccer explosion. Bars are
                  perfectly positioned to be at the center of it. Most just
                  don&apos;t know how yet — and that&apos;s exactly the gap we fill.
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
          <div className="mx-auto max-w-3xl text-center">
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
              <p className="mx-auto mb-14 max-w-md leading-relaxed text-[#8896B0]">
                Book a free 30-minute strategy call. No commitment, no pressure —
                just a conversation about how to make your bar the soccer
                destination in your city.
              </p>
              <div className="flex justify-center">
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
