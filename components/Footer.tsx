import Link from 'next/link';

const services = [
  'Data Strategy & Governance',
  'Data Engineering',
  'Business Intelligence',
  'Advanced Analytics & AI',
  'Privacy & Compliance',
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-blue-brand flex items-center justify-center rounded-sm">
                <span className="text-white font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Acadore <span className="text-blue-400 font-light">Consulting</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Senior data analytics and engineering experts helping US businesses transform data into competitive advantage.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs text-white/40">Available for new engagements</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/50 text-sm hover:text-white transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-widest">Trust & Security</h4>
            <div className="space-y-3 mb-6">
              {['GDPR Compliant', 'CCPA Compliant', 'SOC 2 Type II Aligned', 'NDA-ready engagements'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/50 text-xs">{badge}</span>
                </div>
              ))}
            </div>
            <a href="mailto:hello@acadore.com" className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200">
              hello@acadore.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Acadore Consulting LLC. All rights reserved.</p>
          <p className="text-white/30 text-xs">Serving clients across the United States &mdash; Remote & On-site</p>
        </div>
      </div>
    </footer>
  );
}
