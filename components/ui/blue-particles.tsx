"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

// Blue-themed particles component
function BlueParticles({ count = 300 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for particles
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 60
      const y = (Math.random() - 0.5) * 40
      const z = (Math.random() - 0.5) * 20
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
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} args={[]} />
      </bufferGeometry>
      <PointMaterial transparent color="#8EB8FF" size={0.3} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
    </points>
  )
}

// Smaller, brighter star particles
function StarParticles({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for stars
  const stars = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 60
      const y = (Math.random() - 0.5) * 40
      const z = (Math.random() - 0.5) * 20
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [count])

  // Animation loop for twinkling effect
  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Subtle twinkling effect
    if (!Array.isArray(mesh.current.material)) {
      mesh.current.material.opacity = 0.7 + Math.sin(time) * 0.3
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={stars.length / 3} array={stars} itemSize={3} args={[]} />
      </bufferGeometry>
      <PointMaterial transparent color="#ffffff" size={0.4} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
    </points>
  )
}

export default function BlueParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <BlueParticles />
      <StarParticles />
    </Canvas>
  )
}

