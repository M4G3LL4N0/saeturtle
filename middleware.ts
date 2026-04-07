import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "@/lib/supabase/middleware"

export async function middleware(request: NextRequest) {
  try {
    return await updateSession(request)
  } catch (error) {
    // Always bypass middleware on error to prevent site outage
    console.error('[Middleware] Safe bypass due to error:', error instanceof Error ? error.message : error)
    const response = NextResponse.next()
    response.headers.set('x-middleware-catch', 'true')
    return response
  }
}

// Explicitly allow required static assets and API routes
export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
