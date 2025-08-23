'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, TrendingUp, Brain, Code, Users, MessageCircle } from 'lucide-react'

/**
 * Card component samples according to front-end specification
 * Demonstrates product cards, feature cards, and glassmorphism effects
 */
export const CardSamples: React.FC = () => {
  const sampleProducts = [
    {
      id: 'sample-1',
      title: 'Sample Product Card',
      description: 'This is a sample product card demonstrating the design system',
      icon: <Bot className="w-8 h-8" />,
      metrics: [
        { label: 'Metric 1', value: '95%', trend: 'up' as const },
        { label: 'Metric 2', value: '2.1', trend: 'up' as const },
        { label: 'Metric 3', value: '24/7', trend: 'up' as const }
      ],
      status: 'available' as const,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'sample-2', 
      title: 'Beta Product Sample',
      description: 'Sample card showing beta status and different styling',
      icon: <Brain className="w-8 h-8" />,
      metrics: [
        { label: 'Accuracy', value: '98%', trend: 'up' as const },
        { label: 'Speed', value: '<1s', trend: 'up' as const },
        { label: 'Users', value: '1K+', trend: 'up' as const }
      ],
      status: 'beta' as const,
      gradient: 'from-purple-500 to-indigo-500'
    }
  ]

  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8">Card Component Samples</h2>
      
      {/* Product Cards */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-emerald-400">Product Cards</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {sampleProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative"
            >
              <div className="relative border-2 border-emerald-500/50 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-emerald-600/5 backdrop-blur-xl p-6 transition-all duration-500 overflow-hidden text-white hover:border-emerald-400/70 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                {/* Status Badge */}
                {product.status === 'beta' && (
                  <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-300 text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30">
                    Beta
                  </span>
                )}

                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed text-slate-200">
                    {product.description}
                  </p>
                </div>

                {/* Demo Area */}
                <div className="relative z-10 mb-6 h-20 bg-slate-900/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700">
                  <div className="text-xs text-slate-400 mb-2">Sample Demo Component</div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-emerald-400">Active</div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="relative z-10 mb-6">
                  <div className="grid grid-cols-3 gap-4">
                    {product.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`font-bold text-sm ${
                          metric.trend === 'up' ? 'text-emerald-400' :
                          metric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                        }`}>
                          {metric.value}
                          {metric.trend === 'up' && <span className="ml-1">↗</span>}
                        </div>
                        <div className="text-xs text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <button className="w-full h-12 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/25">
                    Sample Action
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-emerald-400">Feature Cards</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <TrendingUp className="w-6 h-6" />, title: "Performance", desc: "High-speed execution" },
            { icon: <Code className="w-6 h-6" />, title: "Integration", desc: "Easy API access" },
            { icon: <Users className="w-6 h-6" />, title: "Community", desc: "Active support" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors duration-300">
              <div className="text-emerald-400 mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Cards */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-emerald-400">Glassmorphism Cards</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
            <MessageCircle className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Transparent Card</h4>
            <p className="text-slate-300 text-sm">This demonstrates the glassmorphism effect used throughout the design system.</p>
          </div>
          
          <div className="relative bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <Bot className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Colored Glass Card</h4>
              <p className="text-slate-200 text-sm">Glassmorphism with colored tints and gradients for enhanced visual hierarchy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSamples