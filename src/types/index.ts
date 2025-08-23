// Core Types
export interface Product {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  features: string[]
  metrics: { label: string; value: string; trend?: 'up' | 'down' | 'neutral' }[]
  status: 'available' | 'coming-soon' | 'beta' | 'new'
  ctaText: string
  ctaVariant: 'primary' | 'secondary' | 'outline' | 'ghost'
  demoComponent: React.ReactNode
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  avatar?: string
  linkedin?: string
  github?: string
  email?: string
  expertise: string[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  avatar?: string
  content: string
  rating: number
  profit: string
  timeframe: string
}

export interface CommunityMetric {
  label: string
  value: string
  change: string
  icon: React.ReactNode
  color: string
}

export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  highlights: string[]
  gradient: string
}

// Form Types
export interface BaseFormProps {
  onSubmit?: (formData: any) => void | Promise<void>
  showModal?: boolean
  onCloseModal?: () => void
  isSubmitting?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  type: 'demo' | 'partnership' | 'general'
  interests?: string[]
  source?: string
}

export interface NewsletterData {
  email: string
  source?: string  
  interests?: string[]
}

// Analytics Types
export interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  timestamp?: string
  user_id?: string
  session_id?: string
}

export interface WebVitalsMetric {
  name: 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB'
  value: number
  id: string
  label?: string
}

// SEO Types
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

// Component Props Types
export interface SectionProps {
  className?: string
  id?: string
}

export interface HeroSectionProps extends SectionProps {
  onRequestDemo?: () => void
  onViewProducts?: () => void
}

export interface ProductGridProps extends SectionProps {
  onProductAction?: (productId: string, action: string) => void
}

export interface ContactFormsProps extends BaseFormProps {
  // Additional specific props for contact forms
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  errors?: Record<string, string>
}

export interface ContactResponse extends ApiResponse {
  id?: string
}

export interface NewsletterResponse extends ApiResponse {
  subscribed?: boolean
}

// Utility Types
export type Theme = 'light' | 'dark'
export type UserSegment = 'professional' | 'genZ' | 'enterprise' | 'unknown'
export type FormType = 'contact' | 'newsletter' | 'demo'
export type ActionType = 'view' | 'click' | 'submit' | 'error'

// Environment Types
export interface EnvVars {
  NEXT_PUBLIC_GA_ID?: string
  NEXT_PUBLIC_FB_PIXEL_ID?: string
  DATABASE_URL?: string
  RESEND_API_KEY?: string
  SENTRY_DSN?: string
}