"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

interface SynthwaveParticlesProps {
  backgroundImage?: string
  className?: string
  height?: string
  particleCount?: number
  particleSize?: number
  speed?: number
  autoRotate?: boolean
  autoRotateSpeed?: number
}

export default function SynthwaveParticles({
  backgroundImage,
  className = "w-full h-screen",
  height = "100vh",
  particleCount = 1500,
  particleSize = 0.15,
  speed = 0.2,
  autoRotate = true,
  autoRotateSpeed = 0.5,
}: SynthwaveParticlesProps) {
  return (
    <div className={`relative ${className}`} style={{ height }}>
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Particle Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={75} />
          <ParticleSystem count={particleCount} size={particleSize} speed={speed} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
          />
        </Canvas>
      </div>
    </div>
  )
}

interface ParticleSystemProps {
  count: number
  size: number
  speed: number
}

function ParticleSystem({ count, size, speed }: ParticleSystemProps) {
  const { viewport } = useThree()
  const pointsRef = useRef<THREE.Points>(null)

  // Create particles with positions and colors
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Position particles in a sphere
      const radius = 10 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Color gradient from pink to purple
      const colorRatio = Math.random()

      // Pink: rgb(255, 85, 155) to Purple: rgb(130, 80, 190)
      colors[i * 3] = (255 - colorRatio * 125) / 255 // R: 255 to 130
      colors[i * 3 + 1] = (85 - colorRatio * 5) / 255 // G: 85 to 80
      colors[i * 3 + 2] = (155 + colorRatio * 35) / 255 // B: 155 to 190
    }

    return [positions, colors]
  }, [count])

  // Create particle texture
  const particleTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
    const context = canvas.getContext("2d")

    if (!context) return null

    // Create gradient
    const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
    gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)")
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.4)")
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

    // Draw circle
    context.fillStyle = gradient
    context.beginPath()
    context.arc(16, 16, 16, 0, Math.PI * 2)
    context.fill()

    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  // Animation
  useFrame((state, delta) => {
    if (!pointsRef.current) return

    const time = state.clock.getElapsedTime()
    const positions = pointsRef.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Add subtle movement to particles
      positions[i3] += Math.sin(time * speed + i * 0.1) * 0.01
      positions[i3 + 1] += Math.cos(time * speed + i * 0.1) * 0.01
      positions[i3 + 2] += Math.sin(time * speed * 0.5 + i * 0.1) * 0.01
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true

    // Slowly rotate the entire particle system
    pointsRef.current.rotation.y += delta * 0.05
  })

  if (!particleTexture) return null

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation={true}
        vertexColors
        transparent
        alphaMap={particleTexture}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

