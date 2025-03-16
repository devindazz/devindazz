"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"

import { motion, AnimatePresence } from "framer-motion"
import LoadingAnimation from "./ui/loading-animation"
import ParticleBackground from "./ui/particle-background"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Simulate loading time and resources
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds loading time for a more professional feel

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LoadingAnimation />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen w-full"
            style={{
              backgroundImage:
              "url('/night-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Particle Animation */}
            <div className="absolute inset-0 z-0">
              <ParticleBackground />
            </div>

            {/* Main Content */}
            <div className="absolute mx-auto top-20 left-0 right-0 flex flex-col items-center justify-center text-center z-10 px-4">
              <h2 className="text-xl font-light text-white md:text-2xl">Hello i am</h2>
              <h1 className="text-5xl font-bold text-white md:text-7xl">Devinda</h1>
            </div>

            {/* Software Engineer */}
            <div className="absolute top-1/2 left-0 right-0 flex flex-col items-center justify-center text-white z-10 mt-44 md:mt-20">
              <p className="text-xl md:text-3xl">Software Engineer Student</p>

              {/* Social icons - moved below the text */}
              <div className="mt-8 flex gap-6">
                <Link href="https://github.com/devindazz" className="transition-transform hover:scale-110">
                  <Github size={28} className="text-white" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/devinda-wijesingha-aba63b2b7/"
                  className="transition-transform hover:scale-110"
                >
                  <Linkedin size={28} className="text-white" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-white animate-bounce">
              <p className="mb-2 text-sm">scroll down</p>
              <ChevronDown size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

