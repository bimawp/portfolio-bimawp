// src/components/Article.jsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from './SEO';

export default function Article() {
  const { slug } = useParams();

  const articles = {
    'artikel-1': {
      title: 'Cara Membuat Website Portfolio dengan React',
      date: '14 Mei 2025',
      description: 'Panduan membuat website portfolio modern dengan React, Tailwind CSS, dan Framer Motion.',
      image: 'https://www.bimawiryadipraja.my.id/profil1.jpg',
      content: (
        <>
          <p>
            Portfolio online sangat penting untuk menunjukkan karya kita sebagai web developer. Dalam artikel ini, saya akan membahas bagaimana membuat website portfolio menggunakan <strong>React.js</strong>, <strong>Tailwind CSS</strong>, dan <strong>Framer Motion</strong>.
          </p>
          <p>
            Langkah awal adalah membuat struktur dasar project menggunakan <code>Vite</code>, lalu menambahkan halaman seperti Home, Tentang Saya, Proyek, dan Blog.
          </p>
          <p>
            Setelah itu, kita bisa menggunakan Tailwind CSS untuk styling cepat dan konsisten, serta Framer Motion untuk menambahkan animasi halus saat halaman dimuat atau komponen muncul.
          </p>
          <p>
            Terakhir, deploy website kamu ke platform seperti Netlify atau Vercel agar bisa diakses online.
          </p>
        </>
      )
    },
    'artikel-2': {
      title: 'Mengapa Tailwind CSS Cocok untuk Developer Pemula',
      date: '15 Mei 2025',
      description: 'Alasan mengapa Tailwind CSS sangat cocok untuk developer pemula dan tips penggunaannya.',
      image: 'https://www.bimawiryadipraja.my.id/profil1.jpg',
      content: (
        <>
          <p>
            Tailwind CSS adalah framework utility-first yang membantu developer membangun UI dengan cepat. Bagi pemula, Tailwind sangat cocok karena kita bisa langsung melihat hasil dari setiap class yang digunakan.
          </p>
          <p>
            Tidak perlu berpikir tentang nama class seperti di CSS biasa. Misalnya, cukup tulis <code>bg-blue-500 text-white p-4</code> untuk membuat tombol biru dengan padding.
          </p>
          <p>
            Tailwind juga memiliki dokumentasi lengkap dan komunitas aktif yang sangat membantu pemula untuk belajar dengan cepat.
          </p>
          <p>
            Dengan menggunakan Tailwind, kamu bisa menghemat waktu styling dan lebih fokus ke logika aplikasi.
          </p>
        </>
      )
    },
    'artikel-3': {
      title: 'Mengenal Framer Motion untuk Animasi di React',
      date: '16 Mei 2025',
      description: 'Pengenalan Framer Motion, pustaka animasi powerful untuk React.',
      image: 'https://www.bimawiryadipraja.my.id/profil1.jpg',
      content: (
        <>
          <p>
            Framer Motion adalah pustaka animasi untuk React yang powerful namun mudah digunakan. Kamu bisa membuat animasi masuk, keluar, hover, bahkan gesture hanya dengan beberapa baris kode.
          </p>
          <p>
            Untuk memulai, cukup instal dengan <code>npm install framer-motion</code>, lalu bungkus elemen dengan <code>{`<motion.div>`}</code> dan tambahkan properti seperti <code>initial</code>, <code>animate</code>, dan <code>transition</code>.
          </p>
          <p>
            Contoh penggunaan animasi sederhana:
          </p>
          <pre>
            <code>
              {`<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />`}
            </code>
          </pre>
          <p>
            Framer Motion juga mendukung animasi saat komponen muncul dan hilang dari DOM menggunakan <code>AnimatePresence</code>, serta transisi layout yang halus menggunakan <code>layout</code> prop.
          </p>
          <p>
            Dengan Framer Motion, kamu bisa membuat website yang terasa lebih hidup dan interaktif tanpa perlu menulis CSS animasi manual.
          </p>
        </>
      )
    }
  };

  const article = articles[slug];

  if (!article) {
    return (
      <motion.div
        className="p-10 text-center text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Artikel tidak ditemukan.
      </motion.div>
    );
  }

  return (
    <>
      <SEO
        title={`${article.title} – Bima Wiryadi Praja`}
        description={article.description}
        image={article.image}
        url={`https://www.bimawiryadipraja.my.id/article/${slug}`}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 text-gray-800 min-h-screen py-16 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
          <p className="text-sm text-gray-500 mb-6">Ditulis pada {article.date}</p>
          <article className="space-y-5 text-lg leading-relaxed text-gray-700">
            {article.content}
          </article>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
}
