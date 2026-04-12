import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { getSessionCookie } from "better-auth/cookies";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = getSessionCookie(request);

  // Split the pathname to check for the locale and the actual path
  const segments = pathname.split('/');
  const locale = segments[1];
  const actualPath = segments.slice(2).join('/');

  // If visiting login/signup while authenticated, redirect to dashboard
  if ((actualPath === 'login' || actualPath === 'signup') && sessionCookie) {
    const localePath = locale && routing.locales.includes(locale as any) ? `/${locale}` : '/es';
    return Response.redirect(new URL(`${localePath}/dashboard`, request.url));
  }

  // Handle i18n
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};
