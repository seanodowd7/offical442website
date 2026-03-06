"use client";

import React from "react";
import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Palette, PenLine, Share2, Users, Radio, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GlassEffect } from "@/components/ui/liquid-glass";
import { FeatureCard, AnimatedContainer } from "@/components/ui/grid-feature-cards";

type DigitalService = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const digitalServices: DigitalService[] = [
  {
    title: "Professional Graphics",
    description: "Studio-quality match graphics tailored to your venue. Every post features your branding, fixtures, and kickoff times, designed to stop the scroll.",
    icon: Palette,
  },
  {
    title: "Professional Captions",
    description: "Compelling, on-brand copy written for every post. We craft captions that drive engagement, build hype, and speak directly to local soccer fans.",
    icon: PenLine,
  },
  {
    title: "Full Posting Service",
    description: "We handle scheduling and posting across your social channels every week. No effort required from you. Just show up on matchday.",
    icon: Share2,
  },
  {
    title: "Supporters Club Outreach",
    description: "We identify and connect with local supporters clubs and soccer communities in your area, turning them into loyal regulars at your venue.",
    icon: Users,
  },
  {
    title: "Meta Ad Campaigns",
    description: "Precision-targeted Meta ads that put your matchday content in front of local soccer fans, right when they're deciding where to watch.",
    icon: Radio,
  },
  {
    title: "Soccer Destination Branding",
    description: "We build your bar's identity as the go-to soccer venue in your city with consistent tone, visual presence, and community reputation that puts you on every fan's radar long before kickoff.",
    icon: MapPin,
  },
];

export function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>

      {/* Digital Services */}
      <section className="border-b border-navy-800 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <AnimatedContainer className="mb-14">
            <span className="mb-6 inline-block border border-brand-blue bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
              Digital Services
            </span>
            <h3
              className="mb-4 font-display font-bold uppercase leading-tight text-[#F2F2EE]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              Professional Content
              <br />
              For Matchday Growth
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-[#8896B0] sm:text-base">
              We create high-quality match graphics tailored to your venue and
              targeted to local soccer fans. We handle the design and social
              campaigns so you can focus on operations.
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.3}
            className="grid grid-cols-1 divide-y border border-navy-800 sm:grid-cols-2 sm:divide-x md:grid-cols-3 divide-navy-800"
          >
            {digitalServices.map((service, i) => (
              <FeatureCard key={i} feature={service} />
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Portfolio / Work Showcase */}
      <section id="our-work" className="scroll-mt-24 border-b border-navy-800 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 reveal">
            <span className="mb-6 inline-block border border-brand-blue bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
              Portfolio
            </span>
            <h3
              className="mb-2 font-display font-extrabold uppercase leading-none text-[#F2F2EE]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.01em", lineHeight: 1.0 }}
            >
              Examples of Our Work
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-[#8896B0] sm:text-base">
              Studio-quality assets tailored to your brand. From weekly match schedules to curated
              game-day content, every post is designed to maximize engagement. Using our precise
              advertising methods, we connect you with local soccer fans looking for a place to watch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 reveal" style={{ transitionDelay: "0.1s" }}>
            {[
              {
                src: "/images/work-schedule.jpg",
                alt: "Premier League weekly fixture schedule graphic",
                title: "Full Feature Fixture Lists",
                desc: "Social posts that keep fans informed of the weekly schedule and your venue top-of-mind for every matchday.",
              },
              {
                src: "/images/work-gameday.jpg",
                alt: "Match of the week game day graphic",
                title: "Curated Match of the Week",
                desc: "Eye-catching graphics showcasing the week's biggest games to create buzz and attract matchday crowds.",
              },
            ].map(({ src, alt, title, desc }) => (
              <div key={title}>
                <div className="border border-white/[0.1] bg-[#0d0d0d]">
                  <div className="flex items-center justify-between px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-[#2a2a2a]" />
                      <span className="text-xs font-medium text-[#F2F2EE]">@YourBar</span>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-[#8896B0]" />
                  </div>
                  <div className="w-full">
                    <Image
                      src={src}
                      alt={alt}
                      width={800}
                      height={800}
                      className="h-auto w-full"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2.5">
                    <div className="flex items-center gap-4">
                      <Heart className="h-5 w-5 text-[#8896B0]" />
                      <MessageCircle className="h-5 w-5 text-[#8896B0]" />
                      <Send className="h-5 w-5 text-[#8896B0]" />
                    </div>
                    <Bookmark className="h-5 w-5 text-[#8896B0]" />
                  </div>
                </div>
                <div className="mt-5 px-1">
                  <h4 className="mb-2 font-display text-lg font-bold uppercase text-[#F2F2EE]">
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#8896B0]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 reveal flex justify-center" style={{ transitionDelay: "0.2s" }}>
            <GlassEffect href="/#contact" tintColor="rgba(75,139,200,0.18)" className="border border-brand-blue/40 hover:border-brand-blue/70">
              <span className="block px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#F2F2EE]">
                Get Started &rarr;
              </span>
            </GlassEffect>
          </div>
        </div>
      </section>
    </div>
  );
}
