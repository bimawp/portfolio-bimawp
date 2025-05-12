import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 fixed w-full top-0 z-50" role="navigation" aria-label="Navigasi utama">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a
          href="#hero"
          className="text-xl font-bold hover:text-green-400 transition-colors"
          title="Kembali ke Beranda"
        >
          Bima Wiryadi Praja
        </a>
        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li>
            <Link
              to="hero"
              smooth
              duration={500}
              className="cursor-pointer hover:text-green-400 transition-colors"
              title="Menuju beranda"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={500}
              className="cursor-pointer hover:text-green-400 transition-colors"
              title="Tentang Saya"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth
              duration={500}
              className="cursor-pointer hover:text-green-400 transition-colors"
              title="Baca Blog Saya"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth
              duration={500}
              className="cursor-pointer hover:text-green-400 transition-colors"
              title="Lihat Proyek Saya"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer hover:text-green-400 transition-colors"
              title="Hubungi Saya"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}