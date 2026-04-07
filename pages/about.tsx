import Link from 'next/link';
import { Meta } from '../components/Meta';

const values = [
  {
    title: 'Senior-Only Delivery',
    desc: 'Every project is staffed with professionals who have 10+ years of hands-on experience. We do not use junior staff or offshore resources on client work.',
  },
  {
    title: 'Data Stays Yours',
    desc: 'We work inside your environment. We do not copy, retain, or process your data on third-party infrastructure. NDA is standard on every engagement.',
  },
  {
    title: 'Honest Scoping',
    desc: 'We will tell you when a project is too small, too large, or not a good fit for our team. We would rather lose a deal than overpromise.',
  },
  {
    title: 'Outcomes, Not Hours',
    desc: 'Our proposals are outcome-based. You know what you are buying before we start — no ambiguous time-and-materials billing.',
  },
];

const credentials = [
  'AWS Certified Solutions Architect',
  'Azure Data Engineer Associate',
  'Google Professional Data Engineer',
  'Tableau Desktop Certified Professional',
  'Databricks Certified Associate Developer',
  'dbt Analytics Engineering Certification',
];

const industries = [
  'Financial Services',
  'Healthcare & Life Sciences',
  'E-commerce & Retail',
  'SaaS & Technology',
  'Logistics & Supply Chain',
  'Media & Advertising',
  'Real Estate',
  'Manufacturing',
];

export default function About() {
  return (
    <>
      <Meta
        title="About Us"
        description="Acadore Consulting is a senior data analytics and engineering team with 10+ years of experience serving US businesses across finance, healthcare, retail, and SaaS."
        url="/about"
      />

      {/* Header */}
      <section className="relative bg-navy-900 border-b border-navy-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-slate-100 mb-5 max-w-2xl">
            Built by practitioners, for practitioners
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Acadore was founded in 2014 by data engineers and analysts who were tired of seeing
            clients overpay for underskilled consulting teams. We set out to do it differently.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold text-slate-100 mb-6">
              A decade in the data trenches
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Acadore Consulting was founded with a simple conviction: companies deserve senior
                data expertise, not a bait-and-switch where a partner sells the work and a junior
                resource delivers it.
              </p>
              <p>
                Over 10 years, our team has delivered more than 200 data projects across financial
                services, healthcare, retail, and SaaS. We have processed petabytes of production
                data, built pipelines that process over 2 billion events per day, and helped 60+
                US companies go from data chaos to data clarity.
              </p>
              <p>
                We are a remote-first team based across the United States — available for both
                remote engagements and on-site collaboration for clients who need it.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="card">
              <p className="font-display text-4xl font-semibold text-gold-400 mb-1">2014</p>
              <p className="text-slate-400 text-sm">Year founded</p>
            </div>
            <div className="card">
              <p className="font-display text-4xl font-semibold text-gold-400 mb-1">200+</p>
              <p className="text-slate-400 text-sm">Projects successfully delivered</p>
            </div>
            <div className="card">
              <p className="font-display text-4xl font-semibold text-gold-400 mb-1">$4.2M+</p>
              <p className="text-slate-400 text-sm">In documented cost savings for clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="section-label">How We Work</p>
            <h2 className="font-display text-4xl font-semibold text-slate-100">Our Commitments</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="card">
                <div className="w-8 h-8 rounded bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-100 mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Industries */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="section-label">Credentials</p>
            <h2 className="font-display text-3xl font-semibold text-slate-100 mb-8">
              Team Certifications
            </h2>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-300 text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Experience</p>
            <h2 className="font-display text-3xl font-semibold text-slate-100 mb-8">
              Industries We Know
            </h2>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="bg-navy-800 border border-navy-600 text-slate-300 text-sm px-4 py-2 rounded-lg"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 border-t border-navy-700">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-4xl font-semibold text-slate-100 mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-slate-400 mb-8">
            We take on a limited number of new clients each quarter to maintain quality. Reach out
            now to check availability.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
