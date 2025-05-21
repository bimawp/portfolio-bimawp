import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export default function Blog() {
  const articles = [
    { slug: 'artikel-1', title: 'Artikel 1', content: 'Portfolio online sangat penting untuk menunjukkan karya kita sebagai web developer...' },
    { slug: 'artikel-2', title: 'Artikel 2', content: 'Tailwind CSS adalah framework utility-first yang membantu developer membangun UI dengan cepat...' },
    { slug: 'artikel-3', title: 'Artikel 3', content: 'Framer Motion adalah pustaka animasi untuk React yang powerful namun mudah digunakan...' },
  ];

  return (
    <>
      <section id="blog" className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Blog Saya</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white rounded-lg shadow"
            >
              <h3 className="text-2xl font-semibold">{a.title}</h3>
              <p className="mt-4 text-gray-700">{a.content}</p>
              <Link
                to={`/article/${a.slug}`}
                aria-label={`Baca selengkapnya tentang ${a.title}`}
                className="mt-6 inline-block px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                Baca Selengkapnya →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
