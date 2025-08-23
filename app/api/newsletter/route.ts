import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().optional(),
  interests: z.array(z.string()).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = newsletterSchema.parse(body)
    
    // Rate limiting check (simple implementation)
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    // In production, implement proper rate limiting with Redis or similar
    
    console.log('Newsletter subscription:', validatedData)
    
    // In production, you would:
    // 1. Save to email list (Mailchimp, SendGrid, etc.)
    // 2. Send welcome email
    // 3. Tag based on interests
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json(
      { 
        success: true,
        subscribed: true, 
        message: 'Đăng ký thành công! Kiểm tra email để xác nhận.'
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email address',
          errors: error.errors
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred. Please try again.' 
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