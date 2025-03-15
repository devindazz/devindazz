"use client"

import type React from "react"

import { useRef } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useColors } from "@/app/color-context"

export function HeroSection() {
  const { theme } = useTheme()
  const { colors } = useColors()
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Parallax effect for mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    }
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig)
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig)

  // Scroll-based animations
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Glassmorphism Card */}
      <motion.div
        className="z-10 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-black/10 px-8 py-12 backdrop-blur-xl dark:bg-white/5 md:px-12"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {/* 3D Layered Content */}
        <motion.div className="flex flex-col items-center justify-center text-center">
          {/* Greeting with 3D transform */}
          <motion.p
            className="mb-2 font-mono text-lg text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              transform: "translateZ(20px)",
            }}
          >
            Hello, I'm
          </motion.p>

          {/* Name with 3D effect and enhanced gradient */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 2.1 }}
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <motion.h1
              className={`bg-gradient-to-r ${colors.primaryTextGradient} bg-clip-text text-6xl font-extrabold tracking-tight text-transparent drop-shadow-[0_5px_15px_rgba(124,58,237,0.4)] sm:text-7xl md:text-8xl`}
              style={{
                textShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              Devinda
            </motion.h1>

            {/* Text shadow/glow effect */}
            <div
              className={`absolute left-0 top-0 -z-10 select-none bg-gradient-to-r ${colors.primaryTextGradient} bg-clip-text text-6xl font-extrabold tracking-tight text-transparent opacity-30 blur-xl sm:text-7xl md:text-8xl`}
            >
              Devinda
            </div>
          </motion.div>

          {/* Title with 3D transform */}
          <motion.h2
            className="mt-4 text-2xl font-semibold text-foreground md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 5.5 }}
            style={{
              transform: "translateZ(30px)",
            }}
          >
            Software Engineering Student
          </motion.h2>

          {/* Animated divider */}
          <motion.div
            className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r ${colors.primaryButtonGradient}`}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            style={{
              transform: "translateZ(25px)",
              boxShadow: `0 0 10px ${colors.primaryLightColor}80`,
            }}
          />

          {/* Buttons with 3D hover effect */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            style={{
              transform: "translateZ(40px)",
            }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              <Link href="#projects" className="flex items-center">
                <span className="relative z-10">View My Work</span>
                <motion.span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
                <span
                  className={`absolute inset-0 -z-10 bg-gradient-to-r ${colors.primaryButtonGradient} opacity-100 transition-all duration-300 group-hover:opacity-90`}
                ></span>
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden rounded-full border-primary/50 px-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <Link href="#contact">
                <span className="relative z-10">Contact Me</span>
                <span
                  className={`absolute inset-0 -z-10 bg-gradient-to-r ${colors.primaryButtonGradient.replace("from-", "from-").replace("to-", "to-")}/10 opacity-0 transition-all duration-300 group-hover:opacity-100`}
                ></span>
              </Link>
            </Button>
          </motion.div>

          {/* Social icons with 3D hover effect */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              transform: "translateZ(35px)",
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="group rounded-full transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <Link href="https://github.com/devindazz" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="group rounded-full transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/devinda-wijesingha-aba63b2b7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <p className="mb-2 text-sm text-white/70 dark:text-white/70">Scroll Down</p>
        <div className={`h-6 w-[1px] bg-gradient-to-b from-primary to-transparent`} />
      </motion.div>
    </motion.div>
  )
}

