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
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrabold tracking-wide drop-shadow">
          Tentang Saya
        </h2>
        <div className="text-lg space-y-4 text-gray-100">
          <p>
            Halo, saya <strong>Bima Wiryadi Praja</strong>, mahasiswa Sistem Informasi di Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Mardira Indonesia yang memiliki minat besar dalam dunia pengembangan web dan teknologi informasi...
          </p>
          <p>
            Dalam perjalanan akademik dan praktikum saya, saya telah membekali diri dengan berbagai keterampilan teknis, terutama dalam pengembangan front-end menggunakan React.js, Next.js, dan Tailwind CSS...
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl text-gray-300">
            Saya percaya bahwa desain dan teknologi yang tepat dapat membantu menciptakan solusi yang membawa dampak positif bagi penggunanya...
          </p>
        </div>
      </div>
    </motion.section>
  );
}