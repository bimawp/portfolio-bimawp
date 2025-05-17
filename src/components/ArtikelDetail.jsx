import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function ArtikelDetail() {
  const { slug } = useParams();
  const url = `https://www.bimawiryadipraja.my.id/blog/${slug}`;

  useEffect(() => {
    window.location.href = url; // langsung redirect
  }, [url]);

  return (
    <>
      <Helmet>
        <title>Mengarahkan ke Blog – Bima Wiryadi Praja</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="p-10 text-center">
        <p className="text-lg">Mengarahkan ke blog: <strong>{slug}</strong>...</p>
      </div>
    </>
  );
}
