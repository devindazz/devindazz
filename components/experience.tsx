"use client"

import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const roles = [
  {
    title: "Junior Software Engineer",
    start: "2026-09",
    period: "Sep 2026 – Present",
    current: true,
    skills: [
      "Systems Design",
      "Multi-Tenant Architecture",
      "Software as a Service (SaaS)",
      "Webhooks",
      "Full-Stack Development",
    ],
  },
  {
    title: "Software Engineer Internship",
    start: "2025-08",
    period: "Aug 2025 – Aug 2026",
    current: false,
    
    skills: [
      "Software Industry",
      "Web Development",
      "Pipelines",
      "Amazon Web Services (AWS)",
      "Prisma ORM",
      "Full-Stack Development",
      "Node.js",
      "REST APIs",
      "Express.js",
      "TypeScript",
      "Third-Party API Integration",
      "WhatsApp API",
    ],
  },
]

export default function Experience() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = {
    initial: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2, margin: "0px 0px -60px 0px" as const },
    transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }

  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative w-full bg-neutral-950 px-4 py-20 sm:px-8 md:px-16 lg:px-24">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div {...reveal} className="mb-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <BriefcaseBusiness aria-hidden="true" className="h-8 w-8 text-white" />
            <h2 id="experience-heading" className="text-3xl font-bold tracking-tight text-white md:text-4xl">Experience</h2>
          </div>
          <div aria-hidden="true" className="flex items-center justify-center gap-2">
            <span className="h-px w-16 bg-white" />
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-px w-16 bg-white" />
          </div>
        </motion.div>

        <motion.div {...reveal} className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <motion.div {...reveal} className="mb-8 border-b border-white/10 pb-6">
            <h3 className="text-2xl font-bold text-white">Syntax Erreur</h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
              <span>Full-time</span>
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                India · Remote
              </span>
            </div>
          </motion.div>

          <ol className="ml-1 border-l border-white/20">
            {roles.map((role) => (
              <motion.li key={role.title} {...reveal} className="relative pb-10 pl-6 last:pb-0 sm:pl-8">
                <span aria-hidden="true" className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white" />
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-xl font-semibold text-white">{role.title}</h4>
                  {role.current && <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">CURRENT</span>}
                </div>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
                  <Calendar aria-hidden="true" className="h-4 w-4 shrink-0" />
                  <time dateTime={role.start}>{role.period.split(" – ")[0]}</time>
                  <span>–</span>
                  {role.current ? <span>Present</span> : <time dateTime="2026-08">Aug 2026</time>}
                </p>
                <ul aria-label={`${role.title} skills`} className="mt-4 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{skill}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
