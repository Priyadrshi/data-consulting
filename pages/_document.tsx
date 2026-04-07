import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Acadore Consulting',
    url: 'https://www.acadore.com',
    description: 'Data analytics and engineering consultancy with 10+ years of experience serving US businesses.',
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    contactPoint: { '@type': 'ContactPoint', email: 'hello@acadore.com', contactType: 'customer service' },
    sameAs: ['https://www.linkedin.com/company/acadore-consulting'],
  };

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#3636E8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Plus Jakarta Sans + DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
