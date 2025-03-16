"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

// Particle component
function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for particles
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = (Math.random() - 0.5) * 50
      const z = (Math.random() - 0.5) * 50
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [count])

  // Animation loop
  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Rotate the entire particle system
    mesh.current.rotation.x = time * 0.05
    mesh.current.rotation.y = time * 0.03
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} args={[particles.length / 3, 3]} />
      </bufferGeometry>
      <PointMaterial transparent color="#ffffff" size={0.1} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </points>
  )
}

export default function ParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
      <Particles />
    </Canvas>
  )
}

