import Head from "next/head";

type MetaTypes = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  cover?: string;
  children?: React.ReactNode;
};

const Meta = ({ title, description, canonical, keywords, cover, children }: MetaTypes) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={`${title}`} />
    <meta property="og:description" content={`${description}`} />
    <meta property="og:image" content={cover} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonical} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={cover} />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="canonical" href={canonical} />
    {children}
  </Head>
);
export default Meta;
