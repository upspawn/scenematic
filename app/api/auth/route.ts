import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const AUTH_COOKIE = 'scenematic_auth';
const AUTH_SECRET = process.env.AUTH_PASSWORD || 'demo123';

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password === AUTH_SECRET) {
    const response = NextResponse.json({ success: true });

    // Set auth cookie (expires in 7 days)
    response.cookies.set(AUTH_COOKIE, 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(AUTH_COOKIE);
  return response;
}
