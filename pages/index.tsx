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
    icon: '01',
    title: 'Data Strategy & Governance',
    desc: 'Align data goals directly with revenue and risk outcomes. We define ownership, compliance, and roadmap — built for your business, not a template.',
  },
  {
    icon: '02',
    title: 'Data Engineering',
    desc: 'Production-grade pipelines, cloud warehouses (Snowflake, BigQuery, Redshift), and ETL infrastructure that scales without breaking.',
  },
  {
    icon: '03',
    title: 'Business Intelligence',
    desc: 'Dashboards in Power BI, Tableau, and Looker that give your leaders real-time answers. No SQL required.',
  },
  {
    icon: '04',
    title: 'Advanced Analytics & AI',
    desc: 'ML models, forecasting engines, and AI automation that surface insights your team would otherwise miss — delivered production-ready.',
  },
  {
    icon: '05',
    title: 'Privacy & Compliance',
    desc: 'GDPR, CCPA, and SOC 2 controls implemented and documented — before regulators require it.',
  },
  {
    icon: '06',
    title: 'Data Monetization',
    desc: 'Turn your data assets into new revenue streams through data products, licensing, and insight services.',
  },
];

const testimonials = [
  {
    quote: 'Acadore rebuilt our entire reporting stack in 8 weeks. We went from weekly Excel reports to live dashboards that our board now relies on every Monday.',
    name: 'Sarah K.',
    role: 'VP of Operations',
    company: 'Mid-size US Retailer',
  },
  {
    quote: 'Their data engineering team cut our pipeline costs by 40% while improving reliability from 94% to 99.8% uptime. Exceptional work.',
    name: 'Marcus T.',
    role: 'CTO',
    company: 'Series B SaaS Company',
  },
  {
    quote: "We've worked with three consultancies before Acadore. None of them understood our data the way this team did from day one.",
    name: 'Jennifer L.',
    role: 'Chief Data Officer',
    company: 'Healthcare Analytics Firm',
  },
];

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        description="Acadore Consulting — Expert data analytics and engineering team with 10+ years of experience helping US businesses turn data into measurable competitive advantage."
        url="/"
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm" aria-hidden="true" />
        {/* Blue glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] opacity-20 blur-3xl pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(ellipse, #3636E8 0%, transparent 70%)' }} aria-hidden="true" />
        {/* Blue glow top-left */}
        <div className="absolute top-0 left-0 w-[500px] h-[400px] opacity-10 blur-3xl pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(ellipse, #4B4BFF 0%, transparent 70%)' }} aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-brand/10 border border-blue-brand/30 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
              Data Consultancy · Est. 2014 · US-focused
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              Your Data,<br />
              <span className="text-blue-bright">Engineered</span> for Growth
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Acadore Consulting is a senior-only data analytics and engineering team with 10+ years
              of experience. We help US businesses reduce costs, accelerate decisions, and build
              data infrastructure that actually works.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Get a Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/case-studies" className="btn-outline text-base px-8 py-4">
                View Case Studies
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['GDPR Compliant', 'CCPA Compliant', 'SOC 2 Aligned', 'NDA-Protected', 'AWS & Azure Certified'].map((badge) => (
                <span key={badge}
                  className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="bg-blue-brand">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-extrabold text-white mb-2">{value}</p>
                <p className="text-white/70 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="section-label">What We Do</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white max-w-xl leading-tight">
                Empower Your Business with World-Class Data Services
              </h2>
              <p className="text-white/50 max-w-sm md:text-right">
                We cover the full data lifecycle so your team can focus on the business.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {services.map(({ icon, title, desc }) => (
              <div key={icon} className="bg-navy-900 p-8 hover:bg-navy-800 transition-colors duration-300 group">
                <span className="font-display text-4xl font-extrabold text-blue-brand/30 group-hover:text-blue-brand/60 transition-colors duration-300 block mb-5">
                  {icon}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn-primary">
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ACADORE ── bright blue section like Hexaware ── */}
      <section className="bg-blue-brand">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Why Acadore</p>
              <h2 className="font-display text-4xl font-extrabold text-white mb-6 leading-tight">
                Senior talent only — no juniors on your project
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Every engagement at Acadore is staffed exclusively with senior analysts and engineers
                averaging 12 years of hands-on experience. No handoff to junior resources.
                No learning on your budget.
              </p>
              <ul className="space-y-4">
                {[
                  'Dedicated point-of-contact for every project',
                  'Transparent weekly reporting and delivery milestones',
                  'Work under NDA — your data never leaves your environment',
                  'Fixed-scope or retainer — no surprise billing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm">{item}</span>
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
                <div key={label} className="card-on-blue text-center">
                  <p className="font-display text-3xl font-extrabold text-white mb-1">{value}</p>
                  <p className="text-white/60 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="section-label">Client Results</p>
            <h2 className="font-display text-4xl font-extrabold text-white">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, company }) => (
              <div key={name} className="card flex flex-col">
                <div className="w-8 h-1 bg-blue-brand mb-6" />
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">&ldquo;{quote}&rdquo;</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{role} · {company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────── */}
      <section className="bg-navy-800 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="section-label">Ready to Start?</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-5">
            Let&apos;s talk about your data
          </h2>
          <p className="text-white/50 mb-10">
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
