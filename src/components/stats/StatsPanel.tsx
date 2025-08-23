'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Activity,
  Calendar,
  Target,
  Zap,
  Shield
} from 'lucide-react'

interface StatsPanelProps {
  isOpen: boolean
  onClose: () => void
  currentLanguage?: 'en' | 'vn'
}

interface StatItem {
  id: string
  label: string
  labelVN: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
}

interface MonthlyPerformance {
  month: string
  return: number
  sharpe: number
  maxDrawdown: number
  trades: number
}

export const StatsPanel: React.FC<StatsPanelProps> = ({
  isOpen,
  onClose,
  currentLanguage = 'vn'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'monthly'>('overview')

  const stats: StatItem[] = [
    {
      id: 'total-return',
      label: 'Total Return',
      labelVN: 'Tổng Lợi Nhuận',
      value: '45.9%',
      change: '+12.3%',
      isPositive: true,
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 'sharpe-ratio',
      label: 'Sharpe Ratio',
      labelVN: 'Tỷ Số Sharpe',
      value: '2.15',
      change: '+0.18',
      isPositive: true,
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: 'max-drawdown',
      label: 'Max Drawdown',
      labelVN: 'Rút Vốn Tối Đa',
      value: '8.2%',
      change: '-1.1%',
      isPositive: true,
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'win-rate',
      label: 'Win Rate',
      labelVN: 'Tỷ Lệ Thắng',
      value: '68.4%',
      change: '+2.7%',
      isPositive: true,
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 'total-trades',
      label: 'Total Trades',
      labelVN: 'Tổng Giao Dịch',
      value: '1247',
      change: '+89',
      isPositive: true,
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'avg-profit',
      label: 'Avg Profit/Trade',
      labelVN: 'LN TB/Giao Dịch',
      value: '$342',
      change: '+$23',
      isPositive: true,
      icon: <DollarSign className="w-5 h-5" />
    }
  ]

  const monthlyData: MonthlyPerformance[] = [
    { month: 'Jan 2024', return: 4.2, sharpe: 1.8, maxDrawdown: 2.1, trades: 89 },
    { month: 'Feb 2024', return: 3.8, sharpe: 2.1, maxDrawdown: 1.9, trades: 95 },
    { month: 'Mar 2024', return: 5.6, sharpe: 2.3, maxDrawdown: 3.2, trades: 103 },
    { month: 'Apr 2024', return: 6.1, sharpe: 2.0, maxDrawdown: 2.8, trades: 87 },
    { month: 'May 2024', return: 4.9, sharpe: 2.2, maxDrawdown: 2.5, trades: 92 },
    { month: 'Jun 2024', return: 7.2, sharpe: 2.4, maxDrawdown: 3.1, trades: 108 },
    { month: 'Jul 2024', return: 5.8, sharpe: 2.1, maxDrawdown: 2.7, trades: 94 },
    { month: 'Aug 2024', return: 8.3, sharpe: 2.6, maxDrawdown: 3.8, trades: 112 }
  ]

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
            className="fixed top-0 right-0 h-full w-96 bg-gray-900 border-l border-gray-700 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {currentLanguage === 'en' ? 'Performance Stats' : 'Thống Kê Hiệu Suất'}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {currentLanguage === 'en' ? 'Real-time trading metrics' : 'Chỉ số giao dịch thời gian thực'}
                  </p>
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
                onClick={() => setActiveTab('overview')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {currentLanguage === 'en' ? 'Overview' : 'Tổng Quan'}
              </button>
              <button
                onClick={() => setActiveTab('monthly')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'monthly'
                    ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {currentLanguage === 'en' ? 'Monthly' : 'Theo Tháng'}
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="text-cyan-400">
                            {stat.icon}
                          </div>
                          <span className="text-sm text-gray-400">
                            {currentLanguage === 'en' ? stat.label : stat.labelVN}
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
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'monthly' && (
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {currentLanguage === 'en' ? 'Monthly Performance' : 'Hiệu Suất Theo Tháng'}
                    </h3>
                    
                    <div className="space-y-3">
                      {monthlyData.map((data, index) => (
                        <motion.div
                          key={data.month}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-700 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-white">{data.month}</span>
                            <span className={`text-sm px-2 py-1 rounded-full ${
                              data.return > 0 
                                ? 'text-green-400 bg-green-500/20' 
                                : 'text-red-400 bg-red-500/20'
                            }`}>
                              {data.return > 0 ? '+' : ''}{data.return.toFixed(1)}%
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-3 text-sm">
                            <div>
                              <div className="text-gray-400">Sharpe</div>
                              <div className="text-white font-medium">{data.sharpe}</div>
                            </div>
                            <div>
                              <div className="text-gray-400">Drawdown</div>
                              <div className="text-white font-medium">{data.maxDrawdown}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400">Trades</div>
                              <div className="text-white font-medium">{data.trades}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}