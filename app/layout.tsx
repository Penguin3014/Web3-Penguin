import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hello, I'm Penguin 🐧",
  description: "BLOCKCHAIN BUILDER | Accelerator.",
  generator: "v0.app",
  
  // Open Graph 추가
  openGraph: {
    title: "Hello, I'm Penguin 🐧",
    description: "BLOCKCHAIN BUILDER | Accelerator.",
    url: "https://www.web3-penguin.store/",
    siteName: "Web3 Penguin",
    images: [
      {
        url: "/OG.png",  // public/OG.png
        width: 1200,
        height: 630,
        alt: "Penguin OG Image",
      }
    ],
    locale: "ko_KR",
    type: "website",
  },
  
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
