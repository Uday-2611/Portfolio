'use client'
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--primary)] font-['Aeonik']">{children}</body>
    </html>
  )
}
