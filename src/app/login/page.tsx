import { AuthButtonServer } from '@/app/components/auth-button-server';

export default function login() {
  return (
    <section className="grid min-h-screen place-content-center">
      <h1 className="mb-4 text-xl font-bold">Inicia sesión en DevTer</h1>
      <AuthButtonServer />
    </section>
  );
}
