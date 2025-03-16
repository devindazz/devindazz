"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2 // Smoother increment
      })
    }, 50) // Update more frequently for smoother animation

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaperflare.com_wallpaper%201.png-tXLqaomJwCzCL0Ht12PA1j7F4uYtor.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to ensure content visibility */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="w-full max-w-md px-8 z-10">
        {/* Logo/Monogram */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M30 5L55 50H5L30 5Z"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient" x1="5" y1="50" x2="55" y2="5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Progress bar with professional styling */}
        <div className="w-full mb-6">
          <div className="flex justify-between text-xs text-gray-300 mb-2">
            <span>Loading Portfolio</span>
            <span>{progress}%</span>
          </div>
          <div className="h-px w-full bg-gray-700 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
            />
          </div>
        </div>

        {/* Loading message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: progress < 100 ? [0.5, 1, 0.5] : 0 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            opacity: { duration: 1.5 },
          }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-gray-300 font-light">
            {progress < 100 ? "Preparing Experience" : ""}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

