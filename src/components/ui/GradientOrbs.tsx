'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GradientOrbsProps {
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  count?: number
}

export const GradientOrbs: React.FC<GradientOrbsProps> = ({
  className = '',
  variant = 'primary',
  count = 3
}) => {
  const orbVariants = {
    primary: [
      'bg-gradient-to-r from-cyan-500/30 to-blue-600/30',
      'bg-gradient-to-r from-purple-500/25 to-pink-500/25',
      'bg-gradient-to-r from-blue-500/30 to-indigo-600/30'
    ],
    secondary: [
      'bg-gradient-to-r from-emerald-500/20 to-teal-600/20',
      'bg-gradient-to-r from-orange-500/20 to-red-500/20',
      'bg-gradient-to-r from-violet-500/25 to-purple-600/25'
    ],
    accent: [
      'bg-gradient-to-r from-yellow-400/20 to-orange-500/20',
      'bg-gradient-to-r from-green-400/20 to-emerald-500/20',
      'bg-gradient-to-r from-pink-400/25 to-rose-500/25'
    ]
  }

  const positions = [
    { top: '-5%', left: '10%', size: 'w-72 h-72' },
    { top: '40%', right: '5%', size: 'w-96 h-96' },
    { bottom: '-10%', left: '20%', size: 'w-80 h-80' },
    { top: '20%', right: '25%', size: 'w-64 h-64' },
    { bottom: '15%', right: '15%', size: 'w-56 h-56' },
    { top: '70%', left: '5%', size: 'w-88 h-88' },
    { bottom: '50%', left: '40%', size: 'w-72 h-72' }
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, index) => {
        const position = positions[index % positions.length]
        const gradient = orbVariants[variant][index % orbVariants[variant].length]
        
        return (
          <motion.div
            key={index}
            className={`absolute ${position.size} ${gradient} rounded-full blur-3xl`}
            style={{
              top: position.top,
              left: position.left,
              right: position.right,
              bottom: position.bottom,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1.5
            }}
          />
        )
      })}
    </div>
  )
}

export default GradientOrbs