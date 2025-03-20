"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import ParticleBackground from "./ui/particle-background"
import DaytimeParticleBackground from "./ui/daytime-particles"

// Project data - you can replace with your actual projects
const projects = [
  {
    name: "MediConnect",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS featuring 3D animations and smooth transitions.",
    techStacks: ["Next.js", "React", "Tailwind CSS", "Three.js"],
    imageUrl: "/mediconnect.png?height=300&width=400",
    githubUrl: "https://github.com/devindazz/mediconnect",
    liveUrl: "https://mediconnect.lk",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment processing.",
    techStacks: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/ecommercee.png?height=300&width=400",
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce.example.com",
  },
  {
    name: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data for any location using the OpenWeather API.",
    techStacks: ["JavaScript", "API", "CSS", "HTML"],
    imageUrl: "/weather.jpg?height=300&width=400",
    githubUrl: "https://github.com/username/weather",
    liveUrl: "https://weather.example.com",
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
      className="relative min-h-dvh w-full overflow-hidden flex flex-col justify-end"
      style={{
        backgroundImage: "url('/night-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}

      
    >
      <div className="absolute inset-0 z-0 opacity-40">
              <DaytimeParticleBackground />
            </div>
      
      {/* Content Container - Positioned at bottom to avoid covering the lookout tower */}
      <div className="relative z-10 w-full px-4 pb-8 pt-16 md:px-8 lg:px-16">
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

        <div>
          <ParticleBackground/>
        </div>
        {/* Projects Carousel - Positioned at bottom */}
        <div className="mt-auto">
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
          <div className="relative h-[380px] overflow-hidden">
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
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Project Image */}
      <div className="relative h-full rounded-2xl overflow-hidden border border-white/10">
        <Image src={project.imageUrl || "/mediconnect.png"} alt={project.name} fill className="object-cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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
              <span key={i} className="text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-4">
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
        </div>
      </div>
    </div>
  )
}

