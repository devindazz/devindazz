"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ElegantShape } from "@/components/ui/elegant-shape"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen w-full bg-[#030303] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Elegant shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
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

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      {/* Modern Animated Scroll Button */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <motion.button
          onClick={() => router.push("/Aboutme")} // Change to your desired page
          className="relative group flex flex-col items-center"
          whileHover="hover"
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute -inset-4 rounded-full opacity-0 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 blur-md group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Text with gradient animation */}
          <motion.span
            className="text-sm font-light tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            scroll down
          </motion.span>

          {/* Animated chevron */}
          <motion.div
            className="relative"
            variants={{
              hover: {
                y: 5,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
            }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: [0, 1, 0],
                y: [0, 10, 20],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
                times: [0, 0.5, 1],
              }}
            >
              <ChevronDown size={24} className="text-white/30" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={24} className="text-white" />
            </motion.div>
          </motion.div>
        </motion.button>
      </div>
    </div>
  )
}

