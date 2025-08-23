'use client'

import React from 'react'
import {
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowUpLeft,
  ArrowUpDown,
  ArrowLeftRight,
  Shuffle,
  ArrowRightLeft,
  Expand,
  Shrink,
  Plus,
  Minus,
  RotateCcw,
  RotateCw,
  Undo,
  Redo,
  CornerDownLeft,
  CornerUpRight,
  CornerRightUp,
  CornerLeftDown,
  ChevronsDown,
  ChevronsUp,
  ChevronsRight,
  ChevronsLeft,
  RefreshCw,
  RefreshCcw,
  type LucideIcon
} from 'lucide-react'

// Icon mapping for easy access
export const directionalIcons = {
  // Caret/Chevron
  'caret-up': ChevronUp,
  'caret-down': ChevronDown,
  'caret-right': ChevronRight,
  'caret-left': ChevronLeft,
  
  // Arrows
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  
  // Diagonal Arrows
  'arrow-up-right': ArrowUpRight,
  'arrow-down-right': ArrowDownRight,
  'arrow-down-left': ArrowDownLeft,
  'arrow-up-left': ArrowUpLeft,
  
  // Special Arrows
  'arrow-up-down': ArrowUpDown,
  'arrow-left-right': ArrowLeftRight,
  'shuffle': Shuffle,
  'arrow-right-left': ArrowRightLeft,
  
  // Expand/Contract
  'expand': Expand,
  'shrink': Shrink,
  'plus': Plus,
  'minus': Minus,
  
  // Refresh/Reload
  'rotate-ccw': RotateCcw,
  'rotate-cw': RotateCw,
  'undo': Undo,
  'redo': Redo,
  
  // Flow Arrows
  'corner-down-left': CornerDownLeft,
  'corner-up-right': CornerUpRight,
  'corner-right-up': CornerRightUp,
  'corner-left-down': CornerLeftDown,
  
  // Double Arrows
  'chevrons-down': ChevronsDown,
  'chevrons-up': ChevronsUp,
  'chevrons-right': ChevronsRight,
  'chevrons-left': ChevronsLeft,
  
  // Circular
  'refresh-cw': RefreshCw,
  'refresh-ccw': RefreshCcw
} as const

export type DirectionalIconName = keyof typeof directionalIcons

interface DirectionalIconProps {
  name: DirectionalIconName
  size?: number | string
  className?: string
  color?: 'purple' | 'blue' | 'emerald' | 'orange' | 'pink' | 'white' | 'gray'
  variant?: 'default' | 'outline' | 'filled' | 'ghost'
  onClick?: () => void
  disabled?: boolean
}

export const DirectionalIcon: React.FC<DirectionalIconProps> = ({
  name,
  size = 24,
  className = '',
  color = 'white',
  variant = 'default',
  onClick,
  disabled = false
}) => {
  const IconComponent = directionalIcons[name]
  
  const colorClasses = {
    purple: 'text-purple-400',
    blue: 'text-blue-400', 
    emerald: 'text-emerald-400',
    orange: 'text-orange-400',
    pink: 'text-pink-400',
    white: 'text-white',
    gray: 'text-gray-400'
  }

  const variantClasses = {
    default: '',
    outline: 'border border-current rounded p-1',
    filled: `bg-current text-slate-900 rounded p-1`,
    ghost: 'hover:bg-current hover:bg-opacity-10 rounded p-1 transition-colors'
  }

  const sizeClass = typeof size === 'number' ? `w-${Math.floor(size/4)} h-${Math.floor(size/4)}` : size

  return (
    <IconComponent
      className={`
        ${sizeClass} 
        ${colorClasses[color]} 
        ${variantClasses[variant]} 
        ${onClick ? 'cursor-pointer hover:opacity-75' : ''} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
        transition-opacity duration-200
        ${className}
      `}
      onClick={!disabled ? onClick : undefined}
    />
  )
}

// Preset icon button components for common use cases
interface IconButtonProps {
  onClick?: () => void
  disabled?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'ghost' | 'outline' | 'filled'
}

export const BackButton: React.FC<IconButtonProps> = ({ 
  onClick, 
  disabled, 
  className = '', 
  size = 'md',
  variant = 'ghost'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5', 
    lg: 'w-6 h-6'
  }

  const variantClasses = {
    default: 'text-white',
    ghost: 'text-white hover:bg-white hover:bg-opacity-10 rounded-lg p-2 transition-colors',
    outline: 'text-white border border-white rounded-lg p-2 hover:bg-white hover:text-slate-900 transition-all',
    filled: 'text-slate-900 bg-white rounded-lg p-2 hover:bg-opacity-90 transition-all'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <ArrowLeft className={sizeClasses[size]} />
    </button>
  )
}

export const NextButton: React.FC<IconButtonProps & { children?: React.ReactNode }> = ({ 
  onClick, 
  disabled, 
  className = '', 
  size = 'md',
  variant = 'filled',
  children
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5', 
    lg: 'w-6 h-6'
  }

  const variantClasses = {
    default: 'text-white',
    ghost: 'text-white hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-2 transition-colors',
    outline: 'text-white border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-slate-900 transition-all',
    filled: 'text-slate-900 bg-white rounded-lg px-4 py-2 hover:bg-opacity-90 transition-all'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children && <span>{children}</span>}
      <ArrowRight className={sizeClasses[size]} />
    </button>
  )
}

export const ExpandButton: React.FC<IconButtonProps> = ({ 
  onClick, 
  disabled, 
  className = '', 
  size = 'md',
  variant = 'ghost'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5', 
    lg: 'w-6 h-6'
  }

  const variantClasses = {
    default: 'text-white',
    ghost: 'text-white hover:bg-white hover:bg-opacity-10 rounded-lg p-2 transition-colors',
    outline: 'text-white border border-white rounded-lg p-2 hover:bg-white hover:text-slate-900 transition-all',
    filled: 'text-slate-900 bg-white rounded-lg p-2 hover:bg-opacity-90 transition-all'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <Expand className={sizeClasses[size]} />
    </button>
  )
}

export const RefreshButton: React.FC<IconButtonProps> = ({ 
  onClick, 
  disabled, 
  className = '', 
  size = 'md',
  variant = 'ghost'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5', 
    lg: 'w-6 h-6'
  }

  const variantClasses = {
    default: 'text-white',
    ghost: 'text-white hover:bg-white hover:bg-opacity-10 rounded-lg p-2 transition-colors',
    outline: 'text-white border border-white rounded-lg p-2 hover:bg-white hover:text-slate-900 transition-all',
    filled: 'text-slate-900 bg-white rounded-lg p-2 hover:bg-opacity-90 transition-all'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <RotateCw className={sizeClasses[size]} />
    </button>
  )
}

// Navigation component using directional icons
interface NavigationProps {
  onBack?: () => void
  onNext?: () => void
  onExpand?: () => void
  onRefresh?: () => void
  showBack?: boolean
  showNext?: boolean
  showExpand?: boolean
  showRefresh?: boolean
  nextLabel?: string
  className?: string
}

export const Navigation: React.FC<NavigationProps> = ({
  onBack,
  onNext,
  onExpand,
  onRefresh,
  showBack = true,
  showNext = true,
  showExpand = false,
  showRefresh = false,
  nextLabel = 'Continue',
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-2">
        {showBack && (
          <BackButton onClick={onBack} variant="ghost" />
        )}
        {showRefresh && (
          <RefreshButton onClick={onRefresh} variant="ghost" />
        )}
        {showExpand && (
          <ExpandButton onClick={onExpand} variant="ghost" />
        )}
      </div>
      
      {showNext && (
        <NextButton onClick={onNext} variant="filled">
          {nextLabel}
        </NextButton>
      )}
    </div>
  )
}

export default DirectionalIcon