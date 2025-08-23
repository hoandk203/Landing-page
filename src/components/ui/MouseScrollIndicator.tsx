'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface MouseScrollIndicatorProps {
  targetId?: string
  className?: string
  showText?: boolean
  text?: string
}

export const MouseScrollIndicator: React.FC<MouseScrollIndicatorProps> = ({
  targetId = 'products-section',
  className = '',
  showText = true,
  text = 'Scroll'
}) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.button
      onClick={scrollToSection}
      className={`group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-110 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      whileHover={{ y: -5 }}
    >
      {/* Mouse Shape */}
      <div className="relative">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full group-hover:border-emerald-400 transition-all duration-300 bg-slate-800/30 backdrop-blur-sm">
          {/* Mouse Wheel Dot */}
          <motion.div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-slate-500 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 w-6 h-10 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
      </div>

      {/* Text */}
      {showText && (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <span className="text-xs text-slate-500 group-hover:text-emerald-300 transition-colors font-medium tracking-wider uppercase block">
            {text}
          </span>
          <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors mt-1 block">
            để khám phá
          </span>
        </motion.div>
      )}

      {/* Animated Arrow */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.button>
  )
}

export default MouseScrollIndicator