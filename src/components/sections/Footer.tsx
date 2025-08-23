'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ChevronRight
} from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Trading System', href: '#products' },
    { name: 'AI Agents', href: '#products' },
    { name: 'Community', href: '#community' },
    { name: 'News & Data', href: '#products' },
    { name: 'Python Library', href: 'https://github.com/quantumine' },
    { name: 'Copy Trading', href: '#products' }
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Investors', href: '/investors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community Forum', href: '/forum' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Support Center', href: '/support' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ]
}

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/quantumine', icon: Facebook, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/quantumine', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/quantumine', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'YouTube', href: 'https://youtube.com/@quantumine', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/quantumine', icon: Github, color: 'hover:text-gray-300' }
]

const contactInfo = [
  { icon: Mail, text: 'hello@quantumine.com', href: 'mailto:hello@quantumine.com' },
  { icon: Phone, text: '+84 28 1234 5678', href: 'tel:+842812345678' },
  { icon: MapPin, text: 'Ho Chi Minh City, Vietnam', href: '#' }
]

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800">
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">Q</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30" />
                  </div>
                  <span className="text-2xl font-bold text-white">QUANTUMINE</span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
                  Hệ sinh thái trading định lượng tiên tiến nhất Việt Nam. 
                  Từ backtesting đến live trading với AI-powered insights 
                  và cộng đồng trader chuyên nghiệp.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-slate-400 hover:text-white transition-colors duration-300 group"
                    >
                      <contact.icon className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                      {contact.text}
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Products */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-white mb-6">Products</h3>
                <ul className="space-y-4">
                  {footerLinks.products.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-white mb-6">Company</h3>
                <ul className="space-y-4">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources & Legal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Resources */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">Resources</h3>
                  <ul className="space-y-4">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                        >
                          <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
                  <ul className="space-y-4">
                    {footerLinks.legal.slice(0, 4).map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                        >
                          <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-slate-800"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-xl p-8">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated with Quantumine
                </h3>
                <p className="text-slate-300 mb-6">
                  Get latest updates về new features, trading insights, và exclusive offers 
                  delivered straight to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-12 px-4 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <button className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-xl">
          <div className="container mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm mb-4 md:mb-0"
              >
                © 2024 Quantumine. All rights reserved. | Made with ❤️ in Vietnam
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="flex space-x-4 text-sm">
                  {footerLinks.legal.slice(-2).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}