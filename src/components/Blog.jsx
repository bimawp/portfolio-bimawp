import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

export default function Blog() {
  const articles = [
    { slug: 'artikel-1', title: 'Portfolio Online Pentingnya', content: 'Portfolio online sangat penting untuk menampilkan karya dan pengalaman secara profesional...' },
    { slug: 'artikel-2', title: 'Kenalan dengan Tailwind CSS', content: 'Tailwind CSS adalah framework CSS utility-first yang memudahkan styling komponen...' },
    { slug: 'artikel-3', title: 'Animasi dengan Framer Motion', content: 'Framer Motion adalah pustaka animasi React yang powerful dan mudah digunakan...' },
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Blog Saya</h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {articles.map(({ slug, title, content }, idx) => (
          <motion.article
            key={idx}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">{content}</p>
            <Link
              to={`/article/${slug}`}
              className="inline-block mt-6 text-primary hover:text-primary-dark font-medium"
              aria-label={`Baca selengkapnya: ${title}`}
            >
              Baca Selengkapnya &rarr;
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
