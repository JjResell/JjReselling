import { PageHeader } from '@/components/ui/PageHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function PoliciesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Fine Print"
        title="Policies"
        description="Privacy, terms and the principles that govern our house."
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <ContentSection title="Privacy Policy">
          <p>
            House of Scents Brisbane is committed to protecting your privacy in
            accordance with the Australian Privacy Principles under the Privacy Act
            1988 (Cth). We collect personal information solely to process your
            orders, provide customer service and, with your consent, share news of
            new arrivals.
          </p>
          <p>
            We never sell your personal information to third parties. Payment data is
            encrypted and processed securely; we do not store full card details on
            our servers.
          </p>
        </ContentSection>

        <ContentSection title="Terms of Service">
          <p>
            By accessing and purchasing from houseofscentsbrisbane.com.au, you agree
            to these terms. All product descriptions, prices and availability are
            subject to change without notice. Prices are listed in Australian
            Dollars (AUD) and include GST where applicable.
          </p>
          <p>
            We reserve the right to refuse or cancel any order at our discretion,
            including in cases of suspected fraud or pricing errors.
          </p>
        </ContentSection>

        <ContentSection title="Cookies">
          <p>
            Our website uses cookies to enhance your browsing experience, remember
            your bag and wishlist, and analyse site traffic. By continuing to use our
            site, you consent to our use of cookies. You may disable cookies in your
            browser settings, though some features may be affected.
          </p>
        </ContentSection>

        <ContentSection title="Intellectual Property">
          <p>
            All content on this website — including imagery, text, logos and design —
            is the property of House of Scents Brisbane and is protected by copyright
            law. Reproduction without written permission is prohibited.
          </p>
        </ContentSection>

        <ContentSection title="Consumer Guarantees">
          <p>
            Our goods come with guarantees that cannot be excluded under the
            Australian Consumer Law. You are entitled to a replacement or refund for
            a major failure and to compensation for any other reasonably foreseeable
            loss or damage.
          </p>
        </ContentSection>

        <ContentSection title="Contact">
          <p>
            For any questions regarding these policies, please contact us at
            concierge@houseofscentsbrisbane.com.au or +61 7 3000 1234.
          </p>
        </ContentSection>
      </div>
    </>
  );
}
