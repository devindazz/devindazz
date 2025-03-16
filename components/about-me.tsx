"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import DaytimeParticleBackground from "@/components/ui/daytime-particles"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/day-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Daytime Particle Animation */}
      <div className="absolute inset-0 z-0 opacity-40">
        <DaytimeParticleBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full px-8 py-16 md:px-16 lg:px-24 flex flex-col">
        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-auto"
        ></motion.div>

        {/* Main Content - Positioned Lower */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
          {/* Left Side - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl"
          >
            {/* Background container for better visibility */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg md:mt-0">
              <h2 className="text-xl text-black mb-6 font-medium">Something About Me !</h2>

              <p className="text-white text-xl mb-8 leading-relaxed">
                I'm Devinda Wijesinghe, a second-year Software Engineering student passionate about exploring different
                technologies and building impactful software, transforming ideas into reality through code while
                constantly learning and improving.
              </p>

              <p className="text-white text-lg leading-relaxed">
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
            className="mt-8 md:mt-0"
          >
            <div className="w-40 h-40 -mt-20 md:w-48 md:h-48 top lg:w-56 lg:h-56 bg-gray-200/90 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/my-profile-photo.jpg"
                alt="Devinda Wijesinghe"
                width={224}
                height={224}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

