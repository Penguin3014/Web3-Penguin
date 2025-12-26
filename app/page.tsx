"use client"

import { Hero } from "@/components/hero"
import { ExpeditionLog } from "@/components/expedition-log"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
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
