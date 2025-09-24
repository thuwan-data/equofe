import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ADMIN_PATHS = new Set([
  '/admin/login',
  '/admin/register',
  '/admin/forgot-password',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const isPublic = PUBLIC_ADMIN_PATHS.has(pathname);
  const hasAccess = Boolean(request.cookies.get('admin_access')?.value);

  if (!isPublic && !hasAccess) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  if (isPublic && hasAccess && pathname === '/admin/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/admin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
