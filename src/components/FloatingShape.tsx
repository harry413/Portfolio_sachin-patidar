"use client"

import type React from "react"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingParticle {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function FloatingShape() {
  const [particles, setParticles] = useState<FloatingParticle[]>([])
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const backgroundX = useTransform(springX, [0, 1000], [0, 50])
  const backgroundY = useTransform(springY, [0, 1000], [0, 50])
  const gridX = useTransform(springX, [0, 1000], [0, -25])
  const gridY = useTransform(springY, [0, 1000], [0, -25])
  const orb1X = useTransform(springX, [0, 1000], [0, 100])
  const orb1Y = useTransform(springY, [0, 1000], [0, 50])
  const orb2X = useTransform(springX, [0, 1000], [0, -80])
  const orb2Y = useTransform(springY, [0, 1000], [0, -60])
  const waveX = useTransform(springX, [0, 1000], [0, 30])

  useEffect(() => {
    setMounted(true)

    // Generate floating particles
    const newParticles: FloatingParticle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      delay: Math.random() * 4,
    }))

    setParticles(newParticles)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-10 overflow-hidden absolute" onMouseMove={handleMouseMove}>
      {/* Gradient Background */}
      <motion.div
        className="inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
      />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(38, 37, 39, 0.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(38, 37, 39, 0.55) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          x: gridX,
          y: gridY,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40 backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          whileHover={{
            scale: 1.5,
            opacity: 0.8,
            transition: { duration: 0.3 },
          }}
        />
      ))}

      {/* Interactive Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          x: orb1X,
          y: orb1Y,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-accent/40 to-secondary/40 blur-lg"
        animate={{
          scale: [1, 0.8, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          x: orb2X,
          y: orb2Y,
        }}
      />

      {/* Subtle Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/50 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          x: waveX,
        }}
      />
    </div>
  )
}
