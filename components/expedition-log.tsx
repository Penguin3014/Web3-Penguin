"use client"

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
      className="relative w-full min-h-[400px] lg:h-[70vh] xl:h-[80vh] bg-cover bg-top bg-no-repeat pt-24 md:pt-32 pb-24 md:pb-40"
      style={{
        backgroundImage: "url('/images/expedition-20log-new.jpeg')",
        backgroundColor: "#38bdf8",
      }}
    >
      <div className="expedition-log-layer relative z-10 mx-auto h-full max-w-6xl px-4 flex flex-col justify-center gap-8 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-24 md:mt-32">
          {stages.map((stage, index) => (
            <article
              key={stage.id}
              className="flip-card group relative h-52 cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div
                className="flip-card-inner relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                }}
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
                      <span className="text-xs md:text-sm text-sky-100/80 font-mono">
                        {stage.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-4 space-y-2 bg-[#E4E4E7] flex flex-col justify-center">
                    <h4 className="text-[#0F172A] font-bold text-lg md:text-xl text-center uppercase tracking-wide leading-tight">
                      {stage.title}
                    </h4>
                    <p className="text-[#1E293B] text-sm text-center leading-relaxed">{stage.frontDescription}</p>
                    <p className="text-[#3B82F6] text-xs text-center font-mono mt-auto">HOVER FOR DETAILS</p>
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
                      <span className="text-xs md:text-sm text-sky-100/80 font-mono">
                        {stage.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-4 space-y-1.5 bg-[#E4E4E7] flex flex-col justify-center">
                    <h4 className="text-[#0F172A] font-bold text-base md:text-lg text-center uppercase tracking-wide mb-2">
                      {stage.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {stage.backDetails.map((detail, i) => (
                        <li key={i} className="text-[#1E293B] text-xs leading-relaxed flex items-start">
                          <span className="text-[#3B82F6] mr-2 font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
