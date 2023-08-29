'use client';

import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({
  user,
  userName,
  avatarUrl,
  content,
}: {
  user: string;
  userName: string;
  avatarUrl: string;
  content: string;
}) {
  return (
    <article className="cursor-pointer rounded-none border-b border-white/20 bg-transparent p-3 shadow-none transition hover:bg-slate-300 dark:hover:bg-slate-800">
      <div className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/profile/${userName}`}>
            <Image
              className="inline-block h-10 w-10 rounded-full"
              src={avatarUrl}
              alt={userName}
              width={100}
              height={100}
            />
          </Link>
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {user}
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              @{userName}
            </h5>
          </div>
        </div>
      </div>
      <div className="break-words bg-transparent p-3 text-xs leading-5">
        <p className="text-default-600">{content}</p>
      </div>
      <div className="flex w-full gap-3 px-3">
        <button role="button" name="mensajes">
          <IconMessageCircle className="h-4 w-4" />
        </button>
        <button role="button" name="likes">
          <IconHeart className="h-4 w-4" />
        </button>
        <button role="button" name="rt">
          <IconRepeat className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
