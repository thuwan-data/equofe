import { NextResponse } from 'next/server';

export async function POST() {
  const resp = NextResponse.json({ ok: true });
  const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' as const, path: '/', maxAge: 0 };
  resp.cookies.set('admin_access', '', cookieOptions);
  resp.cookies.set('admin_refresh', '', cookieOptions);
  // Also clear non-HttpOnly convenience cookie
  resp.cookies.set('admin_user', '', { ...cookieOptions, httpOnly: false });
  return resp;
}
