'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Target,
  Activity,
  Calendar,
  Shield,
  Zap
} from 'lucide-react'

interface PerformanceStatsPanelProps {
  isOpen: boolean
  onClose: () => void
}

interface StatItem {
  label: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
}

export const PerformanceStatsPanel: React.FC<PerformanceStatsPanelProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'backtest' | 'live'>('backtest')

  const backtestStats: StatItem[] = [
    {
      label: 'Total Return',
      value: '45.90%',
      change: '+12.3%',
      isPositive: true,
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      label: 'Sharpe Ratio',
      value: '2.15',
      change: '+0.18',
      isPositive: true,
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      label: 'Max Drawdown',
      value: '8.2%',
      change: '-1.1%',
      isPositive: true,
      icon: <Shield className="w-5 h-5" />
    },
    {
      label: 'Win Rate',
      value: '68.4%',
      change: '+2.7%',
      isPositive: true,
      icon: <Target className="w-5 h-5" />
    },
    {
      label: 'Total Trades',
      value: '1247',
      change: '+89',
      isPositive: true,
      icon: <Activity className="w-5 h-5" />
    },
    {
      label: 'Avg Profit/Trade',
      value: '$342',
      change: '+$23',
      isPositive: true,
      icon: <DollarSign className="w-5 h-5" />
    }
  ]

  const liveStats: StatItem[] = [
    {
      label: 'Total Return',
      value: '45.30%',
      change: '+11.8%',
      isPositive: true,
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      label: 'Sharpe Ratio',
      value: '2.08',
      change: '+0.16',
      isPositive: true,
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      label: 'Max Drawdown',
      value: '8.7%',
      change: '-0.8%',
      isPositive: true,
      icon: <Shield className="w-5 h-5" />
    },
    {
      label: 'Win Rate',
      value: '66.8%',
      change: '+1.9%',
      isPositive: true,
      icon: <Target className="w-5 h-5" />
    },
    {
      label: 'Total Trades',
      value: '1183',
      change: '+76',
      isPositive: true,
      icon: <Activity className="w-5 h-5" />
    },
    {
      label: 'Avg Profit/Trade',
      value: '$329',
      change: '+$19',
      isPositive: true,
      icon: <DollarSign className="w-5 h-5" />
    }
  ]

  const currentStats = activeTab === 'backtest' ? backtestStats : liveStats

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-700 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Performance Stats</h3>
                  <p className="text-sm text-gray-400">Detailed metrics</p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActiveTab('backtest')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'backtest'
                    ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Backtest
              </button>
              <button
                onClick={() => setActiveTab('live')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'live'
                    ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Live Trade
              </button>
            </div>

            {/* Stats Grid */}
            <div className="p-4 space-y-3">
              {currentStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-3 border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-cyan-400">
                        {stat.icon}
                      </div>
                      <span className="text-sm text-gray-400">
                        {stat.label}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      stat.isPositive 
                        ? 'text-green-400 bg-green-500/20' 
                        : 'text-red-400 bg-red-500/20'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}