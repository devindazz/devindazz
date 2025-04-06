"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen w-full bg-[#030303] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Simple elegant shapes - static instead of animated */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] w-[600px] h-[140px] rotate-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </div>

        <div className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] w-[500px] h-[120px] -rotate-15">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
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
          className="text-5xl font-extrabold text-white md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
        >
          Devinda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-3xl text-white/60 mt-4"
        >
          Software Engineer Student
        </motion.p>

        {/* Social icons */}
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
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-white z-20"
      >
        <p className="mb-2 text-sm">scroll down</p>
        <ChevronDown size={24} />
      </motion.div>
    </div>
  )
}

