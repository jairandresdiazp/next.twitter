'use client'

import { ComposePostButton } from '@/app/components/compose-post-button'
import { addPost } from '@/app/actions/add-post-action'
import { useRef } from 'react'

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
      <img className='rounded-full w-10 h-10 object-contain mr-4' src={userAvatarUrl} />
      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
          name='content'
          rows={4}
          className='w-full text-xl bg-slate-50 dark:bg-[#0d1117] placeholder-gray-500 text-default-600 p-2'
          placeholder='¡¿Qué está pasando!?'
        ></textarea>
        <ComposePostButton />
      </div>
    </form>
  )
}
