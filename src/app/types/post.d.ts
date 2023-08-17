import { type Database } from '@/app/types/database'

type PostEntity = Database['public']['Tables']['post']['Row']
type UserEntity = Database['public']['Tables']['user']['Row']

export type Post = PostEntity & {
  user: UserEntity
}
