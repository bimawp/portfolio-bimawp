// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => (
  <Helmet>
    <meta property="og:title" content="Bima Wiryadi Praja - Web Developer" />
    <meta property="og:description" content="Portofolio online Bima Wiryadi Praja, seorang web developer yang membuat berbagai proyek digital." />
    <meta property="og:image" content="https://www.bimawiryadipraja.my.id/images/logo.png" />
    <meta property="og:url" content="https://www.bimawiryadipraja.my.id/" />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default SEO;