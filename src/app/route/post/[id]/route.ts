import { NextRequest, NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/app/types/database';

export const dymanic = 'force-dymanic';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const { data: posts } = await supabase
    .from('post')
    .select('*, user(*)')
    .filter('id', 'eq', id)
    .order('created_at', { ascending: false });
  if (posts != null && posts?.length > 0) {
    return NextResponse.json(posts[0]);
  }
  return NextResponse.json({ message: 'Not Found' }, { status: 404 });
}
