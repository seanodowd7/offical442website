"use client";

import * as React from "react";
import { ArrowRight, Palette, PenLine, Share2, Users, Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

// --- Carousel Context ---
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); scrollPrev(); }
      else if (event.key === "ArrowRight") { event.preventDefault(); scrollNext(); }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => { if (!api || !setApi) return; setApi(api); }, [api, setApi]);
  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => { api?.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div ref={ref} onKeyDownCapture={handleKeyDown} className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div ref={ref} className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)} {...props} />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div ref={ref} role="group" aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
      <Button ref={ref} variant={variant} size={size}
        className={cn("absolute h-10 w-10 rounded-full right-2 top-1/2 -translate-y-1/2", className)}
        onClick={scrollNext} disabled={!canScrollNext} {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

// --- Service Card Data Type ---
export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

// --- Individual Card ---
const ServiceCard = ({ service }: { service: Service; index: number }) => {
  return (
    <div
      className="group relative flex h-[420px] w-full flex-col justify-between overflow-hidden border border-[rgba(75,139,200,0.25)] p-8 transition-all duration-300 hover:border-[rgba(75,139,200,0.55)] hover:shadow-[0_0_0_1px_rgba(75,139,200,0.25),0_0_45px_rgba(75,139,200,0.18)]"
      style={{
        background: "linear-gradient(135deg, rgba(75,139,200,0.22) 0%, #0a1020 100%)",
        boxShadow: "0 0 0 1px rgba(75,139,200,0.15), 0 0 30px rgba(75,139,200,0.07)",
      }}
    >
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-[2px]" style={{ background: "rgba(75,139,200,0.75)" }} />

      {/* Card Content */}
      <div className="z-10 flex flex-col items-start text-left">
        <div className="inline-flex h-12 w-12 items-center justify-center border border-[rgba(75,139,200,0.40)] bg-[rgba(75,139,200,0.12)]">
          <service.icon className="h-6 w-6 text-[#4B8BC8]" />
        </div>
      </div>

      <div className="z-10">
        <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wider text-[#F2F2EE]">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#8896B0]">{service.description}</p>
      </div>
    </div>
  );
};

// --- Main Export ---
export const ServiceCarousel = ({ services }: { services: Service[] }) => {
  return (
    <div className="w-full">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative"
      >
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ServiceCard service={service} index={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="bg-white/[0.08] border-white/[0.12] hover:bg-white/[0.14] text-[#F2F2EE]" />
      </Carousel>
    </div>
  );
};
