'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Globe, User, LogIn, ChevronDown, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface HeaderProps {
  onLanguageChange?: (lang: 'en' | 'vn') => void
  currentLanguage?: 'en' | 'vn'
  onToggleStats?: () => void
}

export const Header: React.FC<HeaderProps> = ({
  onLanguageChange,
  currentLanguage = 'vn',
  onToggleStats
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Ngay khi scroll 50px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { label: 'Home', href: '#home', labelVN: 'Trang Chủ', hasDropdown: false },
    { label: 'About', href: '#about', labelVN: 'Về Chúng Tôi', hasDropdown: false },
    { label: 'Product', href: '#product', labelVN: 'Sản Phẩm', hasDropdown: true },
    { label: 'Community', href: '#community', labelVN: 'Cộng Đồng', hasDropdown: true },
    { label: 'Contact Us', href: '#contact', labelVN: 'Liên Hệ', hasDropdown: false }
  ]

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'vn' : 'en'
    onLanguageChange?.(newLang)
  }

  const handleNavigation = (href: string) => {
    if (href === '#about') {
      // Navigate to About page
      window.location.href = '/about'
    } else if (href === '#home') {
      // Navigate to home page
      window.location.href = '/'
    } else {
      // Scroll to section on current page (only works on home page)
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If section not found, go to home page and scroll
        window.location.href = '/' + href
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
              {/* để img và không ở thành Image */}
            {/*<img*/}
            {/*  src="/LOGO-QUANTUMINE-03.png"*/}
            {/*  alt="Quantumine"*/}
            {/*  className="h-32 w-auto cursor-pointer"*/}
            {/*  onClick={() => handleNavigation('#home')}*/}
            {/*/>*/}
              <span className={'text-xl uppercase font-bold'}>Quantumine</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="flex items-center text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
              >
                <span>{currentLanguage === 'en' ? item.label : item.labelVN}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Statistics Toggle */}
            <button
              onClick={onToggleStats}
              className="p-[7px] rounded-lg border border-gray-600 hover:border-cyan-500 transition-colors duration-200"
            >
              <BarChart3 className="w-4 h-4 text-gray-300 hover:text-cyan-400" />
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-[5px] rounded-lg border border-gray-600 hover:border-cyan-500 transition-colors duration-200"
            >
              <Globe className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-gray-300">
                {currentLanguage.toUpperCase()}
              </span>
            </button>

            {/* Authentication Buttons */}
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400">
              <LogIn className="w-4 h-4 mr-2" />
              {currentLanguage === 'en' ? 'Sign In' : 'Đăng Nhập'}
            </Button>
            
            <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
              <User className="w-4 h-4 mr-2" />
              {currentLanguage === 'en' ? 'Sign Up' : 'Đăng Ký'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
                >
                  <span>{currentLanguage === 'en' ? item.label : item.labelVN}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              
              {/* Mobile Language & Auth */}
              <div className="border-t border-gray-700 pt-3 mt-3 space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'Tiếng Việt' : 'English'}</span>
                </button>
                
                <button className="flex items-center space-x-2 w-full px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">
                  <LogIn className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'Sign In' : 'Đăng Nhập'}</span>
                </button>
                
                <button className="flex items-center space-x-2 w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md hover:from-cyan-600 hover:to-purple-600">
                  <User className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'Sign Up' : 'Đăng Ký'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}