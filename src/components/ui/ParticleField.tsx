'use client'

import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  life: number
}

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const colors = ['#0066FF', '#00CC66', '#FF6B35', '#8B5CF6']
    
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: Math.random() * 100 + 100
    })

    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(createParticle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.save()
        ctx.globalAlpha = Math.max(0, particle.life / 100) * 0.6
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Remove dead particles
        if (particle.life <= 0) {
          particlesRef.current[index] = createParticle()
        }
      })

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle1, i) => {
        particlesRef.current.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            ctx.globalAlpha = (120 - distance) / 120 * 0.1
            ctx.strokeStyle = '#4F46E5'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}