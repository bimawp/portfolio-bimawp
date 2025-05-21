// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = "Bima Wiryadi Praja - Web Developer",
  description = "Portofolio online Bima Wiryadi Praja, seorang web developer yang membuat berbagai proyek digital.",
  image = "https://www.bimawiryadipraja.my.id/profil1.jpg",
  url = "https://www.bimawiryadipraja.my.id/",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <link rel="canonical" href={url} />
  </Helmet>
);

export default SEO;