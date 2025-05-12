import { motion } from 'framer-motion';

export default function Blog() {
  const articles = [
    { title: 'Artikel 1', content: 'Isi artikel pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Artikel 2', content: 'Isi artikel kedua. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
  ];

  return (
    <section id="blog" className="min-h-screen bg-gray-200 text-gray-900 py-16 px-4 sm:px-8" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="blog-heading" className="text-4xl font-bold text-center mb-12">Blog Saya</h2>
        <div className="space-y-8">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold">{article.title}</h3>
              <p className="mt-4 text-base text-gray-700">{article.content}</p>
              <a href="#hero" className="mt-6 inline-block px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300">
                Kembali ke Beranda
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
