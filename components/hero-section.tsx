"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import SynthwaveParticles from "./ui/synthwave-particles"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full"
      style={{
        backgroundImage:
          "url('/sssss.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <SynthwaveParticles 
      particleCount={500}
      particleSize={0.07}
      autoRotate={true}
      speed={0.3}
      />
      {/* Main Content */}
      <div className="absolute mx-auto top-32 left-0 right-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl font-mono text-white md:text-2xl"
        >
          Hello i am
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl font-extrabold text-white md:text-7xl"
        >
          Devinda
        </motion.h1>
      </div>

      {/* Software Engineer */}
      <div className="absolute mx-auto top-1/2 left-0 right-0 flex flex-col items-center justify-center text-white z-10 mt-44 md:mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-3xl"
        >
          Software Engineer Student
        </motion.p>

        {/* Social icons - moved below the text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex gap-6"
        >
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
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-white animate-bounce"
      >
        <p className="mb-2 text-sm">scroll down</p>
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  )
}

