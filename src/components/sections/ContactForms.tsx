'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  User, 
  Building2, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
  type: 'demo' | 'partnership' | 'general'
  interests: string[]
}

interface ContactFormsProps {
  onSubmit?: (formData: any) => void
  showModal?: boolean
  onCloseModal?: () => void
}

export const ContactForms: React.FC<ContactFormsProps> = ({ 
  onSubmit = () => {},
  showModal = false,
  onCloseModal = () => {}
}) => {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'demo',
    interests: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await onSubmit({ ...contactForm, formType: 'contact' })
      setSubmitStatus('success')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
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
            Contact{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Email, call, or complete the form to learn how Quantumine can solve your trading problem.
          </p>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">Contact Us</h3>
                <p className="text-slate-400 leading-relaxed">
                  Email, call, or complete the form to learn how Quantumine can solve your trading problem.
                </p>
                
                <div className="space-y-4">
                  <div className="text-white">
                    <a href="mailto:info@quantumine.io" className="hover:text-cyan-400 transition-colors">
                      info@quantumine.io
                    </a>
                  </div>
                  <div className="text-white">
                    <a href="tel:+84-123-456-789" className="hover:text-cyan-400 transition-colors">
                      +84-123-456-789
                    </a>
                  </div>
                  <div className="text-white underline cursor-pointer hover:text-cyan-400 transition-colors">
                    Customer Support
                  </div>
                </div>
              </div>

              {/* Support Categories */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Customer Support</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our support team is available around the clock to address any concerns or queries you may have.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Feedback and Suggestions</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We value your feedback and are continuously working to improve Quantumine. Your input is crucial in shaping the future of Quantumine.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Media Inquiries</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    For media-related questions or press inquiries, please contact us at{' '}
                    <a href="mailto:media@quantumine.com" className="text-cyan-400 hover:underline">
                      media@quantumine.com
                    </a>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                  <p className="text-slate-400">You can reach us anytime</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        value={contactForm.name.split(' ')[0] || ''}
                        onChange={(e) => {
                          const lastName = contactForm.name.split(' ').slice(1).join(' ')
                          setContactForm(prev => ({ ...prev, name: e.target.value + (lastName ? ' ' + lastName : '') }))
                        }}
                        className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        value={contactForm.name.split(' ').slice(1).join(' ')}
                        onChange={(e) => {
                          const firstName = contactForm.name.split(' ')[0] || ''
                          setContactForm(prev => ({ ...prev, name: firstName + ' ' + e.target.value }))
                        }}
                        className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex">
                    <select className="px-3 py-3 bg-transparent border border-slate-600 border-r-0 rounded-l-lg text-white focus:border-cyan-400 focus:outline-none transition-colors">
                      <option className="bg-slate-800">+84</option>
                      <option className="bg-slate-800">+62</option>
                      <option className="bg-slate-800">+1</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="flex-1 px-4 py-3 bg-transparent border border-slate-600 rounded-r-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={4}
                      placeholder="How can we help?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>

                  {/* Terms */}
                  <div className="text-center text-xs text-slate-400">
                    By contacting us, you agree to our{' '}
                    <a href="#" className="text-cyan-400 hover:underline">Terms of service</a>
                    {' '}and{' '}
                    <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a>
                  </div>
                </form>

                {/* Success/Error Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-lg border ${
                      submitStatus === 'success' 
                        ? 'border-green-500 bg-green-500/20 text-green-300'
                        : 'border-red-500 bg-red-500/20 text-red-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Thank you! We&apos;ll get back to you within 24 hours.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          <span>Something went wrong. Please try again later.</span>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForms