'use client'

import { ComposePostButton } from '@/app/components/compose-post-button'
import { addPost } from '@/app/actions/add-post-action'
import { useRef } from 'react'
import Image from 'next/image'

export function ComposePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className='flex flex-row p-3 border-b border-white/20'>
      <Image className='inline-block h-10 w-10 rounded-full' src={userAvatarUrl} alt='profile' width={100} height={100} />
      <div className='flex flex-1 flex-col gap-y-4 pl-2'>
        <textarea
          name='content'
          rows={2}
          cols={50}
          className= 'bg-transparent text-gray-400 font-medium text-lg w-full border-none outline-none resize-none'
          placeholder='¡¿Qué está pasando!?'
        ></textarea>
        <ComposePostButton />
      </div>
    </form>
  )
}
