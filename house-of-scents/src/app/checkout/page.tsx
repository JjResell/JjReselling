'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, CreditCard } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice, generateOrderNumber } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  address: z.string().min(3, 'Required'),
  city: z.string().min(1, 'Required'),
  state: z.string().min(1, 'Required'),
  postcode: z.string().min(4, 'Enter a valid postcode'),
  country: z.string().min(1, 'Required'),
  cardName: z.string().min(1, 'Required'),
  cardNumber: z.string().min(12, 'Enter a valid card number'),
  expiry: z.string().min(4, 'MM/YY'),
  cvc: z.string().min(3, '3-4 digits'),
});

type FormValues = z.infer<typeof schema>;

const steps = ['Contact', 'Shipping', 'Payment', 'Review'] as const;
const payIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay'];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const total = useCartStore((s) => s.total());
  const shipping = total > 200 || total === 0 ? 0 : 15;
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { country: 'Australia' },
    mode: 'onTouched',
  });

  const fieldsByStep: (keyof FormValues)[][] = [
    ['email'],
    ['firstName', 'lastName', 'address', 'city', 'state', 'postcode', 'country'],
    ['cardName', 'cardNumber', 'expiry', 'cvc'],
    [],
  ];

  const next = async () => {
    const valid = await trigger(fieldsByStep[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const onSubmit = () => {
    const orderNumber = generateOrderNumber();
    clearCart();
    router.push(`/order-confirmation?order=${orderNumber}`);
  };

  if (items.length === 0) {
    return (
      <>
        <PageHeader eyebrow="Checkout" title="Secure Checkout" />
        <div className="mx-auto max-w-xl px-6 py-28 text-center">
          <p className="font-accent text-xl text-beige">
            Your bag is empty. Add a fragrance to continue.
          </p>
          <Link href="/shop" className="btn-gold mt-6">
            Explore Collection
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Checkout" title="Secure Checkout" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Stepper */}
        <div className="mb-12 flex items-center justify-center gap-2 sm:gap-4">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full border text-sm ${
                    i <= step
                      ? 'border-gold bg-gold text-background'
                      : 'border-gold/30 text-bronze'
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={`text-[0.6rem] uppercase tracking-[0.15em] ${
                    i <= step ? 'text-gold' : 'text-bronze'
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-px w-8 sm:w-16 ${
                    i < step ? 'bg-gold' : 'bg-gold/20'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]"
        >
          <div className="space-y-6">
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-ivory">Contact Details</h2>
                <Input
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  error={errors.email?.message}
                  {...register('email')}
                />
                <p className="text-sm text-bronze">
                  Already have an account?{' '}
                  <Link href="/account/login" className="text-gold hover:underline">
                    Log in
                  </Link>{' '}
                  for a faster checkout, or continue as a guest.
                </p>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-ivory">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="First Name" id="firstName" error={errors.firstName?.message} {...register('firstName')} />
                  <Input label="Last Name" id="lastName" error={errors.lastName?.message} {...register('lastName')} />
                </div>
                <Input label="Address" id="address" error={errors.address?.message} {...register('address')} />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="City" id="city" error={errors.city?.message} {...register('city')} />
                  <Input label="State" id="state" placeholder="QLD" error={errors.state?.message} {...register('state')} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Postcode" id="postcode" error={errors.postcode?.message} {...register('postcode')} />
                  <Input label="Country" id="country" error={errors.country?.message} {...register('country')} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-ivory">Payment</h2>
                <div className="grid grid-cols-3 gap-3">
                  {payIcons.map((p) => (
                    <div
                      key={p}
                      className="grid place-items-center border border-gold/20 bg-charcoal/40 py-3 text-xs text-beige"
                    >
                      {p}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button type="button" className="flex-1 bg-ivory py-3 text-sm font-semibold text-background">
                     Pay
                  </button>
                  <button type="button" className="flex-1 border border-gold/30 bg-charcoal py-3 text-sm text-ivory">
                    G Pay
                  </button>
                </div>
                <div className="flex items-center gap-3 text-bronze">
                  <div className="h-px flex-1 bg-gold/15" />
                  <span className="text-xs uppercase tracking-[0.15em]">Or pay by card</span>
                  <div className="h-px flex-1 bg-gold/15" />
                </div>
                <Input label="Name on Card" id="cardName" error={errors.cardName?.message} {...register('cardName')} />
                <div className="relative">
                  <Input label="Card Number" id="cardNumber" placeholder="1234 5678 9012 3456" error={errors.cardNumber?.message} {...register('cardNumber')} />
                  <CreditCard className="pointer-events-none absolute right-4 top-[2.6rem] h-5 w-5 text-gold/60" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry" id="expiry" placeholder="MM/YY" error={errors.expiry?.message} {...register('expiry')} />
                  <Input label="CVC" id="cvc" placeholder="123" error={errors.cvc?.message} {...register('cvc')} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-ivory">Review Your Order</h2>
                <ReviewRow label="Contact" value={getValues('email')} />
                <ReviewRow
                  label="Ship To"
                  value={`${getValues('firstName')} ${getValues('lastName')}, ${getValues('address')}, ${getValues('city')} ${getValues('state')} ${getValues('postcode')}, ${getValues('country')}`}
                />
                <ReviewRow
                  label="Payment"
                  value={`Card ending ${(getValues('cardNumber') || '').slice(-4)}`}
                />
                <div className="border border-gold/15 bg-charcoal/30 p-5">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex justify-between py-1 text-sm text-beige"
                    >
                      <span>
                        {item.product.name} ({item.size}) × {item.quantity}
                      </span>
                      <span>{formatPrice(item.unitPrice * item.quantity)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="text-sm text-gold hover:text-gold-light"
                >
                  ← Back
                </button>
              ) : (
                <Link href="/cart" className="text-sm text-gold hover:text-gold-light">
                  ← Return to Bag
                </Link>
              )}
              {step < steps.length - 1 ? (
                <Button type="button" onClick={next}>
                  Continue
                </Button>
              ) : (
                <Button type="submit">Place Order</Button>
              )}
            </div>
          </div>

          {/* Summary */}
          <aside className="h-fit border border-gold/20 bg-charcoal/40 p-7">
            <h2 className="font-serif text-2xl text-ivory">Summary</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-beige">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-beige">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between border-t border-gold/15 pt-4 font-serif text-xl text-gold">
                <span>Total</span>
                <span>{formatPrice(total + shipping)}</span>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-gold/15 pb-4">
      <p className="text-xs uppercase tracking-[0.2em] text-bronze">{label}</p>
      <p className="mt-1 text-ivory">{value}</p>
    </div>
  );
}
