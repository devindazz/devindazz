"use client"

import { useState, useEffect } from "react"

interface TypeAnimationProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypeAnimation({ text, className = "", speed = 50, delay = 0 }: TypeAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    // Initial delay before starting the typing animation
    const initialTimer = setTimeout(() => {
      setStartTyping(true)
    }, delay)

    return () => clearTimeout(initialTimer)
  }, [delay])

  useEffect(() => {
    if (!startTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, startTyping])

  return (
    <p className={className}>
      {displayedText}
      <span className="inline-block w-0.5 h-4 ml-0.5 bg-white/70 animate-pulse"></span>
    </p>
  )
}
