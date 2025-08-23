'use client'

import React from 'react'

// Chart Loading Skeleton
export const ChartSkeleton: React.FC = () => (
  <div className="h-80 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50 animate-pulse">
    <div className="flex space-x-4 mb-6">
      <div className="h-4 bg-gray-700 rounded w-1/4 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-1/6 animate-pulse"></div>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg chart-skeleton"></div>
  </div>
)

// Stats Panel Loading Skeleton
export const StatsPanelSkeleton: React.FC = () => (
  <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50 h-80">
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 bg-gray-700 rounded-lg mr-3 animate-pulse"></div>
      <div className="h-5 bg-gray-700 rounded w-24 animate-pulse"></div>
    </div>
    
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-600/50">
          <div className="flex items-center justify-between mb-2">
            <div className="h-3 bg-gray-700 rounded w-20 animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="h-6 bg-gray-700 rounded w-16 mb-1 animate-pulse"></div>
          <div className="h-3 bg-gray-700 rounded w-24 animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
)

// Performance Cards Loading Skeleton
export const PerformanceCardsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className="bg-gray-800 border border-gray-600/50 rounded-xl p-6 animate-pulse">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
            <div className="h-8 bg-gray-700 rounded w-16 mb-1"></div>
            <div className="h-3 bg-gray-700 rounded w-20"></div>
          </div>
          <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    ))}
  </div>
)

// Profit Matrix Loading Skeleton
export const ProfitMatrixSkeleton: React.FC = () => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 animate-pulse">
    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-700 rounded-xl"></div>
        <div>
          <div className="h-6 bg-gray-700 rounded w-32 mb-1"></div>
          <div className="h-4 bg-gray-700 rounded w-48"></div>
        </div>
      </div>
      <div className="flex bg-gray-700 p-1.5 rounded-xl w-48">
        <div className="flex-1 h-10 bg-gray-600 rounded-lg mr-1"></div>
        <div className="flex-1 h-10 bg-gray-600 rounded-lg"></div>
      </div>
    </div>

    {/* Summary Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-gray-700 rounded-xl p-4 text-center">
          <div className="h-6 bg-gray-600 rounded w-12 mx-auto mb-1"></div>
          <div className="h-3 bg-gray-600 rounded w-16 mx-auto"></div>
        </div>
      ))}
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Table Header */}
        <div className="flex border-b border-gray-700/50 mb-4">
          <div className="w-20 h-10 bg-gray-700 rounded mr-4"></div>
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-16 h-10 bg-gray-700 rounded mr-2"></div>
          ))}
          <div className="w-20 h-10 bg-gray-700 rounded"></div>
        </div>
        
        {/* Table Rows */}
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex mb-3">
            <div className="w-20 h-8 bg-gray-700 rounded mr-4"></div>
            {Array.from({ length: 12 }).map((_, colIndex) => (
              <div key={colIndex} className="w-16 h-8 bg-gray-700 rounded mr-2"></div>
            ))}
            <div className="w-20 h-8 bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Toggle Buttons Loading Skeleton
export const ToggleButtonsSkeleton: React.FC = () => (
  <div className="flex bg-gray-700 p-1.5 rounded-xl mb-8">
    <div className="flex-1 h-12 bg-gray-600 rounded-lg mr-1 animate-pulse"></div>
    <div className="flex-1 h-12 bg-gray-600 rounded-lg animate-pulse"></div>
  </div>
)