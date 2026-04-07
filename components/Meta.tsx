import Head from 'next/head';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SITE_NAME = 'Acadore Consulting';
const BASE_URL = 'https://www.acadore.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export function Meta({ title, description, image, url }: MetaProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
