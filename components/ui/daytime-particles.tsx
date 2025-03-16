"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

// Daytime Particles component
function DaytimeParticles({ count = 300 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for particles
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      // Distribute particles across the entire screen
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
      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time + i) * 0.02
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + i) * 0.02
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} args={[particles.length / 3, 3]} />
      </bufferGeometry>
      <PointMaterial transparent color="#ffffff" size={0.3} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
    </points>
  )
}

// Bird-like particles
function Birds({ count = 40 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for birds
  const birds = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 60
      const y = Math.random() * 30 - 10 // More spread out vertically
      const z = (Math.random() - 0.5) * 30
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
      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time * 0.5 + i) * 0.08
      // Y movement (small up-down)
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time * 2 + i) * 0.03
      // Z movement (depth)
      mesh.current.geometry.attributes.position.array[i3 + 2] += Math.cos(time * 0.5 + i) * 0.08
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={birds.length / 3} array={birds} itemSize={3} args={[birds.length / 3, 3]} />
      </bufferGeometry>
      <PointMaterial transparent color="#222222" size={0.4} sizeAttenuation={true} depthWrite={false} opacity={0.8} />
    </points>
  )
}

// Colorful particles for visual interest
function ColorParticles({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for colorful particles
  const particles = useMemo(() => {
    const temp = []
    const colors = []

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = (Math.random() - 0.5) * 50
      const z = (Math.random() - 0.5) * 50
      temp.push(x, y, z)

      // Add colors - blues and whites for sky-like colors
      const r = Math.random() * 0.2
      const g = Math.random() * 0.5 + 0.5
      const b = Math.random() * 0.3 + 0.7
      colors.push(r, g, b)
    }

    return {
      positions: new Float32Array(temp),
      colors: new Float32Array(colors),
    }
  }, [count])

  // Animation loop
  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Gentle floating motion
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time * 0.3 + i) * 0.05
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time * 0.2 + i) * 0.03
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions.length / 3, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors.length / 3, 3]}
        />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.5} sizeAttenuation={true} depthWrite={false} transparent opacity={0.8} />
    </points>
  )
}

export default function DaytimeParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <DaytimeParticles />
      <Birds />
      <ColorParticles />
    </Canvas>
  )
}

