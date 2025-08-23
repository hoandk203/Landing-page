'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/navigation/Header'
import { StatsPanel } from '@/components/stats/StatsPanel'
import { HeroSection } from '@/components/sections/HeroSection'
import { PerformanceComparison } from '@/components/charts/PerformanceComparison'
import { GradientOrbs } from '@/components/ui/GradientOrbs'
import { ContactForms } from '@/components/sections/ContactForms'
import { CommunitySection, PythonLibrarySection } from '@/components/sections/CommunitySection'
import { NewsSection } from '@/components/sections/NewsSection'
import { AIAgentSection } from '@/components/sections/AIAgentSection'
import { Footer } from '@/components/sections/Footer'
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton'
import { Toaster } from '@/components/ui/Toaster'

export default function HomePage() {
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'vn'>('vn')
  const [showStatsPanel, setShowStatsPanel] = useState(false)

  const handleRequestDemo = useCallback(() => {
    setShowDemoModal(true)
    
    // Track demo request event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'demo_request', {
        event_category: 'engagement',
        event_label: 'hero_section',
      })
    }
  }, [])

  const handleViewProducts = useCallback(() => {
    const communitySection = document.getElementById('community')
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleProductAction = useCallback((productId: string, action: string) => {
    console.log('Product action:', productId, action)
    
    // Track product interest
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'product_interest', {
        event_category: 'engagement',
        event_label: productId,
        action: action,
      })
    }

    // Handle different actions
    switch (action) {
      case 'Request Demo':
      case 'Join Beta':
        setShowDemoModal(true)
        break
      case 'Join Community':
        window.open('https://community.quantumine.com', '_blank')
        break
      case 'Try Free':
        window.open('https://app.quantumine.com/signup', '_blank')
        break
      case 'View on GitHub':
        window.open('https://github.com/quantumine/python-library', '_blank')
        break
      case 'Notify Me':
        setShowContactModal(true)
        break
      default:
        setShowDemoModal(true)
    }
  }, [])

  const handleContactSubmit = useCallback((formData: any) => {
    console.log('Contact form submitted:', formData)
    
    // Track form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'lead_generation',
        event_label: formData.type || 'general',
      })
    }

    // Here you would typically send data to your backend
    // For now, just close the modal and show success message
    setShowDemoModal(false)
    setShowContactModal(false)
  }, [])

  const handleLanguageChange = useCallback((lang: 'en' | 'vn') => {
    setCurrentLanguage(lang)
  }, [])

  const handleToggleStats = useCallback(() => {
    setShowStatsPanel(!showStatsPanel)
  }, [showStatsPanel])

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-gray-900" style={{
      background: `
        
      `
    }}>
      {/* Global Background SVG */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/asset/background.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Global gradient orbs for entire page */}
      <GradientOrbs variant="primary" count={8} />
      
      {/* Header Navigation */}
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        onToggleStats={handleToggleStats}
      />
      
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section - no background, inherits from parent */}
        <HeroSection
          onRequestDemo={handleRequestDemo}
          onViewProducts={handleViewProducts}
          currentLanguage={currentLanguage}
        />
        
        {/* All sections seamlessly connected */}
        <div className="relative z-10">
          {/* Performance Comparison Section */}
          <section id="performance">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <PerformanceComparison className="" />
              </motion.div>
            </div>
          </section>

          {/* Community Section */}
          <section id="community">
            <CommunitySection />
          </section>

          {/* Python Library Section */}
          <section id="python-library">
            <PythonLibrarySection />
          </section>

          {/* News Section */}
          <section id="news">
            <NewsSection />
          </section>

          {/* AI Agent Section */}
          <section id="ai-agent">
            <AIAgentSection />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactForms
              onSubmit={handleContactSubmit}
              showModal={showDemoModal || showContactModal}
              onCloseModal={() => {
                setShowDemoModal(false)
                setShowContactModal(false)
              }}
            />
          </section>

          {/* Footer */}
          <section>
            <Footer />
          </section>
        </div>
      </main>

      {/* Utility Components */}
      <ScrollToTopButton />
      <Toaster />
      
      {/* Stats Panel */}
      <StatsPanel 
        isOpen={showStatsPanel}
        onClose={() => setShowStatsPanel(false)}
        currentLanguage={currentLanguage}
      />
    </div>
  )
}