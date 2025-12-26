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

  // Desktop Hero Text - 원래 데스크톱 버전 (한 줄 스타일)
  const DesktopHeroText = () => (
    <>
      {/* Eyebrow 텍스트 - 픽셀 스타일 (한 줄) */}
      <div className="inline-flex w-fit">
        <span className="text-xs md:text-sm lg:text-base font-mono font-bold tracking-widest text-[#0ea5e9] uppercase px-4 py-2 md:px-6 md:py-3 border border-[#0ea5e9]/30 rounded-full bg-[#0ea5e9]/5 backdrop-blur-sm">
          WEB3 PENGUIN · BLOCKCHAIN BUILDER | Accelerator
        </span>
      </div>

      {/* 메인 헤딩 */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-tight">
        <span className="text-white glow-text">
          Building Web3 products in an On‑chain world
        </span>
      </h1>

      {/* 서브 헤딩 */}
      <p className="mt-4 text-lg md:text-xl text-slate-300 md:text-slate-100 max-w-2xl leading-relaxed">
        Web3 product and tokenomics architect focused on global listings, DeFi · NFT · infra business design and blockchain business development.
      </p>

      {/* CTA 버튼들 */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2 mt-6 md:mt-8">
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
      <p className="text-lg md:text-xl text-white font-mono pt-4 md:pt-8">Currently exploring Infra · Whitepaper · Tokenomics · NFT and DeFi</p>
    </>
  )

  // Mobile Hero Text - 모바일 전용 줄바꿈 버전
  const MobileHeroText = () => (
    <>
      {/* Eyebrow 텍스트 - 픽셀 스타일 (두 줄) */}
      <div className="inline-flex w-fit mx-auto mb-6">
        <span className="text-sm font-mono font-bold tracking-widest text-[#0ea5e9] uppercase px-5 py-2.5 border border-[#0ea5e9]/30 rounded-full bg-[#0ea5e9]/5 backdrop-blur-sm text-center">
          WEB3 PENGUIN
          <br />
          BLOCKCHAIN BUILDER | ACCELERATOR
        </span>
      </div>

      {/* 메인 헤딩 (두 줄) */}
      <h1 className="text-3xl font-bold leading-snug text-white text-center mt-2">
        <span className="glow-text">
          Building Web3 products
          <br />
          in an On‑chain world
        </span>
      </h1>

      {/* 서브 헤딩 */}
      <p className="mt-5 text-base text-slate-300 max-w-sm mx-auto px-4 leading-relaxed text-center">
        Web3 product and tokenomics architect focused on global listings, DeFi · NFT · infra business design and blockchain business development.
      </p>

      {/* CTA 버튼들 */}
      <div className="flex flex-col gap-4 mt-7 mb-2 items-center">
        <Button
          size="lg"
          onClick={scrollToExpeditionLog}
          className="w-11/12 max-w-xs bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white font-semibold group border border-[#0ea5e9]/50 shadow-lg shadow-[#0ea5e9]/20 text-base px-6 py-4"
        >
          View Antarctic Expedition Log
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-11/12 max-w-xs border-2 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 bg-transparent text-base px-6 py-4"
        >
          <a href="https://t.me/ugk_setsuka" target="_blank" rel="noopener noreferrer">
            <Send className="w-5 h-5 mr-2" />
            Chat on Telegram
          </a>
        </Button>
      </div>

      {/* 추가 정보 (두 줄) */}
      <p className="text-base text-white font-mono pt-1 text-center">
        Currently exploring
        <br />
        Infra · Whitepaper · Tokenomics · NFT and DeFi
      </p>
    </>
  )

  return (
    <section className="relative min-h-screen flex md:items-center md:justify-center items-start justify-start overflow-hidden">
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

      {/* 모바일: pt-10 pb-28 (텍스트를 약간 아래로 이동, 하단 여백 증가), 데스크톱: pt-20 pb-16 lg:pr-[640px] xl:pr-[720px] */}
      <div className="container relative z-10 px-4 md:px-6 pt-10 md:pt-20 pb-28 md:pb-16 lg:pr-[640px] xl:pr-[720px]">
        <div className="max-w-2xl mx-auto md:mx-0">
          {/* 왼쪽: 텍스트 콘텐츠 */}
          {/* 모바일: 중앙 정렬, 데스크톱: 왼쪽 정렬 */}
          {/* 모바일: space-y-5 (간격 증가), 데스크톱: space-y-8 lg:space-y-10 */}
          <div className="flex flex-col space-y-5 md:space-y-8 lg:space-y-10 text-center md:text-left">
            {/* Mobile text block */}
            <div className="block md:hidden">
              <MobileHeroText />
            </div>

            {/* Desktop text block */}
            <div className="hidden md:block">
              <DesktopHeroText />
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 전용: 하단 오른쪽 펭귄 이미지 (md 이상에서 숨김) */}
      <div className="absolute bottom-0 right-0 w-96 h-auto md:hidden pointer-events-none select-none z-10">
        <Image
          src="/images/pingu-1980-removebg-preview.png"
          alt="Web3 Penguin mascot"
          width={384}
          height={384}
          className="w-full h-auto drop-shadow-xl"
          priority={false}
        />
      </div>
    </section>
  )
}
