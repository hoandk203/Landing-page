'use client'

import React, { useState } from 'react'
import { Calendar, TrendingUp, BarChart3 } from 'lucide-react'

interface ProfitMatrixProps {
  className?: string
  data?: Array<{
    date: string
    backtest_return: number
    sp500_return: number
    live_trade_return: number
  }>
}

export const ProfitMatrix: React.FC<ProfitMatrixProps> = ({ className = "", data = [] }) => {
  const [dataType, setDataType] = useState<'backtest' | 'live'>('backtest')

  // Process real data into matrix format
  const processDataToMatrix = () => {
    if (data.length === 0) {
      // Fallback data
      return {
        backtest: {
          2024: [4.2, 3.8, 5.6, -2.1, 4.9, 7.2, 5.8, 8.3, null, null, null, null],
          2023: [3.1, 4.5, 6.2, 5.8, -1.1, 4.9, 6.8, 5.5, 7.9, 6.3, 5.1, 8.7],
          2022: [-2.8, 3.9, 5.1, 4.7, 6.3, 5.9, 7.2, 6.1, 5.8, 7.4, 6.6, 9.1],
          2021: [3.5, 4.1, 5.8, 6.9, 5.2, 6.7, 8.1, 7.3, 6.9, 8.2, 7.5, 9.8]
        },
        live: {
          2024: [3.9, 3.6, 5.2, -1.8, 4.7, 6.9, 5.5, 8.0, null, null, null, null],
          2023: [2.9, 4.2, 5.9, 5.5, -0.8, 4.6, 6.5, 5.2, 7.6, 6.0, 4.8, 8.4],
          2022: [-2.5, 3.6, 4.8, 4.4, 6.0, 5.6, 6.9, 5.8, 5.5, 7.1, 6.3, 8.8],
          2021: [3.2, 3.8, 5.5, 6.6, 4.9, 6.4, 7.8, 7.0, 6.6, 7.9, 7.2, 9.5]
        }
      }
    }

    // Sort data by date
    const sortedData = [...data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    
    if (sortedData.length === 0) {
      return { backtest: {}, live: {} }
    }
    
    // Group data by year and month, then calculate monthly returns
    const monthlyData: { [yearMonth: string]: { backtest: number[], live: number[] } } = {}
    
    // Group data points by year-month
    sortedData.forEach(item => {
      const date = new Date(item.date)
      const yearMonth = `${date.getFullYear()}-${date.getMonth()}`
      
      if (!monthlyData[yearMonth]) {
        monthlyData[yearMonth] = { backtest: [], live: [] }
      }
      
      // Use cumulative returns (already calculated from baseline)
      monthlyData[yearMonth].backtest.push(item.backtest_return)
      monthlyData[yearMonth].live.push(item.live_trade_return)
    })
    
    // Calculate monthly returns and organize by year
    const backtestMatrix: { [year: number]: (number | null)[] } = {}
    const liveMatrix: { [year: number]: (number | null)[] } = {}
    
    const yearMonths = Object.keys(monthlyData).sort()
    let prevBacktest = 0
    let prevLive = 0
    
    yearMonths.forEach((yearMonth, index) => {
      const [yearStr, monthStr] = yearMonth.split('-')
      const year = parseInt(yearStr)
      const month = parseInt(monthStr)
      
      if (!backtestMatrix[year]) {
        backtestMatrix[year] = new Array(12).fill(null)
        liveMatrix[year] = new Array(12).fill(null)
      }
      
      const monthData = monthlyData[yearMonth]
      const avgBacktest = monthData.backtest.reduce((sum, val) => sum + val, 0) / monthData.backtest.length
      const avgLive = monthData.live.reduce((sum, val) => sum + val, 0) / monthData.live.length
      
      // Calculate month-over-month return
      if (index === 0) {
        // First month, set as baseline
        backtestMatrix[year][month] = 0
        liveMatrix[year][month] = 0
      } else {
        // Calculate percentage change from previous month
        const backtestReturn = ((avgBacktest + 100) / (prevBacktest + 100) - 1) * 100
        const liveReturn = ((avgLive + 100) / (prevLive + 100) - 1) * 100
        
        backtestMatrix[year][month] = backtestReturn
        liveMatrix[year][month] = liveReturn
      }
      
      prevBacktest = avgBacktest
      prevLive = avgLive
    })
    
    // Get years and sort them (newest first)
    const years = Object.keys(backtestMatrix).map(Number).sort((a, b) => b - a)
    
    // Filter out years with no data
    const filteredBacktest: { [year: number]: (number | null)[] } = {}
    const filteredLive: { [year: number]: (number | null)[] } = {}
    
    years.forEach(year => {
      const hasData = backtestMatrix[year].some(val => val !== null)
      if (hasData) {
        filteredBacktest[year] = backtestMatrix[year]
        filteredLive[year] = liveMatrix[year]
      }
    })
    
    return {
      backtest: filteredBacktest,
      live: filteredLive
    }
  }

  const matrixData = processDataToMatrix()
  const backtestData = matrixData.backtest
  const liveData = matrixData.live

  const currentData = dataType === 'backtest' ? backtestData : liveData
  const years = Object.keys(currentData).map(Number).sort((a, b) => b - a) // 2024 -> 2021
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const getPerformanceColor = (value: number | null) => {
    if (value === null) return 'text-gray-500'
    if (value > 0) return 'text-green-400'
    return 'text-red-400'
  }

  const formatPercent = (value: number | null) => {
    if (value === null) return '-'
    return `${value.toFixed(1)}%`
  }

  // Calculate yearly totals
  const getYearlyTotal = (year: number) => {
    const yearData = currentData[year as keyof typeof currentData]
    const validValues = yearData.filter(val => val !== null) as number[]
    return validValues.reduce((sum, val) => sum + val, 0)
  }

  return (
    <div className={`backdrop-blur-md bg-gray-800/30 border border-gray-600/20 rounded-3xl p-8 shadow-xl hover:border-gray-500/40 transition-all duration-300 ${className}`}>
      {/* Premium Matrix Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Profit Matrix</h3>
          <p className="text-gray-400 font-medium">Monthly Performance by Year (%)</p>
        </div>

        {/* Premium Glass Toggle */}
        <div className="backdrop-blur-md bg-gray-800/50 border border-gray-600/30 rounded-2xl p-1.5 shadow-lg">
          <div className="flex space-x-1">
            <button
              onClick={() => setDataType('backtest')}
              className={`py-2 px-5 text-sm font-medium rounded-xl transition-all duration-300 ${
                dataType === 'backtest'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 text-cyan-300 shadow-lg shadow-cyan-500/25 border border-cyan-400/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Backtest
            </button>
            <button
              onClick={() => setDataType('live')}
              className={`py-2 px-5 text-sm font-medium rounded-xl transition-all duration-300 ${
                dataType === 'live'
                  ? 'bg-gradient-to-r from-green-500/20 to-green-400/20 text-green-300 shadow-lg shadow-green-500/25 border border-green-400/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Live Trade
            </button>
          </div>
        </div>
      </div>

      {/* Premium Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div className="text-center group cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
            {getYearlyTotal(2024).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">YTD 2024</div>
        </div>
        <div className="text-center group cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
            {getYearlyTotal(2023).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">2023 Total</div>
        </div>
        <div className="text-center group cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
            {(years.reduce((sum, year) => sum + getYearlyTotal(year), 0) / years.length).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">Avg/Year</div>
        </div>
        <div className="text-center group cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
            {Math.max(...years.map(year => getYearlyTotal(year))).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">Best Year</div>
        </div>
      </div>

      {/* Premium Glass Matrix Table */}
      <div className="overflow-x-auto mb-10">
        <div className="backdrop-blur-sm bg-gray-800/20 border border-gray-600/15 rounded-2xl p-4 shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-5 px-4 text-sm font-bold text-gray-300 tracking-wider">
                  Year
                </th>
                {months.map(month => (
                  <th key={month} className="text-center py-5 px-3 text-xs font-bold text-gray-300 min-w-[65px] uppercase tracking-wider">
                    {month}
                  </th>
                ))}
                <th className="text-center py-5 px-4 text-sm font-bold text-gray-300 min-w-[90px] tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {years.map((year, yearIndex) => (
                <tr key={year} className="hover:bg-gray-700/30 transition-all duration-300 group">
                  <td className="py-4 px-4 font-bold text-white text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {year}
                  </td>
                  {months.map((month, monthIndex) => {
                    const value = currentData[year as keyof typeof currentData][monthIndex]
                    return (
                      <td key={`${year}-${month}`} className="py-4 px-2 text-center">
                        <span className={`text-sm font-bold transition-all duration-300 hover:scale-110 cursor-default ${getPerformanceColor(value)}`}>
                          {formatPercent(value)}
                        </span>
                      </td>
                    )
                  })}
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-cyan-100 transition-all duration-300">
                      {getYearlyTotal(year).toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Simple Legend */}
      <div className="flex items-center justify-center space-x-10 text-sm">
        <div className="flex items-center space-x-2 group cursor-default">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300">Positive Returns</span>
        </div>
        <div className="flex items-center space-x-2 group cursor-default">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-red-300 group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-red-400 font-medium group-hover:text-red-300 transition-colors duration-300">Negative Returns</span>
        </div>
        <div className="flex items-center space-x-2 group cursor-default">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-400 group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-500 font-medium group-hover:text-gray-400 transition-colors duration-300">No Data</span>
        </div>
      </div>
    </div>
  )
}