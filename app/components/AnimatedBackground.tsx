"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = new Array(columns).fill(1)

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)" // Update: Reduced opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = "15px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128)
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.99) {
          // Update: Adjusted condition for slower drops
          drops[i] = 0
        }

        drops[i] += 0.5 // Update: Slower drop increment
      }
    }

    function animate() {
      draw()
      setTimeout(() => requestAnimationFrame(animate), 50) // Update: Added delay to animation loop
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default AnimatedBackground

