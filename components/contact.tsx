"use client"

import { useState } from "react"
import { Mail, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dbsxodnr8548@naver.com")
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 500)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }
  return (
    <section className="relative w-full min-h-[720px] md:min-h-0 pt-6 pb-40 md:pt-24 md:pb-24 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 pixel-stars" />

      {/* 왼쪽 아래 구석 - P */}
      <div className="pointer-events-none select-none absolute bottom-0 left-0 z-10 scale-[1.5] origin-bottom-left">
        <img
          src="/images/Pingu_and_robby-P.png"
          alt=""
          className="w-40 md:w-56 lg:w-64 h-auto object-contain"
        />
      </div>

      {/* 오른쪽 아래 구석 - R */}
      <div className="pointer-events-none select-none absolute bottom-0 right-0 z-10 scale-[1.5] origin-bottom-right">
        <img
          src="/images/Pingu_and_robby-R.png"
          alt=""
          className="w-32 md:w-44 lg:w-52 h-auto object-contain"
        />
      </div>

      <div className="container relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 md:pt-0">
        {/* Header */}
        <div className="text-center mb-20 md:mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 glow-text">Work with Web3 Penguin</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto px-2 md:px-8 mb-8 text-center">
            Available for full-time roles in Web3 Product Management, Tokenomics design, and Business Development. Also
            open to advisory positions and consulting engagements for blockchain projects.
          </p>

          {/* CTA Buttons */}
          {/* Mobile buttons */}
          <div className="block md:hidden mb-8">
            <div className="flex flex-col gap-4">
              {/* 1) Email – full width */}
              <div>
                <Button
                  size="lg"
                  onClick={handleCopyEmail}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white border-2 border-sky-400 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact via Email
                </Button>
                {copied && (
                  <p className="mt-2 text-xs text-emerald-400 font-mono text-center">
                    Email Address Copied!
                  </p>
                )}
              </div>

              {/* 2) LinkedIn + Telegram side-by-side */}
              <div className="flex flex-row gap-3 w-full">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-1/2 border-2 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 bg-transparent"
                >
                  <a href="https://www.linkedin.com/in/hamzzi/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    View LinkedIn
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-1/2 border-2 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 bg-transparent"
                >
                  <a href="https://t.me/ugk_setsuka" target="_blank" rel="noopener noreferrer">
                    <Send className="w-5 h-5 mr-2" />
                    Chat on Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop buttons – horizontal layout */}
          <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:gap-6 mb-8">
            <div>
              <Button
                size="lg"
                onClick={handleCopyEmail}
                className="md:w-auto bg-sky-500 hover:bg-sky-600 text-white border-2 border-sky-400 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact via Email
              </Button>
              {copied && (
                <p className="mt-2 text-xs text-emerald-400 font-mono text-center">
                  Email Address Copied!
                </p>
              )}
            </div>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="md:w-auto border-2 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 bg-transparent"
            >
              <a href="https://www.linkedin.com/in/hamzzi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                View LinkedIn
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="md:w-auto border-2 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 bg-transparent"
            >
              <a href="https://t.me/ugk_setsuka" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5 mr-2" />
                Chat on Telegram
              </a>
            </Button>
          </div>

          {/* Status line */}
          <p className="text-sm text-slate-500">
            Currently open to : <span className="text-slate-400">Web3 Accelerating, Whitepaper & Tokenomics, and Marketing roles</span>
          </p>
        </div>
      </div>
    </section>
  )
}
