import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message: string;
};

// Basic field validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ success: false, message: 'Please provide your name.' });
  }
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ success: false, message: 'Please provide a message (at least 10 characters).' });
  }

  // ── EMAIL DELIVERY ─────────────────────────────────────────────────────────
  // Option A (recommended for Vercel): Use Resend — sign up at resend.com,
  // get a free API key, and add RESEND_API_KEY to your Vercel environment variables.
  //
  // Uncomment the block below and run: npm install resend
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'Acadore Website <noreply@acadore.com>',
  //   to: ['hello@acadore.com'],
  //   subject: `New inquiry from ${name.trim()}`,
  //   html: `
  //     <p><strong>Name:</strong> ${name.trim()}</p>
  //     <p><strong>Email:</strong> ${email.trim()}</p>
  //     <p><strong>Company:</strong> ${company?.trim() || 'Not provided'}</p>
  //     <p><strong>Message:</strong><br/>${message.trim().replace(/\n/g, '<br/>')}</p>
  //   `,
  // });
  //
  // Option B: Use Formspree (zero code) — create a form at formspree.io,
  // copy the endpoint URL, and POST directly from the browser (remove this API route).
  // ─────────────────────────────────────────────────────────────────────────────

  // For now, log submission server-side and return success.
  // Replace this with one of the options above before going live.
  console.log('Contact form submission:', {
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || '',
    message: message.trim(),
    timestamp: new Date().toISOString(),
  });

  return res.status(200).json({
    success: true,
    message: 'Thank you — we will be in touch within one business day.',
  });
}
