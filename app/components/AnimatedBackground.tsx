"use client";

import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground({ className = '' }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match parent element
    const resizeObserver = new ResizeObserver(() => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    });
    resizeObserver.observe(canvas);

    // Parameters for our grid
    const gridCount = 20;
    const dots: { x: number; y: number; vx: number; vy: number }[] = [];

    // Generate dots
    function generateDots() {
      dots.length = 0;
      if (!canvas) return;
      
      const spacing = Math.min(canvas.width, canvas.height) / gridCount;
      
      for (let i = 0; i < gridCount; i++) {
        for (let j = 0; j < gridCount; j++) {
          dots.push({
            x: (spacing * i) + (Math.random() * spacing),
            y: (spacing * j) + (Math.random() * spacing),
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2
          });
        }
      }
    }

    // Initialize
    generateDots();

    // Animation function
    function animate() {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      ctx.fillStyle = 'rgba(56, 182, 255, 0.3)';
      dots.forEach(dot => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw connections
      ctx.strokeStyle = 'rgba(56, 182, 255, 0.15)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dot1 = dots[i];
          const dot2 = dots[j];
          const distance = Math.hypot(dot1.x - dot2.x, dot1.y - dot2.y);
          
          // Only connect dots within a certain range
          const maxDistance = canvas.width / 8;
          if (distance < maxDistance) {
            // Opacity based on distance
            ctx.globalAlpha = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      
      // Continue animation
      requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Handle window resize
    window.addEventListener('resize', generateDots);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', generateDots);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
}