import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function Tugas() {
  const tugasList = [
    { path: '/tugas/Tugas1', title: 'Tugas 1: Logika First Order' },
    //{ path: '/tugas/Tugas2', title: 'Tugas 2: Menuliskan Ekspresi dalam Logika' },
    //{ path: '/tugas/3', title: 'Tugas 3: Konversi Kalimat ke Logika' },
    //{ path: '/tugas/4', title: 'Tugas 4: Konversi Kalimat ke Logika' },
    // Tambahkan tugas lainnya di sini
  ];

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <SEO
        title="Daftar Tugas – Bima Wiryadi Praja"
        description="Kumpulan tugas dan latihan logika komputer oleh Bima Wiryadi Praja. Klik untuk melihat detail dan pembahasan setiap tugas."
        url="https://www.bimawiryadipraja.my.id/tugas"
        image="https://www.bimawiryadipraja.my.id/profil1.webp"
      />
      <h1 className="text-3xl font-bold mb-8 text-center">Daftar Tugas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tugasList.map((tugas, index) => (
          <Link
            key={index}
            to={tugas.path}
            className="block border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white hover:bg-blue-50"
          >
            <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors text-center md:text-left">
              {tugas.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
