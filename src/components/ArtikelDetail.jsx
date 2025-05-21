import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from './SEO';

export default function ArtikelDetail() {
  const { slug } = useParams();
  const url = `https://www.bimawiryadipraja.my.id/blog/${slug}`;

  useEffect(() => {
    window.location.href = url; // langsung redirect
  }, [url]);

  return (
    <>
      <SEO
        title="Mengarahkan ke Blog – Bima Wiryadi Praja"
        description={`Mengarahkan ke blog: ${slug}`}
        url={url}
        image="https://www.bimawiryadipraja.my.id/profil1.webp"
      />
      <div className="p-10 text-center">
        <p className="text-lg">Mengarahkan ke blog: <strong>{slug}</strong>...</p>
      </div>
    </>
  );
}
