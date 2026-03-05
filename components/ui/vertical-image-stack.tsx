"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence, type PanInfo } from "motion/react"
import Image from "next/image"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    src: "/images/work-schedule.jpg",
    alt: "Premier League weekly fixture schedule graphic",
    title: "Full Feature Fixture Lists",
    desc: "Social posts that keep fans informed of the weekly schedule and your venue top-of-mind for every matchday.",
  },
  {
    id: 2,
    src: "/images/work-gameday.jpg",
    alt: "Match of the week game day graphic",
    title: "Curated Match of the Week",
    desc: "Eye-catching graphics showcasing the week's biggest games to create buzz and attract matchday crowds.",
  },
]

export function PortfolioImageStack() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNav = useRef(0)
  const COOLDOWN = 400

  const navigate = useCallback((dir: number) => {
    const now = Date.now()
    if (now - lastNav.current < COOLDOWN) return
    lastNav.current = now
    setCurrentIndex((prev) => {
      const len = portfolioItems.length
      return dir > 0 ? (prev + 1) % len : (prev - 1 + len) % len
    })
  }, [])

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.y < -50) navigate(1)
      else if (info.offset.y > 50) navigate(-1)
    },
    [navigate],
  )

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.stopPropagation()
      if (Math.abs(e.deltaY) > 30) navigate(e.deltaY > 0 ? 1 : -1)
    },
    [navigate],
  )

  const getStyle = (index: number) => {
    const len = portfolioItems.length
    let d = index - currentIndex
    if (d > len / 2) d -= len
    if (d < -len / 2) d += len

    if (d === 0) return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 }
    if (d === -1) return { y: -190, scale: 0.85, opacity: 0.4, zIndex: 4, rotateX: 10 }
    if (d === 1) return { y: 190, scale: 0.85, opacity: 0.4, zIndex: 4, rotateX: -10 }
    return { y: d > 0 ? 500 : -500, scale: 0.7, opacity: 0, zIndex: 0, rotateX: 0 }
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
      {/* Left — animated info */}
      <div className="flex flex-col justify-center lg:pr-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32 }}
          >
            <h4 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-[#F2F2EE]">
              {portfolioItems[currentIndex].title}
            </h4>
            <p className="text-sm leading-relaxed text-[#8896B0]">
              {portfolioItems[currentIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Counter + nav dots */}
        <div className="mt-10 flex items-center gap-4">
          <span className="font-mono text-3xl font-light tabular-nums text-[#F2F2EE]">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="h-px w-6 bg-white/20" />
          <span className="font-mono text-sm tabular-nums text-[#8896B0]">
            {String(portfolioItems.length).padStart(2, "0")}
          </span>
          <div className="ml-4 flex gap-2">
            {portfolioItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "h-2 w-6 bg-[#4B8BC8]"
                    : "h-2 w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#8896B0]/40">
          Drag or scroll to browse
        </p>
      </div>

      {/* Right — 3D card stack */}
      <div className="flex justify-center">
        <div
          className="relative flex h-[540px] w-[300px] items-center justify-center"
          style={{ perspective: "1200px" }}
          onWheel={handleWheel}
        >
          {portfolioItems.map((item, index) => {
            const s = getStyle(index)
            const isCurrent = index === currentIndex

            return (
              <motion.div
                key={item.id}
                className="absolute cursor-grab active:cursor-grabbing"
                animate={{
                  y: s.y,
                  scale: s.scale,
                  opacity: s.opacity,
                  rotateX: s.rotateX,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                drag={isCurrent ? "y" : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ transformStyle: "preserve-3d", zIndex: s.zIndex }}
              >
                {/* Instagram-style social card */}
                <div
                  className="w-[300px] border border-white/[0.1] bg-[#0d0d0d]"
                  style={{
                    boxShadow: isCurrent
                      ? "0 25px 60px -15px rgba(0,0,0,0.7), 0 0 0 1px rgba(75,139,200,0.12)"
                      : "0 10px 30px -10px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-[#2a2a2a]" />
                      <span className="text-xs font-medium text-[#F2F2EE]">@YourBar</span>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-[#8896B0]" />
                  </div>

                  {/* Image */}
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={800}
                    className="h-auto w-full"
                    draggable={false}
                    priority={isCurrent}
                  />

                  {/* Footer */}
                  <div className="flex items-center justify-between px-3 py-2.5">
                    <div className="flex items-center gap-4">
                      <Heart className="h-5 w-5 text-[#8896B0]" />
                      <MessageCircle className="h-5 w-5 text-[#8896B0]" />
                      <Send className="h-5 w-5 text-[#8896B0]" />
                    </div>
                    <Bookmark className="h-5 w-5 text-[#8896B0]" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
