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