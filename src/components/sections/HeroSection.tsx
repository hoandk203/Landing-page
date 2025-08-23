'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Users, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { QuantumModel } from '@/components/3d/QuantumModel'

interface HeroSectionProps {
  onRequestDemo?: () => void
  onViewProducts?: () => void
  currentLanguage?: 'en' | 'vn'
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestDemo,
  onViewProducts,
  currentLanguage = 'vn'
}) => {
  return (
    <section id="home" className="relative h-screen overflow-hidden pt-16">
      {/* Block 1: Hero Section với Background */}
      <div className="relative z-10 min-h-[80vh] flex items-center">
        {/* Content Area - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mx-0 lg:ml-0 text-center lg:text-left relative z-20"
          style={{ marginLeft: 'max(2rem, calc((100vw - 1280px) / 2 + 2rem))' }}
        >
          <h1 className="text-4xl lg:text-5xl leading-[48px] lg:!leading-[56px] font-bold text-white mb-6">
            {currentLanguage === 'en' ? (
              <>
                Vietnam&apos;s Most
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">Advanced</span>
                Quantitative Trading
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">Ecosystem</span>
              </>
            ) : (
              <>
                Hệ sinh thái giao dịch
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">định lượng</span>
                tiên tiến nhất
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">Việt Nam</span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {currentLanguage === 'en' 
              ? 'From backtesting to live trading with AI-powered insights and multi-market capabilities'
              : 'Từ backtest đến live trading với AI-powered insights và khả năng đa thị trường'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={onRequestDemo}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
            >
              {currentLanguage === 'en' ? 'Request Demo' : 'Đăng Ký Demo'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onViewProducts}
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              {currentLanguage === 'en' ? 'View Products' : 'Xem Sản Phẩm'}
            </Button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">45.9%</div>
              <div className="text-sm text-gray-400">
                {currentLanguage === 'en' ? 'YTD Return' : 'Lợi nhuận YTD'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">2.1</div>
              <div className="text-sm text-gray-400">Sharpe Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-sm text-gray-400">
                {currentLanguage === 'en' ? 'Markets' : 'Thị trường'}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 3D Model - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 top-0 bottom-0 w-1/2 z-10"
        >
          <QuantumModel className="w-full h-full" />
        </motion.div>
      </div>
      
    </section>
  )
}