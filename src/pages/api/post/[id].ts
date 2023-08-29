import { Database } from '@/app/types/database';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  );
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    //return res.status(401).json({ message: 'Unauthorized' })
  }
  const { data: posts } = await supabase
    .from('post')
    .select('*, user(*)')
    .filter('id', 'eq', id)
    .order('created_at', { ascending: false });
  if (posts != null && posts?.length > 0) {
    return res.status(401).json(posts[0]);
  }
  return res.status(404).json({ message: 'Not Found' });
};

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '500kb',
    },
  },
};
