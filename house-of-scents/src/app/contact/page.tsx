'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Our fragrance concierge is at your service. We would be delighted to assist you."
      />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-ivory">Send a Message</h2>
            {sent ? (
              <div className="mt-6 border border-gold/30 bg-charcoal/40 p-8 text-center">
                <p className="font-serif text-xl text-gold">Thank you</p>
                <p className="mt-2 text-beige">
                  Your message has been received. We will respond within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-6 space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Input label="Name" id="name" required />
                  <Input label="Email" id="email" type="email" required />
                </div>
                <Input label="Subject" id="subject" required />
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-beige">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full border border-gold/20 bg-charcoal/60 px-4 py-3 text-ivory placeholder:text-beige/40 outline-none focus:border-gold"
                    placeholder="How may we help you?"
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-2xl text-ivory">Visit the Boutique</h2>
            <div className="space-y-5">
              <InfoRow icon={<MapPin className="h-5 w-5" />} title="Address">
                42 James Street, Fortitude Valley<br />Brisbane QLD 4006, Australia
              </InfoRow>
              <InfoRow icon={<Phone className="h-5 w-5" />} title="Phone">
                +61 7 3000 1234
              </InfoRow>
              <InfoRow icon={<Mail className="h-5 w-5" />} title="Email">
                concierge@houseofscentsbrisbane.com.au
              </InfoRow>
              <InfoRow icon={<Clock className="h-5 w-5" />} title="Hours">
                Mon – Sat: 10am – 6pm<br />Sunday: 11am – 4pm
              </InfoRow>
            </div>

            <div className="aspect-video w-full overflow-hidden border border-gold/20">
              <iframe
                title="House of Scents Brisbane location"
                src="https://www.google.com/maps?q=Fortitude+Valley+Brisbane&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center border border-gold/30 text-gold">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-bronze">{title}</p>
        <p className="mt-1 text-beige">{children}</p>
      </div>
    </div>
  );
}
