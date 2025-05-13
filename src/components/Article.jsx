// src/components/Article.jsx
import { useParams, Link } from 'react-router-dom';

export default function Article() {
  const { slug } = useParams();

  const articles = {
    'artikel-1': {
      title: 'Artikel 1',
      content: 'Isi lengkap dari artikel 1...',
    },
    'artikel-2': {
      title: 'Artikel 2',
      content: 'Isi lengkap dari artikel 2...',
    },
  };

  const article = articles[slug];

  if (!article) {
    return <div className="p-10 text-center">Artikel tidak ditemukan</div>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700">{article.content}</p>

      <Link
        to="/"
        className="mt-8 inline-block text-blue-600 hover:underline"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
