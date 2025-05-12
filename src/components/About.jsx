import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-20 px-6 bg-gradient-to-r from-gray-600 to-gray-800 text-gray-100"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 id="about-heading" className="text-4xl font-extrabold tracking-wide drop-shadow">
          Tentang Saya
        </h2>
        <article className="text-lg space-y-4">
          <p>
            Halo, saya <strong>Bima Wiryadi Praja</strong>, mahasiswa Sistem Informasi di STMIK Mardira Indonesia yang memiliki minat besar dalam dunia pengembangan web dan teknologi informasi.
          </p>
          <p>
            Dalam perjalanan akademik saya, saya membekali diri dengan keterampilan teknis, terutama dalam front-end menggunakan React.js, Next.js, dan Tailwind CSS.
          </p>
        </article>
        <p className="text-xl text-gray-300">
          Saya percaya bahwa desain dan teknologi yang tepat dapat menciptakan solusi berdampak positif bagi penggunanya.
        </p>
      </div>
    </motion.section>
  );
}
