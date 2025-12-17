import { Coins, Repeat, Layers, ImageIcon, Box, Wrench, Users, Shield } from "lucide-react"

export function Projects() {
  const leftColumnProjects = [
    {
      category: "TOKEN",
      name: "$LFX (LIFE Networks Data eXchange)",
      description:
        "Blockchain-based decentralized medical data platform that enables patients to directly own and control their health and medical data.",
      role: "E2E Strategy, Marketing, and Operation Product & Tokenomics Lead",
      tags: ["Token Design", "IR-VC Connection", "Marketing", "Architecture", "Whitepaper", "Listing"],
      icon: Coins,
    },
    {
      category: "TOKEN",
      name: "$4CUT (Ticker undecided, ongoing) ",
      description: "4CUT platform leveraging the LIFE FOUR CUTS brand to create a decentralized photo ecosystem with NFTs, DAO governance, and K-POP IP integration.​",
      role: "E2E Strategy, Marketing, and Operation Product & Tokenomics Lead",
      tags: ["Token Design", "IR-VC Connection", "Marketing", "Architecture", "Whitepaper", "Listing"],
      icon: Coins,
    },
    {
      category: "TOKEN",
      name: "$TMTG (The Midas Touch Gold)",
      description: "TMTG tokenizes physical gold 1:1 into tokens on Ethereum and BSC, offering fractional ownership, liquidity, and DeFi features like staking and lending.",
      role:  "Strategy, Marketing, and Operation Senior Advisor",
      tags: ["Token Design", "Marketing", "Advisor", "Strategies"],
      icon: Coins,
    },
    {
      category: "TOKEN",
      name: "$LXBC (LUX BIO CELL)",
      description: "LXBC is a health bio-healthcare token for purchasing products like health management services, treatments, and cosmetics on its platform.",
      role: "Strategy, Marketing, and Operation Senior Advisor",
      tags: ["Token Design", "Marketing", "Media Coverage", "Strategies", "Whitepaper"],
      icon: Coins,
    },
  ]

  const rightColumnProjects = [
    {
      category: "Trading",
      name: "Quantitative Algorithm",
      description:
        "End-to-end automated trading bot suite: quant strategy development, precision backtesting, adaptive risk models, and 24/7 live trading monitoring.",
      role: "Quant PM & Strategy and Operation Lead",
      tags: ["Backtesting", "Strategy Design", "Risk", "Algorithm", "Typescript", "Perps", "Trading"],
      icon: Layers,
    },
    {
      category: "LISTING",
      name: "Centralized Exchange Listing",
      description:
        "Proven exchange listing playbook: CEX listing mastery, optimized token distribution, targeted IR/BD, and swift Korean/global market entry strategies.",
      role: "Listing & BD Role",
      tags: ["CEX Listing", "Token Distribution", "Market Entry", "IR & BD", "Strategic plan by phase"],
      icon: Repeat,
    },
    {
      category: "COMMUNITY",
      name: "Enterprise Web3 Growth Hub",
      description:
        "Tailored solutions for companies entering Web3: global community management on Telegram and X with localized strategies, KOLs, and seamless on-offline events.",
      role: "Community & Growth Lead",
      tags: ["Community Ops", "KOL", "Campaigns", "Content"],
      icon: Users,
    },
   
    {
      category: "ADVISORY",
      name: "Market analysis and industry trends research",
      description:
        "Enterprise-focused dissemination of market intelligence, forward-looking trend forecasts, and competitive research for optimized strategies.",
      role: "Tokenomics & Fundraising Advisor",
      tags: ["Tokenomics", "Whitepaper", "Decks", "VC Advisory", "Report", "Research"],
      icon: Shield,
    },
  ]

  const renderProjectCard = (project: (typeof leftColumnProjects)[0], index: number) => {
    const Icon = project.icon
    return (
      <div
        key={index}
        className="group relative bg-slate-900/60 backdrop-blur-sm border border-sky-500/20 rounded-lg p-5 hover:border-sky-400/40 hover:-translate-y-1 transition-all duration-300 glow-border"
      >
        {/* Category pill with icon */}
        <div className="flex items-center gap-2 mb-3">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded bg-sky-500/10 border border-sky-400/30">
            <Icon className="w-4 h-4 text-sky-400" />
          </div>
          <span className="inline-block px-3 py-1 text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-400/30 rounded-full uppercase tracking-wide">
            {project.category}
          </span>
        </div>

        {/* Project name */}
        <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-3">{project.description}</p>

        <div className="mb-3 pb-3 border-b border-slate-700/50">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Role</span>
          <p className="text-sm text-slate-300 mt-1">{project.role}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 text-xs text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded hover:border-sky-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 glow-text">Antarctic Missions</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Selected Web3 and blockchain projects spanning tokens, DeFi protocols, NFT platforms, infrastructure, and
            strategic advisory work.
          </p>
        </div>

        {/* Projects Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnProjects.map((project, index) => renderProjectCard(project, index))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnProjects.map((project, index) => renderProjectCard(project, index + 4))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-500 italic">
            ...and several other Antarctic missions currently in progress.
          </p>
        </div>
      </div>
    </section>
  )
}
