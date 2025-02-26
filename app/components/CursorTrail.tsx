"use client"

import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    let trail: { x: number; y: number; text: string }[] = []
    const characters = '01'
    
    function getRandomChar() {
      return characters.charAt(Math.floor(Math.random() * characters.length))
    }
    
    function drawTrail() {
      if (!canvas || !ctx) return // Add null check
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      trail.forEach((point, index) => {
        ctx.font = "12px monospace"
        ctx.fillStyle = `rgba(0, 255, 0, ${1 - index / trail.length})`
        ctx.fillText(point.text, point.x, point.y)
      })
      
      // Fade out by removing the oldest points
      if (trail.length > 20) {
        trail = trail.slice(0, 20)
      }
      
      requestAnimationFrame(drawTrail)
    }
    
    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return
      
      const x = e.clientX
      const y = e.clientY
      
      trail.unshift({
        x,
        y,
        text: getRandomChar()
      })
      
      if (trail.length > 50) {
        trail.pop()
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    drawTrail()
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  )
}

