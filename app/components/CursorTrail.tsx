"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const trail: { x: number; y: number; alpha: number; char: string }[] = []

    function drawTrail() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trail.forEach((point, index) => {
        ctx.font = "12px monospace"
        ctx.fillStyle = `rgba(0, 255, 0, ${point.alpha})`
        ctx.fillText(point.char, point.x, point.y)

        point.alpha -= 0.02

        if (point.alpha <= 0) {
          trail.splice(index, 1)
        }
      })

      requestAnimationFrame(drawTrail)
    }

    function handleMouseMove(e: MouseEvent) {
      const char = String.fromCharCode(Math.floor(Math.random() * 128))
      trail.push({ x: e.clientX, y: e.clientY, alpha: 1, char })
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    drawTrail()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}

export default CursorTrail

