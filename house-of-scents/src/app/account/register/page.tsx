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

const schema = z
  .object({
    name: z.string().min(2, 'Enter your full name'),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Minimum 6 characters'),
    confirm: z.string(),
    terms: z.literal(true, { message: 'You must accept the terms' }),
  })
  .refine((d) => d.password === d.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  });
type Values = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const registerUser = useAuthStore((s) => s.register);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = (data: Values) => {
    registerUser(data.name, data.email, data.password);
    router.push('/account');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-28 pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md border border-gold/20 bg-charcoal/40 p-8 md:p-10"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Join the House</p>
          <h1 className="mt-3 font-serif text-3xl text-ivory">Create Account</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <Input label="Full Name" id="name" error={errors.name?.message} {...register('name')} />
          <Input label="Email" id="email" type="email" error={errors.email?.message} {...register('email')} />
          <Input label="Password" id="password" type="password" error={errors.password?.message} {...register('password')} />
          <Input label="Confirm Password" id="confirm" type="password" error={errors.confirm?.message} {...register('confirm')} />
          <label className="flex items-start gap-3 text-sm text-beige">
            <input
              type="checkbox"
              className="mt-1 accent-[#c9a84c]"
              {...register('terms')}
            />
            <span>
              I agree to the{' '}
              <Link href="/policies" className="text-gold hover:underline">
                Terms & Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.terms && (
            <p className="text-xs text-red-400">{errors.terms.message}</p>
          )}
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="mt-8 text-center text-sm text-beige">
          Already have an account?{' '}
          <Link href="/account/login" className="text-gold hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
