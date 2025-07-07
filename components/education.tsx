"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
  const [isEducationVisible, setIsEducationVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const educationSectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    // Set up intersection observer for the main education section
    const mainObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsEducationVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    // Set up intersection observer for individual cards
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    if (educationSectionRef.current) {
      mainObserver.observe(educationSectionRef.current)
    }

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card)
    })

    return () => {
      if (educationSectionRef.current) {
        mainObserver.unobserve(educationSectionRef.current)
      }
      cardRefs.current.forEach((card) => {
        if (card) cardObserver.unobserve(card)
      })
    }
  }, [])

  const educationData = [
    {
      institution: "University of Westminster",
      degree: "BEng (Hons) Software Engineering",
      period: "Sep 2023 – 2027",
      location: "London, UK",
      type: "University",
      status: "Current",
    },
    {
      institution: "Informatics Institute of Technology",
      degree: "Foundation Certificate in Higher Education",
      period: "Jan 2023 – Sep 2023",
      location: "Colombo, Sri Lanka",
      type: "Institute",
      status: "Completed",
    },
    {
      institution: "Kurunegala Maliyadeva College",
      degree: "The GCE Ordinary Level (O/L)",
      period: "2023",
      location: "Kurunegala, Sri Lanka",
      type: "School",
      status: "Completed",
    },
  ]

  return (
    <div ref={educationSectionRef} className="relative w-full bg-neutral-950 overflow-hidden py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="w-full max-w-5xl">
          {/* Section Title */}
          <div className="text-center mb-10">
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isEducationVisible ? 1 : 0,
                y: isEducationVisible ? 0 : 30,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                animate={
                  isEducationVisible
                    ? {
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <GraduationCap className="h-8 w-8 text-white" />
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl text-white font-bold tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isEducationVisible ? 1 : 0,
                  x: isEducationVisible ? 0 : -20,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
              >
                Education
              </motion.h2>
            </motion.div>

            {/* Animated line with dots */}
            <div className="flex items-center justify-center gap-2">
              <motion.div
                className="h-px bg-white"
                initial={{ width: 0 }}
                animate={{ width: isEducationVisible ? "60px" : "0px" }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.6,
                }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: isEducationVisible ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1,
                }}
              />
              <motion.div
                className="h-px bg-white"
                initial={{ width: 0 }}
                animate={{ width: isEducationVisible ? "60px" : "0px" }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.6,
                }}
              />
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: visibleCards[index] ? 1 : 0,
                  y: visibleCards[index] ? 0 : 50,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
              >
                {/* Timeline connector */}
                {index < educationData.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-full w-px h-6 bg-gradient-to-b from-white to-transparent"
                    initial={{ height: 0 }}
                    animate={{ height: visibleCards[index] ? "24px" : "0px" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5,
                    }}
                  />
                )}

                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <motion.div
                    className="flex-shrink-0 w-3 h-3 bg-white rounded-full mt-6 relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: visibleCards[index] ? 1 : 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full"
                      animate={
                        visibleCards[index]
                          ? {
                              scale: [1, 1.5, 1],
                              opacity: [1, 0.5, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </motion.div>

                  {/* Education Card */}
                  <motion.div
                    className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 group"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      {/* Left side - Institution and Degree */}
                      <div className="flex-1 mb-6 lg:mb-0">
                        <div className="flex items-center gap-3 mb-3">
                          <motion.h3
                            className="text-xl lg:text-2xl font-bold text-white group-hover:text-white/90 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: visibleCards[index] ? 1 : 0,
                              x: visibleCards[index] ? 0 : -20,
                            }}
                            transition={{
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                              delay: 0.4,
                            }}
                          >
                            {edu.institution}
                          </motion.h3>
                          {edu.status === "Current" && (
                            <motion.div
                              className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: visibleCards[index] ? 1 : 0,
                                scale: visibleCards[index] ? 1 : 0,
                              }}
                              transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.8,
                              }}
                            >
                              CURRENT
                            </motion.div>
                          )}
                        </div>

                        <motion.p
                          className="text-white/80 text-base lg:text-lg font-medium mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: visibleCards[index] ? 1 : 0,
                            x: visibleCards[index] ? 0 : -20,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.5,
                          }}
                        >
                          {edu.degree}
                        </motion.p>

                        <motion.div
                          className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/60 text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: visibleCards[index] ? 1 : 0,
                            y: visibleCards[index] ? 0 : 10,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.6,
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">{edu.location}</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right side - Type badge */}
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: visibleCards[index] ? 1 : 0,
                          scale: visibleCards[index] ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.7,
                        }}
                      >
                        <div className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full">
                          <Award className="h-4 w-4 text-white/80" />
                          <span className="text-white/80 text-sm font-medium uppercase tracking-wider">{edu.type}</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
