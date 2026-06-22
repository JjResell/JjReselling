import { PageHeader } from '@/components/ui/PageHeader';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

const faqs: AccordionItem[] = [
  {
    question: 'Are your fragrances authentic?',
    answer:
      'Absolutely. Every fragrance sold by House of Scents Brisbane is 100% authentic and sourced through authorised channels. We guarantee the genuineness of every bottle.',
  },
  {
    question: 'How long does shipping take within Australia?',
    answer:
      'We offer complimentary express shipping on all orders over $200 AUD. Standard delivery within Australia typically takes 2-4 business days. Brisbane metro orders are often delivered next day.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes. We ship to most international destinations. International delivery times and fees are calculated at checkout based on your location, typically arriving within 7-14 business days.',
  },
  {
    question: 'What is your returns policy?',
    answer:
      'We accept returns of unopened, unused products within 30 days of delivery for a full refund. For hygiene reasons, opened fragrances cannot be returned unless faulty. See our Returns page for full details.',
  },
  {
    question: 'How should I store my perfume?',
    answer:
      'Store your fragrance in a cool, dry place away from direct sunlight and heat. Keeping it in its original box helps preserve the composition. Properly stored, a fine fragrance can last several years.',
  },
  {
    question: 'Can I purchase a gift card?',
    answer:
      'Yes. Digital gift cards are available in a range of denominations and can be redeemed online or in our Fortitude Valley boutique. Please contact our concierge to arrange one.',
  },
  {
    question: 'Do you offer fragrance samples?',
    answer:
      'Selected fragrances are available as discovery samples. Visit our boutique or contact our concierge to arrange a sampling experience tailored to your preferences.',
  },
  {
    question: 'How can I contact your concierge?',
    answer:
      'Our fragrance concierge is available via concierge@houseofscentsbrisbane.com.au or by phone on +61 7 3000 1234, Monday to Saturday.',
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Everything you need to know about House of Scents Brisbane."
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Accordion items={faqs} />
        <p className="mt-12 text-center font-accent text-lg text-beige">
          Still have questions? Our concierge is here to help —{' '}
          <a
            href="/contact"
            className="text-gold hover:underline"
          >
            get in touch
          </a>
          .
        </p>
      </div>
    </>
  );
}
