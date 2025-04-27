"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ElegantShape } from "@/components/ui/elegant-shape"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isAboutVisible, setIsAboutVisible] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if mobile on initial load and on resize
    const checkMobile = () => {
      // Increased threshold to 1024px to include more devices that might struggle with animations
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Set up intersection observer for the about section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true)
            // Once we've seen it, no need to keep observing
            if (aboutSectionRef.current) {
              observer.unobserve(aboutSectionRef.current)
            }
          }
        })
      },
      { threshold: 0.2 }, // Trigger when 20% of the element is visible
    )

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current)
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current)
      }
    }
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
        {/* Background gradient - only on desktop */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        )}

        {/* Elegant shapes background - only on desktop */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden">
            <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="from-indigo-500/[0.15]"
              className="left-[-5%] top-[20%]"
              simplified={false}
            />
            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-rose-500/[0.15]"
              className="right-[0%] top-[75%]"
            />
            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[10%] bottom-[10%]"
            />
            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="from-amber-500/[0.15]"
              className="right-[20%] top-[15%]"
            />
            <ElegantShape
              delay={0.7}
              width={150}
              height={40}
              rotate={-25}
              gradient="from-cyan-500/[0.15]"
              className="left-[25%] top-[10%]"
            />
          </div>
        )}

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
              {isMobile ? (
                <span>Hello I am</span>
              ) : (
                <motion.span
                  animate={{ backgroundPosition: ["0% center", "200% center"] }}
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
              )}
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
              className="text-5xl font-extrabold text-white md:text-7xl py-2 px-4"
            >
              {isMobile ? (
                "Devinda"
              ) : (
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
              )}
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
            {/* Background glow - only on desktop */}
            {!isMobile && (
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
            )}

            <p className="text-xl md:text-3xl text-white/60 relative">
              {isMobile ? (
                <span>Software Engineer Student</span>
              ) : (
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
              )}
            </p>
          </motion.div>

          {/* Social icons with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex gap-6"
          >
            {isMobile ? (
              <>
                <Link href="https://github.com/devindazz" className="relative">
                  <Github size={28} className="text-white" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/devinda-wijesingha-aba63b2b7/" className="relative">
                  <Linkedin size={28} className="text-white" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </>
            ) : (
              <>
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
              </>
            )}
          </motion.div>
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

        {/* Modern Animated Scroll Button */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <motion.button
            onClick={scrollToAbout}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative group flex flex-col items-center"
            whileHover={isMobile ? undefined : "hover"}
          >
            {/* Animated glow effect - only on desktop */}
            {!isMobile && (
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
            )}

            {/* Text with gradient animation */}
            {isMobile ? (
              <span className="text-sm font-light tracking-wider mb-2 text-white">scroll down</span>
            ) : (
              <motion.span
                className="text-sm font-light tracking-wider mb-2 text-white"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Scroll Down
              </motion.span>
            )}

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
              {isMobile ? (
                <ChevronDown size={24} className="text-white" />
              ) : (
                <>
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
                </>
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* About Section - Using the provided AboutPage content */}
      <div ref={aboutSectionRef} className="relative h-screen w-full bg-neutral-950 overflow-hidden">
        {/* Simple static background - only on desktop */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />
        )}

        {/* Content Container */}
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          {/* Main Content - Centered in the page */}
          <div className="w-full max-w-7xl px-4 sm:px-8 md:px-16 lg:px-24 py-8 flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-16 lg:gap-24">
            {/* Right Side - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: isAboutVisible ? 0.2 : 0.1,
              }}
              className="order-1 md:order-1"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gray-200/90 rounded-full overflow-hidden flex items-center justify-center shadow-lg border-2 border-white/20">
                <Image
                  src="/profile.jpg"
                  alt="Devinda Wijesinghe"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Left Side - About Me Text */}
            <div className="order-2 md:order-2 w-full max-w-xl">
              <div className="bg-zinc-950/80 backdrop-blur-sm p-5 sm:p-6 rounded-lg border border-white/20 shadow-lg">
                <div className="relative mb-4 sm:mb-6">
                  <motion.h2
                    className="text-xl md:text-2xl text-white font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: isAboutVisible ? 0 : 0.2,
                    }}
                  >
                    Something About Me !
                  </motion.h2>

                  {/* Animated line */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500"
                    initial={{ width: 0 }}
                    animate={{ width: isAboutVisible ? "100%" : "0%" }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3,
                    }}
                  />
                </div>

                <motion.p
                  className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: isAboutVisible ? 0.4 : 0.3,
                  }}
                >
                  I'm Devinda Wijesinghe, a second-year Software Engineering student passionate about exploring
                  different technologies and building impactful software, transforming ideas into reality through code
                  while constantly learning and improving.
                </motion.p>

                <motion.p
                  className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: isAboutVisible ? 0.6 : 0.4,
                  }}
                >
                  Outside of tech, I stay active with weightlifting and enjoy unwinding at night with video games,
                  whether competing or exploring new worlds. I'm always pushing my limits whether in development,
                  fitness, or gaming to become better.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
