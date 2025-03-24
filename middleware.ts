import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, req) => {
  // Optional: Add custom logic or modify the response here
  // For example:
  // if (!auth.userId && req.nextUrl.pathname === '/protected-page') {
  //   return NextResponse.redirect(new URL('/sign-in', req.url));
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!static|_next|favicon.ico|api/auth|api/webhooks|.*\\..*|_vercel).*)',
  ],
};