import { PageHeader } from '@/components/ui/PageHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function ReturnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Peace of Mind"
        title="Returns & Exchanges"
        description="Your satisfaction is the heart of our house."
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <ContentSection title="Our Returns Policy">
          <p>
            We want you to be entirely delighted with your purchase. Unopened and
            unused products may be returned within 30 days of delivery for a full
            refund or exchange.
          </p>
        </ContentSection>

        <ContentSection title="Hygiene & Opened Products">
          <p>
            For reasons of hygiene and product integrity, opened or used fragrances
            cannot be returned unless they are faulty or damaged. This is consistent
            with Australian Consumer Law regarding personal care products.
          </p>
        </ContentSection>

        <ContentSection title="Faulty or Damaged Items">
          <p>
            Should your fragrance arrive damaged or faulty, please contact our
            concierge within 7 days of receipt with your order number and a
            photograph of the issue. We will arrange a replacement or full refund at
            no cost to you.
          </p>
          <p>
            Nothing in this policy limits your rights under the Australian Consumer
            Law, including your right to a remedy for goods that are faulty or not
            as described.
          </p>
        </ContentSection>

        <ContentSection title="How to Initiate a Return">
          <p>
            To begin a return, email concierge@houseofscentsbrisbane.com.au with
            your order number and reason for return. Our team will provide a return
            authorisation and instructions within one business day.
          </p>
          <p>
            Returned items must be sent in their original, undamaged packaging.
            Return shipping costs are the responsibility of the customer unless the
            item is faulty.
          </p>
        </ContentSection>

        <ContentSection title="Refunds">
          <p>
            Approved refunds are processed to your original payment method within
            5-7 business days of our receiving the returned item. You will receive
            email confirmation once your refund has been issued.
          </p>
        </ContentSection>
      </div>
    </>
  );
}
