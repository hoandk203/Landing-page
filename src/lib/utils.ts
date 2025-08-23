import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        ...properties
      })
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'CustomEvent', {
        event_name: eventName,
        ...properties
      })
    }
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastExecTime = 0
  return (...args: Parameters<T>) => {
    const currentTime = Date.now()
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    }
  }
}