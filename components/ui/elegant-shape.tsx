"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  simplified = false,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  simplified?: boolean
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: simplified ? 1.5 : 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: simplified ? 0.8 : 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={simplified ? { y: 0 } : { y: [0, 15, 0] }}
        transition={
          simplified
            ? { duration: 0 }
            : {
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            simplified ? "" : "backdrop-blur-[2px]",
            "border-2 border-white/[0.15]",
            simplified ? "" : "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            simplified ? "" : "after:absolute after:inset-0 after:rounded-full",
            simplified ? "" : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}
