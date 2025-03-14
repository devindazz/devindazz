"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial, Environment } from "@react-three/drei"
import * as THREE from "three"
import { useMousePosition } from "@/hooks/use-mouse-position"

// Custom hook to get mouse position in normalized coordinates (-1 to 1)
export function useMousePosition3D() {
  const mousePosition = useMousePosition()
  const { size } = useThree()

  // Convert screen coordinates to normalized 3D space
  const x = (mousePosition.x / size.width) * 2 - 1
  const y = -(mousePosition.y / size.height) * 2 + 1

  return { x, y }
}

function ParticleField({ count = 5000, color = "#ffffff", size = 0.015, depth = 50 }) {
  const points = useRef<THREE.Points>(null)
  const mousePosition = useMousePosition3D()

  // Generate random points in a 3D space
  const [positions] = useState(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * depth
    }
    return positions
  })

  useFrame((state) => {
    if (!points.current) return

    // Rotate the entire particle field slowly
    points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, mousePosition.y * 0.2, 0.01)
    points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, mousePosition.x * 0.2, 0.01)

    // Pulse the particles
    const time = state.clock.getElapsedTime()
    const material = points.current.material as THREE.PointsMaterial
    if (material) {
      material.size = size * (1 + 0.1 * Math.sin(time * 0.5))
    }
  })

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function MovingLights() {
  const light1 = useRef<THREE.PointLight>(null)
  const light2 = useRef<THREE.PointLight>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.3) * 8
      light1.current.position.z = Math.cos(time * 0.3) * 8
    }

    if (light2.current) {
      light2.current.position.x = Math.sin(time * 0.4 + 2) * 8
      light2.current.position.z = Math.cos(time * 0.4 + 2) * 8
    }
  })

  return (
    <>
      <pointLight ref={light1} color="#4060ff" intensity={5} distance={15} />
      <pointLight ref={light2} color="#ff6040" intensity={5} distance={15} />
    </>
  )
}

export function Background3D({ className = "" }) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["#050510"]} />
        <fog attach="fog" args={["#050510", 5, 30]} />
        <ParticleField />
        <MovingLights />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

