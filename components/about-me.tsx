"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutMeSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 items-center"
        >
          <div className="flex justify-center md:order-last">
            <Card className="overflow-hidden w-full max-w-md border-none shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/devinda.jpg?height=400&width=400"
                    alt="devinda"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. I specialize in [Your
                Specialization] with [X] years of experience in the field.
              </p>
              <p>
                My journey in [Your Field] began when [brief story about how you started]. Since then, I've worked on
                various projects that have helped me develop a strong foundation in [Key Skills or Technologies].
              </p>
              <p>
                When I'm not [Working/Coding/Designing], you can find me [Your Hobbies or Interests]. I believe that
                [Your Philosophy or Approach to Work].
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

