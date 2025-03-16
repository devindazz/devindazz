"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

// This is an alternative implementation that uses your 3D background approach
export default function AboutMeWith3D() {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Fade in and slide up animations for content
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.8, 1])
  const contentY = useTransform(scrollYProgress, [0, 0.3], ["50px", "0px"])

  // Subtle rotation for 3D effect
  const rotation = useTransform(scrollYProgress, [0, 0.5], [2, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden py-20" id="about">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <color attach="background" args={["#050510"]} />
          <fog attach="fog" args={["#050510", 5, 30]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <pointLight color="#4060ff" intensity={5} position={[5, 5, 5]} />
          <pointLight color="#ff6040" intensity={5} position={[-5, -5, 5]} />
        </Canvas>
      </div>

      {/* Silhouette overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-[30%] bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr] lg:gap-20">
          {/* Text content */}
          <motion.div
            className="space-y-8"
            style={{
              opacity: contentOpacity,
              y: contentY,
              rotateX: rotation,
            }}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Something About Me !
              </motion.h2>

              <motion.div
                className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-gray-300"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  boxShadow: "0 0 10px rgba(124,58,237,0.5)",
                }}
              />
            </div>

            <motion.div
              className="space-y-6 text-lg text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                I'm Devinda Wijesinghe, a second-year Software Engineering student passionate about exploring different
                technologies and building impactful software. I love turning ideas into reality through code while
                constantly learning and improving.
              </p>

              <p>
                Outside of tech, I stay active with weightlifting and enjoy unwinding at night with video games, whether
                competing or exploring new worlds. I'm always pushing my limits—whether in development, fitness, or
                gaming—to grow every day.
              </p>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-white/10 bg-gray-200 shadow-xl md:h-72 md:w-72"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex h-full w-full items-center justify-center text-center text-gray-600">
                My Profile Photo
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] z-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute right-[15%] top-[30%] z-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </section>
  )
}

