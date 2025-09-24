import { NextResponse } from 'next/server';

function decodeJwtExp(token: string): number | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(Buffer.from(parts[1].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8'));
    if (typeof payload.exp === 'number') return payload.exp;
    return null;
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const upstream = await fetch('http://13.48.19.134/api/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      const message = Array.isArray(data?.non_field_errors) && data.non_field_errors.length > 0
        ? String(data.non_field_errors[0])
        : 'Login failed';
      return NextResponse.json({ error: message }, { status: upstream.status || 401 });
    }

    const { access, refresh, user } = data || {};
    if (!access || !refresh) {
      return NextResponse.json({ error: 'Unexpected response from auth server' }, { status: 502 });
    }

    const resp = NextResponse.json({ ok: true, user: user || null });

    const now = Math.floor(Date.now() / 1000);
    const accessExp = decodeJwtExp(access);
    const refreshExp = decodeJwtExp(refresh);

    const accessMaxAge = accessExp && accessExp > now ? accessExp - now : 60 * 15; // 15m fallback
    const refreshMaxAge = refreshExp && refreshExp > now ? refreshExp - now : 60 * 60 * 24 * 7; // 7d fallback

    const isProd = process.env.NODE_ENV === 'production';

    resp.cookies.set('admin_access', access, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: accessMaxAge,
    });

    resp.cookies.set('admin_refresh', refresh, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: refreshMaxAge,
    });

    if (user) {
      // Store minimal non-sensitive user info for quick UI access (non-HttpOnly)
      try {
        const safeUser = { id: user.id, username: user.username, email: user.email, role: user.role };
        resp.cookies.set('admin_user', JSON.stringify(safeUser), {
          httpOnly: false,
          secure: isProd,
          sameSite: 'lax',
          path: '/',
          maxAge: refreshMaxAge,
        });
      } catch {
        // ignore serialization issues
      }
    }

    return resp;
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      return NextResponse.json({ error: 'Authentication service timed out' }, { status: 504 });
    }
    return NextResponse.json({ error: 'Authentication service unavailable' }, { status: 503 });
  }
}
