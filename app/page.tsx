"use client"

import { HeroSection } from "@/components/hero-section"
import { Background3D } from "@/components/background3d"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import AboutMe from "@/components/about-me"

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background3D with conditional rendering based on theme */}
      {mounted && <Background3D className={`opacity-${theme === "dark" ? "100" : "70"}`} />}

      {/* Hero Section with transparent background */}
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

