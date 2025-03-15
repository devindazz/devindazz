"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define color schemes
export const colorSchemes = {
  purple: {
    backgroundColor: "#0a0a1a",
    particleColor: "#ffffff",
    primaryLightColor: "#8a2be2", // BlueViolet
    secondaryLightColor: "#9370db", // MediumPurple
    primaryTextGradient: "from-purple-500 via-violet-500 to-purple-400",
    primaryButtonGradient: "from-purple-600 to-violet-600",
  },
  blue: {
    backgroundColor: "#0a0a2a",
    particleColor: "#ffffff",
    primaryLightColor: "#4169e1", // RoyalBlue
    secondaryLightColor: "#1e90ff", // DodgerBlue
    primaryTextGradient: "from-blue-500 via-sky-500 to-blue-400",
    primaryButtonGradient: "from-blue-600 to-sky-600",
  },
  cyan: {
    backgroundColor: "#0a1a1a",
    particleColor: "#ffffff",
    primaryLightColor: "#00ced1", // DarkTurquoise
    secondaryLightColor: "#20b2aa", // LightSeaGreen
    primaryTextGradient: "from-cyan-500 via-teal-500 to-cyan-400",
    primaryButtonGradient: "from-cyan-600 to-teal-600",
  },
  red: {
    backgroundColor: "#1a0a0a",
    particleColor: "#ffffff",
    primaryLightColor: "#dc143c", // Crimson
    secondaryLightColor: "#ff4500", // OrangeRed
    primaryTextGradient: "from-red-500 via-rose-500 to-red-400",
    primaryButtonGradient: "from-red-600 to-rose-600",
  },
  green: {
    backgroundColor: "#0a1a0a",
    particleColor: "#ffffff",
    primaryLightColor: "#2e8b57", // SeaGreen
    secondaryLightColor: "#3cb371", // MediumSeaGreen
    primaryTextGradient: "from-green-500 via-emerald-500 to-green-400",
    primaryButtonGradient: "from-green-600 to-emerald-600",
  },
}

type ColorSchemeType = keyof typeof colorSchemes
type ColorContextType = {
  colorScheme: ColorSchemeType
  setColorScheme: (scheme: ColorSchemeType) => void
  colors: typeof colorSchemes.purple
}

const ColorContext = createContext<ColorContextType>({
  colorScheme: "purple",
  setColorScheme: () => {},
  colors: colorSchemes.purple,
})

export const useColors = () => useContext(ColorContext)

export function ColorProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>("purple")
  const [mounted, setMounted] = useState(false)

  // Load color scheme from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedColorScheme = localStorage.getItem("colorScheme") as ColorSchemeType
    if (savedColorScheme && colorSchemes[savedColorScheme]) {
      setColorScheme(savedColorScheme)
    }
  }, [])

  // Save color scheme to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("colorScheme", colorScheme)
    }
  }, [colorScheme, mounted])

  // Listen for color scheme changes from other components
  useEffect(() => {
    const handleColorSchemeChange = (e: CustomEvent) => {
      if (e.detail && colorSchemes[e.detail as ColorSchemeType]) {
        setColorScheme(e.detail as ColorSchemeType)
      }
    }

    window.addEventListener("colorSchemeChange", handleColorSchemeChange as EventListener)
    return () => {
      window.removeEventListener("colorSchemeChange", handleColorSchemeChange as EventListener)
    }
  }, [])

  return (
    <ColorContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        colors: colorSchemes[colorScheme],
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

