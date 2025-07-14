import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFileAlt } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import SEO from './SEO';

export default function Tugas() {
  const tugasList = [
    {
      path: '/tugas/Tugas1',
      title: 'Tugas 1: Logika First Order',
      desc: 'Mengubah kalimat ke dalam bentuk logika FOL.',
    },
    {
      path: '/tugas/Tugas2',
      title: 'Tugas 2: Materi Jurnal Sistem Pakar',
      desc: 'Analisis dan ringkasan jurnal sistem pakar.',
    },
    {
      path: '/tugas/Tugas3',
      title: 'Tugas 3: Tes Kepribadian Sederhana',
      desc: 'Implementasi kuis untuk mengetahui tipe kepribadian.',
    },
    // Tambahkan tugas lainnya di sini
  ];

  return (
    <div className="pt-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SEO
        title="Daftar Tugas – Bima Wiryadi Praja"
        description="Kumpulan tugas dan latihan logika komputer oleh Bima Wiryadi Praja. Klik untuk melihat detail dan pembahasan setiap tugas."
        url="https://www.bimawiryadipraja.my.id/tugas"
        image="https://www.bimawiryadipraja.my.id/profil1.webp"
      />

      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 flex items-center justify-center gap-3">
        <FaRegFileAlt className="text-blue-500" /> Daftar Tugas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tugasList.map((tugas, index) => (
          <Link
            key={index}
            to={tugas.path}
            className="block p-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:bg-blue-50"
          >
            <h2 className="text-xl font-semibold text-gray-800 flex justify-between items-center mb-2">
              {tugas.title}
              <HiArrowNarrowRight className="text-blue-500" />
            </h2>
            <p className="text-sm text-gray-600">{tugas.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
