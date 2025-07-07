"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const [isEducationVisible, setIsEducationVisible] = useState(false)
  const educationSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set up intersection observer for the education section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsEducationVisible(true)
            // Once we've seen it, no need to keep observing
            if (educationSectionRef.current) {
              observer.unobserve(educationSectionRef.current)
            }
          }
        })
      },
      { threshold: 0.2 }, // Trigger when 20% of the element is visible
    )

    if (educationSectionRef.current) {
      observer.observe(educationSectionRef.current)
    }

    return () => {
      if (educationSectionRef.current) {
        observer.unobserve(educationSectionRef.current)
      }
    }
  }, [])

  const educationData = [
    {
      institution: "University of Westminster",
      degree: "BEng (Hons) Software Engineering",
      period: "Sep 2023 – 2027",
      location: "London, UK",
      type: "University",
    },
    {
      institution: "Informatics Institute of Technology",
      degree: "Foundation Certificate in Higher Education",
      period: "Jan 2023 – Sep 2023",
      location: "Colombo, Sri Lanka",
      type: "Institute",
    },
    {
      institution: "Kurunegala Maliyadeva College",
      degree: "The GCE Ordinary Level (O/L)",
      period: "2023",
      location: "Kurunegala, Sri Lanka",
      type: "School",
    },
  ]

  return (
    <div ref={educationSectionRef} className="relative min-h-screen w-full bg-neutral-900 overflow-hidden">
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <div className="w-full max-w-4xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: isEducationVisible ? 0 : 0.2,
              }}
            >
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <motion.h2
                className="text-3xl md:text-4xl text-white font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: isEducationVisible ? 0.1 : 0.3,
                }}
              >
                Education
              </motion.h2>
            </motion.div>

            {/* Animated line */}
            <motion.div
              className="mx-auto h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: isEducationVisible ? "100px" : "0px" }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
            />
          </div>