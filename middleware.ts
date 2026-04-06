import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse, type NextRequest } from 'next/server'
import type { Database } from '@/types/database'

export async function middleware(request: NextRequest) {
  try {
    const response = NextResponse.next()
    const supabase = createMiddlewareClient<Database>({ 
      req: request, 
      res: response 
    })

    const { 
      data: { session }, 
      error 
    } = await supabase.auth.getSession()

    if (error) throw error
    
    // Protected routes
    if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
      const redirectUrl = new URL('/login', request.url)
      redirectUrl.searchParams.set('redirectedFrom', request.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // Auth routes
    if (session && ['/login', '/onboarding'].includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return response
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/login?error=auth_error', request.url))
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/onboarding'
  ]
}
