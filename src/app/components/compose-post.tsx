'use client'

import { ComposePostButton } from '@/app/components/compose-post-button'
import { addPost } from '@/app/actions/add-post-action'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function ComposePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (textAreaRef.current == null) return
    textAreaRef.current.style.height = 'auto'
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
  }, [value])

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <form action={async (data) => {
      await addPost(data)
      setValue('')
    }} className='flex flex-row p-3 border-b border-white/20'>
      <Image className='inline-block h-10 w-10 rounded-full' src={userAvatarUrl} alt='profile' width={100} height={100} />
      <div className='flex flex-1 flex-col gap-y-4 pl-2'>
        <textarea
          ref={textAreaRef}
          name='content'
          rows={2}
          cols={50}
          value={value}
          onChange={onChange}
          className= 'bg-transparent text-gray-400 font-medium text-lg w-full border-none outline-none resize-none'
          placeholder='¡¿Qué está pasando!?'
        ></textarea>
        <ComposePostButton />
      </div>
    </form>
  )
}
