'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-8"
        >
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          <h1 className="text-3xl font-bold text-white">
            Oops! Something went wrong
          </h1>
          <p className="text-slate-400 text-lg">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
          {error.message && (
            <p className="text-sm text-slate-500 font-mono bg-slate-800/50 p-3 rounded-lg">
              {error.message}
            </p>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={reset}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </button>
        </motion.div>

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
        >
          <p className="text-sm text-slate-400">
            Need help? Contact our support team at{' '}
            <a 
              href="mailto:support@quantumine.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              support@quantumine.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}