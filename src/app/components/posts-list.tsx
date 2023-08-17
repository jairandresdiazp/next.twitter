import { type Post } from '../types/post'
import PostCard from './post-card'

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
