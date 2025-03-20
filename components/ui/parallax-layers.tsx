"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxLayers() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()

  // Transform values for parallax effect
  const skyY = useTransform(scrollY, [0, 500], [0, 50])
  const mountainsY = useTransform(scrollY, [0, 500], [0, 30])
  const forestY = useTransform(scrollY, [0, 500], [0, 15])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky layer */}
      <motion.div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600" style={{ y: skyY }} />

      {/* Mountains layer */}
      <motion.div
        className="absolute inset-0 bg-[url('/contact-background.jpg')] bg-cover bg-center"
        style={{ y: mountainsY }}
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}

