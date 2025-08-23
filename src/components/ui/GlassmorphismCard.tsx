'use client'

import React from 'react'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface GlassmorphismCardProps {
  title: string
  description: string
  icon?: LucideIcon
  color?: 'emerald' | 'blue' | 'purple' | 'orange' | 'pink'
  size?: 'sm' | 'md' | 'lg'
  buttonText?: string
  onButtonClick?: () => void
  metrics?: Array<{
    label: string
    value: string | number
    color?: string
  }>
  badge?: string
  className?: string
  children?: React.ReactNode
}

export const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  title,
  description,
  icon: Icon,
  color = 'emerald',
  size = 'md',
  buttonText = 'Learn More',
  onButtonClick,
  metrics,
  badge,
  className = '',
  children
}) => {
  const colorClasses = {
    emerald: {
      border: 'border-emerald-500/50 hover:border-emerald-400/70',
      gradient: 'from-emerald-600 to-emerald-600/5',
      shadow: 'hover:shadow-emerald-500/20',
      icon: 'bg-emerald-500/30 text-emerald-300',
      button: 'hover:border-emerald-300/50',
      badge: 'bg-emerald-500/20'
    },
    blue: {
      border: 'border-blue-500/50 hover:border-blue-400/70',
      gradient: 'from-blue-600 to-blue-600/5',
      shadow: 'hover:shadow-blue-500/20',
      icon: 'bg-blue-500/30 text-blue-300',
      button: 'hover:border-blue-300/50',
      badge: 'bg-blue-500/20'
    },
    purple: {
      border: 'border-purple-500/50 hover:border-purple-400/70',
      gradient: 'from-purple-600 to-purple-600/5',
      shadow: 'hover:shadow-purple-500/20',
      icon: 'bg-purple-500/30 text-purple-300',
      button: 'hover:border-purple-300/50',
      badge: 'bg-purple-500/20'
    },
    orange: {
      border: 'border-orange-500/50 hover:border-orange-400/70',
      gradient: 'from-orange-600 to-orange-600/5',
      shadow: 'hover:shadow-orange-500/20',
      icon: 'bg-orange-500/30 text-orange-300',
      button: 'hover:border-orange-300/50',
      badge: 'bg-orange-500/20'
    },
    pink: {
      border: 'border-pink-500/50 hover:border-pink-400/70',
      gradient: 'from-pink-600 to-pink-600/5',
      shadow: 'hover:shadow-pink-500/20',
      icon: 'bg-pink-500/30 text-pink-300',
      button: 'hover:border-pink-300/50',
      badge: 'bg-pink-500/20'
    }
  }

  const sizeClasses = {
    sm: 'h-56 w-64 p-4',
    md: 'h-64 w-72 p-4',
    lg: 'h-80 w-full max-w-md p-6'
  }

  const colors = colorClasses[color]

  return (
    <motion.div
      className={`
        border-2 rounded-3xl bg-gradient-to-br text-white 
        flex justify-between flex-col backdrop-blur-xl group 
        transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 
        relative overflow-hidden cursor-pointer
        ${colors.border} ${colors.gradient} ${colors.shadow} ${sizeClasses[size]} ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onButtonClick}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm ${colors.icon}`}>
                <Icon className="w-6 h-6" />
              </div>
            )}
            <h1 className={`font-bold ${size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'}`}>
              {title}
            </h1>
          </div>
          
          {badge && (
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
              {badge}
            </div>
          )}
        </div>
        
        {/* Description */}
        <p className={`opacity-90 leading-relaxed ${size === 'lg' ? 'text-sm mb-6' : 'text-sm mb-4'}`}>
          {description}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className={`grid gap-4 ${size === 'lg' ? 'grid-cols-3 mb-6' : 'grid-cols-2 mb-4'}`}>
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`font-bold ${colors.icon.split(' ')[1]} ${size === 'lg' ? 'text-2xl' : 'text-xl'}`}>
                  {metric.value}
                </div>
                <div className="text-xs opacity-70">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Content */}
        {children}
      </div>

      {/* Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation()
          onButtonClick?.()
        }}
        className={`
          h-fit w-full px-6 py-3 border border-white/30 rounded-2xl 
          flex justify-center items-center gap-3 overflow-hidden 
          group/btn hover:translate-y-0.5 duration-200 backdrop-blur-xl 
          hover:bg-white/10 transition-all font-medium relative z-20
          ${colors.button}
        `}
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 duration-300" />
      </button>
    </motion.div>
  )
}

export default GlassmorphismCard