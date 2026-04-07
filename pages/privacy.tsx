import { Meta } from '../components/Meta';

export default function Privacy() {
  return (
    <>
      <Meta
        title="Privacy Policy"
        description="Acadore Consulting Privacy Policy — how we collect, use, and protect your information."
        url="/privacy"
      />

      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="section-label">Legal</p>
        <h1 className="font-display text-4xl font-semibold text-slate-100 mb-3">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="prose prose-invert max-w-none space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">1. Overview</h2>
            <p>
              Acadore Consulting LLC (&ldquo;Acadore&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
              respects your privacy. This policy explains what information we collect when you visit
              acadore.com or engage our services, how we use it, and your rights regarding that
              information.
            </p>
            <p className="mt-3">
              We do not sell, rent, or trade personal data. We collect only what is necessary to
              respond to your inquiries and deliver our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Contact information you submit via our contact form (name, email, company name, message)</li>
              <li>Basic analytics data (page views, referral source, browser type) via privacy-first analytics</li>
              <li>Information you provide during a discovery call or client engagement</li>
            </ul>
            <p className="mt-3">
              We do not use advertising cookies or cross-site tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Respond to your inquiry or project request</li>
              <li>Deliver contracted data consulting services</li>
              <li>Improve the content and performance of our website</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures including TLS encryption in transit,
              access controls, and regular security reviews. All client project data is processed
              exclusively within environments you control — we do not copy or store client data
              on Acadore infrastructure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">5. GDPR & CCPA Rights</h2>
            <p>
              If you are a resident of the European Economic Area or California, you have the
              right to access, correct, or request deletion of the personal information we hold
              about you. To exercise any of these rights, email us at{' '}
              <a href="mailto:privacy@acadore.com" className="text-gold-400 hover:text-gold-300">
                privacy@acadore.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">6. Third-Party Services</h2>
            <p>
              This website is hosted on Vercel. We may use a third-party email delivery service
              to receive contact form submissions. We do not share your information with any third
              party for marketing or advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be posted on this
              page with a revised date. Continued use of our website after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-slate-100 mb-3">8. Contact</h2>
            <p>
              Questions about this policy? Email us at{' '}
              <a href="mailto:privacy@acadore.com" className="text-gold-400 hover:text-gold-300">
                privacy@acadore.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
