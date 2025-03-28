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
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS featuring 3D animations and smooth transitions.",
    techStacks: ["Next.js", "React", "Tailwind CSS", "Three.js"],
    imageUrl: "/mediconnect.png?height=300&width=400",
    githubUrl: "https://github.com/devindazz/mediconnect",
    liveUrl: "https://mediconnect.lk",
    status: "ongoing",
  },
  {
    name: "Coming Soon",
    description: "New exciting project in development. Check back soon for updates!",
    techStacks: ["Future", "Project"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "#",
    liveUrl: "#",
    status: "upcoming",
  },
  {
    name: "Coming Soon",
    description: "Another innovative project on the horizon. Stay tuned!",
    techStacks: ["Future", "Project"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "#",
    liveUrl: "#",
    status: "upcoming",
  },
]

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  if (!mounted) return null

  return (
    <div
      className="relative min-h-dvh w-full overflow-hidden flex flex-col"
      style={{
        backgroundImage: "url('/night-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Content Container - Centered in the page */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-dvh px-4 md:px-8 lg:px-16">
        {/* Title Section - Positioned at top */}
        <motion.div
          className="absolute top-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded-full 
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
        <div className="w-full max-w-6xl -mt-16">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevProject}
              className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 shadow-lg transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-1">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeProject === index ? "w-8 bg-cyan-400" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-white/10 shadow-lg transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Project Cards */}
          <div className="relative h-[350px] overflow-hidden">
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
                      <ProjectCard project={project} />
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
}

function ProjectCard({ project }: ProjectCardProps) {
  const isUpcoming = project.status === "upcoming"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Project Image */}
      <div className="relative h-full rounded-2xl overflow-hidden border border-white/10">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.name}
          fill
          className={`object-cover ${isUpcoming ? "opacity-60" : ""}`}
        />

       
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Status Badge - Only for ongoing project */}
        {project.status === "ongoing" && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 border border-green-500/30">
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
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-green-100 text-xs font-medium">Ongoing</span>
          </div>
        )}

        {/* Coming Soon Badge - Only for upcoming projects */}
        {isUpcoming && (
          <div className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 border border-purple-500/30">
            <Clock className="h-3 w-3 text-purple-300" />
            <span className="text-purple-100 text-xs font-medium">Coming Soon</span>
          </div>
        )}

        {/* Project Name - Mobile Only */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
          <h2 className="text-white font-bold text-2xl">{project.name}</h2>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col h-full bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 p-6 overflow-hidden">
        {/* Project Name - Desktop Only */}
        <h2 className="hidden md:block text-white font-bold text-2xl mb-4">{project.name}</h2>

        {/* Description */}
        <p className="text-white/80 text-sm mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-white/60 text-xs uppercase tracking-wider mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStacks.map((tech, i) => (
              <span
                key={i}
                className={`text-xs px-3 py-1 rounded-full border ${
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

        {/* Links - Only show real links for actual projects */}
        <div className="mt-auto flex gap-4">
          {!isUpcoming ? (
            <>
              <Link
                href={project.githubUrl}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>

              <Link
                href={project.liveUrl}
                className="flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-100 px-4 py-2 rounded-lg border border-cyan-500/30 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2 text-white/60">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="flex items-center gap-2"
              >
                <Clock className="h-4 w-4" />
                <span>In Development</span>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

