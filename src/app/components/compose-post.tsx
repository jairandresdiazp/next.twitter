'use client';

import { ComposePostButton } from '@/app/components/compose-post-button';
import { addPost } from '@/app/actions/add-post-action';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (textAreaRef.current == null) return;
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (data: FormData) => {
    await addPost(data);
    setValue('');
  }

  return (
    <form
      action={(data) => onSubmit(data)}
      className="flex flex-row border-b border-white/20 p-3"
    >
      <Image
        className="inline-block h-10 w-10 rounded-full"
        src={userAvatarUrl}
        alt="profile"
        width={100}
        height={100}
      />
      <div className="flex flex-1 flex-col gap-y-4 pl-2">
        <textarea
          ref={textAreaRef}
          name="content"
          rows={2}
          cols={50}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement> ) => onChange(e)}
          className="w-full resize-none border-none bg-transparent text-lg font-medium text-gray-400 outline-none"
          placeholder="¡¿Qué está pasando!?"
        ></textarea>
        <ComposePostButton />
      </div>
    </form>
  );
}
