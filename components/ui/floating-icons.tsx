"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Mail, MessageSquare, Send, Phone } from "lucide-react"

interface FloatingIconProps {
  icon: React.ReactNode
  delay: number
  x: number
  y: number
}

const FloatingIcon = ({ icon, delay, x, y }: FloatingIconProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 0.8,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
          },
        },
      }}
      className="absolute text-white/80"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingIcon icon={<Mail size={28} className="text-orange-300" />} delay={0.2} x={15} y={30} />
      <FloatingIcon icon={<MessageSquare size={24} className="text-red-400" />} delay={0.5} x={80} y={20} />
      <FloatingIcon icon={<Send size={22} className="text-blue-300" />} delay={0.8} x={70} y={60} />
      <FloatingIcon icon={<Phone size={20} className="text-orange-400" />} delay={1.1} x={25} y={70} />
    </div>
  )
}

