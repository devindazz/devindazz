"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowLeft } from "lucide-react"
import ParallaxLayers from "@/components/ui/parallax-layers"
import ContactForm3D from "@/components/ui/3d-contact-form"
import FloatingIcons from "@/components/ui/floating-icons"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <ParallaxLayers />

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full px-4 py-12 md:px-8 lg:px-16 flex flex-col">
        {/* Back to Home Link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center">
            <ArrowLeft size={16} className="mr-1" /> Back to Home
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-light mb-4 text-center"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-center max-w-md mx-auto mb-12"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
          {/* Contact Form */}
          <div className="w-full max-w-md">
            <ContactForm3D />
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-xs"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-medium text-white mb-4">Connect With Me</h2>

              <div className="space-y-4">
                <a
                  href="mailto:devinda@example.com"
                  className="flex items-center text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <Mail className="mr-3 text-orange-400" size={18} />
                  <span>devinda@example.com</span>
                </a>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/70 text-sm mb-3">Find me on social media:</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/devindazz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Github size={20} className="text-white" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/devinda-wijesingha-aba63b2b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Linkedin size={20} className="text-white" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

