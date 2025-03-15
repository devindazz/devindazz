"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define available color schemes
const colorSchemes = [
  { name: "Purple", value: "purple" },
  { name: "Blue", value: "blue" },
  { name: "Cyan", value: "cyan" },
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [colorScheme, setColorScheme] = useState("purple")

  // After mounting, we can safely show the theme switcher
  useEffect(() => {
    setMounted(true)
  }, [])

  // Save color scheme to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("colorScheme", colorScheme)
      // You could dispatch a custom event here to notify other components
      window.dispatchEvent(new CustomEvent("colorSchemeChange", { detail: colorScheme }))
    }
  }, [colorScheme, mounted])

  // Load color scheme from localStorage on mount
  useEffect(() => {
    if (mounted) {
      const savedColorScheme = localStorage.getItem("colorScheme")
      if (savedColorScheme) {
        setColorScheme(savedColorScheme)
      }
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Color Scheme Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Palette className="h-5 w-5" />
            <span className="sr-only">Select color scheme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {colorSchemes.map((scheme) => (
            <DropdownMenuItem
              key={scheme.value}
              onClick={() => setColorScheme(scheme.value)}
              className={colorScheme === scheme.value ? "bg-accent" : ""}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor:
                      scheme.value === "purple"
                        ? "#8a2be2"
                        : scheme.value === "blue"
                          ? "#4169e1"
                          : scheme.value === "cyan"
                            ? "#00ced1"
                            : scheme.value === "red"
                              ? "#dc143c"
                              : "#2e8b57", // green
                  }}
                />
                {scheme.name}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

