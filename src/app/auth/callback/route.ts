import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const dymanic = 'force-dymanic';

export async function GET(request: NextRequest) {
  const requestURL = new URL(request?.url || '');
  const code = requestURL.searchParams.get('code');
  if (code != null) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    await supabase.auth.exchangeCodeForSession(code);
  }
  return NextResponse.redirect(requestURL.origin);
}
