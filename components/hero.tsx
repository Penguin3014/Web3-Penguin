"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ArrowRight, Send } from "lucide-react"

export function Hero() {
  const leftEyeRef = useRef<HTMLDivElement | null>(null)
  const rightEyeRef = useRef<HTMLDivElement | null>(null)
  const leftEyeMobileRef = useRef<HTMLDivElement | null>(null)
  const rightEyeMobileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    let frameId: number | null = null

    const resetEyes = () => {
      const eyes = [
        leftEyeRef.current,
        rightEyeRef.current,
        leftEyeMobileRef.current,
        rightEyeMobileRef.current,
      ].filter(Boolean) as HTMLDivElement[]

      eyes.forEach((eye) => {
        eye.style.transform = "translate3d(0, 0, 0)"
      })
    }

    const updateEyes = (clientX: number, clientY: number) => {
      const eyes = [
        { ref: rightEyeRef, maxOffset: 10, isLeftEye: false },
        { ref: leftEyeRef, maxOffset: 8, isLeftEye: true },
        { ref: rightEyeMobileRef, maxOffset: 10, isLeftEye: false },
        { ref: leftEyeMobileRef, maxOffset: 6, isLeftEye: true },
      ]
    
      eyes.forEach(({ ref, maxOffset, isLeftEye }) => {
        const eye = ref.current
        if (!eye) return
    
        const rect = eye.getBoundingClientRect()
        const eyeCenterX = rect.left + rect.width / 2
        const eyeCenterY = rect.top + rect.height / 2
    
        const dx = clientX - eyeCenterX
        const dy = clientY - eyeCenterY
    
        const angle = Math.atan2(dy, dx)
        let offsetX = Math.cos(angle) * maxOffset
        let offsetY = Math.sin(angle) * maxOffset
    
        if (isLeftEye) {
          const angleDeg = (angle * 180) / Math.PI
    
          // 위쪽 범위 줄이기
          if (angleDeg > -170 && angleDeg < -30) {
            offsetY *= 1.0
          }
    
          // 오른쪽 범위 많이 줄이기
          if (angleDeg > -60 && angleDeg < 60) {
            offsetX *= 0.25
          }
    
          // 아래쪽 범위 늘리기
          if (angleDeg > 30 && angleDeg < 180) {
            offsetY *= 1.9
          }
        }
    
        // ★ 반드시 isLeftEye 블록 바깥, forEach 블록 안에 있어야 함
        eye.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`
      })
    }
    

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event

      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      frameId = window.requestAnimationFrame(() => {
        updateEyes(clientX, clientY)
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
      resetEyes()
    }
  }, [])

  const scrollToExpeditionLog = () => {
    const el = document.getElementById("expedition-log")
    if (!el) {
      return
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1729] via-50% to-[#38bdf8]" />
      <div className="absolute inset-0 pixel-stars" />
      <div className="absolute inset-0 grid-pattern" />

      {/* 글로우 효과 */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-[120px]" />

      <div className="hidden lg:block absolute bottom-0 right-0 z-20 w-full max-w-[384px] xl:max-w-[448px]">
        <div className="relative origin-bottom-right scale-[1.7] xl:scale-[1.8] 2xl:scale-[1.85]">
          {/* Pingu 글로우 효과 */}
          <div className="absolute inset-0 bg-[#0ea5e9]/30 blur-[60px] rounded-full scale-90" />

          {/* Pingu 이미지 */}
          <div className="relative">
            <img src="/images/PINGU_BLANK.png" alt="Web3 Penguin" className="relative w-full h-auto drop-shadow-2xl" />
            <div className="pingu-eye-container" aria-hidden="true">
              <div ref={rightEyeRef} className="pingu-eye right-eye" />
              <div ref={leftEyeRef} className="pingu-left-eye-wrapper">
                <Image
                  src="/images/LEFT EYE.png"
                  alt=""
                  width={40}
                  height={40}
                  className="pointer-events-none select-none w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="absolute left-0 right-0 bottom-[-1px] h-[180px] pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, #020617 0%, #020617 30%, #0f172a 60%, #38bdf8 100%)",
        }}
      /> */}

      <div className="container relative z-10 px-4 md:px-6 py-20 lg:pr-[640px] xl:pr-[720px]">
        <div className="max-w-2xl">
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            {/* Eyebrow 텍스트 - 픽셀 스타일 */}
            <div className="inline-flex w-fit">
              <span className="text-xs md:text-sm font-mono tracking-widest text-[#0ea5e9] uppercase px-4 py-2 border border-[#0ea5e9]/30 rounded-full bg-[#0ea5e9]/5 backdrop-blur-sm">
                WEB3 PENGUIN · BLOCKCHAIN BUILDER | Accelerator
              </span>
            </div>

            {/* 메인 헤딩 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white glow-text">
                Building Web3 products in an On‑chain world
              </span>
            </h1>

            {/* 서브 헤딩 */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Web3 product and tokenomics architect focused on global listings, DeFi · NFT · infra business design and blockchain business development.
            </p>

            {/* CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                onClick={scrollToExpeditionLog}
                className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white font-semibold group border border-[#0ea5e9]/50 shadow-lg shadow-[#0ea5e9]/20 text-lg px-8 py-6"
              >
                View Antarctic Expedition Log
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 bg-transparent text-lg px-8 py-6"
              >
                <a href="https://t.me/ugk_setsuka" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Chat on Telegram
                </a>
              </Button>
            </div>

            {/* 추가 정보 */}
            <p className="text-lg md:text-xl text-white font-mono pt-2">Currently exploring Infra · Whitepaper · Tokenomics · NFT and DeFi</p>

            <div className="lg:hidden flex justify-center pt-8">
              <div className="relative max-w-[240px] w-full">
                {/* Pingu 글로우 효과 */}
                <div className="absolute inset-0 bg-[#0ea5e9]/30 blur-[40px] rounded-full scale-75" />

                {/* Pingu 이미지 */}
                <div className="relative">
                  <img src="/images/PINGU_BLANK.png" alt="Web3 Penguin" className="relative w-full h-auto drop-shadow-2xl" />
                  <div className="pingu-eye-container" aria-hidden="true">
                    <div ref={rightEyeMobileRef} className="pingu-eye right-eye" />
                    <div ref={leftEyeMobileRef} className="pingu-left-eye-wrapper">
                      <Image
                        src="/images/LEFT EYE.png"
                        alt=""
                        width={40}
                        height={40}
                        className="pointer-events-none select-none w-full h-full object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
