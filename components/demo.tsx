"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Particles } from "@/components/ui/particles"

export function ParticlesDemo() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "light" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center min-h-dvh justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/80">
        Devinda
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
