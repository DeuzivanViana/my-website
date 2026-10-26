"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google"
import { NavigationBar } from "@/components/NavigationBar"
import { ProjectCard } from "@/components/ProjectCard"
import { personal_projects, real_projects } from "./utils/consts/projects"

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

const stats = [
  { value: "15+", label: "projects" },
  { value: "3+", label: "years" },
  { value: "100%", label: "dedication" },
]

function Section({ title, projects }) {
  return (
    <section className="px-4 py-12 md:px-12">
      <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title ?? i}
            title={p.title}
            description={p.description}
            href={p.href}
            src_lists={p.src_list}
            techs={p.techs}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <div
      className={`${display.variable} ${mono.variable} min-h-screen bg-[#0b0b10] text-neutral-200 [font-family:var(--font-display)] [&_.font-mono]:[font-family:var(--font-mono)]`}
    >
      <AnimatePresence mode="wait">
        {!videoEnded ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
            transition={{ duration: 0.7 }}
            className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black"
          >
            <video
              src="/eye.mp4"
              autoPlay
              muted
              playsInline
              onEnded={() => setVideoEnded(true)}
              className="max-h-full max-w-[80vh]"
            />
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute top-[30%] text-2xl font-bold text-white"
            >
              Hello, friend
            </motion.h1>
            <button
              onClick={() => setVideoEnded(true)}
              className="absolute bottom-6 right-6 rounded-full border border-white/20 px-4 py-1.5 font-mono text-xs text-neutral-300 transition hover:border-violet-400 hover:text-white"
            >
              skip
            </button>
          </motion.div>
        ) : (
          <motion.main key="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <NavigationBar />

            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_40%_at_20%_0%,rgba(139,92,246,.16),transparent),radial-gradient(40%_30%_at_90%_10%,rgba(34,211,238,.08),transparent)]"
            />

            <div className="relative mx-auto max-w-[1400px]">
              <header className="px-6 pb-16 pt-20 md:px-12 md:pt-32">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-8xl"
                >
                  Hello, I&apos;m <span className="text-violet-400">Deuzivan</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400"
                >
                  I&apos;ve been passionate about programming since I was 14, and I try to evolve with every new
                  project. Some of them are below.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5"
                >
                  <div className="flex flex-wrap gap-2 text-sm">
                    {["Portuguese (Native)", "English (Basic)"].map((l) => (
                      <span
                        key={l}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-neutral-300"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                  <ul className="flex gap-8">
                    {stats.map((s) => (
                      <li key={s.label}>
                        <p className="text-2xl font-semibold text-white">{s.value}</p>
                        <p className="text-sm text-neutral-500">{s.label}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </header>

              <Section title="Real projects" projects={real_projects} />
              <Section title="Personal projects" projects={personal_projects} />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}