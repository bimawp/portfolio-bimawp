// components/Tugas.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Tugas() {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Daftar Tugas</h1>
      <ul className="space-y-4">
        <li>
          <Link
            to="/tugas/Tugas1"
            className="block text-blue-500 hover:text-blue-700 transition-colors text-lg text-center md:text-left"
          >
            Tugas 1: Logika First Order
          </Link>
        </li>
        <li>
          <Link
            to="/tugas/Tugas2"
            className="block text-blue-500 hover:text-blue-700 transition-colors text-lg text-center md:text-left"
          >
            Tugas 2: Menuliskan Ekspresi dalam Logika
          </Link>
        </li>
        <li>
          <Link
            to="/tugas/3"
            className="block text-blue-500 hover:text-blue-700 transition-colors text-lg text-center md:text-left"
          >
            Tugas 3: Konversi Kalimat ke Logika
          </Link>
        </li>
        {/* Tambahkan tugas lainnya sesuai kebutuhan */}
      </ul>
    </div>
  );
}
