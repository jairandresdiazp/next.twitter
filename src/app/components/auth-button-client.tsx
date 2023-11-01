'use client';

import {
  type Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { GitHubIcon } from '@/app/components/icons';
import { useRouter } from 'next/navigation';
import { SignInWithOAuthCredentials } from '@supabase/supabase-js';

export function AuthButtonClient({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    const options: SignInWithOAuthCredentials = {
      provider: 'github',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    };
    await supabase.auth.signInWithOAuth(options);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header>
      {session === null ? (
        <button
          onClick={handleSignIn}
          type="button"
          className="mb-2 mr-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/30 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 focus:ring-gray-500"
        >
          <GitHubIcon />
          Iniciar session con GitHub
        </button>
      ) : (
        <button
          onClick={handleSignOut}
          type="button"
          className="mb-2 mr-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/30 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 focus:ring-gray-500"
        >
          Sign out
        </button>
      )}
    </header>
  );
}
