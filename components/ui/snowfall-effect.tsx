"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Snowflake icons using Unicode snowflake characters
const snowflakeIcons = ["❄", "❅", "❆", "✻", "✼", "✽", "❉", "❊", "❋"]

interface Snowflake {
  id: number
  icon: string
  x: number
  size: number
  opacity: number
  delay: number
  duration: number
  blur: number
  color: string
  glow: string
}

export default function SnowfallEffect({ density = 30 }) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Generate snowflakes
    const flakes: Snowflake[] = []
    for (let i = 0; i < density; i++) {
      flakes.push(createSnowflake(i, window.innerWidth))
    }
    setSnowflakes(flakes)

    // Update dimensions on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [density])

  // Update the createSnowflake function to include color variations and higher opacity
  const createSnowflake = (id: number, width: number): Snowflake => {
    // Add subtle colors to some snowflakes
    const colors = [
      "text-white", // Default white
      "text-blue-100", // Very light blue
      "text-cyan-100", // Light cyan
      "text-indigo-100", // Light indigo
    ]

    // Add subtle glow effects
    const glowEffects = [
      "", // No glow for some
      "drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))",
      "drop-shadow(0 0 3px rgba(191, 219, 254, 0.8))", // blue-100 glow
      "drop-shadow(0 0 3px rgba(207, 250, 254, 0.8))", // cyan-100 glow
    ]

    const colorIndex = Math.floor(Math.random() * colors.length)

    return {
      id,
      icon: snowflakeIcons[Math.floor(Math.random() * snowflakeIcons.length)],
      x: Math.random() * width,
      size: Math.random() * 1.5 + 0.8, // Slightly larger: Size between 0.8 and 2.3
      opacity: Math.random() * 1 + 1, // Higher opacity: between 0.5 and 1
      delay: Math.random() * 1, // Random start delay
      duration: Math.random() * 10 + 10, // Fall duration between 10-20s
      blur: Math.random() > 0.8 ? Math.random() * 2 : 0, // Occasional blur for depth
      color: colors[colorIndex],
      glow: glowEffects[Math.floor(Math.random() * glowEffects.length)],
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className={`absolute ${flake.color}`}
          initial={{
            x: flake.x,
            y: -50,
            opacity: 0,
          }}
          animate={{
            x: [flake.x - 20, flake.x + 20, flake.x - 10, flake.x + 10, flake.x],
            y: dimensions.height + 50,
            opacity: [0, flake.opacity, flake.opacity, flake.opacity, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          style={{
            fontSize: `${flake.size}rem`,
            filter: `${flake.blur ? `blur(${flake.blur}px)` : "none"} ${flake.glow}`,
          }}
        >
          {flake.icon}
        </motion.div>
      ))}
    </div>
  )
}

