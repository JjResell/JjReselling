import { PageHeader } from '@/components/ui/PageHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function ShippingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Delivery"
        title="Shipping Information"
        description="Considered delivery, befitting your fragrance."
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <ContentSection title="Domestic Shipping (Australia)">
          <p>
            We offer complimentary express shipping on all Australian orders over
            $200 AUD. For orders under this amount, a flat express rate of $15 AUD
            applies.
          </p>
          <p>
            Standard delivery within Australia takes 2-4 business days. Brisbane
            metropolitan orders placed before 12pm are frequently delivered the
            next business day.
          </p>
        </ContentSection>

        <ContentSection title="International Shipping">
          <p>
            House of Scents Brisbane ships to most international destinations.
            Shipping fees and estimated delivery times are calculated at checkout
            based on your destination, typically arriving within 7-14 business days.
          </p>
          <p>
            Please note that international orders may be subject to customs duties
            and import taxes levied by the destination country. These charges are
            the responsibility of the recipient.
          </p>
        </ContentSection>

        <ContentSection title="Order Processing">
          <p>
            Orders are carefully prepared and dispatched within 1-2 business days.
            Each fragrance is wrapped and packaged to arrive in pristine condition,
            befitting its character.
          </p>
        </ContentSection>

        <ContentSection title="Tracking Your Order">
          <p>
            Once your order is dispatched, you will receive a confirmation email
            containing your tracking number. You may also view order status from
            your account dashboard at any time.
          </p>
        </ContentSection>

        <ContentSection title="Restricted Items">
          <p>
            Due to aviation regulations, fragrances are classified as dangerous
            goods and are shipped via approved ground and sea freight where
            required. This may affect delivery times to remote destinations.
          </p>
        </ContentSection>
      </div>
    </>
  );
}
