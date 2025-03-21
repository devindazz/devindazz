"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BeamsBackground } from "@/components/ui/beams-background"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <BeamsBackground intensity="strong">
      {/* Content Container */}
      <div className="relative z-10 min-h-dvh w-full px-4 sm:px-8 py-12 sm:py-16 md:px-16 lg:px-24 flex flex-col">
        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-auto"
        ></motion.div>

        {/* Main Content - Positioned Lower */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 md:mb-32">
          {/* Left Side - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1 w-full md:max-w-xl mt-6 md:mt-0"
          >
            {/* Background container for better visibility */}
            <div className="bg-zinc-950/80 backdrop-blur-sm p-5 sm:p-6 rounded-lg border border-white/20 shadow-lg">
              <h2 className="text-xl text-white mb-4 sm:mb-6 font-medium">Something About Me !</h2>

              <p className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
                I'm Devinda Wijesinghe, a second-year Software Engineering student passionate about exploring different
                technologies and building impactful software, transforming ideas into reality through code while
                constantly learning and improving.
              </p>

              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                Outside of tech, I stay active with weightlifting and enjoy unwinding at night with video games, whether
                competing or exploring new worlds. I'm always pushing my limits whether in development, fitness, or
                gaming to become better.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gray-200/90 rounded-full overflow-hidden flex items-center justify-center shadow-lg border-2 border-white/20">
              <Image
                src="/profile.jpg"
                alt="Devinda Wijesinghe"
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  )
}

