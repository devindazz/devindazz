"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import { useSpring, animated } from "@react-spring/three"
import type * as THREE from "three"

interface FloatingTextProps {
  text: string
  position: [number, number, number]
}

export default function FloatingText({ text, position }: FloatingTextProps) {
  const textRef = useRef<THREE.Mesh>(null)

  const [springs, api] = useSpring(() => ({
    position: position,
    scale: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 2, tension: 200, friction: 40 },
  }))

  useEffect(() => {
    // Animate in
    api.start({
      scale: [1, 1, 1],
      delay: 500,
    })
  }, [api])

  useFrame(({ clock }) => {
    if (textRef.current) {
      // Subtle floating animation
      const t = clock.getElapsedTime()
      textRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.1
      textRef.current.rotation.z = Math.sin(t * 0.3) * 0.03
    }
  })

  return (
    <animated.group ref={textRef} position={springs.position} scale={springs.scale} rotation={springs.rotation}>
      <Text
        fontSize={0.8}
        color="#ffffff"
        anchorX="left"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
        letterSpacing={0.05}
      >
        {text}
      </Text>
    </animated.group>
  )
}

