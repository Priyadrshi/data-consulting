import Link from 'next/link';
import { Meta } from '../components/Meta';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '60+', label: 'US Clients Served' },
  { value: '$4.2M+', label: 'Cost Savings Delivered' },
  { value: '98%', label: 'Client Retention Rate' },
];

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: 'Data Strategy & Governance',
    desc: 'Define your data roadmap, ownership structures, and compliance frameworks. We align data goals directly with P&L outcomes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Data Engineering',
    desc: 'Build production-grade pipelines, cloud warehouses (Snowflake, BigQuery, Redshift), and ETL infrastructure that scales with your business.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Business Intelligence',
    desc: 'Interactive dashboards in Power BI, Tableau, and Looker that give your executives and teams real-time answers — no SQL required.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Advanced Analytics & AI',
    desc: 'Machine learning models, forecasting engines, and AI-powered automation that surface insights your analysts couldn\'t find manually.',
  },
];

const testimonials = [
  {
    quote:
      'Acadore rebuilt our entire reporting stack in 8 weeks. We went from weekly Excel reports to live dashboards that our board now relies on every Monday.',
    name: 'Sarah K.',
    role: 'VP of Operations',
    company: 'Mid-size US Retailer',
  },
  {
    quote:
      'Their data engineering team cut our pipeline costs by 40% while improving reliability from 94% to 99.8% uptime. Exceptional work.',
    name: 'Marcus T.',
    role: 'CTO',
    company: 'Series B SaaS Company',
  },
  {
    quote:
      'We\'ve worked with three consultancies before Acadore. None of them understood our data the way this team did from day one.',
    name: 'Jennifer L.',
    role: 'Chief Data Officer',
    company: 'Healthcare Analytics Firm',
  },
];

const trustBadges = [
  'GDPR Compliant',
  'CCPA Compliant',
  'SOC 2 Type II Aligned',
  'NDA-Protected Engagements',
  'AWS & Azure Certified',
];

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        description="Acadore Consulting — Expert data analytics and engineering team with 10+ years of experience. We help US businesses turn data into measurable competitive advantage."
        url="/"
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-100"
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #D4A843 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="section-label">Data Consultancy · Est. 2014</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-100 leading-tight mb-6">
              Your Data,{' '}
              <span className="text-gold-400">Engineered</span>{' '}
              for Growth
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Acadore Consulting is a senior-only data analytics and engineering team with 10+ years
              of experience. We help US businesses reduce costs, accelerate decisions, and build
              data infrastructure that actually works.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/case-studies" className="btn-outline">
                View Case Studies
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-3 mt-12">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs text-slate-400 bg-navy-800 border border-navy-700 px-3 py-1.5 rounded-full"
                >
                  <svg className="w-3.5 h-3.5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section className="bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-semibold text-gold-400 mb-2">
                  {value}
                </p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="section-label">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-100 mb-4">
            End-to-End Data Services
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From strategy through to production infrastructure — we cover the full data lifecycle so your team can focus on the business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="card flex gap-5">
              <div className="text-gold-400 mt-1 shrink-0">{icon}</div>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-100 mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">
            See All Services
          </Link>
        </div>
      </section>

      {/* ── WHY ACADORE ───────────────────────────────── */}
      <section className="bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Why Acadore</p>
              <h2 className="font-display text-4xl font-semibold text-slate-100 mb-6">
                Senior talent only — no juniors on your project
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Every engagement at Acadore is staffed exclusively with senior data analysts and
                engineers. No handoff to junior resources, no learning on your budget. Our team
                averages 12 years of hands-on experience across industries including finance,
                healthcare, retail, and SaaS.
              </p>
              <ul className="space-y-4">
                {[
                  'Dedicated point-of-contact for every project',
                  'Transparent weekly reporting and delivery milestones',
                  'Work under NDA — your data never leaves your environment',
                  'Fixed-scope or retainer engagements — no surprise billing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Average Team Experience', value: '12 yrs' },
                { label: 'Avg. Project Delivery', value: '6 wks' },
                { label: 'Data Points Processed Daily', value: '2B+' },
                { label: 'Industries Served', value: '11+' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-navy-700 rounded-xl p-6 border border-navy-600 text-center">
                  <p className="font-display text-3xl font-semibold text-gold-400 mb-1">{value}</p>
                  <p className="text-slate-400 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="section-label">Client Results</p>
          <h2 className="font-display text-4xl font-semibold text-slate-100 mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, company }) => (
            <div key={name} className="card flex flex-col">
              <svg className="w-8 h-8 text-gold-400/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">{quote}</p>
              <div className="border-t border-navy-700 pt-4">
                <p className="text-slate-100 font-semibold text-sm">{name}</p>
                <p className="text-slate-500 text-xs mt-0.5">
                  {role} · {company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────── */}
      <section className="bg-navy-800 border-t border-navy-700">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="section-label">Ready to Start?</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-100 mb-5">
            Let&apos;s talk about your data
          </h2>
          <p className="text-slate-400 mb-10">
            Book a free 30-minute strategy call. No sales pitch — just an honest conversation about where your data is today and where it needs to be.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Schedule a Free Call
          </Link>
        </div>
      </section>
    </>
  );
}
