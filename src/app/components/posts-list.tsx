import { type Post } from '@/app/types/post'
import PostCard from '@/app/components/post-card'

export function PostLists ({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {
        posts?.map((post: Post) => {
          const postCard = {
            user: post.user?.name,
            userName: post.user?.user_name,
            avatarUrl: post.user?.avatar_url,
            content: post.content
          }
          return (
            <PostCard key={post.id} {...postCard} />
          )
        })
      }
    </>
  )
}
