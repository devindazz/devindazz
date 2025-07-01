"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ChevronLeft, ChevronRight, Clock } from "lucide-react"

// Project data - currently only showing MediConnect
const projects = [
  {
    name: "MediConnect",
    description: `Built an AI-powered prescription scanner with real-time pharmacy search, role-based access, and map-based pharmacy locator.`,
    techStacks: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Supabase", "Google Generative AI"],
    imageUrl: "/mediconnect.png?height=300&width=400",
    githubUrl: "https://github.com/devindazz/mediconnect",
    liveUrl: "https://mediconnect.lk",
    status: "ongoing",
  },
  {
    name: "Zenith Higher Education",
    description:
      "A marketing website for a Sri Lankan education center offering O/L and A/L classes, designed to promote programs, highlight achievements, and attract students and parents.",
    techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
    imageUrl: "/zenith.jpg?height=300&width=400",
    githubUrl: "https://github.com/devindazz/zenith-higher-education",
    liveUrl: "https://zenith-higher-education.vercel.app/",
    status: "ongoing",
  },

  {
    name: "Weather Reporter",
    description:
      "A modern, responsive weather application built with Next.js 15 that provides real-time weather information with an immersive, dynamic user interface that adapts to current weather conditions.",
    techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "Weather API"],
    imageUrl: "/weather.png?height=300&width=400",
    githubUrl: "https://github.com/devindazz/weather-reporter",
    liveUrl: "https://weather-reporter-nu.vercel.app/",
    status: "",
  },
  {
    name: "Coming Soon",
    description: "Another innovative project on the horizon. Stay tuned!",
    techStacks: ["Future", "Project"],
    imageUrl: "/comming.jpg?height=300&width=400",
    githubUrl: "#",
    liveUrl: "#",
    status: "upcoming",
  },
]

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if mobile on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    // Add resize listener for responsive adjustments
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  if (!mounted) return null

  return (
    <div className="relative min-h-dvh w-full bg-neutral-950 overflow-hidden">
      {/* Content Container - Centered in the page */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-dvh px-4 md:px-8 lg:px-16 py-20 md:py-0">
        {/* Title Section - Positioned at top */}
        <motion.div
          className="absolute top-6 sm:top-8 md:top-12 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white px-4 sm:px-6 py-2 sm:py-3  
                      bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Projects
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Projects Carousel - Centered in the page */}
        <div className="w-full max-w-6xl mt-16 sm:mt-20 md:mt-12">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <button
              onClick={prevProject}
              className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full border border-white/10 shadow-lg transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="flex gap-1 sm:gap-1.5">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    activeProject === index ? "w-6 sm:w-8 bg-cyan-400" : "w-1.5 sm:w-2 bg-white/30"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full border border-white/10 shadow-lg transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Project Cards */}
          <div className="relative h-[550px] sm:h-[520px] md:h-[350px] overflow-hidden">
            <AnimatePresence mode="wait">
              {projects.map(
                (project, index) =>
                  activeProject === index && (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ProjectCard project={project} isMobile={isMobile} />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: {
    name: string
    description: string
    techStacks: string[]
    imageUrl: string
    githubUrl: string
    liveUrl: string
    status?: string
  }
  isMobile: boolean
}

function ProjectCard({ project, isMobile }: ProjectCardProps) {
  const isUpcoming = project.status === "upcoming"

  return (
    <div className={`flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6 h-full`}>
      {/* Project Image - Adjusted height */}
      <div className="relative h-[240px] sm:h-[260px] md:h-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-lg">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className={`object-cover ${isUpcoming ? "opacity-60" : ""}`}
          style={{ objectPosition: "center" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Status Badge - Only for ongoing project */}
        {project.status === "ongoing" && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 backdrop-blur-md rounded-full px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2 border border-green-500/30">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-400"
            />
            <span className="text-green-100 text-[10px] sm:text-xs font-medium">Ongoing</span>
          </div>
        )}

        {/* Coming Soon Badge - Only for upcoming projects */}
        {isUpcoming && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-purple-500/20 backdrop-blur-md rounded-full px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2 border border-purple-500/30">
            <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-purple-300" />
            <span className="text-purple-100 text-[10px] sm:text-xs font-medium">Coming Soon</span>
          </div>
        )}

        {/* Project Name - Mobile Only */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:hidden">
          <h2 className="text-white font-bold text-xl sm:text-2xl">{project.name}</h2>
        </div>
      </div>

      {/* Project Details - Improved spacing */}
      <div className="flex flex-col justify-between h-[260px] sm:h-[220px] md:h-full bg-black/30 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 p-3 sm:p-4 md:p-6 overflow-hidden">
        {/* Project Name - Desktop Only */}
        <div>
          <h2 className="hidden md:block text-white font-bold text-2xl mb-3 md:mb-4">{project.name}</h2>

          {/* Description - Reduced line clamp for mobile */}
          <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-auto line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          {/* Tech Stack - Adjusted spacing */}
          <div className="mb-3 sm:mb-4 mt-5">
            <h3 className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider mb-1.5 sm:mb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStacks.map((tech, i) => (
                <span
                  key={i}
                  className={`text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border ${
                    isUpcoming
                      ? "bg-purple-900/10 text-purple-100 border-purple-500/20"
                      : "bg-white/10 text-white/90 border-white/10"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links - Fixed positioning */}
        <div className="flex gap-2 sm:gap-4">
          {!isUpcoming ? (
            <>
              <Link
                href={project.githubUrl}
                className="flex items-center gap-1 sm:gap-2 bg-white/10 hover:bg-white/20 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/10 transition-colors duration-300 text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>GitHub</span>
              </Link>

              <Link
                href={project.liveUrl}
                className="flex items-center gap-1 sm:gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-100 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-cyan-500/30 transition-colors duration-300 text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Live Demo</span>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2 text-white/60 text-xs sm:text-sm">
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="flex items-center gap-1 sm:gap-2"
              >
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>In Development</span>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

