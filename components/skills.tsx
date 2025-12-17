import { Cable as Cube, TrendingUp, Coins, Code } from "lucide-react"

export function Skills() {
  const skills = [
    {
      icon: Coins,
      title: "Web3 Product & Tokenomics",
      bullets: [
        "End-to-end design for DeFi, NFT, and infra products",
        "Tokenomics, listing strategy, and market structure design",
        "Go-to-market planning and investor-facing documentation",
      ],
    },
    {
      icon: TrendingUp,
      title: "Exchange Listing Strategy",
      bullets: [
        "CEX/DEX listing strategy and execution for global markets",
        "Token distribution, liquidity planning, and schedule design",
        "Post-listing ops with investors, exchanges, and partners",
      ],
    },
    {
      icon: Cube,
      title: "DeFi · NFT · Infra",
      bullets: [
        "Designs DeFi, NFT, and infra business models end‑to‑end",
        "Plans token utilities, ecosystem incentives, and partnerships",
        "Leads market research and GTM plans for new blockchain products",
      ],
    },
    {
      icon: Code,
      title: "E2E On‑chain Execution & Ops",
      bullets: [
        "Translates product and tokenomics specs into executable roadmaps",
        "Coordinates dev, design, legal, and marketing for Web3 launches",
        "Manages listings, campaigns, and data‑driven post‑launch iterations",
      ],
    },
  ]

  return (
    <section id="penguin-ships" className="relative w-full py-24 bg-slate-950 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 glow-text">What this penguin ships</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A comprehensive skill set across Web3 product and tokenomics strategy, CEX/DEX listing and growth, DeFi · NFT · infra business design, and full‑cycle blockchain project execution.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="group relative bg-slate-900/70 backdrop-blur-sm border-2 border-slate-600 rounded-xl p-7 hover:border-sky-400/70 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300"
              >
                {/* 제목 + 아이콘 한 줄 정렬 */}
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {skill.title}
                  </h3>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded bg-sky-500/10 border border-sky-400/30 flex-shrink-0">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                </div>

                <ul className="space-y-2">
                  {skill.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-sky-400 mt-1 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
