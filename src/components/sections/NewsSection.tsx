'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Newspaper,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  Eye,
  Star,
  Filter,
  Search,
  Globe,
  BarChart3,
  Zap,
  Calendar,
  ArrowRight,
  Play,
  ExternalLink
} from 'lucide-react'

interface NewsArticle {
  id: number
  title: string
  summary: string
  category: 'market' | 'crypto' | 'forex' | 'economy' | 'breaking'
  source: string
  publishTime: string
  readTime: string
  sentiment: 'bullish' | 'bearish' | 'neutral'
  impact: 'high' | 'medium' | 'low'
  views: number
  isFeatured: boolean
  imageUrl?: string
  tags: string[]
}

interface MarketAlert {
  id: number
  type: 'price' | 'volume' | 'news' | 'technical'
  symbol: string
  message: string
  severity: 'critical' | 'warning' | 'info'
  timestamp: string
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Fed Signals Potential Rate Cut in Q4 2024 - Markets Rally",
    summary: "Federal Reserve Chairman Powell hints at possible rate reduction following inflation data, sending stock markets higher. VN-Index gains 2.3% in early trading...",
    category: 'breaking',
    source: 'Reuters',
    publishTime: '2 minutes ago',
    readTime: '3 min',
    sentiment: 'bullish',
    impact: 'high',
    views: 15420,
    isFeatured: true,
    imageUrl: '/news/fed-meeting.jpg',
    tags: ['Fed', 'Interest Rates', 'VN-Index']
  },
  {
    id: 2,
    title: "Bitcoin Breaks $45,000 Resistance - Altcoin Season Incoming?",
    summary: "BTC surges past key technical level as institutional demand increases. Ethereum and major altcoins showing strong momentum with significant volume...",
    category: 'crypto',
    source: 'CoinDesk',
    publishTime: '15 minutes ago',
    readTime: '4 min',
    sentiment: 'bullish',
    impact: 'high',
    views: 8934,
    isFeatured: true,
    imageUrl: '/news/bitcoin-rally.jpg',
    tags: ['Bitcoin', 'Cryptocurrency', 'Technical Analysis']
  },
  {
    id: 3,
    title: "Vietnam Q3 GDP Growth Exceeds Expectations at 6.8%",
    summary: "Strong manufacturing and export data drive economic growth above forecasts. Banking and technology sectors lead market gains as investor confidence rises...",
    category: 'economy',
    source: 'VnExpress',
    publishTime: '1 hour ago',
    readTime: '5 min',
    sentiment: 'bullish',
    impact: 'medium',
    views: 5621,
    isFeatured: false,
    tags: ['Vietnam Economy', 'GDP', 'Banking']
  },
  {
    id: 4,
    title: "USD/VND Reaches 6-Month Low Amid Dollar Weakness",
    summary: "Vietnamese Dong strengthens against USD as trade surplus widens. Central bank maintains stable monetary policy while foreign investment flows increase...",
    category: 'forex',
    source: 'Bloomberg',
    publishTime: '2 hours ago',
    readTime: '3 min',
    sentiment: 'neutral',
    impact: 'medium',
    views: 3247,
    isFeatured: false,
    tags: ['USD/VND', 'Currency', 'Trade']
  },
  {
    id: 5,
    title: "AI Trading Algorithms Show 89% Success Rate in Q3",
    summary: "Quantumine's latest AI models demonstrate exceptional performance across multiple asset classes. Machine learning advances drive systematic trading evolution...",
    category: 'market',
    source: 'Quantumine Research',
    publishTime: '4 hours ago',
    readTime: '6 min',
    sentiment: 'bullish',
    impact: 'medium',
    views: 2156,
    isFeatured: false,
    tags: ['AI Trading', 'Algorithms', 'Performance']
  }
]

const marketAlerts: MarketAlert[] = [
  {
    id: 1,
    type: 'price',
    symbol: 'VN-INDEX',
    message: 'Breaks above 1,250 resistance level',
    severity: 'info',
    timestamp: '1 min ago'
  },
  {
    id: 2,
    type: 'volume',
    symbol: 'BTC/USD',
    message: 'Unusual volume spike +340% above average',
    severity: 'warning',
    timestamp: '3 min ago'
  },
  {
    id: 3,
    type: 'news',
    symbol: 'USD/VND',
    message: 'Central Bank intervention expected',
    severity: 'critical',
    timestamp: '5 min ago'
  }
]

const categories = [
  { id: 'all', label: 'Tất cả', icon: <Globe className="w-4 h-4" /> },
  { id: 'breaking', label: 'Breaking News', icon: <Zap className="w-4 h-4" /> },
  { id: 'market', label: 'Thị trường', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'crypto', label: 'Crypto', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'forex', label: 'Forex', icon: <Globe className="w-4 h-4" /> },
  { id: 'economy', label: 'Kinh tế', icon: <Newspaper className="w-4 h-4" /> }
]

export const NewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredArticles, setFilteredArticles] = useState(newsArticles)
  const [liveUpdateCount, setLiveUpdateCount] = useState(0)

  useEffect(() => {
    const filtered = newsArticles.filter(article => {
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.summary.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredArticles(filtered)
  }, [activeCategory, searchQuery])

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUpdateCount(prev => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'bullish': return 'text-emerald-400'
      case 'bearish': return 'text-red-400'
      default: return 'text-slate-400'
    }
  }

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'bullish': return <TrendingUp className="w-4 h-4" />
      case 'bearish': return <TrendingDown className="w-4 h-4" />
      default: return <BarChart3 className="w-4 h-4" />
    }
  }

  const getImpactBadge = (impact: string) => {
    const colors = {
      high: 'bg-red-500/20 text-red-300 border-red-500/30',
      medium: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      low: 'bg-slate-500/20 text-slate-300 border-slate-500/30'
    }
    return colors[impact as keyof typeof colors] || colors.low
  }

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-l-red-500 bg-red-500/10'
      case 'warning': return 'border-l-yellow-500 bg-yellow-500/10'
      default: return 'border-l-blue-500 bg-blue-500/10'
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Financial{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              News Hub
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Cập nhật tin tức tài chính real-time với AI sentiment analysis. 
            Breaking news, market insights và economic indicators trong một platform.
          </p>
        </motion.div>

        {/* Live Market Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <h3 className="text-lg font-bold text-white">Live Market Alerts</h3>
                <span className="text-sm text-slate-400">({liveUpdateCount} updates)</span>
              </div>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                View All Alerts
              </button>
            </div>
            
            <div className="space-y-3">
              {marketAlerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-l-4 rounded-lg p-4 ${getAlertSeverityColor(alert.severity)}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-white text-sm">{alert.symbol}</span>
                      <span className="text-slate-300 text-sm">{alert.message}</span>
                    </div>
                    <span className="text-xs text-slate-400">{alert.timestamp}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm tin tức, symbols, keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured News */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {filteredArticles.filter(article => article.isFeatured).length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-white mb-8">Breaking News</h3>
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {filteredArticles.filter(article => article.isFeatured).map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Featured Image */}
                    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                          Breaking
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getImpactBadge(article.impact)}`}>
                          {article.impact.toUpperCase()} IMPACT
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className={`flex items-center space-x-2 ${getSentimentColor(article.sentiment)}`}>
                          {getSentimentIcon(article.sentiment)}
                          <span className="text-sm font-medium capitalize">{article.sentiment}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.publishTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </span>
                        <span>{article.readTime}</span>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h4>

                      <p className="text-slate-300 leading-relaxed mb-4 line-clamp-3">
                        {article.summary}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-slate-400">{article.source}</span>
                        </div>
                        <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Regular News Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Latest Updates</h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-400">{filteredArticles.length} articles found</span>
              <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredArticles.filter(article => !article.isFeatured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-xl p-6 hover:border-slate-600/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`flex items-center space-x-1 text-sm ${getSentimentColor(article.sentiment)}`}>
                        {getSentimentIcon(article.sentiment)}
                        <span className="capitalize">{article.sentiment}</span>
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getImpactBadge(article.impact)}`}>
                        {article.impact.toUpperCase()}
                      </span>
                      <span className="text-slate-400 text-sm">{article.category.toUpperCase()}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {article.summary}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span>{article.source}</span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.publishTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </span>
                      </div>

                      <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>Read</span>
                      </button>
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-32 h-20 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Newspaper className="w-8 h-8 text-slate-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Load More Articles</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}