import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "4-4-2 Marketing was founded by an Irish family with a lifelong love of soccer and a background in marketing.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="min-h-screen px-6 pb-32 pt-40 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-brand-gold">
            Our Story
          </p>
          <h1
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
          </h1>

          <div className="space-y-8 text-lg leading-relaxed text-[#8896B0]">
            <p>
              4-4-2 is a soccer-first marketing agency built for bars. We exist
              to turn ordinary venues into the go-to soccer destinations in their
              city, before the biggest sporting event in the world arrives on
              American soil.
            </p>
            <p>
              We are a blend of soccer knowledge and advertising expertise. From early morning Premier League kickoffs to Champions League nights, we know what gets fans through the door. We help bars and restaurants turn those matches into real matchday atmospheres through simple, consistent marketing.
            </p>
            <p>
              When the 2026 World Cup was awarded to the United States, everything
              clicked. America is on the verge of a soccer explosion. Bars are
              perfectly positioned to be at the center of it. Most just
              don&apos;t know how yet, and that&apos;s exactly the gap we fill.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
