"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ElegantShape } from "@/components/ui/elegant-shape"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const aboutTextRef = useRef<HTMLDivElement>(null)
  const isAboutTextInView = useInView(aboutTextRef, { once: true, amount: 0.3 })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to scroll to the about section
  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  if (!mounted) return null

  return (
    <main className="bg-[#030303]">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
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
          {/* Enhanced Greeting Animation */}
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl font-mono text-white/80 md:text-2xl tracking-wider"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% center", "200% center"],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Hello I am
              </motion.span>
            </motion.h2>
          </div>

          {/* Enhanced Name Animation */}
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl font-extrabold text-white md:text-7xl bg-clip-text text-transparent py-2 px-4"
            >
              <motion.span
                initial={{ display: "inline-block" }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -2, 0, 2, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 1],
                }}
                className="inline-block"
              >
                Devinda
              </motion.span>
            </motion.h1>
          </div>

          {/* Enhanced Role Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 relative"
          >
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -inset-2 rounded-full blur-md bg-gradient-to-r from-indigo-500/10 to-rose-500/10 -z-10"
            />
            <p className="text-xl md:text-3xl text-white/60 relative">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 8px rgba(255,255,255,0)",
                    "0 0 16px rgba(255,255,255,0.3)",
                    "0 0 8px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Software Engineer Student
              </motion.span>
            </p>
          </motion.div>

          {/* Social icons with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="https://github.com/devindazz" className="relative group">
                <motion.div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 bg-white/10 blur-md transition-opacity duration-300" />
                <Github size={28} className="text-white relative z-10" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="https://www.linkedin.com/in/devinda-wijesingha-aba63b2b7/" className="relative group">
                <motion.div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 bg-white/10 blur-md transition-opacity duration-300" />
                <Linkedin size={28} className="text-white relative z-10" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

        {/* Modern Animated Scroll Button */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <motion.button
            onClick={scrollToAbout} // Scroll to about section
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

      {/* About Section - Using the provided AboutPage content */}
      <div ref={aboutSectionRef} className="relative min-h-dvh w-full bg-neutral-950 overflow-hidden">
        {/* Simple static background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />

        {/* Content Container */}
        <div className="relative z-10 min-h-dvh w-full px-4 sm:px-8 py-12 sm:py-16 md:px-16 lg:px-24 flex flex-col">
          {/* Back to Top Link */}
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
              ref={aboutTextRef}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 md:order-1 w-full md:max-w-xl mt-6 md:mt-0"
            >
              {/* Background container for better visibility */}
              <div className="bg-zinc-950/80 backdrop-blur-sm p-5 sm:p-6 rounded-lg border border-white/20 shadow-lg">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutTextInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-xl text-white mb-4 sm:mb-6 font-medium"
                >
                  Something About Me !
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutTextInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed"
                >
                  I'm Devinda Wijesinghe, a second-year Software Engineering student passionate about exploring
                  different technologies and building impactful software, transforming ideas into reality through code
                  while constantly learning and improving.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutTextInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
                >
                  Outside of tech, I stay active with weightlifting and enjoy unwinding at night with video games,
                  whether competing or exploring new worlds. I'm always pushing my limits whether in development,
                  fitness, or gaming to become better.
                </motion.p>
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
      </div>
    </main>
  )
}
