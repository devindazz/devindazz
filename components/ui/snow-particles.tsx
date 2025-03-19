"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial } from "@react-three/drei"
import * as THREE from "three"

// Snow particles component
function SnowParticles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for snow particles
  const particles = useMemo(() => {
    const temp = []
    const sizes = []

    for (let i = 0; i < count; i++) {
      // Distribute particles across the screen with more at the top
      const x = (Math.random() - 0.5) * 60
      const y = Math.random() * 50 - 10 // More above the camera
      const z = (Math.random() - 0.5) * 30

      // Vary the size slightly for more realistic snow
      const size = Math.random() * 0.5 + 0.3

      temp.push(x, y, z)
      sizes.push(size)
    }

    return {
      positions: new Float32Array(temp),
      sizes: new Float32Array(sizes),
    }
  }, [count])

  // Animation loop for falling snow
  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Update each particle position to create falling snow effect
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Falling motion (y-axis)
      mesh.current.geometry.attributes.position.array[i3 + 1] -= 0.05 * particles.sizes[i] * 2

      // Slight horizontal drift (x-axis)
      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time + i) * 0.01

      // Reset particles that fall below the view
      if (mesh.current.geometry.attributes.position.array[i3 + 1] < -20) {
        mesh.current.geometry.attributes.position.array[i3 + 1] = 30
        mesh.current.geometry.attributes.position.array[i3] = (Math.random() - 0.5) * 60
        mesh.current.geometry.attributes.position.array[i3 + 2] = (Math.random() - 0.5) * 30
      }
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
                  itemSize={3} args={[]}        />
        <bufferAttribute attach="attributes-size" count={particles.sizes.length} array={particles.sizes} itemSize={1} args={[]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        sizeAttenuation={true}
        color="#ffffff"
        transparent
        opacity={0.8}
        depthWrite={false}
        vertexColors={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Larger, slower snowflakes in the foreground
function LargeSnowflakes({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null!)

  // Generate random positions for larger snowflakes
  const particles = useMemo(() => {
    const temp = []

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40
      const y = Math.random() * 40 - 10
      const z = Math.random() * 10 // Closer to camera

      temp.push(x, y, z)
    }

    return new Float32Array(temp)
  }, [count])

  // Animation loop for larger snowflakes
  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Update each particle position
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Slower falling motion
      mesh.current.geometry.attributes.position.array[i3 + 1] -= 0.03

      // More pronounced horizontal drift
      mesh.current.geometry.attributes.position.array[i3] += Math.sin(time * 0.5 + i) * 0.02

      // Reset particles that fall below the view
      if (mesh.current.geometry.attributes.position.array[i3 + 1] < -20) {
        mesh.current.geometry.attributes.position.array[i3 + 1] = 30
        mesh.current.geometry.attributes.position.array[i3] = (Math.random() - 0.5) * 40
        mesh.current.geometry.attributes.position.array[i3 + 2] = Math.random() * 10
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} args={[]} />
      </bufferGeometry>
      <PointMaterial transparent color="#ffffff" size={1.2} sizeAttenuation={true} depthWrite={false} opacity={0.9} />
    </points>
  )
}

export default function SnowParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <SnowParticles />
      <LargeSnowflakes />
    </Canvas>
  )
}

