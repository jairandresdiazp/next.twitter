'use client';

import { useFormStatus } from 'react-dom';

export function ComposePostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="self-end rounded-full bg-sky-500 px-5 py-2 text-sm font-bold disabled:pointer-events-none disabled:opacity-40"
    >
      {pending ? 'Posteando...' : 'Postear'}
    </button>
  );
}
