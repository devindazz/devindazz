"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text, PerspectiveCamera, Html, Environment } from "@react-three/drei"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { easing } from "maath"
import Image from "next/image"
import type * as THREE from "three"

// Shooting star component
const ShootingStar = () => {
  const ref = useRef<THREE.Mesh>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useFrame((state, delta) => {
    if (ref.current && active) {
      ref.current.position.x += delta * 2
      ref.current.position.y -= delta * 0.5

      // Reset position when it goes off screen
      if (ref.current.position.x > 3) {
        ref.current.position.x = -3
        ref.current.position.y = 1.5
      }
    }
  })

  return (
    <mesh ref={ref} position={[-3, 1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry args={[0.3, 0.02, 0.02]} />
      <meshStandardMaterial color="#ffffff" emissive="#88ccff" emissiveIntensity={2} />
    </mesh>
  )
}

// Floating text line with 3D effect
const TextLine = ({ text, index, position }: { text: string; index: number; position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      // Subtle floating animation
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.2) * 0.02
    }
  })

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.12}
      color="#ffffff"
      anchorX="left"
      font="/fonts/Inter_Regular.json"
      maxWidth={2}
      lineHeight={1.5}
    >
      {text || ""}
    </Text>
  )
}

// Person silhouette pointing at star
const PersonSilhouette = () => {
  const ref = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      // Subtle breathing animation
      ref.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.01
      // Subtle swaying
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.02
    }
  })

  return (
    <group ref={ref} position={[0, -0.8, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[0.4, 0.8]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.8} />
      </mesh>
      {/* Arm pointing up */}
      <mesh position={[0.15, 0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <planeGeometry args={[0.3, 0.1]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

// Main scene component
const AboutMeScene = ({ bioText }: { bioText: string[] }) => {
  const { camera } = useThree()
  const cameraRef = useRef(null)

  useFrame((state, delta) => {
    // Subtle camera movement
    easing.damp3(
      camera.position,
      [Math.sin(state.clock.elapsedTime * 0.1) * 0.2, Math.cos(state.clock.elapsedTime * 0.1) * 0.1, 5],
      0.5,
      delta,
    )
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Title */}
      <Text position={[-2, 1.5, 0]} fontSize={0.25} color="#ffffff" font="/fonts/Inter_Bold.json" anchorX="left">
        Something About Me!
      </Text>

      {/* Bio text lines */}
      {bioText.map((text, i) => (
        <TextLine key={i} text={text} index={i} position={[-2, 1.1 - i * 0.2, 0]} />
      ))}

      {/* Profile photo */}
      <Html position={[1.8, 1, 0]} transform distanceFactor={10}>
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-white/30 shadow-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <Avatar className="w-full h-full">
            <AvatarImage src="/placeholder.svg?height=150&width=150" alt="Profile" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-lg">
              ME
            </AvatarFallback>
          </Avatar>
        </div>
      </Html>

      {/* Shooting star */}
      <ShootingStar />

      {/* Person silhouette */}
      <PersonSilhouette />

      {/* Stars background */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, -5 + Math.random() * 2]}>
          <sphereGeometry args={[0.01 + Math.random() * 0.01]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </>
  )
}

// Main component
export default function AboutMe() {
  // Replace with your actual bio text
  const bioText = [
    "Frontend developer with 5+ years of experience",
    "Specialized in React, Next.js, and Three.js",
    "Passionate about creating immersive web experiences",
    "Currently working on 3D web applications",
    "Open to freelance opportunities",
    "Based in San Francisco, CA",
  ]

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-purple-900/30 z-0"
        style={{ backdropFilter: "blur(2px)" }}
      />

      {/* Background image with lower z-index */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/b?height=1080&width=1920"
          alt="Background"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.6 }}
        />
      </div>

      {/* Canvas container with higher z-index */}
      <div className="relative z-10 w-full h-full">
        <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
          <AboutMeScene bioText={bioText} />
          <Environment preset="night" />
        </Canvas>
      </div>
    </div>
  )
}

