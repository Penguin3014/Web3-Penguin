"use client"

import { useState } from "react"

type Stage = {
  id: string
  timeframe: string
  title: string
  frontDescription: string
  backDetails: string[]
}

function ExpeditionCard({ stage }: { stage: Stage }) {
  const [isFlipped, setIsFlipped] = useState(false)
  
  const handleToggle = () => setIsFlipped((prev) => !prev)
  
  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setIsFlipped(true)
    }
  }
  
  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setIsFlipped(false)
    }
  }

  return (
    <article
      className="flip-card group relative h-52 cursor-pointer w-full flex justify-center md:justify-start"
    >
      <div className="relative w-full max-w-xs md:max-w-none" style={{ perspective: "1000px" }}>
        <div
          className="flip-card-inner relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onClick={handleToggle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Front side */}
          <div
            className="flip-card-front absolute w-full h-full bg-[#D4D4D8] border-[3px] flex flex-col"
            style={{
              borderColor: "#0F172A",
              boxShadow:
                "inset 0 0 0 2px #3B82F6, inset 0 0 0 4px #60A5FA, 0 6px 0 #0F172A, 0 6px 16px rgba(0,0,0,0.3)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="bg-[#0F172A] px-4 py-2.5 text-center border-b-2 border-[#1E293B]">
              <div className="flex items-center justify-center gap-2">
                {/* STAGE-##: 살짝 크게 */}
                <span
                  className="text-sm md:text-base font-mono font-semibold tracking-[0.25em] text-sky-100 uppercase"
                  style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.5)" }}
                >
                  STAGE-{stage.id}
                </span>
                {/* 옆줄 */}
                <span className="h-px w-8 bg-sky-300/70" />
                {/* 연도 */}
                <span className="text-base md:text-sm text-sky-100/80 font-mono">
                  {stage.timeframe}
                </span>
              </div>
            </div>

            <div className="flex-1 p-4 space-y-2 bg-[#E4E4E7] flex flex-col justify-center">
              <h4 className="text-[#0F172A] font-bold text-lg md:text-xl text-center uppercase tracking-wide leading-tight">
                {stage.title}
              </h4>
              <p className="text-[#1E293B] text-sm text-center leading-relaxed">{stage.frontDescription}</p>
              <p className="text-[#3B82F6] text-xs text-center font-mono mt-auto">
                <span className="hidden md:inline">HOVER FOR DETAILS</span>
                <span className="md:hidden">TAP FOR DETAILS</span>
              </p>
            </div>
          </div>

          {/* Back side */}
          <div
            className="flip-card-back absolute w-full h-full bg-[#D4D4D8] border-[3px] flex flex-col"
            style={{
              borderColor: "#0F172A",
              boxShadow:
                "inset 0 0 0 2px #3B82F6, inset 0 0 0 4px #60A5FA, 0 6px 0 #0F172A, 0 6px 16px rgba(0,0,0,0.3)",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="bg-[#0F172A] px-4 py-2.5 text-center border-b-2 border-[#1E293B]">
              <div className="flex items-center justify-center gap-2">
                {/* STAGE-##: 살짝 크게 */}
                <span
                  className="text-sm md:text-base font-mono font-semibold tracking-[0.25em] text-sky-100 uppercase"
                  style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.5)" }}
                >
                  STAGE-{stage.id}
                </span>
                {/* 옆줄 */}
                <span className="h-px w-8 bg-sky-300/70" />
                {/* 연도 */}
                <span className="text-base md:text-sm text-sky-100/80 font-mono">
                  {stage.timeframe}
                </span>
              </div>
            </div>

            <div className="flex-1 p-4 space-y-1.5 bg-[#E4E4E7] flex flex-col justify-center">
              <h4 className="text-[#0F172A] font-bold text-base md:text-lg text-center uppercase tracking-wide mb-2">
                {stage.title}
              </h4>
               <ul className="space-y-1.5">
                 {stage.backDetails.map((detail: string, i: number) => (
                  <li key={i} className="text-[#1E293B] text-xs leading-relaxed flex items-start">
                    <span className="text-[#3B82F6] mr-2 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ExpeditionLog() {
  const stages = [
    {
      id: "01",
      timeframe: "2017",
      title: "Crypto penguin is born",
      frontDescription: "First steps into the blockchain world",
      backDetails: [
        "Discovered Bitcoin and Ethereum",
        "Started learning Solidity and smart contracts",
        "Joined crypto communities and forums",
      ],
    },
    {
      id: "02",
      timeframe: "2018",
      title: "Gate.io · Korea Marketing",
      frontDescription: "Korea market entry and user growth",
      backDetails: [
        "Directed localized marketing for launch in Korea",
        "Managed community channels to engage users",
        "Ran trend‑based promo campaigns with HQ in China",
      ],
    },
    {
      id: "03",
      timeframe: "2018–2019",
      title: "TMTG · LBXC · Senior Analyst",
      frontDescription: "Global listings and trading operations",
      backDetails: [
        "Led token listings for in‑house and partner projects on CEXs",
        "Planned token distribution, schedule & liquidity",
        "Researched Japan market and led strategies",
      ],
    },
    {
      id: "04",
      timeframe: "2022–2023",
      title: "Fuseble · CFO & Co‑CEO",
      frontDescription: "E‑commerce, SI, and quant bot operations",
      backDetails: [
        "Oversaw in‑house e‑commerce platform, inventory, and marketing",
        "Managed premium SI development projects as PM",
        "Led full lifecycle of an automated quant trading bot",
      ],
    },
    {
      id: "05",
      timeframe: "2024",
      title: "Khan(Blockey) · Marketing",
      frontDescription: "CEX listings and global BD marketing",
      backDetails: [
        "Drove global CEX listing campaigns for clients",
        "Operated multi‑project SNS and community channels",
        "Ran KOL, media, AMA, and partnership campaigns",
      ],
    },
    {
      id: "06",
      timeframe: "2025–Now",
      title: "LIFE AI · Strategy & Ops Lead",
      frontDescription: "Web3 strategy, tokenomics, and listings",
      backDetails: [
        "Designs blockchain business models and tokenomics for clients",
        "Leads token issuance, smart contracts, and legals",
        "Guides CEX listings, marketing, and VC fundraising",
      ],
    },
  ]

  return (
    <section
      id="expedition-log"
      className="relative w-full min-h-[400px] lg:h-[70vh] xl:h-[80vh] bg-gradient-to-b from-[#38bdf8] via-[#0f172a] to-[#020617] expedition-log-bg pt-24 md:pt-32 pb-24 md:pb-40"
    >
      <div className="expedition-log-layer relative z-10 mx-auto h-full max-w-6xl px-4 flex flex-col justify-center gap-8 md:gap-12">
        {/* Mobile-only title */}
        <h2 className="block md:hidden text-3xl font-mono font-extrabold tracking-[0.18em] uppercase text-center mb-3 relative">
          {/* dark glow / overlay behind text */}
          <span className="absolute inset-x-0 -inset-y-2 mx-auto max-w-xs bg-black/25 blur-xl rounded-full pointer-events-none" />
          <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
            EXPEDITION LOG
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-1 md:mt-32">
          {stages.map((stage) => (
            <ExpeditionCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .expedition-log-bg {
          background-color: #38bdf8;
        }
        @media (min-width: 768px) {
          .expedition-log-bg {
            background-image: url('/images/expedition-20log-new.jpeg');
            background-size: cover;
            background-position: top;
            background-repeat: no-repeat;
          }
        }
      `}</style>
    </section>
  )
}
