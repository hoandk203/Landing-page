'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface ScrollDownIndicatorProps {
  targetId?: string
  className?: string
  variant?: 'default' | 'minimal' | 'branded' | 'floating'
  label?: string
}

export const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({
  targetId = 'products-section',
  className = '',
  variant = 'default',
  label = 'Khám phá thêm'
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

  // Default variant - elegant and modern
  if (variant === 'default') {
    return (
      <motion.button 
        onClick={scrollToSection}
        className={`group flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-110 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ y: -5 }}
      >
        {/* Vertical Line */}
        <motion.div 
          className="w-0.5 h-16 bg-gradient-to-b from-transparent via-emerald-400 to-transparent rounded-full"
          animate={{ 
            scaleY: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Arrow Circle */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-slate-600 bg-slate-800/50 backdrop-blur-sm flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300">
            <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-emerald-300 transition-colors duration-300" />
          </div>
          
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
        </div>
        
        {/* Label */}
        <span className="text-xs text-slate-500 group-hover:text-emerald-300 transition-colors font-medium tracking-wider uppercase">
          {label}
        </span>
      </motion.button>
    )
  }

  // Minimal variant - clean and simple
  if (variant === 'minimal') {
    return (
      <motion.button 
        onClick={scrollToSection}
        className={`group flex items-center justify-center transition-all duration-300 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-300" />
        </motion.div>
      </motion.button>
    )
  }

  // Branded variant - Quantumine style
  if (variant === 'branded') {
    return (
      <motion.button 
        onClick={scrollToSection}
        className={`group relative overflow-hidden bg-slate-800 h-16 w-16 border border-slate-600 rounded-xl hover:border-emerald-400 duration-500 flex items-center justify-center transition-all hover:scale-105 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ y: -3 }}
      >
        {/* Shine Effect */}
        <span className="absolute right-0 -mt-12 h-32 w-6 translate-x-12 rotate-12 bg-emerald-400 opacity-20 transition-all duration-1000 ease-out group-hover:-translate-x-20" />
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-7 h-7 text-slate-400 group-hover:text-emerald-300 transition-all duration-300 relative z-10" />
        </motion.div>
      </motion.button>
    )
  }

  // Floating variant - fixed position
  if (variant === 'floating') {
    return (
      <motion.button 
        onClick={scrollToSection}
        className={`group fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 ${className}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background Pulse */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-emerald-500 opacity-30"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-6 h-6 text-white relative z-10" />
        </motion.div>
      </motion.button>
    )
  }

  return null
}

export default ScrollDownIndicator