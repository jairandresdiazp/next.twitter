import { type NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/app/types/database'

export const dymanic = 'force-dymanic'

export async function GET (req: NextApiRequest) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const { data: posts } = await supabase.from('post').select('*, user(*)').order('created_at', { ascending: false })
  return NextResponse.json(posts)
}
