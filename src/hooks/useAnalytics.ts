'use client'

import { useCallback } from 'react'
import { trackEvent } from '@/lib/utils'

export function useAnalytics() {
  const trackFormSubmission = useCallback((formType: string, success: boolean) => {
    trackEvent('form_submission', {
      form_type: formType,
      success,
      timestamp: new Date().toISOString()
    })
  }, [])

  const trackProductInterest = useCallback((productId: string, action: string) => {
    trackEvent('product_interest', {
      product_id: productId,
      action,
      timestamp: new Date().toISOString()
    })
  }, [])

  const trackSectionView = useCallback((sectionName: string) => {
    trackEvent('section_view', {
      section_name: sectionName,
      timestamp: new Date().toISOString()
    })
  }, [])

  const trackDemoRequest = useCallback((source: string) => {
    trackEvent('demo_request', {
      source,
      timestamp: new Date().toISOString()
    })
  }, [])

  return {
    trackFormSubmission,
    trackProductInterest,
    trackSectionView,
    trackDemoRequest
  }
}