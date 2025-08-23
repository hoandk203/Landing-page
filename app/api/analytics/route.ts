import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const analyticsEventSchema = z.object({
  event: z.enum(['form_submission', 'product_view', 'demo_request', 'web_vitals']),
  properties: z.record(z.any()).optional(),
  timestamp: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = analyticsEventSchema.parse(body)
    
    console.log('Analytics event:', validatedData)
    
    // In production, you would:
    // 1. Send to analytics service
    // 2. Store in database for custom reporting
    // 3. Process for real-time dashboards
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Event tracked successfully'
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Analytics tracking error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid event data',
          errors: error.errors
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Tracking failed' 
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',  
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}