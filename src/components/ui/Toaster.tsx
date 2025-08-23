'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

interface Toast {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  description?: string
  duration?: number
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastItemProps {
  toast: Toast
  onRemove: (id: string) => void
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const duration = toast.duration || 5000
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => onRemove(toast.id), 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove])

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />
    }
  }

  const getColors = () => {
    switch (toast.type) {
      case 'success':
        return 'border-emerald-500/30 bg-emerald-500/10'
      case 'error':
        return 'border-red-500/30 bg-red-500/10'
      case 'info':
        return 'border-blue-500/30 bg-blue-500/10'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.3 }}
      animate={{ 
        opacity: isExiting ? 0 : 1, 
        x: isExiting ? 300 : 0, 
        scale: isExiting ? 0.3 : 1 
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`relative max-w-sm w-full ${getColors()} border backdrop-blur-xl rounded-2xl shadow-lg p-4`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">
            {toast.title}
          </p>
          {toast.description && (
            <p className="mt-1 text-sm text-slate-300">
              {toast.description}
            </p>
          )}
        </div>
        
        <button
          onClick={() => {
            setIsExiting(true)
            setTimeout(() => onRemove(toast.id), 300)
          }}
          className="flex-shrink-0 w-5 h-5 text-slate-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: Toast = { ...toast, id }
    
    setToasts(prev => [...prev, newToast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <div className="fixed top-4 right-4 z-50 space-y-4">
        <AnimatePresence>
          {toasts.map(toast => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onRemove={removeToast}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export const Toaster: React.FC = () => {
  return <ToastContainer />
}