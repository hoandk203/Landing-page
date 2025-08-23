'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCw, Zap, Sparkles } from 'lucide-react'

/**
 * Animation component samples according to front-end specification
 * Demonstrates CSS animations, Framer Motion effects, and micro-interactions
 */
export const AnimationSamples: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="space-y-12 p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8">Animation Component Samples</h2>

      {/* CSS Particle Animation Sample */}
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-lg font-semibold text-emerald-400">CSS Particle Background</h3>
        <div className="relative h-40 bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
          <div className="absolute inset-0 particle-background opacity-60"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <p className="text-slate-300">Particle background animation</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Framer Motion Stagger Animation */}
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-lg font-semibold text-emerald-400">Stagger Animation</h3>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold"
              whileHover={{ scale: 1.05, rotateY: 180 }}
              transition={{ duration: 0.3 }}
            >
              {i + 1}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Micro-interactions */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-emerald-400">Micro-interactions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Hover Scale Button */}
          <motion.button
            className="h-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl font-semibold flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(16, 185, 129, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Zap className="w-5 h-5" />
            Hover Effect
          </motion.button>

          {/* Rotating Icon Button */}
          <motion.button
            className="h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 1, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
            >
              <RotateCw className="w-5 h-5" />
            </motion.div>
            {isPlaying ? 'Spinning' : 'Click to Spin'}
          </motion.button>

          {/* Pulse Button */}
          <motion.button
            className="h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-semibold flex items-center justify-center gap-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            Pulse Effect
          </motion.button>
        </div>
      </div>

      {/* Loading States */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-emerald-400">Loading Animations</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Spinner */}
          <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
            <motion.div
              className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Dots */}
          <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center gap-2 border border-slate-700">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-emerald-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center p-6 border border-slate-700">
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Reveal Animation */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-emerald-400">Scroll Reveal Animation</h3>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center px-6 border border-slate-600"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <span className="text-slate-200">Scroll reveal item {i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Play/Pause Control */}
      <div className="fixed bottom-8 right-8">
        <motion.button
          className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </motion.button>
      </div>

      <style jsx>{`
        .particle-background {
          background-image: 
            radial-gradient(2px 2px at 20% 30%, #0066ff, transparent),
            radial-gradient(2px 2px at 40% 70%, #00cc66, transparent),
            radial-gradient(1px 1px at 90% 40%, #ff6b35, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: particleFloat 20s linear infinite;
        }

        @keyframes particleFloat {
          0% { 
            transform: translateY(100vh) rotate(0deg); 
          }
          100% { 
            transform: translateY(-10vh) rotate(360deg); 
          }
        }
      `}</style>
    </div>
  )
}

export default AnimationSamples