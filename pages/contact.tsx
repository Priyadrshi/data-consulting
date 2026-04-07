import { useState, FormEvent } from 'react';
import { Meta } from '../components/Meta';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialForm: FormState = { name: '', email: '', company: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      <Meta
        title="Contact"
        description="Get in touch with Acadore Consulting for a free 30-minute data strategy consultation. We respond within one business day."
        url="/contact"
      />

      {/* Header */}
      <section className="relative bg-navy-900 border-b border-white/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 max-w-2xl">
            Let&apos;s talk about your data
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Fill in the form and we will respond within one business day. No sales pressure — just
            an honest conversation about your situation.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16">
          {/* Left — info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              What to expect
            </h2>
            <ul className="space-y-5">
              {[
                {
                  step: '01',
                  label: 'Tell us your challenge',
                  desc: 'Describe your data problem or goal in the form. The more detail, the better.',
                },
                {
                  step: '02',
                  label: 'We respond within 24 hrs',
                  desc: 'A senior team member (not a sales rep) will review your submission and follow up.',
                },
                {
                  step: '03',
                  label: 'Free 30-min discovery call',
                  desc: 'We listen first. Then we tell you honestly whether and how we can help.',
                },
                {
                  step: '04',
                  label: 'Clear, written proposal',
                  desc: 'If there is a fit, you receive a fixed-scope proposal with timeline and pricing.',
                },
              ].map(({ step, label, desc }) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-navy-600 w-8 shrink-0">
                    {step}
                  </span>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">{label}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 bg-navy-900 border border-white/5 rounded-xl">
              <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-3">
                Direct Contact
              </p>
              <a
                href="mailto:hello@acadore.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
              >
                hello@acadore.com
              </a>
              <p className="text-white/30 text-xs mt-2">
                Prefer email? Write to us directly — same 24-hour response commitment.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <div className="card text-center py-16">
                <div className="w-14 h-14 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Message received
                </h3>
                <p className="text-white/50 text-sm">
                  Thank you — a senior member of our team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                      Work Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    What can we help you with? <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your data challenge or goal. The more context you share, the more useful our first call will be."
                    className="input-field resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    {errorMessage}
                  </p>
                )}

                <div className="flex items-center justify-between pt-2">
                  <p className="text-white/30 text-xs">
                    Your information is never shared or sold.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
