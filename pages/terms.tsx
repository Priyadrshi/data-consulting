import { Meta } from '../components/Meta';

export default function Terms() {
  return (
    <>
      <Meta
        title="Terms of Service"
        description="Acadore Consulting Terms of Service"
        url="/terms"
      />

      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="section-label">Legal</p>
        <h1 className="font-display text-4xl font-semibold text-slate-100 mb-3">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">1. Agreement</h2>
            <p>
              By accessing acadore.com or engaging Acadore Consulting LLC (&ldquo;Acadore&rdquo;)
              for services, you agree to be bound by these Terms of Service. If you do not agree,
              please do not use this website or our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">2. Services</h2>
            <p>
              Acadore provides data analytics, data engineering, business intelligence, and related
              consulting services. The specific scope, deliverables, timeline, and fees for any
              engagement are defined in a separate Statement of Work or services agreement signed
              by both parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, and code — is the property
              of Acadore Consulting LLC and may not be reproduced without written permission.
              Deliverables created for clients under contract are governed by the intellectual
              property terms in the applicable Statement of Work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">4. Confidentiality</h2>
            <p>
              Acadore treats all client information as confidential. We are willing to execute a
              mutual NDA before any substantive discussion of your business or data. Contact us at{' '}
              <a href="mailto:hello@acadore.com" className="text-gold-400 hover:text-gold-300">
                hello@acadore.com
              </a>{' '}
              to request an NDA.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">5. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, Acadore&apos;s liability for any claim arising from
              services is limited to the fees paid by the client for the specific engagement giving
              rise to the claim. Acadore is not liable for indirect, consequential, or punitive
              damages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">6. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States. Any disputes will be
              resolved through binding arbitration under the rules of the American Arbitration
              Association.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">7. Contact</h2>
            <p>
              Questions about these Terms? Email{' '}
              <a href="mailto:hello@acadore.com" className="text-gold-400 hover:text-gold-300">
                hello@acadore.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
