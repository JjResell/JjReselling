'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/lib/store';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Minimum 6 characters'),
});
type Values = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = (data: Values) => {
    login(data.email, data.password);
    router.push('/account');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md border border-gold/20 bg-charcoal/40 p-8 md:p-10"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Welcome Back</p>
          <h1 className="mt-3 font-serif text-3xl text-ivory">Sign In</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <Input label="Email" id="email" type="email" error={errors.email?.message} {...register('email')} />
          <Input label="Password" id="password" type="password" error={errors.password?.message} {...register('password')} />
          <div className="flex justify-end">
            <Link href="#" className="text-xs text-gold hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3 text-bronze">
          <div className="h-px flex-1 bg-gold/15" />
          <span className="text-xs uppercase tracking-[0.15em]">Or</span>
          <div className="h-px flex-1 bg-gold/15" />
        </div>
        <div className="space-y-3">
          {['Continue with Google', 'Continue with Apple'].map((label) => (
            <button
              key={label}
              type="button"
              className="w-full border border-gold/20 py-3 text-sm text-ivory transition-colors hover:border-gold/50"
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-beige">
          New to House of Scents?{' '}
          <Link href="/account/register" className="text-gold hover:underline">
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
