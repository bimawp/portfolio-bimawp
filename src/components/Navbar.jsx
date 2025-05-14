'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollLinks = [
    { label: 'Beranda', to: 'hero' },
    { label: 'Tentang', to: 'about' },
    { label: 'Blog', to: 'blog' },
    { label: 'Project', to: 'projects' },
    { label: 'Kontak', to: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0" role="navigation" aria-label="Navigasi utama">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold hover:text-green-400 transition-colors"
          title="Kembali ke Beranda"
        >
          Bima Wiryadi Praja
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          {scrollLinks.map(({ label, to }) => (
            <li key={to}>
              {isHomePage ? (
                <a
                  href={`#${to}`}
                  className="cursor-pointer hover:text-green-400 transition-colors"
                  title={`Menuju ${label}`}
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={`/#${to}`}
                  className="cursor-pointer hover:text-green-400 transition-colors"
                  title={`Kembali ke ${label}`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/tugas"
              className="hover:text-green-400 transition-colors"
              title="Menuju halaman tugas"
            >
              Tugas
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4">
          <ul className="flex flex-col space-y-4 font-medium text-gray-700">
            {scrollLinks.map(({ label, to }) => (
              <li key={to}>
                {isHomePage ? (
                  <a
                    href={`#${to}`}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-green-400 transition-colors"
                    title={`Menuju ${label}`}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={`/#${to}`}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-green-400 transition-colors"
                    title={`Kembali ke ${label}`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/tugas"
                onClick={() => setIsOpen(false)}
                className="block hover:text-green-400 transition-colors"
                title="Menuju halaman tugas"
              >
                Tugas
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
