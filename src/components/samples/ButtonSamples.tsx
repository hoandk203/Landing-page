'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { PlayCircle, ExternalLink, Github, Star, Download } from 'lucide-react'

/**
 * Button component samples according to front-end specification
 * Demonstrates different button variants, sizes, and states
 */
export const ButtonSamples: React.FC = () => {
  return (
    <div className="space-y-8 p-8 bg-slate-900 text-white">
      <h2 className="text-2xl font-bold text-center mb-8">Button Component Samples</h2>
      
      {/* Primary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-emerald-400">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" size="lg">
            <PlayCircle className="w-4 h-4 mr-2" />
            Đăng Ký Demo
          </Button>
          <Button variant="default" size="default">
            Request Demo
          </Button>
          <Button variant="default" size="sm">
            Join Beta
          </Button>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-emerald-400">Secondary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="lg">
            Join Community
          </Button>
          <Button variant="secondary" size="default">
            <Star className="w-4 h-4 mr-2" />
            Tìm Hiểu Thêm
          </Button>
          <Button variant="secondary" size="sm">
            Learn More
          </Button>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-emerald-400">Outline Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="lg">
            <ExternalLink className="w-4 h-4 mr-2" />
            Try Free
          </Button>
          <Button variant="outline" size="default">
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-emerald-400">Ghost Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" size="lg">
            Notify Me
          </Button>
          <Button variant="ghost" size="default">
            Xem Chi Tiết
          </Button>
          <Button variant="ghost" size="sm">
            Coming Soon
          </Button>
        </div>
      </div>

      {/* Button States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-emerald-400">Button States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default State</Button>
          <Button variant="default" disabled>
            Disabled State
          </Button>
          <Button variant="secondary" className="opacity-80">
            Loading State...
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonSamples