import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // ikon dari lucide, opsional

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0" role="navigation" aria-label="Navigasi utama">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <a
          href="#hero"
          className="text-xl font-bold hover:text-green-400 transition-colors"
          title="Kembali ke Beranda"
        >
          Bima Wiryadi Praja
        </a>

        {/* Tombol hamburger mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          {["Beranda", "Tentang", "Blog", "Project", "Kontak"].map((label, i) => {
            const to = ["hero", "about", "blog", "projects", "contact"][i];
            return (
              <li key={to}>
                <Link
                  to={to}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-green-400 transition-colors"
                  title={`Menuju ${label}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4">
          <ul className="flex flex-col space-y-4 font-medium text-gray-700">
            {["Beranda", "Tentang", "Blog", "Project", "Kontak"].map((label, i) => {
              const to = ["hero", "about", "blog", "projects", "contact"][i];
              return (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    onClick={closeMenu}
                    className="cursor-pointer block hover:text-green-400 transition-colors"
                    title={`Menuju ${label}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
