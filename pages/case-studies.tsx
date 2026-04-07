import Link from 'next/link';
import { Meta } from '../components/Meta';

const caseStudies = [
  {
    slug: 'retail-marketing-roi',
    tag: 'Analytics',
    title: 'Marketing ROI Increased 35% for National Retailer',
    summary:
      'A mid-size US retailer was spending $2.4M per year on digital marketing with no reliable attribution. We rebuilt their analytics stack, unified their customer data, and surfaced the 20% of campaigns driving 80% of revenue.',
    result: '+35% marketing ROI · 8-week delivery',
    industry: 'Retail',
  },
  {
    slug: 'supply-chain-optimization',
    tag: 'Engineering',
    title: 'Supply Chain Pipeline Cuts Stockouts by 50%',
    summary:
      'An e-commerce company was losing $1.2M annually to stockouts and overstock. We built an ML-powered inventory forecasting system using 3 years of historical sales, supplier lead times, and seasonality signals.',
    result: '50% fewer stockouts · $1.1M annual savings',
    industry: 'E-commerce',
  },
  {
    slug: 'healthcare-reporting-overhaul',
    tag: 'BI & Reporting',
    title: 'Healthcare Firm Eliminates 40 Hours of Weekly Reporting',
    summary:
      'A regional healthcare analytics company was manually compiling 14 Excel reports every week. We automated the entire reporting layer with a Snowflake + Power BI stack, freeing 40 analyst-hours per week.',
    result: '40 hrs/week saved · 3x faster board reporting',
    industry: 'Healthcare',
  },
  {
    slug: 'saas-churn-prediction',
    tag: 'AI & ML',
    title: 'SaaS Company Reduces Churn 22% with Predictive Model',
    summary:
      'A B2B SaaS company with 3,000 enterprise accounts had no early warning system for churning customers. We built a churn prediction model with 87% accuracy at 90-day horizon, enabling proactive customer success outreach.',
    result: '22% churn reduction · 87% model accuracy',
    industry: 'SaaS',
  },
  {
    slug: 'financial-data-warehouse',
    tag: 'Data Engineering',
    title: 'Financial Services Firm Consolidates 11 Data Sources',
    summary:
      'A financial advisory firm had critical business data siloed across Salesforce, QuickBooks, a legacy SQL Server, and 8 spreadsheets. We built a unified data warehouse on Redshift with a single source of truth for all reporting.',
    result: '11 sources → 1 warehouse · 99.9% pipeline uptime',
    industry: 'Financial Services',
  },
];

const tagColors: Record<string, string> = {
  Analytics: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Engineering: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'BI & Reporting': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'AI & ML': 'text-gold-400 bg-gold-400/10 border-gold-400/20',
  'Data Engineering': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
};

export default function CaseStudies() {
  return (
    <>
      <Meta
        title="Case Studies"
        description="Real results from Acadore Consulting — see how we have helped US businesses increase marketing ROI, cut costs, reduce churn, and streamline reporting."
        url="/case-studies"
      />

      {/* Header */}
      <section className="relative bg-navy-900 border-b border-navy-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label">Proven Results</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-slate-100 mb-5 max-w-2xl">
            Work that speaks in numbers
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            A sample of real engagements. All figures are verified — we document outcomes at project
            close with client sign-off.
          </p>
        </div>
      </section>

      {/* Case Study List */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-6">
          {caseStudies.map(({ slug, tag, title, summary, result, industry }) => (
            <article
              key={slug}
              className="card grid md:grid-cols-[1fr_auto] gap-8 items-start"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded border ${tagColors[tag] ?? 'text-slate-400 bg-navy-700 border-navy-600'}`}
                  >
                    {tag}
                  </span>
                  <span className="text-xs text-slate-500">{industry}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold text-slate-100 mb-3">
                  {title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{summary}</p>
                <p className="text-gold-400 text-sm font-semibold">{result}</p>
              </div>
              <div className="shrink-0 md:self-center">
                <Link
                  href="/contact"
                  className="btn-outline text-sm py-2 px-5 whitespace-nowrap"
                >
                  Ask About This
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 border-t border-navy-700">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-4xl font-semibold text-slate-100 mb-4">
            Want results like these?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us about your data challenge. We&apos;ll scope a solution and give you a clear
            picture of what outcomes are realistic.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
