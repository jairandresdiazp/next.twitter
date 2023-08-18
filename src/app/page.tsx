import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostLists } from '@/app/components/posts-list'
import { type Database } from '@/app/types/database'
import { ComposePost } from '@/app/components/compose-post'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session == null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('post').select('*, user(*)').order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="max-w-[600px] w-full mx-auto border border-white/20 min-h-screen">
        <ComposePost userAvatarUrl={session?.user?.user_metadata?.avatar_url} />
        <PostLists posts={posts} />
      </section>
      <AuthButtonServer />
    </main>
  )
}
