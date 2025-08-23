'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Brain, 
  BarChart3, 
  Globe, 
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Code,
  Database,
  Lock,
  MessageCircle
} from 'lucide-react'

interface FeatureTab {
  id: string
  title: string
  icon: React.ReactNode
  content: {
    title: string
    description: string
    features: string[]
    chart?: React.ReactNode
    codeExample?: string
  }
}

// Performance Chart Component
const PerformanceChart: React.FC = () => (
  <div className="h-64 bg-slate-800 rounded-lg p-6 border border-slate-700">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-lg font-semibold text-white">Backtesting Results</h4>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-emerald-400 text-sm">Live Data</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <div className="text-2xl font-bold text-emerald-400">15.2%</div>
        <div className="text-sm text-slate-400">Monthly ROI</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-400">2.1</div>
        <div className="text-sm text-slate-400">Sharpe Ratio</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-purple-400">87%</div>
        <div className="text-sm text-slate-400">Win Rate</div>
      </div>
    </div>
    <div className="mt-6 h-24 bg-slate-900 rounded flex items-end justify-between p-2">
      {[12, 8, 15, 9, 18, 11, 20, 14, 16, 22, 19, 25].map((height, i) => (
        <motion.div
          key={i}
          className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm w-4"
          initial={{ height: 0 }}
          animate={{ height: `${height}px` }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
        />
      ))}
    </div>
  </div>
)

const featureTabs: FeatureTab[] = [
  {
    id: 'performance',
    title: 'Performance & Analytics',
    icon: <BarChart3 className="w-5 h-5" />,
    content: {
      title: 'Advanced Analytics & Performance Metrics',
      description: 'Comprehensive performance tracking với real-time analytics và detailed backtesting results cho optimal trading strategies.',
      features: [
        'Real-time P&L tracking và portfolio analytics',
        'Advanced backtesting với historical data',
        'Risk-adjusted returns và Sharpe ratio analysis',
        'Performance attribution và trade analysis',
        'Custom KPI dashboards và reporting tools'
      ],
      chart: <PerformanceChart />
    }
  },
  {
    id: 'integration',
    title: 'Integration & APIs',
    icon: <Code className="w-5 h-5" />,
    content: {
      title: 'Powerful API Integration Capabilities',
      description: 'Flexible APIs và webhook system cho seamless integration với existing systems và third-party platforms.',
      features: [
        'RESTful APIs với comprehensive documentation',
        'WebSocket streams cho real-time data',
        'Webhook notifications cho trade events',
        'Multi-broker integration support',
        'Custom indicator và strategy deployment'
      ],
      codeExample: `
// Quantumine API Integration Example
import quantumine from '@quantumine/api';

const client = new quantumine.Client({
  apiKey: 'your-api-key'
});

// Real-time market data
client.stream.market('VNINDEX')
  .onPrice(price => {
    console.log('New price:', price);
  });

// Execute strategy
const strategy = await client.strategies.deploy({
  name: 'MA_Cross',
  symbols: ['VN30F1M', 'VNINDEX'],
  parameters: { fast: 10, slow: 20 }
});
      `
    }
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    icon: <Shield className="w-5 h-5" />,
    content: {
      title: 'Enterprise-Grade Security & Compliance',
      description: 'Multi-layer security architecture với regulatory compliance và advanced risk management controls.',
      features: [
        'AES-256 encryption cho tất cả data transmission',
        'Multi-factor authentication và role-based access',
        'Regulatory compliance (GDPR, SOC2)',
        'Real-time fraud detection và monitoring', 
        'Automated backup và disaster recovery'
      ]
    }
  },
  {
    id: 'community',
    title: 'Community & Support',
    icon: <Users className="w-5 h-5" />,
    content: {
      title: 'Thriving Community & Expert Support',
      description: 'Join 15,000+ traders trong active community với expert support và educational resources.',
      features: [
        'Active trading community với 15K+ members',
        '24/7 technical support và consultation',
        'Weekly webinars với trading experts',
        'Comprehensive documentation và tutorials',
        'Strategy marketplace và social trading'
      ]
    }
  }
]

export const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance')
  const currentTab = featureTabs.find(tab => tab.id === activeTab)

  return (
    <section className="relative py-24">
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Tính Năng{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Vượt Trội
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Khám phá các tính năng advanced được thiết kế cho traders chuyên nghiệp và institutions
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-2 border border-slate-700">
            {featureTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        {currentTab && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-slate-700"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Content Area */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {currentTab.content.title}
                </h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {currentTab.content.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-4">
                  {currentTab.content.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual/Chart Component */}
              <div>
                {currentTab.content.chart && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {currentTab.content.chart}
                  </motion.div>
                )}
                
                {currentTab.content.codeExample && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-slate-900 rounded-lg p-6 border border-slate-700"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">API Integration</h4>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                    </div>
                    <pre className="text-sm text-emerald-400 font-mono overflow-x-auto">
                      {currentTab.content.codeExample}
                    </pre>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}