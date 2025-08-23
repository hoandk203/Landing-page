'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut",
            rotate: { duration: 1, ease: "linear", repeat: Infinity }
          }}
          className="relative mx-auto mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-3xl">Q</span>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 animate-pulse" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              QUANTUMINE
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Đang tải hệ sinh thái trading...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          className="w-64 h-1 mx-auto mt-8 bg-slate-800 rounded-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}