"use client"

import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"
import { ExpeditionLog } from "@/components/expedition-log"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768) // md 기준

    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  if (isMobile) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">
            This page is optimized for desktop/laptop resolutions.
          </h1>
          <p className="text-slate-400 text-sm">
            Best viewed in desktop or notebook web environments.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <ExpeditionLog />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
