import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlassEffect } from "@/components/ui/liquid-glass";

export const metadata: Metadata = {
  title: "Services",
  description:
    "4-4-2 Marketing offers weekly Premier League content, event promotion, and digital advertising to help bars become soccer destinations before the 2026 World Cup.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="border-b border-navy-800 pb-24 pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8896B0]">
            What We Offer
          </p>
          <h1
            className="font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
            }}
          >
            Our Services
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#8896B0]">
            Everything your bar needs to become the soccer destination in your
            city, done for you, every week.
          </p>
        </div>
      </section>

      {/* Service 01 — Weekly Content */}
      <section className="border-b border-navy-800 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-brand-gold">
                Service 01
              </p>
              <h2
                className="mb-6 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Weekly Content
                <br />
                Packages
              </h2>
              <p className="mb-8 leading-relaxed text-[#8896B0]">
                We design and deliver custom-branded social media graphics for
                your bar every single week of the Premier League season,
                so you always have professional content ready before every match.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  {
                    title: "Match Day Graphics",
                    desc: "Bold, hype-building posters for every featured match, your logo, your specials, your address.",
                  },
                  {
                    title: "Weekly Schedule Posts",
                    desc: "Branded Premier League fixture graphics showing the full week's matches, with times, teams, and your drink specials.",
                  },
                  {
                    title: "Ready-to-Post Files",
                    desc: "Optimized for Instagram, Facebook, and X. No editing required. Just download and post.",
                  },
                  {
                    title: "Your Brand, Always On",
                    desc: "Every graphic includes your logo, colors, and details for consistent professionalism, week after week.",
                  },
                ].map(({ title, desc }) => (
                  <li
                    key={title}
                    className="flex items-start gap-4 border-t border-navy-800 pt-4"
                  >
                    <span className="mt-1 text-xs text-brand-blue">&#9679;</span>
                    <div>
                      <p className="text-sm font-medium text-[#F2F2EE]">
                        {title}
                      </p>
                      <p className="mt-1 text-sm text-[#8896B0]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <GlassEffect href="/contact" tintColor="rgba(75,139,200,0.18)" className="border border-brand-blue/40 hover:border-brand-blue/70">
                <span className="block px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#F2F2EE]">Get Started &rarr;</span>
              </GlassEffect>
            </div>

            <div className="flex flex-col gap-4">
              <Image
                src="/images/work-schedule.jpg"
                alt="Example Premier League weekly schedule graphic, custom branded"
                width={800}
                height={800}
                className="h-auto w-full"
                loading="lazy"
              />
              <Image
                src="/images/work-gameday.jpg"
                alt="Example match day graphic for a bar"
                width={800}
                height={800}
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 — Event Promotion */}
      <section className="border-b border-navy-800 bg-navy-900 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1540747913346-19212a4a745d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Packed soccer stadium with fans watching the match"
                width={1000}
                height={440}
                className="h-72 w-full object-cover lg:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-brand-gold">
                Service 02
              </p>
              <h2
                className="mb-6 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Event &amp;
                <br />
                Watch Party
                <br />
                Promotion
              </h2>
              <p className="mb-8 leading-relaxed text-[#8896B0]">
                Match day graphics are just the beginning. We run targeted
                campaigns that actively drive soccer fans through your door,
                on the mornings and afternoons when you need them most.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  {
                    title: "Watch Party Campaigns",
                    desc: "Promoted event posts for big matches, including Champions League, rivalry games, and World Cup qualifiers.",
                  },
                  {
                    title: "Happy Hour Tie-ins",
                    desc: "Link your drink specials to kickoff times so fans have a reason to arrive early and stay late.",
                  },
                  {
                    title: "Community Building",
                    desc: "We help you grow a loyal soccer community at your bar. Fans who come back every single match day.",
                  },
                ].map(({ title, desc }) => (
                  <li
                    key={title}
                    className="flex items-start gap-4 border-t border-navy-800 pt-4"
                  >
                    <span className="mt-1 text-xs text-brand-blue">&#9679;</span>
                    <div>
                      <p className="text-sm font-medium text-[#F2F2EE]">{title}</p>
                      <p className="mt-1 text-sm text-[#8896B0]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <GlassEffect href="/contact" tintColor="rgba(75,139,200,0.18)" className="border border-brand-blue/40 hover:border-brand-blue/70">
                <span className="block px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#F2F2EE]">Get Started &rarr;</span>
              </GlassEffect>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 — Digital Advertising */}
      <section className="border-b border-navy-800 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-brand-gold">
                Service 03
              </p>
              <h2
                className="mb-6 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Digital
                <br />
                Advertising
              </h2>
              <p className="mb-8 leading-relaxed text-[#8896B0]">
                Reach soccer fans in your city with laser-targeted ads on the
                platforms they use every day. We handle the strategy, creative,
                and targeting. You just watch the seats fill up.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  {
                    title: "Geo-Targeted Meta Ads",
                    desc: "Facebook and Instagram ads shown to soccer fans within a set radius of your bar.",
                  },
                  {
                    title: "Interest-Based Targeting",
                    desc: "We target users who follow Premier League clubs, soccer accounts, and sports content.",
                  },
                  {
                    title: "World Cup Build-Up Campaigns",
                    desc: "Aggressive pre-tournament advertising to establish your bar as the soccer spot before June 2026.",
                  },
                  {
                    title: "Monthly Reporting",
                    desc: "Clear, plain-English reports showing reach, impressions, and results. No jargon, just numbers that matter.",
                  },
                ].map(({ title, desc }) => (
                  <li
                    key={title}
                    className="flex items-start gap-4 border-t border-navy-800 pt-4"
                  >
                    <span className="mt-1 text-xs text-brand-blue">&#9679;</span>
                    <div>
                      <p className="text-sm font-medium text-[#F2F2EE]">{title}</p>
                      <p className="mt-1 text-sm text-[#8896B0]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <GlassEffect href="/contact" tintColor="rgba(75,139,200,0.18)" className="border border-brand-blue/40 hover:border-brand-blue/70">
                <span className="block px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#F2F2EE]">Get Started &rarr;</span>
              </GlassEffect>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Soccer stadium lights reaching the right fans"
                width={1000}
                height={440}
                className="h-[440px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Services — feature cards */}
      <section className="border-b border-white/[0.06] py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-brand-gold">
            Digital Services
          </p>
          <h2
            className="mb-4 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
          >
            Professional Content
            <br />
            For Matchday Growth
          </h2>
          <p className="mb-14 max-w-2xl text-sm leading-relaxed text-[#8896B0] sm:text-base">
            We create high-quality match graphics tailored to your venue and
            targeted to local soccer fans. We handle the design and social
            campaigns so you can focus on operations.
          </p>

          {/* 3-col top row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: "Full Weekend Schedules",
                desc: "Full-feature graphics showing every match and every kickoff time so that local soccer fans know where to be and when.",
                badge: "✓ Included Weekly",
              },
              {
                title: "Curated Match of the Week",
                desc: "Massive rivalries, title races, and must-watch moments to maximize weekend attendance. We identify the games that matter most.",
                badge: "✓ High Engagement",
              },
              {
                title: "Custom Branding",
                desc: "Every graphic features your logo, location, and food/drink specials. All seamlessly integrated into the design to reinforce your bar's identity.",
                badge: "✓ Your Brand Identity",
              },
            ].map(({ title, desc, badge }) => (
              <div
                key={title}
                className="flex flex-col justify-between border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.14]"
              >
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-[#F2F2EE]">
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed text-[#8896B0]">{desc}</p>
                </div>
                <span className="mt-6 inline-block border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-blue">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* 2-col bottom row */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Meta Ads Integration",
                desc: "Professionally designed Meta ad campaigns built to generate consistent foot traffic. We use targeted advertising to engage local soccer fans in your area.",
                badge: "✓ Reach Local Fans",
              },
              {
                title: "OpenTable Integration",
                desc: "Enable reservations directly from your social stories. We integrate your OpenTable booking links so fans can secure their table immediately while viewing the match schedule.",
                badge: "✓ Seamless Booking",
              },
            ].map(({ title, desc, badge }) => (
              <div
                key={title}
                className="flex flex-col justify-between border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.14]"
              >
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-[#F2F2EE]">
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed text-[#8896B0]">{desc}</p>
                </div>
                <span className="mt-6 inline-block border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-blue">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Ads — deep dive */}
      <section className="border-b border-white/[0.06] bg-white/[0.015] py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-brand-gold">
            Meta Ads
          </p>
          <h2
            className="mb-4 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
          >
            Your Matchday
            <br />
            Traffic Engine
          </h2>
          <p className="mb-14 max-w-2xl text-sm leading-relaxed text-[#8896B0] sm:text-base">
            Precision customer targeting that puts your venue in front of fans
            on matchday.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Who We Target */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.14]">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-[#F2F2EE]">
                Who We Target
              </p>
              <ul className="space-y-3">
                {[
                  { text: "People within driving distance of your bar", highlight: true },
                  { text: "Fans with demonstrated interest in soccer leagues and competitions" },
                  { text: "Fans who are active supporters of the match of the week" },
                  { text: "Fans who prefer watching matches in a social bar atmosphere" },
                ].map(({ text, highlight }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                    <span className={`text-xs leading-relaxed ${highlight ? "font-medium text-brand-blue" : "text-[#8896B0]"}`}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How the Ads Work */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.14]">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-[#F2F2EE]">
                How the Ads Work
              </p>
              <ul className="space-y-3">
                {[
                  { text: "We put matchday content with your venue branding in front of local soccer fans" },
                  { text: "Fans see kickoff time + your venue location" },
                  { text: "One tap takes them to directions, your profile, or reservations" },
                  { text: "Fans arrive ready to eat, drink, and watch", highlight: true },
                ].map(({ text, highlight }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                    <span className={`text-xs leading-relaxed ${highlight ? "font-medium text-brand-blue" : "text-[#8896B0]"}`}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why It Works */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.14]">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-[#F2F2EE]">
                Why It Works
              </p>
              <ul className="space-y-3">
                {[
                  "Hyper-local targeting reaches only fans in your area to minimize ad spend",
                  "Captures fans actively seeking a place to watch",
                  "Specific times, dates, and next steps drive action",
                  "Reinforces your bar as the local soccer home base",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                    <span className="text-xs leading-relaxed text-[#8896B0]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Your Involvement */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.14]">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-[#F2F2EE]">
                Your Involvement
              </p>
              <ul className="space-y-3">
                {[
                  "WE create content, target customers, and launch everything for you",
                  "YOU send us weekly drink specials and prepare for matchday crowds",
                  "WE work with flexible budgets that work for any venue size",
                  "YOU have complete visibility into campaign performance",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gold" />
                    <span className="text-xs leading-relaxed text-[#8896B0]">
                      <span className="font-medium text-[#F2F2EE]">{text.split(" ")[0]}</span>{" "}
                      {text.split(" ").slice(1).join(" ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-navy-800 bg-navy-900 py-32 lg:py-44">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brand-gold">
            Get In Touch
          </p>
          <h2
            className="mb-8 font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
          >
            Let&apos;s Build Your
            <br />
            Soccer Bar.
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-lg leading-relaxed text-[#8896B0]">
            Book a free strategy call and we&apos;ll map out exactly how to make
            your bar the soccer destination in your city, before the
            World Cup begins.
          </p>
          <GlassEffect href="/contact" tintColor="rgba(75,139,200,0.18)" className="border border-brand-blue/40 hover:border-brand-blue/70">
            <span className="block px-10 py-4 text-sm uppercase tracking-[0.15em] text-[#F2F2EE]">
              Book a Free Strategy Call &rarr;
            </span>
          </GlassEffect>
        </div>
      </section>
    </main>
  );
}
