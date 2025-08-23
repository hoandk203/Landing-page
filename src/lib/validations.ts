import { z } from 'zod'

// Contact Form Validation Schema
export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Tên phải có ít nhất 2 ký tự')
    .max(100, 'Tên không được quá 100 ký tự'),
  email: z.string()
    .email('Email không hợp lệ')
    .max(255, 'Email quá dài'),
  company: z.string()
    .max(200, 'Tên công ty quá dài')
    .optional(),
  message: z.string()
    .min(10, 'Tin nhắn phải có ít nhất 10 ký tự')
    .max(2000, 'Tin nhắn không được quá 2000 ký tự'),
  type: z.enum(['demo', 'partnership', 'general']),
  interests: z.array(z.string()).optional(),
  formType: z.literal('contact')
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

// Newsletter Subscription Schema  
export const NewsletterSchema = z.object({
  email: z.string()
    .email('Email không hợp lệ')
    .max(255, 'Email quá dài'),
  source: z.string()
    .max(100, 'Source quá dài')
    .optional(),
  interests: z.array(z.string()).optional(),
  formType: z.literal('newsletter')
})

export type NewsletterData = z.infer<typeof NewsletterSchema>

// Analytics Event Schema
export const AnalyticsEventSchema = z.object({
  event: z.enum(['form_submission', 'product_view', 'demo_request', 'section_view', 'web_vitals']),
  properties: z.record(z.any()).optional(),
  timestamp: z.string().datetime().optional(),
  user_id: z.string().optional(),
  session_id: z.string().optional(),
})

export type AnalyticsEventData = z.infer<typeof AnalyticsEventSchema>

// Product Interest Schema
export const ProductInterestSchema = z.object({
  product_id: z.string(),
  action: z.enum(['view', 'demo_request', 'learn_more', 'contact']),
  source: z.string().optional(),
})

export type ProductInterestData = z.infer<typeof ProductInterestSchema>

// Form Submission Union Type
export const FormSubmissionSchema = z.union([ContactFormSchema, NewsletterSchema])
export type FormSubmissionData = z.infer<typeof FormSubmissionSchema>

// Common validation utilities
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

export function validateVietnamesePhone(phone: string): boolean {
  const vietnamesePhoneRegex = /^(\+84|0)(3|5|7|8|9)\d{8}$/
  return vietnamesePhoneRegex.test(phone.replace(/\s/g, ''))
}

export function detectUserSegment(email: string): 'professional' | 'genZ' | 'enterprise' | 'unknown' {
  const domain = email.split('@')[1]?.toLowerCase()
  
  if (!domain) return 'unknown'
  
  // Enterprise domains
  const enterpriseDomains = ['vietcombank.com.vn', 'techcombank.com.vn', 'vib.com.vn', 'acb.com.vn']
  if (enterpriseDomains.includes(domain)) return 'enterprise'
  
  // Professional domains  
  const professionalDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com']
  const isGenZEmail = email.match(/\d{4}/) // Contains 4 digits (likely birth year)
  
  if (professionalDomains.includes(domain)) {
    return isGenZEmail ? 'genZ' : 'professional'
  }
  
  // Company domains
  if (!professionalDomains.includes(domain)) return 'professional'
  
  return 'unknown'
}