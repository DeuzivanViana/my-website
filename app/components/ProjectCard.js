"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const slide = {
  enter: { x: "100%", opacity: 0.4 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0.4 },
}

export const ProjectCard = ({
  title = "Title",
  description = "Description",
  href = "#",
  src_lists = ["/images/blog_005.png", "/images/blog_002.png"],
  techs = ["NextJS", "supabase"],
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)

  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const rx = useSpring(0, { stiffness: 150, damping: 18 })
  const ry = useSpring(0, { stiffness: 150, damping: 18 })
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mx}% ${my}%, rgba(139,92,246,.16), transparent 70%)`

  useEffect(() => {
    if (src_lists.length < 2 || paused) return
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % src_lists.length)
    }, 2500)
    return () => clearInterval(intervalId)
  }, [src_lists, paused])

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    mx.set(x * 100)
    my.set(y * 100)
    ry.set((x - 0.5) * 5)
    rx.set(-(y - 0.5) * 5)
  }

  const onLeave = () => {
    setPaused(false)
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101015] transition-colors duration-300 hover:border-violet-400/50"
    >
      <div className="relative h-[60vw] max-h-[356px] w-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={src_lists[currentImageIndex]}
              alt={`${title} - image ${currentImageIndex + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101015] to-transparent" />

        {src_lists.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {src_lists.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setCurrentImageIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentImageIndex ? "w-6 bg-violet-400" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-xs text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="group/btn flex items-center justify-center gap-2 rounded-lg bg-violet-500 p-3 text-sm font-medium text-white transition-colors hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            <span>View project</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}