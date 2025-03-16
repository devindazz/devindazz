"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

// Daytime Particles component
function DaytimeParticles({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for particles
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      // Keep particles mostly in the upper part of the screen (sky area)
      const x = (Math.random() - 0.5) * 50
      const y = Math.random() * 20 // Mostly positive (upper part)
      const z = (Math.random() - 0.5) * 10
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [count])

  // Animation loop
  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Gentle floating motion
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time + i) * 0.01
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + i) * 0.01
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <PointMaterial transparent color="#ffffff" size={0.15} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </points>
  )
}

// Bird-like particles
function Birds({ count = 15 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for birds
  const birds = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = Math.random() * 15 + 5 // Higher in the sky
      const z = (Math.random() - 0.5) * 20
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [count])

  // Animation loop for birds
  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Birds move in a more directed pattern
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // X movement (left-right)
      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time * 0.5 + i) * 0.05
      // Y movement (small up-down)
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time * 2 + i) * 0.01
      // Z movement (depth)
      mesh.current.geometry.attributes.position.array[i3 + 2] += Math.cos(time * 0.5 + i) * 0.05
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={birds.length / 3} array={birds} itemSize={3} />
      </bufferGeometry>
      <PointMaterial transparent color="#111111" size={0.2} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
    </points>
  )
}

export default function DaytimeParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
      <DaytimeParticles />
      <Birds />
    </Canvas>
  )
}

