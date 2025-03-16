"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useTrail, a } from "@react-spring/three"
import * as THREE from "three"

export default function ShootingStar() {
  const ref = useRef<THREE.Group>(null)
  const [active, setActive] = useState(false)

  const [springs, setSprings] = useTrail(20, () => ({
    position: [0, 0, 0],
    opacity: 0,
    scale: 0.1,
    config: { mass: 1, tension: 280, friction: 60 },
  }))

  useEffect(() => {
    // Start animation after component mounts
    const timeout = setTimeout(() => {
      setActive(true)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  useFrame(({ clock }) => {
    if (ref.current && active) {
      // Move shooting star across the screen
      const time = clock.getElapsedTime()
      const x = Math.sin(time * 0.5) * 5
      const y = Math.cos(time * 0.5) * 3 + 2

      ref.current.position.set(x, y, 0)

      // Update trail positions smoothly
      setSprings((i) => ({
        position: [x - i * 0.2, y - i * 0.1, 0],
        opacity: Math.max(0, 1 - i * 0.1),
        scale: Math.max(0.05, 0.2 - i * 0.01),
      }))
    }
  })

  return (
    <group>
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Trail particles */}
      {springs.map((props, i) => (
        <a.mesh key={i} position={props.position} scale={props.scale}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <a.meshBasicMaterial color="#88ccff" transparent opacity={props.opacity} />
        </a.mesh>
      ))}
    </group>
  )
}
