'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot,
  Send,
  User,
  Sparkles,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Brain,
  Activity,
  Zap
} from 'lucide-react'

interface ChatMessage {
  id: number
  type: 'user' | 'ai'
  content: string
  timestamp: string
  analysis?: {
    sentiment: 'positive' | 'negative' | 'neutral'
    confidence: number
    relatedSymbols: string[]
    impactLevel: 'high' | 'medium' | 'low'
  }
}

const sampleMessages: ChatMessage[] = [
  {
    id: 1,
    type: 'ai',
    content: 'Chào bạn! Tôi là AI Agent của Quantumine. Tôi có thể giúp bạn:\n\n📊 Phân tích tác động của các sự kiện chính trị/kinh tế\n📈 Tạo báo cáo hàng ngày được cá nhân hóa\n🎯 Đưa ra khuyến nghị đầu tư dựa trên portfolio\n\nBạn muốn hỏi gì?',
    timestamp: '09:00 AM',
  }
]

const quickSuggestions = [
  'Trump đánh thuế có ảnh hưởng gì tới cổ phiếu Việt Nam?',
  'Tác động của cuộc gặp Trump và Putin ngày 15/08 tới giá vàng?',
  'Tạo báo cáo market briefing hàng ngày cho tôi',
  'Fed cắt giảm lãi suất ảnh hưởng như thế nào?',
  'Phân tích geopolitical risk cho thị trường VN',
  'Giá dầu tăng có lợi cho cổ phiếu nào?'
]

export const AIAgentSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages)
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputMessage
    if (!messageToSend.trim()) return

    // Keep suggestions always visible - no longer hide them

    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      type: 'user',
      content: messageToSend,
      timestamp: new Date().toLocaleTimeString('vi-VN', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(messageToSend),
        timestamp: new Date().toLocaleTimeString('vi-VN', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        analysis: {
          sentiment: Math.random() > 0.5 ? 'positive' : 'neutral',
          confidence: Math.floor(Math.random() * 30) + 70,
          relatedSymbols: ['VCB', 'VIC', 'HPG', 'TCB'].slice(0, Math.floor(Math.random() * 3) + 1),
          impactLevel: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)] as 'high' | 'medium' | 'low'
        }
      }
      
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const generateAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    // Daily report related responses
    if (lowerQuestion.includes('báo cáo') || lowerQuestion.includes('report') || lowerQuestion.includes('hàng ngày') || lowerQuestion.includes('briefing')) {
      return `📊 **Daily Market Report - ${new Date().toLocaleDateString('vi-VN')}**

🔍 **Thị trường hôm nay:**
• VN-Index: +0.8% (1247 điểm)
• Khối ngoại: mua ròng 247 tỷ VNĐ  
• Top performers: VCB (+2.1%), TCB (+1.8%), HPG (+1.5%)
• Liquidity: 18500 tỷ VNĐ (+12% vs avg)

📈 **Cá nhân hóa cho portfolio của bạn:**
• Banking sector trong danh mục đang outperform market
• VIC có signals recovery từ real estate data
• Khuyến nghị: tăng tỷ trọng VCB, giữ VHM ở mức hiện tại

⚠️ **Risk alerts hôm nay:**
• Fed meeting 20/09 - watch for dovish signals
• Geopolitical tensions affecting oil prices (+2.1%)
• VN-Index approaching resistance tại 1270 điểm

🎯 **Trading setup:**
• Entry: VCB around 92000-93000
• Stop loss: 89500 (-3.8%)
• Target: 98000 (+6.5%)

Bạn muốn tôi deep-dive vào sector nào hoặc phân tích risk/reward cho stock cụ thể không?`
    }

    // Trump/politics related
    if (lowerQuestion.includes('trump') || lowerQuestion.includes('thuế') || lowerQuestion.includes('chính trị')) {
      return `🏛️ **Phân tích tác động chính sách Trump vs VN Market:**

📊 **Immediate impacts (1-3 tháng):**
• **Negative pressure:**
  - Export stocks: Dệt may (TNG, MSH), Điện tử sẽ chịu áp lực
  - Tariff escalation có thể impact FDI flows
  - VND depreciation risk vs USD strengthening

• **Positive opportunities:**
  - Supply chain diversification từ China → Vietnam
  - Manufacturing relocation benefits cho industrial parks
  - PAN Group, Việt Nam Holding positioned to benefit

🎯 **Sector-specific recommendations:**
• **AVOID:** Export-heavy stocks (60%+ revenue from US)
• **BUY:** Domestic consumption - TCB, PNJ, MWG
• **WATCH:** VGC (logistics), REE (infrastructure)

📈 **Historical precedent:**
2018 trade war period: VN-Index initially -8% but recovered +15% trong 6 tháng nhờ trade diversion effects.

**Confidence level: 82% | Impact timeline: HIGH trong Q4 2024**

Strategy: Defensive positioning ngắn hạn, accumulate domestic leaders on dips.`
    }

    // Crypto/gold related  
    if (lowerQuestion.includes('vàng') || lowerQuestion.includes('gold') || lowerQuestion.includes('putin') || lowerQuestion.includes('15/08')) {
      return `🥇 **Trump-Putin Meeting Analysis: Gold & VN Market Impact**

📅 **Meeting scenarios cho 15/08:**
• **Scenario 1 (40% prob):** Diplomatic breakthrough
  → Gold: -3% to -5% (safe-haven unwind)
  → VN-Index: +2% to +3% (risk-on sentiment)
  
• **Scenario 2 (35% prob):** Status quo/neutral talks  
  → Gold: Sideways trading, focus shifts to Fed
  → VN-Index: Minimal impact, follow regional markets
  
• **Scenario 3 (25% prob):** Tensions escalate
  → Gold: +5% to +8% (safe-haven rush)
  → VN-Index: -2% to -4% (risk-off)

🇻🇳 **VN market transmission channels:**
• **Currency effect:** Gold up → USD up → VND pressure
• **Sector rotation:** Safe-haven flows → Banking/Utilities outperform
• **Commodity spillover:** Gold volatility → watch HPG, HSG

📊 **Technical levels to watch:**
• Gold resistance: $2100/oz (key breakout level)
• Gold support: $2050/oz 
• VN-Index: 1235 support | 1270 resistance

🎯 **Trading strategy:**
• Pre-meeting: Hedge with gold ETFs or banking stocks
• Post-meeting: Fade extreme moves, buy dips on overreactions

**Risk/Reward:** Asymmetric upside if talks fail, limited downside if succeed.`
    }

    // General market responses
    const responses = [
      'Dựa trên AI analysis của 25000+ data points, tôi thấy strong correlation (0.73) giữa sự kiện này và VN market sentiment. Current risk/reward ratio suggests cautious optimism với strategic focus vào defensive high-dividend stocks.',
      'Machine learning model indicates 68% probability của increased volatility trong 2-3 tuần tới. Recommended approach: Implement systematic diversification strategy với 20% cash position để accumulate blue-chips during inevitable dips.',
      'Fascinating question! Theo quantitative analysis, tác động sẽ propagate qua 3 primary transmission channels: (1) Trade flow dynamics, (2) FDI sentiment shifts, và (3) Currency volatility effects. Historical pattern suggests delayed market reaction trong 5-10 trading sessions với peak impact ở T+7.',
      'Based on geopolitical risk models, this event scores 7.2/10 on impact scale. Suggested portfolio adjustments: Reduce exposure to export-dependent names, increase allocation to domestic consumption plays, và maintain hedging positions trong defensive sectors như utilities và REITs.'
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return <TrendingUp className="w-4 h-4 text-emerald-400" />
      case 'negative': return <TrendingDown className="w-4 h-4 text-red-400" />
      default: return <BarChart3 className="w-4 h-4 text-slate-400" />
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
            AI{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Trading Agent
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Chat với AI Agent thông minh để phân tích tác động của sự kiện chính trị, kinh tế. 
            Nhận daily reports được cá nhân hóa theo portfolio và sở thích đầu tư của bạn.
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl overflow-hidden flex flex-col" style={{ height: '700px' }}>
            {/* Chat Header */}
            <div className="bg-slate-700/50 px-6 py-4 border-b border-slate-600/30 flex-shrink-0" style={{ height: '80px' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Quantumine AI Agent</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-sm text-emerald-400">Online - Ready to analyze</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4" />
                    <span>Real-time Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>Daily Reports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="overflow-y-auto p-6 space-y-6 relative" style={{ height: '480px' }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-2xl p-4 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700/50 text-slate-100 border border-slate-600/30'
                    }`}>
                      <p className="leading-relaxed whitespace-pre-line">{message.content}</p>
                      
                      {/* AI Analysis */}
                      {message.analysis && (
                        <div className="mt-4 pt-4 border-t border-slate-600/30">
                          <div className="flex items-center justify-between text-xs mb-2">
                            <div className="flex items-center space-x-2">
                              {getSentimentIcon(message.analysis.sentiment)}
                              <span className="capitalize">{message.analysis.sentiment}</span>
                            </div>
                            <span>{message.analysis.confidence}% confidence</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {message.analysis.relatedSymbols.map((symbol) => (
                              <span key={symbol} className="px-2 py-1 bg-slate-600/50 rounded text-xs">
                                {symbol}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 text-center">{message.timestamp}</p>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' ? 'ml-3 order-3' : 'mr-3 order-0'
                  }`}>
                    {message.type === 'user' ? (
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="mr-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="bg-slate-700/50 border border-slate-600/30 rounded-2xl p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
              
              {/* Quick Suggestions Popup Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute bottom-4 left-4 right-4 bg-slate-800/95 backdrop-blur-xl border border-slate-600/50 rounded-xl p-4 shadow-2xl"
              >
                <div className="flex items-center mb-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-sm font-medium text-white">Câu hỏi gợi ý:</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-left p-2 bg-slate-700/50 hover:bg-slate-600/60 rounded-lg text-xs text-slate-300 hover:text-white transition-all duration-300 border border-slate-600/20 hover:border-purple-500/40"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>


            {/* Input */}
            <div className="border-t border-slate-600/30 p-6 flex-shrink-0" style={{ height: '140px' }}>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Hỏi về tác động của sự kiện chính trị/kinh tế hoặc yêu cầu daily report..."
                  className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-center mt-4 space-x-6 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Geopolitical Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span>Market Impact</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span>Personalized Reports</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}