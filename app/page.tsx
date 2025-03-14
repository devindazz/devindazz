"use client"

import { HeroSection } from "@/components/hero-section"
import { Background3D } from "@/components/background3d"
import { useEffect, useState } from "react"
import AboutMe from "@/components/about-me"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      
      {mounted && <Background3D />}

     
      <div className="relative z-10">
        <HeroSection />
      </div>

      <div>
        <AboutMe />
      </div>

      {/* Rest of your page content goes here */}
    </main>
  )
}

