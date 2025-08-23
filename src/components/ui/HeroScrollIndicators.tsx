'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowDown } from 'lucide-react'

interface HeroScrollIndicatorsProps {
  targetId?: string
  className?: string
  variant?: 'mouse' | 'arrow' | 'modern' | 'all'
}

export const HeroScrollIndicators: React.FC<HeroScrollIndicatorsProps> = ({
  targetId = 'products-section',
  className = '',
  variant = 'modern'
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

  // Mouse Scroll Indicator
  const MouseIndicator = () => (
    <motion.button
      onClick={scrollToSection}
      className="group flex flex-col items-center space-y-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      whileHover={{ y: -3, scale: 1.05 }}
    >
      {/* Mouse Shape */}
      <div className="relative">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full group-hover:border-emerald-400 transition-all duration-300 bg-slate-800/40 backdrop-blur-sm">
          <motion.div 
            className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-slate-500 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"
            animate={{
              y: [0, 6, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="absolute inset-0 w-6 h-10 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
      </div>

      <span className="text-xs text-slate-500 group-hover:text-emerald-300 transition-colors font-medium tracking-widest uppercase">
        Scroll
      </span>
    </motion.button>
  )

  // Simple Arrow Indicator
  const ArrowIndicator = () => (
    <motion.button
      onClick={scrollToSection}
      className="group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-8 h-8 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />
      </motion.div>
    </motion.button>
  )

  // Modern Combined Indicator
  const ModernIndicator = () => (
    <motion.button
      onClick={scrollToSection}
      className="group flex flex-col items-center space-y-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      {/* Vertical Line with Gradient */}
      <motion.div 
        className="w-0.5 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent rounded-full"
        animate={{ 
          height: [20, 32, 20],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Circle Button */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-slate-600/80 bg-slate-800/40 backdrop-blur-xl flex items-center justify-center group-hover:border-emerald-400/80 group-hover:bg-emerald-500/10 transition-all duration-500 shadow-lg">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />
          </motion.div>
        </div>
        
        {/* Pulse Rings */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-emerald-400/60"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        
        <motion.div 
          className="absolute inset-0 rounded-full border border-emerald-400/40"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5
          }}
        />
      </div>
      
      {/* Text */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        <span className="text-xs text-slate-500 group-hover:text-emerald-300 transition-colors font-medium tracking-[0.2em] uppercase">
          Khám phá
        </span>
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mt-2 group-hover:via-emerald-400/60 transition-colors duration-300" />
      </motion.div>
    </motion.button>
  )

  // All Variants (for demo purposes)
  const AllIndicators = () => (
    <div className="flex items-center space-x-12">
      <MouseIndicator />
      <ArrowIndicator />
      <ModernIndicator />
    </div>
  )

  return (
    <div className={`flex justify-center ${className}`}>
      {variant === 'mouse' && <MouseIndicator />}
      {variant === 'arrow' && <ArrowIndicator />}
      {variant === 'modern' && <ModernIndicator />}
      {variant === 'all' && <AllIndicators />}
    </div>
  )
}

export default HeroScrollIndicators