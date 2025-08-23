import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.enum(['demo', 'partnership', 'general']),
  interests: z.array(z.string()).optional(),
  formType: z.literal('contact')
})

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  interests: z.array(z.string()).optional(),
  formType: z.literal('newsletter')
})

const submitSchema = z.union([contactSchema, newsletterSchema])

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = submitSchema.parse(body)
    
    // Rate limiting check (simple implementation)
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    // In production, implement proper rate limiting with Redis or similar
    
    // Process based on form type
    if (validatedData.formType === 'contact') {
      // Handle contact form submission
      console.log('Contact form submission:', validatedData)
      
      // In production, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM
      // 4. Send auto-reply email
      
    } else if (validatedData.formType === 'newsletter') {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', validatedData)
      
      // In production, you would:
      // 1. Save to email list (Mailchimp, SendGrid, etc.)
      // 2. Send welcome email
      // 3. Tag based on interests
    }
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json(
      { 
        success: true, 
        message: validatedData.formType === 'contact' 
          ? 'Thank you! We will contact you within 24 hours.' 
          : 'Successfully subscribed to newsletter!'
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Form submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
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

// Handle preflight requests
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