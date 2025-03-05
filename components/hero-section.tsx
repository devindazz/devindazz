"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "light" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      
      {/* Content Container */}
      <div className="z-10 flex flex-col items-center justify-center px-4 text-center md:px-6">
        {/* Greeting */}
        <motion.p
            className="mb-2 font-mono text-lg text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1.2 }}
          >
            Devinda
          </motion.h1>

          <motion.h2
            className="mt-4 text-2xl font-semibold text-foreground md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Software Engineering Student
          </motion.h2>

          <motion.div
            className="mt-6 h-1 w-20 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          />

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button size="lg" className="rounded-full px-8">
              <Link href="#projects" className="flex items-center">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="https://github.com/devindazz" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="https://www.linkedin.com/in/devinda-wijesingha-aba63b2b7/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </motion.div>
    </div>
    </div>
  )
}