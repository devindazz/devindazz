"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial, Environment } from "@react-three/drei"
import * as THREE from "three"
import { useMousePosition } from "@/hooks/use-mouse-position"

// Custom hook to get mouse position in normalized coordinates (-1 to 1)
export function useMousePosition3D() {
  const mousePosition = useMousePosition()
  const { viewport } = useThree()

  // Convert screen coordinates to normalized 3D space
  const x = (mousePosition.x / window.innerWidth) * 2 - 1
  const y = -(mousePosition.y / window.innerHeight) * 2 + 1

  return { x, y }
}