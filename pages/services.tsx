import Link from 'next/link';
import { Meta } from '../components/Meta';

const services = [
  {
    number: '01',
    title: 'Data Strategy & Governance',
    summary: 'A clear data strategy prevents wasted spend and misaligned priorities.',
    description:
      'We work with your leadership team to define a practical data roadmap — one that ties directly to revenue, cost reduction, or risk mitigation. This includes data ownership models, metadata management, quality frameworks, and compliance alignment with SOC 2, CCPA, and GDPR.',
    deliverables: [
      'Data maturity assessment (2–4 weeks)',
      'Prioritized data roadmap (3–5 year horizon)',
      'Governance policies and ownership matrix',
      'Compliance gap analysis (SOC 2, CCPA, GDPR)',
      'KPIs and success metrics definition',
    ],
    tools: ['dbt', 'Apache Atlas', 'Collibra', 'AWS Glue Catalog'],
  },
  {
    number: '02',
    title: 'Data Engineering & Infrastructure',
    summary: 'Reliable pipelines are the foundation of every good analytics program.',
    description:
      'Our engineers design and build scalable data infrastructure — ingestion pipelines, transformation layers, cloud data warehouses, and real-time streaming systems. We work across AWS, Azure, and GCP and specialize in cost-efficient architectures that grow with your business.',
    deliverables: [
      'End-to-end ETL/ELT pipelines',
      'Cloud data warehouse setup (Snowflake, BigQuery, Redshift)',
      'Real-time streaming (Kafka, Kinesis)',
      'Data quality monitoring and alerting',
      'Infrastructure-as-code (Terraform)',
    ],
    tools: ['Apache Spark', 'dbt', 'Airflow', 'Snowflake', 'Kafka', 'Terraform'],
  },
  {
    number: '03',
    title: 'Business Intelligence & Reporting',
    summary: 'Turn your data warehouse into decisions your leadership team actually uses.',
    description:
      'We design, build, and deploy BI dashboards that answer real business questions — inventory turns, cohort retention, CAC payback, margin by SKU. We train your internal team so the knowledge stays with you long after the engagement ends.',
    deliverables: [
      'Executive and operational dashboards',
      'Self-service reporting layer for analysts',
      'Semantic data model (metrics definitions)',
      'Report migration from legacy tools',
      'Internal training and documentation',
    ],
    tools: ['Power BI', 'Tableau', 'Looker', 'Metabase', 'Apache Superset'],
  },
  {
    number: '04',
    title: 'Advanced Analytics & AI',
    summary: 'Predictive models and AI that surface opportunities your team would otherwise miss.',
    description:
      'From churn prediction to demand forecasting, our data science team builds ML models that are production-ready, monitored, and explainable. We do not deliver Jupyter notebooks — we deliver systems that your team can run and trust.',
    deliverables: [
      'Custom ML model development and validation',
      'Forecasting models (revenue, demand, inventory)',
      'Customer segmentation and LTV modeling',
      'Anomaly detection and alerting systems',
      'MLOps setup (versioning, retraining, monitoring)',
    ],
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'MLflow', 'SageMaker', 'Vertex AI'],
  },
  {
    number: '05',
    title: 'Data Privacy & Compliance',
    summary: 'Protect your clients and your business — before regulators require it.',
    description:
      'We audit your data flows, identify PII exposure risks, and implement controls that satisfy GDPR, CCPA, and SOC 2 requirements. Every engagement includes documentation that your legal and compliance teams can reference during audits.',
    deliverables: [
      'Data inventory and PII mapping',
      'Privacy impact assessments',
      'Data retention and deletion policies',
      'CCPA / GDPR compliance controls',
      'Audit-ready documentation package',
    ],
    tools: ['OneTrust', 'BigID', 'AWS Macie', 'Vault (HashiCorp)'],
  },
];

export default function Services() {
  return (
    <>
      <Meta
        title="Services"
        description="Acadore Consulting offers end-to-end data services — strategy, engineering, BI, AI, and privacy compliance — for US businesses."
        url="/services"
      />

      {/* Page Header */}
      <section className="relative bg-navy-900 border-b border-navy-700 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-60"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label">What We Do</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-slate-100 mb-5 max-w-2xl">
            Services Built Around Your Data
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Every engagement is scoped around your specific business problem — not a pre-packaged
            service catalog. Here is what we cover.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-8">
          {services.map(({ number, title, summary, description, deliverables, tools }) => (
            <div
              key={number}
              className="card grid md:grid-cols-[1fr_1.6fr] gap-10 items-start"
            >
              {/* Left */}
              <div>
                <span className="font-display text-6xl font-semibold text-navy-600 select-none">
                  {number}
                </span>
                <h2 className="font-display text-2xl font-semibold text-slate-100 mt-2 mb-3">
                  {title}
                </h2>
                <p className="text-gold-400 text-sm font-medium mb-4">{summary}</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-navy-700 text-slate-400 border border-navy-600 px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div>
                <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
                <h4 className="text-slate-200 font-semibold text-sm mb-3 uppercase tracking-wider">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-gold-400 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-300 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 border-t border-navy-700">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-4xl font-semibold text-slate-100 mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-slate-400 mb-8">
            Book a free 30-minute discovery call. We&apos;ll listen first, then recommend the right
            starting point for your situation.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
