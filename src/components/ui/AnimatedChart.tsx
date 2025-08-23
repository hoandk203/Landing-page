'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface DataPoint {
  x: number
  y: number
  value: number
}

export const AnimatedChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([])
  const [currentValue, setCurrentValue] = useState(127.5)

  useEffect(() => {
    // Generate realistic trading data
    const generateDataPoints = (): DataPoint[] => {
      const points: DataPoint[] = []
      let currentPrice = 100
      
      for (let i = 0; i < 50; i++) {
        const x = (i / 49) * 100 // 0 to 100%
        const volatility = Math.sin(i * 0.3) * 15 + Math.random() * 10 - 5
        currentPrice += volatility * 0.5
        currentPrice = Math.max(80, Math.min(150, currentPrice)) // Keep within bounds
        
        const y = 100 - ((currentPrice - 80) / 70) * 100 // Invert Y for SVG
        
        points.push({ x, y, value: currentPrice })
      }
      
      setCurrentValue(points[points.length - 1].value)
      return points
    }

    const initialData = generateDataPoints()
    setDataPoints(initialData)

    // Update data periodically to simulate real-time trading
    const interval = setInterval(() => {
      setDataPoints(prevPoints => {
        const newPoints = [...prevPoints]
        // Remove first point and add new one
        newPoints.shift()
        
        const lastPoint = newPoints[newPoints.length - 1]
        const newValue = lastPoint.value + (Math.random() - 0.5) * 3
        const clampedValue = Math.max(80, Math.min(150, newValue))
        
        newPoints.push({
          x: 100, // Always at the end
          y: 100 - ((clampedValue - 80) / 70) * 100,
          value: clampedValue
        })

        // Recalculate x positions
        newPoints.forEach((point, index) => {
          point.x = (index / (newPoints.length - 1)) * 100
        })

        setCurrentValue(clampedValue)
        return newPoints
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const createPath = (points: DataPoint[]): string => {
    if (points.length === 0) return ''
    
    return points.reduce((path, point, index) => {
      const command = index === 0 ? 'M' : 'L'
      return `${path} ${command} ${point.x} ${point.y}`
    }, '')
  }

  const createGradientPath = (points: DataPoint[]): string => {
    if (points.length === 0) return ''
    
    const path = createPath(points)
    const lastPoint = points[points.length - 1]
    return `${path} L ${lastPoint.x} 100 L 0 100 Z`
  }

  const isPositive = currentValue > 100
  const changePercent = ((currentValue - 100) / 100) * 100

  return (
    <div className="relative w-full h-64">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-2xl font-bold text-white">
            ${currentValue.toFixed(2)}
          </div>
          <div className={`text-sm font-medium flex items-center ${
            isPositive ? 'text-emerald-400' : 'text-red-400'
          }`}>
            <span className="mr-1">{isPositive ? '↗' : '↘'}</span>
            {changePercent > 0 ? '+' : ''}{changePercent.toFixed(2)}%
          </div>
        </div>
        <div className="text-xs text-gray-400">
          Last 24h
        </div>
      </div>

      {/* SVG Chart */}
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="w-full h-48 overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop 
              offset="0%" 
              stopColor={isPositive ? "#10b981" : "#ef4444"} 
              stopOpacity={0.3} 
            />
            <stop 
              offset="100%" 
              stopColor={isPositive ? "#10b981" : "#ef4444"} 
              stopOpacity={0.05} 
            />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Grid Lines */}
        {[...Array(5)].map((_, i) => (
          <line
            key={`horizontal-${i}`}
            x1="0"
            y1={i * 20}
            x2="100"
            y2={i * 20}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.2"
          />
        ))}
        
        {[...Array(6)].map((_, i) => (
          <line
            key={`vertical-${i}`}
            x1={i * 20}
            y1="0"
            x2={i * 20}
            y2="100"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.2"
          />
        ))}

        {/* Gradient Fill */}
        {dataPoints.length > 0 && (
          <motion.path
            d={createGradientPath(dataPoints)}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        )}

        {/* Main Chart Line */}
        {dataPoints.length > 0 && (
          <motion.path
            d={createPath(dataPoints)}
            fill="none"
            stroke={isPositive ? "#10b981" : "#ef4444"}
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}

        {/* Data Points */}
        {dataPoints.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="0.8"
            fill={isPositive ? "#10b981" : "#ef4444"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: index === dataPoints.length - 1 ? 1 : 0.6 }}
            transition={{ delay: 1.5 + index * 0.05 }}
          />
        ))}

        {/* Current Price Indicator */}
        {dataPoints.length > 0 && (
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
          >
            <circle
              cx={dataPoints[dataPoints.length - 1]?.x || 0}
              cy={dataPoints[dataPoints.length - 1]?.y || 0}
              r="2"
              fill={isPositive ? "#10b981" : "#ef4444"}
              className="animate-pulse"
            />
          </motion.g>
        )}
      </svg>

      {/* Price Levels */}
      <div className="absolute right-0 top-12 space-y-4 text-xs text-gray-400">
        <div>150</div>
        <div>125</div>
        <div>100</div>
        <div>90</div>
        <div>80</div>
      </div>

      {/* Time Labels */}
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>24h ago</span>
        <span>12h ago</span>
        <span>6h ago</span>
        <span>Now</span>
      </div>
    </div>
  )
}