'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  MessageCircle, 
  TrendingUp, 
  Brain, 
  Code, 
  Users,
  ExternalLink,
  Github,
  Clock,
  Star,
  BarChart3,
  Zap,
  ChevronRight,
  PlayCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

import type { Product } from '@/types'

// Demo Components
const TradingSystemDemo: React.FC = () => (
  <div className="h-20 bg-slate-900/50 rounded-lg p-3 relative overflow-hidden backdrop-blur-sm border border-slate-700">
    <div className="flex items-end justify-between h-full">
      {[12, 8, 15, 9, 18, 11, 20, 14].map((height, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm"
          style={{ width: '6px' }}
          initial={{ height: 0 }}
          animate={{ height: `${height}px` }}
          transition={{ 
            delay: index * 0.1, 
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3
          }}
        />
      ))}
    </div>
    <div className="absolute top-2 right-2 text-xs text-emerald-400 font-bold">+12.3%</div>
    <div className="absolute bottom-2 left-2 text-xs text-slate-400">Live Trading</div>
  </div>
)

const CommunityDemo: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState(1247)
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-20 bg-slate-900/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-slate-300 font-medium">{activeUsers} Online</span>
        </div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <div className="text-xs text-slate-400">
        💬 45 discussions today
      </div>
      <div className="text-xs text-slate-400">
        🎯 4.8/5 community rating
      </div>
    </div>
  )
}

const NewsDataDemo: React.FC = () => {
  const [currentTicker, setCurrentTicker] = useState(0)
  const tickers = [
    { symbol: 'VNINDEX', price: '1,234.56', change: '+1.2%', color: 'text-emerald-400' },
    { symbol: 'USD/VND', price: '24,350', change: '-0.1%', color: 'text-red-400' },
    { symbol: 'BTC/USD', price: '43,250', change: '+2.8%', color: 'text-emerald-400' }
  ]
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTicker(prev => (prev + 1) % tickers.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [tickers.length])

  const ticker = tickers[currentTicker]

  return (
    <div className="h-20 bg-slate-900/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-slate-400 flex items-center">
          <Zap className="w-3 h-3 mr-1" />
          Real-time
        </span>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      </div>
      <motion.div 
        key={currentTicker}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-1"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">{ticker.symbol}</span>
          <span className={`text-sm font-bold ${ticker.color}`}>{ticker.change}</span>
        </div>
        <div className="text-xs text-slate-400">{ticker.price}</div>
      </motion.div>
    </div>
  )
}

const AIAgentsDemo: React.FC = () => (
  <div className="h-20 bg-slate-900/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
    <div className="relative z-10">
      <div className="flex items-center space-x-2 mb-2">
        <motion.div 
          className="w-3 h-3 bg-purple-500 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-slate-300 font-medium">AI Processing</span>
      </div>
      <div className="text-xs text-slate-400">📊 Analyzing sentiment...</div>
      <div className="text-xs text-slate-400">⚡ 95% accuracy rate</div>
      <div className="text-xs text-purple-400 font-medium mt-1">✓ Insights ready</div>
    </div>
  </div>
)

const PythonLibraryDemo: React.FC = () => (
  <div className="h-20 bg-slate-900 rounded-lg p-3 text-emerald-400 font-mono text-xs relative overflow-hidden border border-slate-700">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-slate-500"># Quantumine Python Library</div>
      <div className="text-emerald-300">import quantumine as qm</div>
      <div className="text-blue-300">strategy = qm.Strategy()</div>
      <div className="text-yellow-300">backtest.run()</div>
      <div className="text-emerald-400 mt-1">&gt;&gt;&gt; ROI: +15.2% ✓</div>
    </motion.div>
  </div>
)

const CopyTradingDemo: React.FC = () => (
  <div className="h-20 bg-slate-900/30 rounded-lg p-3 backdrop-blur-sm border border-slate-600 flex items-center justify-center opacity-60">
    <div className="text-center">
      <Clock className="w-6 h-6 text-slate-400 mx-auto mb-1" />
      <div className="text-xs text-slate-400 font-medium">Coming Q2 2024</div>
    </div>
  </div>
)

const products: Product[] = [
  {
    id: 'trading-system',
    title: 'Hệ Thống Trading Định Lượng',
    description: 'Multi-market algorithmic trading với AI-powered insights và real-time execution capabilities',
    icon: <Bot className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Multi-exchange integration',
      'Real-time execution engine', 
      'Advanced risk management',
      'AI-powered signal generation',
      'Backtesting framework'
    ],
    metrics: [
      { label: 'Sharpe Ratio', value: '2.1', trend: 'up' },
      { label: 'Win Rate', value: '87%', trend: 'up' },
      { label: 'Max Drawdown', value: '8.5%', trend: 'neutral' }
    ],
    status: 'available',
    ctaText: 'Request Demo',
    ctaVariant: 'primary',
    demoComponent: <TradingSystemDemo />
  },
  {
    id: 'community',
    title: 'Cộng Đồng Trading',
    description: 'Platform kết nối traders, chia sẻ strategies và học hỏi từ chuyên gia hàng đầu',
    icon: <MessageCircle className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-green-500',
    features: [
      'Expert trader network',
      'Strategy discussions',
      'Live market analysis',
      'Educational resources',
      'Performance leaderboards'
    ],
    metrics: [
      { label: 'Active Members', value: '15K+', trend: 'up' },
      { label: 'Daily Posts', value: '450+', trend: 'up' },
      { label: 'Expert Rating', value: '4.8/5', trend: 'up' }
    ],
    status: 'available',
    ctaText: 'Join Community',
    ctaVariant: 'secondary',
    demoComponent: <CommunityDemo />
  },
  {
    id: 'news-data',
    title: 'News & Data Service',
    description: 'Real-time market data feeds, financial news analysis và custom alert system',
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: 'from-orange-500 to-red-500',
    features: [
      'Real-time market feeds',
      'AI news sentiment analysis',
      'Custom alert system',
      'Historical data access',
      'API integration'
    ],
    metrics: [
      { label: 'Latency', value: '<50ms', trend: 'up' },
      { label: 'Data Sources', value: '100+', trend: 'neutral' },
      { label: 'Uptime', value: '99.9%', trend: 'up' }
    ],
    status: 'available',
    ctaText: 'Try Free',
    ctaVariant: 'outline',
    demoComponent: <NewsDataDemo />
  },
  {
    id: 'ai-agents',
    title: 'AI Trading Agents',
    description: 'Intelligent agents phân tích thị trường 24/7 và đưa ra recommendations tự động',
    icon: <Brain className="w-8 h-8" />,
    gradient: 'from-purple-500 to-indigo-500',
    features: [
      'Market sentiment analysis',
      'Automated trade signals',
      'Risk assessment AI',
      'Portfolio optimization',
      'Continuous learning'
    ],
    metrics: [
      { label: 'Accuracy', value: '95%', trend: 'up' },
      { label: 'Response Time', value: '<1s', trend: 'up' },
      { label: 'Signals/Day', value: '500+', trend: 'up' }
    ],
    status: 'beta',
    ctaText: 'Join Beta',
    ctaVariant: 'secondary',
    demoComponent: <AIAgentsDemo />
  },
  {
    id: 'python-library',
    title: 'Python Trading Library',
    description: 'Open-source backtesting framework với comprehensive market data và strategy tools',
    icon: <Code className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Open-source framework',
      'Multi-asset backtesting',
      'Strategy optimization',
      'Risk analytics',
      'Extensive documentation'
    ],
    metrics: [
      { label: 'GitHub Stars', value: '5K+', trend: 'up' },
      { label: 'Downloads', value: '50K+', trend: 'up' },
      { label: 'Contributors', value: '100+', trend: 'up' }
    ],
    status: 'available',
    ctaText: 'View on GitHub',
    ctaVariant: 'outline',
    demoComponent: <PythonLibraryDemo />
  },
  {
    id: 'copy-trading',
    title: 'Copy Trading Platform',
    description: 'Social trading platform cho phép copy strategies từ top traders và experts',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-pink-500 to-rose-500',
    features: [
      'Follow top traders',
      'Automated copying',
      'Risk management tools',
      'Performance analytics',
      'Social features'
    ],
    metrics: [
      { label: 'Top Traders', value: '200+', trend: 'neutral' },
      { label: 'Avg ROI', value: '12%', trend: 'neutral' },
      { label: 'Success Rate', value: '78%', trend: 'neutral' }
    ],
    status: 'coming-soon',
    ctaText: 'Notify Me',
    ctaVariant: 'ghost',
    demoComponent: <CopyTradingDemo />
  }
]

interface ProductCardProps {
  product: Product
  index: number
  onAction: (productId: string, action: string) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onAction }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getStatusBadge = () => {
    switch (product.status) {
      case 'beta':
        return (
          <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-300 text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30">
            Beta
          </span>
        )
      case 'coming-soon':
        return (
          <span className="absolute top-4 right-4 bg-slate-500/20 text-slate-400 text-xs font-medium px-2 py-1 rounded-full border border-slate-500/30">
            Coming Soon
          </span>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div 
        className="relative border-2 border-emerald-500/50 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-emerald-600/5 backdrop-blur-xl p-6 transition-all duration-500 overflow-hidden text-white hover:border-emerald-400/70 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 group-hover:scale-[1.01]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glassmorphism Background Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500" />
        
        {/* Status Badge */}
        {getStatusBadge()}

        {/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                {product.title}
              </h3>
            </div>
            {product.status === 'new' && (
              <div className="px-3 py-1 bg-emerald-500/20 rounded-full text-xs font-semibold text-emerald-300">
                NEW
              </div>
            )}
          </div>
          
          <p className="text-sm opacity-90 leading-relaxed text-slate-200">
            {product.description}
          </p>
        </div>

        {/* Demo Component */}
        <div className="relative z-10 mb-6">
          {product.demoComponent}
        </div>

        {/* Features or Metrics */}
        <div className="relative z-10 mb-6">
          {isHovered && product.status !== 'coming-soon' ? (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-2"
            >
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-3">Key Features</div>
              {product.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-slate-400">
                  <ChevronRight className="w-3 h-3 mr-2 text-blue-400" />
                  {feature}
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {product.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className={`font-bold text-sm ${
                    metric.trend === 'up' ? 'text-emerald-400' :
                    metric.trend === 'down' ? 'text-red-400' : 'text-blue-400'
                  }`}>
                    {metric.value}
                    {metric.trend === 'up' && <span className="ml-1">↗</span>}
                    {metric.trend === 'down' && <span className="ml-1">↘</span>}
                  </div>
                  <div className="text-xs text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Button với Shine Effect */}
        <div className="relative z-10">
          <button 
            onClick={() => onAction(product.id, product.ctaText)}
            disabled={product.status === 'coming-soon'}
            className={`w-full h-12 rounded-lg font-semibold text-sm transition-all duration-300 flex overflow-hidden items-center justify-center space-x-2 group relative ${
              product.ctaVariant === 'primary' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-slate-800' 
                : product.ctaVariant === 'secondary'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover:shadow-lg hover:shadow-emerald-500/25 hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2 hover:ring-offset-slate-800'
                : product.ctaVariant === 'outline'
                ? 'border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-700/30 hover:ring-2 hover:ring-slate-500 hover:ring-offset-2 hover:ring-offset-slate-800'
                : 'bg-slate-700/50 text-slate-400 cursor-not-allowed'
            } ${product.status !== 'coming-soon' ? 'hover:scale-105' : ''}`}
          >
            {/* Shine Effect */}
            {product.status !== 'coming-soon' && (
              <span 
                className={`absolute right-0 -mt-12 h-32 w-6 translate-x-12 rotate-12 opacity-20 transition-all duration-1000 ease-out group-hover:-translate-x-40 ${
                  product.ctaVariant === 'primary' ? 'bg-white' :
                  product.ctaVariant === 'secondary' ? 'bg-white' :
                  'bg-slate-300'
                }`}
              />
            )}
            
            <span className="relative z-10 flex items-center space-x-2">
              {product.id === 'python-library' && <Github className="w-4 h-4" />}
              {product.id === 'news-data' && <ExternalLink className="w-4 h-4" />}
              {product.id === 'trading-system' && <PlayCircle className="w-4 h-4" />}
              <span>{product.ctaText}</span>
              
              {/* GitHub Style Stars cho Python Library */}
              {product.id === 'python-library' && (
                <div className="ml-2 flex items-center gap-1 text-xs">
                  <svg
                    className="w-3 h-3 text-slate-300 transition-all duration-300 group-hover:text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="font-mono font-medium">5.2k</span>
                </div>
              )}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

interface ProductGridProps {
  onProductAction?: (productId: string, action: string) => void
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onProductAction = () => {}
}) => {
  return (
    <section className="relative py-24 overflow-hidden">
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Sản Phẩm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Quantumine
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Bộ công cụ trading định lượng chuyên nghiệp được phát triển cho trader Việt Nam. 
            AI-powered insights, backtesting engine và community platform.
          </p>
        </motion.div>

        {/* Products Grid - Desktop 3x2, Mobile 1x6 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAction={onProductAction}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-slate-900 h-14 px-8 border border-slate-600 text-gray-50 text-lg font-bold rounded-xl overflow-hidden hover:border-blue-400 duration-500 before:duration-500 hover:duration-500 hover:before:[box-shadow:_20px_20px_20px_30px_#3b82f6] before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-blue-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-purple-400 after:right-8 after:top-3 after:rounded-full after:blur-lg hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:text-blue-300 transition-all">
              <span className="relative z-20">Khám Phá Tất Cả Sản Phẩm</span>
            </button>
            
            <button className="group relative bg-slate-800/50 h-14 px-8 border border-slate-500 text-slate-300 text-lg font-semibold rounded-xl overflow-hidden hover:border-emerald-400 duration-500 hover:text-emerald-300 transition-all backdrop-blur-sm hover:ring-2 hover:ring-emerald-500 hover:ring-offset-2 hover:ring-offset-slate-900">
              {/* Shine Effect */}
              <span className="absolute right-0 -mt-12 h-32 w-6 translate-x-12 rotate-12 bg-emerald-400 opacity-15 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
              
              <span className="relative z-20 flex items-center">
                <PlayCircle className="w-5 h-5 mr-2" />
                Xem Demo Overview
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductGrid