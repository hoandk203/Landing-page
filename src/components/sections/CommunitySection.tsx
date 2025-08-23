'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  Users, 
  Star, 
  TrendingUp, 
  Award,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Quote,
  ExternalLink,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  Building2,
  Globe,
  Zap,
  BarChart4
} from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  profit: string
  timeframe: string
}

interface CommunityMetric {
  label: string
  value: string
  change: string
  icon: React.ReactNode
  color: string
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  publishDate: string
  readTime: string
  views: number
  tags: string[]
  featured: boolean
}

interface ForumTopic {
  id: number
  title: string
  author: string
  replies: number
  views: number
  lastActivity: string
  isHot: boolean
  category: string
}

interface Partner {
  id: number
  name: string
  logo: string
  category: string
  description: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Nguyễn Minh Hải',
    role: 'Senior Quant Trader',
    avatar: '/avatars/user1.jpg',
    content: 'Quantumine đã thay đổi hoàn toàn cách tôi approach quant trading. Các AI insights cực kỳ chính xác và community rất supportive.',
    rating: 5,
    profit: '+127%',
    timeframe: '6 months'
  },
  {
    id: 2,
    name: 'Trần Thị Mai',
    role: 'Portfolio Manager',
    avatar: '/avatars/user2.jpg',
    content: 'Platform này có risk management tools tốt nhất mà tôi từng sử dụng. Backtesting framework rất comprehensive và dễ customize.',
    rating: 5,
    profit: '+89%',
    timeframe: '4 months'
  },
  {
    id: 3,
    name: 'Lê Hoàng Nam',
    role: 'Crypto Trader',
    avatar: '/avatars/user3.jpg',
    content: 'News sentiment analysis feature giúp tôi catch được nhiều opportunities. Community discussions rất chất lượng và up-to-date.',
    rating: 5,
    profit: '+156%',
    timeframe: '8 months'
  },
  {
    id: 4,
    name: 'Phạm Văn Đức',
    role: 'Algorithmic Developer',
    avatar: '/avatars/user4.jpg',
    content: 'Python library của Quantumine save tôi rất nhiều thời gian development. Documentation chi tiết và examples rất practical.',
    rating: 5,
    profit: '+201%',
    timeframe: '1 year'
  }
]

const communityMetrics: CommunityMetric[] = [
  {
    label: 'Active Members',
    value: '15247',
    change: '+12.5%',
    icon: <Users className="w-5 h-5" />,
    color: 'text-blue-400'
  },
  {
    label: 'Daily Discussions',
    value: '450+',
    change: '+8.3%',
    icon: <MessageCircle className="w-5 h-5" />,
    color: 'text-emerald-400'
  },
  {
    label: 'Strategies Shared',
    value: '1200+',
    change: '+15.7%',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-purple-400'
  },
  {
    label: 'Expert Traders',
    value: '500+',
    change: '+5.2%',
    icon: <Award className="w-5 h-5" />,
    color: 'text-orange-400'
  }
]

const upcomingEvents = [
  {
    date: '24/08',
    title: 'Advanced Options Strategies Workshop',
    speaker: 'Dr. Lê Minh Tuấn',
    attendees: 156
  },
  {
    date: '28/08',
    title: 'AI in Crypto Trading Masterclass',
    speaker: 'Nguyễn Thành Long',
    attendees: 243
  },
  {
    date: '02/09',
    title: 'Risk Management Best Practices',
    speaker: 'Trần Hải Yến',
    attendees: 189
  }
]

const featuredBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'AI-Powered Risk Management trong Volatile Markets',
    excerpt: 'Khám phá cách sử dụng machine learning để optimize risk management strategies trong thị trường crypto và forex...',
    author: 'Dr. Nguyễn Minh Tuấn',
    publishDate: '2024-08-15',
    readTime: '8 min',
    views: 2847,
    tags: ['AI', 'Risk Management', 'Machine Learning'],
    featured: true
  },
  {
    id: 2,
    title: 'Backtesting Strategies với Python: Complete Guide',
    excerpt: 'Hướng dẫn chi tiết từ A-Z về việc build và test trading strategies sử dụng Quantumine Python library...',
    author: 'Lê Hoàng Nam',
    publishDate: '2024-08-14',
    readTime: '12 min',
    views: 1956,
    tags: ['Python', 'Backtesting', 'Tutorial'],
    featured: true
  },
  {
    id: 3,
    title: 'Market Sentiment Analysis với News Data',
    excerpt: 'Tận dụng sentiment analysis từ news và social media để predict market movements và timing entry/exit points...',
    author: 'Trần Thị Mai',
    publishDate: '2024-08-13',
    readTime: '6 min',
    views: 3124,
    tags: ['Sentiment Analysis', 'News Trading', 'AI'],
    featured: false
  }
]

const hotForumTopics: ForumTopic[] = [
  {
    id: 1,
    title: 'Fed Rate Decision Impact on VN-Index: Strategies Discussion',
    author: 'TraderPro2024',
    replies: 47,
    views: 1283,
    lastActivity: '2 hours ago',
    isHot: true,
    category: 'Market Analysis'
  },
  {
    id: 2,
    title: 'Quantumine AI Agent Performance Review - August 2024',
    author: 'QuantAnalyst',
    replies: 32,
    views: 892,
    lastActivity: '4 hours ago',
    isHot: true,
    category: 'Platform Discussion'
  },
  {
    id: 3,
    title: 'Crypto Arbitrage Opportunities: Real-time Alerts Setup',
    author: 'CryptoMaster',
    replies: 28,
    views: 654,
    lastActivity: '6 hours ago',
    isHot: false,
    category: 'Crypto Trading'
  },
  {
    id: 4,
    title: 'Options Wheel Strategy Backtest Results - 2 Year Data',
    author: 'OptionsExpert',
    replies: 53,
    views: 1547,
    lastActivity: '1 day ago',
    isHot: true,
    category: 'Options Strategy'
  }
]

const institutionalPartners: Partner[] = [
  {
    id: 1,
    name: 'VietCapital Securities',
    logo: '/partners/vietcapital.png',
    category: 'Brokerage',
    description: 'Leading securities firm with 500k+ active accounts'
  },
  {
    id: 2,
    name: 'TechComBank',
    logo: '/partners/techcombank.png',
    category: 'Banking',
    description: 'Premier digital banking partner for institutional clients'
  },
  {
    id: 3,
    name: 'VinAI Research',
    logo: '/partners/vinai.png',
    category: 'AI Research',
    description: 'AI research collaboration for advanced algorithms'
  },
  {
    id: 4,
    name: 'FPT Securities',
    logo: '/partners/fpt.png',
    category: 'Brokerage',
    description: 'Technology-focused brokerage with API integration'
  }
]

export const CommunitySection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeUsers, setActiveUsers] = useState(1247)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            Knowledge{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sharing Platform
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Chia sẻ kiến thức, học hỏi từ cộng đồng và đóng góp research cho quant trading ecosystem. 
            Blog articles, Q&A forum và scientific papers - all in one platform.
          </p>
        </motion.div>

        {/* Blog Platform Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Blog Platform
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Đăng tải và chia sẻ bài viết về quant trading, blockchain, DeFi và các chủ đề liên quan. 
                Xây dựng community knowledge base từ insights của các traders chuyên nghiệp.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {/* Modern Blog Post Cards với Thumbnails */}
              {featuredBlogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex">
                    {/* Thumbnail */}
                    <div className="w-48 h-32 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center flex-shrink-0">
                      {index === 0 && (
                        <div className="w-36 h-20 bg-slate-600 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-8 h-8 text-cyan-400" />
                        </div>
                      )}
                      {index === 1 && (
                        <div className="w-36 h-20 bg-slate-600 rounded-lg flex items-center justify-center">
                          <BarChart4 className="w-8 h-8 text-purple-400" />
                        </div>
                      )}
                      {index === 2 && (
                        <div className="w-36 h-20 bg-slate-600 rounded-lg flex items-center justify-center">
                          <Globe className="w-8 h-8 text-emerald-400" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2 text-slate-400 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                        {post.title}
                      </h4>
                      
                      <p className="text-slate-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">
                              {post.author.split(' ')[0][0]}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {post.author.split(' ')[0]} {post.author.split(' ')[1]?.[0]}.
                            </div>
                            <div className="text-xs text-slate-400">
                              {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-slate-400 text-sm">
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </span>
                          <button className="p-1 hover:text-cyan-400 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Đăng Bài Viết Mới
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Forum Platform Section với Sidebar Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Forum Q&A
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Hỏi đáp kiến thức trading như Stack Overflow. Upvote/downvote answers, 
                xây dựng reputation và tìm solutions cho trading challenges.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-slate-700/30 rounded-2xl p-6 space-y-6">
                  {/* Search */}
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Tìm kiếm câu hỏi..."
                        className="w-full bg-slate-600/50 border border-slate-500/30 rounded-lg px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/50"
                      />
                      <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Chủ đề</h4>
                    <div className="space-y-2">
                      {['Market Analysis', 'Platform Discussion', 'Crypto Trading', 'Options Strategy', 'Technical Analysis'].map((category, index) => (
                        <button key={category} className="w-full text-left p-3 rounded-lg bg-slate-600/30 hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent text-slate-300 hover:text-cyan-300 text-sm transition-colors">
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Thống kê</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Câu hỏi</span>
                        <span className="text-cyan-400 font-semibold">2847</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Câu trả lời</span>
                        <span className="text-purple-400 font-semibold">8521</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Users</span>
                        <span className="text-emerald-400 font-semibold">1234</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                    + Đặt câu hỏi
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {hotForumTopics.map((topic, index) => (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex">
                        {/* Vote Section */}
                        <div className="flex flex-col items-center mr-6 flex-shrink-0">
                          <button className="p-1 text-slate-400 hover:text-cyan-400 transition-colors">
                            <TrendingUp className="w-4 h-4" />
                          </button>
                          <span className="text-lg font-bold text-white py-1">
                            {24 + index * 5}
                          </span>
                          <button className="p-1 text-slate-400 hover:text-red-400 transition-colors">
                            <TrendingUp className="w-4 h-4 rotate-180" />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">
                              {topic.category}
                            </span>
                            <span className="text-xs text-slate-500">
                              {topic.lastActivity}
                            </span>
                          </div>
                          
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {topic.title}
                          </h4>
                          
                          <div className="flex items-center justify-between text-sm text-slate-400">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{topic.author}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <MessageCircle className="w-4 h-4" />
                                <span>{topic.replies}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{topic.views.toLocaleString()}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Platform Section - Academic Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-12 relative overflow-hidden">
            {/* Coming Soon Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Coming Soon
              </span>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Scientific Articles
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Academic research platform cho quantitative finance, AI trading và blockchain technology. 
                Upload papers, peer review và citation tracking như ScienceDirect.
              </p>
            </div>

            {/* Preview Sample Papers */}
            <div className="mb-12">
              <h4 className="text-lg font-bold text-white mb-6">Preview: Sample Research Papers</h4>
              <div className="space-y-4">
                {[
                  {
                    title: "Deep Reinforcement Learning for Portfolio Optimization with Transaction Costs",
                    authors: "Nguyen, T.H., Le, M.D., Tran, V.A.",
                    journal: "Journal of Financial Technology",
                    year: "2024",
                    citations: 23,
                    doi: "10.1016/j.jfintech.2024.01.003"
                  },
                  {
                    title: "Blockchain-Based Smart Contracts for Automated Market Making in DeFi",
                    authors: "Pham, K.L., Vu, N.T., Hoang, S.M.",
                    journal: "Crypto Economics Review",
                    year: "2024",
                    citations: 15,
                    doi: "10.1234/cer.2024.05.012"
                  }
                ].map((paper, index) => (
                  <div key={index} className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 opacity-60">
                    <div className="flex">
                      {/* PDF Thumbnail */}
                      <div className="w-16 h-20 bg-slate-600 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                        <BookOpen className="w-8 h-8 text-slate-400" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {paper.title}
                        </h5>
                        <p className="text-slate-400 text-sm mb-2">
                          {paper.authors}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span>{paper.journal}</span>
                          <span>•</span>
                          <span>{paper.year}</span>
                          <span>•</span>
                          <span>{paper.citations} citations</span>
                          <span>•</span>
                          <span>DOI: {paper.doi}</span>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-3">
                          <span className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded border border-purple-500/20">
                            AI Trading
                          </span>
                          <span className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">
                            {index === 0 ? 'Portfolio Optimization' : 'DeFi'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Module 1 Features */}
              <div className="bg-slate-700/30 rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Module 1: Upload System</h4>
                    <p className="text-purple-400 text-sm">In Development</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    'PDF upload với academic formatting',
                    'Abstract và keyword extraction',
                    'Author và co-author management',
                    'Admin peer review workflow',
                    'Citation và reference tracking',
                    'Download statistics & analytics',
                    '10% preview cho non-subscribers'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roadmap */}
              <div className="bg-slate-700/20 rounded-2xl p-8 border border-slate-600/20">
                <h4 className="text-xl font-bold text-slate-300 mb-6">Development Roadmap</h4>
                <div className="space-y-4">
                  {[
                    { phase: 'Q3 2024', feature: 'Basic upload & review system', status: 'in-progress' },
                    { phase: 'Q4 2024', feature: 'Citation network & search', status: 'planned' },
                    { phase: 'Q1 2025', feature: 'Peer review automation', status: 'planned' },
                    { phase: 'Q2 2025', feature: 'Impact factor calculation', status: 'planned' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-300">{item.feature}</div>
                        <div className="text-xs text-slate-500">{item.phase}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.status === 'in-progress' 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'bg-slate-600/20 text-slate-400'
                      }`}>
                        {item.status === 'in-progress' ? 'Developing' : 'Planned'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button disabled className="bg-slate-600/50 text-slate-400 font-semibold py-4 px-8 rounded-xl cursor-not-allowed border border-slate-600/30">
                  <span className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Submit Paper (Soon)
                  </span>
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  <span className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Early Access
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// New Block 4: Python Trading Library
export const PythonLibrarySection: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0)

  const codeExamples = [
    {
      title: "Quick Start",
      language: "python",
      code: `# Install Quantumine
pip install quantumine

# Import library
import quantumine as qm
from quantumine import Strategy, Backtest

# Create your first strategy
class MyStrategy(Strategy):
    def init(self):
        self.sma_short = self.I(qm.SMA, self.data.Close, 20)
        self.sma_long = self.I(qm.SMA, self.data.Close, 50)
    
    def next(self):
        if self.sma_short > self.sma_long:
            self.buy()
        elif self.sma_short < self.sma_long:
            self.sell()`
    },
    {
      title: "Advanced Backtesting",
      language: "python", 
      code: `# Load market data
data = qm.get_data("AAPL", start="2020-01-01", end="2024-01-01")

# Run backtest with advanced settings
bt = Backtest(data, MyStrategy)
result = bt.run(
    cash=100000,
    commission=0.002,
    trade_on_close=True,
    exclusive_orders=True
)

print(f"Return: {result['Return [%]']:.2f}%")
print(f"Sharpe Ratio: {result['Sharpe Ratio']:.2f}")
print(f"Max Drawdown: {result['Max. Drawdown [%]']:.2f}%")`
    },
    {
      title: "Live Trading",
      language: "python",
      code: `# Connect to live broker
from quantumine.brokers import InteractiveBrokers

broker = InteractiveBrokers(
    host="127.0.0.1",
    port=7497,
    client_id=1
)

# Deploy strategy to live trading
live_trader = qm.LiveTrader(
    strategy=MyStrategy,
    broker=broker,
    data_feed="yahoo"
)

# Start live trading
live_trader.start()
print("🚀 Live trading started!")`
    }
  ]

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
            Python{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Trading Library
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Open-source Python framework cho quantitative trading. Powerful backtesting, 
            live trading integration và comprehensive market data tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Quick Start Guide */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Quick Start</h3>
                  <p className="text-emerald-400 text-sm">Get started in 5 minutes</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Installation */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Installation</h4>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                    <code className="text-emerald-400 text-sm">pip install quantumine</code>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Core Features</h4>
                  <div className="space-y-3">
                    {[
                      'Backtesting Engine',
                      'Live Trading Integration', 
                      'Technical Indicators',
                      'Risk Management',
                      'Portfolio Optimization',
                      'Market Data APIs'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub Stats */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">GitHub Stats</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-xl font-bold text-cyan-400">5.2K</div>
                      <div className="text-xs text-slate-400">Stars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-400">50K+</div>
                      <div className="text-xs text-slate-400">Downloads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-emerald-400">100+</div>
                      <div className="text-xs text-slate-400">Contributors</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on GitHub
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Code Examples */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Code Examples</h3>
                <div className="flex space-x-2">
                  {codeExamples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExample(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeExample === index
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                      }`}
                    >
                      {example.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-600/30 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <span className="text-slate-400 text-sm">{codeExamples[activeExample].title}.py</span>
                </div>
                
                <div className="overflow-x-auto">
                  <pre className="text-sm leading-relaxed">
                    <code className="text-slate-300">
                      {codeExamples[activeExample].code}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>Live Preview Available</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>Full Documentation</span>
                  </span>
                </div>
                
                <button className="bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-slate-600/30">
                  Copy Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Documentation Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-3xl border border-emerald-500/20 backdrop-blur-xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Comprehensive documentation, tutorials và community support để bạn master quantitative trading với Python.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Documentation
                </span>
              </button>
              
              <button className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                <span className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  GitHub Repository
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}