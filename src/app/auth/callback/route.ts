import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { NextResponse, type NextRequest } from 'next/server'

export const dymanic = 'force-dymanic'

export async function GET (ctx: NextRequest) {
  const requestURL = new URL(ctx.url)
  const code = requestURL.searchParams.get('code')
  console.log('code', code)
  if (code != null) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }
  return NextResponse.redirect(requestURL.origin)
}
