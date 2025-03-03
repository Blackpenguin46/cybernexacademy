"use client"

import { useEffect, useRef } from "react"

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const trail: { x: number; y: number; alpha: number }[] = []
    const maxTrailLength = 20

    const updateTrail = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      trail.push({ x, y, alpha: 1 })
      if (trail.length > maxTrailLength) trail.shift()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trail.forEach((point, index) => {
        point.alpha *= 0.92

        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${point.alpha})` // blue-500 with fading opacity
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", updateTrail)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", updateTrail)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}

export default CursorTrail

