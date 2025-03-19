"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import ParticleBackground from "@/components/ui/snowfall-effect"

// Project data - you can replace with your actual projects
const projects = [
  {
    name: "MediConnect",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS featuring 3D animations and smooth transitions.",
    techStacks: ["Next.js", "React", "Tailwind CSS", "Three.js"],
    imageUrl: "/mediconnect.png?height=300&width=400",
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment processing.",
    techStacks: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce.example.com",
  },
  {
    name: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data for any location using the OpenWeather API.",
    techStacks: ["JavaScript", "API", "CSS", "HTML"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/weather",
    liveUrl: "https://weather.example.com",
  },
]

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaperflare.com_wallpaper%20%284%29.jpg-GIq4NaupEWLU4RGuef0h32Otee68hd.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Particle Animation - reduced opacity */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full px-4 py-12 md:px-8 lg:px-16 flex flex-col">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-800 text-3xl font-semibold md:text-4xl mb-12 text-center"
        >
          My Projects
        </motion.h1>

        {/* Projects Showcase - Horizontal Layout */}
        <div className="flex-1 flex items-center justify-center mb-12">
          <div className="w-full max-w-6xl">
            <div className="relative">
              {/* Project Cards */}
              <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                <div className="flex gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      isActive={activeProject === index}
                      onMouseEnter={() => setActiveProject(index)}
                      onMouseLeave={() => setActiveProject(null)}
                    />
                  ))}

                  {/* Coming Soon Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="snap-center shrink-0 w-80 md:w-96"
                    onMouseEnter={() => setActiveProject(projects.length)}
                    onMouseLeave={() => setActiveProject(null)}
                  >
                    <div
                      className={`bg-blue-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-400/20 transition-all duration-300 h-[420px] flex flex-col ${
                        activeProject === projects.length ? "transform scale-105 shadow-lg shadow-blue-500/20" : ""
                      }`}
                    >
                      {/* Empty Image Section to Match Other Cards */}
                      <div className="relative h-48 bg-blue-900/40 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4">
                          <h3 className="text-white font-medium text-lg">Coming Soon</h3>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-4 flex-grow flex flex-col justify-center items-center">
                        <p className="text-white/90 text-sm mb-4 text-center">
                          More exciting projects are in development and will be showcased here soon!
                        </p>

                        {/* Tech Stack Placeholders */}
                        <div className="flex flex-wrap gap-1 mb-4 justify-center">
                          <span className="text-xs bg-blue-800/60 text-blue-100 px-2 py-0.5 rounded-full">Future</span>
                          <span className="text-xs bg-blue-800/60 text-blue-100 px-2 py-0.5 rounded-full">Project</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="flex gap-1">
                  {projects.concat({} as any).map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 w-8 rounded-full ${activeProject === index ? "bg-blue-400" : "bg-blue-400/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
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
  index: number
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function ProjectCard({ project, index, isActive, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="snap-center shrink-0 w-80 md:w-96"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`bg-blue-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-400/20 transition-all duration-300 h-[420px] flex flex-col ${
          isActive ? "transform scale-105 shadow-lg shadow-blue-500/20" : ""
        }`}
      >
        {/* Project Image - Fixed Height */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <Image src={project.imageUrl || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4">
            <h3 className="text-white font-medium text-lg">{project.name}</h3>
          </div>
        </div>

        {/* Description - Flex Grow to Fill Space */}
        <div className="p-4 flex-grow flex flex-col">
          <p className="text-white/90 text-sm mb-4 line-clamp-4">{project.description}</p>

          {/* Tech Stacks */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.techStacks.map((tech, i) => (
              <span key={i} className="text-xs bg-blue-800/60 text-blue-100 px-2 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          {/* Links - Pushed to Bottom */}
          <div className="flex justify-end gap-3 mt-auto">
            <Link href={project.githubUrl} className="text-white/70 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={project.liveUrl} className="text-white/70 hover:text-white transition-colors">
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// CSS for hiding scrollbar but allowing scroll
const scrollbarHidingStyles = `
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
`

// Add the styles to the document
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = scrollbarHidingStyles
  document.head.appendChild(style)
}

