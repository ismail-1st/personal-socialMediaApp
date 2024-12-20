'use server';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { getCookieStore } from '@/app/shared/functions';

export async function middleware(request: NextRequest) {
  // Get the cookie store
  const cookieStore = await getCookieStore();
  const token = cookieStore.get('token');
  console.log("TOKEN IN MIDDLEWARE: ", token);

  // Get the current URL path
  const url = new URL(request.url);

  // Case 1: If there's a token and the user is on the login or signup page, redirect to '/'
  if (token && (url.pathname === '/login' || url.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Case 2: If there's no token and the user is not on the signup page, redirect to login
  if (!token && url.pathname !== '/signup') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to continue if none of the above conditions are met
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/signup']
};