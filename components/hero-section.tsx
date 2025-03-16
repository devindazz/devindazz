"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, ChevronDown } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaperflare.com_wallpaper%201.png-tXLqaomJwCzCL0Ht12PA1j7F4uYtor.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content - Moved higher up */}
      <div className="flex flex-col items-center justify-center text-center text-white z-10 px-4 mt-24 md:mt-32">
        <h2 className="text-xl font-light md:text-2xl">Hello I am</h2>
        <h1 className="mb-2 text-5xl font-bold md:text-7xl">Devinda</h1>
      </div>

      {/* Software Engineer - Moved higher */}
      <div className="flex-1 flex flex-col items-center justify-center text-white z-10 -mt-20 md:-mt-16">
        <p className="text-xl md:text-3xl">Software Engineer Student</p>

        {/* Smaller icons */}
        <div className="mt-6 flex gap-5">
          <Link href="https://github.com" className="transition-transform hover:scale-110">
            <Github size={24} className="text-white" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" className="transition-transform hover:scale-110">
            <Linkedin size={24} className="text-white" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mb-8 flex flex-col items-center text-white animate-bounce">
        <p className="mb-2 text-sm">scroll down</p>
        <ChevronDown size={24} />
      </div>
    </div>
  )
}

