'use client'

import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard ({
  user,
  userName,
  avatarUrl,
  content
}: {
  user: string
  userName: string
  avatarUrl: string
  content: string
}) {
  return (
    <article className="p-3 shadow-none bg-transparent hover:bg-slate-300 dark:hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <div className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/profile/${userName}`}>
            <Image className='inline-block h-10 w-10 rounded-full' src={avatarUrl} alt={userName} width={100} height={100} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{user}</h4>
            <h5 className="text-small tracking-tight text-default-500">@{userName}</h5>
          </div>
        </div>
      </div>
      <div className="p-3 text-xs bg-transparent break-words leading-5">
        <p className='text-default-600'>
          {content}
        </p>
      </div>
      <div className="px-3 gap-3 flex w-full">
        <button role='button' name='mensajes'>
          <IconMessageCircle className='w-4 h-4' />
        </button>
        <button role='button' name='likes'>
          <IconHeart className='w-4 h-4' />
        </button>
        <button role='button' name='rt'>
          <IconRepeat className='w-4 h-4' />
        </button>
      </div>
    </article>
  )
}
